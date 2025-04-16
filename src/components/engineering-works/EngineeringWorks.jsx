import React from "react";
import { Hero } from "./Hero";
import { Overview } from "./Overview";
import { WhyChooseUs } from "./WhyChooseUs";
import { EngineeringProfiles } from "./EngineeringProfiles";
import Footer from "../common/Footer";

export default function EngineeringWorks() {
  return (
    <div className="bg-white w-full flex flex-col items-center overflow-hidden">
      {/* Hero section */}
      <div className="relative bg-black w-full h-[691px] md:h-[434px]" style={{ overflow: 'hidden' }}>
        <Hero 
          title="Engineering Works"
          breadcrumbs={["Home", "EV Charging", "Engineering Works"]}
        />
      </div>
      
      {/* Content sections */}
      <div className="w-full">
        {/* Overview section */}
        <div className="w-full">
          <Overview />
        </div>

        {/* Why Choose Us section */}
        <div className="w-full">
          <WhyChooseUs />
        </div>

        {/* Engineering Profiles section */}
        <div className="w-full">
          <EngineeringProfiles />
        </div>
        
        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
