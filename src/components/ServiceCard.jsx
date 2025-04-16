import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServiceCard = ({ title, image, path }) => {
  return (
    <Link to={path} className="relative group overflow-hidden rounded-2xl w-[450px] h-[350px] cursor-pointer font-['Cairo']">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-20"></div> */}
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-white transition-transform duration-300 group-hover:translate-y-[-8px] font-['Cairo']">{title}</h3>
        <div className="h-0 overflow-hidden transition-all duration-300 group-hover:h-[40px] mt-2 opacity-0 group-hover:opacity-100">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-white text-sm font-['Cairo']">View Details</span>
            <span className="ml-2 inline-block text-white">→</span>
          </motion.div>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard