/**
 * Waste-to-Energy Smart Waste Segregation Data Model
 * @module data/waste-to-energy/smart-waste
 */

import { WASTE_IMAGES, ICONS } from '../../constants/assets.js';

export const smartWasteData = {
  meta: {
    id: 'smart-waste-segregation',
    category: 'waste-to-energy',
    title: 'Smart Waste Segregation Bins',
    slug: 'smart-waste-segregation'
  },

  hero: {
    title: 'Smart Waste Segregation Bins',
    breadcrumbs: ['Home', 'Waste To Energy', 'Smart Waste Segregation Bins'],
    showSubtitle: false,
    heroImage: WASTE_IMAGES.smartWaste
  },

  seamlessCharging: {
    title: 'Automated Sorting, Sustainable Living',
    paragraphs: [
      'Efficient waste management starts with proper segregation. Our Smart Waste Segregation Bins use advanced sensors and AI-powered technology to automatically sort waste into recyclable, organic, and non-recyclable categories. Designed for homes, offices, and public spaces, these bins reduce landfill waste, promote recycling, and contribute to a cleaner environment.'
    ]
  },

  midSection: {
    backgroundImage: WASTE_IMAGES.swAbout,
    sectionTitle: 'Sort Smart, Waste Less',
    features: [
      {
        icon: ICONS.star,
        title: 'Automated Sorting',
        description: 'AI-powered identification of waste types for precise segregation.'
      },
      {
        icon: ICONS.comet,
        title: 'Smart Monitoring',
        description: 'Real-time fill level tracking and alerts for optimized waste collection.'
      },
      {
        icon: ICONS.leaf,
        title: 'Energy Efficient',
        description: 'Low-power consumption with sustainable battery/solar options.'
      },
      {
        icon: ICONS.like,
        title: 'Odor Control',
        description: 'Sealed compartments with deodorizing technology for a hygienic experience.'
      },
      {
        icon: ICONS.scale,
        title: 'Versatile Applications',
        description: 'Ideal for households, businesses, and public spaces.'
      }
    ]
  },
  img: WASTE_IMAGES.swEnd,
  profiles: {
    sectionTitle: 'Engineering Profiles',
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

// Export alias for backwards compatibility
export const smartwasteData = smartWasteData;
