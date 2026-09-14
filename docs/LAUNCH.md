# Launch handoff

Implementation date: 15 September 2026.

The source is deployed through the existing GitHub Actions workflow on pushes to `master`. Check the Actions run to confirm that a particular revision is live.

## Before you publish

1. Review the homepage, six service pages, mobile layout, and the existing company figures (10+ years, 20+ clients, 2M+ end users).
2. In Formspree, confirm that the existing `f/mdanqzdl` form belongs to your account, routes to the intended inbox, and allows submissions from `proj0.io`. Submit your own test and confirm it arrives. Local tests simulated responses only.
3. Review `legal.md` against the company's actual data practices and add the legal entity/retention information appropriate to the business. The page currently describes the implemented contact form and hosting, with the existing email address.
4. Run the production build and `python3 scripts/check-site.py _site` as documented in the README.

## Publish through your existing repository

1. Review the file changes locally and use your preferred Git client to commit and push them to `master` when ready.
2. In GitHub → Settings → Pages, the build source should be **GitHub Actions**. The custom domain should remain **proj0.io**.
3. Open Actions → **Deploy Jekyll site to Pages** and wait for the build, site checks, artifact upload, and deployment to pass. The workflow can also be started manually.
4. Open `https://proj0.io/` and test the navigation, hero layer buttons, service selectors, service pages, privacy page, and contact form on a phone and desktop.
5. Confirm `https://proj0.io/sitemap.xml`, `https://proj0.io/robots.txt`, and the social preview image load. Continue with the Search Console steps in `SEO.md`.

The workflow still uses the existing Ruby 3.2 setup and GitHub Pages deployment actions. The missing `id: pages` reference was fixed, strict front matter checking was enabled, and the local site validator now runs before upload.

## Rollback

Use your own Git workflow to restore the previous source revision and run the same deployment again. Keep the current custom domain and DNS settings. Do not upload this task's temporary dependency folders or the generated `_site` directory as source.
