# Happy Hands

Happy Hands is a Next.js website for a cleaning services business. It includes a marketing homepage, service detail pages, case studies, company information pages, and shared site-wide navigation and footer components.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Vitest + Testing Library
- GitHub Actions
- Vercel deployment

## Local development

Install dependencies and start the app:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm test
```

## Project structure

```text
app/
  page.tsx                         Home page
  about/page.tsx                  About page
  contact/page.tsx                Contact page
  join-us/page.tsx                Recruitment page
  health-and-safety/page.tsx      Health and Safety page
  employee-treatment/page.tsx     Employee Treatment page
  services/page.tsx               Services index
  services/[slug]/page.tsx        Service detail template
  case-studies/...                Case study index and detail pages
  api/quote-request/route.ts      Quote request API
  api/cleaner-application/route.ts Recruitment API

components/
  layout/                         Shared site shell and page layout components
  ui/                             Shared UI primitives and form controls
  animations/                     Shared animation helpers
  contact/                        Quote request form and contact sections
  recruitment/                    Cleaner recruitment content and form
  services/                       Shared service page sections
  case-studies/                   Shared case study sections

lib/
  services.ts                     Service content and routing helpers
  case-studies.ts                 Case study content and routing helpers
  recruitment.ts                  Recruitment content and config
  site-content.ts                 Shared site copy and social link data
  forms.ts                        Shared form constants
  api.ts                          Shared API helpers
```

## Shared UI rules

The site has been refactored to reduce repetition.

- Use [SiteHeader.tsx](/Users/fuhoang/Desktop/workspace/happy-hands/components/SiteHeader.tsx) for top navigation.
- Use [SiteFooter.tsx](/Users/fuhoang/Desktop/workspace/happy-hands/components/SiteFooter.tsx) for footer navigation and social links.
- Use [PageHero.tsx](/Users/fuhoang/Desktop/workspace/happy-hands/components/PageHero.tsx) for internal page hero sections.
- Use [CtaBanner.tsx](/Users/fuhoang/Desktop/workspace/happy-hands/components/CtaBanner.tsx) for shared bottom CTA sections.
- Use the shared heading classes in [globals.css](/Users/fuhoang/Desktop/workspace/happy-hands/app/globals.css):
  - `site-h2`
  - `site-h2-lg`
  - `site-h2-contrast`
  - `site-h3`
  - `site-footer-h3`

If you add a new page, the expected default is:

1. `SiteHeader`
2. `PageHero`
3. page-specific content sections
4. `CtaBanner`
5. `SiteFooter`

## Services content

Service routes are data-driven from [services.ts](/Users/fuhoang/Desktop/workspace/happy-hands/lib/services.ts).

To add or update a service:

1. edit the relevant object in `lib/services.ts`
2. update `title`, `summary`, `intro`, `body`, and `heroImage`
3. the service index and dynamic service page will update automatically

## Testing

Current test coverage includes:

- shared layout and page shell components
- shared form UI primitives
- quote request and recruitment form flows
- quote request and recruitment API routes
- case studies index and shared case study page behavior
- selected page-level integration tests for `contact` and `join-us`

Run tests with:

```bash
npm test
```

## Environment variables

Application forms and deployment require environment variables.

Local development:

1. copy `.env.example` to `.env.local`
2. set the required values
3. restart the dev server after changes

Form/email variables:

- `RESEND_API_KEY`
- `QUOTE_REQUEST_TO_EMAIL`
- `QUOTE_REQUEST_FROM_EMAIL`
- `RECRUITMENT_TO_EMAIL`
- `RECRUITMENT_FROM_EMAIL`

Notes:

- `QUOTE_REQUEST_FROM_EMAIL` must be a verified Resend sender/domain
- `RECRUITMENT_FROM_EMAIL` should also be a verified sender/domain
- if `RECRUITMENT_FROM_EMAIL` is omitted in runtime config, the recruitment route can fall back to the quote sender depending on route logic

Deployment variables and secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Recommended production setup:

1. add the form env vars in Vercel project settings
2. add the Vercel deployment secrets in GitHub Actions repo secrets
3. keep `.env.local` local only and never commit it

## CI/CD

GitHub Actions workflows live in `.github/workflows`.

- `ci.yml`: lint, test, build
- `deploy.yml`: Vercel deployment

Vercel deploy requires these repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Resend-backed forms require environment variables in the runtime environment:

- `RESEND_API_KEY`
- `QUOTE_REQUEST_TO_EMAIL`
- `QUOTE_REQUEST_FROM_EMAIL`
- `RECRUITMENT_TO_EMAIL`
- `RECRUITMENT_FROM_EMAIL`

## Branching

This repo uses a Gitflow-style workflow with the required `codex/` prefix.

- `main`: production
- `codex/develop`: integration
- `codex/feature/...`: feature branches

Feature PR flow:

1. branch from `codex/develop`
2. open PR back into `codex/develop`
3. merge `codex/develop` into `main`
4. open `main` back into `codex/develop` for parity

See [GITFLOW.md](/Users/fuhoang/Desktop/workspace/happy-hands/GITFLOW.md) for the detailed workflow.
