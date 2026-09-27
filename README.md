# SJ Constructions

Responsive company website based on the visual composition of the supplied Wilmer landing-page reference, adapted to SJ Constructions content and supplied imagery.

## Run

- `npm install`
- `npm run dev` (local development)
- `npm run build` (TypeScript validation and production files in `dist`)
- `npm run preview` (serve production build)

## Features

Full-width video hero using the supplied hero_video.mp4, scroll reveals, individual video pause controls, expandable services, project category filters, accessible native project dialogs, company brochure, click-to-call contacts, maps and WhatsApp enquiry preparation. The form creates a review link; it does not send messages or store enquiries on a server.

## Content

Source details and conflicts are in `docs/company-content.md`. User confirmed contacts: Office 1 Shrigonda, Office 2 Model Colony. The latest request adds the complete PDF equipment inventory; the earlier screenshot inventory remains in a labeled disclosure. The original downloadable PDF still includes its differing Nigdi address and larger inventory. All website imagery comes from original project-folder images or stills from its videos. No PDF-extracted pictures are used. Four folder video clips autoplay muted and loop inline, without card/player frames. Videos pause when off-screen or when the visitor uses a pause control. Media is illustrative because project-specific attribution was not supplied. See `docs/media-sources.md` for provenance. Project completion is historical profile data, not live tracking. Update company data in `src/main.ts`; styling in `src/style.css`.

## Deployment

Upload `dist` to a static host after build. No secrets, server or environment variables required. Google Fonts requires network access; local fallback sans-serif remains available. This is a custom adaptation, not the licensed Wilmer WordPress theme or an exact reproduction of every theme demo.

## Detailed portfolio

All five projects include client, location, excavation scope, individual contract value, duration and reported completion. Interactive bars switch between completion and value. KPI totals are derived from project data (₹5.15 Cr, 83% average, 4 of 5 at ≥80%). All 11 PDF equipment rows and five staff-role rows are included. The PDF’s team total discrepancy (29 stated vs 63 in listed roles) is disclosed, not silently reconciled.

## Readability and device layouts

Main copy scales from 17px on phones to 19px on wide screens. Controls use 16px text, form fields remain above 16px, and supporting notes are 14–15px. Touch controls are at least 44px. The mobile hero uses normal grid flow; the navigation collapses below 900px. On phones, the same semantic project table reflows into labeled records, retaining all five projects and every value. Offices stack, and narrow phones show single-column video and team layouts.

Layout verified at 320, 375, 430, 768, 1024, 1440 and 1920 CSS-pixel widths with no page-level horizontal overflow. Tablet tables may scroll within their own region. Responsive overrides live in `src/responsive.css`.

## Video hero

Only the hero is redesigned, using an optimised, muted copy of root `hero_video.mp4` with a poster fallback and pause control. Hero styles are scoped in `src/refinement.css`. The previous typography, colours, spacing, service imagery, photographic project cards and decorative elements remain across the rest of the site. Existing readability and mobile improvements remain in `src/responsive.css`.
