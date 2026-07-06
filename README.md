# Plot Twist Wines

A single-page marketing website for **Plot Twist Wines** — a bookstore wine lounge on Anna Maria Island, FL. *Where every glass has a story.*

## Overview

A modern, elegant one-pager with a coastal-literary aesthetic: warm wine tones, gold accents, and a touch of Gulf teal. Built with vanilla HTML, CSS, and JavaScript — no build step, no dependencies.

## Sections

- **Hero** — full-screen intro with tagline and calls to action
- **Our Story** — the bookstore-meets-wine-bar origin
- **The Experience** — browse, sip, and gather
- **Wine List** — curated by-the-glass menu and flights
- **The Shelf** — staff book picks paired with pours
- **Events** — book club, wine flights, author nights
- **Visit** — location, hours, contact, and a reservation request form
- **Footer** — navigation, contact, and social links

## Features

- Responsive layout (desktop → mobile) with a hamburger menu
- Scroll-reveal animations via `IntersectionObserver`
- Sticky, color-shifting navigation
- Front-end reservation form with validation feedback
- Google Fonts (Fraunces + Jost); respects `prefers-reduced-motion`

## Run it

Just open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

```
index.html    — markup, content, and structured data
styles.css    — all styling and responsive rules
script.js     — nav, scroll reveal, reservation + notify forms
favicon.svg   — primary vector site icon (wine glass on a book)
favicon.ico   — multi-size (16/32/48) fallback for older browsers
favicon-16x16.png, favicon-32x32.png, favicon-48x48.png — PNG favicons
apple-touch-icon.png — 180x180 iOS home-screen icon
icon-192.png, icon-512.png — PWA / Android icons
logo-512.png, logo-1024.png — large square logos for social profiles & listings
logo-horizontal.svg / .png — horizontal wordmark lockup (wine text, for light backgrounds)
logo-horizontal-light.svg / .png — horizontal wordmark lockup (cream text, for dark backgrounds)
site.webmanifest — PWA manifest referencing the app icons
og-image.png  — 1200x630 social share image
robots.txt    — crawler directives (incl. AI/answer-engine bots)
sitemap.xml   — single-URL sitemap
```

## SEO / AEO

- **Meta:** canonical URL, Open Graph, Twitter Card, and geo tags in `<head>`.
- **Structured data:** `WineBar` (with `BookStore` additionalType) and a `FAQPage` JSON-LD block for rich results and answer-engine citations.
- **FAQ section:** native `<details>` accordions — crawlable with no JS.
- **Crawlers:** `robots.txt` explicitly welcomes GPTBot, PerplexityBot, ClaudeBot, etc., and points to `sitemap.xml`.

When you get a custom domain, update the absolute URLs in `index.html` (canonical, og:url, og:image, JSON-LD `url`/`@id`/`image`), `robots.txt`, and `sitemap.xml`.

## Notes

Hero and story imagery use gradients plus a couple of Unsplash photos (loaded via URL). Swap those for your own photography in `styles.css` (`.story__img--1`, `.story__img--2`). All copy, menu items, hours, and contact details are placeholders — update them with the real thing. Forms use a `mailto:` handoff (no backend); the destination is `hello@plottwistwines.com`.
