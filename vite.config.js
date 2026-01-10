import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: true,
    port: 3002,
    open: true,
  },
  build: {
    target: ['es2015', 'safari13', 'ios13'],
    cssTarget: ['chrome61', 'firefox60', 'safari11', 'edge18'],
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-components': [
            // Common UI components that are used across many pages
            './src/components/layout/Navbar.jsx',
            './src/components/layout/Footer.jsx',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: { compress: { drop_console: true, drop_debugger: true } },
  },
})