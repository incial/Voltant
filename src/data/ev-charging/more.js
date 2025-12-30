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

  seamlessCharging: {
    title: 'Enhancing EV Charging with Smart Solutions',
    paragraphs: [
      'We go beyond just chargers—offering a comprehensive ecosystem of accessories, services, and advanced management tools to optimize your EV infrastructure.'
    ]
  },

  midSection: {
    backgroundImage: EV_IMAGES.moreAbout,
    sectionTitle: 'Why Choose Us?',
    features: [
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

  profiles: {
<<<<<<< HEAD
    sectionTitle: 'Technical Services',
<<<<<<< HEAD
    layout: 'single',
    leftProfiles: [
=======
=======
    sectionTitle: 'Profile',
    layoutType: 'profile',
>>>>>>> 7835af297b983ddf4449509f062367472ddf3fbc
    items: [
>>>>>>> 6673329e902498f3bc4427bc1104cdd7a3831868
      {
        title: 'EV Charging Accessories – Technical Overview',
        items: [
          'Charging Cables – Type 1, Type 2, CCS, and CHAdeMO with power ratings (kW), insulation types, and durability specs.',
          'Connectors & Adapters – Compatibility with AC/DC chargers, IP rating for weatherproofing and safety certifications.',
          'Mounting Solutions – Wall-mounted, pedestal, and pole-mounted options with load-bearing capacity and materials.',
          'Surge Protectors & Smart Relays – Protection against voltage spikes, short circuits, and overheating to ensure longevity.'
        ]
      },
      {
        title: 'Annual Maintenance Contracts (AMC) – Scope of Service',
        items: [
          'Preventive Maintenance – Routine hardware inspections, firmware updates, and load testing to prevent failures.',
          'On-Demand Repairs – 24/7 troubleshooting, remote diagnostics, and fast part replacement to reduce downtime.',
          'Performance Analytics – Regular reports on energy consumption, fault logs, and efficiency optimization.',
          'Compliance & Safety Checks – Ensures chargers meet standard UAE & global safety standards.'
        ]
      },
      {
        title: 'EV Conversions – Key Technical Aspects',
        items: [
          'Battery System – Type of battery packs, capacity (kWh), and estimated range per charge.',
          'Motor & Powertrain – AC vs. DC motor, torque output, regenerative braking support, and efficiency rating.',
          'Charging Compatibility – Integration with AC/DC chargers, onboard charging speed (kW), and plug compatibility.',
          'Control Systems – Smart battery management systems (BMS) and regenerative energy utilization.'
        ]
      },
      {
        title: 'CPMS & Billing System – Features & Integration',
        items: [
          'Real-Time Monitoring – Live status updates on charger availability, usage stats, and energy consumption.',
          'Automated Billing & Payments – Supports RFID authentication, QR-based payments, and subscription models.',
          'Load Management – Dynamic power distribution to avoid grid overload and optimize energy efficiency.',
          'User & Operator Dashboard – Cloud-based system for remote charger control, diagnostics, and analytics.'
        ]
      }
    ],
    buttonText: 'Download Charging Profile',
    showButton: true
  },

  downloads: {
    profile: {
      label: 'Download Charging Profile',
      url: '',
      enabled: false
    }
  }
};