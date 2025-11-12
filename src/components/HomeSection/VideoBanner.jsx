import React, { useState } from 'react'
import { vids } from '../../utils/localAssets'

const VideoBanner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className='relative w-full overflow-hidden'>
      {/* Video Background */}
      <div className='w-full h-[600px] md:h-[600px] relative'>
        {/* Loading overlay */}
        {!videoLoaded && (
          <div className='absolute inset-0 bg-gray-800 z-10 flex items-center justify-center'>
            <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <video
          src={vids.videoBanner}
          className='absolute inset-0 w-full h-full object-cover object-bottom'
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s' }}
        />

        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-[#39340B] opacity-50'></div>

        {/* Content Container */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <div className='max-w-4xl mx-auto text-white space-y-6'>
              {/* First Paragraph */}
              <p className='text-lg md:text-2xl leading-tight font-extralight'>
                By transforming waste into clean energy and reducing fossil fuel
                dependence, we actively support the UN Sustainable Development
                Goals (SDGs) and contribute to UAE's vision for a greener
                future.
              </p>

              {/* Spacing between paragraphs */}
              <div className='h-4'></div>

              {/* Second Paragraph */}
              <p className='text-lg md:text-2xl leading-tight font-extralight'>
                With cutting-edge technology and smart energy solutions, we
                empower businesses to embrace sustainability—reducing costs
                while making a real environmental impact. The future is clean,
                efficient, and sustainable. Let's build it together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoBanner
