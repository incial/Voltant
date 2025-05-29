import { evImgs, heroIcons, wasteImgs } from "./localAssets"

// CPO Data
export const cpoData = {
  hero: {
    title: 'CPO',
    breadcrumbs: ['Home', 'EV Charging', 'CPO'],
    showSubtitle: false,
    heroImage: evImgs.cpo
  },
  seamlessCharging: {
    title: 'Seamless Charging, Smarter Operations',
    paragraphs: [
      'As a Charge Point Operator (CPO), we manage the deployment, operation, and maintenance of EV charging stations, ensuring a seamless and efficient charging experience. Our smart infrastructure enables real-time monitoring, remote diagnostics, and optimized energy distribution for cost-effective and reliable EV charging solutions.',
      'With secure payment integrations, dynamic load balancing, and scalable cloud-based systems, we provide businesses, fleet operators, and public charging networks with a future-ready EV infrastructure that meets industry standards and regulatory requirements.'
    ]
  },
  midSection: {
    backgroundImage: evImgs.cpoAbout,
    sectionTitle: 'Why Choose Us?',
    features: [
      {
        icon: heroIcons.folder,
        title: 'End-to-End Charging Network Management',
        description:
          'We oversee the installation, operation, and maintenance of charging stations, ensuring seamless functionality.'
      },
      {
        icon: heroIcons.stat,
        title: 'Real-Time Monitoring & Remote Diagnostics',
        description:
          'Our smart platform enables live tracking, fault detection, and remote troubleshooting for minimal downtime.'
      },
      {
        icon: heroIcons.leaf,
        title: 'Dynamic Load Balancing & Energy Optimization',
        description:
          'We optimize power distribution across multiple chargers, reducing energy costs while maximizing efficiency.'
      },
      {
        icon: heroIcons.thumbUp,
        title: 'User Access & Payment Solutions',
        description:
          'Integrated RFID, mobile app, and contactless payment systems provide a hassle-free charging experience.'
      },
      {
        icon: heroIcons.vectorCombine,
        title: 'Scalable & Future-Ready Infrastructure',
        description:
          'Our modular, cloud-based systems support network expansion and easy upgrades for long-term scalability.'
      },
      {
        icon: heroIcons.star,
        title: 'Compliance & Data Security',
        description:
          'We ensure all transactions, user data, and system operations meet the highest security and regulatory standards.'
      }
    ]
  },
  profiles: {
    sectionTitle: 'Profiles',
    leftProfiles: [
      {
        title: 'Seamless Network Management',
        description:
          'As a Charge-Point Operator, we oversee the end-to-end operation of EV charging stations, ensuring a stable, efficient, and user-friendly experience. Our role extends beyond installation, focusing on real-time monitoring, remote diagnostics, and optimized energy distribution.'
      },
      {
        title: 'Smart Charge Point Management System (CPMS)',
        description:
          'Our advanced CPMS enables live tracking, automated load balancing, and remote control of charging stations. With predictive maintenance and real-time analytics, we ensure maximum uptime and operational efficiency.'
      },
      {
        title: 'Integrated Billing & Payment Solutions',
        description:
          'We provide a seamless payment experience with multiple transaction options, including RFID, mobile apps, and contactless payments. Our billing system ensures transparent pricing and easy invoicing for both private and public charging networks.'
      }
    ],
    rightProfiles: [
      {
        title: 'Scalable & Future-Ready Infrastructure',
        description:
          'Designed for expansion, our CPO solutions support businesses, fleet operators, and municipalities in growing their EV charging network. With flexible deployment models and advanced energy management, we future-proof charging infrastructure for evolving needs.'
      },
      {
        title: '24/7 Support & Maintenance',
        description:
          'Our dedicated support team offers round-the-clock assistance, troubleshooting, and remote fixes to ensure uninterrupted charging services. With proactive monitoring and quick issue resolution, we keep every charging point running at peak performance.'
      }
    ],
    buttonText: 'Download Charging Profile',
    showButton: true
  }
}

// More Data
export const moreData = {
  hero: {
    title: 'More',
    breadcrumbs: ['Home', 'EV Charging', 'More'],
    showSubtitle: true,
    subtitle:
      'EV Charging Accessories, AMC, EV Converisons, CPMS Billing System',
    heroImage: evImgs.more
  },
  seamlessCharging: {
    title: 'Enhancing EV Charging with Smart Solutions',
    paragraphs: [
      'We go beyond just chargers—offering a comprehensive ecosystem of accessories, services, and advanced management tools to optimize your EV infrastructure..'
    ]
  },
  midSection: {
    backgroundImage: evImgs.moreAbout,
    sectionTitle: 'Why Choose Us?',
    features: [
      {
        icon: heroIcons.power,
        title: 'EV Charging Accessories',
        description:
          'From cables and connectors to mounting solutions and surge protectors, we provide high-quality accessories to enhance charging efficiency and safety.'
      },
      {
        icon: heroIcons.like,
        title: 'Annual Maintenance Contracts (AMC)',
        description:
          'Keep your charging network running at peak performance with our preventive maintenance, on-demand support, and system health monitoring.'
      },
      {
        icon: heroIcons.vectorCombine,
        title: 'Seamless Grid Integration',
        description:
          'Transform conventional vehicles into eco-friendly EVs with our expert conversion solutions, enabling businesses and individuals to embrace sustainability.'
      },
      {
        icon: heroIcons.star,
        title: 'CPMS & Billing System',
        description:
          'Our Charge Point Management System (CPMS) offers real-time monitoring, automated billing, RFID authentication, and seamless payment integration for a hassle-free charging experience'
      }
    ]
  },
  profiles: {
    sectionTitle: 'Profiles',
    leftProfiles: [
      {
        title: 'EV Charging Accessories - Technical Overview',
        description:
          'Charging Cables: Type 1, Type 2, CCS, CHAdeMO, with power ratings (kW), insulation types, and durability specs Connectors & Adapters: Compatibility with AC/DC chargers, IP rating for weatherproofing, and safety certifications.Mounting Solutions: Wall-mounted, pedestal, and pole-mounted options with load-bearing capacity and materials Surge Protectors & Smart Relays: Protection against voltage spikes, short circuits, and overheating, ensuring charger longevity.'
      },
      {
        title: 'Annual Maintenance Contracts (AMC) - Scope of Service',
        description:
          'Preventive Maintenance: Routine hardware checks, firmware updates, and load testing to prevent failures.On-Demand Repairs: 24/7 troubleshooting, remote diagnostics, and fast part replacement to reduce downtime.Performance Analytics: Regular reports on energy consumption, fault logs, and efficiency optimization.Compliance & Safety Checks: Ensures chargers meet updated UAE & global safety standards.'
      }
    ],
    rightProfiles: [
      {
        title: 'EV Conversions - Key Technical Aspects',
        description:
          'Battery System Type of lithium-ion battery packs, capacity (kWh), and estimated range per charge.Motor & Powertrain AC vs. DC motor, torque output, regenerative braking support, and efficiency rating.Charging Compatibility Integration with AC & DC chargers, onboard charging speed (kW), and plug compatibility.Control Systems Smart battery management systems (BMS) and regenerative energy utilization.'
      },
      {
        title: 'CPMS & Billing System - Features & Integration',
        description:
          'Real-Time Monitoring Live status updates on charger availability, usage stats, and energy consumption.Automated Billing & Payments Supports RFID authentication, QR-based payments, and subscription models.Load Management Dynamic power distribution to avoid grid overload and optimize energy efficiency.User & Operator Dashboard Cloud-based system for remote charger control, diagnostics, and analytics'
      }
    ],
    buttonText: 'Download Charging Profile',
    showButton: false
  }
}

// Household Data
export const householdData = {
  hero: {
    title: 'Household',
    breadcrumbs: ['Home', 'Waste To Energy', 'Household'],
    showSubtitle: false,
    heroImage: wasteImgs.household
  },
  seamlessCharging: {
    title: 'Sustainable Solutions for Home Waste Management',
    paragraphs: [
      'Our compact household biogas solutions convert kitchen and organic waste into clean, renewable energy right at your home. These user-friendly systems offer a sustainable way to manage household waste while producing biogas for cooking and heating.',
      'With minimal maintenance requirements and significant environmental benefits, our household waste-to-energy systems help families reduce their carbon footprint while generating cost-effective energy for daily use.'
    ]
  },
  midSection: {
    backgroundImage: wasteImgs.hsAbout,
    sectionTitle: 'Why Choose Us?',
    features: [
      {
        icon: heroIcons.tailoring,
        title: 'Compact & Space-Saving',
        description: 'Perfect for home and small-scale setups.'
      },
      {
        icon: heroIcons.star,
        title: 'Waste-to-Energy Convenience',
        description: 'Converts kitchen and organic waste into usable biogas.'
      },
      {
        icon: heroIcons.scaleMoney,
        title: 'Eco-Friendly & Cost-Effective',
        description:
          'Reduces reliance on fossil fuels and lowers waste management costs.'
      },
      {
        icon: heroIcons.thumbUp,
        title: 'Low Maintenance',
        description: 'Simple operation with minimal upkeep.'
      },
      {
        icon: heroIcons.leaf,
        title: 'Sustainable Living',
        description: 'Supports a circular economy and reduces carbon footprint.'
      }
    ]
  },
  profiles: {
    sectionTitle: 'Profiles',
    leftProfiles: [
      {
        title: 'Compact Home Biogas Systems',
        description:
          'Our household biogas systems are designed for easy integration into residential settings. These compact units efficiently convert kitchen scraps, garden waste, and other organic materials into biogas, providing a renewable energy source for cooking and heating needs.'
      },
      {
        title: 'User-Friendly Operation',
        description:
          'With intuitive controls and minimal maintenance requirements, our household systems are accessible to all family members. Simple waste input and easy gas collection make daily operation straightforward and hassle-free.'
      }
    ],
    rightProfiles: [
      {
        title: 'Sustainable Waste Solution',
        description:
          'By converting household organic waste into energy, our systems significantly reduce landfill contribution while creating a valuable resource. This closed-loop approach supports sustainable living and environmental responsibility at home.'
      },
      {
        title: 'Cost-Effective Energy Alternative',
        description:
          'Our household biogas units reduce dependency on conventional energy sources, lowering utility bills and offering financial benefits over time. With minimal operational costs, they provide an economical approach to home energy production.'
      }
    ],
    buttonText: 'Download Household System Specs',
    showButton: true
  }
}

// Engineering Works Data
export const engineeringWorksData = {
  hero: {
    title: 'Engineering Works',
    breadcrumbs: ['Home', 'EV Charging', 'Engineering Works'],
    showSubtitle: false,
    heroImage: evImgs.engineeringWorks
  },
  seamlessCharging: {
    title: 'Engineering Works: Precision, Efficiency & Innovation',
    paragraphs: [
      'Our Engineering Works ensure seamless EV charging infrastructure deployment, from planning to execution. We specialize in site assessment, electrical integration, grid connectivity, and custom installation solutions tailored to meet diverse operational needs.',
      "With a team of experts, we handle everything from power load analysis to safety compliance, ensuring that every charging station is built for efficiency, reliability, and scalability. Whether it's a commercial charging hub, fleet depot, or residential setup, our engineering solutions optimize performance while minimizing downtime.",
      'Through cutting-edge technology and industry best practices, we provide end-to-end support, ensuring your EV charging infrastructure is future-ready.'
    ]
  },
  midSection: {
    backgroundImage: evImgs.ewAbout,
    sectionTitle: 'Why Choose Us?',
    features: [
      {
        icon: heroIcons.star,
        title: 'Expert-Led Solutions',
        description:
          'Our team of skilled engineers ensures precision in every stage of deployment.'
      },
      {
        icon: heroIcons.tailoring,
        title: 'Tailored for Your Needs',
        description:
          'Custom solutions for commercial hubs, fleet depots, and residential installations.'
      },
      {
        icon: heroIcons.vectorCombine,
        title: 'Seamless Grid Integration',
        description:
          'Optimized power distribution with advanced load balancing technology.'
      },
      {
        icon: heroIcons.shield,
        title: 'Compliance & Safety First',
        description:
          'Adherence to UAE regulations and global industry standards.'
      },
      {
        icon: heroIcons.time,
        title: 'Future-Ready Infrastructure',
        description:
          'Scalable, smart, and equipped for evolving EV charging demands.'
      },
      {
        icon: heroIcons.thumbUp,
        title: 'End-to-End Support',
        description:
          'From planning to execution, we handle every aspect for a hassle-free setup.'
      }
    ]
  },
  profiles: {
    sectionTitle: 'Profiles',
    leftProfiles: [
      {
        title: 'Site Assessment & Feasibility Study',
        description:
          'We begin with a comprehensive evaluation of the site, analyzing power availability, load capacity, and infrastructure readiness. This helps determine the best charger placement while ensuring compliance with local regulations and safety standards.'
      },
      {
        title: 'Design & Engineering Solutions',
        description:
          "Every project is designed for maximum efficiency, integrating smart energy management, optimal power distribution, and scalable solutions. Whether it's a single charging point or a large-scale network, our engineering team develops tailored layouts and electrical schematics that align with sustainability goals."
      },
      {
        title: 'Installation & Commissioning',
        description:
          'From civil and electrical work to network setup, our team manages the entire installation process, ensuring seamless execution. We conduct rigorous testing and commissioning to guarantee smooth operation and long-term reliability.'
      }
    ],
    rightProfiles: [
      {
        title: 'Maintenance & Support',
        description:
          "Our job doesn't end after installation. We provide ongoing maintenance, real-time monitoring, and remote diagnostics to ensure optimal charger performance. With preventive service schedules and 24/7 technical support, we keep charging stations running efficiently."
      },
      {
        title: 'Software & Network Integration',
        description:
          'Seamless connectivity is key to modern EV charging. We integrate smart Charge Point Management Systems (CPMS) with real-time data analytics, load balancing, and OCPP-compliant backend systems. This allows for efficient monitoring, remote control, and a smooth user experience.'
      }
    ],
    buttonText: 'Download Charging Profile',
    showButton: true
  }
}

// Large Scale Data
export const largeScaleData = {
  hero: {
    title: 'Large Scale Plant',
    breadcrumbs: ['Home', 'Waste To Energy', 'Large Scale Plant'],
    showSubtitle: false,
    heroImage: wasteImgs.largeScalePlant
  },
  seamlessCharging: {
    title: 'Powering Sustainability at Scale.',
    paragraphs: [
      'Our Large-Scale Biogas Plants are designed for high-volume organic waste processing, transforming waste into renewable energy on an industrial scale. These plants utilize advanced anaerobic digestion technology to maximize biogas production, reduce landfill dependency, and contribute to a circular economy. Ideal for municipalities, industries, and large commercial establishments, our solutions offer high efficiency, scalability, and long-term sustainability.'
    ]
  },
  midSection: {
    backgroundImage: wasteImgs.lsAbout,
    sectionTitle: 'Big Impact, Sustainable Future.',
    features: [
      {
        icon: heroIcons.thumbUp,
        title: 'High-Capacity Processing',
        description:
          'Handles large volumes of organic waste efficiently.'
      },
      {
        icon: heroIcons.tailoring,
        title: 'Customizable & Scalable',
        description:
          'Tailored solutions to meet industrial needs.'
      },
      {
        icon: heroIcons.scale,
        title: 'Advanced Anaerobic Digestion',
        description:
          'Maximizes biogas yield and energy recovery.'
      },
      {
        icon: heroIcons.comet,
        title: 'Cost-Effective & Sustainable ',
        description:
          'Reduces waste management costs and carbon footprint.'
      },
      {
        icon: heroIcons.star,
        title: 'Grid Integration Ready',
        description:
          'Seamless energy conversion for power or fuel applications.'
      },
      {
        icon: heroIcons.leaf,
        title: 'Robust & Durable',
        description:
          'Engineered for long-term performance with minimal maintenance.'
      }
    ]
  },
  profiles: {
    sectionTitle: 'Profiles',
    leftProfiles: [
      {
        title: 'Site Assessment & Feasibility Study',
        description:
          'We begin with a comprehensive evaluation of the site, analyzing power availability, load capacity, and infrastructure readiness. This helps determine the best charger placement while ensuring compliance with local regulations and safety standards.'
      },
      {
        title: 'Design & Engineering Solutions',
        description:
          "Every project is designed for maximum efficiency, integrating smart energy management, optimal power distribution, and scalable solutions. Whether it's a single charging point or a large-scale network, our engineering team develops tailored layouts and electrical schematics that align with sustainability goals."
      },
      {
        title: 'Installation & Commissioning',
        description:
          'From civil and electrical work to network setup, our team manages the entire installation process, ensuring seamless execution. We conduct rigorous testing and commissioning to guarantee smooth operation and long-term reliability.'
      }
    ],
    rightProfiles: [
      {
        title: 'Maintenance & Support',
        description:
          "Our job doesn't end after installation. We provide ongoing maintenance, real-time monitoring, and remote diagnostics to ensure optimal charger performance. With preventive service schedules and 24/7 technical support, we keep charging stations running efficiently."
      },
      {
        title: 'Software & Network Integration',
        description:
          'Seamless connectivity is key to modern EV charging. We integrate smart Charge Point Management Systems (CPMS) with real-time data analytics, load balancing, and OCPP-compliant backend systems. This allows for efficient monitoring, remote control, and a smooth user experience.'
      }
    ],
    buttonText: 'Download Charging Profile',
    showButton: true
  }
}

// Containerized Data
export const containerizedData = {
  hero: {
    title: 'Containerized Plant',
    breadcrumbs: ['Home', 'Waste To Energy', 'Containerized Plant'],
    showSubtitle: false,
    heroImage: wasteImgs.containerizedPlant
  },
  seamlessCharging: {
    title: 'Containerized Biogas Plants: Scalable & Sustainable Energy Solutions',
    paragraphs: [
      'Our Containerized Biogas Plants offer a modular, pre-assembled solution for converting organic waste into renewable energy. Designed for flexibility and efficiency, these compact units integrate advanced anaerobic digestion technology, making them ideal for industries, municipalities, and commercial setups. With quick installation, minimal space requirements, and scalable capacity, our plants enable seamless waste-to-energy conversion while reducing carbon footprints and promoting a circular economy.'
    ]
  },
  midSection: {
    backgroundImage: wasteImgs.cpAbout,
    sectionTitle: 'Big Impact, Sustainable Future.',
    features: [
      {
        icon: heroIcons.thumbUp,
        title: 'Modular & Pre-Assembled ',
        description:
          'Ready-to-install design for quick deployment.'
      },
      {
        icon: heroIcons.tailoring,
        title: 'Compact & Space-Efficient',
        description:
          'Ideal for limited spaces without compromising efficiency.'
      },
      {
        icon: heroIcons.scale,
        title: 'Scalable Capacity',
        description:
          'Expandable solutions to match waste processing needs.'
      },
      {
        icon: heroIcons.comet,
        title: 'Advanced Anaerobic Digestion',
        description:
          ' Efficiently converts organic waste into biogas and bio-fertilizer.'
      },
      {
        icon: heroIcons.star,
        title: 'Low Maintenance & High Durability',
        description:
          'Built for long-term, hassle-free operation.'
      },
      {
        icon: heroIcons.leaf,
        title: 'Eco-Friendly & Sustainable',
        description:
          ' Reduces landfill waste and promotes a circular economy.'
      },
      {
        icon: heroIcons.vectorCombine,
        title: 'Remote Monitoring & Automation',
        description:
          'Smart controls for optimized performance and minimal manual intervention.'
      }
    ]
  },
  profiles: {
    sectionTitle: 'Profiles',
    leftProfiles: [
      {
        title: 'Site Assessment & Feasibility Study',
        description:
          'We begin with a comprehensive evaluation of the site, analyzing power availability, load capacity, and infrastructure readiness. This helps determine the best charger placement while ensuring compliance with local regulations and safety standards.'
      },
      {
        title: 'Design & Engineering Solutions',
        description:
          "Every project is designed for maximum efficiency, integrating smart energy management, optimal power distribution, and scalable solutions. Whether it's a single charging point or a large-scale network, our engineering team develops tailored layouts and electrical schematics that align with sustainability goals."
      },
      {
        title: 'Installation & Commissioning',
        description:
          'From civil and electrical work to network setup, our team manages the entire installation process, ensuring seamless execution. We conduct rigorous testing and commissioning to guarantee smooth operation and long-term reliability.'
      }
    ],
    rightProfiles: [
      {
        title: 'Maintenance & Support',
        description:
          "Our job doesn't end after installation. We provide ongoing maintenance, real-time monitoring, and remote diagnostics to ensure optimal charger performance. With preventive service schedules and 24/7 technical support, we keep charging stations running efficiently."
      },
      {
        title: 'Software & Network Integration',
        description:
          'Seamless connectivity is key to modern EV charging. We integrate smart Charge Point Management Systems (CPMS) with real-time data analytics, load balancing, and OCPP-compliant backend systems. This allows for efficient monitoring, remote control, and a smooth user experience.'
      }
    ],
    buttonText: 'Download Charging Profile',
    showButton: true
  }
}
// SmartWaste Data
export const smartwasteData = {
  hero: {
    title: 'Smart Waste Segregation Bins',
    breadcrumbs: ['Home', 'Waste To Energy', 'Smart Waste Segregation Bins'],
    showSubtitle: false,
    heroImage: wasteImgs.smartWaste
  },
  seamlessCharging: {
    title: 'Automated Sorting, Sustainable Living.',
    paragraphs: [
      'Efficient waste management starts with proper segregation. Our Smart Waste Segregation Bins use advanced sensors and AI-powered technology to automatically sort waste into recyclable, organic, and non-recyclable categories. Designed for homes, offices, and public spaces, these bins reduce landfill waste, promote recycling, and contribute to a cleaner environment.'
    ]
  },
  midSection: {
    backgroundImage: wasteImgs.swAbout,
    sectionTitle: 'Sort Smart, Waste Less.',
    features: [
      {
        icon: heroIcons.star,
        title: 'Automated Sorting',
        description:
          'AI-powered identification of waste types for precise segregation.'
      },
      {
        icon: heroIcons.comet,
        title: 'Smart Monitoring',
        description:
          'Real-time fill level tracking and alerts for optimized waste collection.'
      },
      {
        icon: heroIcons.leaf,
        title: 'Energy Efficient',
        description:
          'Low-power consumption with sustainable battery/solar options.'
      },
      {
        icon: heroIcons.thumbUp,
        title: 'Odor Control',
        description:
          'Sealed compartments with deodorizing technology for a hygienic experience.'
      },
      {
        icon: heroIcons.scale,
        title: 'Versatile Applications',
        description:
          'Ideal for households, businesses, and public spaces.'
      }
    ]
  },
  profiles: {
    sectionTitle: 'Engineering Profiles',
    leftProfiles: [
      {
        title: 'Site Assessment & Feasibility Study',
        description:
          'We begin with a comprehensive evaluation of the site, analyzing power availability, load capacity, and infrastructure readiness. This helps determine the best charger placement while ensuring compliance with local regulations and safety standards.'
      },
      {
        title: 'Design & Engineering Solutions',
        description:
          "Every project is designed for maximum efficiency, integrating smart energy management, optimal power distribution, and scalable solutions. Whether it's a single charging point or a large-scale network, our engineering team develops tailored layouts and electrical schematics that align with sustainability goals."
      },
      {
        title: 'Installation & Commissioning',
        description:
          'From civil and electrical work to network setup, our team manages the entire installation process, ensuring seamless execution. We conduct rigorous testing and commissioning to guarantee smooth operation and long-term reliability.'
      }
    ],
    rightProfiles: [
      {
        title: 'Maintenance & Support',
        description:
          "Our job doesn't end after installation. We provide ongoing maintenance, real-time monitoring, and remote diagnostics to ensure optimal charger performance. With preventive service schedules and 24/7 technical support, we keep charging stations running efficiently."
      },
      {
        title: 'Software & Network Integration',
        description:
          'Seamless connectivity is key to modern EV charging. We integrate smart Charge Point Management Systems (CPMS) with real-time data analytics, load balancing, and OCPP-compliant backend systems. This allows for efficient monitoring, remote control, and a smooth user experience.'
      }
    ],
    buttonText: 'Download Charging Profile',
    showButton: true
  }
}
// AC Data
export const ACData = {
  hero: {
    title: 'AC Chargers',
    breadcrumbs: ['Home', 'EV Charging', 'AC Chargers'],
    showSubtitle: false,
    heroImage: evImgs.acCharger
  },
  seamlessCharging: {
    title: ' AC Chargers: Smart, Efficient & Reliable EV Charging',
    paragraphs: [
      'AC chargers offer a seamless and cost-effective solution for home, workplace, and commercial EV charging, making electric vehicle ownership more convenient than ever. Designed for long-duration and overnight charging, they provide a steady, optimized power flow while ensuring energy efficiency and lower infrastructure costs.',
      'Ideal for residential garages, offices, and public parking spaces, AC chargers integrate smart connectivity features, allowing remote monitoring, scheduling, and usage tracking. With universal compatibility, they support a wide range of EV models, making them a versatile and future-ready charging solution. Whether for personal use or building a broader EV charging network, our AC charging solutions deliver safe, reliable, and intelligent energy management for a sustainable future.'
    ]
  },
  midSection: {
    backgroundImage: evImgs.acAbout,
    sectionTitle: 'Why Choose AC Charging ?',
    features: [
      {
        icon: heroIcons.star,
        title: 'Smart connectivity ',
        description:
          'with WiFi, Bluetooth, and RFID access control.'
      },
      {
        icon: heroIcons.leaf,
        title: 'Energy-Efficient & Cost-Effective',
        description:
          'Delivers steady, optimized charging with lower infrastructure costs.'
      },
      {
        icon: heroIcons.vectorCombine,
        title: 'Multiple charging standards',
        description:
          '(GBT, Type 1, Type 2) for universal compatibility.'
      },
      {
        icon: heroIcons.thumbUp,
        title: 'Integrated safety features',
        description:
          'including Type B leakage protection, overvoltage, and short circuit protection.'
      },
      {
        icon: heroIcons.water,
        title: 'IP65-rated waterproof design',
        description:
          'ensuring durability in all weather conditions.'
      },
      {
        icon: heroIcons.comet,
        title: 'Human motion radar sensor',
        description:
          ' for automatic screen brightness adjustment.'
      },
      {
        icon: heroIcons.tailoring,
        title: 'Customizable options',
        description:
          'including wall-mounted or pedestal installations.'
      }
    ]
  },
  profiles: {
    sectionTitle: 'Profiles',
    buttonText: 'Download Charging Profile',
    showButton: true
  },
  chargerData: {
    title: "AMPHAWK",
    subtitle: "AC Charger",
    chargerModels: [
      {
        power: "7 kW",
        imageUrl: evImgs.charger,
        model: "EVE07W",
        current: "32A",
        maxPower: "7.4kW"
      },
      {
        power: "11 kW",
        imageUrl: evImgs.charger,
        model: "EVE11W",
        current: "32A",
        maxPower: "11kW"
      },
      {
        power: "22 kW",
        imageUrl: evImgs.charger,
        model: "EVE22W",
        current: "32A",
        maxPower: "22kW"
      }
    ],
    specifications: [
      {
        category: "Electrical Specifications",
        items: [
          { label: "Product Model:", values: ["EVE07W", "EVE11W", "EVE22W"] },
          { label: "Max Current:", values: ["32A", "32A", "32A"] },
          { label: "Max Power:", values: ["7.4kW", "11kW", "22kW"] }
        ]
      },
      {
        category: "Function and Accessory",
        items: [
          { label: "LED Indicators:", values: ["Yes", "Yes", "Yes"] },
          { label: "Integrated RCD:", values: ["Type B", "Type B", "Type B"] },
          { label: "RFID / App / Touch Controls:", values: ["Yes", "Yes", "Yes"] },
          { label: "WiFi / Bluetooth:", values: ["Yes (WiFi 2.4GHz)", "Yes (WiFi 2.4GHz)", "Yes (WiFi 2.4GHz)"] },
          { label: "LCD Screen:", values: ["3.0-inch", "3.0-inch", "3.0-inch"] }
        ]
      },
      {
        category: "Working Environment",
        items: [
          { label: "Protection Degree:", values: ["IP65", "IP65", "IP65"] },
          { label: "Operational Temperature:", values: ["-30°C to 55°C", "-30°C to 55°C", "-30°C to 55°C"] },
          { label: "Cooling:", values: ["Natural Air Cooling", "Natural Air Cooling", "Natural Air Cooling"] }
        ]
      },
      {
        category: "Mechanical Parameters",
        items: [
          { label: "Charging Cable:", values: ["5m Type 2 Connector", "5m Type 2 Connector", "5m Type 2 Connector"] },
          { label: "Control Box Dimensions:", values: ["HxWxD = 180mm * 180mm * 70mm", "HxWxD = 180mm * 180mm * 70mm", "HxWxD = 180mm * 180mm * 70mm"] },
          { label: "Weight:", values: ["≤6kg", "≤6kg", "≤6kg"] },
          { label: "Colour:", values: ["White / Dark Grey unit, Black cable", "White or Dark Grey unit, Black cable", "White or Dark Grey unit, Black cable"] },
          { label: "Compliance:", values: ["IEC-61851, CE/RoHS", "IEC-61851, CE/RoHS", "IEC-61851, CE/RoHS"] }
        ]
      }
    ],
    buttonText: "Download Datasheet",
    buttonText2: "Download Charging Profile",
    showButton: true,
    showButton2: true,
    pdfUrl: "",
    pdfUrl2: "",
  },
}
// DC Data
export const DCData = {
  hero: {
    title: 'DC Chargers',
    breadcrumbs: ['Home', 'EV Charging', 'DC Chargers'],
    showSubtitle: false,
    heroImage: evImgs.dcCharger
  },
  seamlessCharging: {
    title: ' DC Chargers: Fast, Powerful & Future-Ready',
    paragraphs: [
      'Voltant Energy\'s AMPHAWK DC Fast Chargers deliver high-speed, efficient, and reliable EV charging solutions for a wide range of applications. Designed to support CCS, CHAdeMO, and AC Type 2, these chargers cater to both current and next-generation electric vehicles.',
      'With power outputs ranging from 30kW to 510kW, AMPHAWK DC chargers are ideal for public charging stations, commercial fleets, logistics hubs, and highway corridors. They feature modular system architecture, ensuring scalability and easy maintenance while maintaining low operational costs.'
    ]
  },
  midSection: {
    backgroundImage: evImgs.dcAbout,
    sectionTitle: 'Why Choose AC Charging ?',
    features: [
      {
        icon: heroIcons.power,
        title: 'Smart connectivity ',
        description:
          'with WiFi, Bluetooth, and RFID access control.'
      },
      {
        icon: heroIcons.time,
        title: 'Energy-Efficient & Cost-Effective',
        description:
          'Delivers steady, optimized charging with lower infrastructure costs.'
      },
      {
        icon: heroIcons.vectorCombine,
        title: 'Multiple charging standards',
        description:
          '(GBT, Type 1, Type 2) for universal compatibility.'
      },
      {
        icon: heroIcons.thumbUp,
        title: 'Integrated safety features',
        description:
          'including Type B leakage protection, overvoltage, and short circuit protection.'
      },
      {
        icon: heroIcons.star,
        title: 'IP65-rated waterproof design',
        description:
          'ensuring durability in all weather conditions.'
      },
      {
        icon: heroIcons.sun,
        title: 'Human motion radar sensor',
        description:
          ' for automatic screen brightness adjustment.'
      }
    ]
  },
  profiles: {
    sectionTitle: 'Profiles',
    buttonText: 'Download Charging Profile',
    showButton: true
  },
  chargerData: {
    title: "AMPHAWK",
    subtitle: "DC Charger",
    chargerModels: [
      {
        power: "7 kW",
        imageUrl: evImgs.charger,
        model: "EVE07W",
        current: "32A",
        maxPower: "7.4kW"
      },
      {
        power: "11 kW",
        imageUrl: evImgs.charger,
        model: "EVE11W",
        current: "32A",
        maxPower: "11kW"
      },
      {
        power: "22 kW",
        imageUrl: evImgs.charger,
        model: "EVE22W",
        current: "32A",
        maxPower: "22kW"
      }
    ],
    specifications: [
      {
        category: "Electrical Specifications",
        items: [
          { label: "Product Model:", values: ["EVE07W", "EVE11W", "EVE22W"] },
          { label: "Max Current:", values: ["32A", "32A", "32A"] },
          { label: "Max Power:", values: ["7.4kW", "11kW", "22kW"] }
        ]
      },
      {
        category: "Function and Accessory",
        items: [
          { label: "LED Indicators:", values: ["Yes", "Yes", "Yes"] },
          { label: "Integrated RCD:", values: ["Type B", "Type B", "Type B"] },
          { label: "RFID / App / Touch Controls:", values: ["Yes", "Yes", "Yes"] },
          { label: "WiFi / Bluetooth:", values: ["Yes (WiFi 2.4GHz)", "Yes (WiFi 2.4GHz)", "Yes (WiFi 2.4GHz)"] },
          { label: "LCD Screen:", values: ["3.0-inch", "3.0-inch", "3.0-inch"] }
        ]
      },
      {
        category: "Working Environment",
        items: [
          { label: "Protection Degree:", values: ["IP65", "IP65", "IP65"] },
          { label: "Operational Temperature:", values: ["-30°C to 55°C", "-30°C to 55°C", "-30°C to 55°C"] },
          { label: "Cooling:", values: ["Natural Air Cooling", "Natural Air Cooling", "Natural Air Cooling"] }
        ]
      },
      {
        category: "Mechanical Parameters",
        items: [
          { label: "Charging Cable:", values: ["5m Type 2 Connector", "5m Type 2 Connector", "5m Type 2 Connector"] },
          { label: "Control Box Dimensions:", values: ["HxWxD = 180mm * 180mm * 70mm", "HxWxD = 180mm * 180mm * 70mm", "HxWxD = 180mm * 180mm * 70mm"] },
          { label: "Weight:", values: ["≤6kg", "≤6kg", "≤6kg"] },
          { label: "Colour:", values: ["White / Dark Grey unit, Black cable", "White or Dark Grey unit, Black cable", "White or Dark Grey unit, Black cable"] },
          { label: "Compliance:", values: ["IEC-61851, CE/RoHS", "IEC-61851, CE/RoHS", "IEC-61851, CE/RoHS"] }
        ]
      }
    ],
    buttonText: "Download Datasheet",
    buttonText2: "Download Charging Profile",
    showButton: true,
    showButton2: true,
    pdfUrl: "",
    pdfUrl2: "",
  },
}
// SmartWaste Data
export const smartWasteData = smartwasteData;