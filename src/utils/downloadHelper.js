/**
 * iOS-compatible PDF download utility
 * Handles PDF downloads across all devices including iPhone/iPad
 * @module utils/downloadHelper
 */

/**
 * Detects if the user is on an iOS device
 * @returns {boolean} True if iOS device detected
 */
const isIOS = () => {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

/**
 * Detects if the user is on Safari browser
 * @returns {boolean} True if Safari browser detected
 */
const isSafari = () => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('safari') && !ua.includes('chrome') && !ua.includes('android');
};

/**
 * Downloads a PDF file with iOS compatibility
 * 
 * IMPORTANT: This function must be called synchronously from a click handler
 * iOS Safari blocks async popup/download attempts
 * 
 * Strategy:
 * - For iOS/Safari: Opens PDF directly in same window or new tab
 * - For other devices: Attempts direct link download
 * 
 * @param {string} url - The URL of the PDF file to download
 * @param {string} filename - The desired filename for the download
 */
export const downloadPDF = (url, filename) => {
  // Validate URL
  if (!url || typeof url !== 'string') {
    console.warn('Invalid download URL:', url);
    return;
  }

  // Security check - ensure it's a PDF file
  const validPath = url.startsWith('/pdfs/') || 
                    url.startsWith('/assets/') || 
                    url.startsWith('http://') || 
                    url.startsWith('https://');
  
  if (!validPath) {
    console.warn('Blocked invalid download attempt:', url);
    return;
  }

  // For iOS and Safari - directly open the PDF
  // Safari will show its native PDF viewer with download option
  if (isIOS() || isSafari()) {
    // Use window.location for same-tab navigation (more reliable on iOS)
    // Or window.open for new tab
    window.open(url, '_blank');
    return;
  }

  // For other browsers - create download link
  try {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || url.split('/').pop().split('?')[0] || 'document.pdf';
    link.style.display = 'none';
    
    // Required for Firefox
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback - open in new tab
    window.open(url, '_blank');
  }
};

/**
 * Legacy download function for backward compatibility
 * @deprecated Use downloadPDF instead
 */
export const handleDownload = downloadPDF;

export default downloadPDF;
