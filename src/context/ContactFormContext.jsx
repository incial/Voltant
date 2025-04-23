import React, { createContext, useState, useContext } from 'react';

const ContactFormContext = createContext();

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};

export const ContactFormProvider = ({ children }) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  // Toggle contact form modal
  const toggleContactForm = () => {
    setIsContactFormOpen(prev => !prev);
    if (!isContactFormOpen) {
      document.body.style.overflow = 'hidden';
      // Store current scroll position when opening modal
      document.body.dataset.scrollY = window.scrollY;
    } else {
      document.body.style.overflow = 'auto';
      // Restore scroll position when closing
      const scrollY = document.body.dataset.scrollY || 0;
      window.scrollTo(0, parseInt(scrollY));
    }
  };

  // Clean up body styles when component unmounts
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ContactFormContext.Provider value={{ isContactFormOpen, toggleContactForm }}>
      {children}
    </ContactFormContext.Provider>
  );
};