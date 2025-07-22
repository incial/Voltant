import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion';

// Only import Home page eagerly as it's needed for the initial route
import Home from './pages/Home'
// Import NotFound page eagerly for better error handling
import NotFound from './pages/NotFound'
import WhoAreWe from './pages/WhoAreWe'
// Lazy load all other pages
const EvCharging = lazy(() => import('./pages/EvCharging'))
const AC = lazy(() => import('./pages/AC'))
const DC = lazy(() => import('./pages/DC'))
const WasteToEnergy = lazy(() => import('./pages/WasteToEnergy'))
const EngineeringWorks = lazy(() => import('./pages/EngineeringWorks'))
const LargeScale = lazy(() => import('./pages/LargeScale'))
const Cpo = lazy(() => import('./pages/Cpo'))
const Household = lazy(() => import('./pages/Household'))
const Containerized = lazy(() => import('./pages/Containerized'))
const More = lazy(() => import('./pages/More'))
const SmartWaste = lazy(() => import('./pages/SmartWaste'))

// Common components
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ContactForm from './components/common/ContactForm'

// Context
import { ContactFormProvider, useContactForm } from './context/ContactFormContext'

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center w-full h-[60vh]">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">Loading page...</p>
    </div>
  </div>
);

// ScrollToTop component ensures page starts at the top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for better cross-browser support than 'auto'
    });
  }, [pathname]);

  return null;
};

// ContactFormModal component to be rendered at the root level
const ContactFormModal = () => {
  const { isContactFormOpen, toggleContactForm } = useContactForm();

  return (
    <AnimatePresence>
      {isContactFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center overflow-y-auto"
          style={{ 
            WebkitBackdropFilter: 'blur(8px)',
            backdropFilter: 'blur(8px)',
            MozBackdropFilter: 'blur(8px)',
            msBackdropFilter: 'blur(8px)'
          }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="p-4 max-w-4xl w-full mx-4 relative my-8 flex items-center justify-center"
          >
            <ContactForm onClose={toggleContactForm} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <ContactFormProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <div className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ev-charging" element={<EvCharging />} />
                <Route path="/ev-charging/ac-chargers" element={<AC />} />
                <Route path="/ev-charging/dc-chargers" element={<DC />} />
                <Route path="/waste-to-energy" element={<WasteToEnergy />} />
                <Route path="/ev-charging/engineering-works" element={<EngineeringWorks />} />
                <Route path="/ev-charging/cpo" element={<Cpo />} />
                <Route path="/ev-charging/more" element={<More />} />
                <Route path="/waste-to-energy/household" element={<Household />} />
                <Route path="/waste-to-energy/large-scale" element={<LargeScale />} />
                <Route path="/waste-to-energy/containerized-plant" element={<Containerized />} />
                <Route path="/waste-to-energy/smart-waste" element={<SmartWaste />} />
                <Route path="/whoarewe" element={<WhoAreWe />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
          {/* Contact Form Modal rendered at the root level */}
          <ContactFormModal />
        </div>
      </Router>
    </ContactFormProvider>
  )
}

export default App