# Studio Breakdown Viewer

A lightweight Vue 3 app that visualises BandLab Studio track data — instruments, effects, effect presets, mastering, auto pitch, loop packs, and more.

## Live

**https://shamil-sov.github.io/studio-components-poc/**

Paste a BandLab track URL (with `?revId=...`) and click **Load** to fetch and display the breakdown.

## How it works

1. The user provides a track URL containing a `revId` query parameter.
2. The app calls the breakdown API:  
   `GET https://bl-uat-fn-social-posts-proxy.azurewebsites.net/api/breakdown/studio?revisionId={revId}`
3. The JSON response is rendered into individual cards (Track Overview, Instruments, Effects, etc.).

## Tech stack

- **Vue 3** + **TypeScript**
- **Vuetify 3** (light theme)
- **Vite** for dev & build

## Run locally

```bash
cd studio-breakdown
npm install
npm run dev
```

## Deployment

Pushing to `main` (any change under `studio-breakdown/`) triggers a GitHub Actions workflow that builds the app and deploys it to GitHub Pages. The workflow is defined in `.github/workflows/deploy.yml`.
