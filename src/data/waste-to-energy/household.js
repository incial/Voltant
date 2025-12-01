/**
 * Waste-to-Energy Household Data Model
 * @module data/waste-to-energy/household
 */

import { WASTE_IMAGES, ICONS } from '../../constants/assets.js';

export const householdData = {
  meta: {
    id: 'household',
    category: 'waste-to-energy',
    title: 'Household Solutions',
    slug: 'household'
  },

  hero: {
    title: 'Household',
    breadcrumbs: ['Home', 'Waste To Energy', 'Household'],
    showSubtitle: false,
    heroImage: WASTE_IMAGES.household
  },

  seamlessCharging: {
    title: 'Sustainable Solutions for Home Waste Management',
    paragraphs: [
      'Our compact household biogas solutions convert kitchen and organic waste into clean, renewable energy right at your home. These user-friendly systems offer a sustainable way to manage household waste while producing biogas for cooking and heating.',
      'With minimal maintenance requirements and significant environmental benefits, our household waste-to-energy systems help families reduce their carbon footprint while generating cost-effective energy for daily use.'
    ]
  },

  midSection: {
    backgroundImage: WASTE_IMAGES.hsAbout,
    sectionTitle: 'Why Choose Us?',
    features: [
      {
        icon: ICONS.crop,
        title: 'Compact & Space-Saving',
        description: 'Perfect for home and small-scale setups.'
      },
      {
        icon: ICONS.star,
        title: 'Waste-to-Energy Convenience',
        description: 'Converts kitchen and organic waste into usable biogas.'
      },
      {
        icon: ICONS.money,
        title: 'Eco-Friendly & Cost-Effective',
        description: 'Reduces reliance on fossil fuels and lowers waste management costs.'
      },
      {
        icon: ICONS.like,
        title: 'Low Maintenance',
        description: 'Simple operation with minimal upkeep.'
      },
      {
        icon: ICONS.leaf,
        title: 'Sustainable Living',
        description: 'Supports a circular economy and reduces carbon footprint.'
      }
    ]
  },

  profiles: {
    sectionTitle: 'Profiles',
    showButton: true,
    buttonText: 'Get in Touch',
    leftProfiles: [
      {
        title: 'Compact Home Biogas Systems',
        description: 'Our household biogas systems are designed for easy integration into residential settings. These compact units efficiently convert kitchen scraps, garden waste, and other organic materials into biogas, providing a renewable energy source for cooking and heating needs.'
      },
      {
        title: 'User-Friendly Operation',
        description: 'With intuitive controls and minimal maintenance requirements, our household systems are accessible to all family members. Simple waste input and easy gas collection make daily operation straightforward and hassle-free.'
      }
    ],
    rightProfiles: [
      {
        title: 'Sustainable Waste Solution',
        description: 'By converting household organic waste into energy, our systems significantly reduce landfill contribution while creating a valuable resource. This closed-loop approach supports sustainable living and environmental responsibility at home.'
      },
      {
        title: 'Cost-Effective Energy Alternative',
        description: 'Our household biogas units reduce dependency on conventional energy sources, lowering utility bills and offering financial benefits over time. With minimal operational costs, they provide an economical approach to home energy production.'
      }
    ]
  },

  downloads: {
    systemSpecs: {
      label: 'Download Household System Specs',
      url: '',
      enabled: false
    }
  }
};
