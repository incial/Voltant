// Import images
import cpoHeroImage from '../assets/images/CPO_main.png';
import cpoMidImage from '../assets/images/CPO_main_sub.png';
import householdHeroImage from '../assets/images/Household_hero.png';
import householdMidImage from '../assets/images/Household_mid.png';
import engineeringHeroImage from '../assets/images/engineering_works/hero.png';
import engineeringMiddleImage from '../assets/images/engineering_works/middle.png';

// Import CPO icons
import cpoFolder from '../assets/icons/cpo/stash_folder-alt-light.svg';
import cpoGroup from '../assets/icons/cpo/Group.svg';
import cpoLeaf from '../assets/icons/cpo/pepicons-pencil_leaf-circle.svg';
import cpoThumbUp from '../assets/icons/cpo/mdi-light_thumb-up.svg';
import cpoVector from '../assets/icons/cpo/mdi-light_vector-combine.svg';
import cpoStar from '../assets/icons/cpo/stash_star-light.svg';

// Import Household icons
import householdCrop from '../assets/icons/household/icon-park-outline_tailoring.svg';
import householdStar from '../assets/icons/household/stash_star-light.svg';
import householdGroup from '../assets/icons/household/Group.svg';
import householdThumbUp from '../assets/icons/household/mdi-light_thumb-up.svg';
import householdLeaf from '../assets/icons/household/pepicons-pencil_leaf-circle.svg';

// Import Engineering Works icons
import engineeringThumbUp from '../assets/icons/engineering-works/mdi-light_thumb-up.svg';
import engineeringHourglass from '../assets/icons/engineering-works/fluent_hourglass-20-regular.svg';
import engineeringVector from '../assets/icons/engineering-works/mdi-light_vector-combine.svg';
import engineeringShield from '../assets/icons/engineering-works/si_shield-health-safety-line.svg';
import engineeringStar from '../assets/icons/engineering-works/stash_star-light.svg';
import engineeringGroup from '../assets/icons/engineering-works/Group.svg';

// CPO Data
export const cpoData = {
  hero: {
    title: "CPO",
    breadcrumbs: ["Home", "EV Charging", "CPO"],
    heroImage: cpoHeroImage
  },
  seamlessCharging: {
    title: "Seamless Charging, Smarter Operations",
    paragraphs: [
      "As a Charge Point Operator (CPO), we manage the deployment, operation, and maintenance of EV charging stations, ensuring a seamless and efficient charging experience. Our smart infrastructure enables real-time monitoring, remote diagnostics, and optimized energy distribution for cost-effective and reliable EV charging solutions.",
      "With secure payment integrations, dynamic load balancing, and scalable cloud-based systems, we provide businesses, fleet operators, and public charging networks with a future-ready EV infrastructure that meets industry standards and regulatory requirements."
    ]
  },
  midSection: {
    backgroundImage: cpoMidImage,
    sectionTitle: "Why Choose Us?",
    features: [
      {
        icon: cpoFolder,
        title: 'End-to-End Charging Network Management',
        description: 'We oversee the installation, operation, and maintenance of charging stations, ensuring seamless functionality.'
      },
      {
        icon: cpoGroup,
        title: 'Real-Time Monitoring & Remote Diagnostics',
        description: 'Our smart platform enables live tracking, fault detection, and remote troubleshooting for minimal downtime.'
      },
      {
        icon: cpoLeaf,
        title: 'Dynamic Load Balancing & Energy Optimization',
        description: 'We optimize power distribution across multiple chargers, reducing energy costs while maximizing efficiency.'
      },
      {
        icon: cpoThumbUp,
        title: 'User Access & Payment Solutions',
        description: 'Integrated RFID, mobile app, and contactless payment systems provide a hassle-free charging experience.'
      },
      {
        icon: cpoVector,
        title: 'Scalable & Future-Ready Infrastructure',
        description: 'Our modular, cloud-based systems support network expansion and easy upgrades for long-term scalability.'
      },
      {
        icon: cpoStar,
        title: 'Compliance & Data Security',
        description: 'We ensure all transactions, user data, and system operations meet the highest security and regulatory standards.'
      }
    ]
  },
  profiles: {
    sectionTitle: "Profiles",
    leftProfiles: [
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
    ],
    rightProfiles: [
      {
        title: "Scalable & Future-Ready Infrastructure",
        description: "Designed for expansion, our CPO solutions support businesses, fleet operators, and municipalities in growing their EV charging network. With flexible deployment models and advanced energy management, we future-proof charging infrastructure for evolving needs."
      },
      {
        title: "24/7 Support & Maintenance",
        description: "Our dedicated support team offers round-the-clock assistance, troubleshooting, and remote fixes to ensure uninterrupted charging services. With proactive monitoring and quick issue resolution, we keep every charging point running at peak performance."
      }
    ],
    buttonText: "Download Charging Profile",
    showButton: true
  }
};

// Household Data
export const householdData = {
  hero: {
    title: "Household",
    breadcrumbs: ["Home", "Waste To Energy", "Household"],
    heroImage: householdHeroImage
  },
  seamlessCharging: {
    title: "Sustainable Solutions for Home Waste Management",
    paragraphs: [
      "Our compact household biogas solutions convert kitchen and organic waste into clean, renewable energy right at your home. These user-friendly systems offer a sustainable way to manage household waste while producing biogas for cooking and heating.",
      "With minimal maintenance requirements and significant environmental benefits, our household waste-to-energy systems help families reduce their carbon footprint while generating cost-effective energy for daily use."
    ]
  },
  midSection: {
    backgroundImage: householdMidImage,
    sectionTitle: "Why Choose Us?",
    features: [
      {
        icon: householdCrop,
        title: 'Compact & Space-Saving',
        description: 'Perfect for home and small-scale setups.'
      },
      {
        icon: householdStar,
        title: 'Waste-to-Energy Convenience',
        description: 'Converts kitchen and organic waste into usable biogas.'
      },
      {
        icon: householdGroup,
        title: 'Eco-Friendly & Cost-Effective',
        description: 'Reduces reliance on fossil fuels and lowers waste management costs.'
      },
      {
        icon: householdThumbUp,
        title: 'Low Maintenance',
        description: 'Simple operation with minimal upkeep.'
      },
      {
        icon: householdLeaf,
        title: 'Sustainable Living',
        description: 'upports a circular economy and reduces carbon footprint.'
      }
    ]
  },
  profiles: {
    sectionTitle: "Profiles",
    leftProfiles: [
      {
        title: "Compact Home Biogas Systems",
        description: "Our household biogas systems are designed for easy integration into residential settings. These compact units efficiently convert kitchen scraps, garden waste, and other organic materials into biogas, providing a renewable energy source for cooking and heating needs."
      },
      {
        title: "User-Friendly Operation",
        description: "With intuitive controls and minimal maintenance requirements, our household systems are accessible to all family members. Simple waste input and easy gas collection make daily operation straightforward and hassle-free."
      }
    ],
    rightProfiles: [
      {
        title: "Sustainable Waste Solution",
        description: "By converting household organic waste into energy, our systems significantly reduce landfill contribution while creating a valuable resource. This closed-loop approach supports sustainable living and environmental responsibility at home."
      },
      {
        title: "Cost-Effective Energy Alternative",
        description: "Our household biogas units reduce dependency on conventional energy sources, lowering utility bills and offering financial benefits over time. With minimal operational costs, they provide an economical approach to home energy production."
      }
    ],
    buttonText: "Download Household System Specs",
    showButton: true
  }
};

// Engineering Works Data
export const engineeringWorksData = {
  hero: {
    title: "Engineering Works",
    breadcrumbs: ["Home", "EV Charging", "Engineering Works"],
    heroImage: engineeringHeroImage
  },
  seamlessCharging: {
    title: "Engineering Works: Precision, Efficiency & Innovation",
    paragraphs: [
      "Our Engineering Works ensure seamless EV charging infrastructure deployment, from planning to execution. We specialize in site assessment, electrical integration, grid connectivity, and custom installation solutions tailored to meet diverse operational needs.",
      "With a team of experts, we handle everything from power load analysis to safety compliance, ensuring that every charging station is built for efficiency, reliability, and scalability. Whether it's a commercial charging hub, fleet depot, or residential setup, our engineering solutions optimize performance while minimizing downtime.",
      "Through cutting-edge technology and industry best practices, we provide end-to-end support, ensuring your EV charging infrastructure is future-ready."
    ]
  },
  midSection: {
    backgroundImage: engineeringMiddleImage,
    sectionTitle: "Why Choose Us?",
    features: [
      {
        icon: engineeringThumbUp,
        title: 'Expert-Led Solutions',
        description: 'Our team of skilled engineers ensures precision in every stage of deployment.'
      },
      {
        icon: engineeringHourglass,
        title: 'Tailored for Your Needs',
        description: 'Custom solutions for commercial hubs, fleet depots, and residential installations.'
      },
      {
        icon: engineeringVector,
        title: 'Seamless Grid Integration',
        description: 'Optimized power distribution with advanced load balancing technology.'
      },
      {
        icon: engineeringShield,
        title: 'Compliance & Safety First',
        description: 'Adherence to UAE regulations and global industry standards.'
      },
      {
        icon: engineeringStar,
        title: 'Future-Ready Infrastructure',
        description: 'Scalable, smart, and equipped for evolving EV charging demands.'
      },
      {
        icon: engineeringGroup,
        title: 'End-to-End Support',
        description: 'From planning to execution, we handle every aspect for a hassle-free setup.'
      }
    ]
  },
  profiles: {
    sectionTitle: "Profiles",
    leftProfiles: [
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
    ],
    rightProfiles: [
      {
        title: "Maintenance & Support",
        description: "Our job doesn't end after installation. We provide ongoing maintenance, real-time monitoring, and remote diagnostics to ensure optimal charger performance. With preventive service schedules and 24/7 technical support, we keep charging stations running efficiently."
      },
      {
        title: "Software & Network Integration",
        description: "Seamless connectivity is key to modern EV charging. We integrate smart Charge Point Management Systems (CPMS) with real-time data analytics, load balancing, and OCPP-compliant backend systems. This allows for efficient monitoring, remote control, and a smooth user experience."
      }
    ],
    buttonText: "Download Charging Profile",
    showButton: true
  }
};