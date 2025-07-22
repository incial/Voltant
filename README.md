# Voltant Energy

![Voltant Energy](https://res.cloudinary.com/drzpgff2h/image/upload/v1744971858/voltant-energy/logos/logo_white.png)

> Modern, responsive React website for Voltant Energy, showcasing sustainable energy solutions including EV charging infrastructure, waste-to-energy technology, and smart waste management systems.

## 📑 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Cloudinary Integration](#-cloudinary-integration)
- [Netlify Deployment & Functions](#-netlify-deployment--functions)
- [Service Offerings](#-service-offerings)
- [Development Guidelines](#-development-guidelines)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Overview

Voltant Energy's website serves as a digital platform highlighting their innovative sustainable energy solutions in:

- **EV Charging Infrastructure**: Comprehensive solutions including AC/DC charging stations, engineering support, and Charge Point Operator services
- **Waste-to-Energy Technology**: Convert organic waste to energy through household, containerized, and large-scale biogas plants
- **Smart Waste Management**: Advanced waste segregation bins and sustainable disposal solutions

The platform delivers a cohesive brand experience while providing in-depth information about each service line through an optimized, performance-focused design.

## ✨ Key Features

- **Responsive Design**: Seamless experience across all devices (mobile, tablet, desktop)
- **Optimized Media Delivery**: Advanced asset management through Cloudinary integration
- **Modern UI/UX**: Smooth animations and transitions powered by Framer Motion and GSAP
- **Component Architecture**: Modular, reusable components for consistent UI
- **Centralized Content**: Data management in sectionData.js for easy updates
- **Performance Optimized**: Lazy loading, code splitting, and efficient delivery
- **Serverless Functions**: Netlify Functions for backend processing

## 🛠️ Technologies

### Core Stack
- **Frontend**: React 19, Vite 6, React Router DOM 7
- **Styling**: Tailwind CSS 4, PostCSS, Autoprefixer
- **Animations**: Framer Motion, GSAP
- **Backend**: Netlify Functions (serverless) for API endpoints

### Media Management
- **Cloudinary**: Advanced asset optimization, transformation, and delivery
- **Cloudinary SDK**: @cloudinary/react, @cloudinary/url-gen for responsive media

### Development Tools
- **Code Quality**: ESLint 9
- **Package Management**: npm/yarn
- **Environment Variables**: dotenv
- **UI Components**: React Icons
- **HTTP Client**: Axios
- **Email Service**: EmailJS for contact form submissions

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Cloudinary account for media optimization

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd voltant-energy
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create environment variables
   Create a `.env` file in the root directory:
   ```env
   # Cloudinary Configuration
   VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   VITE_CLOUDINARY_API_KEY=your_cloudinary_api_key
   VITE_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # EmailJS Configuration (for contact form)
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   
   # Development settings
   VITE_USE_MOCK=false
   ```

   📧 **EmailJS Setup**: See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed EmailJS configuration instructions.

4. Start development server
   ```bash
   npm run dev
   ```

5. Open http://localhost:5173 in your browser

### Building for Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The optimized build files will be in the `dist` directory.

## 📁 Project Structure

```
├── docs/                         # Project documentation
│   ├── cloudinary-documentation.md  # Cloudinary integration guide
│   └── technical-documentation.md   # Technical documentation
│
├── netlify/                      # Netlify configuration
│   └── functions/                # Serverless functions
│       ├── send-email.js         # Contact form email processing
│       └── package.json          # Function dependencies
│
├── public/                       # Public static assets
│   ├── Logo_icon.svg             # Site favicon and logo
│   ├── _redirects                # Netlify routing configuration
│   └── robots.txt                # Search engine directives
│
├── scripts/                      # Utility scripts
│   └── upload-to-cloudinary.js   # Asset upload automation
│
├── src/                          # Frontend source code
│   ├── assets/                   # Local assets (pre-optimization)
│   │   ├── icons/                # SVG icons organized by section
│   │   └── images/               # Images organized by section
│   │
│   ├── components/               # React components
│   │   ├── common/               # Shared UI components
│   │   │   ├── ChatButton.jsx    # WhatsApp button component
│   │   │   ├── CloudinaryImage.jsx # Optimized image component
│   │   │   ├── CloudinaryVideo.jsx # Optimized video component
│   │   │   ├── Footer.jsx        # Site footer component
│   │   │   ├── Navbar.jsx        # Navigation component
│   │   │   └── SectionComponents/ # Reusable section templates
│   │   └── HomeSection/          # Home page specific components
│   │
│   ├── context/                  # React context providers
│   │
│   ├── pages/                    # Page components (routes)
│   │   ├── AC.jsx                # AC chargers page
│   │   ├── DC.jsx                # DC chargers page
│   │   ├── Home.jsx              # Homepage
│   │   └── [Other pages]         # Various service pages
│   │
│   ├── utils/                    # Utility functions
│   │   ├── cloudinary.js         # Cloudinary configuration
│   │   ├── cloudinaryAssets.js   # Asset mapping for Cloudinary
│   │   ├── cloudinaryHelper.js   # Helper functions
│   │   └── sectionData.js        # Centralized content data
│   │
│   ├── App.jsx                   # Main application component
│   └── main.jsx                  # Application entry point
│
├── eslint.config.js              # ESLint configuration
├── netlify.toml                  # Netlify deployment configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── vite.config.js                # Vite build configuration
```

## 🖼️ Cloudinary Integration

The project implements advanced media optimization through Cloudinary:

### Configuration

Cloudinary setup is handled in `src/utils/cloudinary.js`, which initializes the Cloudinary SDK with environment variables:

```javascript
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
  url: {
    secure: true,
  }
});
```

### Asset Management

1. **Asset Mapping**: Local files are mapped to Cloudinary IDs in `src/utils/cloudinaryAssets.js`:
   ```javascript
   export const imageAssets = {
     'public/Logo_icon.svg': 'voltant-energy/logos/logo_icon',
     // More mappings...
   };
   ```

2. **Optimized Components**: `CloudinaryImage.jsx` and `CloudinaryVideo.jsx` handle:
   - Format optimization (WebP/AVIF for images, VP9/H.265 for videos)
   - Responsive sizing with viewport breakpoints
   - Lazy loading with proper thresholds
   - Automated placeholders for better loading UX

3. **Utility Functions**: The `cloudinaryHelper.js` provides context-aware optimizations:
   ```javascript
   // Get optimal settings for hero section images
   getOptimizedAssetProps('src/assets/images/hero.jpg', 'hero', 'image')
   ```

### Upload Automation

The `scripts/upload-to-cloudinary.js` utility handles asset uploading:

```bash
# Upload all assets
node scripts/upload-to-cloudinary.js

# Verify existing assets
node scripts/upload-to-cloudinary.js --verify

# Upload specific assets
node scripts/upload-to-cloudinary.js "src/assets/images/logo.png"
```

For detailed implementation guides, refer to `docs/cloudinary-documentation.md`.

## 📧 Contact Form & EmailJS Integration

The project includes a sophisticated contact form powered by EmailJS for seamless email delivery without backend infrastructure.

### Features
- **Form Validation**: React Hook Form with Yup schema validation
- **Email Delivery**: EmailJS integration for direct client-side email sending
- **Development Mode**: Mock email functionality for development testing
- **Error Handling**: Comprehensive error messages and user feedback
- **Responsive Design**: Optimized for all device sizes
- **Animations**: Smooth Framer Motion animations for enhanced UX

### EmailJS Setup
1. **Create EmailJS Account**: Sign up at [emailjs.com](https://www.emailjs.com/)
2. **Configure Service**: Set up your email service (Gmail, Outlook, etc.)
3. **Create Template**: Design your email template with required variables
4. **Environment Variables**: Configure credentials in `.env` file
5. **Testing**: Use the provided test script in `scripts/test-emailjs.js`

For complete setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

### Usage Example
```jsx
// Contact form automatically handles EmailJS integration
<ContactForm onClose={() => setShowForm(false)} />
```

### Template Variables
The contact form sends these variables to your EmailJS template:
- `from_name`: User's name
- `from_email`: User's email  
- `message`: User's message
- `to_name`: "Voltant Energy"
- `reply_to`: User's email for easy replies

## 🚢 Netlify Deployment & Functions

### Deployment Configuration

The project is configured for seamless deployment on Netlify through `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures:
- Proper build process using Vite
- SPA routing support through redirects
- Optimized asset delivery

### Serverless Functions

Netlify Functions provide backend processing without a dedicated server:

1. **Contact Form Processing**:
   - `netlify/functions/send-email.js` handles form submissions
   - Uses nodemailer for email delivery
   - Implements CORS handling and validation

2. **Environment Variables**:
   Required in Netlify dashboard:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   RECIPIENT_EMAIL=contact@voltant-energy.com
   ```

3. **Local Development**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Start with functions
   netlify dev
   ```

### CI/CD Integration

- Automatic deployment from the main branch
- Deploy previews for pull requests
- Build caching for faster deployments

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

## 📋 Development Guidelines

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Create content in `sectionData.js`
4. Reuse existing section components where possible

### Adding Media Assets

1. Place asset in appropriate folder in `src/assets/`
2. Add mapping in `cloudinaryAssets.js`
3. Upload to Cloudinary using the script
4. Use `getOptimizedAssetProps` with appropriate section context:
   ```jsx
   <CloudinaryImage 
     {...getOptimizedAssetProps('src/assets/images/image.jpg', 'hero', 'image')} 
     alt="Description"
   />
   ```

### Best Practices

- **Component Reusability**: Use abstracted UI elements for consistency
- **Performance**: Implement lazy loading and code splitting
- **Responsive Design**: Start with mobile layouts first
- **Accessibility**: Use semantic HTML and ARIA attributes
- **Code Organization**: Follow established project structure
- **DRY Principle**: Reuse components and utility functions
- **Error Handling**: Implement proper fallbacks and error states

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
