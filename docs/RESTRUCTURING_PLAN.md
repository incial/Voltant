# 🏗️ Codebase Restructuring Plan

## Senior Frontend Developer Assessment & Best Practices Guide

**Date:** January 2026  
**Project:** Voltant Energy Website  
**Stack:** React 19, Vite, TailwindCSS, Framer Motion

---

## 📊 Current State Assessment

### ✅ What's Already Good
1. **Domain-driven folder structure** - Pages mirror URL structure
2. **Barrel exports** - Clean `index.js` files for organized imports
3. **Lazy loading** - Pages are code-split with `React.lazy()`
4. **Data separation** - Product data is externalized in `/data` folder
5. **Constants centralization** - Assets, API config in `/constants`
6. **Image optimization** - `OptimizedImage` component with WebP fallbacks

### ⚠️ Areas for Improvement

| Category | Issue | Impact |
|----------|-------|--------|
| **Architecture** | No type safety (TypeScript) | Maintainability, DX |
| **State Management** | Only Context API, no caching | Performance, UX |
| **Testing** | No test infrastructure | Reliability |
| **Error Handling** | No error boundaries | User experience |
| **Accessibility** | Missing ARIA, keyboard nav | A11y compliance |
| **Performance** | No virtualization for lists | Bundle size |
| **Code Duplication** | Repeated patterns in pages | DRY violations |
| **Styling** | Inline Tailwind + custom CSS mix | Consistency |
| **Asset Management** | Dual systems (utils + constants) | Confusion |

---

## 🎯 Restructuring Plan

### Phase 1: Foundation & Tooling (Priority: Critical)

#### 1.1 Migrate to TypeScript
```
src/
├── types/                    # NEW: Global type definitions
│   ├── index.ts
│   ├── components.ts         # Component prop types
│   ├── data.ts              # Data model types
│   ├── api.ts               # API response types
│   └── routes.ts            # Route configuration types
```

**Why:** Type safety catches bugs at compile time, improves IDE support, and makes refactoring safer.

**Action Items:**
- [ ] Add TypeScript to `devDependencies`
- [ ] Create `tsconfig.json` with strict mode
- [ ] Rename `.jsx` → `.tsx` incrementally
- [ ] Define interfaces for all data models
- [ ] Add prop types for all components

#### 1.2 Path Aliases Configuration
```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@data': path.resolve(__dirname, './src/data'),
      '@types': path.resolve(__dirname, './src/types'),
      '@assets': path.resolve(__dirname, './public/assets'),
    }
  }
})
```

**Why:** Cleaner imports, easier refactoring, no relative path hell.

---

### Phase 2: Architecture Improvements (Priority: High)

#### 2.1 New Folder Structure
```
src/
├── app/                      # NEW: App-level concerns
│   ├── App.tsx              # Root component
│   ├── providers.tsx        # All context providers wrapped
│   ├── routes.tsx           # Centralized route definitions
│   └── error-boundary.tsx   # Global error handling
│
├── components/
│   ├── common/              # RENAME: from 'ui' - Atomic components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   ├── Image/
│   │   ├── Card/
│   │   ├── Loader/
│   │   └── index.ts
│   │
│   ├── layout/              # Keep as-is, well organized
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavLink.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── index.ts
│   │   └── Footer/
│   │
│   ├── sections/            # Keep, but consolidate shared
│   │   ├── Hero/
│   │   │   ├── HeroSection.tsx      # Single, configurable hero
│   │   │   ├── HeroContent.tsx
│   │   │   └── index.ts
│   │   └── ...
│   │
│   └── features/            # Feature-specific components
│       ├── ContactForm/
│       │   ├── ContactForm.tsx
│       │   ├── FormFields.tsx
│       │   ├── useContactForm.ts    # Hook extracted
│       │   ├── validation.ts        # Yup schema
│       │   └── index.ts
│       └── ChatButton/
│
├── hooks/                   # NEW: Custom hooks
│   ├── index.ts
│   ├── useScrollPosition.ts
│   ├── useMediaQuery.ts
│   ├── useIntersectionObserver.ts
│   ├── useLocalStorage.ts
│   └── useImagePreload.ts
│
├── services/                # NEW: External integrations
│   ├── index.ts
│   ├── email.service.ts     # EmailJS logic
│   └── analytics.service.ts
│
├── lib/                     # NEW: Third-party configurations
│   ├── framer.ts           # Motion variants/presets
│   ├── tailwind.ts         # Tailwind utility functions
│   └── yup.ts              # Custom Yup validations
│
├── constants/               # Keep, but consolidate
│   ├── index.ts
│   ├── company.ts
│   ├── routes.ts           # MOVE navigation routes here
│   ├── assets.ts           # CONSOLIDATE with localAssets
│   └── config.ts
│
├── data/                    # Keep as-is, well structured
│
├── pages/                   # Keep domain structure
│
├── styles/                  # NEW: Global styles
│   ├── globals.css         # Main stylesheet
│   ├── animations.css      # Keyframe definitions
│   └── utilities.css       # Custom utility classes
│
└── utils/                   # Keep, clean up
    ├── index.ts
    ├── cn.ts               # NEW: className merger (clsx + tailwind-merge)
    ├── format.ts           # Formatting utilities
    └── device.ts
```

#### 2.2 Extract Custom Hooks

Currently, component logic is tightly coupled. Extract reusable hooks:

```typescript
// hooks/useScrollPosition.ts
export function useScrollPosition(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);
  
  return scrolled;
}

// hooks/useIntersectionObserver.ts
export function useIntersectionObserver(
  ref: RefObject<Element>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  // ... implementation
}

// hooks/useMediaQuery.ts
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  // ... implementation for responsive breakpoints
}
```

#### 2.3 Centralized Route Configuration

```typescript
// constants/routes.ts
export const ROUTES = {
  home: '/',
  about: '/about',
  evCharging: {
    index: '/ev-charging',
    ac: '/ev-charging/ac-chargers',
    dc: '/ev-charging/dc-chargers',
    cpo: '/ev-charging/cpo',
    engineering: '/ev-charging/engineering-works',
    more: '/ev-charging/more',
  },
  wasteToEnergy: {
    index: '/waste-to-energy',
    household: '/waste-to-energy/household',
    largeScale: '/waste-to-energy/large-scale',
    containerized: '/waste-to-energy/containerized',
    smartWaste: '/waste-to-energy/smart-waste',
  },
} as const;

// app/routes.tsx
import { lazy } from 'react';
import { ROUTES } from '@constants/routes';

export const routeConfig = [
  { path: ROUTES.home, component: lazy(() => import('@pages/Home')) },
  { path: ROUTES.evCharging.index, component: lazy(() => import('@pages/ev-charging/EvCharging')) },
  // ... etc
];
```

---

### Phase 3: Component Refactoring (Priority: High)

#### 3.1 Consolidate Hero Components

**Problem:** Multiple hero implementations exist:
- `components/sections/home/HeroSection.jsx`
- `components/sections/shared/HeroSection.jsx`
- Inline hero sections in `EvCharging.jsx`, etc.

**Solution:** Single configurable `<Hero>` component:

```typescript
// components/sections/Hero/Hero.tsx
interface HeroProps {
  variant: 'home' | 'page' | 'minimal';
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  breadcrumbs?: string[];
  overlay?: 'dark' | 'gradient' | 'none';
  height?: 'full' | 'large' | 'medium';
  children?: React.ReactNode;
}

export function Hero({ variant, ...props }: HeroProps) {
  // Single source of truth for all hero sections
}
```

#### 3.2 Create Compound Components Pattern

For complex UI elements like the Navbar:

```typescript
// components/layout/Navbar/index.ts
export { Navbar } from './Navbar';
export { NavLink } from './NavLink';
export { MobileMenu } from './MobileMenu';
export { NavDropdown } from './NavDropdown';

// Usage:
<Navbar>
  <Navbar.Brand />
  <Navbar.Links>
    <Navbar.Link to="/">Home</Navbar.Link>
    <Navbar.Dropdown label="EV Charging">
      <Navbar.Link to="/ev-charging/ac">AC Chargers</Navbar.Link>
    </Navbar.Dropdown>
  </Navbar.Links>
  <Navbar.Actions>
    <ContactButton />
  </Navbar.Actions>
</Navbar>
```

#### 3.3 Page Template Pattern

DRY up repeated page structures:

```typescript
// components/templates/ProductPageTemplate.tsx
interface ProductPageProps {
  data: ProductPageData;
}

export function ProductPageTemplate({ data }: ProductPageProps) {
  return (
    <>
      <Hero
        variant="page"
        title={data.hero.title}
        breadcrumbs={data.hero.breadcrumbs}
        backgroundImage={data.hero.heroImage}
      />
      <SeamlessChargingSection {...data.seamlessCharging} />
      <MidSection {...data.midSection} />
      {data.chargerData && <ChargerSection {...data.chargerData} />}
      <ProfilesSection {...data.profiles} />
    </>
  );
}

// pages/ev-charging/AC.tsx - becomes simple:
import { acChargersData } from '@data/ev-charging';

export default function ACChargersPage() {
  return <ProductPageTemplate data={acChargersData} />;
}
```

---

### Phase 4: State Management Enhancement (Priority: Medium)

#### 4.1 Upgrade Context Structure

```typescript
// context/index.ts
export * from './ContactFormContext';
export * from './ThemeContext';      // NEW: Dark mode support
export * from './UIContext';         // NEW: Global UI state

// app/providers.tsx
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <UIProvider>
        <ContactFormProvider>
          {children}
        </ContactFormProvider>
      </UIProvider>
    </ThemeProvider>
  );
}
```

#### 4.2 Consider React Query for Data Fetching

If you plan to add dynamic data:

```typescript
// hooks/queries/useProducts.ts
import { useQuery } from '@tanstack/react-query';

export function useProducts(category: string) {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => fetchProducts(category),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
```

---

### Phase 5: Performance Optimization (Priority: Medium)

#### 5.1 Image Strategy Improvements

```typescript
// components/common/Image/OptimizedImage.tsx
interface OptimizedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

// Add srcSet generation for responsive images
const generateSrcSet = (src: string) => {
  const widths = [640, 768, 1024, 1280, 1536];
  return widths.map(w => `${src}?w=${w} ${w}w`).join(', ');
};
```

#### 5.2 Bundle Optimization

Update Vite config for better code splitting:

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animation': ['framer-motion'],
          'form': ['react-hook-form', '@hookform/resolvers', 'yup'],
          'icons': ['react-icons'],
        },
      },
    },
  },
});
```

#### 5.3 Component Memoization

```typescript
// Wrap expensive list renders
const ServiceCard = memo(function ServiceCard({ ... }) {
  // ...
});

// Use useMemo for derived data
const filteredProducts = useMemo(
  () => products.filter(p => p.category === activeCategory),
  [products, activeCategory]
);
```

---

### Phase 6: Testing Infrastructure (Priority: Medium)

#### 6.1 Setup Testing Stack

```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['node_modules/', 'src/test/'],
    },
  },
});
```

#### 6.2 Test File Structure

```
src/
├── components/
│   └── common/
│       └── Button/
│           ├── Button.tsx
│           ├── Button.test.tsx    # Unit tests
│           └── Button.stories.tsx # Storybook (optional)
```

---

### Phase 7: Developer Experience (Priority: Low)

#### 7.1 ESLint & Prettier Enhancement

```javascript
// eslint.config.js - enhanced
export default [
  // ... existing config
  {
    rules: {
      'react/prop-types': 'off', // Using TypeScript
      'react/jsx-sort-props': 'warn',
      'import/order': ['warn', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
      }],
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
```

#### 7.2 Git Hooks with Husky

```json
// package.json
{
  "scripts": {
    "prepare": "husky install",
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,json,md}": ["prettier --write"]
  }
}
```

---

### Phase 8: Accessibility (Priority: Medium)

#### 8.1 A11y Improvements Checklist

- [ ] Add `aria-label` to icon-only buttons
- [ ] Implement keyboard navigation for mobile menu
- [ ] Add `role` attributes to custom components
- [ ] Ensure color contrast ratios meet WCAG 2.1
- [ ] Add skip-to-content link
- [ ] Test with screen reader

#### 8.2 Focus Management

```typescript
// hooks/useFocusTrap.ts
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isActive) return;
    // Trap focus within modal/menu
  }, [isActive]);
  
  return containerRef;
}
```

---

## 📋 Implementation Roadmap

### Sprint 1 (Week 1-2): Foundation
- [ ] Add TypeScript configuration
- [ ] Set up path aliases
- [ ] Create `types/` directory with initial interfaces
- [ ] Consolidate asset management (merge utils/localAssets into constants/assets)

### Sprint 2 (Week 3-4): Architecture
- [ ] Create `hooks/` directory and extract custom hooks
- [ ] Set up `app/` directory with providers pattern
- [ ] Centralize route configuration
- [ ] Add error boundaries

### Sprint 3 (Week 5-6): Components
- [ ] Consolidate Hero components into single configurable version
- [ ] Create ProductPageTemplate
- [ ] Refactor Navbar with compound components
- [ ] Add className utility (`cn()`)

### Sprint 4 (Week 7-8): Quality
- [ ] Set up Vitest and testing infrastructure
- [ ] Write tests for critical components
- [ ] Add accessibility improvements
- [ ] Performance audit with Lighthouse

### Sprint 5 (Week 9-10): Polish
- [ ] Complete TypeScript migration
- [ ] Set up Husky pre-commit hooks
- [ ] Documentation updates
- [ ] Final code review and cleanup

---

## 🔧 Quick Wins (Do Immediately)

### 1. Add Utility Function for ClassNames
```typescript
// utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage:
<div className={cn(
  'base-styles',
  isActive && 'active-styles',
  className
)} />
```

### 2. Consolidate Loaders
```typescript
// components/common/Loader/Loader.tsx
interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white';
}

export function Loader({ size = 'md', color = 'primary' }: LoaderProps) {
  const sizes = { sm: 'w-6 h-6', md: 'w-12 h-12', lg: 'w-16 h-16' };
  const colors = { primary: 'border-green-400', white: 'border-white' };
  
  return (
    <div className={cn(
      'border-4 border-t-transparent rounded-full animate-spin',
      sizes[size],
      colors[color]
    )} />
  );
}
```

### 3. Extract Animation Variants
```typescript
// lib/framer.ts
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const slideIn = {
  left: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
```

---

## 📊 Success Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Lighthouse Performance | ~75 | 90+ |
| Lighthouse Accessibility | ~80 | 95+ |
| Bundle Size (gzipped) | ~450KB | <300KB |
| Type Coverage | 0% | 100% |
| Test Coverage | 0% | 70% |
| Build Time | ~15s | <10s |

---

## 📚 Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind Best Practices](https://tailwindcss.com/docs/reusing-styles)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- [React Patterns](https://reactpatterns.com/)

---

*This plan should be executed incrementally. Each phase can be completed independently without breaking existing functionality.*
