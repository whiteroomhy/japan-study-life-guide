# Japan Study & Life Guide

A multilingual static web application designed to guide international students through the preparation, arrival, daily life, and career phases of studying and living in Japan.

## Features

- **Multilingual Support:** Fully functional across Traditional Chinese (`zh-Hant`), Simplified Chinese (`zh-Hans`), Japanese (`ja`), and English (`en`), with language preferences preserved in `localStorage` and URL parameters.
- **Interactive Preparation Checklist:** Grouped checklist tracking application steps, document preparation, pre-departure tasks, and post-arrival administrative procedures with dynamic progress calculation and state persistence via `localStorage`.
- **Structured Four-Stage Guide:** 
  1. *Before You Study:* School types, application timelines, document preparation, and visa processes.
  2. *After Arrival:* Residence cards, resident registration, national health insurance, banking, and mobile setup.
  3. *Life in Japan:* Housing contracts, waste separation, healthcare, part-time work regulations (`資格外活動許可`), and disaster preparedness.
  4. *Graduation & Career:* Job-hunting timelines (`新卒`), résumé preparation, change of residence status, and departure procedures.
- **Transparent Information Sources:** Direct references and links to official Japanese government agencies and JASSO guidelines.
- **Responsive Design:** Mobile-friendly layouts and navigation with no external frameworks, CDNs, or build steps.

## Architecture & Technology Stack

- **Frontend Architecture:** Component rendering and client-side i18n routing implemented via Vanilla JavaScript (ES6+).
- **Styling:** CSS3 custom properties, responsive grid layouts, and media queries.
- **State Persistence:** Browser `localStorage` for language settings and checklist completion state.
- **CI/CD & Hosting:** Automated static deployment workflow via GitHub Actions and GitHub Pages.

## Project Structure

```text
├── index.html           # Home page & stage navigation
├── preparation.html     # Stage 1: Before studying in Japan
├── arrival.html         # Stage 2: After arrival procedures
├── life.html            # Stage 3: Daily life in Japan
├── career.html          # Stage 4: Graduation & career
├── checklist.html       # Interactive preparation checklist
├── sources.html         # Official information sources & references
├── team.html            # Project team attribution
├── js/
│   ├── app.js           # Core router, UI rendering, and event handlers
│   └── content.js       # Centralized multilingual content & data structures
├── css/
│   └── style.css        # Responsive styling & design system
├── assets/
│   └── logo.svg         # Project logo
└── .github/
    └── workflows/
        pages.yml        # GitHub Pages deployment workflow
```

## Getting Started

### Prerequisites

No build tools, package managers, or backend servers are required. To run a local development server, Python 3 is recommended.

### Local Development

1. Clone or download the repository.
2. Start a local HTTP server in the project root:

```bash
python -m http.server 8000
```

3. Open your browser and navigate to:

```text
http://localhost:8000
```

Alternatively, you can open `index.html` directly in any modern web browser.

## Deployment (GitHub Pages)

This repository includes a GitHub Actions workflow (`.github/workflows/pages.yml`) for automated static deployment:

1. Push the repository to GitHub.
2. Navigate to your repository **Settings → Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
4. The GitHub Actions workflow will automatically build and deploy the site on pushes to the `main` branch.

## Team Attribution

This project was developed as a collaborative student group project. Individual team member attributions are credited in the team section of the application.

## Known Limitations

- As a static frontend-only application, all data persistence relies on browser `localStorage` and does not synchronize across devices or user accounts.
- Content is provided as an informational reference summary and does not constitute formal legal, immigration, or medical advice.

## Disclaimer

Official procedures (visas, residence status, administrative registration, and medical guidance) are subject to change. Always verify current requirements with official Japanese government agencies, municipal offices, and educational institutions.
