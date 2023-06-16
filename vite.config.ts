import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages()],
  resolve: {
    alias: {
      '/@': '/src'
    }
  },
  server: {
    proxy: {
      '/traq': {
        target: 'https://q.trap.jp/api/v3',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/traq/, ''),
        headers: {
          Authorization: 'Bearer '
        }
      }
    }
  }
})
