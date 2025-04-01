import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80, // Порт для dev-сервера
    strictPort: true, // Запретить автоматический выбор другого порта
  },
  preview: {
    port: 80, // Порт для preview-сервера
    strictPort: true,
  }
})
