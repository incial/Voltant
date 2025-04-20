# Voltant Energy - Website

A modern, responsive React website for Voltant Energy, showcasing sustainable energy solutions including EV charging infrastructure, waste-to-energy technology, and smart waste management systems.

## Project Overview

This website serves as a digital platform for Voltant Energy, highlighting their innovative solutions in:

- **EV Charging Infrastructure** - AC/DC charging stations, engineering works, and CPO (Charge Point Operator) services
- **Waste-to-Energy Technology** - Household-scale, large-scale, and containerized biogas plants
- **Smart Waste Management** - Smart waste segregation bins and sustainable waste solutions

The website is designed to provide detailed information about each service line while maintaining a cohesive brand identity throughout the user experience.

## Project Structure

```
├── docs/                         # Project documentation
│   ├── cloudinary-documentation.md  # Cloudinary integration guides
│   └── Division_of_Labor.md      # Team task assignment
│
├── public/                       # Public assets
│   ├── Logo_icon.svg             # Site favicon
│   └── Videos/                   # Video assets (before Cloudinary upload)
│
├── scripts/                      # Utility scripts
│   └── upload-to-cloudinary.js   # Cloudinary asset upload script
│
├── src/                          # Source code
│   ├── assets/                   # Local assets (images, icons)
│   │   ├── icons/                # SVG icons for UI components
│   │   └── images/               # Image assets (before Cloudinary upload)
│   │       └── clients/          # Client logos and images
│   │
│   ├── components/               # React components
│   │   ├── common/               # Shared UI components
│   │   │   ├── ChatButton.jsx    # Customer support chat button
│   │   │   ├── CloudinaryImage.jsx # Cloudinary image component
│   │   │   ├── CloudinaryVideo.jsx # Cloudinary video component
│   │   │   ├── Footer.jsx        # Site footer
│   │   │   ├── Navbar.jsx        # Site navigation
│   │   │   └── ServiceCard.jsx   # Service display card
│   │   │   └── SectionComponents/ # Reusable section components
│   │   │       ├── HeroSection.jsx
│   │   │       ├── MidSection.jsx
│   │   │       ├── ProfilesSection.jsx
│   │   │       └── SeamlessChargingSection.jsx
│   │   │
│   │   └── HomeSection/          # Home page specific components
│   │       ├── ClientsSection.jsx # Client showcase section
│   │       ├── ConncetWithUs.jsx  # Contact prompt section
│   │       ├── HeroSection.jsx    # Home page hero section
│   │       ├── ImpactMetrics.jsx  # Statistics display
│   │       ├── SplitImages.jsx    # Image layout component
│   │       ├── VideoBanner.jsx    # Video banner component
│   │       └── WhoAreWe.jsx       # Company introduction section
│   │
│   ├── pages/                    # Page components
│   │   ├── AC.jsx                # AC charging solutions page
│   │   ├── Containerized.jsx     # Containerized waste-to-energy page
│   │   ├── Cpo.jsx               # Charge Point Operator services page
│   │   ├── DC.jsx                # DC charging solutions page
│   │   ├── EngineeringWorks.jsx  # Engineering services page
│   │   ├── EvCharging.jsx        # EV charging main page
│   │   ├── Home.jsx              # Homepage
│   │   ├── Household.jsx         # Household waste solutions page
│   │   ├── LargeScale.jsx        # Large-scale waste solutions page
│   │   ├── More.jsx              # Additional services page
│   │   ├── SmartWaste.jsx        # Smart waste management page
│   │   └── WasteToEnergy.jsx     # Waste-to-energy main page
│   │
│   ├── utils/                    # Utility functions
│   │   ├── cloudinary.js         # Cloudinary configuration
│   │   ├── cloudinaryAssets.js   # Asset mapping for Cloudinary
│   │   ├── cloudinaryHelper.js   # Helper functions for Cloudinary
│   │   └── sectionData.js        # Content data for website sections
│   │
│   ├── App.css                   # Global CSS styles
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # Base CSS styles
│   └── main.jsx                  # Application entry point
│
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML entry point
├── netlify.toml                  # Netlify deployment configuration
├── package.json                  # Project dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
└── vite.config.js                # Vite build configuration
```

## Technologies Used

### Core Technologies

- **React 19** - UI library for building the user interface
- **Vite 6** - Build tool and development server
- **React Router DOM 7** - For routing and navigation
- **Tailwind CSS 4** - Utility-first CSS framework for styling

### Animation and UI Effects

- **Framer Motion** - For smooth animations and transitions
- **GSAP** - For advanced animations

### Media Management

- **Cloudinary** - For image and video optimization, transformation, and delivery
- **@cloudinary/react** - React components for Cloudinary
- **@cloudinary/url-gen** - URL generation for Cloudinary assets

### Additional Packages

- **React Icons** - Icon library
- **Axios** - HTTP client for API requests
- **dotenv** - Environment variable management

### Development Tools

- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - Adding vendor prefixes to CSS

## Key Features

1. **Responsive Design** - Fully responsive layout that works on all devices
2. **Optimized Media Delivery** - Using Cloudinary for efficient image/video loading
3. **Modern UI/UX** - Smooth animations and transitions using Framer Motion and GSAP
4. **Component-Based Architecture** - Reusable React components for consistent UI
5. **Content Management** - Centralized content in sectionData.js for easy updates
6. **Performance Optimization** - Lazy loading and optimized asset delivery

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd folder
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:

```
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_API_KEY=your_cloudinary_api_key
VITE_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Cloudinary Integration

This project uses Cloudinary for efficient media management. The workflow is:

1. Local assets are mapped in `src/utils/cloudinaryAssets.js`
2. The `upload-to-cloudinary.js` script is used to upload assets to Cloudinary
3. The `CloudinaryImage` and `CloudinaryVideo` components handle optimized delivery

For more details, see the `docs/cloudinary-documentation.md` file.

## Project Sections

### EV Charging

- AC Chargers
- DC Chargers
- Engineering Works
- CPO (Charge Point Operator) Services
- Additional Services

### Waste-to-Energy

- Household Solutions
- Large-Scale Plants
- Containerized Plants
- Smart Waste Management

## Deployment

This project is configured for deployment on Netlify using the `netlify.toml` configuration file.

## Best Practices

- **Component Reusability** - Common UI elements are abstracted into reusable components
- **Performance Optimization** - Lazy loading, code splitting, and optimized assets
- **Responsive Design** - Mobile-first approach with responsive breakpoints
- **Semantic HTML** - Proper use of HTML5 elements for accessibility
- **Code Organization** - Clear folder structure and separation of concerns

## Future Enhancements

- Implement internationalization for multiple languages
- Add a blog/news section
- Integrate a contact form with backend API
- Add a customer portal for EV charging customers
- Implement dark/light theme switching

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contributors

- [Abin Varghese](https://github.com/AbinVarghexe) 
- [Bava Kurian Varghese](https://github.com/bava-kurian) 
- [Amarnath C](https://github.com/AmarnathCJD)

To contribute to this project:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
