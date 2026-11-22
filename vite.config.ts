import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  // Cho phép mở qua tunnel (Cloudflare / ngrok) để xem từ xa.
  server: { allowedHosts: ['.trycloudflare.com', '.ngrok-free.app'] },
  preview: { allowedHosts: ['.trycloudflare.com', '.ngrok-free.app'] },
});
