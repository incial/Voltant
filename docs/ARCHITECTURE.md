# 🔧 Architecture & Refactoring Guide

Enterprise-level codebase architecture and refactoring documentation for Voltant Energy.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Constants Directory](#constants-directory)
- [Data Models](#data-models)
- [Import Patterns](#import-patterns)
- [Pending Work](#pending-work)
- [Benefits](#benefits)

---

## Overview

The Voltant Energy codebase follows an enterprise-level organized architecture with:

- **Separation of concerns** - Data, constants, components, and logic properly separated
- **Domain-organized structure** - Mirrors URL structure for easy navigation
- **Modular architecture** - Easy to add new products/services
- **Consistent patterns** - All data models follow the same schema

---

## Project Structure

```
voltant/
├── src/
│   ├── constants/           # Application constants
│   │   ├── company.js       # Company info, social links
│   │   ├── navigation.js    # Routes, breadcrumbs
│   │   ├── api.js           # API config, EmailJS
│   │   ├── assets.js        # Asset paths, loader
│   │   ├── config.js        # App config, features
│   │   └── index.js         # Barrel export
│   │
│   ├── data/                # Domain data models
│   │   ├── ev-charging/     # EV charging products
│   │   │   ├── ac-chargers.js
│   │   │   ├── dc-chargers.js
│   │   │   ├── cpo.js
│   │   │   ├── engineering-works.js
│   │   │   ├── more.js
│   │   │   └── index.js
│   │   ├── waste-to-energy/ # Waste-to-energy products
│   │   │   ├── household.js
│   │   │   ├── large-scale.js
│   │   │   ├── containerized.js
│   │   │   ├── smart-waste.js
│   │   │   └── index.js
│   │   └── index.js
│   │
│   ├── components/          # React components
│   │   ├── features/        # Feature components
│   │   ├── forms/           # Form components
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Section components
│   │   └── ui/              # UI components
│   │
│   ├── context/             # React context
│   ├── pages/               # Route pages
│   └── utils/               # Utilities
│
├── docs/                    # Documentation
├── public/                  # Static assets
└── scripts/                 # Build scripts
```

---

## Constants Directory

### company.js
- Company information
- Social links
- Business hours
- Partners
- Copyright utilities

### navigation.js
- Navigation structure
- Breadcrumbs generator
- CTA buttons
- Route definitions

### api.js
- API base URLs
- Endpoints
- EmailJS configuration
- Timeout settings
- Retry logic

### assets.js
- Organized asset paths (logos, icons, videos, images, PDFs)
- AssetLoader class for preloading

### config.js
- Application configuration
- Feature flags
- UI settings
- SEO metadata
- Validation rules

---

## Data Models

### Schema Structure

All data models follow a consistent structure:

```javascript
{
  hero: { 
    title, 
    breadcrumbs, 
    showSubtitle, 
    subtitle?, 
    heroImage 
  },
  seamlessCharging: { 
    title, 
    paragraphs[] 
  },
  midSection: { 
    backgroundImage, 
    sectionTitle, 
    features[] 
  },
  // Product-specific sections:
  chargerData?: { ... },  // For AC/DC chargers
  howItWorks?: { ... },   // For CPO
  profiles?: { ... }      // For other services
}
```

### EV Charging Models

| File | Content |
|------|---------|
| `ac-chargers.js` | AC charger products (7kW, 11kW, 22kW) |
| `dc-chargers.js` | DC fast chargers (30kW to 360kW) |
| `cpo.js` | Charge Point Operator info |
| `engineering-works.js` | Engineering services |
| `more.js` | Additional services |

### Waste-to-Energy Models

| File | Content |
|------|---------|
| `household.js` | Household biogas systems |
| `large-scale.js` | Large-scale plants |
| `containerized.js` | Containerized plants |
| `smart-waste.js` | Smart waste bins |

---

## Import Patterns

### Old Pattern (Deprecated)

```javascript
// Don't use
import { ACData } from '../utils/sectionData';
import evImgs from '../utils/localAssets';
```

### New Pattern

```javascript
// Use this
import { acChargersData } from '../data/ev-charging/ac-chargers';

// Or using barrel export
import { acChargersData } from '../data';

// Assets
import { EV_IMAGES } from '../../constants/assets';
```

---

## Pending Work

### 1. Extract UI Components
Create `components/ui/` for atomic components:
- Button (primary, secondary, outline, ghost)
- Icon wrapper
- Loader/Spinner
- SocialMediaLinks
- Breadcrumb
- Card

### 2. Custom Hooks
Create `hooks/` directory:
- `useScrollPosition`
- `useIntersectionObserver`
- `useFormValidation`
- `useAssetPreloader`
- `useWindowSize`
- `useLocalStorage`

### 3. Services Layer
Create `services/` directory:
- `email.service.js`
- `api.service.js`
- `analytics.service.js`
- `storage.service.js`

---

## Benefits

### Maintainability
- Reduced file sizes (monolithic split into focused files)
- Clear ownership per file
- Easy to locate (domain-organized)

### Scalability
- Modular architecture
- Barrel exports for clean imports
- Constants separation

### Code Quality
- Separation of concerns
- Consistent patterns
- Zero breaking changes during migration
- JSDoc documentation

### Developer Experience
- Easier navigation
- Faster development
- Better collaboration
- Clear structure reduces conflicts

---

## Migration Notes

When adding new features:

1. Add data to appropriate `data/` subdirectory
2. Use constants from `constants/` directory
3. Follow existing schema patterns
4. Use barrel exports
5. Update documentation

---

**Related Documentation:**
- [Full Documentation](./DOCUMENTATION.md)
- [Features](./FEATURES.md)
- [Styling Guide](./STYLING_GUIDE.md)
