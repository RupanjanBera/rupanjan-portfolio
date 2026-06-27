# Portfolio AI API (Vercel Free Tier)

Serverless backend for Portfolio AI on the static GitHub Pages site.

## One-time setup

1. Create a new project at [vercel.com](https://vercel.com) linked to this repo (root: `portfolio-ai-api`).
2. Add environment variable on Vercel:
   - `DEEPSEEK_API_KEY` — your key from [platform.deepseek.com](https://platform.deepseek.com/)
3. Add GitHub repository secrets (Settings → Secrets → Actions):
   - `VERCEL_TOKEN` — from Vercel → Settings → Tokens
   - `VERCEL_ORG_ID` — `team_2clRK4iCSGQ7uwCEll1d8VMw` (or your team ID)
   - `VERCEL_PROJECT_ID` — from the new Vercel project's settings
   - `PORTFOLIO_AI_API_URL` — `https://portfolio-ai-api-omega.vercel.app/api/portfolio-ai`
4. Push to `main` — GitHub Actions deploys the API automatically.

## Local test

```bash
cd portfolio-ai-api
npx vercel dev
```

## Endpoints

- `GET /api/portfolio-ai` — health check
- `POST /api/portfolio-ai` — chat (body: `{ "messages": [{ "role": "user", "content": "..." }] }`)