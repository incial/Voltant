/**
 * Waste-to-Energy Large Scale Plant Data Model
 * @module data/waste-to-energy/large-scale
 */

import { WASTE_IMAGES, ICONS } from '../../constants/assets.js';

export const largeScaleData = {
  meta: {
    id: 'large-scale-plant',
    category: 'waste-to-energy',
    title: 'Large Scale Plant',
    slug: 'large-scale-plant'
  },

  hero: {
    title: 'Large Scale Plant',
    breadcrumbs: ['Home', 'Waste To Energy', 'Large Scale Plant'],
    showSubtitle: false,
    heroImage: WASTE_IMAGES.largeScalePlant
  },

  introduction: {
    title: 'Powering Sustainability at Scale',
    paragraphs: [
      'Our Large-Scale Biogas Plants are designed for high-volume organic waste processing, transforming waste into renewable energy on an industrial scale. These plants utilize advanced anaerobic digestion technology to maximize biogas production, reduce landfill dependency, and contribute to a circular economy. Ideal for municipalities, industries, and large commercial establishments, our solutions offer high efficiency, scalability, and long-term sustainability.'
    ]
  },

  features: {
    backgroundImage: WASTE_IMAGES.lsAbout,
    sectionTitle: 'Big Impact, Sustainable Future',
    items: [
      {
        icon: ICONS.like,
        title: 'High-Capacity Processing',
        description: 'Handles large volumes of organic waste efficiently.'
      },
      {
        icon: ICONS.crop,
        title: 'Customizable & Scalable',
        description: 'Tailored solutions to meet industrial needs.'
      },
      {
        icon: ICONS.scale,
        title: 'Advanced Anaerobic Digestion',
        description: 'Maximizes biogas yield and energy recovery.'
      },
      {
        icon: ICONS.comet,
        title: 'Cost-Effective & Sustainable',
        description: 'Reduces waste management costs and carbon footprint.'
      },
      {
        icon: ICONS.star,
        title: 'Grid Integration Ready',
        description: 'Seamless energy conversion for power or fuel applications.'
      },
      {
        icon: ICONS.leaf,
        title: 'Robust & Durable',
        description: 'Engineered for long-term performance with minimal maintenance.'
      }
    ]
  },

  services: {
    sectionTitle: 'Profiles',
    leftColumn: [
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
    rightColumn: [
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
