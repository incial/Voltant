# Voltant Energy - Technical Documentation

This document provides comprehensive technical information about the Voltant Energy website project to help developers understand its architecture, implementation, and best practices.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Architecture](#component-architecture)
3. [Routing System](#routing-system)
4. [Media Management with Cloudinary](#media-management-with-cloudinary)
5. [Data Management](#data-management)
6. [Styling and Responsive Design](#styling-and-responsive-design)
7. [Animation Systems](#animation-systems)
8. [Performance Optimizations](#performance-optimizations)
9. [State Management](#state-management)
10. [Build and Deployment](#build-and-deployment)
11. [Best Practices](#best-practices)
12. [Common Issues and Solutions](#common-issues-and-solutions)
13. [Development Guidelines](#development-guidelines)
14. [Environmental Configuration](#environmental-configuration)
15. [Appendix: Useful Commands](#appendix-useful-commands)

## Architecture Overview

The Voltant Energy website is built with a modern React application architecture, using Vite as the build tool. The application follows these key principles:

1. **Component-Based Architecture**: UI elements are broken down into reusable, composable components for maintainability and consistency.
2. **Content Separation**: Content is stored separately from presentation components, primarily in `sectionData.js`, enabling easier content management.
3. **Performance First**: Performance optimizations are applied throughout, including lazy loading, code splitting, and optimized asset delivery via Cloudinary.
4. **Mobile-First Design**: Using Tailwind CSS, the application is built with responsive design principles starting from mobile viewports.

The application has two main service categories:

- **EV Charging Services**: Featuring AC/DC charging stations, engineering works, CPO services, and additional services
- **Waste-to-Energy Solutions**: Including household solutions, large-scale plants, containerized plants, and smart waste management

## Component Architecture

Components are organized into several categories for better maintainability and separation of concerns:

### Page Components (`/src/pages/`)

These represent different routes in the application and typically compose multiple smaller components together:

- **Home.jsx**: Landing page featuring company overview and services
- **EvCharging.jsx**, **WasteToEnergy.jsx**: Category landing pages
- **AC.jsx**, **DC.jsx**, **EngineeringWorks.jsx**, etc.: Service-specific pages

Typical page component structure:
```jsx
import HeroSection from '../components/common/SectionComponents/HeroSection';
import SeamlessChargingSection from '../components/common/SectionComponents/SeamlessChargingSection';
import MidSection from '../components/common/SectionComponents/MidSection';
import ProfilesSection from '../components/common/SectionComponents/ProfilesSection';
import { pageData } from '../utils/sectionData';

function PageComponent() {
  return (
    <>
      <HeroSection {...pageData.hero} />
      <SeamlessChargingSection {...pageData.seamlessCharging} />
      <MidSection {...pageData.midSection} />
      <ProfilesSection {...pageData.profiles} />
    </>
  );
}
```

### Common Components (`/src/components/common/`)

Reusable UI components used across multiple pages:

- **Navbar.jsx**: Main navigation with responsive mobile menu
- **Footer.jsx**: Site-wide footer with links and contact info
- **CloudinaryImage.jsx**, **CloudinaryVideo.jsx**: Media components for optimized delivery
- **ChatButton.jsx**: Floating WhatsApp chat button
- **ServiceCard.jsx**: Card component for displaying service categories
- **ContactForm.jsx**: Form for user inquiries

### Section Components (`/src/components/common/SectionComponents/`)

Reusable section templates used across multiple service pages:

- **HeroSection.jsx**: Banner section with title and background image
- **MidSection.jsx**: Feature showcase with icons and descriptions
- **ProfilesSection.jsx**: Detailed service information in two columns
- **SeamlessChargingSection.jsx**: Text-based content sections
- **charger.jsx**: Complex component for displaying charger specifications

### Home-Specific Components (`/src/components/HomeSection/`)

Components exclusive to the homepage:

- **HeroSection.jsx**: Home-specific hero with video background
- **ClientsSection.jsx**: Horizontal scrolling client logo showcase
- **WhoAreWe.jsx**: About company section with background image
- **ImpactMetrics.jsx**: Animated statistics display
- **VideoBanner.jsx**: Full-width video section
- **ConncetWithUs.jsx**: Call-to-action section
- **SplitImages.jsx**: Image grid layout for service preview

## Routing System

The application uses React Router DOM v7 for navigation. Routing is defined in `App.jsx` and follows a hierarchical structure reflecting the service categories:

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
  
  {/* Contact Page */}
  <Route path="/contact" element={<GetInTouch />} />
  
  {/* 404 Route */}
  <Route path="*" element={<h1>404 Not Found</h1>} />
</Routes>
```

The application also implements `ScrollToTop` functionality to ensure pages scroll to the top when navigating between routes.

## Media Management with Cloudinary

The project uses Cloudinary for optimized media delivery, crucial for performance given the media-rich nature of the site.

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

Local assets are mapped to their Cloudinary public IDs in `src/utils/cloudinaryAssets.js`:

```javascript
export const imageAssets = {
  'public/Logo_icon.svg': 'voltant-energy/logos/logo_icon',
  'src/assets/images/Logo.png': 'voltant-energy/logos/logo_main',
  // More mappings...
};

export const videoAssets = {
  'public/Videos/Connectwithus.mp4': 'voltant-energy/videos/connect_with_us',
  // More mappings...
};
```

### Cloudinary Components

Two components handle Cloudinary asset delivery:

1. **`CloudinaryImage.jsx`**: Delivers optimized images with responsive sizing
2. **`CloudinaryVideo.jsx`**: Delivers optimized videos with appropriate transformations

Both components implement:
- Format optimization (WebP/AVIF for images, VP9/H.265 for videos)
- Responsive sizing
- Lazy loading
- Device-appropriate transformations

### Asset Upload Process

Assets are uploaded using `scripts/upload-to-cloudinary.js`, which:
1. Reads asset mappings from `cloudinaryAssets.js`
2. Authenticates with Cloudinary API
3. Uploads local assets that don't yet exist in Cloudinary
4. Maintains a consistent naming convention

## Data Management

The application's content is primarily managed through `src/utils/sectionData.js`, which contains structured data for each page and section:

```javascript
export const cpoData = {
  hero: {
    title: 'CPO',
    breadcrumbs: ['Home', 'EV Charging', 'CPO'],
    showSubtitle: false,
    heroImage: 'src/assets/images/CPO_main.png'
  },
  seamlessCharging: {
    title: 'Seamless Charging, Smarter Operations',
    paragraphs: [
      'As a Charge Point Operator (CPO), we manage the deployment...',
      'With secure payment integrations, dynamic load balancing...'
    ]
  },
  // More sections...
};
```

This centralizes content management and separates content from presentation, making it easier to update website copy without modifying component code.

## Styling and Responsive Design

The project uses Tailwind CSS v4 for styling, providing a utility-first approach to CSS:

### Tailwind Configuration

Tailwind is configured in `tailwind.config.js`:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      screens: {
        'xs': '375px', // Extra small devices
      },
      // Other extensions...
    },
  },
  plugins: [],
}
```

### Responsive Approach

The site follows a mobile-first design approach:
- Base styles are for mobile devices
- Media queries (`md:`, `lg:`) are used to adapt layouts for larger screens
- Flexbox and CSS Grid are used extensively for responsive layouts

Example of responsive component styling:
```jsx
<div className="flex flex-col md:flex-row items-center p-4 md:p-8 gap-4 md:gap-8">
  {/* Content here adapts from column (mobile) to row (desktop) layout */}
</div>
```

### Custom Design Elements

- Cairo font family is used throughout the site
- Consistent spacing and color schemes maintain brand identity
- Custom CSS for specific animations and effects

## Animation Systems

The project utilizes two animation libraries for different purposes:

### Framer Motion

Used for UI component animations, transitions, and gestures:

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-transparent text-white py-2 px-6 rounded-full border-2 border-white"
>
  Get in Touch
</motion.button>
```

Common Framer Motion patterns:
- Fade-in animations for section reveals
- Hover state animations for interactive elements
- Staggered animations for lists of items
- Page transitions between routes

### GSAP (GreenSock Animation Platform)

Used for more complex animations, especially in the `ClientsSection` and homepage elements:

```jsx
useEffect(() => {
  const tl = gsap.timeline();
  tl.from('.hero-text', { opacity: 0, y: 20, duration: 1, stagger: 0.2 })
    .from('.hero-image', { opacity: 0, scale: 0.95, duration: 1 }, "-=0.5");
}, []);
```

GSAP is particularly useful for:
- Timeline-based animations
- Scroll-triggered effects
- Complex movement patterns
- Performance-critical animations

## Performance Optimizations

The application implements several performance optimization techniques:

### Media Optimization

1. **Responsive Image Delivery**:
   - Cloudinary serves appropriate image sizes based on viewport
   - WebP/AVIF formats are used when supported
   - Image compression is applied automatically

2. **Video Optimization**:
   - Adaptive bitrate streaming
   - Automatic format selection (VP9, H.265, etc.)
   - Mobile-optimized delivery

3. **Lazy Loading**:
   - Images and videos below the fold use native lazy loading
   - Offscreen content is deferred until needed

### Code Optimization

1. **Component Splitting**:
   - Large components are broken into smaller, focused components
   - Code splitting by route using dynamic imports

2. **Bundle Optimization**:
   - Tree shaking with Vite
   - Efficient dependency management
   - Minification and compression

3. **Resource Loading**:
   - Critical CSS inlined in the head
   - Asynchronous loading for non-critical resources
   - Preconnect for third-party domains

### Additional Optimizations

1. **Font Optimization**:
   - Font display swap for improved perceived performance
   - Preloading critical font files
   - System font fallbacks

2. **Rendering Optimization**:
   - Minimizing unnecessary re-renders
   - Using React.memo for pure components
   - Avoiding props drilling through context where appropriate

## State Management

The application primarily uses React's built-in state management:

### Component State

Local component state is managed with `useState`:

```jsx
const [isOpen, setIsOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);
```

### Side Effects

Side effects like data fetching and DOM manipulations use `useEffect`:

```jsx
useEffect(() => {
  const handleScroll = () => {
    const shouldShow = window.scrollY > 300;
    setShowBackToTop(shouldShow);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Context API

For global state that needs to be shared across components, React Context is used:

```jsx
// In ContactFormContext.jsx
export const ContactFormContext = createContext();

export const ContactFormProvider = ({ children }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  return (
    <ContactFormContext.Provider value={{ isFormVisible, setIsFormVisible }}>
      {children}
    </ContactFormContext.Provider>
  );
};

// Usage in components
const { isFormVisible, setIsFormVisible } = useContext(ContactFormContext);
```

## Build and Deployment

The project uses Vite for building and is configured for deployment on Netlify:

### Build Configuration

The Vite configuration is defined in `vite.config.js`:

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

### Netlify Deployment

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

This configuration ensures:
- The correct build command is run
- The built files from the `dist` directory are served
- Client-side routing works correctly with redirects to the index

### Continuous Deployment

The repository is set up for continuous deployment:
1. Changes pushed to the main branch trigger a new build
2. Netlify builds and deploys the site automatically
3. Deploy previews are generated for pull requests

## Best Practices

The project follows several best practices for React development:

### Component Design

1. **Single Responsibility**: Components should do one thing well
2. **Props Interface**: Clear props definitions for each component
3. **DRY Components**: Reusable patterns extracted into shared components
4. **Consistent Naming**: Descriptive, consistent component and prop names

### Performance

1. **Memoization**: Using React.memo for pure components
2. **Efficient Rendering**: Avoiding unnecessary re-renders
3. **Asset Optimization**: Using appropriate image sizes and formats
4. **Code Splitting**: Loading code only when needed

### Code Quality

1. **ESLint**: Code linting for consistent style
2. **Comments**: Documenting complex logic and component usage
3. **Semantic HTML**: Using appropriate HTML elements
4. **Accessibility**: Implementing ARIA attributes where needed

### State Management

1. **Local State**: Keeping state as close to where it's used as possible
2. **Minimal Context**: Using Context API only when necessary
3. **Immutable Updates**: Proper state updates with immutable patterns

## Common Issues and Solutions

### Cloudinary Asset Not Loading

If a Cloudinary asset fails to load:

1. Check if the asset is properly mapped in `cloudinaryAssets.js`
2. Verify that the asset has been uploaded using the upload script
3. Check environment variables for Cloudinary configuration
4. Look for console errors indicating missing assets

### Component Styling Issues

For issues with component styling:

1. Use browser dev tools to inspect element styles
2. Check Tailwind class ordering (later classes override earlier ones)
3. Verify responsive breakpoints are correctly applied
4. Test on multiple devices and browsers

### Performance Problems

If the application is loading slowly:

1. Check for large unoptimized images or videos
2. Look for unnecessary re-renders using React DevTools
3. Verify that lazy loading is working correctly
4. Consider additional code splitting for large page components

### Routing Issues

If routes are not working correctly:

1. Verify route definitions in App.jsx
2. Check for proper Netlify redirects configuration
3. Ensure links are using the correct paths
4. Clear browser cache when testing route changes

## Development Guidelines

### Adding a New Page

1. Create a new component in the `src/pages/` directory
2. Add the route in `App.jsx`
3. Create the necessary section data in `sectionData.js`
4. Reuse existing section components where possible
5. Add links to the new page in navigation components

### Adding Media Assets

1. Place the asset in the appropriate folder in `src/assets/`
2. Add the asset mapping to `cloudinaryAssets.js`
3. Run the upload script to upload the asset to Cloudinary
4. Use the `CloudinaryImage` or `CloudinaryVideo` component to display it

### Creating a New Component

1. Use the appropriate naming convention (PascalCase)
2. Place the component in the correct directory based on its usage
3. Keep components focused on a single responsibility
4. Document props with comments
5. Consider reusability and performance

### Code Style Guidelines

1. Use descriptive variable and function names
2. Follow consistent formatting (maintained by ESLint)
3. Prefer functional components with hooks over class components
4. Use destructuring for props and state
5. Comment complex logic and component usage

## Environmental Configuration

The application uses environment variables for configuration:

### Required Variables

```
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_API_KEY=your_cloudinary_api_key
VITE_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Environment Setup

1. Create a `.env` file in the root directory
2. Add the required variables
3. Restart the development server
4. Access environment variables with `import.meta.env.VARIABLE_NAME`

### Different Environments

For different environments (development, staging, production):
1. Use `.env.development`, `.env.production`, etc.
2. Vite will load the appropriate file based on the build mode
3. Consider using environment-specific settings for analytics, logging, etc.

## Appendix: Useful Commands

### Development

```bash
# Start development server
npm run dev

# Start development server with host exposed on network
npm run dev -- --host
```

### Building

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint

# Fix automatically fixable ESLint issues
npm run lint -- --fix
```

### Cloudinary

```bash
# Upload assets to Cloudinary
node scripts/upload-to-cloudinary.js
```