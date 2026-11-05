# Lakindu Gomes — Portfolio

React 18 + Vite 5 + Framer Motion. No UI framework, no backend.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview
```

## Add your photo
Save your portrait as `public/photo.png` (portrait orientation, about 1000×1250 px works well). Until then the site shows an "LG" placeholder.

## Edit content
Everything (experience, projects, education, skills, links) lives in `src/data.js`.

## Deploy
Upload the `dist/` folder to Netlify, Vercel, Cloudflare Pages or GitHub Pages (the build uses relative paths, so it works from any sub-path).

## Structure
- `src/Hero.jsx` – headline reveal, counters, Figma-to-production photo slider
- `src/Background.jsx` – interactive particle network
- `src/Sections.jsx` – experience timeline, filterable projects with modal, education, skills, contact
- `src/ui.jsx` – Reveal, Magnetic button, Counter
- `src/styles.css` – design tokens and styles
