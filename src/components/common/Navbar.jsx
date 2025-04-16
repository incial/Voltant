import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/images/white_logo.png'; // Ensure this logo file exists

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md' : 'bg-transparent'
      } font-['Cairo']`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Voltant Energy" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-xl">
          <NavLink to="/" label="Home" isActive={location.pathname === '/'} />
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
            to="/about"
            label="Who We Are"
            isActive={location.pathname === '/about'}
          />
        </div>

        {/* Call To Action Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white py-2 px-6 rounded-full font-medium border-2 border-white cursor-pointer"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                fill="none"
              />
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <NavLink
                to="/"
                label="Home"
                isActive={location.pathname === '/'}
                mobile
              />
              <NavLink
                to="/ev-charging"
                label="EV Charging"
                isActive={location.pathname === '/ev-charging'}
                mobile
              />
              <NavLink
                to="/waste-to-energy"
                label="Waste To Energy"
                isActive={location.pathname === '/waste-to-energy'}
                mobile
              />
              <NavLink
                to="/about"
                label="Who We Are"
                isActive={location.pathname === '/about'}
                mobile
              />
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white py-2 px-6 rounded-full font-medium border-2 border-white cursor-pointer w-full text-left"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Navigation Link component for consistent styling
const NavLink = ({ to, label, isActive, mobile }) => (
  <Link
    to={to}
    className={`${
      isActive ? 'text-green-400' : 'text-white'
    } ${
      mobile ? 'text-lg py-2' : 'text-xl'
    } hover:text-blue-100 font-medium relative group`}
  >
    {label}
    <span
      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
        isActive ? 'w-full bg-green-400' : 'w-0 bg-white group-hover:w-full'
      } ${mobile ? 'hidden' : ''}`}
    ></span>
  </Link>
);

export default Navbar;