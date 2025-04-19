import React from 'react'
import CloudinaryImage from '../common/CloudinaryImage'
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const WhoAreWe = () => {
  return (
    <div className="relative w-full md:h-screen">
      {/* Mobile layout - stacked */}
      <div className="md:hidden flex flex-col w-full">
        {/* White logo section - top */}
        <div className="w-full py-10 flex justify-center items-center">
          <CloudinaryImage
            {...getOptimizedAssetProps('src/assets/images/Logo.png')}
            alt="Voltant Energy Logo"
            className="h-14"
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
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          
          {/* Text content */}
          <div className="relative z-10 px-12 py-10">
            <div className="text-white items-start">
              <h2 className="text-3xl font-bold mb-12">Who We Are.</h2>
              
              <p className="mb-4 text-sm font-normal">
                A Sustainable Energy start up focused on providing innovative products &
                advanced technological solutions for industrial & commercial establishments
              </p>
              
              <p className="mb-4 text-sm font-normal">
                At Voltant Energy, we're shaping a net-zero future with smart, sustainable
                solutions. Our advanced anaerobic digestion technology turns organic waste 
                into clean energy, fueling a circular economy while reducing environmental
                impact.
              </p>
              
              <p className="mb-4 text-sm font-normal">
                From feasibility studies and regulatory approvals to full-scale biogas plant
                installation and maintenance, we deliver end-to-end waste-to-energy
                solutions tailored to every need.
              </p>
              
              <p className="mb-4 text-sm">
                Our Smart Energy Monitoring systems bring real-time insights, helping
                businesses cut energy costs, boost efficiency, and drive profitability through
                intelligent automation.
              </p>
              
              <p className="mb-4 text-sm font-normal">
                Sustainability isn't just our mission—it's the future we're building.
              </p>
              
              <div className="mt-14 flex justify-start items-start space-x-4">
                <button className="border-2 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - side by side */}
      <div className="hidden md:flex relative z-10 w-full h-full items-center justify-between">
        {/* Left side - Logo section with white background */}
        <div className="w-[30%] h-full flex flex-col justify-center items-center z-20">
          <div className="flex flex-col items-center">
            <CloudinaryImage
              {...getOptimizedAssetProps('src/assets/images/Logo.png')}
              alt="Voltant Energy Logo"
              className="h-16 bg" 
            />
          </div>
        </div>
        
        {/* Right side with forest background image and overlay */}
        <div className="relative w-[70%] h-[120vh]">
          {/* Background forest image - only on right side */}
          <div className="absolute inset-0 w-full h-full">
            <CloudinaryImage 
              {...getOptimizedAssetProps('src/assets/images/About_us_section.jpg')}
              alt="Forest background" 
              className="w-full h-full object-cover"
            />
            {/* Black overlay with 50% opacity */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>

          {/* Content container with text and social icons */}
          <div className="relative w-full h-full flex">
            {/* Text content */}
            <div className="relative z-10 h-[120vh] w-[75%] py-16 pl-16 md:pl-20 lg:pl-32 pr-8 flex flex-col justify-center">
              <div className="text-white max-w-3xl">
                <h2 className="text-4xl font-bold mb-14">Who We Are.</h2>
                
                <p className="mb-6 text-lg font-normal">
                  A Sustainable Energy start up focused on providing innovative products &
                  advanced technological solutions for industrial & commercial establishments
                </p>
                
                <p className="mb-6 text-lg font-normal">
                  At Voltant Energy, we're shaping a net-zero future with smart, sustainable
                  solutions. Our advanced anaerobic digestion technology turns organic waste 
                  into clean energy, fueling a circular economy while reducing environmental
                  impact.
                </p>
                
                <p className="mb-6 text-lg font-normal">
                  From feasibility studies and regulatory approvals to full-scale biogas plant
                  installation and maintenance, we deliver end-to-end waste-to-energy
                  solutions tailored to every need.
                </p>
                
                <p className="mb-6 text-lg font-normal">
                  Our Smart Energy Monitoring systems bring real-time insights, helping
                  businesses cut energy costs, boost efficiency, and drive profitability through
                  intelligent automation.
                </p>
                
                <p className="mb-6 text-lg font-normal">
                  Sustainability isn't just our mission—it's the future we're building.
                </p>
                
                <button className="mt-4 border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                  Get in Touch
                </button>
              </div>
            </div>
            
            {/* Social media icons - Positioned on far right */}
            <div className="relative z-10 h-full w-[40%] flex flex-col justify-center items-center">
              <div className="flex flex-col space-y-10">
                <a href="#" className="text-white hover:opacity-80 transition-opacity">
                  <FaYoutube size={26} />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity">
                  <FaInstagram size={26} />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity">
                  <FaFacebookF size={26} />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity">
                  <FaLinkedinIn size={26} />
                </a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity">
                  <FaXTwitter size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe
