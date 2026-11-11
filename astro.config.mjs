// @ts-check
import { defineConfig } from 'astro/config';

// SITE y BASE se pueden pasar por variables de entorno al publicar.
// Netlify: no hace falta tocar nada.
// GitHub Pages (repo que no es usuario.github.io): BASE=/nombre-del-repo
export default defineConfig({
  site: process.env.SITE || 'https://example.com',
  base: process.env.BASE || '/',
  trailingSlash: 'ignore',
});
