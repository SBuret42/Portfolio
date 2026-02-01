import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', // Assurez-vous que cette ligne est présente pour un déploiement statique
  build: {
    outDir: 'dist', // Dossier de sortie
    emptyOutDir: true, // Vider le dossier avant chaque build
  },
});