import React from "react";
import HeroImage from "../../assets/images/engineering_works/hero.png"

export function Hero({ title, breadcrumbs }) {
  return (
    <div className="flex flex-col relative w-full h-full items-center justify-center text-white leading-none">
      <img
        src={HeroImage}
        className="absolute h-full w-full object-cover inset-0"
        alt="Engineering works hero background"
      />
      
      <div className="absolute h-full w-full bg-black/30" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-[33px] py-[29px] max-md:max-w-full max-md:px-5">
        <h1 className="text-[40px] max-md:text-3xl font-semibold text-center mb-6">
          {title}
        </h1>
        <div className="flex items-stretch text-base font-light mt-auto self-start text-white font-['Cairo'] text-[16px] font-normal font-light leading-[100%] opacity-50 absolute bottom-10 left-10">
          {breadcrumbs.map((crumb, index) => (
            <div key={index}>
              {index > 0 && " / "}
              {crumb}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
