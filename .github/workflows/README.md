## CI/CD setup

This project uses GitHub Actions for:

- `CI`: runs `npm ci`, `npm run lint`, and `npm run build`
- `Deploy`: deploys `main` to Vercel

Required GitHub repository secrets for deploy:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
