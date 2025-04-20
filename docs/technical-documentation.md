# Voltant Energy - Technical Documentation

This document provides detailed technical information about the Voltant Energy website project to help developers understand the architecture, implementation patterns, and best practices used throughout the codebase.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Architecture](#component-architecture)
3. [Routing](#routing)
4. [Media Management with Cloudinary](#media-management-with-cloudinary)
5. [Performance Optimizations](#performance-optimizations)
6. [State Management](#state-management)
7. [Styling with Tailwind CSS](#styling-with-tailwind-css)
8. [Animation Systems](#animation-systems)
9. [Data Management](#data-management)
10. [Build and Deployment](#build-and-deployment)
11. [Best Practices and Coding Standards](#best-practices-and-coding-standards)
12. [Troubleshooting Common Issues](#troubleshooting-common-issues)

## Architecture Overview

The Voltant Energy website is built with a modern React application architecture, using Vite as the build tool. The application is structured following these key principles:

1. **Component-Based Architecture**: UI elements are broken down into reusable, composable components.
2. **Content Separation**: Content is stored separately from presentation components, primarily in `sectionData.js`.
3. **Performance First**: Performance optimizations are applied throughout, including lazy loading and optimized asset delivery.
4. **Mobile-First Design**: Responsive design with Tailwind CSS, built from mobile up.

The application has two main service categories:
- **EV Charging Services**: AC/DC charging stations, engineering works, CPO services, and more.
- **Waste-to-Energy Solutions**: Household solutions, large-scale plants, containerized plants, and smart waste management.

## Component Architecture

Components are organized into several categories:

### Page Components (`/src/pages/`)

These components represent the different routes in the application and typically compose multiple smaller components together.

Example page structure:
```jsx
// Typical page component structure
import { useState, useEffect } from 'react'
import HeroSection from '../components/common/SectionComponents/HeroSection'
import SeamlessChargingSection from '../components/common/SectionComponents/SeamlessChargingSection'
import MidSection from '../components/common/SectionComponents/MidSection'
import ProfilesSection from '../components/common/SectionComponents/ProfilesSection'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import { pageData } from '../utils/sectionData'

function PageComponent() {
  return (
    <>
      <Navbar />
      <HeroSection {...pageData.hero} />
      <SeamlessChargingSection {...pageData.seamlessCharging} />
      <MidSection {...pageData.midSection} />
      <ProfilesSection {...pageData.profiles} />
      <Footer />
    </>
  )
}
```

### Common Components (`/src/components/common/`)

Reusable UI components used across multiple pages:

- **`Navbar.jsx`**: The main navigation component with mobile responsiveness
- **`Footer.jsx`**: The site footer
- **`CloudinaryImage.jsx`** and **`CloudinaryVideo.jsx`**: Components for optimized media delivery
- **`ChatButton.jsx`**: Customer support chat button
- **`ServiceCard.jsx`**: Card component for displaying services

### Section Components (`/src/components/common/SectionComponents/`)

These components represent major sections that appear across multiple pages with different content:

- **`HeroSection.jsx`**: The main banner section at the top of each page
- **`MidSection.jsx`**: Mid-page feature showcase with icons and descriptions
- **`ProfilesSection.jsx`**: Section for displaying detailed service profiles
- **`SeamlessChargingSection.jsx`**: Section for service introduction content

### Home-Specific Components (`/src/components/HomeSection/`)

Components that are specific to the homepage:

- **`HeroSection.jsx`**: Home-specific hero section with video background
- **`ClientsSection.jsx`**: Section showcasing client logos
- **`WhoAreWe.jsx`**: Company introduction section
- **`ImpactMetrics.jsx`**: Statistics and impact numbers
- **`VideoBanner.jsx`**: Video banner component
- **`ConncetWithUs.jsx`**: Contact prompt section
- **`SplitImages.jsx`**: Image layout component for service showcase

## Routing

The application uses React Router DOM v7 for routing. The routing structure is defined in `App.jsx` and follows a hierarchical pattern that reflects the service categories:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  
  {/* EV Charging Routes */}
  <Route path="/ev-charging" element={<EvCharging />} />
  <Route path="/ev-charging/ac-chargers" element={<AC />} />
  <Route path="/ev-charging/dc-chargers" element={<DC />} />
  <Route path="/ev-charging/engineering-works" element={<EngineeringWorks />} />
  <Route path="/ev-charging/cpo" element={<Cpo />} />
  <Route path="/ev-charging/more" element={<More />} />
  
  {/* Waste-to-Energy Routes */}
  <Route path="/waste-to-energy" element={<WasteToEnergy />} />
  <Route path="/waste-to-energy/household" element={<Household />} />
  <Route path="/waste-to-energy/large-scale" element={<LargeScale />} />
  <Route path="/waste-to-energy/containerized-plant" element={<Containerized />} />
  <Route path="/waste-to-energy/smart-waste" element={<SmartWaste />} />
  
  {/* 404 Route */}
  <Route path="*" element={<h1>404 Not Found</h1>} />
</Routes>
```

The application also includes a `ScrollToTop` component that ensures the page scrolls to the top when navigating between routes.

## Media Management with Cloudinary

The project uses Cloudinary for optimized image and video delivery, which is crucial for performance given the media-rich nature of the site.

### Cloudinary Configuration

The Cloudinary instance is configured in `src/utils/cloudinary.js`:

```javascript
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'none',
  },
  url: {
    secure: true, // Force HTTPS
  }
});

export default cld;
```

### Asset Mapping

Local assets are mapped to their Cloudinary public IDs in `src/utils/cloudinaryAssets.js`, which helps track which assets have been uploaded to Cloudinary:

```javascript
export const imageAssets = {
  'public/Logo_icon.svg': 'voltant-energy/logos/logo_icon',
  'src/assets/images/Logo.png': 'voltant-energy/logos/logo_main',
  // ...more mappings
};

export const videoAssets = {
  'public/Videos/Connectwithus.mp4': 'voltant-energy/videos/connect_with_us',
  // ...more mappings
};
```

### Cloudinary Components

Two key components handle Cloudinary asset delivery:

1. **`CloudinaryImage.jsx`**: Loads optimized images with appropriate transformations
2. **`CloudinaryVideo.jsx`**: Loads optimized videos with appropriate transformations

These components handle responsive sizing, format optimization, lazy loading, and appropriate transformations based on device and viewport.

### Asset Upload Workflow

Assets are uploaded to Cloudinary using the `scripts/upload-to-cloudinary.js` script, which reads from the asset mappings and uploads any assets that haven't been uploaded yet.

## Performance Optimizations

The application implements several performance optimization techniques:

1. **Optimized Media Delivery**:
   - Images and videos are delivered through Cloudinary with appropriate formats (WebP/AVIF for images, VP9/H.265 for videos)
   - Responsive sizing with `srcset` for images
   - Lazy loading for below-the-fold content

2. **Font Optimization**:
   - Preconnect to Google Fonts
   - Font display swap for improved perceived performance
   - Asynchronous font loading with proper fallbacks

3. **Code Optimization**:
   - Code splitting by route using dynamic imports
   - Tree shaking with Vite
   - Minimal CSS with utility-first approach (Tailwind)

4. **Resource Hints**:
   - Preconnect to critical domains (Cloudinary, Google Fonts)
   - Preload critical assets

## State Management

The application primarily uses React's built-in state management with hooks:

1. **Local Component State**: `useState` for component-specific state
2. **Side Effects**: `useEffect` for handling side effects like data fetching and DOM manipulations
3. **Context API**: Not heavily used but available for certain global states if needed

Example from the `Navbar` component:

```jsx
const [scrolled, setScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState('home');

// Handle scroll effect for navbar background
useEffect(() => {
  const handleScroll = () => {
    const shouldBeScrolled = window.scrollY > 50;
    if (scrolled !== shouldBeScrolled) {
      setScrolled(shouldBeScrolled);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [scrolled]);
```

## Styling with Tailwind CSS

The project uses Tailwind CSS v4 for styling, which provides a utility-first approach to CSS:

1. **Configuration**: Tailwind is configured in `tailwind.config.js`
2. **Custom Utilities**: Some custom utility classes are defined for project-specific needs
3. **Responsive Design**: The mobile-first approach uses Tailwind's responsive modifiers (`md:`, `lg:`, etc.)

Example from a component:
```jsx
<div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-32 md:mt-0 mt-6 ml-4 md:ml-0">
  {/* Component content */}
</div>
```

## Animation Systems

The project uses two animation libraries:

1. **Framer Motion**: For UI component animations, transitions, and gestures
2. **GSAP**: For complex, timeline-based animations

### Framer Motion Examples

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-transparent text-white py-2 px-6 rounded-full font-medium border-2 border-white"
>
  Get in Touch
</motion.button>
```

### GSAP Examples

GSAP is typically used for more complex animations, especially those involving multiple elements or timeline-based sequences.

```jsx
useEffect(() => {
  const tl = gsap.timeline();
  tl.from('.hero-text', { opacity: 0, y: 20, duration: 1, stagger: 0.2 })
    .from('.hero-image', { opacity: 0, scale: 0.95, duration: 1 }, "-=0.5");
}, []);
```

## Data Management

The application's content is primarily managed through the `src/utils/sectionData.js` file, which contains structured data for different sections and pages:

```javascript
export const cpoData = {
  hero: {
    title: 'CPO',
    breadcrumbs: ['Home', 'EV Charging', 'CPO'],
    showSubtitle: false,
    heroImage: 'src/assets/images/CPO_main.png'
  },
  // more sections...
};

export const moreData = { /* ... */ };
export const householdData = { /* ... */ };
// etc.
```

This approach separates content from presentation and makes updating content easier.

## Build and Deployment

The project uses Vite for building and is configured for deployment on Netlify:

### Build Configuration

The Vite configuration is in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  }
})
```

### Netlify Configuration

Deployment to Netlify is configured in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Best Practices and Coding Standards

The project follows several best practices:

1. **Component Composition**: Breaking UI into small, reusable components
2. **DRY Principle**: Avoiding repetition through reusable components and utilities
3. **Separation of Concerns**: Content separate from presentation, logic separate from UI
4. **Accessibility**: Semantic HTML and ARIA attributes where needed
5. **Performance**: Optimizing for core web vitals and overall performance
6. **Code Style**: ESLint for consistent code style

## Troubleshooting Common Issues

### Cloudinary Asset Not Loading

If a Cloudinary asset fails to load:

1. Check if the asset is properly mapped in `cloudinaryAssets.js`
2. Verify that the asset has been uploaded to Cloudinary using the upload script
3. Check environment variables for Cloudinary configuration

### Component Styling Issues

For issues with component styling:

1. Check the Tailwind class ordering
2. Verify responsive breakpoints are correctly applied
3. Inspect the element using browser dev tools to see which styles are being applied/overridden

### Performance Issues

If you encounter performance issues:

1. Check for unnecessary re-renders using React DevTools
2. Optimize media assets (ensure proper sizing and formats)
3. Consider code splitting for large page components
4. Profile the application using browser performance tools

## Appendix

### Environment Variables

Required environment variables:

```
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_API_KEY=your_cloudinary_api_key
VITE_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Useful Commands

```bash
# Development
npm run dev           # Start development server

# Linting and Formatting
npm run lint          # Run ESLint

# Building
npm run build         # Build for production
npm run preview       # Preview production build locally
```