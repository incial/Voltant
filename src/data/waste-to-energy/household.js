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
    title: 'Domestic/Household Biogas Plants',
    breadcrumbs: ['Home', 'Waste To Energy', 'Household'],
    showSubtitle: false,
    heroImage: WASTE_IMAGES.household
  },

  seamlessCharging: {
    title: 'Household Biogas Solutions:Clean Energy,Right at Home',
    paragraphs: [
'Domestic biogas plants are compact, small-scale anaerobic digestion systems designed for household use. They convert kitchen and other organic waste—such as vegetable peels, fruit scraps, and garden trimmings—into clean, renewable biogas and nutrient-rich compost.'
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

  imageSection: {
    image: '/assets/images/WateTOEnergy/smartbin.png',
    alt: 'Smart Waste Segregation Bin'
  },

  profiles: {
    sectionTitle: '',
    showButton: true,
    buttonText: 'Download Charging Profile',
    paragraph: 'By combining intelligent automation, data monitoring, and behavioral incentives, smart segregation bins help maximize recycling rates, reduce landfill dependency, and foster a circular economy, making waste management smarter, cleaner, and more sustainable.',
    leftProfiles: [],
    rightProfiles: []
  },

  downloads: {
    systemSpecs: {
      label: 'Download Household System Specs',
      url: '',
      enabled: false
    }
  }
};