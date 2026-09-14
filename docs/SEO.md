# SEO plan

## Audience and language

The first release targets Scandinavian businesses, international English-speaking clients, and local businesses in North Macedonia. All pages are in English. Regional copy describes availability; it does not claim offices or customers in places that have not been confirmed.

These phrases are initial targets based on Project 0's services and client intent. They are not validated search-volume estimates. Search Console data and actual enquiries should guide the next iteration.

| Page | Main search intent | Supporting phrases |
| --- | --- | --- |
| `/` | custom software development | software development company, software development partner |
| `/services/app-development/` | mobile app development | iOS and Android app development, cross-platform app development |
| `/services/backend-cloud/` | backend development services | API development, cloud infrastructure, software integrations |
| `/services/ai-machine-learning/` | AI development services | LLM integration, AI workflow automation, machine learning development |
| `/services/design-ux/` | UI and UX design services | product design, user research, interactive prototyping |
| `/services/digital-growth/` | digital growth and SEO services | technical SEO, website performance, growth strategy |
| `/services/technical-consulting/` | technical consulting | software architecture review, cloud cost optimization, technical strategy |

Potential regional query variations to assess after launch include “software development partner Scandinavia” and “software development company North Macedonia.” Do not make duplicate city/country pages simply to repeat these phrases. Use translated or regional pages only when they offer specific, useful content and can be maintained.

## Included in this release

- Complete HTML rendered at build time, including service copy and native links.
- One H1 per page; distinct page titles, descriptions, and descriptive service URLs.
- Canonical URLs under `https://proj0.io` and an XML sitemap of the eight indexable pages.
- Organization, WebSite, WebPage, Service and BreadcrumbList structured data where relevant. No fabricated reviews, ratings, addresses, or project outcomes.
- A branded 1200 × 630 social image, SVG and PNG favicons, and Open Graph/Twitter metadata.
- Self-hosted fonts, deferred JavaScript, reduced-motion support, keyboard controls, and layouts for desktop, tablet, and phone screens.
- A custom 404 page with `noindex`, retained legacy homepage anchors, and links between services and the contact section.

No analytics or tracking scripts were added. SEO metadata does not guarantee rankings or rich results.

## After launch

1. Confirm that the site, canonical URLs, and sitemap resolve on HTTPS at the final domain.
2. Verify ownership of `proj0.io` in Google Search Console using your account. Submit `https://proj0.io/sitemap.xml` and inspect the homepage plus the six service URLs.
3. Check the live pages with PageSpeed Insights and Google's Rich Results Test. The local build check validates the markup but does not measure field Core Web Vitals or Google's processing.
4. Review impressions, queries, countries, click-through rates, and enquiries over time. Prioritize pages attracting the right clients instead of chasing broad traffic counts.
5. Add approved case studies: the client's problem, Project 0's role, technical decisions, screenshots with permission, and measurable results that can be substantiated. Existing homepage figures came from the previous site; confirm they are current before launch.
6. Use actual demand to decide whether Macedonian, Albanian, or Scandinavian-language content is worth maintaining. Add reciprocal `hreflang` only once real translations exist.

## References

Google's [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) explains useful content, descriptive titles, crawlable links and search discovery. Its [Organization structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/organization) covers the organization and logo properties used here.
