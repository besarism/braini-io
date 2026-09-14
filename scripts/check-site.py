#!/usr/bin/env python3
"""Validate generated pages, SEO metadata, local links and assets. Standard library only."""
import json
import re
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
from xml.etree import ElementTree

root = Path(sys.argv[1] if len(sys.argv) > 1 else '_site').resolve()
base = sys.argv[2].rstrip('/') if len(sys.argv) > 2 else 'https://proj0.io'
base_path = urlsplit(base).path.rstrip('/')
errors = []

def check(value, message):
    if not value:
        errors.append(message)

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.tags = []
        self.ids = []
        self.json = []
        self.json_text = None
        self.title = ''
        self.in_title = False
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        self.tags.append((tag, a))
        if a.get('id'): self.ids.append(a['id'])
        if tag == 'title': self.in_title = True
        if tag == 'script' and a.get('type') == 'application/ld+json': self.json_text = ''
    def handle_data(self, text):
        if self.in_title: self.title += text
        if self.json_text is not None: self.json_text += text
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script' and self.json_text is not None:
            self.json.append(self.json_text)
            self.json_text = None
    def meta(self, name):
        return [a.get('content', '') for tag, a in self.tags if tag == 'meta' and (a.get('name') == name or a.get('property') == name)]

def resolve_url(url):
    path = unquote(urlsplit(url).path)
    if base_path and path.startswith(base_path + '/'):
        path = path[len(base_path):]
    candidate = root / path.lstrip('/')
    if candidate.is_dir(): candidate /= 'index.html'
    if not candidate.exists() and candidate.with_suffix('.html').exists(): candidate = candidate.with_suffix('.html')
    return candidate

files = sorted(root.rglob('*.html'))
check(len(files) == 9, f'Expected homepage, six services, privacy and 404; found {len(files)} HTML pages')
pages = {file: Page(file.read_text()) for file in files}
titles, descriptions, canonicals = [], [], []
for file, page in pages.items():
    name = str(file.relative_to(root))
    check(sum(tag == 'h1' for tag, _ in page.tags) == 1, f'{name}: expected one H1')
    check(not [k for k, v in Counter(page.ids).items() if v > 1], f'{name}: duplicate IDs')
    check(bool(page.title.strip()), f'{name}: missing title')
    description = page.meta('description')
    check(len(description) == 1 and bool(description[0]), f'{name}: missing description')
    canonical = [a['href'] for tag, a in page.tags if tag == 'link' and a.get('rel') == 'canonical']
    check(len(canonical) == 1 and canonical[0].startswith(base + '/'), f'{name}: bad canonical')
    if not canonical: continue
    check(resolve_url(canonical[0]) == file, f'{name}: canonical points at a different page')
    check(page.meta('og:url') == canonical, f'{name}: OG URL differs from canonical')
    check(bool(page.meta('og:image')) and resolve_url(page.meta('og:image')[0]).exists(), f'{name}: social image missing')
    check(page.meta('twitter:card') == ['summary_large_image'], f'{name}: missing Twitter card')
    noindex = 'noindex' in ' '.join(page.meta('robots'))
    if not noindex:
        check(bool(page.json), f'{name}: missing structured data')
        titles.append(page.title); descriptions += description; canonicals += canonical
    for data in page.json:
        try:
            graph = json.loads(data)['@graph']
            types = [item['@type'] for item in graph]
            check('Organization' in types and 'WebSite' in types and 'WebPage' in types, f'{name}: incomplete graph')
            if name.startswith('services/'):
                check('Service' in types and 'BreadcrumbList' in types, f'{name}: missing service schema')
        except (ValueError, KeyError, TypeError) as exc:
            errors.append(f'{name}: invalid JSON-LD: {exc}')
    for tag, attrs in page.tags:
        for attribute in ('href', 'src'):
            value = attrs.get(attribute)
            if not value: continue
            target = urljoin(canonical[0], value)
            parts = urlsplit(target)
            if parts.scheme not in ('http', 'https') or parts.netloc != urlsplit(base).netloc: continue
            destination = resolve_url(target)
            check(destination.exists(), f'{name}: broken {attribute} {value}')
            if parts.fragment and destination in pages:
                check(unquote(parts.fragment) in pages[destination].ids, f'{name}: missing anchor {value}')
        for attribute in ('aria-controls', 'aria-labelledby', 'aria-describedby'):
            if attribute in attrs:
                for identifier in attrs[attribute].split():
                    check(identifier in page.ids, f'{name}: unresolved {attribute}={identifier}')
    check('{{' not in file.read_text() and '{%' not in file.read_text(), f'{name}: unrendered Liquid')
for values, label in ((titles, 'titles'), (descriptions, 'descriptions'), (canonicals, 'canonicals')):
    check(len(set(values)) == len(values), f'Duplicate {label}')

try:
    sitemap = ElementTree.parse(root / 'sitemap.xml')
    urls = [node.text for node in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    check(set(urls) == set(canonicals) and len(urls) == len(canonicals), 'Sitemap must match the eight indexable canonical pages')
except (OSError, ElementTree.ParseError) as exc:
    errors.append(f'Invalid sitemap: {exc}')
check(f'Sitemap: {base}/sitemap.xml' in (root / 'robots.txt').read_text(), 'robots.txt sitemap URL is incorrect')
check((root / 'CNAME').read_text().strip() == 'proj0.io', 'Custom domain changed')
for css in (root / 'assets/css').glob('*.css'):
    for link in re.findall(r'url\([\s\'\"]*([^\)\'\"]+)', css.read_text()):
        if not link.startswith(('data:', 'http')):
            check((css.parent / link.strip()).resolve().exists(), f'Missing CSS asset: {link}')
if errors:
    print('\n'.join('FAIL: ' + e for e in errors))
    sys.exit(1)
print(f'PASS: {len(files)} pages; {len(canonicals)} unique indexable URLs; links, anchors, assets, metadata, JSON-LD and sitemap.')
