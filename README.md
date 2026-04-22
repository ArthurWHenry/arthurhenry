# Arthur Henry Personal Website

Static personal site built with [Astro](https://astro.build/) 6. Pages and layouts use Astro components; interactive islands can use [React](https://react.dev/) 19 via `@astrojs/react`. Styling uses [Tailwind CSS](https://tailwindcss.com/) 4 with the Vite plugin, and the [Inter](https://fonts.google.com/specimen/Inter) font is loaded through Astro’s font configuration (Google provider).

## Prerequisites

- **Node.js** 22.12 or newer (required by Astro 6)
- **pnpm** — the repo pins `packageManager` to pnpm 10.x in `package.json`; [Corepack](https://nodejs.org/api/corepack.html) will use the right version if enabled

## Install

From the repository root:

```bash
pnpm install
```

## Run locally

Start the dev server (hot reload, default at [http://localhost:4321](http://localhost:4321)):

```bash
pnpm dev
```

## Build and preview production

Produce a static build in `dist/`:

```bash
pnpm build
```

Serve the production build locally:

```bash
pnpm preview
```

## Project layout (high level)

- `src/pages/` — file-based routes (e.g. `index.astro`)
- `src/layouts/` — shared page shells
- `public/` — assets copied as-is to the output root
- `astro.config.mjs` — Astro, React integration, Tailwind Vite plugin, and fonts
