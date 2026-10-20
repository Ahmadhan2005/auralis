# Auralis

Auralis is a responsive AI voice infrastructure landing page built with Next.js App Router, Tailwind CSS, Framer Motion, and a Three.js shader background.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run lint` — run ESLint
- `npm run typecheck` — run the TypeScript checker

## Contact form

The inquiry form validates its fields in the browser and prepares an email in the visitor's default mail app. It does not send or store form data on a server. Set `NEXT_PUBLIC_CONTACT_EMAIL` to the monitored production contact inbox, or connect a trusted form service before launch.

## Optional analytics

Copy `.env.example` to `.env.local`, set the canonical public site URL in `NEXT_PUBLIC_SITE_URL`, and optionally provide a Google Analytics measurement ID (`G-...`) as `NEXT_PUBLIC_GA_ID`. Analytics is not loaded unless an ID is configured and the visitor accepts the consent prompt. Without an ID, no analytics prompt or analytics script is shown.

## Product assets

The workspace and analytics cards are explicitly labeled as illustrative UI concepts. Replace them with approved product screenshots and real metrics when available; the current project does not include official Auralis product assets or customer endorsements.

## Animated background

The site-wide green shader is rendered client-side with React Three Fiber and WebGL. A CSS gradient remains visible while the shader loads or when WebGL is unavailable. The shader layer ignores pointer events so it does not block navigation or controls.
