# Gitflow for this project

This project uses a Gitflow-style workflow adapted to the repository branch rules.

## Long-lived branches

- `main`
  - Production-ready branch
  - Only merged, reviewed work should land here

- `codex/develop`
  - Integration branch for ongoing work
  - Feature branches should branch from here and merge back here first

## Supporting branch naming

- `codex/feature/<name>`
  - New features and enhancements
  - Example: `codex/feature/services-section-update`

- `codex/release/<name>`
  - Release preparation
  - Example: `codex/release/v1.0.0`

- `codex/hotfix/<name>`
  - Urgent production fixes
  - Example: `codex/hotfix/fix-navbar-overlap`

## Workflow

1. Create feature work from `codex/develop`
2. Open pull requests from `codex/feature/...` into `codex/develop`
3. Merge feature branches back into `codex/develop`
4. Create a `codex/release/...` branch from `codex/develop` when preparing a release
5. Merge the release branch into `main`
6. Merge the release branch back into `codex/develop`
7. Create `codex/hotfix/...` from `main` for urgent production fixes
8. Merge hotfixes into both `main` and `codex/develop`

## Pull request targets

- `codex/feature/...` -> `codex/develop`
- `codex/release/...` -> `main`
- `codex/hotfix/...` -> `main`

After merging a hotfix or release into `main`, merge that branch back into `codex/develop` as well.

## Notes

- This repo uses the required `codex/` branch prefix for all non-`main` branches.
- If you later want stricter enforcement, add GitHub branch protection rules for:
  - `main`
  - `codex/develop`
