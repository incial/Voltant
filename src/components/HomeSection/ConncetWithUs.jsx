import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ConnectWithUs = () => {
  return (
    <div className="py-8 bg-background">
      <div className="max-w-2xl mx-auto px-4">
        <h2 
          className="text-center text-[#7F7F7F] font-bold mb-12 text-2xl md:text-[40px] leading-snug"
          style={{
            fontWeight: 700,
            lineHeight: '100%'
          }}
        >
          Connect With Us
        </h2>
        
        <div className="flex flex-col md:flex-row md:justify-center md:gap-50 space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p 
              className="text-[#7F7F7F] font-bold mb-1 text-lg md:text-xl"
              style={{
                fontWeight: 600,
                lineHeight: '135%'
              }}
            >
              Email:
            </p>
            <p 
              className="text-[#7F7F7F] font-light text-lg md:text-xl"
              style={{
                fontWeight: 600,
                lineHeight: '135%'
              }}
            >
              example@gmail.com
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <p 
              className="text-[#7F7F7F] font-bold mb-1 text-lg md:text-xl"
              style={{
                fontWeight: 600,
                lineHeight: '135%'
              }}
            >
              Phone:
            </p>
            <p 
              className="text-[#7F7F7F] font-light text-lg md:text-xl"
              style={{
                fontWeight: 600,
                lineHeight: '135%'
              }}
            >
              +97 1 567 555 20
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <FaWhatsapp 
            size={32} 
            className="text-green-500 hover:text-green-600 cursor-pointer transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs; 