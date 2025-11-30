/**
 * EV Charging More Services Data Model
 * @module data/ev-charging/more
 */

import { EV_IMAGES, ICONS } from '../../constants/assets.js';

export const moreData = {
  meta: {
    id: 'more',
    category: 'ev-charging',
    title: 'More EV Services',
    slug: 'more'
  },

  hero: {
    title: 'More',
    breadcrumbs: ['Home', 'EV Charging', 'More'],
    showSubtitle: true,
    subtitle: 'EV Charging Accessories, AMC, EV Conversions, CPMS Billing System',
    heroImage: EV_IMAGES.more
  },

  introduction: {
    title: 'Enhancing EV Charging with Smart Solutions',
    paragraphs: [
      'We go beyond just chargers—offering a comprehensive ecosystem of accessories, services, and advanced management tools to optimize your EV infrastructure.'
    ]
  },

  features: {
    backgroundImage: EV_IMAGES.moreAbout,
    sectionTitle: 'Why Choose Us?',
    items: [
      {
        icon: ICONS.power,
        title: 'EV Charging Accessories',
        description: 'From cables and connectors to mounting solutions and surge protectors, we provide high-quality accessories to enhance charging efficiency and safety.'
      },
      {
        icon: ICONS.like,
        title: 'Annual Maintenance Contracts (AMC)',
        description: 'Keep your charging network running at peak performance with our preventive maintenance, on-demand support, and system health monitoring.'
      },
      {
        icon: ICONS.multi,
        title: 'EV Conversions',
        description: 'Transform conventional vehicles into eco-friendly EVs with our expert conversion solutions, enabling businesses and individuals to embrace sustainability.'
      },
      {
        icon: ICONS.star,
        title: 'CPMS & Billing System',
        description: 'Our Charge Point Management System (CPMS) offers real-time monitoring, automated billing, RFID authentication, and seamless payment integration for a hassle-free charging experience'
      }
    ]
  },

  services: {
    sectionTitle: 'Technical Services',
    leftColumn: [
      {
        title: 'EV Charging Accessories - Technical Overview',
        description: 'Charging Cables: Type 1, Type 2, CCS, CHAdeMO, with power ratings (kW), insulation types, and durability specs. Connectors & Adapters: Compatibility with AC/DC chargers, IP rating for weatherproofing, and safety certifications. Mounting Solutions: Wall-mounted, pedestal, and pole-mounted options with load-bearing capacity and materials. Surge Protectors & Smart Relays: Protection against voltage spikes, short circuits, and overheating, ensuring charger longevity.'
      },
      {
        title: 'Annual Maintenance Contracts (AMC) - Scope of Service',
        description: 'Preventive Maintenance: Routine hardware checks, firmware updates, and load testing to prevent failures. On-Demand Repairs: 24/7 troubleshooting, remote diagnostics, and fast part replacement to reduce downtime. Performance Analytics: Regular reports on energy consumption, fault logs, and efficiency optimization. Compliance & Safety Checks: Ensures chargers meet updated UAE & global safety standards.'
      }
    ],
    rightColumn: [
      {
        title: 'EV Conversions - Key Technical Aspects',
        description: 'Battery System: Type of lithium-ion battery packs, capacity (kWh), and estimated range per charge. Motor & Powertrain: AC vs. DC motor, torque output, regenerative braking support, and efficiency rating. Charging Compatibility: Integration with AC & DC chargers, onboard charging speed (kW), and plug compatibility. Control Systems: Smart battery management systems (BMS) and regenerative energy utilization.'
      },
      {
        title: 'CPMS & Billing System - Features & Integration',
        description: 'Real-Time Monitoring: Live status updates on charger availability, usage stats, and energy consumption. Automated Billing & Payments: Supports RFID authentication, QR-based payments, and subscription models. Load Management: Dynamic power distribution to avoid grid overload and optimize energy efficiency. User & Operator Dashboard: Cloud-based system for remote charger control, diagnostics, and analytics'
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
