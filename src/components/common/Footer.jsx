import React from 'react'
import whiteLogo from '../../assets/images/white_logo.png'
import footerImage from '../../assets/images/footer_image.png'
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#00251a] text-white relative py-10 font-['Cairo']">
      {/* Footer background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={footerImage} alt="Footer background" className="w-full h-full object-cover" />
      </div>
      
      {/* Mobile Layout (Default) */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center md:hidden font-['Cairo']">
        {/* Logo */}
        <div className="mb-10">
          <img src={whiteLogo} alt="Voltant Energy Logo" className="h-10" />
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-10">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300"
            aria-label="X/Twitter"
          >
            <FaXTwitter />
          </a>
          <a 
            href="https://wa.me/15551234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white text-xl transform hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-xs pt-3 font-['Cairo']">
          <p>© Copyright {currentYear} Voltant Energy LLC FZ. All Rights Reserved</p>
        </div>
      </div>

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:block container mx-auto px-6 relative z-20 py-6 font-['Cairo']">
        <div className="flex flex-row justify-between items-center">
          {/* Left side: Logo and Copyright */}
          <div className="flex flex-col gap-9">
            <div className="mb-4">
              <img src={whiteLogo} alt="Voltant Energy Logo" className="h-12" />
            </div>
            <div className="text-sm">
              <p>© Copyright Voltant Energy LLC FZ. All Rights Reserved</p>
            </div>
          </div>

          {/* Right side: Social Media Icons */}
          <div className="flex space-x-6 items-center">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition"
              aria-label="X/Twitter"
            >
              <FaXTwitter size={24} />
            </a>
            <a 
              href="https://wa.me/15551234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-80 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
