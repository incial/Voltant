import React from 'react'
import client1 from '../../assets/images/clients/client_1.png'
import client2 from '../../assets/images/clients/client_1.png'
import CloudinaryImage from '../common/CloudinaryImage'
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper'

const ClientsSection = () => {
  // Create an array of clients (duplicate for seamless looping)
  const clients = [client1, client2, client1, client2]
  const duplicatedClients = [...clients, ...clients] // Double the array for smooth looping

  return (
    <section className='w-full mt-[97px] max-md:mt-10 overflow-hidden'>
      <div className='flex flex-col items-center w-full max-w-[1200px] mx-auto px-4'>
        {/* Infinite Scroller Container */}
        <div className='w-full py-4 relative'>
          <div className='flex'>
            {/* First set for seamless looping */}
            <div className='flex animate-scroll whitespace-nowrap'>
              {duplicatedClients.map((client, index) => (
                <div key={`first-${index}`} className='inline-block mx-8'>
                  <img
                    src={client}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className='h-16 object-contain max-w-[200px] inline-block'
                  />
                  {/* use this commented instead of img tag for cloudinary image */}

                  {/* <CloudinaryImage
                    {...getOptimizedAssetProps(client)}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className='h-16 object-contain max-w-[200px] inline-block'
                  /> */}
                </div>
              ))}
            </div>
            {/* Second set for continuous animation */}
            <div className='flex animate-scroll whitespace-nowrap'>
              {duplicatedClients.map((client, index) => (
                <div key={`second-${index}`} className='inline-block mx-8'>
                  <img
                    src={client}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className='h-16 object-contain max-w-[200px] inline-block'
                  />
                  {/* use this commented instead of img tag for cloudinary image */}
                  
                  {/* <CloudinaryImage
                    {...getOptimizedAssetProps(client)}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className='h-16 object-contain max-w-[200px] inline-block'
                  /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default ClientsSection
