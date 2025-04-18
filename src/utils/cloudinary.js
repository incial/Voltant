import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance using environment variables
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'drzpgff2h',
  },
  url: {
    secure: true, // Force HTTPS
  }
});

export default cld;