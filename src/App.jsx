import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion';

// Page imports
import Home from './pages/Home'
import EvCharging from './pages/EvCharging'
import AC from './pages/AC'
import DC from './pages/DC'
import WasteToEnergy from './pages/WasteToEnergy'
import EngineeringWorks from './pages/EngineeringWorks'
import LargeScale from './pages/LargeScale'
import Cpo from './pages/Cpo'
import Household from './pages/Household'
import Containerized from './pages/Containerized'
import More from './pages/More'
import SmartWaste from './pages/SmartWaste'
import GetInTouch from './pages/GetInTouch'

// Common components
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ContactForm from './components/common/ContactForm'

// Context
import { ContactFormProvider, useContactForm } from './context/ContactFormContext'

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
              <Route path="/get-in-touch" element={<GetInTouch />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
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