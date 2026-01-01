# ⚡ Quick Start Guide

Get Voltant Energy running locally in under 5 minutes.

---

## Prerequisites

- **Node.js** v18 or higher
- **pnpm** (recommended) or npm
- **Cloudinary account** (optional, for media optimization)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/incial/Voltant.git
cd Voltant
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Cloudinary Configuration (optional)
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

> 📧 **Need EmailJS setup help?** See [EMAILJS_SETUP.md](../EMAILJS_SETUP.md) for detailed instructions.

### 4. Start Development Server

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

### 5. Open in Browser

Navigate to **http://localhost:5173** to view the application.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint code analysis |
| `pnpm test:emailjs` | Test EmailJS configuration |

---

## Production Build

```bash
# Build the application
pnpm build

# Preview the production build
pnpm preview
```

The optimized build files will be generated in the `dist` directory.

---

## Netlify Deployment

### Option 1: Git-based Deployment

1. Push to your GitHub/GitLab repository
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 3: Local Development with Functions

```bash
# Start with Netlify Functions
netlify dev
```

---

## Environment Variables Reference

### Required for Full Functionality

| Variable | Purpose |
|----------|---------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS email template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public API key |

### Optional

| Variable | Purpose |
|----------|---------|
| `VITE_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name for media |
| `VITE_CLOUDINARY_API_KEY` | Cloudinary API key |
| `VITE_CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `VITE_USE_MOCK` | Enable mock mode for development |

---

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port
pnpm dev --port 3000
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
pnpm install
```

### Build Errors

```bash
# Clear build cache
rm -rf dist
pnpm build
```

### EmailJS Not Working

1. Verify environment variables are set correctly
2. Run `pnpm test:emailjs` to test configuration
3. Check [EmailJS Setup](./EMAILJS_SETUP.md) for setup instructions

---

## Next Steps

- 📖 Read the full [Documentation](./DOCUMENTATION.md)
- 🛠️ Explore [Features](./FEATURES.md)
- 🎨 Check [Styling Guide](./STYLING_GUIDE.md)
- 🔧 Review [Architecture](./ARCHITECTURE.md)

---

## Need Help?

- Check the [GitHub Issues](https://github.com/incial/Voltant/issues)
- Review the [Documentation](./DOCUMENTATION.md)
- Contact the development team
