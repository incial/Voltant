import React from 'react'
import { Link } from 'react-router-dom'
import CloudinaryImage from './CloudinaryImage'
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const ServiceCard = ({ title, image, path }) => {
return (
    <Link to={path} className="relative group overflow-hidden cursor-pointer font-['Cairo'] w-full">
        {/* Mobile styling */}
        <div className="md:hidden block relative aspect-square rounded-lg overflow-hidden">
            <CloudinaryImage 
                {...getOptimizedAssetProps(image, 'thumbnail')}
                alt={title} 
                className="w-full h-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="absolute bottom-3 left-3 z-10 p-2">
                <h3 className="text-sm font-medium text-white font-['Cairo'] leading-tight">{title}</h3>
            </div>
        </div>

        {/* Desktop styling */}
        <div className="hidden md:block relative w-full max-w-[370px] h-[300px] rounded-xl overflow-hidden">
            <CloudinaryImage 
                {...getOptimizedAssetProps(image, 'thumbnail')}
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white transition-transform duration-300 transform group-hover:translate-y-[-8px] font-['Cairo']">{title}</h3>
                <div className="h-0 overflow-hidden transition-all duration-300 group-hover:h-[40px] mt-2 opacity-0 group-hover:opacity-100">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="text-white text-sm font-['Cairo'] whitespace-nowrap">View Details</span>
                        <span className="ml-2 inline-block text-white">→</span>
                    </motion.div>
                </div>
            </div>
        </div>
    </Link>
)
}

export default ServiceCard