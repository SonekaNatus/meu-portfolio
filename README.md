# Portfólio — Kauã Victor

<p align="center">
  <img src="docs/readme-banner.svg" alt="Pré-visualização do portfólio — Kauã Victor, Full Stack Developer" width="100%" />
</p>

Site pessoal com apresentação, stack técnica, projetos no GitHub, contato e link para currículo em PDF.

## Stack

| Área | Tecnologias |
|------|-------------|
| **Frontend** | React 19, TypeScript, Vite 8 |
| **Estilo** | CSS (variáveis, layout responsivo) |
| **Outros** | Cursor custom, animações, formulário via `mailto` |

## Como rodar localmente

```bash
npm install
npm run dev
```

Abre o endereço que o terminal mostrar (geralmente `http://localhost:5173`).

### Build de produção

```bash
npm run build
npm run preview
```

A pasta `dist/` fica pronta para deploy (Vercel, Netlify, GitHub Pages, etc.).

## Estrutura principal

```
src/
├── components/   # Hero, About, Stack, Projects, Contact, Navbar, Footer, Cursor
├── styles/       # global.css, responsive.css
└── App.tsx
public/
└── curriculo-kaua-victor.pdf   # currículo (atualiza quando quiseres)
```

## Deploy sugerido

- [Vercel](https://vercel.com): importa o repositório GitHub; framework preset **Vite**.
- [Netlify](https://www.netlify.com): build `npm run build`, publish directory `dist`.
- [GitHub Pages](https://pages.github.com): usar `base` no `vite.config` se o site for em subpath (`/repo-name/`).

## Autor

**Kauã Victor** — ADS, Universidade Senac SP.

- [GitHub](https://github.com/SonekaNatus)
- [LinkedIn](https://linkedin.com/in/kauã-victor-125a912aa)

---

<sub>README com banner em SVG para o repositório aparecer bem na página inicial do GitHub. Para uma captura real do site, adiciona `docs/preview.png` e troca a imagem no topo por `![Preview](docs/preview.png)`.</sub>
