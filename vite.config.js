import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@data': path.resolve(__dirname, './src/data'),
      '@context': path.resolve(__dirname, './src/context'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@assets': path.resolve(__dirname, './public/assets'),
    }
  },
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  build: {
    target: 'es2018',
    // Inline only very small assets (< 4KB) to reduce HTTP requests
    assetsInlineLimit: 4096,
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
        // Optimize asset file naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          // Images go into assets/images folder
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          // Fonts go into assets/fonts folder
          if (/woff2?|ttf|eot|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: { 
      compress: { 
        drop_console: true, 
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      } 
    },
    // Enable source maps for debugging (disable in production if not needed)
    sourcemap: false,
    // Improve CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})