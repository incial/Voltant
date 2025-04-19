import React from 'react'
import CloudinaryImage from '../common/CloudinaryImage'
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhoAreWe = () => {
  return (
    <div className="relative w-full md:h-screen">
      {/* Mobile layout - stacked */}
      <div className="md:hidden flex flex-col w-full">
        {/* White logo section - top */}
        <div className="w-full py-8 sm:py-10 flex justify-center items-center">
          <CloudinaryImage
            {...getOptimizedAssetProps('src/assets/images/Logo.png')}
            alt="Voltant Energy Logo"
            className="h-12 sm:h-14"
          />
        </div>
        
        {/* Content section with forest background - bottom */}
        <div className="relative w-full">
          {/* Background forest image */}
          <div className="absolute inset-0 w-full h-full">
            <CloudinaryImage 
              {...getOptimizedAssetProps('src/assets/images/About_us_section.jpg')}
              alt="Forest background" 
              className="w-full h-full object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
          
          {/* Text content */}
          <div className="relative z-10 px-6 px-12 py-10">
            <div className="text-white items-start">
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                Who We Are.
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="mb-4 text-sm font-normal leading-relaxed">
                  A Sustainable Energy start up focused on providing innovative products &
                  advanced technological solutions for industrial & commercial establishments
                </p>
                
                <p className="mb-4 text-sm font-normal leading-relaxed">
                  At Voltant Energy, we're shaping a net-zero future with smart, sustainable
                  solutions. Our advanced anaerobic digestion technology turns organic waste 
                  into clean energy, fueling a circular economy while reducing environmental
                  impact.
                </p>
                
                <p className="mb-4 text-sm font-normal leading-relaxed">
                  From feasibility studies and regulatory approvals to full-scale biogas plant
                  installation and maintenance, we deliver end-to-end waste-to-energy
                  solutions tailored to every need.
                </p>
                
                <p className="mb-4 text-sm font-normal leading-relaxed">
                  Our Smart Energy Monitoring systems bring real-time insights, helping
                  businesses cut energy costs, boost efficiency, and drive profitability through
                  intelligent automation.
                </p>
                
                <p className="mb-4 text-sm font-normal leading-relaxed">
                  Sustainability isn't just our mission—it's the future we're building.
                </p>
              </motion.div>
              
              <motion.div 
                className="mt-8 sm:mt-14 flex justify-start items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/contact">
                  <button className="border-2 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                    Get in Touch
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - side by side */}
      <div className="hidden md:flex relative z-10 w-full h-full items-center justify-between">
        {/* Left side - Logo section with white background */}
        <div className="w-[30%] h-full flex flex-col justify-center items-center z-20">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CloudinaryImage
              {...getOptimizedAssetProps('src/assets/images/Logo.png')}
              alt="Voltant Energy Logo"
              className="h-14 lg:h-16"
            />
          </motion.div>
        </div>
        
        {/* Right side with forest background image and overlay */}
        <div className="relative w-[70%] h-[120vh]">
          {/* Background forest image - only on right side */}
          <div className="absolute inset-0 w-full h-full">
            <CloudinaryImage 
              {...getOptimizedAssetProps('src/assets/images/About_us_section.jpg')}
              alt="Forest background" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Black overlay with improved opacity */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          {/* Content container with text and social icons */}
          <div className="relative w-full h-full flex">
            {/* Text content */}
            <div className="relative z-10 h-[120vh] w-[75%] py-16 pl-12 md:pl-16 lg:pl-28 xl:pl-32 pr-8 flex flex-col justify-center">
              <div className="text-white max-w-3xl">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-10 md:mb-14"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  Who We Are.
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="mb-6 text-base md:text-lg font-normal leading-relaxed">
                    A Sustainable Energy start up focused on providing innovative products &
                    advanced technological solutions for industrial & commercial establishments
                  </p>
                  
                  <p className="mb-6 text-base md:text-lg font-normal leading-relaxed">
                    At Voltant Energy, we're shaping a net-zero future with smart, sustainable
                    solutions. Our advanced anaerobic digestion technology turns organic waste 
                    into clean energy, fueling a circular economy while reducing environmental
                    impact.
                  </p>
                  
                  <p className="mb-6 text-base md:text-lg font-normal leading-relaxed">
                    From feasibility studies and regulatory approvals to full-scale biogas plant
                    installation and maintenance, we deliver end-to-end waste-to-energy
                    solutions tailored to every need.
                  </p>
                  
                  <p className="mb-6 text-base md:text-lg font-normal leading-relaxed">
                    Our Smart Energy Monitoring systems bring real-time insights, helping
                    businesses cut energy costs, boost efficiency, and drive profitability through
                    intelligent automation.
                  </p>
                  
                  <p className="mb-6 text-base md:text-lg font-normal leading-relaxed">
                    Sustainability isn't just our mission—it's the future we're building.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link to="/contact">
                    <button className="mt-4 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                      Get in Touch
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
            
            {/* Social media icons - Positioned on far right with better accessibility */}
            <div className="relative z-10 h-full w-[25%] flex flex-col justify-center items-center">
              <motion.div 
                className="flex flex-col space-y-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  staggerChildren: 0.1,
                  delayChildren: 0.2 
                }}
              >
                <motion.a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-80 transition-opacity p-1"
                  aria-label="YouTube"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaYoutube size={24} />
                </motion.a>
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-80 transition-opacity p-1"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaInstagram size={24} />
                </motion.a>
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-80 transition-opacity p-1"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaFacebookF size={24} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-80 transition-opacity p-1"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLinkedinIn size={24} />
                </motion.a>
                <motion.a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:opacity-80 transition-opacity p-1"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaXTwitter size={24} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe
