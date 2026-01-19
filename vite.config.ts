
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escuchar en todas las interfaces de red públicas
    port: 9002,      // Ejecutar en el puerto interno esperado por el entorno
    hmr: {
      // El cliente HMR se conectará al host desde el que se sirve la página
      // y al puerto 9000 (el puerto público expuesto por Cloud Workstations)
      clientPort: 9000,
    },
  },
});
