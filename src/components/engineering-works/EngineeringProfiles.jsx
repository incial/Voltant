import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const sectionFadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.25
    }
  }
};

const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { delay: 0.6, duration: 0.4 } 
  }
};

// Profile Item Component
const ProfileItem = ({ title, description }) => {
  return (
    <motion.div 
      className="mb-6"
      variants={itemFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <h3 className="text-2xl font-medium mb-2">{title}</h3>
      <p className="text-[24px] max-md:text-[20px] leading-normal">
        {description}
      </p>
    </motion.div>
  );
};

export function EngineeringProfiles() {
  // Left column profile data
  const leftProfiles = [
    {
      title: "Site Assessment & Feasibility Study",
      description: "We begin with a comprehensive evaluation of the site, analyzing power availability, load capacity, and infrastructure readiness. This helps determine the best charger placement while ensuring compliance with local regulations and safety standards."
    },
    {
      title: "Design & Engineering Solutions",
      description: "Every project is designed for maximum efficiency, integrating smart energy management, optimal power distribution, and scalable solutions. Whether it's a single charging point or a large-scale network, our engineering team develops tailored layouts and electrical schematics that align with sustainability goals."
    },
    {
      title: "Installation & Commissioning",
      description: "From civil and electrical work to network setup, our team manages the entire installation process, ensuring seamless execution. We conduct rigorous testing and commissioning to guarantee smooth operation and long-term reliability."
    }
  ];

  // Right column profile data
  const rightProfiles = [
    {
      title: "Maintenance & Support",
      description: "Our job doesn't end after installation. We provide ongoing maintenance, real-time monitoring, and remote diagnostics to ensure optimal charger performance. With preventive service schedules and 24/7 technical support, we keep charging stations running efficiently."
    },
    {
      title: "Software & Network Integration",
      description: "Seamless connectivity is key to modern EV charging. We integrate smart Charge Point Management Systems (CPMS) with real-time data analytics, load balancing, and OCPP-compliant backend systems. This allows for efficient monitoring, remote control, and a smooth user experience."
    }
  ];

  return (
    <motion.section 
      className="flex flex-col items-center w-full mt-[100px] mb-[100px] px-4 max-md:mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={fadeIn}
    >
      <div className="max-w-[1098px] w-full flex flex-col">
        <motion.h2 
          className="text-[rgba(127,127,127,1)] text-4xl max-md:text-3xl font-bold leading-none max-md:mx-[50px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={fadeIn}
        >
          Profiles
        </motion.h2>
        <div className="mt-[60px] max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:mx-[50px]">
            <motion.div 
              className="w-6/12 max-md:w-full"
              variants={sectionFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
            >
              <div className="text-[rgba(127,127,127,1)] text-2xl font-light leading-[48px] max-md:leading-normal max-md:text-xl">
                {leftProfiles.map((profile, index) => (
                  <ProfileItem 
                    key={index}
                    title={profile.title}
                    description={profile.description}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="w-6/12 ml-5 max-md:w-full max-md:ml-0"
              variants={sectionFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
            >
              <div className="flex flex-col items-stretch text-[rgba(127,127,127,1)] max-md:mt-6">
                <div className="text-2xl font-light leading-[48px] max-md:leading-normal max-md:text-xl">
                  {rightProfiles.map((profile, index) => (
                    <ProfileItem 
                      key={index}
                      title={profile.title}
                      description={profile.description}
                    />
                  ))}
                </div>
                <motion.div 
                  className="flex justify-center w-full my-[70px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.1 }}
                  variants={buttonAnimation}
                >
                  <button className="text-[24px] max-md:text-[16px] font-normal text-center leading-none px-9 py-[21px] rounded-[31px] border-[rgba(127,127,127,1)] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors">
                    Download Charging Profile
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
