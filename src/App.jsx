import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'

// Page imports
import Home from './pages/Home'
import EvCharging from './pages/EvCharging'
import AC from './pages/AC'
import WasteToEnergy from './pages/WasteToEnergy'
import EngineeringWorks from './pages/EngineeringWorks'
import LargeScale from './pages/LargeScale'
import Cpo from './pages/Cpo'
import Household from './pages/Household'
import More from './pages/More'
import Containerized from './pages/Containerized'

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ev-charging" element={<EvCharging />} />
            <Route path="/ac-chargers" element={<AC />} />
            <Route path="/waste-to-energy" element={<WasteToEnergy />} />
            <Route path="/ev-charging/engineering-works" element={<EngineeringWorks />} />
            <Route path="/ev-charging/cpo" element={<Cpo />} />
            <Route path="/ev-charging/more" element={<More />} />
            <Route path="/waste-to-energy/household" element={<Household />} />
            <Route path="/waste-to-energy/large-scale" element={<LargeScale />} />
            <Route path="/waste-to-energy/containerized-plant" element={<Containerized />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App