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

## Project screenshots, links and CV
- Screenshots: save as `public/projects/<slug>.png` (slug = project name in lowercase, symbols become "-"), e.g. `prodtrack-ai.png`, `hr-payroll.png`, `hotel-management.png`. They replace the gradient thumbnail and show in the detail panel.
- Links: add `gh: 'https://github.com/...'` or `demo: 'https://...'` to a project in `src/data.js`.
- Featured: any project with a `hi: [...]` list gets a "Featured" badge and bullet highlights.
- CV: `public/Lakindu_Gomes_CV.pdf` powers the Download CV button. Replace it with your latest version.
- Link previews: after deploying, add `og:image` and `og:url` tags to `index.html` using your real domain.
