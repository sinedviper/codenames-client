import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
      store: '/src/store',
      utils: '/src/utils',
      page: '/src/page',
      'pages-components': '/src/pages-components',
    },
  },
})
