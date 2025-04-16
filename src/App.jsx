import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Page imports
import Home from './pages/Home'
import EvCharging from './pages/EvCharging'
import WasteToEnergy from './pages/WasteToEnergy'

// Component imports
import Footer from './components/common/Footer'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ev-charging" element={<EvCharging />} />
            <Route path="/waste-to-energy" element={<WasteToEnergy />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
