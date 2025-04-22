import React from "react";
import ContactForm from "../components/common/ContactForm";
import { motion as Motion } from "framer-motion";
import CloudinaryVideo from "../components/common/CloudinaryVideo";
import { getOptimizedAssetProps } from "../utils/cloudinaryHelper";

const GetInTouch = () => {
  const formContainerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // custom spring-like easing
        delay: 0.2
      } 
    }
  };
    
  return (
    <section className="bg-white overflow-hidden text-xl text-white leading-none">
      <div className="flex flex-col relative min-h-[1010px] w-full items-stretch pt-[31px] pb-[181px] px-[38px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <CloudinaryVideo
            {...getOptimizedAssetProps(
              'public/Videos/Hero-Section-1.mp4',
              'background',
              'video'
            )}
            className="w-full h-full object-cover"
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            playsInline={true}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <Motion.div 
          className="relative bg-[rgba(0,0,0,0.3)] self-center flex w-[874px] max-w-full flex-col items-center font-light mt-[88px] -mb-9 px-20 py-[71px] rounded-[20px] border-[rgba(255,255,255,0.5)] border-solid border-2 max-md:mt-[100px] max-md:mb-2.5 max-md:px-5"
          variants={formContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactForm />
        </Motion.div>
        
      </div>
    </section>
  );
};

export default GetInTouch;
