import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const ServiceCard = ({ title, image, path }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link to={path} className="relative group overflow-hidden cursor-pointer font-['Cairo'] w-full">
      {/* Mobile styling */}
      <div className="md:hidden block relative aspect-square rounded-lg overflow-hidden">
        {!imageLoaded && (
          <div className='absolute inset-0 bg-gray-800 z-5 flex items-center justify-center'>
            <div className="w-6 h-6 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img 
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)' }}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="absolute bottom-3 left-3 z-10 p-2">
          <h3 className="text-sm font-medium text-white font-['Cairo'] leading-tight">{title}</h3>
        </div>
      </div>

      {/* Desktop styling */}
      <motion.div
        className="hidden md:block relative w-full max-w-[370px] h-[300px] rounded-xl overflow-hidden group"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {!imageLoaded && (
          <div className='absolute inset-0 bg-gray-800 z-5 flex items-center justify-center'>
            <div className="w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <motion.img 
          src={image}
          alt={title}
          width={370}
          height={300}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)' }}
          variants={{
            rest: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 60, damping: 16, mass: 0.8 } },
            hover: { scale: 1.12, rotate: -2.5, transition: { type: 'spring', stiffness: 60, damping: 16, mass: 0.8 } }
          }}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
          <h3 className="text-xl md:text-2xl font-semibold text-white transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-8px] font-['Cairo']">{title}</h3>
          <div className="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[40px] mt-2 opacity-0 group-hover:opacity-100">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="text-white text-sm font-['Cairo'] whitespace-nowrap">View Details</span>
              <span className="ml-2 inline-block text-white">→</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ServiceCard