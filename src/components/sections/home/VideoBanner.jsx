import React, { useState } from 'react'
import { homeImgs } from "../../../utils/localAssets";

const VideoBanner = () => {
<<<<<<< HEAD
  const [loaded, setLoaded] = useState(false)

  return (
    <div className='relative w-full overflow-hidden'>
      <div className='w-full h-[600px] relative'>

        {!loaded && (
          <div className='absolute inset-0 bg-gray-800 z-10 flex items-center justify-center'>
            <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <img
          src={vids.videoBanner}
          alt="About banner"
          className='absolute inset-0 w-full h-full object-cover object-bottom'
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)} // 🔑 prevents black screen
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s'
          }}
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-[#39340B] opacity-50'></div>
=======
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
>>>>>>> 6673329e902498f3bc4427bc1104cdd7a3831868

        {/* Content */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
<<<<<<< HEAD
            <div className='max-w-4xl mx-auto text-white space-y-6'>
              <p className='text-lg md:text-2xl font-extralight'>
=======
            <div className='max-w-4xl mx-auto text-white space-y-4 lg:space-y-6'>
              {/* First Paragraph */}
              <p className='text-base md:text-lg lg:text-xl xl:text-2xl leading-snug lg:leading-tight font-regular'>
>>>>>>> 6673329e902498f3bc4427bc1104cdd7a3831868
                By transforming waste into clean energy and reducing fossil fuel
                dependence, we actively support the UN Sustainable Development
                Goals (SDGs) and contribute to UAE's vision for a greener future.
              </p>
<<<<<<< HEAD
              <div className='h-4' />
              <p className='text-lg md:text-2xl font-extralight'>
=======

              {/* Spacing between paragraphs */}
              <div className='h-2 lg:h-4'></div>

              {/* Second Paragraph */}
              <p className='text-base md:text-lg lg:text-xl xl:text-2xl leading-snug lg:leading-tight font-regular'>
>>>>>>> 6673329e902498f3bc4427bc1104cdd7a3831868
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
