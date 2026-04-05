# Parallel Science

Landing page for [parallelscience.org](https://parallelscience.org).

## Development

Requires Node 22+.

```bash
npm install
npm run dev -- -p 3001
```

## Deployment

Deployed to Google Cloud Run:

```bash
gcloud run deploy parallelscience-site \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000 \
  --quiet
```
