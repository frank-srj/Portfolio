import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const { VITE_SITE_URL = '' } = loadEnv(mode, process.cwd(), '')
  const siteUrl = VITE_SITE_URL.replace(/\/$/, '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'social-meta',
        transformIndexHtml(html) {
          const ogImage = siteUrl ? `${siteUrl}/og-preview.png` : '/og-preview.png'
          const ogUrl = siteUrl || ''

          return html
            .replaceAll('__OG_IMAGE__', ogImage)
            .replaceAll('__OG_URL__', ogUrl)
        },
      },
    ],
  }
})