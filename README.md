# IMO Core website

Website for the **IMO Core (Integrated Multi-Omics Core Facility)**, part of the Core Technology Platforms at NYU Abu Dhabi.

The site is plain static HTML, CSS and JavaScript with no build step, so it can be hosted on GitHub Pages or any web server and edited directly.

## Pages

| Page | File | Content |
|---|---|---|
| Home | `index.html` | Hero, service areas, core services, upcoming courses, news, quick links |
| About | `about.html` | Mission, scientific objectives, how we work, team, user community, collaboration |
| Services | `services.html` | Proteomics & MS, Metabolomics & Lipidomics, Genomics, Bioinformatics, Molecular characterization, Sample preparation |
| Technologies | `technologies.html` | Applications-first guide mapping research questions to techniques and platforms |
| Instruments | `instruments.html` | Instrument cards: SCIEX QTRAP 7500+, timsTOF, FT-ICR MS, NMR, genomics platforms, other systems |
| Bioinformatics | `bioinformatics.html` | Data-analysis services and experimental-design consultation |
| Training & Workshops | `training.html` | Upcoming training, course catalogue (18 courses), annual multi-omics workshop |
| Submit a Project | `submit-project.html` | Project consultation form (research question, sample type, number of samples, desired analysis, expected outcome) |
| Resources | `resources.html` | SOPs, sample-prep guidelines, submission requirements, manuals, videos, publications, FAQs, acknowledgement text |
| Contact | `contact.html` | Consultation booking, training registration, contact details, visiting information |

## Structure

```
index.html, about.html, ...     one file per page
assets/css/style.css            all styling (responsive, mobile navigation)
assets/js/main.js               contact details, mobile menu, project form
assets/img/                     logo, favicon, hero background (SVG)
.github/workflows/deploy-pages.yml   GitHub Pages deployment
```

## Before going live

1. **Contact details** - edit the `SITE` object at the top of `assets/js/main.js` (email, phone, location). The email address there (imo.core@nyu.edu) should be confirmed before launch.
2. **Project form** - by default the form on `submit-project.html` opens a pre-filled email in the visitor's mail client. To send submissions to a form service or ticketing system instead, set the `action` attribute on `<form id="project-form">` and the script will stand aside.
3. **Upcoming training dates** - the dates on the home page and training page are the example dates from the planning document; update them in both `index.html` and `training.html`.
4. **News items** - the three announcements on the home page and resources page are placeholders.
5. **Team profiles, instrument specifications and resource documents** - marked "coming soon" and intended to be filled in by the core.

## Hosting on GitHub Pages

1. In the repository go to **Settings -> Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the "Deploy to GitHub Pages" workflow manually). The site is published at `https://nyuad-core-technology-platforms.github.io/mpm-core-website/`.

All links are relative, so the site also works from a sub-path or a custom domain (add a `CNAME` file for a custom domain).

## Local preview

```
python3 -m http.server 8000
```
then open http://localhost:8000.
