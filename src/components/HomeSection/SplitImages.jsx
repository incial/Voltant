import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper';
import CloudinaryVideo from '../common/CloudinaryVideo';

const images = [
    {
        id: 'ev',
        title: 'EV Charging Infrastructure',
        description:
            'Powering the future of mobility with smart, efficient, and scalable EV charging solutions—designed for homes, businesses, and public spaces.',
        button: 'Learn More',
        vid: 'public/Videos/EV_charging_video.mp4',
        icon: '/icons/ev-icon.png',
    },
    {
        id: 'pollution',
        title: 'Waste to Energy Solutions',
        description: 'From smart modular containerized plants to large-scale anerobic digestion solutions, we transform organic waste into sustainable energy.',
        button: 'Learn More',
        vid: 'public/Videos/EV_charging_video.mp4',
        icon: '/icons/pollution-icon.png',
    },
];

const SplitHoverImages = () => {
    const [activeId, setActiveId] = useState(images[0].id);
    const [playedId, setPlayedId] = useState(null);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <div className="flex md:flex-row flex-col h-[80vh] md:h-[80vh] w-full overflow-hidden">
            {images.map((item) => {
                const isActive = activeId === item.id;
                const isPlayed = playedId === item.id;

                return (
                    <motion.div
                        key={item.id}
                        layout
                        className="relative cursor-pointer overflow-hidden transition-all"
                        onMouseEnter={() => !isMobile && setActiveId(item.id)}
                        onClick={() => isMobile && setPlayedId(item.id)}
                        style={{
                            flexBasis: isMobile ? '100%' : isActive ? '66.66%' : '33.33%',
                            transition: 'flex-basis 0.8s cubic-bezier(0.83, 0, 0.17, 1)',
                            aspectRatio: isMobile ? '1 / 1' : undefined,
                        }}
                    >
                        {/* Divider on desktop when inactive */}
                        {!isActive && !isMobile && (
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-1/2 w-px bg-white/30 z-10" />
                        )}

                        {/* Top-right Icon */}
                        <img
                            src={item.icon}
                            alt="Icon"
                            className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 z-20 opacity-80"
                        />

                        {/* Video */}
                        <motion.div
                            className={`w-full h-full overflow-hidden ${
                                isMobile ? 'aspect-square' : ''
                            }`}
                            initial={{ scale: 1 }}
                            animate={{ scale: isActive ? 1.02 : 1 }}
                            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                        >
                            <CloudinaryVideo
                                {...getOptimizedAssetProps(
                                    'public/Videos/EV_charging _video.mp4',
                                    'hero',
                                    'video'
                                )}
                                className='w-full h-full object-cover'
                                autoPlay={isActive}
                                loop={isActive}
                                muted={true}
                                playsInline={true}
                            />
                        </motion.div>

                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/40 p-6 md:p-10 text-white flex flex-col justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isActive || isPlayed ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <motion.h2
                                className="md:mt-40 text-2xl md:text-4xl font-semibold mb-2 md:mb-4"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{
                                    y: isActive || isPlayed ? 0 : 30,
                                    opacity: isActive || isPlayed ? 1 : 0,
                                }}
                                transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
                            >
                                {item.title}
                            </motion.h2>

                            <motion.p
                                className="text-sm md:text-base max-w-md mb-4 md:mb-6"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{
                                    y: isActive || isPlayed ? 0 : 30,
                                    opacity: isActive || isPlayed ? 1 : 0,
                                }}
                                transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
                            >
                                {item.description}
                            </motion.p>

                            <motion.button
                                className="border md:mt-16 border-white px-4 py-2 md:px-6 md:py-4 rounded-full w-fit hover:bg-white hover:text-black transition-colors text-sm md:text-base"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{
                                    opacity: isActive || isPlayed ? 1 : 0,
                                    scale: isActive || isPlayed ? 1 : 0.95,
                                }}
                                transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
                            >
                                {item.button}
                            </motion.button>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default SplitHoverImages;
