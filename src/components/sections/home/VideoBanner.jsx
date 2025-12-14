import React, { useState } from 'react'
import { homeImgs } from "../../../utils/localAssets";

const VideoBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className='relative w-full overflow-hidden'>
      {/* Image Background */}
      <div className='w-full h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] relative'>
        {/* Loading overlay */}
        {!imageLoaded && (
          <div className='absolute inset-0 bg-gray-800 z-0 flex items-center justify-center'>
            <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={homeImgs.DescriptionBg}
          className='absolute inset-0 w-full h-full object-cover object-bottom z-0'
          alt='Background'
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 1s' }}
        />

        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-[#0b2d057d] opacity-50 z-10'></div>

        {/* Content Container */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <div className='max-w-4xl mx-auto text-white space-y-4 lg:space-y-6'>
              {/* First Paragraph */}
              <p className='text-base md:text-lg lg:text-xl xl:text-2xl leading-snug lg:leading-tight font-regular'>
                By transforming waste into clean energy and reducing fossil fuel
                dependence, we actively support the UN Sustainable Development
                Goals (SDGs) and contribute to UAE's vision for a greener
                future.
              </p>

              {/* Spacing between paragraphs */}
              <div className='h-2 lg:h-4'></div>

              {/* Second Paragraph */}
              <p className='text-base md:text-lg lg:text-xl xl:text-2xl leading-snug lg:leading-tight font-regular'>
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
