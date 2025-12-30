import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { homeImgs } from "../../../utils/localAssets";

const ConnectWithUs = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
<<<<<<< HEAD
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card */}
        <div
          className="relative rounded-[40px] p-6 md:p-10 overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/Home/Connect.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-center text-white font-bold mb-6 text-3xl md:text-4xl">
              Connect With Us
            </h2>

            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              
              {/* Left side - Contact Info */}
              <div className="flex flex-col gap-5 text-white">
                <div>
                  <p className="text-lg md:text-xl font-light mb-1">Email:</p>
                  <p className="text-lg md:text-xl font-normal">
                    contact@voltant.energy
                  </p>
                </div>

                <div>
                  <p className="text-lg md:text-xl font-light mb-1">Phone:</p>
                  <p className="text-lg md:text-xl font-normal">
                    +971 50 671 9857
                  </p>
                </div>
=======
    <div className="py-10 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="relative rounded-[40px] px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12 overflow-hidden w-full">
          {/* Background Image */}
          {!imageLoaded && (
            <div className='absolute inset-0 bg-gray-800 z-0 flex items-center justify-center rounded-[40px]'>
              <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={homeImgs.connectWithUsBg}
            alt="Connect with us background"
            className="absolute inset-0 w-full h-full object-cover rounded-[40px] z-0"
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 1s' }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 rounded-[40px] z-10"></div>
          
          {/* Content */}
          <div className="relative z-20">
            <h2 className="text-center text-white font-bold mb-6 md:mb-8 lg:mb-10 text-2xl md:text-3xl lg:text-4xl font-['Cairo']">
              Connect With Us
            </h2>
            
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
              {/* Left side - Contact Info */}
              <div className="flex flex-col gap-5 md:gap-6">
                <div className="text-white">
                  <p className="text-base md:text-lg lg:text-xl font-light mb-1 font-['Cairo']">Email us at</p>
                  <a href="mailto:contact@voltant.energy" className="text-base md:text-lg lg:text-xl font-normal hover:text-gray-300 transition-colors font-['Cairo']">
                    contact@voltant.energy
                  </a>
                </div>
                
                <div className="text-white">
                  <p className="text-base md:text-lg lg:text-xl font-light mb-1 font-['Cairo']">Call us at</p>
                  <a href="tel:+971506719857" className="text-base md:text-lg lg:text-xl font-normal hover:text-gray-300 transition-colors font-['Cairo']">
                    +971 50 671 9857
                  </a>
                </div>
              </div>

              {/* Right side - WhatsApp Button */}
              <div className="flex flex-col md:items-end w-full md:w-auto">
                <a
                  href="https://wa.me/971506719857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4AB757] text-white px-4 py-3 md:px-6 md:py-3.5 lg:px-7 lg:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#3a9246] transition-colors w-full md:w-auto shadow-lg hover:shadow-xl font-['Cairo']"
                >
                  <span className="text-base md:text-lg font-normal whitespace-nowrap">Connect with us through</span>
                  <FaWhatsapp className="text-xl md:text-2xl flex-shrink-0" />
                </a>
>>>>>>> 6673329e902498f3bc4427bc1104cdd7a3831868
              </div>

              {/* Right side - WhatsApp Button */}
              <a
                href="https://wa.me/971506719857"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6BBE45] hover:bg-[#5aa83b] transition-colors rounded-[15px] px-6 py-3 flex items-center gap-3 shrink-0"
              >
                <p className="text-white text-base font-light whitespace-nowrap">
                  Connect with us through
                </p>
                <FaWhatsapp size={26} className="text-white" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConnectWithUs;
