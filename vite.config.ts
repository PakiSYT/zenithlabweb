import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        services: 'services.html',
        print3d: 'print3d.html',
        archmodels: 'archmodels.html',
        led: 'led.html',
        engraving: 'engraving.html',
        prototypes: 'prototypes.html',
        gadgets: 'gadgets.html',
        portfolio: 'portfolio.html',
        contact: 'contact.html',
        blog: 'blog.html',
        notfound: '404.html',
      },
    },
  },
});
