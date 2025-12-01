/**
 * Waste-to-Energy Containerized Plant Data Model
 * @module data/waste-to-energy/containerized
 */

import { WASTE_IMAGES, ICONS } from '../../constants/assets.js';

export const containerizedData = {
  meta: {
    id: 'containerized-plant',
    category: 'waste-to-energy',
    title: 'Containerized Plant',
    slug: 'containerized-plant'
  },

  hero: {
    title: 'Containerized Plant',
    breadcrumbs: ['Home', 'Waste To Energy', 'Containerized Plant'],
    showSubtitle: false,
    heroImage: WASTE_IMAGES.containerizedPlant
  },

  seamlessCharging: {
    title: 'Containerized Biogas Plants: Scalable & Sustainable Energy Solutions',
    paragraphs: [
      'Our Containerized Biogas Plants offer a modular, pre-assembled solution for converting organic waste into renewable energy. Designed for flexibility and efficiency, these compact units integrate advanced anaerobic digestion technology, making them ideal for industries, municipalities, and commercial setups. With quick installation, minimal space requirements, and scalable capacity, our plants enable seamless waste-to-energy conversion while reducing carbon footprints and promoting a circular economy.'
    ]
  },

  midSection: {
    backgroundImage: WASTE_IMAGES.cpAbout,
    sectionTitle: 'Big Impact, Sustainable Future',
    features: [
      {
        icon: ICONS.like,
        title: 'Modular & Pre-Assembled',
        description: 'Ready-to-install design for quick deployment.'
      },
      {
        icon: ICONS.crop,
        title: 'Compact & Space-Efficient',
        description: 'Ideal for limited spaces without compromising efficiency.'
      },
      {
        icon: ICONS.scale,
        title: 'Scalable Capacity',
        description: 'Expandable solutions to match waste processing needs.'
      },
      {
        icon: ICONS.comet,
        title: 'Advanced Anaerobic Digestion',
        description: 'Efficiently converts organic waste into biogas and bio-fertilizer.'
      },
      {
        icon: ICONS.star,
        title: 'Low Maintenance & High Durability',
        description: 'Built for long-term, hassle-free operation.'
      },
      {
        icon: ICONS.leaf,
        title: 'Eco-Friendly & Sustainable',
        description: 'Reduces landfill waste and promotes a circular economy.'
      },
      {
        icon: ICONS.multi,
        title: 'Remote Monitoring & Automation',
        description: 'Smart controls for optimized performance and minimal manual intervention.'
      }
    ]
  },

  profiles: {
    sectionTitle: 'Profiles',
    showButton: true,
    buttonText: 'Get in Touch',
    leftProfiles: [
      {
        title: 'Site Assessment & Feasibility Study',
        description: 'We begin with a comprehensive evaluation of the site, analyzing power availability, load capacity, and infrastructure readiness. This helps determine the best charger placement while ensuring compliance with local regulations and safety standards.'
      },
      {
        title: 'Design & Engineering Solutions',
        description: "Every project is designed for maximum efficiency, integrating smart energy management, optimal power distribution, and scalable solutions. Whether it's a single charging point or a large-scale network, our engineering team develops tailored layouts and electrical schematics that align with sustainability goals."
      },
      {
        title: 'Installation & Commissioning',
        description: 'From civil and electrical work to network setup, our team manages the entire installation process, ensuring seamless execution. We conduct rigorous testing and commissioning to guarantee smooth operation and long-term reliability.'
      }
    ],
    rightProfiles: [
      {
        title: 'Maintenance & Support',
        description: "Our job doesn't end after installation. We provide ongoing maintenance, real-time monitoring, and remote diagnostics to ensure optimal charger performance. With preventive service schedules and 24/7 technical support, we keep charging stations running efficiently."
      },
      {
        title: 'Software & Network Integration',
        description: 'Seamless connectivity is key to modern EV charging. We integrate smart Charge Point Management Systems (CPMS) with real-time data analytics, load balancing, and OCPP-compliant backend systems. This allows for efficient monitoring, remote control, and a smooth user experience.'
      }
    ]
  },

  downloads: {
    profile: {
      label: 'Download Charging Profile',
      url: '',
      enabled: false
    }
  }
};
