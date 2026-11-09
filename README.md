# Obsidian Music Technology

Sitio estático (HTML/CSS/JS puro, sin framework ni build) que reúne las
utilidades de código abierto del perfil **nexushouser92**. Cada herramienta
tiene su contenedor en la página principal y una página de detalle propia con
su documentación y un botón de **descarga directa del release**.

## Estructura

```
index.html          # portada: hero + sección "Utilitys" con 7 contenedores
styles.css          # todos los estilos
util/<slug>.html    # una página por herramienta (info + descarga directa)
.github/workflows/  # deploy automático a GitHub Pages
```

## Editar

- **Herramientas / descripciones / versiones / enlaces de descarga:** se
  generan desde `build_site.py` (en la raíz del proyecto de trabajo). Edita la
  lista `REPOS` y vuelve a ejecutar `python3 build_site.py`, o edita
  directamente el HTML si prefieres.
- **Colores y tipografías:** `styles.css`, bloque `:root`.
- **Marca / textos de la portada:** `index.html`.

## Publicar

Es un sitio estático: no requiere build. Con cada push a `main`, el workflow
de `.github/workflows/pages.yml` publica la carpeta en GitHub Pages.

Activa una vez en **Settings → Pages → Source: GitHub Actions**. Queda en
`https://nexushouser92.github.io/obsidian-music-technology/`.

Las rutas son relativas, así que funciona tanto en la raíz como en una subruta
de proyecto sin configuración extra.
