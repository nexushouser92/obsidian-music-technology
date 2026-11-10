# Obsidian-utility (Astro)

Sitio de una página en Astro con estructura de landing técnica: hero partido
asimétrico, panel "System Status" en monoespaciada, sección de soluciones con
motivos line-art y footer con marco de acento y sitemap.

Contenido con marcadores de posición (marca `BRAND`, textos y SVGs genéricos);
sustitúyelo por el tuyo.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # previsualiza el build
```

## Qué editar

| Quiero cambiar… | Archivo |
|---|---|
| Color de acento, tipografías, tokens | `src/styles/global.css` (`:root`) |
| Nombre de marca y logo | `src/components/Header.astro` y `Footer.astro` |
| Titular y "System Status" | `src/components/Hero.astro` |
| Tarjetas de soluciones | `src/components/Solutions.astro` |
| Sitemap, eslogan, dirección | `src/components/Footer.astro` |
| Título/SEO | `src/layouts/Base.astro` |

## Publicar en GitHub Pages

```bash
git init
git add .
git commit -m "Initial landing"
git branch -M main
git remote add origin https://github.com/nexushouser92/obsidian-music-technology.git
git push -u origin main
```

Luego, en GitHub: **Settings → Pages → Build and deployment → Source: GitHub
Actions**. El workflow `.github/workflows/deploy.yml` hace build y deploy en
cada push a `main`. Quedará en
`https://nexushouser92.github.io/obsidian-music-technology`.

## Tipografías

Space Grotesk (display) + Space Mono (mono) vía Google Fonts, en
`src/layouts/Base.astro`.
