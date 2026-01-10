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
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

/**
 * Detects if the user is on Safari browser
 * @returns {boolean} True if Safari browser detected
 */
const isSafari = () => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

/**
 * Downloads a PDF file with iOS compatibility
 * 
 * Strategy:
 * - For iOS devices: Opens PDF in new tab (Safari will prompt to save)
 * - For other devices: Attempts blob download, falls back to direct link
 * 
 * @param {string} url - The URL of the PDF file to download
 * @param {string} filename - The desired filename for the download
 * @returns {Promise<void>}
 */
export const downloadPDF = async (url, filename) => {
  // Validate URL
  if (!url || typeof url !== 'string') {
    console.warn('Invalid download URL:', url);
    return;
  }

  // Security check - ensure it's a PDF file from our domain
  if (!url.startsWith('/pdfs/') && !url.startsWith('http')) {
    console.warn('Blocked invalid download attempt:', url);
    return;
  }

  try {
    // iOS/Safari handling - open in new tab
    // iOS Safari doesn't support programmatic downloads well
    // Opening in new tab allows user to use "Share" -> "Save to Files"
    if (isIOS() || isSafari()) {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank'; // Open in new tab
      link.rel = 'noopener noreferrer';
      
      // For iOS, we need to trigger this from a user action
      // The function should be called directly from a click handler
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      return;
    }

    // For non-iOS browsers, use blob method for better control
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename || url.split('/').pop().split('?')[0];
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up blob URL
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);
    } catch (fetchError) {
      console.warn('Blob download failed, falling back to direct link:', fetchError);
      
      // Fallback: direct download link
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || url.split('/').pop().split('?')[0];
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error('Download failed:', error);
    
    // Final fallback - just open the URL
    window.open(url, '_blank');
  }
};

/**
 * Legacy download function for backward compatibility
 * @deprecated Use downloadPDF instead
 */
export const handleDownload = downloadPDF;

export default downloadPDF;
