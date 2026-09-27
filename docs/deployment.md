# Deployment

## Platform
Netlify, production site `sj-constructions-skipary`.

## URL
https://sj-constructions-skipary.netlify.app

## Source repository
https://github.com/SkipAry/SJ-Constructions-

Branch: `main`.

## Build and publish
`npm ci` then `npm run build`. Build output: `dist`. Node.js 22 is specified in `netlify.toml`.

## Deploy command
`netlify deploy --prod --dir=dist --no-build`

The initial launch uses the authenticated Netlify CLI. GitHub pushes do not automatically deploy until Git integration is enabled in Netlify.

## Environment variables
None required by the website. CLI login is stored outside the repository; `.netlify` and `.env` files are ignored.

## Rollback
In Netlify, open Deploys, select a previously successful production deploy, and choose Publish deploy.

## Custom domain
No custom domain is configured. Add an owned domain in Netlify Domain management when ready.
