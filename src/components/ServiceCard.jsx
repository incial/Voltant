import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const ServiceCard = ({ title, image, path }) => {
return (
    <Link to={path} className="relative group overflow-hidden cursor-pointer font-['Cairo'] w-full">
        {/* Mobile styling */}
        <div className="md:hidden block relative aspect-square rounded-lg overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="absolute bottom-3 left-3">
                <h3 className="text-sm font-medium text-white font-['Cairo']">{title}</h3>
            </div>
        </div>

        {/* Desktop styling */}
        <div className="hidden md:block relative w-[370px] h-[300px] rounded-xl overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
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
        </div>
    </Link>
)
}

export default ServiceCard