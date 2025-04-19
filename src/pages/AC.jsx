import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ServiceCard from '../components/common/ServiceCard'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import CloudinaryImage from '../components/common/CloudinaryImage'
import CloudinaryVideo from '../components/common/CloudinaryVideo'
import { getOptimizedAssetProps } from '../utils/cloudinaryHelper'

const AC = () => {
    // Services data array
    const services = [
        {
            title: 'AC Chargers',
            image: 'src/assets/images/AC_Chrager_image.png',
            path: '/ac-chargers'
        },
        {
            title: 'DC Chargers',
            image: 'src/assets/images/DC_Charger_image.png',
            path: '/dc-chargers'
        },
        {
            title: 'Engineering Works',
            image: 'src/assets/images/Engineering_works.png',
            path: '/ev-charging/engineering-works'
        },
        {
            title: 'CPO',
            image: 'src/assets/images/CPO.png',
            path: '/ev-charging/cpo'
        },
        {
            title: 'More',
            image: 'src/assets/images/More.png',
            path: '/ev-charging/more'
        }
    ]

    return (
        <>
            <Navbar />
            {/* Mobile View - Only visible on small screens */}
            <div className="md:hidden min-h-screen flex flex-col font-['Cairo'] bg-white">
                {/* Hero Section */}
                <div className='relative h-[550px]'>
                    {/* Video Background */}
                    <div className='absolute inset-0 overflow-hidden'>
                        <CloudinaryImage
                            {...getOptimizedAssetProps('src/assets/images/ac_charge.png', 'charging', 'image')}
                            alt="Footer background"
                            className="w-full h-full object-cover"
                        />

                        <div className='absolute inset-0 bg-black opacity-20'></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center w-full max-w-[500px] px-4"
                    >
                        <h1 className="font-['Cairo'] text-[1.8rem] leading-tight font-semibold m-0">
                            AC Chargers
                        </h1>
                    </motion.div>
                </div>

                <section className="py-16 px-8 bg-gray-100 text-center">
                    <h2 className="text-2xl md:text-2.5xl font-bold text-gray-500 mb-4">
                        AC Chargers: Smart, Efficient & Reliable EV Charging
                    </h2>
                    <p className="text-base md:text-md text-gray-600 max-w-2xl mx-auto">
                        AC chargers offer a seamless and cost-effective solution for home, workplace, and commercial EV charging, making electric vehicle ownership more convenient than ever. Designed for long-duration and overnight charging, they provide a steady, optimized power flow while ensuring energy efficiency and lower infrastructure costs.
                        <br />
                        <br />
                        Ideal for residential garages, offices, and public parking spaces, AC chargers integrate smart connectivity features, allowing remote monitoring, scheduling, and usage tracking. With universal compatibility, they support a wide range of EV models, making them a versatile and future-ready charging solution. Whether for personal use or building a broader EV charging network, our AC charging solutions deliver safe, reliable, and intelligent energy management for a sustainable future.
                    </p>
                </section>

                <section className="bg-black relative py-12 px-4 text-white text-center overflow-hidden">
                    <div className='absolute inset-0 w-full h-full overflow-hidden'>
                        <CloudinaryImage
                            {...getOptimizedAssetProps('src/assets/images/ac_charge.png', 'charging', 'image')}
                            alt="Footer background"
                            className="w-full h-full object-cover"
                        />
                        <div className='absolute inset-0 bg-black opacity-60'></div>
                    </div>
                    <div className="absolute inset-0 bg-[url('/your-image.jpg')] bg-cover bg-center blur-sm opacity-20"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">

                        <h2 className="text-2xl md:text-3xl font-bold mb-10">Why Choose AC Charging?</h2>

                        <div className="grid gap-6 text-left">
                            {/* Feature 1 */}
                            <div className="flex items-start space-x-4">
                                <span className="text-yellow-400 text-3xl mt-1">★</span>
                                <p className="text-base md:text-lg">
                                    <strong>Ideal For Homes & Businesses</strong><br />
                                    Perfect for residential garages, offices, and public parking spaces.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start space-x-4">
                                <span className="text-green-400 text-3xl mt-1">⚡</span>
                                <p className="text-base md:text-lg">
                                    <strong>Energy-Efficient & Cost-Effective</strong><br />
                                    Delivers steady, optimized charging with lower infrastructure costs.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start space-x-4">
                                <span className="text-blue-400 text-3xl mt-1">🔗</span>
                                <p className="text-base md:text-lg">
                                    <strong>Seamless Integration</strong><br />
                                    Smart connectivity for remote monitoring, scheduling, and usage insights.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex items-start space-x-4">
                                <span className="text-blue-300 text-3xl mt-1">👍</span>
                                <p className="text-base md:text-lg">
                                    <strong>Compatible with All EVs</strong><br />
                                    Universally designed to support various electric vehicle models.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="py-12 px-4 bg-gray-900 flex justify-center items-center min-h-screen">
                    <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 text-gray-800 text-sm space-y-6">

                        {/* Image */}
                        <img
                            src="/path-to-your-image.jpg"
                            alt="AC Charger"
                            className="w-full rounded-xl"
                        />

                        {/* Title */}
                        <h2 className="text-center font-semibold text-lg">MPHMAX AC Charger</h2>
                        <p className="text-center text-gray-500">7.4kW</p>

                        {/* Electrical Specifications */}
                        <div>
                            <h3 className="font-semibold text-base mb-2">Electrical Specifications</h3>
                            <ul className="space-y-1">
                                <li>Rated Model: EVP007S</li>
                                <li>Voltage: 230V</li>
                                <li>Current: 32A</li>
                                <li>Power: 7.4kW</li>
                            </ul>
                        </div>

                        {/* Function and Accessory */}
                        <div>
                            <h3 className="font-semibold text-base mb-2">Function and Accessory</h3>
                            <ul className="space-y-1">
                                <li>LED status</li>
                                <li>RFID</li>
                                <li>Type B RCD</li>
                                <li>Android App with 4G/LAN/WiFi</li>
                                <li>NFC</li>
                                <li>OCPP 1.6 JSON</li>
                                <li>OCPP 2.0.1 (Optional)</li>
                            </ul>
                        </div>

                        {/* Working Environment */}
                        <div>
                            <h3 className="font-semibold text-base mb-2">Working Environment</h3>
                            <ul className="space-y-1">
                                <li>Protection Grade: IP65</li>
                                <li>Storage Temp: -30°C to 55°C</li>
                                <li>Cooling: Natural Air Cooling</li>
                            </ul>
                        </div>

                        {/* Mechanical Parameters */}
                        <div>
                            <h3 className="font-semibold text-base mb-2">Mechanical Parameters</h3>
                            <ul className="space-y-1">
                                <li>Connector: SAE Type 2 Connector</li>
                                <li>Dimension: 300mm × 180mm × 70mm</li>
                                <li>Weight: 6KG</li>
                                <li>Colors: Silver / Dark Grey Unit, Black Cable</li>
                                <li>Standards: IEC-61851, CE/RoHS</li>
                            </ul>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-2">
                            <button className="w-full border border-gray-800 rounded-full py-2 hover:bg-gray-800 hover:text-white transition">
                                Download Datasheet
                            </button>
                            <button className="w-full border border-gray-800 rounded-full py-2 hover:bg-gray-800 hover:text-white transition">
                                Download Charging Profile
                            </button>
                        </div>
                    </div>
                </section>


                {/* Services Grid Section - Improved grid layout */}
                <div className='bg-white p-4 sm:p-8 py-12 sm:py-16'>
                    <div className='grid grid-cols-2 gap-4 sm:gap-6'>
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                image={
                                    <CloudinaryImage
                                        {...getOptimizedAssetProps(service.image)}
                                        alt={service.title}
                                    />
                                }
                                path={service.path}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop View - Only visible on medium and larger screens */}
            <div className='hidden md:flex min-h-screen flex-col'>
                {/* Hero Section with Video Background */}
                <section className='relative w-full h-screen'>
                    {/* Video Background */}
                    <div className='absolute inset-0 w-full h-full overflow-hidden'>
                        <CloudinaryImage
                            {...getOptimizedAssetProps('src/assets/images/ac_charge.png', 'charging', 'image')}
                            alt="Footer background"
                            className="w-full h-full object-cover"
                        />
                        <div className='absolute inset-0 bg-black opacity-60'></div>
                    </div>

                    {/* Hero Content - Positioned at bottom left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center w-full max-w-[500px] px-4"
                    >
                        <h1 className="font-['Cairo'] text-[3rem] leading-tight font-semibold m-0">
                            AC Chargers
                        </h1>
                    </motion.div>
                </section>

                <section className="py-16 px-8 bg-gray-100 text-center">
                    <h2 className="text-2xl md:text-2.5xl font-bold text-gray-500 mb-4 md:mb-6 mb-0">
                        AC Chargers: Smart, Efficient & Reliable EV Charging
                    </h2>
                    <p className="text-base md:text-md text-gray-600 max-w-2xl mx-auto">
                        AC chargers offer a seamless and cost-effective solution for home, workplace, and commercial EV charging, making electric vehicle ownership more convenient than ever. Designed for long-duration and overnight charging, they provide a steady, optimized power flow while ensuring energy efficiency and lower infrastructure costs.
                        <br />
                        <br />
                        Ideal for residential garages, offices, and public parking spaces, AC chargers integrate smart connectivity features, allowing remote monitoring, scheduling, and usage tracking. With universal compatibility, they support a wide range of EV models, making them a versatile and future-ready charging solution. Whether for personal use or building a broader EV charging network, our AC charging solutions deliver safe, reliable, and intelligent energy management for a sustainable future.
                    </p>
                </section>

                {/* Services Grid Section */}
                <section className='py-16 px-32'>
                    <div className='mx-auto max-w-[1500px] px-8'>
                        <div className='grid grid-cols-3 gap-6'>
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    title={service.title}
                                    image={service.image}
                                    path={service.path}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default AC