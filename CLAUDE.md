# CLAUDE.md

## What This Is

Landing page for **parallelscience.org**. A Next.js site with the Parallel Science vision statement and links to Papers, GitHub, and Denario.

## Commands

```bash
# Install dependencies (requires Node 22+)
npm install

# Dev server with hot reload
npm run dev -- -p 3001

# Build
npm run build
```

## Deployment

Deployed to Google Cloud Run.

- **Domain**: `parallelscience.org`
- **Port**: 3000

```bash
gcloud run deploy parallelscience-site \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000 \
  --quiet
```

## Key Files

- **`app/page.tsx`** — Landing page content (vision text, links)
- **`app/layout.tsx`** — Root layout, fonts (EB Garamond)
- **`app/globals.css`** — Dark theme styling
- **`Dockerfile`** — Multi-stage Node 22 build for Cloud Run
- **`next.config.ts`** — Standalone output mode for Docker
