/**
 * Waste-to-Energy Smart Waste Segregation Data Model
 * @module data/waste-to-energy/smart-waste
 */

import { WASTE_IMAGES, ICONS } from '../../constants/assets.js';
import { WASTE_TO_ENERGY_PROFILE_PDF } from '../../constants/pdfs';


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
'Smart segregation bins are next-generation waste management solutions designed to streamline and optimize the segregation of different types of waste at the source. Equipped with AI-enabled cameras, these bins automatically identify and separate organic, recyclable, and non-recyclable waste into dedicated compartments, ensuring higher segregation accuracy and reducing contamination.'    ]
  },

 imageSection: {
  image: '/assets/images/WateTOEnergy/smartbin.webp',
  alt: 'Three step smart segregation process',
  description: [
    'By combining intelligent automation, data monitoring, and behavioral incentives, smart segregation bins help maximize recycling rates, reduce landfill dependency, and foster a circular economy—making waste management smarter, cleaner, and more sustainable.'
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


downloads: {
  profile: {
    enabled: true,
    url: WASTE_TO_ENERGY_PROFILE_PDF.url,
    filename: WASTE_TO_ENERGY_PROFILE_PDF.filename,
    label: 'Waste to Energy Profile'
  }
}

};

// Export alias for backwards compatibility
export const smartwasteData = smartWasteData;
