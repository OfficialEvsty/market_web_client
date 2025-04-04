import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Порт для dev-сервера
    strictPort: true, // Запретить автоматический выбор другого порта
    allowedHosts: ["185.236.23.87", "138.124.16.253", "sso1.teamspot.online", "mback.teamspot.online", "teamspot.online"],
  },
  preview: {
    port: 80, // Порт для preview-сервера
    strictPort: true,
    allowedHosts: ["185.236.23.87", "138.124.16.253", "sso1.teamspot.online", "mback.teamspot.online", "teamspot.online"],
  }
})
