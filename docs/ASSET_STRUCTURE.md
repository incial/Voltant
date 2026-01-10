# Asset Structure Guide

This document describes the organized asset structure for the Voltant Energy website.

## Directory Structure

```
public/
├── Logo_icon.svg              # Favicon/App icon
├── robots.txt                 # SEO robots file
├── _redirects                 # Netlify redirects
│
├── assets/
│   ├── icons/                 # PNG icons for features
│   │   ├── battery.png
│   │   ├── comet.png
│   │   ├── crop.png
│   │   ├── folder.png
│   │   ├── leaf.png
│   │   ├── like.png
│   │   ├── multi.png
│   │   ├── power.png          # Renamed from Power.png
│   │   ├── scale.png          # Renamed from Scale.png
│   │   ├── scale-money.png    # Renamed from Scale_money.png
│   │   ├── shield.png         # Renamed from sheild.png
│   │   ├── star.png
│   │   ├── stat.png
│   │   ├── sun.png
│   │   ├── time.png           # Renamed from TIme.png
│   │   ├── water.png
│   │   └── waterpure.png
│   │
│   └── images/
│       ├── home/              # Renamed from Home/
│       │   ├── hero/          # Hero carousel images
│       │   │   ├── hero1.png
│       │   │   ├── hero1-480w.png
│       │   │   ├── hero1-768w.png
│       │   │   ├── hero1-1200w.png
│       │   │   ├── hero2.png
│       │   │   └── ...
│       │   ├── split/         # Split section images
│       │   │   ├── split1.png
│       │   │   └── split2.png
│       │   ├── clients/       # Client logos
│       │   │   ├── client-1.png
│       │   │   └── ...
│       │   ├── logo.png
│       │   ├── logo-white.png
│       │   ├── logo-icon.png
│       │   ├── about-us.png
│       │   ├── footer.png
│       │   └── ...
│       │
│       ├── ev-charging/       # Renamed from EV_charging/
│       │   ├── ac-charger.png
│       │   ├── ac-charger-480w.png
│       │   ├── dc-charger.png
│       │   ├── cpo.png
│       │   ├── engineering-works.png
│       │   └── ...
│       │
│       ├── waste-to-energy/   # Renamed from WateTOEnergy/
│       │   ├── biogas.png
│       │   ├── large-scale-plant.png
│       │   ├── containerized-plant.png
│       │   ├── smart-waste.png
│       │   └── ...
│       │
│       └── showcase/          # Renamed from showcaseimages/
│           ├── image-13.png
│           ├── image-14.png
│           └── ...
│
├── videos/                    # Video assets (renamed from Videos/)
│   ├── HeroVid1.mp4
│   ├── HeroVid2.mp4
│   ├── HeroVid3.mp4
│   └── ...
│
└── pdfs/                      # PDF documents
    ├── voltant-energy-charging-profile.pdf
    └── food-organic-waste-to-energy-profile.pdf
```

## Using Assets in Code

### Import from Constants

```javascript
// New modular imports (recommended)
import { LOGOS, EV_IMAGES, WASTE_IMAGES } from '@constants/assets';
import { ICONS, getIcon } from '@constants/assets/icons';
import { preloadImage, createSrcSet } from '@constants/assets/loaders';

// Legacy imports (still work but deprecated)
import { LOGOS, ICONS } from '@constants/assets.js';
```

### Example Usage

```jsx
import { LOGOS, EV_IMAGES } from '@constants/assets';
import { createSrcSet, createSizes } from '@constants/assets/loaders';

function ProductCard() {
  const acImages = EV_IMAGES.ac;
  
  return (
    <img
      src={acImages.hero.original}
      srcSet={createSrcSet(acImages.hero)}
      sizes={createSizes({ mobile: '100vw', tablet: '50vw', desktop: '33vw' })}
      alt="AC Charger"
    />
  );
}
```

### Responsive Images

The new asset system includes built-in support for responsive images:

```javascript
import { getResponsiveImagePaths } from '@constants/assets/paths';

const heroImages = getResponsiveImagePaths('hero', 'hero1');
// Returns:
// {
//   original: '/assets/images/home/hero/hero1.png',
//   mobile: '/assets/images/home/hero/hero1-480w.png',
//   tablet: '/assets/images/home/hero/hero1-768w.png',
//   desktop: '/assets/images/home/hero/hero1-1200w.png',
//   large: '/assets/images/home/hero/hero1-1600w.png',
//   xl: '/assets/images/home/hero/hero1-1920w.png',
// }
```

## Migration Guide

### Old Path → New Path

| Old Path | New Path |
|----------|----------|
| `/assets/images/Home/` | `/assets/images/home/` |
| `/assets/images/EV_charging/` | `/assets/images/ev-charging/` |
| `/assets/images/WateTOEnergy/` | `/assets/images/waste-to-energy/` |
| `/assets/images/showcaseimages/` | `/assets/images/showcase/` |
| `/images/hero/` | `/assets/images/home/hero/` |
| `/assets/icons/Power.png` | `/assets/icons/power.png` |
| `/assets/icons/Scale.png` | `/assets/icons/scale.png` |
| `/assets/icons/Scale_money.png` | `/assets/icons/scale-money.png` |
| `/assets/icons/TIme.png` | `/assets/icons/time.png` |
| `/assets/icons/sheild.png` | `/assets/icons/shield.png` |

### Running the Migration Script

To automatically reorganize assets:

```bash
node scripts/reorganize-assets.js
```

**Note:** The script will:
1. Rename icon files to lowercase/kebab-case
2. Rename image folders to lowercase/kebab-case
3. Merge duplicate hero image folders
4. Create any missing directories

## Best Practices

1. **Use Constants**: Always import asset paths from constants, never hardcode paths
2. **Responsive Images**: Use `srcSet` and `sizes` for responsive image loading
3. **Preloading**: Use `preloadImage()` for critical above-fold images
4. **Naming**: Use lowercase kebab-case for all new assets (e.g., `my-image.png`)
5. **Organization**: Place new images in the appropriate category folder
