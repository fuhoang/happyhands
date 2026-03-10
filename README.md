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
  health-and-safety/page.tsx      Health and Safety page
  employee-treatment/page.tsx     Employee Treatment page
  services/page.tsx               Services index
  services/[slug]/page.tsx        Service detail template
  case-studies/...                Case study pages

components/
  SiteHeader.tsx                  Shared global header
  SiteFooter.tsx                  Shared global footer
  BrandLogo.tsx                   Shared logo
  ServicesNavMenu.tsx             Services navbar dropdown
  PageHero.tsx                    Shared internal-page hero
  CtaBanner.tsx                   Shared CTA banner
  BlurText.tsx                    Homepage headline animation
  StarBorder.jsx                  Shared service card border effect

lib/
  services.ts                     Service content and routing data
  utils.ts                        Shared utility helpers
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

Current unit coverage focuses on shared layout and reusable sections.

Test files:

- [site-shell.test.tsx](/Users/fuhoang/Desktop/workspace/happy-hands/components/site-shell.test.tsx)
- [page-sections.test.tsx](/Users/fuhoang/Desktop/workspace/happy-hands/components/page-sections.test.tsx)
- [page.test.tsx](/Users/fuhoang/Desktop/workspace/happy-hands/app/health-and-safety/page.test.tsx)

Run tests with:

```bash
npm test
```

## CI/CD

GitHub Actions workflows live in `.github/workflows`.

- `ci.yml`: lint, test, build
- `deploy.yml`: Vercel deployment

Vercel deploy requires these repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Branching

This repo uses a Gitflow-style workflow with the required `codex/` prefix.

- `main`: production
- `codex/develop`: integration
- `codex/feature/...`: feature branches

Feature PR flow:

1. branch from `codex/develop`
2. open PR back into `codex/develop`
3. merge `codex/develop` into `main`

See [GITFLOW.md](/Users/fuhoang/Desktop/workspace/happy-hands/GITFLOW.md) for the detailed workflow.
