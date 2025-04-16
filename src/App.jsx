import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Page imports
import Home from './pages/Home'
import EvCharging from './pages/EvCharging'
import WasteToEnergy from './pages/WasteToEnergy'
import EngineeringWorks from './pages/EngineeringWorks'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ev-charging" element={<EvCharging />} />
            <Route path="/waste-to-energy" element={<WasteToEnergy />} />
            <Route path="/engineering-works" element={<EngineeringWorks />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
