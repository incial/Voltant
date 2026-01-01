# 📖 Voltant Energy Documentation

> Complete technical documentation for the Voltant Energy website.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Cloudinary Integration](#cloudinary-integration)
- [Contact Form & EmailJS](#contact-form--emailjs)
- [Netlify Deployment](#netlify-deployment)
- [Development Guidelines](#development-guidelines)
- [Service Offerings](#service-offerings)

---

## Overview

Voltant Energy's website is a modern React-based platform showcasing sustainable energy solutions:

- **EV Charging Infrastructure**: AC/DC charging stations, engineering support, and CPO services
- **Waste-to-Energy Technology**: Biogas solutions from household to industrial scale
- **Smart Waste Management**: Advanced waste segregation and disposal systems

The platform delivers a cohesive brand experience with optimized performance through advanced media delivery and serverless architecture.

---

## Architecture

### Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19, Vite 6, React Router DOM 7 |
| **Styling** | Tailwind CSS 4, PostCSS, Autoprefixer |
| **Animations** | Framer Motion, GSAP |
| **Backend** | Netlify Functions (serverless) |
| **Media** | Cloudinary CDN |
| **Forms** | React Hook Form, Yup, EmailJS |

### Key Design Patterns

- **Component Architecture**: Modular, reusable components for consistent UI
- **Centralized Content**: Data management in `sectionData.js` for easy updates
- **Context API**: React Context for global state management
- **Lazy Loading**: Code splitting and lazy loading for optimal performance

---

## Project Structure

```
voltant/
├── docs/                         # Project documentation
│   ├── DOCUMENTATION.md          # This file
│   ├── QUICKSTART.md             # Quick start guide
│   └── FEATURES.md               # Features documentation
│
├── netlify/                      # Netlify configuration
│   └── functions/                # Serverless functions
│       └── send-email.js         # Contact form email processing
│
├── public/                       # Public static assets
│   ├── _redirects                # Netlify routing configuration
│   └── robots.txt                # Search engine directives
│
├── scripts/                      # Utility scripts
│   └── test-emailjs.js           # EmailJS testing utility
│
├── src/                          # Frontend source code
│   ├── components/               # React components
│   │   ├── features/             # Feature components (ChatButton)
│   │   ├── forms/                # Form components (ContactForm)
│   │   ├── layout/               # Layout components (Navbar, Footer)
│   │   ├── sections/             # Section components (home, shared)
│   │   └── ui/                   # UI components (ServiceCard)
│   │
│   ├── constants/                # Application constants
│   │   ├── api.js                # API configuration
│   │   ├── assets.js             # Asset constants
│   │   ├── company.js            # Company information
│   │   ├── config.js             # App configuration
│   │   └── navigation.js         # Navigation routes
│   │
│   ├── context/                  # React context providers
│   │   └── ContactFormContext.jsx
│   │
│   ├── data/                     # Data files
│   │   ├── ev-charging/          # EV charging product data
│   │   └── waste-to-energy/      # Waste-to-energy product data
│   │
│   ├── pages/                    # Page components (routes)
│   │   ├── Home.jsx              # Homepage
│   │   ├── about/                # About pages
│   │   ├── ev-charging/          # EV charging pages
│   │   ├── services/             # Service pages
│   │   └── waste-to-energy/      # Waste-to-energy pages
│   │
│   ├── utils/                    # Utility functions
│   │   ├── localAssets.js        # Local asset helpers
│   │   └── sectionData.js        # Centralized content data
│   │
│   ├── App.jsx                   # Main application component
│   └── main.jsx                  # Application entry point
│
├── netlify.toml                  # Netlify deployment configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── vite.config.js                # Vite build configuration
```

---

## Cloudinary Integration

### Configuration

Cloudinary is configured for optimized media delivery with automatic format conversion and responsive sizing.

### Asset Management

1. **Asset Mapping**: Local files are mapped to Cloudinary public IDs
2. **Optimized Delivery**: Automatic WebP/AVIF conversion for images
3. **Responsive Images**: Viewport-based sizing with breakpoints
4. **Lazy Loading**: Intersection Observer for performance

### Upload Workflow

```bash
# Upload assets to Cloudinary
node scripts/upload-to-cloudinary.js

# Verify existing assets
node scripts/upload-to-cloudinary.js --verify
```

---

## Contact Form & EmailJS

### Overview

The contact form uses EmailJS for client-side email delivery without backend infrastructure.

### Template Variables

| Variable | Description |
|----------|-------------|
| `from_name` | User's name |
| `from_email` | User's email |
| `message` | User's message |
| `to_name` | "Voltant Energy" |
| `reply_to` | User's email for replies |

### Configuration

Set these environment variables in `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

For detailed setup, see [EMAILJS_SETUP.md](../EMAILJS_SETUP.md).

---

## Netlify Deployment

### Configuration

The `netlify.toml` file configures:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects for client-side routing

### Environment Variables

Required in Netlify dashboard:

```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=contact@voltant-energy.com
```

### Serverless Functions

- **send-email.js**: Handles contact form submissions via nodemailer
- Implements CORS handling and input validation
- Automatic deployment with the main build

---

## Development Guidelines

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Create content data in `src/data/` or `sectionData.js`
4. Reuse existing section components where possible

### Component Best Practices

- Use modular, reusable components
- Implement lazy loading for heavy components
- Follow mobile-first responsive design
- Use semantic HTML and ARIA attributes
- Handle errors gracefully with fallback states

### Code Style

- Follow ESLint configuration
- Use meaningful component and variable names
- Keep components focused and single-purpose
- Document complex logic with comments

---

## Service Offerings

### EV Charging

| Service | Description |
|---------|-------------|
| AC Chargers | Level 2 charging solutions for residential and commercial |
| DC Chargers | Fast charging for public and fleet applications |
| Engineering Works | Installation, maintenance, and support services |
| CPO Services | Complete charging point operator infrastructure |
| Additional Services | Accessories, AMC, conversions, billing systems |

### Waste-to-Energy

| Solution | Description |
|----------|-------------|
| Household | Compact biogas units for residential use |
| Large-Scale | Industrial biogas production facilities |
| Containerized | Modular, plug-and-play biogas systems |
| Smart Waste | Technology-enabled waste segregation |

---

## Related Documentation

- ⚡ [Quick Start Guide](./QUICKSTART.md)
- 🛠️ [Features](./FEATURES.md)
- 🎨 [Styling Guide](./STYLING_GUIDE.md)
- 🔧 [Architecture](./ARCHITECTURE.md)
- 📧 [EmailJS Setup](./EMAILJS_SETUP.md)

---

## Contributing

See the main [README.md](../README.md) for contribution guidelines.

---

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
