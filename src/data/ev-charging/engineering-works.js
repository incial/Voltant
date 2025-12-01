/**
 * EV Charging Engineering Works Data Model
 * @module data/ev-charging/engineering-works
 */

import { EV_IMAGES, ICONS } from '../../constants/assets.js';

export const engineeringWorksData = {
  meta: {
    id: 'engineering-works',
    category: 'ev-charging',
    title: 'Engineering Works',
    slug: 'engineering-works'
  },

  hero: {
    title: 'Engineering Works',
    breadcrumbs: ['Home', 'EV Charging', 'Engineering Works'],
    showSubtitle: false,
    heroImage: EV_IMAGES.engineeringWorks
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
    backgroundImage: EV_IMAGES.ewAbout,
    sectionTitle: 'Why Choose Us?',
    features: [
      {
        icon: ICONS.star,
        title: 'Expert-Led Solutions',
        description: 'Our team of skilled engineers ensures precision in every stage of deployment.'
      },
      {
        icon: ICONS.crop,
        title: 'Tailored for Your Needs',
        description: 'Custom solutions for commercial hubs, fleet depots, and residential installations.'
      },
      {
        icon: ICONS.multi,
        title: 'Seamless Grid Integration',
        description: 'Optimized power distribution with advanced load balancing technology.'
      },
      {
        icon: ICONS.shield,
        title: 'Compliance & Safety First',
        description: 'Adherence to UAE regulations and global industry standards.'
      },
      {
        icon: ICONS.time,
        title: 'Future-Ready Infrastructure',
        description: 'Scalable, smart, and equipped for evolving EV charging demands.'
      },
      {
        icon: ICONS.like,
        title: 'End-to-End Support',
        description: 'From planning to execution, we handle every aspect for a hassle-free setup.'
      }
    ]
  },

  profiles: {
    sectionTitle: 'Our Services',
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
    ],
    buttonText: 'Download Charging Profile',
    showButton: false
  },

  downloads: {
    profile: {
      label: 'Download Charging Profile',
      url: '',
      enabled: false
    }
  }
};
