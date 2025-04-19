import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CloudinaryImage from './CloudinaryImage';
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      if (scrolled !== shouldBeScrolled) {
        setScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Set up intersection observer for Who We Are section
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname.slice(1) || 'home');
      return;
    }

    const whoAreWeSection = document.getElementById('who-are-we');
    if (!whoAreWeSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('who-are-we');
          } else {
            if (location.pathname === '/') {
              setActiveSection('home');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(whoAreWeSection);
    return () => observer.disconnect();
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
      // Removed window.scrollTo(0, 0) to prevent scrolling to top
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/30' : 'bg-transparent'
        } font-['Cairo']`}
      id="navbar"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-32 md:mt-0 mt-6 ml-4 md:ml-0">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <CloudinaryImage
              {...getOptimizedAssetProps('src/assets/images/white_logo.png')}
              alt="Voltant Energy"
              className="h-8 md:h-10"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-lg lg:text-xl">
          <NavLink
            to="/"
            label="Home"
            isActive={location.pathname === '/' && activeSection === 'home'}
          />
          <NavLink
            to="/ev-charging"
            label="EV Charging"
            isActive={location.pathname === '/ev-charging'}
          />
          <NavLink
            to="/waste-to-energy"
            label="Waste To Energy"
            isActive={location.pathname === '/waste-to-energy'}
          />
          <NavLink
            to="/#who-are-we"
            label="Who We Are"
            isActive={location.pathname === '/' && activeSection === 'who-are-we'}
          />
        </div>

        {/* Call To Action Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white py-2 px-6 rounded-full font-medium border-2 border-white cursor-pointer transition-colors hover:bg-white/10"
            >
              Get in Touch
            </motion.button>
          </Link>
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
            className={`md:hidden fixed top-0 left-0 w-full h-screen ${scrolled ? 'bg-black/90' : 'bg-black/50'
              } backdrop-blur-xs flex flex-col items-center justify-start z-[60] p-12 py-12`}
            style={{ paddingTop: 'calc(100px + env(safe-area-inset-top))' }}
          >
            <div className="p-8">
              <div className="absolute top-4 left-4 p-6 py-8">
                <Link to="/" className="flex items-center">
                  <CloudinaryImage
                    {...getOptimizedAssetProps('src/assets/images/white_logo.png')}
                    alt="Voltant Energy"
                    className="h-8"
                  />
                </Link>
              </div>
              <div className="absolute top-4 right-4 py-7 px-4">
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
                      location.pathname === '/' && activeSection === 'home'
                        ? 'text-green-400'
                        : ''
                    }
                  >
                    Home
                  </span>
                </Link>
                <Link to="/ev-charging" onClick={toggleMobileMenu}>
                  <span
                    className={
                      location.pathname === '/ev-charging' ? 'text-green-400' : ''
                    }
                  >
                    EV Charging
                  </span>
                </Link>
                <Link to="/waste-to-energy" onClick={toggleMobileMenu}>
                  <span
                    className={
                      location.pathname === '/waste-to-energy'
                        ? 'text-green-400'
                        : ''
                    }
                  >
                    Waste To Energy
                  </span>
                </Link>
                <Link to="/#who-are-we" onClick={toggleMobileMenu}>
                  <span
                    className={
                      location.pathname === '/' && activeSection === 'who-are-we'
                        ? 'text-green-400'
                        : ''
                    }
                  >
                    Who We Are
                  </span>
                </Link>
                <Link to="/contact" onClick={toggleMobileMenu}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent text-white py-2 px-6 rounded-full font-medium border-2 border-white cursor-pointer mt-4"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Navigation Link component for desktop
const NavLink = ({ to, label, isActive }) => (
  <Link
    to={to}
    className={`${isActive ? 'text-green-400' : 'text-white'
      } hover:text-blue-100 font-medium relative group transition-colors`}
  >
    {label}
    <span
      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full bg-green-400' : 'w-0 bg-white group-hover:w-full'
        }`}
    ></span>
  </Link>
);

export default Navbar;