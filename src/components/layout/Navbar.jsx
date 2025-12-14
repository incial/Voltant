import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { whiteLogo } from '../../utils/localAssets';
import { useContactForm } from '../../context/ContactFormContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const { toggleContactForm, isContactFormOpen } = useContactForm();

  // Handle scroll effect for navbar background - optimized with useCallback
  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 50;
    if (scrolled !== shouldBeScrolled) {
      setScrolled(shouldBeScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Improved section tracking with debounce to prevent unnecessary re-renders
  useEffect(() => {
    // Handle initial active section based on the path
    if (location.pathname !== '/') {
      const section = location.pathname.slice(1) || 'home';
      setActiveSection(section);
      return;
    }

    // Enhanced observer for "Who We Are" section
    const whoAreWeSection = document.getElementById('who-are-we');
    if (!whoAreWeSection) return;

    let timeout;
    const observer = new IntersectionObserver(
      (entries) => {
        // Clear any existing timeouts to prevent multiple updates
        if (timeout) clearTimeout(timeout);
        
        entries.forEach((entry) => {
          // Add a small delay to smooth out rapid changes
          timeout = setTimeout(() => {
            if (entry.isIntersecting) {
              setActiveSection('who-are-we');
            } else {
              if (location.pathname === '/') {
                setActiveSection('home');
              }
            }
          }, 50);
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
    );

    observer.observe(whoAreWeSection);
    return () => {
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Clean up body styles on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Helper function to determine if a link should be active
  const isLinkActive = useCallback((path, section = null) => {
    if (path === '/' && section === 'who-are-we') {
      return location.pathname === '/' && activeSection === 'who-are-we';
    } else if (path === '/' && !section) {
      return location.pathname === '/' && activeSection === 'home';
    }
    return location.pathname === path;
  }, [location.pathname, activeSection]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/30' : 'bg-transparent'
      } font-['Cairo']`}
      id="navbar"
      style={{
        WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        MozBackdropFilter: scrolled ? 'blur(8px)' : 'none',
        msBackdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="relative max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}        <div className="flex items-center z-10">          <Link to="/" className="flex items-center">
            <img
              src={whiteLogo}
              alt="Voltant Energy"
              className="h-8 md:h-10"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center space-x-2 sm:space-x-4 lg:space-x-6 text-xs sm:text-md md:text-lg lg:text-xl font-normal whitespace-nowrap mx-auto">
          <NavLink
            to="/"
            label="Home"
            isActive={isLinkActive('/')}
          />
          <NavLink
            to="/ev-charging"
            label="EV Charging"
            isActive={isLinkActive('/ev-charging')}
          />
          <NavLink
            to="/waste-to-energy"
            label="Waste To Energy"
            isActive={isLinkActive('/waste-to-energy')}
          />
          <NavLink
            to="/whoarewe"
            label="Explore"
            isActive={isLinkActive('/whoarewe')}
          />
        </div>

        {/* Call To Action Button (Desktop) */}
        <div className="hidden md:block z-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleContactForm}
            className={`${isContactFormOpen ? 'bg-white bg-opacity-10 text-green-400 border-green-400' : 'bg-transparent text-white border-white hover:bg-white hover:text-black hover:bg-opacity-10'} py-2 px-6 rounded-full font-medium border-2 cursor-pointer transition-colors`}
          >
            Get in Touch
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center mr-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="white" fill="none" />
              <AnimatePresence>
                {isMobileMenuOpen ? (
                  <motion.path
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    d="M7 7 L17 17 M17 7 L7 17"
                  />
                ) : (
                  <motion.g
                    key="open"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <path d="M7 10 H17" />
                    <path d="M7 14 H17" />
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`md:hidden fixed top-0 left-0 w-full h-screen ${
              scrolled ? 'bg-black/90' : 'bg-black/50'
            } flex flex-col items-center justify-start z-[60]`}
            style={{ 
              paddingTop: 'calc(100px + env(safe-area-inset-top))',
              WebkitBackdropFilter: 'blur(4px)',
              backdropFilter: 'blur(4px)',
              MozBackdropFilter: 'blur(4px)',
              msBackdropFilter: 'blur(4px)'
            }}
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">              <div className="absolute top-4 left-4 sm:left-6 p-6 py-8">                <Link to="/" className="flex items-center">
                  <img
                    src={whiteLogo}
                    alt="Voltant Energy"
                    className="h-8"
                  />
                </Link>
              </div>
              <div className="absolute top-4 right-4 sm:right-6 py-7 px-4">
                <button
                  onClick={toggleMobileMenu}
                  className="w-10 h-10 flex items-center justify-center"
                  aria-label="Close mobile menu"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 8 L16 16" />
                    <path d="M16 8 L8 16" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center space-y-6 text-white text-lg mt-16">
                <Link to="/" onClick={toggleMobileMenu}>
                  <span
                    className={
                      isLinkActive('/') ? 'text-green-400' : ''
                    }
                  >
                    Home
                  </span>
                </Link>
                <Link to="/ev-charging" onClick={toggleMobileMenu}>
                  <span
                    className={
                      isLinkActive('/ev-charging') ? 'text-green-400' : ''
                    }
                  >
                    EV Charging
                  </span>
                </Link>
                <Link to="/waste-to-energy" onClick={toggleMobileMenu}>
                  <span
                    className={
                      isLinkActive('/waste-to-energy') ? 'text-green-400' : ''
                    }
                  >
                    Waste To Energy
                  </span>
                </Link>
                <Link to="/whoarewe" onClick={toggleMobileMenu}>
                  <span
                    className={
                      isLinkActive('/whoarewe') ? 'text-green-400' : ''
                    }
                  >
                    Explore
                  </span>
                </Link>
                <motion.button
                  onClick={() => {
                    toggleMobileMenu();
                    setTimeout(() => toggleContactForm(), 300);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${isContactFormOpen ? 'bg-white/10 text-green-400 border-green-400' : 'bg-transparent text-white border-white'} py-2 px-6 rounded-full font-medium border-2 cursor-pointer mt-4`}
                >
                  Get In Touch
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Navigation Link component for desktop - optimized with memo for performance
const NavLink = React.memo(({ to, label, isActive }) => (
  <Link
    to={to}
    className={`${
      isActive ? 'text-green-400' : 'text-white'
    } hover:text-blue-100 font-medium relative group transition-colors px-2`}
  >
    {label}
    <motion.span
      className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-colors`}
      initial={false}
      animate={{
        width: isActive ? '100%' : '0%',
        backgroundColor: isActive ? '#4AB757' : '#FFFFFF',
        opacity: isActive ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ 
        transformOrigin: 'center',
        WebkitTransformOrigin: 'center',
        MozTransformOrigin: 'center'
      }}
    />
  </Link>
));

export default Navbar;