// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/gtavlandingpage/', // ✅ GitHub repo name here
  plugins: [react(), tailwindcss()],
})
