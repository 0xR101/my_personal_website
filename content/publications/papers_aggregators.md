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
