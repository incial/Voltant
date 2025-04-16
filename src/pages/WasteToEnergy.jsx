import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const WasteToEnergy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Waste to Energy Solutions</h1>
          {/* Content for Waste to Energy page */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WasteToEnergy
