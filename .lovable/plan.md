

# Deploy to GitHub Pages + Rename "Profile" to "Bio"

Your GitHub Pages is already set up with the default `pages-build-deployment` workflow. Now I need to make two code changes:

## Changes

### 1. Switch to HashRouter (`src/App.tsx`)
Replace `BrowserRouter` with `HashRouter` so routes like `/blog` work on GitHub Pages (URLs become `/#/blog`).

### 2. Add GitHub Actions build workflow (`.github/workflows/deploy.yml`)
Create a workflow that builds your Vite app and deploys the `dist/` folder to GitHub Pages. This replaces the default Jekyll-based deployment with a proper Node.js build step.

### 3. Rename "Profile" to "Bio" (`src/components/sections/About.tsx`)
Change the heading from "Profile" to "Bio".

## After these changes
- Push will trigger the new GitHub Actions workflow
- Your site will be live at `https://maminrezaie.github.io/`
- Blog will work at `https://maminrezaie.github.io/#/blog`

