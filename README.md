# Project 0 — proj0.io

The Project 0 marketing website, built with Jekyll and a small amount of plain JavaScript. Jekyll generates complete HTML for the homepage and service pages; the interactive illustrations, service tabs, menu, and contact form enhance it in the browser. No React or Next.js runtime is required for this site.

## Local development

Use a Ruby installation supported by the Jekyll version in `Gemfile`, with Bundler installed. The existing deployment workflow uses Ruby 3.2. Avoid macOS's legacy system Ruby.

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open `http://127.0.0.1:4000/`. Jekyll rebuilds when source files change; refresh the browser to see the result.

To check a production build (Python 3 is only needed for the validation script):

```sh
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter
python3 scripts/check-site.py _site
```

The check validates nine HTML pages, unique page titles and descriptions, canonical URLs, JSON-LD, the sitemap, internal links, anchors, local assets, and ARIA references. It does not submit the contact form or test live search rankings.

## Editing

| Content | Location |
| --- | --- |
| Homepage sections | `_includes/marketing/hero.html`, `expertise.html`, `approach.html`, `contact.html` |
| Service copy and illustrations' labels | `_data/services.json` |
| Service titles, descriptions and URLs | `services/*.md` |
| Service page structure | `_layouts/service.html` |
| Shared header and footer | `_includes/marketing/header.html`, `footer.html` |
| Styling and responsive layout | `assets/css/site.css` |
| Animation, service tabs and menu | `assets/js/site.js` |
| Contact validation and delivery | `assets/js/contact.js` |
| Domain, email and Formspree endpoint | `_config.yml` |
| Metadata and structured data | `_includes/head.html`, `_includes/marketing/structured-data.html` |
| Search and social assets | `sitemap.xml`, `robots.txt`, `assets/img/brand/`, `assets/img/og/` |

Edit a service's visible content in the JSON file and its search description in the matching Markdown file. Run the build and checks afterward. Fonts are self-hosted with their licenses in `assets/fonts/`.

## Contact form

The form uses the existing Formspree endpoint configured in `_config.yml`. It supports native POST without JavaScript; with JavaScript, it validates fields, prevents duplicate requests, waits for confirmed success, and preserves entered text on failure. A hidden honeypot helps catch basic spam. The endpoint is a public form identifier, not a secret key.

Local checks covered mocked success, provider errors, rate limiting, invalid responses, and network failures. Actual inbox delivery still needs an owner-submitted test and confirmation in the Formspree dashboard. No external test messages were sent during implementation.

## Deployment and SEO

The existing `.github/workflows/jekyll.yml` builds, checks, and publishes the site on pushes to `master`, or when you manually run the workflow. It uploads `_site` as a GitHub Pages artifact. This is an **Actions** deployment, not branch publishing from `docs/` or `_site/`.

The configured domain remains `proj0.io`; `CNAME` and DNS do not need a domain migration. See [Launch steps](docs/LAUNCH.md) and the [SEO plan](docs/SEO.md).

Legacy theme files remain in the source for reference. Unused scripts/styles and the old `tilt/` experiment are excluded from the published build. Existing homepage anchors `#services`, `#work`, and `#page-top` remain supported alongside the new navigation.
