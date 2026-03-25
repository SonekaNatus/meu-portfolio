# Portfolio — Kauã Victor

<p align="center">
  <img src="docs/preview.png" alt="Portfolio preview — Kauã Victor, Full Stack Developer" width="100%" />
</p>

Personal site with an introduction, tech stack, GitHub projects, contact form, and a PDF resume link.

## Stack

| Area | Technologies |
|------|--------------|
| **Frontend** | React 19, TypeScript, Vite 8 |
| **Styling** | CSS (variables, responsive layout) |
| **Other** | Custom cursor, animations, `mailto` contact form |

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

The `dist/` folder is ready to deploy (Vercel, Netlify, GitHub Pages, etc.).

## Project structure

```
src/
├── components/   # Hero, About, Stack, Projects, Contact, Navbar, Footer, Cursor
├── styles/       # global.css, responsive.css
└── App.tsx
docs/
├── preview.png          # README banner (replace with your own screenshot anytime)
└── readme-banner.svg
public/
└── curriculo-kaua-victor.pdf   # resume (replace when you update it)
```

## Deploy

- [Vercel](https://vercel.com): import the GitHub repo; framework preset **Vite**.
- [Netlify](https://www.netlify.com): build `npm run build`, publish directory `dist`.
- [GitHub Pages](https://pages.github.com): set `base` in `vite.config` if the site lives under a subpath (`/repo-name/`).

## Author

**Kauã Victor** — Systems Analysis & Development, Senac University São Paulo.

- [GitHub](https://github.com/SonekaNatus)
- [LinkedIn](https://linkedin.com/in/kauã-victor-125a912aa)

