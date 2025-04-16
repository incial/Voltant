import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/images/white_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Voltant Energy" className="h-10" />
          </Link>
        </div>

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

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

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