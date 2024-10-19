import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/inicio_sesion_react_basic/', // Asegúrate de que esto coincida con el nombre de tu repositorio
});
