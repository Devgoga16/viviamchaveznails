// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático. Cambiar `site` por el dominio real al publicar.
export default defineConfig({
  site: 'https://viviamchaveznails.pe',
  trailingSlash: 'ignore',
  server: { port: 4334 },
});
