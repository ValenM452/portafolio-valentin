# Portafolio · Valentín Martínez

Sitio personal hecho con [Astro](https://astro.build). Es estático: no necesita servidor ni base de datos.

## Correr en local

```bash
npm install
npm run dev
```

Abrí http://localhost:4321.

## Agregar un proyecto

1. Creá un archivo nuevo en `src/content/projects/`, por ejemplo `mi-proyecto.md`. El nombre del archivo es la URL: `/proyectos/mi-proyecto`.
2. Pegá esto arriba y completalo:

```md
---
title: Mi proyecto
summary: Una o dos frases que expliquen qué es y para quién.
year: 2026
category: E-commerce
stack: [Next.js, Tailwind]
status: publicado        # publicado | en desarrollo | privado
client: true             # false = proyecto propio (no cuenta como negocio real)
order: 8                 # posición en el carrusel (menor = primero)
color: "#ff5b1f"         # tono de la portada (se mezcla con el naranja del sitio)
cover: /proyectos/mi-proyecto.jpg   # opcional, imagen en public/proyectos/
live: https://mi-proyecto.com       # opcional
repo: https://github.com/usuario/repo  # opcional
draft: false             # true = no se publica
---

## El desafío
Texto libre en Markdown: problema, qué hiciste, cómo está hecho, capturas…
```

3. Guardá. En `npm run dev` aparece al instante. No hace falta tocar ningún otro archivo.

Sin `cover`, el sitio genera una portada con el nombre y el color del proyecto. Para usar una captura, poné la imagen en `public/proyectos/` (ideal 1600×1000) y escribí la ruta en `cover`.

## Cambiar tus datos

Todo está en `src/data/site.ts`: nombre, rol, textos de presentación, email, redes, CV, servicios, skills y pasos del proceso.

**Tu foto en la portada:** poné un retrato vertical con fondo liso en `public/yo.jpg` y escribí `photo: '/yo.jpg'`. El sitio le aplica el tono naranja solo. Sin foto, se muestra una esfera con tus iniciales.

Antes de publicar, reemplazá el email de ejemplo `hola@tudominio.com` y completá LinkedIn, WhatsApp y CV si los tenés. Para el CV, poné el PDF en `public/cv.pdf` y escribí `cv: '/cv.pdf'`.

## Publicar

### Netlify (lo más simple)

1. Subí la carpeta a un repositorio de GitHub.
2. En Netlify: **Add new site → Import an existing project**, elegí el repo.
3. La configuración ya está en `netlify.toml` (`npm run build`, carpeta `dist`). Tocá **Deploy**.

Cada vez que hagas `git push`, Netlify publica la versión nueva.

### GitHub Pages

1. Subí la carpeta a un repositorio de GitHub (rama `main`).
2. En el repo: **Settings → Pages → Source: GitHub Actions**.
3. El workflow `.github/workflows/deploy.yml` construye y publica en cada push. El sitio queda en `https://usuario.github.io/nombre-del-repo/`.

Si el repo se llama `usuario.github.io`, borrá la línea `BASE:` del workflow.

## Estructura

```
src/content/projects/   un .md por proyecto
src/data/site.ts        datos personales, skills y proceso
src/pages/              inicio, detalle de proyecto y 404
src/components/         nav, footer, tarjeta y portada
src/styles/global.css   colores, tipografías y estilos base
```
