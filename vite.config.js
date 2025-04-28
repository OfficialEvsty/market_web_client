import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Критически важно для Docker
    port: 8080,
    strictPort: true,
    allowedHosts: [
      'umaiden.ru',
      'www.umaiden.ru',
      'id.umaiden.ru',
      '212.87.220.204',
      'localhost'
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: 80,
    strictPort: true,
    allowedHosts: [
      '.umaiden.ru', // Все поддомены
      '212.87.220.204',
      '138.124.16.253'
    ]
  }
})
