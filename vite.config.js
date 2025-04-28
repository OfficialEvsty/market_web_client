import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Порт для dev-сервера
    allowedHosts: ['212.87.220.204', '138.124.16.253', 'umaiden.ru', 'id.umaiden.ru'],
  },
  preview: {
    port: 80, // Порт для preview-сервера
    strictPort: true,
    allowedHosts: ['212.87.220.204', '138.124.16.253', 'umaiden.ru', 'id.umaiden.ru'],
  }
})
