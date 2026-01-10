const buildResponsiveEntry = (assetPath, widths, options = {}) => {
  const { fallbackExt, sizes } = options;
  const extensionMatch = assetPath.match(/\.([^.]+)$/i);
  const extension = extensionMatch ? extensionMatch[1] : 'png';
  const basePath = assetPath.replace(/\.[^/.]+$/i, '');
  const largest = widths[widths.length - 1];

  const entry = {
    src: `${basePath}-${largest}w.${extension}`,
    fallbackSrc: fallbackExt ? `${basePath}.${fallbackExt}` : `${basePath}.${extension}`,
    srcSet: widths.map((width) => `${basePath}-${width}w.${extension} ${width}w`).join(', ')
  };

  if (sizes) entry.sizes = sizes;
  return entry;
};

const responsiveLookup = new Map();

const registerResponsiveAsset = (assetPath, widths, options = {}) => {
  const entry = buildResponsiveEntry(assetPath, widths, options);
  responsiveLookup.set(assetPath, entry);
  return entry;
};

const normalizePath = (assetPath) => {
  if (!assetPath) return assetPath;
  return assetPath.replace(/-\d+w(?=\.[^/.]+$)/i, '');
};

export const getResponsiveAsset = (assetPath) => {
  const normalized = normalizePath(assetPath);
  return responsiveLookup.get(normalized);
};

export const EV_RESPONSIVE_IMAGES = {
  acCharger: registerResponsiveAsset('/assets/images/EV_charging/Ac_charger.png', [480, 768, 1200, 1600]),
  acChargerHighlight: registerResponsiveAsset('/assets/images/EV_charging/AC_charger1.png', [480, 768, 1200]),
  acChargerImage: registerResponsiveAsset('/assets/images/EV_charging/AC_charger_image.png', [480, 768, 1200], { sizes: '(max-width: 768px) 50vw, 300px' }),
  acAbout: registerResponsiveAsset('/assets/images/EV_charging/AC_about.png', [480, 768, 1200]),
  cpoHero: registerResponsiveAsset('/assets/images/EV_charging/Cpo1.png', [480, 768, 1200, 1600], { sizes: '(max-width: 768px) 100vw, 1600px' }),
  cpoAlt: registerResponsiveAsset('/assets/images/EV_charging/Cpo.png', [480, 768, 1200]),
  cpoAbout: registerResponsiveAsset('/assets/images/EV_charging/CPO_about.png', [480, 768, 1200, 1600]),
  dcHero: registerResponsiveAsset('/assets/images/EV_charging/EV_main1.png', [480, 768, 1200, 1600], { sizes: '(max-width: 768px) 100vw, 1600px' }),
  dcAlt: registerResponsiveAsset('/assets/images/EV_charging/Ev_main.png', [480, 768, 1200, 1600], { sizes: '(max-width: 768px) 100vw, 1600px' }),
  dcAbout: registerResponsiveAsset('/assets/images/EV_charging/DC_about.png', [480, 768, 1200]),
  dcFast: registerResponsiveAsset('/assets/images/EV_charging/Dc_charger1.png', [480, 768, 1200, 1600]),
  dcWall: registerResponsiveAsset('/assets/images/EV_charging/Dc_charger.png', [480, 768, 1200, 1600]),
  dcChargerImage: registerResponsiveAsset('/assets/images/EV_charging/DC_charger_image.png', [480, 768, 1200], { sizes: '(max-width: 768px) 50vw, 300px' }),
  engineeringWorks: registerResponsiveAsset('/assets/images/EV_charging/Engineering_works.png', [480, 768, 1200, 1600]),
  ewAbout: registerResponsiveAsset('/assets/images/EV_charging/EW_about.png', [480, 768, 1200, 1600]),
  evCharging: registerResponsiveAsset('/assets/images/EV_charging/Ev_charging.png', [480, 768, 1200, 1600]),
  moreHero: registerResponsiveAsset('/assets/images/EV_charging/More.png', [480, 768, 1200, 1600]),
  moreAbout: registerResponsiveAsset('/assets/images/EV_charging/More_about.png', [480, 768, 1200, 1600]),
  wallbox: registerResponsiveAsset('/assets/images/EV_charging/wallbox.png', [480, 768, 1200])
};

export const WASTE_RESPONSIVE_IMAGES = {
  main: registerResponsiveAsset('/assets/images/WateTOEnergy/main.png', [480, 768, 1200, 1600], { sizes: '(max-width: 768px) 100vw, 1600px' }),
  containerized: registerResponsiveAsset('/assets/images/WateTOEnergy/Containerized_Plant.png', [480, 768, 1200, 1600]),
  largeScale: registerResponsiveAsset('/assets/images/WateTOEnergy/Large_Scale_plant.png', [480, 768, 1200, 1600]),
  household: registerResponsiveAsset('/assets/images/WateTOEnergy/Household.png', [480, 768, 1200]),
  smartWaste: registerResponsiveAsset('/assets/images/WateTOEnergy/SmartWaste.png', [480, 768, 1200, 1600]),
  bins: registerResponsiveAsset('/assets/images/WateTOEnergy/bins.png', [480, 768]),
  cpAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/CP_about.png', [480, 768, 1200, 1600]),
  lsAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/LS_about.png', [480, 768, 1200, 1600]),
  hsAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/HS_about.png', [480, 768, 1200]),
  biogas: registerResponsiveAsset('/assets/images/WateTOEnergy/biogas.png', [480, 768, 1200]),
  container: registerResponsiveAsset('/assets/images/WateTOEnergy/container.png', [480, 768]),
  smartAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/smart_about.png', [480, 768]),
  smartEnd: registerResponsiveAsset('/assets/images/WateTOEnergy/smart_end.png', [480, 768]),
  swAbout: registerResponsiveAsset('/assets/images/WateTOEnergy/SW_about.png', [480, 768]),
  swAlt: registerResponsiveAsset('/assets/images/WateTOEnergy/sw_abt.png', [480, 768])
};
