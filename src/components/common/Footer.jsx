import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import CloudinaryImage from './CloudinaryImage'
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#00251a] text-white relative py-10 font-['Cairo']">
      {/* Footer background image with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <CloudinaryImage
          {...getOptimizedAssetProps('src/assets/images/footer_image.png', 'general', 'image')}
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Mobile Layout (Default) */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center md:hidden font-['Cairo']">
        {/* Logo */}
        <div className="mb-8 sm:mb-10">
          <CloudinaryImage
            {...getOptimizedAssetProps('src/assets/images/white_logo.png', 'logo', 'image')}
            alt="Voltant Energy Logo"
            className="h-9 sm:h-10"
          />
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 sm:space-x-8 mb-8 sm:mb-10">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300 p-1"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300 p-1"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300 p-1"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300 p-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300 p-1"
            aria-label="X/Twitter"
          >
            <FaXTwitter />
          </a>
          <a 
            href="https://wa.me/+971506419857" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300 p-1"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-xs pt-2 font-['Cairo']">
          <p>© Copyright {currentYear} Voltant Energy LLC FZ. All Rights Reserved</p>
        </div>
      </div>

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:block container mx-auto px-32 relative z-20 py-6 font-['Cairo']">
        <div className="flex flex-row justify-between items-center">
          {/* Left side: Logo and Copyright */}
          <div className="flex flex-col gap-8">
            <div>
              <CloudinaryImage
                {...getOptimizedAssetProps('src/assets/images/white_logo.png', 'logo', 'image')}
                alt="Voltant Energy Logo"
                className="h-11 md:h-12"
              />
            </div>
            <div className="text-sm">
              <p>© Copyright {currentYear} Voltant Energy LLC FZ. All Rights Reserved</p>
            </div>
          </div>

          {/* Right side: Social Media Icons */}
          <div className="flex space-x-5 md:space-x-6 items-center">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition p-1"
              aria-label="YouTube"
            >
              <FaYoutube size={22} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition p-1"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition p-1"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition p-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition p-1"
              aria-label="X/Twitter"
            >
              <FaXTwitter size={22} />
            </a>
            <a 
              href="https://wa.me/+971506419857" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition p-1"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
