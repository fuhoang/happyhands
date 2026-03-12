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
4. Open a pull request from `codex/develop` into `main` for the release
5. Merge `codex/develop` into `main`
6. Open a follow-up pull request from `main` back into `codex/develop`
7. Merge `main` back into `codex/develop` to keep both long-lived branches aligned
8. Create `codex/hotfix/...` from `main` for urgent production fixes
9. Merge hotfixes into `main`
10. Open a follow-up pull request from `main` back into `codex/develop`
11. Merge `main` back into `codex/develop`

## Pull request targets

- `codex/feature/...` -> `codex/develop`
- `codex/hotfix/...` -> `main`
- `codex/develop` -> `main`
- `main` -> `codex/develop`

After any merge into `main`, create a pull request from `main` back into `codex/develop`.
Do not push directly to `codex/develop` just to restore parity with `main`.

## Notes

- This repo uses the required `codex/` branch prefix for all non-`main` branches.
- Both `main` and `codex/develop` are protected branches, so parity updates must go through pull requests in both directions.
- Local repository hooks are used to block direct commits and pushes on `main` and `codex/develop`.
- Run `git config core.hooksPath .githooks` locally to activate the tracked hooks for this repo.
- If you later want stricter enforcement, add GitHub branch protection rules for:
  - `main`
  - `codex/develop`
