import React from 'react'
import CloudinaryVideo from '../common/CloudinaryVideo'
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper'

const VideoBanner = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      {/* Video Background */}
      <div className='w-full h-[600px] md:h-[600px] relative'>
        <CloudinaryVideo
          {...getOptimizedAssetProps(
            'public/Videos/Video_Banner.mp4',
            'banner',
            'video'
          )}
          className='absolute inset-0 w-full h-full object-cover object-bottom'
        />

        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-[#39340B] opacity-50'></div>

        {/* Content Container */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='container mx-auto px-6 md:px-12 text-center'>
            <div className='max-w-3xl mx-auto text-white space-y-6'>
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
