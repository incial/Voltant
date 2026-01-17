/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  // Image optimization configuration
  images: {
    // Enable modern image formats
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [480, 768, 1024, 1200, 1600, 1920],
    // Image sizes for next/image width prop
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Quality settings
    qualities: [75, 80, 85],
    // Minimize processed images
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Compression
  compress: true,
  // Power mode off for better performance
  poweredByHeader: false,
};

export default nextConfig;
