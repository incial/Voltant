/**
 * Constants Index
 * Central export point for all application constants
 * @module constants
 */

export * from './company.js';
export * from './navigation.js';
export * from './api.js';

// Assets - export from new modular structure
export * from './assets/index.js';

// Legacy export for backward compatibility
export * from './assets.js';

export { default as APP_CONFIG } from './config.js';
