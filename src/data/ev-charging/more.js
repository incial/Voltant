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
    sectionTitle: 'Technical Services',
    items: [
      {
        title: 'EV Charging Accessories',
        description:
          'Charging cables including Type 1, Type 2, CCS, and CHAdeMO with defined power ratings (kW), insulation types, and durability standards. Accessories also include connectors and adapters compatible with AC and DC chargers, offering IP-rated weatherproofing and certified safety compliance. Mounting solutions range from wall-mounted to pedestal and pole-mounted systems designed for load-bearing stability. Surge protectors and smart relays protect equipment against voltage spikes, short circuits, and overheating, ensuring long-term charger reliability.'
      },
      {
        title: 'Annual Maintenance Contracts (AMC)',
        description:
          'Preventive maintenance includes routine hardware inspections, firmware updates, and load testing to prevent failures. On-demand repair services provide 24/7 troubleshooting, remote diagnostics, and fast component replacement to minimize downtime. Performance analytics deliver insights into energy consumption, fault logs, and efficiency optimization, while compliance checks ensure adherence to UAE and global safety standards.'
      },
      {
        title: 'EV Conversions',
        description:
          'EV conversion solutions focus on lithium-ion battery systems with defined capacities and estimated range per charge. Powertrain solutions include AC and DC motors with optimized torque output, regenerative braking support, and high efficiency ratings. Charging compatibility ensures seamless integration with AC and DC chargers, onboard charging speeds, and industry-standard plug configurations supported by intelligent battery management systems (BMS).'
      },
      {
        title: 'CPMS & Billing System',
        description:
          'The Charge Point Management System (CPMS) enables real-time monitoring of charger availability, usage statistics, and energy consumption. Automated billing supports RFID authentication, QR-based payments, and subscription models. Dynamic load management prevents grid overload while optimizing energy efficiency. A cloud-based dashboard provides operators with remote charger control, diagnostics, and advanced analytics for complete system visibility.'
      }
    ],
    buttonText: 'Download Charging Profile',
    showButton: true
  }

  ,

  downloads: {
    profile: {
      label: 'Download Charging Profile',
      url: '',
      enabled: false
    }
  }
};
