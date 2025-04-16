import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ServiceCard from '../components/ServiceCard'
import EVChargingVideo from '../assets/Videos/EV_charging _video.mp4'
import acChargerImage from '../assets/images/AC_Chrager_image.png'
import dcChargerImage from '../assets/images/DC_Charger_image.png'
import engineeringImage from '../assets/images/Engineering_works.png'
import cpoImage from '../assets/images/CPO.png'
import moreImage from '../assets/images/More.png'

const EvCharging = () => {
  // Services data array
  const services = [
    {
      title: "AC Chargers",
      image: acChargerImage,
      path: "/ac-chargers"
    },
    {
      title: "DC Chargers",
      image: dcChargerImage,
      path: "/dc-chargers"
    },
    {
      title: "Engineering Works",
      image: engineeringImage,
      path: "/engineering-works"
    },
    {
      title: "CPO",
      image: cpoImage,
      path: "/cpo"
    },
    {
      title: "More",
      image: moreImage,
      path: "/more"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Cairo']">
      <div className="relative">
        {/* Hero Section with Image Background */}
        <section className="relative w-full h-screen">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={EVChargingVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Navbar */}
          <div className="absolute top-0 left-0 w-full z-50">
            <Navbar />
          </div>
          
          {/* Hero Content - Moved to leftmost bottom side */}
          <div className="relative z-10 container mx-auto px-6 flex flex-col h-full">
            <div className="max-w-xl absolute bottom-20 left-10">
              <h1 className="text-5xl font-semibold text-white leading-tight mb-4 font-['Cairo']">
                EV Charging<br/> Infrastructure
              </h1>
              
              <p className="text-lg text-white mb-8 max-w-lg font-['Cairo']">
                Powering the future of mobility with smart, efficient and scalable EV charging infrastructure solutions for homes, businesses, and public spaces.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Services Grid Section */}
      <section className="py-30 bg-white">
        <div className="mx-auto max-w-[1500px] px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                image={service.image}
                path={service.path}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default EvCharging
