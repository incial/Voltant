#!/usr/bin/env node

// EmailJS Test Script for Node.js
// Run this script to test your EmailJS configuration
// Usage: npm run test:emailjs

import { config } from 'dotenv';
import process from 'process';

// Load environment variables
config();

const testEmailJSConfig = () => {
  console.log('🚀 Testing EmailJS Configuration...\n');
  
  // Check environment variables
  const requiredVars = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID', 
    'VITE_EMAILJS_PUBLIC_KEY'
  ];
  
  let missingVars = [];
  
  requiredVars.forEach(varName => {
    const value = process.env[varName];
    if (!value || value === 'your_service_id_here' || value === 'your_template_id_here' || value === 'your_public_key_here') {
      missingVars.push(varName);
    }
  });
  
  if (missingVars.length > 0) {
    console.error('❌ Missing or invalid environment variables:');
    missingVars.forEach(varName => {
      console.error(`   - ${varName}`);
    });
    console.error('\n📝 Please update your .env file with valid EmailJS credentials.');
    console.error('📚 See EMAILJS_SETUP.md for detailed setup instructions.\n');
    process.exit(1);
  }
  
  // Display configuration
  console.log('✅ Environment Variables Found:');
  requiredVars.forEach(varName => {
    const value = process.env[varName];
    const maskedValue = value.length > 8 ? 
      value.substring(0, 4) + '...' + value.substring(value.length - 4) : 
      value;
    console.log(`   ${varName}: ${maskedValue}`);
  });
  
  console.log('\n📧 EmailJS Configuration appears to be valid!');
  console.log('\n🌐 Next Steps:');
  console.log('   1. Start your development server: npm run dev');
  console.log('   2. Open the contact form on your website');
  console.log('   3. Submit a test message');
  console.log('   4. Check your email inbox');
  console.log('   5. Monitor browser console for any errors');
  
  console.log('\n🛠️  For browser-based testing:');
  console.log('   1. Open browser console on your local site');
  console.log('   2. Copy the test function from scripts/test-emailjs.js');
  console.log('   3. Paste into console and run testEmailJS()');
  
  console.log('\n📚 Documentation:');
  console.log('   - Setup Guide: EMAILJS_SETUP.md');
  console.log('   - Developer Guide: docs/EMAILJS_DEVELOPER_GUIDE.md');
  
  console.log('\n✨ Happy coding!\n');
};

// Browser-compatible test function (for copy-paste into browser console)
const browserTestFunction = `
// EmailJS Browser Test Function
// Copy this entire function into your browser console when your site is loaded

const testEmailJS = async () => {
  try {
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
      console.error('EmailJS not loaded. Make sure you are on a page that includes EmailJS.');
      return;
    }
    
    // Get config from environment (these should match your .env values)
    const SERVICE_ID = '${process.env.VITE_EMAILJS_SERVICE_ID}';
    const TEMPLATE_ID = '${process.env.VITE_EMAILJS_TEMPLATE_ID}';
    const PUBLIC_KEY = '${process.env.VITE_EMAILJS_PUBLIC_KEY}';
    
    // Validate config
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS configuration missing. Check your .env file.');
      return;
    }
    
    // Initialize EmailJS
    emailjs.init(PUBLIC_KEY);
      // Test data
    const templateParams = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      message: 'This is a test message from the Voltant Energy contact form EmailJS integration.',
      to_name: 'Voltant Energy',
      to_email: 'contact@voltant.energy',
      reply_to: 'test@example.com',
    };
    
    console.log('📧 Sending test email with params:', templateParams);
    
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    
    console.log('✅ SUCCESS!', result.status, result.text);
    alert('✅ Test email sent successfully! Check your email inbox.');
    
  } catch (error) {
    console.error('❌ FAILED...', error);
    alert('❌ Test failed: ' + (error.text || error.message));
  }
};

// Call testEmailJS() to run the test
console.log('📧 EmailJS test function loaded. Call testEmailJS() to test your configuration.');
`;

if (process.env.NODE_ENV !== 'test') {
  testEmailJSConfig();
  
  if (process.argv.includes('--browser-test')) {
    console.log('\n🌐 Browser Test Function:');
    console.log('Copy the following code into your browser console:\n');
    console.log(browserTestFunction);
  }
}
