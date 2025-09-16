# proj0.io

A premium single-page portfolio site built with Jekyll Agency Theme, showcasing app development, cloud infrastructure, and digital growth services.

## 🚀 Quick Start

### Local Development

1. Install Jekyll and dependencies:
```bash
gem install jekyll bundler
bundle install
```

2. Run the development server:
```bash
bundle exec jekyll serve
```

3. Open http://localhost:4000 in your browser

### GitHub Pages Deployment

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source: Deploy from a branch
4. Choose branch: main (or master)
5. Select folder: / (root)
6. Save and wait for deployment

## 📝 Content Management

### Edit Services
Update services in `_data/sitetext.yml`:
```yaml
services:
  list:
    - title: "App development"
      desc: "iOS Android Web with smooth UI and reliable performance"
      icon: fas fa-mobile
```

### Edit Projects
Add new portfolio items in `_portfolio/` folder:
```markdown
---
title: Project Name
subtitle: Brief description
image: assets/img/portfolio/project.jpg
alt: Project image alt text

caption:
  title: Project Name
  subtitle: Category
  thumbnail: assets/img/portfolio/project.jpg
---

Project description here...
```

### Update Navigation
Edit navigation links in `_data/navigation.yml`:
```yaml
en:
  nav:
    - title: "Services"
      section: services
```

## 🎨 Customization

### Colors
Update brand colors in `_config.yml`:
```yaml
agency:
  theme: dark
  primary: "#F9E3A7"
  secondary: "#181727"
```

### Contact Form
1. Create a form at [Formspree](https://formspree.io)
2. Get your form ID
3. Update in `_config.yml`:
```yaml
formspree_form_path: "f/YOUR_FORM_ID"
```

## 🌐 Custom Domain Setup

### DNS Configuration
Add these A records to your domain:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Or use CNAME/ALIAS for root domain if supported.

### Enable HTTPS
1. Wait for DNS propagation (up to 24 hours)
2. Go to Settings > Pages
3. Check "Enforce HTTPS"

## 📁 Project Structure

```
proj0.io/
├── _config.yml          # Site configuration
├── _data/
│   ├── sitetext.yml     # Content (hero, services, etc.)
│   └── navigation.yml   # Navigation menu
├── _portfolio/          # Project markdown files
├── assets/
│   └── img/
│       ├── portfolio/   # Project images
│       ├── logo.png     # Site logo
│       └── favicon.png  # Site favicon
├── CNAME               # Custom domain
└── index.md            # Homepage
```

## 🔧 Common Tasks

### Add a New Project
1. Create markdown file in `_portfolio/projectname.md`
2. Add project image to `assets/img/portfolio/`
3. Follow the portfolio item template above

### Update Contact Info
Edit email in `_config.yml`:
```yaml
email: hello@proj0.io
```

### Change Hero Text
Edit in `_data/sitetext.yml`:
```yaml
header:
  title: We build the projects behind the projects
  text: App development • Cloud • Backend • Digital growth
```

## 📋 Maintenance

### Check Build Status
- View GitHub Actions tab for build status
- Common issues:
  - Invalid YAML syntax in config files
  - Missing images referenced in portfolio
  - Incorrect file paths

### Performance Optimization
- Keep images under 300KB
- Use JPEG for photos, PNG for graphics
- Add `loading="lazy"` to images when needed

## 🤝 Support

For theme-specific documentation, see:
- [Agency Jekyll Theme](https://github.com/raviriley/agency-jekyll-theme)

## 📄 License

Theme: MIT License (see theme repository)
Content: © proj0

---

**Note**: Remember to keep the CNAME file in the repository root for custom domain to work properly.