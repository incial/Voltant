/**
 * EV Charging AC Chargers Data Model
 * @module data/ev-charging/ac-chargers
 */

import { EV_IMAGES, ICONS } from '../../constants/assets.js';

export const acChargersData = {
  hero: {
    title: 'AC Chargers',
    breadcrumbs: ['Home', 'EV Charging', 'AC Chargers'],
    showSubtitle: false,
    heroImage: EV_IMAGES.acCharger
  },
  
  seamlessCharging: {
    title: ' AC Chargers: Smart, Efficient & Reliable EV Charging',
    paragraphs: [
      'AC chargers offer a seamless and cost-effective solution for home, workplace, and commercial EV charging, making electric vehicle ownership more convenient than ever. Designed for long-duration and overnight charging, they provide a steady, optimized power flow while ensuring energy efficiency and lower infrastructure costs.',
      'Ideal for residential garages, offices, and public parking spaces, AC chargers integrate smart connectivity features, allowing remote monitoring, scheduling, and usage tracking. With universal compatibility, they support a wide range of EV models, making them a versatile and future-ready charging solution. Whether for personal use or building a broader EV charging network, our AC charging solutions deliver safe, reliable, and intelligent energy management for a sustainable future.'
    ]
  },
  
  midSection: {
    backgroundImage: EV_IMAGES.acAbout,
    sectionTitle: 'Why Choose AC Charging ?',
    features: [
      {
        icon: ICONS.star,
        title: 'Smart connectivity ',
        description: 'with WiFi, Bluetooth, and RFID access control.'
      },
      {
        icon: ICONS.leaf,
        title: 'Energy-Efficient & Cost-Effective',
        description: 'Delivers steady, optimized charging with lower infrastructure costs.'
      },
      {
        icon: ICONS.multi,
        title: 'Multiple charging standards',
        description: '(GBT, Type 1, Type 2) for universal compatibility.'
      },
      {
        icon: ICONS.like,
        title: 'Integrated safety features',
        description: 'including Type B leakage protection, overvoltage, and short circuit protection.'
      },
      {
        icon: ICONS.water,
        title: 'IP65-rated waterproof design',
        description: 'ensuring durability in all weather conditions.'
      },
      {
        icon: ICONS.comet,
        title: 'Human motion radar sensor',
        description: 'for automatic screen brightness adjustment.'
      },
      {
        icon: ICONS.crop,
        title: 'Customizable options',
        description: 'including wall-mounted or pedestal installations.'
      }
    ]
  },

  profiles: {
    sectionTitle: 'Profiles',
    buttonText: 'Download Charging Profile',
    showButton: true
  },
  
  chargerData: {
    title: "AMPHAWK",
    subtitle: "AC Charger",
    chargerModels: [
      {
        power: "7 kW",
        imageUrl: EV_IMAGES.acChargerImage,
        model: "EVE07W",
        current: "32A",
        maxPower: "7.4kW"
      },
      {
        power: "11 kW",
        imageUrl: EV_IMAGES.acChargerImage,
        model: "EVE11W",
        current: "32A",
        maxPower: "11kW"
      },
      {
        power: "22 kW",
        imageUrl: EV_IMAGES.acChargerImage,
        model: "EVE22W",
        current: "32A",
        maxPower: "22kW"
      }
    ],
    specifications: [
      {
        category: "Electrical Specifications",
        items: [
          { label: "Product Model:", values: ["EVE07W", "EVE11W", "EVE22W"] },
          { label: "Max Current:", values: ["32A", "32A", "32A"] },
          { label: "Max Power:", values: ["7.4kW", "11kW", "22kW"] }
        ]
      },
      {
        category: "Function and Accessory",
        items: [
          { label: "LED Indicators:", values: ["Yes", "Yes", "Yes"] },
          { label: "Integrated RCD:", values: ["Type B", "Type B", "Type B"] },
          { label: "RFID / App / Touch Controls:", values: ["Yes", "Yes", "Yes"] },
          { label: "WiFi / Bluetooth:", values: ["Yes (WiFi 2.4GHz)", "Yes (WiFi 2.4GHz)", "Yes (WiFi 2.4GHz)"] },
          { label: "LCD Screen:", values: ["3.0-inch", "3.0-inch", "3.0-inch"] }
        ]
      },
      {
        category: "Working Environment",
        items: [
          { label: "Protection Degree:", values: ["IP65", "IP65", "IP65"] },
          { label: "Operational Temperature:", values: ["-30°C to 55°C", "-30°C to 55°C", "-30°C to 55°C"] },
          { label: "Cooling:", values: ["Natural Air Cooling", "Natural Air Cooling", "Natural Air Cooling"] }
        ]
      },
      {
        category: "Mechanical Parameters",
        items: [
          { label: "Charging Cable:", values: ["5m Type 2 Connector", "5m Type 2 Connector", "5m Type 2 Connector"] },
          { label: "Control Box Dimensions:", values: ["HxWxD = 180mm * 180mm * 70mm", "HxWxD = 180mm * 180mm * 70mm", "HxWxD = 180mm * 180mm * 70mm"] },
          { label: "Weight:", values: ["≤6kg", "≤6kg", "≤6kg"] },
          { label: "Colour:", values: ["White / Dark Grey unit, Black cable", "White or Dark Grey unit, Black cable", "White or Dark Grey unit, Black cable"] },
          { label: "Compliance:", values: ["IEC-61851, CE/RoHS", "IEC-61851, CE/RoHS", "IEC-61851, CE/RoHS"] }
        ]
      }
    ],
    buttonText: "Download Datasheet",
    buttonText2: "Download Charging Profile",
    showButton: true,
    showButton2: true,
    pdfUrl: "",
    pdfUrl2: "",
  }
};
