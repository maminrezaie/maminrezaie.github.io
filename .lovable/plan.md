

# Fix GitHub Actions Build Failure

## Problem
The build fails because the workflow uses `npm ci`, which requires a valid `package-lock.json` file. Your project was set up with Bun (`bun.lockb`), so the lock file is either missing or empty.

## Fix
Update `.github/workflows/deploy.yml` to use `npm install` instead of `npm ci`. This will generate the lock file on the fly and install all dependencies correctly.

### Change in `.github/workflows/deploy.yml`:
- Replace `npm ci` with `npm install` (line 27)

## After the fix
Once pushed, re-run the failed workflow (or it will auto-trigger on push). Your site should build and deploy to `https://maminrezaie.github.io/`.

