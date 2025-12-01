import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
    // Removed splitVendorChunkPlugin as it doesn't work with manual chunks
  ],
  server: {
    port: 3000,
    open: true, // Open browser on server start
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Create dedicated chunks for major frameworks
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
    chunkSizeWarningLimit: 1000, // Set a higher warning limit to avoid unnecessary warnings
    minify: 'terser', // Use Terser for better minification results
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true // Remove debugger statements in production
      }
    },
    // Improve loading performance with module preload
    modulePreload: {
      polyfill: true
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  },
  // Ensure public files like _redirects are copied to build output
  publicDir: 'public'
})
