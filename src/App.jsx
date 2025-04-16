import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Page imports
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import EvCharging from './pages/EvCharging'
import WasteToEnergy from './pages/WasteToEnergy'
import EngineeringWorks from './pages/EngineeringWorks'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/ev-charging" element={<EvCharging />} />
        <Route path="/waste-to-energy" element={<WasteToEnergy />} />
        <Route path="/engineering-works" element={<EngineeringWorks />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
