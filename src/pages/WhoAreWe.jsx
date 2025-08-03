import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { homeImgs, logos } from '../utils/localAssets'
import RecentWorks from '../components/HomeSection/RecentWorks'

const WhoAreWe = () => {
  return (
    <div>
      <div
        className='w-full h-[600px] flex items-center justify-center relative'
        style={{
          backgroundImage: `url(${homeImgs.aboutUsSection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Black overlay with improved opacity */}
        <div className='absolute inset-0 bg-black opacity-30'></div>
        <motion.h2
          className='relative z-10 text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-white'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Who We Are.
        </motion.h2>
      </div>
      <div className='relative z-10 flex flex-col md:flex-row items-center justify-between'>
        {/* Left side - Logo section with white background */}
        <div className='w-full md:w-[30%] h-full flex flex-col justify-center items-center z-20 mb-8 md:mb-0'>
          <motion.div
            className='flex flex-col items-center pt-6'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={logos.main}
              alt='Voltant Energy Logo'
              className='h-14 lg:h-16'
            />
          </motion.div>
        </div>
        <div className='relative w-full md:w-[70%] h-auto py-12 flex flex-col md:flex-row items-center'>
          {/* Content container with text and social icons */}
          <div className='flex flex-col md:flex-row w-full h-full items-center justify-between'>
            {/* Text content */}
            <div className='z-10 w-full md:w-[75%] py-8 md:py-16 px-4 md:pl-16 lg:pl-28 xl:pl-32 md:pr-8 flex flex-col justify-center'>
              <div className='text-black max-w-3xl mx-auto'>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    A Sustainable Energy start up focused on providing
                    innovative products & advanced technological solutions for
                    industrial & commercial establishments
                  </p>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    At Voltant Energy, we're shaping a net-zero future with
                    smart, sustainable solutions. Our advanced anaerobic
                    digestion technology turns organic waste into clean energy,
                    fueling a circular economy while reducing environmental
                    impact.
                  </p>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    From feasibility studies and regulatory approvals to
                    full-scale biogas plant installation and maintenance, we
                    deliver end-to-end waste-to-energy solutions tailored to
                    every need.
                  </p>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    Our Smart Energy Monitoring systems bring real-time
                    insights, helping businesses cut energy costs, boost
                    efficiency, and drive profitability through intelligent
                    automation.
                  </p>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    Sustainability isn't just our mission—it's the future we're
                    building.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link to='/contact'>
                    <button className='mt-4 border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 w-full md:w-auto'>
                      Get in Touch
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
            {/* Social media icons - Positioned on far right with better accessibility */}
            <div className='z-10 h-full w-full md:w-[25%] flex flex-row md:flex-col justify-center items-center mt-8 md:mt-0'>
              <motion.div
                className='flex flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-10'
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
                  href='https://youtube.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                  aria-label='YouTube'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaYoutube size={24} />
                </motion.a>
                <motion.a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                  aria-label='Instagram'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaInstagram size={24} />
                </motion.a>
                <motion.a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                  aria-label='Facebook'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaFacebookF size={24} />
                </motion.a>
                <motion.a
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                  aria-label='LinkedIn'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLinkedinIn size={24} />
                </motion.a>
                <motion.a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                  aria-label='Twitter'
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
      <div>
        <RecentWorks />
      </div>
    </div>
  )
}

export default WhoAreWe
