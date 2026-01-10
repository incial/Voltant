const buildResponsiveEntry = (webpPath, widths, options = {}) => {
  const { fallbackExt = 'jpg', sizes } = options;
  const basePath = webpPath.replace(/\.webp$/i, '');
  const largest = widths[widths.length - 1];

  const entry = {
    src: `${basePath}-${largest}w.webp`,
    fallbackSrc: `${basePath}.${fallbackExt}`,
    srcSet: widths.map((width) => `${basePath}-${width}w.webp ${width}w`).join(', ')
  };

  if (sizes) entry.sizes = sizes;
  return entry;
};

const responsiveLookup = new Map();

const registerResponsiveAsset = (webpPath, widths, options = {}) => {
  const entry = buildResponsiveEntry(webpPath, widths, options);
  responsiveLookup.set(webpPath, entry);
  return entry;
};

const normalizePath = (assetPath) => {
  if (!assetPath) return assetPath;
  // Convert variant references back to their base WebP path
  return assetPath.replace(/-\d+w\.webp$/i, '.webp');
};

export const getResponsiveAsset = (assetPath) => {
  const normalized = normalizePath(assetPath);
  return responsiveLookup.get(normalized);
};

export const EV_RESPONSIVE_IMAGES = {
  acCharger: registerResponsiveAsset('/assets/images/EV_charging/Ac_charger.webp', [480, 768, 1200, 1600]),
  acChargerHighlight: registerResponsiveAsset('/assets/images/EV_charging/AC_charger1.webp', [480, 768, 1200]),
  acChargerImage: registerResponsiveAsset('/assets/images/EV_charging/AC_charger_image.webp', [480, 768, 1200], { sizes: '(max-width: 768px) 50vw, 300px' }),
  acAbout: registerResponsiveAsset('/assets/images/EV_charging/AC_about.webp', [480, 768, 1200]),
  cpoHero: registerResponsiveAsset('/assets/images/EV_charging/Cpo1.webp', [480, 768, 1200, 1600], { sizes: '(max-width: 768px) 100vw, 1600px' }),
  cpoAlt: registerResponsiveAsset('/assets/images/EV_charging/Cpo.webp', [480, 768, 1200]),
  cpoAbout: registerResponsiveAsset('/assets/images/EV_charging/CPO_about.webp', [480, 768, 1200, 1600]),
  dcHero: registerResponsiveAsset('/assets/images/EV_charging/EV_main1.webp', [480, 768, 1200, 1600], { sizes: '(max-width: 768px) 100vw, 1600px' }),
  dcAlt: registerResponsiveAsset('/assets/images/EV_charging/Ev_main.webp', [480, 768, 1200, 1600], { sizes: '(max-width: 768px) 100vw, 1600px' }),
  dcAbout: registerResponsiveAsset('/assets/images/EV_charging/DC_about.webp', [480, 768, 1200]),
  dcFast: registerResponsiveAsset('/assets/images/EV_charging/Dc_charger1.webp', [480, 768, 1200, 1600]),
  dcWall: registerResponsiveAsset('/assets/images/EV_charging/Dc_charger.webp', [480, 768, 1200, 1600]),
  dcChargerImage: registerResponsiveAsset('/assets/images/EV_charging/DC_charger_image.webp', [480, 768, 1200], { sizes: '(max-width: 768px) 50vw, 300px' }),
  engineeringWorks: registerResponsiveAsset('/assets/images/EV_charging/Engineering_works.webp', [480, 768, 1200, 1600]),
  ewAbout: registerResponsiveAsset('/assets/images/EV_charging/EW_about.webp', [480, 768, 1200, 1600]),
  evCharging: registerResponsiveAsset('/assets/images/EV_charging/Ev_charging.webp', [480, 768, 1200, 1600]),
  moreHero: registerResponsiveAsset('/assets/images/EV_charging/More.webp', [480, 768, 1200, 1600]),
  moreAbout: registerResponsiveAsset('/assets/images/EV_charging/More_about.webp', [480, 768, 1200, 1600]),
  wallbox: registerResponsiveAsset('/assets/images/EV_charging/wallbox.webp', [480, 768, 1200])
};

export const WASTE_RESPONSIVE_IMAGES = {
  main: registerResponsiveAsset('/assets/images/WateTOEnergy/main.webp', [480, 768, 1200, 1600], { sizes: '(max-width: 768px) 100vw, 1600px' }),
  containerized: registerResponsiveAsset('/assets/images/WateTOEnergy/Containerized_Plant.webp', [480, 768, 1200, 1600]),
  largeScale: registerResponsiveAsset('/assets/images/WateTOEnergy/Large_Scale_plant.webp', [480, 768, 1200, 1600]),
  household: registerResponsiveAsset('/assets/images/WateTOEnergy/Household.webp', [480, 768, 1200]),
  smartWaste: registerResponsiveAsset('/assets/images/WateTOEnergy/SmartWaste.webp', [480, 768, 1200, 1600]),
  bins: registerResponsiveAsset('/assets/images/WateTOEnergy/bins.webp', [480, 768]),
  cpAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/CP_about.webp', [480, 768, 1200, 1600]),
  lsAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/LS_about.webp', [480, 768, 1200, 1600]),
  hsAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/HS_about.webp', [480, 768, 1200]),
  biogas: registerResponsiveAsset('/assets/images/WateTOEnergy/biogas.webp', [480, 768, 1200]),
  container: registerResponsiveAsset('/assets/images/WateTOEnergy/container.webp', [480, 768]),
  smartAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/smart_about.webp', [480, 768]),
  smartEnd: registerResponsiveAsset('/assets/images/WateTOEnergy/smart_end.webp', [480, 768]),
  swAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/SW_about.webp', [480, 768]),
  swAlt: registerResponsiveAsset('/assets/images/WateTOEnergy/sw_abt.webp', [480, 768])
};
