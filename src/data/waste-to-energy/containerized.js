/**
 * Waste-to-Energy Containerized Plant Data Model
 * @module data/waste-to-energy/containerized
 */

import { WASTE_IMAGES, ICONS } from '../../constants/assets.js';

export const containerizedData = {
  meta: {
    id: 'containerized-plant',
    category: 'waste-to-energy',
    title: 'Containerized Plant',
    slug: 'containerized-plant'
  },

  hero: {
    title: 'Containerized Plant',
    breadcrumbs: ['Home', 'Waste To Energy', 'Containerized Plant'],
    showSubtitle: false,
    heroImage: WASTE_IMAGES.containerizedPlant
  },

  seamlessCharging: {
    title: 'Containerized Biogas Plants: Scalable & Sustainable Energy Solutions',
    paragraphs: [
      'A Containerized Biogas Solution is an Anaerobic Digestion Plant designed to efficiently decompose organic waste under oxygen-free conditions to generate biogas for energy requirements.',

      'It is suitable for facilities such as malls, hotels, food-processing industries, and dairy farms to convert pure organic waste into usable energy. The generated energy can be utilized for various thermal applications including boiling, cooking, and pasteurization, or for electricity generation. Additionally, the resulting bio-fertilizer can be used for landscaping and garden enhancement.',

      'Containerized plants are designed for limited space requirements and are equipped with innovative and modern technologies for high efficiency, advanced monitoring, enhanced safety, durability, quick installation, and ease of use.These plants are installed directly at the waste generation source, enabling on-site conversion of waste into energy. This ensures that the energy produced is immediately utilized at the same location, maximizing efficiency and reducing transport-related handling.',

      'A containerized biogas system supports a circular economy by converting organic waste into valuable resources such as clean energy and bio-fertilizer directly at the source. Instead of sending waste to landfills, the system recycles waste into usable energy for cooking, heating, or electricity, and returns nutrient-rich digestate back to the soil, reducing dependence on chemical fertilizers.Environmentally, it helps cut methane emissions from decomposing waste, lowers carbon footprint by replacing fossil fuels, reduces waste transportation costs and pollution, and supports sustainable waste management practices. Overall, it transforms waste from a liability into a renewable asset.',
    ]
  },

  midSection: {
    backgroundImage: WASTE_IMAGES.cpAbout,
    sectionTitle: 'Big Impact, Sustainable Future',
    features: [
      {
        icon: ICONS.like,
        title: 'Modular & Pre-Assembled',
        description: 'Ready-to-install design for quick deployment.'
      },
      {
        icon: ICONS.crop,
        title: 'Compact & Space-Efficient',
        description: 'Ideal for limited spaces without compromising efficiency.'
      },
      {
        icon: ICONS.scale,
        title: 'Scalable Capacity',
        description: 'Expandable solutions to match waste processing needs.'
      },
      {
        icon: ICONS.comet,
        title: 'Advanced Anaerobic Digestion',
        description: 'Efficiently converts organic waste into biogas and bio-fertilizer.'
      },
      {
        icon: ICONS.star,
        title: 'Low Maintenance & High Durability',
        description: 'Built for long-term, hassle-free operation.'
      },
      {
        icon: ICONS.leaf,
        title: 'Eco-Friendly & Sustainable',
        description: 'Reduces landfill waste and promotes a circular economy.'
      },
      {
        icon: ICONS.multi,
        title: 'Remote Monitoring & Automation',
        description: 'Smart controls for optimized performance and minimal manual intervention.'
      }
    ]
  },

  profiles: {
    sectionTitle: 'Benefits',
    showButton: true,
    buttonText: 'Download Charging Profile',

    leftProfiles: [
      {
        title: '',
        description:
          'Sustainable and efficient Onsite Waste management solution for treating 100% of Organic waste.\n\n' +
          'A circular economy solution to cut down the cost on Transportation and disposal of Organic waste.\n\n' +
          'Solution to produce value added energy products from organic waste to cut down hotels fossil fuel consumption for energy requirements and in turn reduce carbon emissions and combating climate change.\n\n' +
          'A sustainable waste management solution supporting and meeting UAEs & UNs sustainable development goals.\n\n' +
          'An environmentally friendly solution with Zero discharges. By-product is a Nutrient-rich Biofertilizer which can enhance landscape or sold to generate revenue.\n\n' +
          'Helps to reduce the waste to landfill and supports UAEEs mission of Zero landfill by 2030.\n\n' +
          'Help to attain the Dubai Tourism stamp & gets Credit for LEED Certification, promote Green Tourism.\n\n' +
          'Eligible for Carbon credits by implementing the solution.'
      }
    ],

    rightProfiles: [
      {
        title: 'Caters Waste to Energy Solutions for following Sectors:',
        description:
          '• Municipalities (Organic Waste)\n' +
          '• Food waste from Malls\n' +
          '• Vegetable & Fruit Market Waste\n' +
          '• Slaughter House Waste\n' +
          '• Fish Market Waste'
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