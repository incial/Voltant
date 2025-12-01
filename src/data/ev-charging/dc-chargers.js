/**
 * EV Charging DC Chargers Data Model
 * @module data/ev-charging/dc-chargers
 */

import { EV_IMAGES, ICONS } from '../../constants/assets.js';

export const dcChargersData = {
  meta: {
    id: 'dc-chargers',
    category: 'ev-charging',
    title: 'DC Chargers',
    slug: 'dc-chargers'
  },

  hero: {
    title: 'DC Chargers',
    breadcrumbs: ['Home', 'EV Charging', 'DC Chargers'],
    showSubtitle: false,
    heroImage: EV_IMAGES.dcCharger
  },

  seamlessCharging: {
    title: 'DC Chargers: Fast, Powerful & Future-Ready',
    paragraphs: [
      "Voltant Energy's AMPHAWK DC Fast Chargers deliver high-speed, efficient, and reliable EV charging solutions for a wide range of applications. Designed to support CCS, CHAdeMO, and AC Type 2, these chargers cater to both current and next-generation electric vehicles.",
      'With power outputs ranging from 30kW to 510kW, AMPHAWK DC chargers are ideal for public charging stations, commercial fleets, logistics hubs, and highway corridors. They feature modular system architecture, ensuring scalability and easy maintenance while maintaining low operational costs.'
    ]
  },

  midSection: {
    backgroundImage: EV_IMAGES.dcAbout,
    sectionTitle: 'Why Choose DC Charging?',
    features: [
      {
        icon: ICONS.power,
        title: 'Ultra-Fast Charging',
        description: 'High-power options from 30kW to 510kW'
      },
      {
        icon: ICONS.time,
        title: 'Dual charging capabilities',
        description: 'allowing two vehicles to charge simultaneously.'
      },
      {
        icon: ICONS.multi,
        title: 'Multi-standard compatibility',
        description: '(CCS, CHAdeMO & AC Type 2).'
      },
      {
        icon: ICONS.like,
        title: 'OCPP support',
        description: 'for seamless integration with backend management systems.'
      },
      {
        icon: ICONS.star,
        title: 'Designed for extreme conditions',
        description: 'with an operational temperature range of up to 60°C.'
      },
      {
        icon: ICONS.sun,
        title: 'Daylight-readable touchscreen display',
        description: 'for an intuitive user experience.'
      }
    ]
  },

  chargerData: {
    title: 'Voltant AmpHawk',
    subtitle: 'DC Fast Chargers',
    chargerModels: [
      {
        power: '30kW',
        imageUrl: EV_IMAGES.dcChargerImage,
        model: 'Wall Box Charger',
        current: '120A',
        maxPower: '30kW'
      },
      {
        power: '60kW - 180kW',
        imageUrl: EV_IMAGES.dcChargerImage,
        model: 'DC Fast Chargers',
        current: 'Up to 250A',
        maxPower: '60kW, 90kW, 120kW, 150kW, 180kW'
      },
      {
        power: '240kW - 360kW',
        imageUrl: EV_IMAGES.dcChargerImage,
        model: 'DC Fast Chargers',
        current: '250A (Optional: 300A/400A)',
        maxPower: '240kW, 300kW, 360kW'
      }
    ],
    specifications: [
      {
        category: 'Power Capacity',
        items: [
          { label: 'Power Capacity:', values: ['30kW', '60kW, 90kW, 120kW, 150kW, 180kW', '240kW, 360kW'] }
        ]
      },
      {
        category: 'Max DC Output Current',
        items: [
          { label: 'Max DC Output Current:', values: ['100A', 'Up to 250A', '250A (Optional: 300A/400A)'] }
        ]
      },
      {
        category: 'Efficiency',
        items: [
          { label: 'Efficiency:', values: ['95%', '96% (Power Module), 95% (System)', '95%'] }
        ]
      },
      {
        category: 'Dimensions (W x D x H)',
        items: [
          { label: 'Dimensions:', values: ['600mm x 600mm x 1700mm', '850mm x 770mm x 1850mm', '240kW: 850mm x 770mm x 1850mm, 360kW: 1000mm x 900mm x 2000mm'] }
        ]
      },
      {
        category: 'Nominal AC Input Current',
        items: [
          { label: 'Nominal AC Input Current:', values: ['Low', 'Increases with power levels', 'Higher'] }
        ]
      },
      {
        category: 'Supported Connectors',
        items: [
          { label: 'Supported Connectors:', values: ['CCS1, CCS2, CHAdeMO, GB-T', 'CCS1, CCS2, CHAdeMO, AC Type 2', 'CCS1, CCS2, CHAdeMO, AC Type 2'] }
        ]
      },
      {
        category: 'Target Use Case',
        items: [
          { label: 'Target Use Case:', values: ['Ideal for low-demand settings (small EV fleets)', 'Medium to large-scale installations', 'Ultra-fast charging for high-demand environments'] }
        ]
      }
    ],
    buttonText: 'Download Datasheet',
    buttonText2: 'Download Charging Profile',
    showButton: true,
    showButton2: true,
    pdfUrl: '',
    pdfUrl2: ''
  },

  downloads: {
    datasheet: {
      label: 'Download Datasheet',
      url: '',
      enabled: true
    },
    profile: {
      label: 'Download Charging Profile',
      url: '',
      enabled: true
    }
  }
};
