/**
 * EV Charging CPO Data Model
 * @module data/ev-charging/cpo
 */

import { EV_IMAGES, ICONS } from '../../constants/assets.js';

export const cpoData = {
  meta: {
    id: 'cpo',
    category: 'ev-charging',
    title: 'CPO - Charge Point Operator',
    slug: 'cpo'
  },

  hero: {
    title: 'CPO',
    breadcrumbs: ['Home', 'EV Charging', 'CPO'],
    showSubtitle: false,
    heroImage: EV_IMAGES.cpo
  },

  seamlessCharging: {
    title: 'Voltant Energy – Your Trusted Charge Point Operator (CPO) Partner',
    paragraphs: [
      'As the UAE embraces electric mobility, Voltant Energy provides property owners with a turnkey CPO partnership solution that combines sustainability, revenue generation, and seamless EV infrastructure management.'
    ]
  },

  midSection: {
    backgroundImage: EV_IMAGES.cpoAbout,
    sectionTitle: 'Why Partner with Us?',
    features: [
      {
        icon: ICONS.folder,
        title: 'Zero Upfront Investment',
        description: 'We provide state-of-the-art EV chargers at no cost to the property owner. You earn a steady revenue share from every charging session without investing in equipment.'
      },
      {
        icon: ICONS.stat,
        title: 'Revenue-Generating Opportunity',
        description: 'Monetize your parking infrastructure by offering charging services to tenants, guests, and clients. Flexible revenue models to suit residential, commercial, and mixed-use properties.'
      },
      {
        icon: ICONS.leaf,
        title: 'Sustainability & Net Zero Goals',
        description: "Installing EV chargers demonstrates your commitment to green initiatives and sustainability. Supports the UAE's Net Zero and carbon reduction missions while enhancing your property's environmental credentials"
      },
      {
        icon: ICONS.like,
        title: 'Reliable, High-Quality Charging Solutions',
        description: 'Our chargers are robust, weather-resistant, and fast-charging capable, ensuring maximum uptime. Compatible with all major EV models, delivering seamless and safe charging experiences'
      },
      {
        icon: ICONS.multi,
        title: 'Smart Monitoring & Control',
        description: 'Real-time Charge Point Management System (CPMS) allows monitoring, usage tracking, and efficient energy management. Provides insights into usage patterns, helping optimize charging availability and revenue.'
      },
      {
        icon: ICONS.star,
        title: 'End-to-End Support & Maintenance',
        description: 'We handle installation, operations, and maintenance, giving you a hassle-free experience. Our dedicated support team ensures quick response times, technical troubleshooting, and system updates'
      }
    ]
  },

  howItWorks: {
    sectionTitle: 'How It Works',
    steps: [
      'Voltant Energy installs chargers at your property at no cost.',
      'We manage all operations, billing, and maintenance.',
      'You receive revenue from charging sessions while supporting sustainable mobility.'
    ]
  },

  profiles: {
    sectionTitle: 'Partner with Voltant Energy Today',
    paragraph: 'Transform your parking spaces into profit-generating, sustainable assets. With reliable chargers, end-to-end support, and a focus on net-zero impact, Voltant Energy is your ideal CPO partner for the future of mobility.',
    buttonText: 'Download Charging Profile',
    showButton: false
  }
};
