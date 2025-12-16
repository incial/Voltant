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
      'Our compact household biogas solutions convert kitchen and organic waste into clean, renewable energy right at your home.',
      'These systems help families reduce dependence on conventional fuels while promoting sustainable living practices.'
    ]
  },

  midSection: {
    backgroundImage: WASTE_IMAGES.hsAbout,
    sectionTitle: 'Why Choose Us?',
    features: [
      {
        icon: ICONS.crop,
        title: 'Compact & Space-Saving',
        description: 'Designed for backyard and residential installations.'
      },
      {
        icon: ICONS.star,
        title: 'Clean Renewable Energy',
        description: 'Produces biogas for everyday household use.'
      },
      {
        icon: ICONS.money,
        title: 'Cost Effective',
        description: 'Reduces fuel expenses and energy bills.'
      },
      {
        icon: ICONS.like,
        title: 'Easy to Use',
        description: 'Simple operation suitable for families.'
      },
      {
        icon: ICONS.leaf,
        title: 'Eco-Friendly Living',
        description: 'Supports a greener, cleaner environment.'
      }
    ]
  },

  profiles: {
    sectionTitle: 'Household Biogas Benefits',
    showButton: true,
    buttonText: 'Get in Touch',

    leftProfiles: [
      {
        title: 'The biogas produced can be used for:',
        description: `
• Running backyard burners and small stoves  
• Cooking and other low-scale thermal applications  
• Supplementing household energy needs in an eco-friendly way
        `
      }
    ],

    rightProfiles: [
      {
        title: 'Sustainable Energy at Home',
        description:
          'By turning everyday organic waste into energy and fertilizer, domestic biogas plants allow families to adopt sustainable living practices, reduce reliance on conventional fuels, and contribute to a greener environment — all from the comfort of their home.'
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
