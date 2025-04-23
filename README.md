# Voltant Energy

![Voltant Energy](src/assets/images/Logo.png)

> Modern, responsive React website for Voltant Energy, showcasing sustainable energy solutions including EV charging infrastructure, waste-to-energy technology, and smart waste management systems.

## 📑 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Backend Server](#-backend-server)
- [Service Offerings](#-service-offerings)
- [Media Integration](#-media-integration)
- [Deployment](#-deployment)
- [Best Practices](#-best-practices) 
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Project Overview

Voltant Energy's website serves as a digital platform highlighting their innovative sustainable energy solutions in:

- **EV Charging Infrastructure**: Comprehensive solutions including AC/DC charging stations, engineering support, and Charge Point Operator services
- **Waste-to-Energy Technology**: Convert organic waste to energy through household, containerized, and large-scale biogas plants
- **Smart Waste Management**: Advanced waste segregation bins and sustainable disposal solutions

The platform delivers a cohesive brand experience while providing in-depth information about each service line through an optimized, performance-focused design.

## ✨ Key Features

- **Responsive Design**: Seamless experience across all devices (mobile, tablet, desktop)
- **Optimized Media**: Advanced media delivery through Cloudinary integration
- **Modern UI/UX**: Smooth animations and transitions powered by Framer Motion and GSAP
- **Component Architecture**: Modular, reusable components for consistent UI
- **Content Management**: Centralized content in sectionData.js for easy updates
- **Performance Focused**: Lazy loading, optimized assets, and efficient code structure
- **Backend Integration**: Simple Express server for contact form processing and API integrations

## 🛠️ Technologies

### Core Stack
- **Frontend**: React 19, Vite 6, React Router DOM 7
- **Styling**: Tailwind CSS 4, PostCSS, Autoprefixer
- **Animations**: Framer Motion, GSAP
- **Backend**: Express.js (for contact form processing and API endpoints)

### Media Management
- **Cloudinary**: Image/video optimization, transformation, and delivery
- **Cloudinary SDK**: @cloudinary/react, @cloudinary/url-gen

### Development Tools
- **Code Quality**: ESLint 9
- **Package Management**: npm/yarn
- **Environment Variables**: dotenv
- **UI Components**: React Icons
- **HTTP Client**: Axios

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd voltant-energy
   ```

2. Install dependencies for frontend
   ```bash
   npm install
   ```

3. Install dependencies for backend
   ```bash
   cd server
   npm install
   cd ..
   ```

4. Create environment variables
   Create a `.env` file in the root directory:
   ```
   VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   VITE_CLOUDINARY_API_KEY=your_cloudinary_api_key
   VITE_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

5. Start development server for frontend
   ```bash
   npm run dev
   ```
   
6. Start the backend server (in a separate terminal)
   ```bash
   cd server
   node index.js
   ```
   
7. Open http://localhost:5173 in your browser

### Building for Production

```bash
# Build frontend
npm run build

# For production deployment, see deployment section
```

The optimized build files will be in the `dist` directory.

To preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
├── docs/                         # Project documentation
│   ├── cloudinary-documentation.md  # Cloudinary integration guide
│   └── technical-documentation.md   # Detailed technical documentation
│
├── public/                       # Public static assets
│   └── Logo_icon.svg             # Site favicon and logo
│
├── scripts/                      # Utility scripts
│   └── upload-to-cloudinary.js   # Script for uploading assets to Cloudinary
│
├── server/                       # Backend Express server
│   ├── index.js                  # Main server file with API endpoints
│   └── package.json              # Server dependencies
│
├── src/                          # Frontend source code
│   ├── assets/                   # Local assets
│   │   ├── icons/                # SVG icons organized by section
│   │   │   └── containerized/    # Icons for containerized plants section
│   │   └── images/               # Images organized by section
│   │       └── clients/          # Client logos and images
│   │       └── containerized/    # Images for containerized plants section
│   │
│   ├── components/               # React components
│   │   ├── common/               # Shared UI components
│   │   │   ├── ChatButton.jsx    # WhatsApp chat button 
│   │   │   ├── CloudinaryImage.jsx # Optimized image component
│   │   │   ├── CloudinaryVideo.jsx # Optimized video component
│   │   │   ├── ContactForm.jsx   # Contact form component
│   │   │   ├── Footer.jsx        # Site footer component
│   │   │   ├── Navbar.jsx        # Navigation component
│   │   │   ├── ServiceCard.jsx   # Service display card
│   │   │   └── SectionComponents/ # Reusable section templates
│   │   │       ├── charger.jsx   # EV charger specifications
│   │   │       ├── HeroSection.jsx # Page hero sections
│   │   │       ├── MidSection.jsx # Feature showcase sections
│   │   │       ├── ProfilesSection.jsx # Detailed service profiles
│   │   │       └── SeamlessChargingSection.jsx # Content sections
│   │   │
│   │   └── HomeSection/          # Home page specific components
│   │       ├── ClientsSection.jsx # Client logos showcase
│   │       ├── ConncetWithUs.jsx  # Contact prompt section
│   │       ├── HeroSection.jsx    # Home page hero
│   │       ├── ImpactMetrics.jsx  # Statistics display
│   │       ├── SplitImages.jsx    # Image grid layout
│   │       ├── VideoBanner.jsx    # Video banner section
│   │       └── WhoAreWe.jsx       # Company introduction
│   │
│   ├── context/                  # React context providers
│   │   └── ContactFormContext.jsx # Contact form state management
│   │
│   ├── pages/                    # Page components (routes)
│   │   ├── AC.jsx                # AC chargers page
│   │   ├── Containerized.jsx     # Containerized plants page
│   │   ├── Cpo.jsx               # Charge Point Operator page
│   │   ├── DC.jsx                # DC chargers page
│   │   ├── EngineeringWorks.jsx  # Engineering services page
│   │   ├── EvCharging.jsx        # EV charging main page
│   │   ├── GetInTouch.jsx        # Contact page
│   │   ├── Home.jsx              # Homepage
│   │   ├── Household.jsx         # Household solutions page
│   │   ├── LargeScale.jsx        # Large-scale plants page
│   │   ├── More.jsx              # Additional services page
│   │   ├── SmartWaste.jsx        # Smart waste management page
│   │   └── WasteToEnergy.jsx     # Waste-to-energy main page
│   │
│   ├── utils/                    # Utility functions
│   │   ├── cloudinary.js         # Cloudinary instance configuration
│   │   ├── cloudinaryAssets.js   # Asset mapping for Cloudinary
│   │   ├── cloudinaryHelper.js   # Helper functions for Cloudinary
│   │   └── sectionData.js        # Centralized content data
│   │
│   ├── App.css                   # Global CSS styles
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # Base CSS styles
│   └── main.jsx                  # Application entry point
│
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML entry point
├── LICENSE                       # Project license file
├── netlify.toml                  # Netlify deployment configuration
├── package.json                  # Frontend dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
└── vite.config.js                # Vite build configuration
```

## 🖥️ Backend Server

The project includes a simple Express backend server for handling functionality that requires server-side processing:

### Server Structure

- **Location**: `/server` directory
- **Main File**: `index.js` - Contains API routes and server configuration
- **Dependencies**: Listed in `/server/package.json`

### API Endpoints

The backend server provides the following endpoints:

1. **Contact Form Submission**
   - `POST /api/contact` - Processes contact form submissions and sends email notifications

2. **Newsletter Subscription**
   - `POST /api/subscribe` - Handles newsletter subscription requests

### Starting the Server

```bash
cd server
node index.js
```

The server runs on port 3000 by default and can be configured through environment variables.

### Production Deployment

For production, the server should be deployed to a suitable hosting environment (e.g., Heroku, AWS, DigitalOcean) with appropriate environment variables set.

## 🔍 Service Offerings

### EV Charging
- AC Chargers: Efficient Level 2 charging solutions
- DC Chargers: Fast charging for commercial and public use
- Engineering Works: Installation, maintenance, and support services
- CPO Services: Complete charging point operator infrastructure
- Additional Services: Accessories, AMC, conversions, and billing systems

### Waste-to-Energy
- Household Solutions: Compact biogas units for residential use
- Large-Scale Plants: Industrial biogas production facilities
- Containerized Plants: Modular, plug-and-play biogas systems
- Smart Waste Management: Technology-enabled waste segregation and processing

## 🖼️ Media Integration

This project uses Cloudinary for efficient media management:

1. Asset mapping in `src/utils/cloudinaryAssets.js`
2. Upload processing via `scripts/upload-to-cloudinary.js`
3. Delivery optimization through `CloudinaryImage` and `CloudinaryVideo` components

For detailed implementation guides, refer to `docs/cloudinary-documentation.md`.

## 🚢 Deployment

The project is configured for seamless deployment on Netlify:

- Configuration in `netlify.toml`
- Automatic deployment from main branch
- Support for SPA routing
- Performance optimization features

### Backend Deployment

The backend server should be deployed separately to a platform that supports Node.js:

1. Set up the appropriate environment variables
2. Configure CORS to allow requests from your frontend domain
3. Set up a production process manager like PM2

## 🏆 Best Practices

- **Component Reusability**: Abstracted UI elements for consistent interfaces
- **Performance Optimization**: Lazy loading, code splitting, asset optimization
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Semantic HTML and ARIA attributes
- **Code Organization**: Clear structure and separation of concerns
- **DRY Principles**: Minimal code duplication through utilities and reusable components
- **API Integration**: Proper error handling and loading states

## 👥 Contributing

- [Abin Varghese](https://github.com/AbinVarghexe) 
- [Bava Kurian Varghese](https://github.com/bava-kurian) 
- [Amarnath C](https://github.com/AmarnathCJD)

To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
