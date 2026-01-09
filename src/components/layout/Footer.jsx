import React, { useState } from 'react'
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { footerImage, whiteLogo } from '../../utils/localAssets'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [imageLoaded, setImageLoaded] = useState({})
  return (
    <footer className="bg-[#00251a] text-white relative py-8 md:py-10 lg:py-12 font-['Cairo']">
      {/* Footer background image with overlay */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        {!imageLoaded.background && (
          <div className='absolute inset-0 bg-gray-800 z-5 flex items-center justify-center'>
            <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={footerImage}
          alt='Footer background'
          className='w-full h-full object-cover'
          onLoad={() => setImageLoaded(prev => ({ ...prev, background: true }))}
          style={{ opacity: imageLoaded.background ? 1 : 0, transition: 'opacity 1s' }}
        />
        <div className='absolute inset-0 bg-black/30 backdrop-blur-[2px]'></div>
      </div>        {/* Mobile Layout (Default) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center md:hidden font-['Cairo']">
          {/* Logo */}
          <div className='mb-6 sm:mb-8'>
            <img
              src={whiteLogo}
              alt='Voltant Energy Logo'
              className='h-8 sm:h-9'
              loading="eager"
            />
          </div>

        {/* Social Media Icons */}
        <div className='flex justify-center space-x-5 sm:space-x-6 mb-6 sm:mb-8'>
          <a
            href='https://youtube.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-lg sm:text-xl transform hover:scale-110 transition-all duration-300 p-1'
            aria-label='YouTube'
          >
            <FaYoutube />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-lg sm:text-xl transform hover:scale-110 transition-all duration-300 p-1'
            aria-label='Instagram'
          >
            <FaInstagram />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-lg sm:text-xl transform hover:scale-110 transition-all duration-300 p-1'
            aria-label='Facebook'
          >
            <FaFacebook />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-lg sm:text-xl transform hover:scale-110 transition-all duration-300 p-1'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-lg sm:text-xl transform hover:scale-110 transition-all duration-300 p-1'
            aria-label='X/Twitter'
          >
            <FaXTwitter />
          </a>
          <a
            href='https://wa.me/+971506419857'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-lg sm:text-xl transform hover:scale-110 transition-all duration-300 p-1'
            aria-label='WhatsApp'
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm pt-2 font-['Cairo']">
          <p>
            © Copyright {currentYear} Voltant Energy LLC FZ. All Rights Reserved
          </p>
        </div>
      </div>

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 md:px-8 lg:px-10 relative z-20 py-4 md:py-5 lg:py-6 font-['Cairo']">
        <div className='flex flex-row justify-between items-center'>          {/* Left side: Logo and Copyright */}
          <div className='flex flex-col gap-6 md:gap-7 lg:gap-8'>
            <div>
              <img
                src={whiteLogo}
                alt='Voltant Energy Logo'
                className='h-10 md:h-11 lg:h-12'
                loading="eager"
              />
            </div>
            <div className='text-xs md:text-sm'>
              <p>
                © Copyright {currentYear} Voltant Energy. All Rights
                Reserved and Designed by{' '}
                <span className='font-semibold hover:underline'>
                <a
                  href='https://incial.in'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Incial
                </a>
                </span>
              </p>
            </div>
          </div>

          {/* Right side: Social Media Icons */}
          <div className='flex space-x-4 md:space-x-5 lg:space-x-6 items-center'>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:opacity-80 transition p-1'
              aria-label='YouTube'
            >
              <FaYoutube className="text-xl md:text-[22px]" />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:opacity-80 transition p-1'
              aria-label='Instagram'
            >
              <FaInstagram className="text-xl md:text-[22px]" />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:opacity-80 transition p-1'
              aria-label='Facebook'
            >
              <FaFacebook className="text-xl md:text-[22px]" />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:opacity-80 transition p-1'
              aria-label='LinkedIn'
            >
              <FaLinkedin className="text-xl md:text-[22px]" />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:opacity-80 transition p-1'
              aria-label='X/Twitter'
            >
              <FaXTwitter className="text-xl md:text-[22px]" />
            </a>
            <a
              href='https://wa.me/+971506419857'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:opacity-80 transition p-1'
              aria-label='WhatsApp'
            >
              <FaWhatsapp className="text-xl md:text-[22px]" />
            </a>          </div>
        </div>
      </div>
      </footer>
  )
}

export default Footer
