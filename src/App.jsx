import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Page imports
import Home from './pages/Home'
import EvCharging from './pages/EvCharging'
import WasteToEnergy from './pages/WasteToEnergy'
import EngineeringWorks from './pages/EngineeringWorks'
import LargeScale from './pages/LargeScale'
import Cpo from './pages/Cpo'
import Household from './pages/Household'
import More from './pages/More'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ev-charging" element={<EvCharging />} />
            <Route path="/waste-to-energy" element={<WasteToEnergy />} />
            <Route path="/ev-charging/engineering-works" element={<EngineeringWorks />} />
            <Route path="/ev-charging/cpo" element={<Cpo />} />
            <Route path="/ev-charging/more" element={<More />} />
            <Route path="/waste-to-energy/household" element={<Household />} />
            <Route path="/waste-to-energy/large-scale" element={<LargeScale />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App