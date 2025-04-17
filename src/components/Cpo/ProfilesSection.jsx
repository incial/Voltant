import React from 'react';
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
      className="mb-12 md:mb-20"
      variants={itemFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <h3 className="text-2xl font-medium mb-2">{title}</h3>
      <p className="text-[20px] max-md:text-[20px] leading-normal">
        {description}
      </p>
    </motion.div>
  );
};

const ProfilesSection = () => {
  // Left column profile data
  const leftProfiles = [
    {
      title: "Seamless Network Management",
      description: "As a Charge-Point Operator, we oversee the end-to-end operation of EV charging stations, ensuring a stable, efficient, and user-friendly experience. Our role extends beyond installation, focusing on real-time monitoring, remote diagnostics, and optimized energy distribution."
    },
    {
      title: "Smart Charge Point Management System (CPMS)",
      description: "Our advanced CPMS enables live tracking, automated load balancing, and remote control of charging stations. With predictive maintenance and real-time analytics, we ensure maximum uptime and operational efficiency."
    },
    {
      title: "Integrated Billing & Payment Solutions",
      description: "We provide a seamless payment experience with multiple transaction options, including RFID, mobile apps, and contactless payments. Our billing system ensures transparent pricing and easy invoicing for both private and public charging networks."
    }
  ];

  // Right column profile data
  const rightProfiles = [
    {
      title: "Scalable & Future-Ready Infrastructure",
      description: "Designed for expansion, our CPO solutions support businesses, fleet operators, and municipalities in growing their EV charging network. With flexible deployment models and advanced energy management, we future-proof charging infrastructure for evolving needs."
    },
    {
      title: "24/7 Support & Maintenance",
      description: "Our dedicated support team offers round-the-clock assistance, troubleshooting, and remote fixes to ensure uninterrupted charging services. With proactive monitoring and quick issue resolution, we keep every charging point running at peak performance."
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
          className="text-[rgba(127,127,127,1)] text-4xl mb-12 max-md:text-3xl font-bold leading-none max-md:mx-[50px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={fadeIn}
        >
          Profiles
        </motion.h2>
        <div className="mt-[60px] max-md:mt-10">
          <div className="gap-2 justify-between flex max-md:flex-col max-md:mx-[50px]">
            <motion.div 
              className="w-5/12 max-md:w-full"
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
              className="w-5/12 ml-5 max-md:w-full max-md:ml-0"
              variants={sectionFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
            >
              <div className="flex flex-col items-end text-[rgba(127,127,127,1)] max-md:mt-6">
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
                  className="flex items-center justify-start w-full my-[70px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.1 }}
                  variants={buttonAnimation}
                >
                  <button className="text-xl max-md:text-[16px] font-normal text-center leading-none px-9 py-[16px] rounded-[31px] border-[rgba(127,127,127,1)] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors">
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
};

export default ProfilesSection;
