# Quantum Papers Aggregator

A fully automated, serverless research tool that collects and displays the latest academic papers in **quantum computing** and **spin qubits** from arXiv — refreshed every morning with zero manual effort.

**Live site:** [0xr101.github.io/my_personal_website](https://0xr101.github.io/my_personal_website/)

---

## Overview

Keeping up with the pace of quantum computing research is hard. New papers appear on arXiv every day across multiple categories, and manually checking them is time-consuming. This project solves that by automating the entire pipeline — from fetching raw data to displaying it in a clean, searchable interface — with no server, no database, and no ongoing cost.

---

## Features

- **Daily automated updates** — GitHub Actions fetches new papers every morning at 08:00 UTC and commits the results back to the repository automatically
- **Live search** — instantly filter papers by title, author, or abstract as you type
- **Category filtering** — quickly narrow results to `quant-ph` or `cond-mat` subfields
- **Sort controls** — order by newest, oldest, or alphabetical
- **LaTeX rendering** — mathematical equations in abstracts are rendered properly using KaTeX, so notation like $\hat{H} = \sum_i \sigma_i^z$ displays correctly in the browser
- **Light / dark mode** — toggle between themes with one click; preference is saved across sessions
- **Direct paper links** — every card links to the arXiv abstract page and PDF
- **Fully static** — no backend, no database, no server costs

---

## How It Works

The system has three components that hand off to each other in a chain:

### 1. The Fetcher (`fetch_papers.py`)

A pure Python script (no external dependencies) that:

1. Constructs a boolean search query targeting arXiv categories `quant-ph` and `cond-mat.mes-hall`
2. Filters by spin-qubit specific keywords such as `spin qubit`, `silicon spin qubit`, `quantum dot qubit`, and `singlet triplet qubit`
3. Calls the arXiv API and parses the XML response
4. Extracts the title, authors, abstract, publication date, and PDF link for each paper
5. Serializes everything to a lightweight `papers.json` file

### 2. The Automation Pipeline (`.github/workflows/fetch_papers.yml`)

A GitHub Actions workflow that:

- Triggers on a `cron` schedule every day at 08:00 UTC
- Can also be triggered manually from the Actions tab
- Spins up an Ubuntu environment and runs the fetcher script
- Commits the updated `papers.json` back to the repository using git

### 3. The Frontend (`index.html`)

A single static HTML file that:

- Loads `papers.json` asynchronously using the browser's `fetch` API
- Dynamically generates a card for each paper using vanilla JavaScript
- Filters and sorts the paper list in real time as the user interacts
- Renders LaTeX math in abstracts using the KaTeX library
- Supports light and dark themes, with the preference stored in `localStorage`

### Data Flow

```
arXiv API
    ↓
fetch_papers.py  →  papers.json
                          ↓
                     index.html  →  browser
                          ↑
               GitHub Pages serves it
                          ↑
               GitHub Actions updates it daily
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Data fetching | Python 3 standard library (`urllib`, `xml.etree`) |
| Automation | GitHub Actions (cron schedule) |
| Frontend | Vanilla HTML, CSS, JavaScript |
| Math rendering | KaTeX |
| Fonts | Google Fonts (DM Serif Display, JetBrains Mono, Outfit) |
| Hosting | GitHub Pages |
| Cost | $0 |

---

## Research Focus

The aggregator is configured specifically for **spin qubit** research, targeting papers that appear in:

- `quant-ph` — quantum physics, the primary category for quantum computing theory and experiment
- `cond-mat.mes-hall` — mesoscale and nanoscale physics, where spin qubit device experiments are published

Keywords include silicon spin qubits, germanium spin qubits, GaAs spin qubits, quantum dot qubits, singlet-triplet qubits, and two-qubit gate experiments — covering both the theoretical and experimental sides of the field.

---

## Project Structure

```
Papers_Aggregator/
├── index.html                        # Static frontend
├── fetch_papers.py                   # arXiv data fetcher
├── papers.json                       # Generated dataset (auto-updated by CI)
├── README.md                         # This file
└── .github/
    └── workflows/
        └── fetch_papers.yml          # GitHub Actions automation
```

---

## Running Locally

Requirements: Python 3.9 or later. No pip installs needed.

```bash
# 1. Fetch papers
python3 fetch_papers.py

# 2. Serve the site
python3 -m http.server 8080

# 3. Open in browser
# http://localhost:8080
```

---

## Deployment

The site is hosted on GitHub Pages and updates automatically:

1. Every day at 08:00 UTC, GitHub Actions runs `fetch_papers.py`
2. The updated `papers.json` is committed and pushed to `main`
3. GitHub Pages detects the new commit and rebuilds the site
4. The live site reflects the latest papers within minutes

---

*Built by [0xr101](https://0xr101.github.io/my_personal_website/)*
