/**
 * Pages Index
 * 
 * Central export point for all application pages.
 * Pages are organized by domain for better maintainability.
 * 
 * @module pages
 */

// Core pages (root level)
export { default as Home } from './Home';
export { default as NotFound } from './NotFound';

// EV Charging pages
export * from './ev-charging';

// Waste to Energy pages
export * from './waste-to-energy';

// Service pages
export * from './services';

// About pages
export * from './about';
