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

  seamlessCharging: {
    title: 'Powering Sustainability at Scale',
    paragraphs: [
      'Our Large-Scale Biogas Plants are designed for high-volume organic waste processing, transforming waste into renewable energy on an industrial scale. These plants utilize advanced anaerobic digestion technology to maximize biogas production, reduce landfill dependency, and contribute to a circular economy. Ideal for municipalities, industries, and large commercial establishments, our solutions offer high efficiency, scalability, and long-term sustainability.'
    ]
  },

  midSection: {
    backgroundImage: WASTE_IMAGES.lsAbout,
    sectionTitle: 'Big Impact, Sustainable Future',
    features: [
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

  profiles: {
    sectionTitle: '',
    showButton: true,
    buttonText: 'Download Charging Profile',
    leftProfiles: [
      {
        title: 'Energy Applications',
        description: 'The biogas produced can be utilized for:\n\n• Electricity and heat generation using CHP systems\n\n• Upgrading to Biomethane (EBG) for vehicular and industrial use\n\n• Thermal applications such as heating, boiling, cooling, pasteurization\n\n• Grid injection or storage as per project requirements\n\nIn addition to energy, the process generates digestate, a nutrient-rich organic byproduct used as biofertilizer, supporting sustainable agriculture and reducing dependency on chemical fertilizers.'
      },
      {
        title: 'Integrated Waste Sorting & Segregation',
        description: 'To ensure high-quality feedstock and maximize gas output, large-scale plants can include:\n\n• Wet & dry waste segregation systems\n\n• Mechanical and manual sorting lines for MSW\n\n• Smart bins and digital waste tracking\n\n• Pre-processing units such as shredders, pulpers, and slurry preparation modules\n\nThis ensures only clean organic waste enters the digester, improving plant performance, efficiency, and output stability.'
      },
      {
        title: 'System Features',
        description: '• 24/7 automated and optimized operation\n\n• Advanced monitoring, control, and gas purification systems\n\n• Odor-controlled, environmentally compliant infrastructure\n\n• High reliability with proven global AD technologies\n\nLarge-scale biogas plants significantly reduce landfill dependency, curb methane emissions, and create long-term economic value—transforming organic waste into renewable energy and sustainable agricultural inputs.'
      }
    ],
    rightProfiles: [
      {
        title: 'Biogas Project Expertise',
        description: 'Large-Scale Biogas & Biomethane (CBG) Projects Delivered\n\nComprehensive biogas and biomethane plants producing renewable energy from organic waste with capacities of up to 230 tons/day.'
      },
      {
        title: 'Diverse Organic Feedstock Capability',
        description: "Expertise in processing a wide variety of organic materials including:\n\n– Vegetable & market waste\n\n– Food waste from hotels, malls, and central kitchens\n\n– Agricultural residues\n\n– Meat industry effluent\n\n– Cattle dung\n\n– Poultry litter\n\n– Industrial organic residues such as pressmudd"
      },
      {
        title: 'Integrated Organic Waste Sorting Solutions',
        description: 'Experience in designing and implementing systems for sorting organic waste from mixed Municipal Solid Waste (MSW), including mechanical segregation, manual sorting lines, and pre-processing systems.'
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