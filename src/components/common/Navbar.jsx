import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../../assets/images/white_logo.png' // Make sure you have this logo file

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'} font-['Cairo']`}>
      <div className="container mx-auto flex justify-between items-center py-8 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Voltant Energy" className="h-10" />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-['Cairo'] text-xl">
          <NavLink to="/" label="Home" isActive={location.pathname === '/'} />
          <NavLink to="/ev-charging" label="EV Charging" isActive={location.pathname === '/ev-charging'} />
          <NavLink to="/waste-to-energy" label="Waste To Energy" isActive={location.pathname === '/waste-to-energy'} />
          <NavLink to="/about" label="Who We Are" isActive={location.pathname === '/about'} />
        </div>
        
        {/* Call To Action Button */}
        <div>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white py-2 px-6 rounded-full font-medium border-2 border-white cursor-pointer font-['Cairo']"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>
        
        {/* Mobile Menu Button (hidden on desktop) */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

// Navigation Link component for consistent styling
const NavLink = ({ to, label, isActive }) => (
  <Link 
    to={to} 
    className={`${isActive ? 'text-green-400' : 'text-white'} hover:text-blue-100 font-medium relative group`}
  >
    {label}
    <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full bg-green-400' : 'w-0 bg-white group-hover:w-full'}`}></span>
  </Link>
);

export default Navbar
