import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Torre-SW-Engineering-technical-test",
  server:{
    proxy: {
      '/api': 'https://bio.torre.co/api'
    }
  },
  plugins: [react()],
})
