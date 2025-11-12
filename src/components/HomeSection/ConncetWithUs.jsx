import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ConnectWithUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[#7F7F7F] font-bold mb-16 text-3xl md:text-[40px]">
          Connect With Us
        </h2>
        
        <div className="text-center space-y-6">
          <a 
            href="mailto:contact@voltant.energy"
            className="text-blue-600 hover:text-blue-700 text-xl md:text-2xl font-medium block transition-colors"
          >
            contact@voltant.energy
          </a>
          
          <p className="text-[#7F7F7F] text-xl md:text-2xl font-medium">
            +971 50 671 9857
          </p>
          
          <p className="text-[#000000] text-base md:text-lg font-semibold leading-relaxed pt-4">
            Business Center 1, The Meydan Hotel,<br />
            Nad Al Sheba, Dubai, Dubai, 9305,<br />
            Dubai
          </p>
          
          <div className="pt-6">
            <a 
              href="https://wa.me/971506419857" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <FaWhatsapp 
                size={40} 
                className="text-[#25D366] hover:text-[#128C7E] cursor-pointer transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs; 