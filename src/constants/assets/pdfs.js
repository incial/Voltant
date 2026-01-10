/**
 * PDF Document Constants
 * @module constants/assets/pdfs
 */

import { ASSET_PATHS } from './paths';

/**
 * Company documents
 */
export const COMPANY_PDFS = {
  profile: `${ASSET_PATHS.pdfs}/voltant-energy-charging-profile.pdf`,
  brochure: `${ASSET_PATHS.pdfs}/food-organic-waste-to-energy-profile.pdf`,
};

/**
 * Product datasheets
 */
export const PRODUCT_PDFS = {
  acCharger: {
    datasheet: `${ASSET_PATHS.pdfs}/ac-charger-datasheet.pdf`,
    profile: `${ASSET_PATHS.pdfs}/ac-charger-profile.pdf`,
  },
  dcCharger: {
    datasheet: `${ASSET_PATHS.pdfs}/dc-charger-datasheet.pdf`,
    profile: `${ASSET_PATHS.pdfs}/dc-charger-profile.pdf`,
  },
};

/**
 * All PDFs combined
 */
export const PDFS = {
  company: COMPANY_PDFS,
  products: PRODUCT_PDFS,
};

/**
 * Get PDF by type and name
 * @param {string} type - PDF type ('company' or 'products')
 * @param {string} name - PDF name
 * @returns {string} PDF path or null
 */
export const getPdf = (type, name) => {
  if (type === 'company') {
    return COMPANY_PDFS[name] || null;
  }
  if (type === 'products' && PRODUCT_PDFS[name]) {
    return PRODUCT_PDFS[name];
  }
  return null;
};
