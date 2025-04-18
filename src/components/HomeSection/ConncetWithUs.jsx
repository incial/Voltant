import React, { useState } from 'react'
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp
} from 'react-icons/fa6'
import CloudinaryImage from '../common/CloudinaryImage'
import CloudinaryVideo from '../common/CloudinaryVideo'
import { getOptimizedAssetProps } from '../../utils/cloudinaryHelper'

const ConnectWithUs = () => {
  // State to track if the video fails to load
  const [videoError, setVideoError] = useState(false)

  // Path to the video file in the public directory - updated to new structure
  const videoPath = 'public/Videos/Connectwithus.mp4'

  return (
    <>
      {/* Desktop View */}
      <div
        className='relative w-full overflow-hidden rounded-3xl hidden md:block'
        style={{ height: '400px', width: '1000px' }}
      >
        {/* Video Background */}
        <div className='absolute inset-0'>
          <CloudinaryVideo
            {...getOptimizedAssetProps(videoPath, 'hero', 'video')}
            className='w-full h-full object-cover'
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            onError={() => setVideoError(true)}
          />
          {/* Fallback background if video fails to load */}
          {videoError && (
            <div className='absolute inset-0'>
              <CloudinaryImage
                {...getOptimizedAssetProps('src/assets/images/fallbackBg.png', 'bannner', 'image')}
                alt='Fallback background'
                className='w-full h-full object-cover'
              />
            </div>
          )}
          <div className='absolute inset-0 bg-black opacity-20'></div>
        </div>

        {/* Top-left rectangle with "Connect With Us" */}
        <div className='absolute top-0 left-0 bg-white p-6 rounded-3xl rounded-br-none max-w-[300px] h-1/2 z-10 border-[3.5px] border-gray-800'>
          <h2 className='text-4xl font-black text-gray-600 items-center'>
            Connect With Us
          </h2>
        </div>

        {/* Social media icons in the center-top area */}
        <div className='absolute top-1/4 left-4/6 transform -translate-x-1/2 z-10'>
          <div className='flex space-x-10'>
            <a href='#' className='text-white hover:text-gray-200'>
              <FaYoutube size={24} />
            </a>
            <a href='#' className='text-white hover:text-gray-200'>
              <FaInstagram size={24} />
            </a>
            <a href='#' className='text-white hover:text-gray-200'>
              <FaFacebookF size={24} />
            </a>
            <a href='#' className='text-white hover:text-gray-200'>
              <FaLinkedinIn size={24} />
            </a>
            <a href='#' className='text-white hover:text-gray-200'>
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Bottom-right rectangle with contact info */}
        <div className='absolute bottom-0 right-0 bg-white rounded-3xl rounded-tl-none p-5 h-1/2 w-[700px] z-10 border-[3.5px] border-gray-800'>
          <div className='absolute top-4/12 left-12'>
            <div>
              <p className='text-xl text-gray-600 font-black'>
                Email:{' '}
                <span className='text-gray-800 font-medium'>
                  example@gmail.com
                </span>
              </p>
              <p className='text-xl text-gray-600 font-black'>
                Phone:{' '}
                <span className='text-gray-800 font-medium'>
                  +971 98765 5432
                </span>
              </p>
            </div>
          </div>
          <a
            href='https://wa.me/971987655432'
            className='absolute right-8 bottom-8 '
          >
            <FaWhatsapp
              size={28}
              className='text-gray-600 hover:text-gray-500'
            />
          </a>
        </div>
      </div>

      {/* Mobile View */}

      <div className='md:hidden flex flex-col w-full rounded-2xl'>
        {/* Middle section with video background and social icons */}
        <div className='relative w-full' style={{ height: '400px' }}>
          <div className='absolute inset-0 rounded-3xl'>
          <CloudinaryVideo
                        {...getOptimizedAssetProps(videoPath, 'hero', 'video')}
                        className='w-full h-full object-cover'
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        controls={false}
                        onError={() => setVideoError(true)}
                      />
                      {/* Fallback background if video fails to load */}
                      {videoError && (
                        <div className='absolute inset-0'>
                          <CloudinaryImage
                            {...getOptimizedAssetProps('src/assets/images/fallbackBg.png', 'bannner', 'image')}
                            alt='Fallback background'
                            className='w-full h-full object-cover'
                          />
                        </div>
                      )}
            <div className='absolute inset-0 bg-black opacity-20 rounded-3xl'></div>
          </div>

          {/* Social media icons in the center */}
          <div className='absolute inset-0 flex items-center justify-center z-10'>
            <div className='flex space-x-8'>
              <a href='#' className='text-white hover:text-gray-200'>
                <FaYoutube size={24} />
              </a>
              <a href='#' className='text-white hover:text-gray-200'>
                <FaInstagram size={24} />
              </a>
              <a href='#' className='text-white hover:text-gray-200'>
                <FaFacebookF size={24} />
              </a>
              <a href='#' className='text-white hover:text-gray-200'>
                <FaLinkedinIn size={24} />
              </a>
              <a href='#' className='text-white hover:text-gray-200'>
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
          {/* Top rectangle with "Connect With Us" */}
          <div className='absolute top-0 bg-white p-6 py-12 rounded-3xl border-2 border-gray-800 w-full'>
            <h2 className='text-3xl font-black text-gray-600 text-center'>
              Connect With Us
            </h2>
          </div>
          {/* Bottom section with contact info */}
          <div className='absolute bg-white p-6 rounded-3xl border-2 border-gray-800 w-full bottom-0'>
            <div className='py-4'>
              <p className='text-lg text-gray-600 font-black'>
                Email:{' '}
                <span className='text-gray-800 font-medium'>
                  example@gmail.com
                </span>
              </p>
              <p className='text-lg text-gray-600 font-black'>
                Phone:{' '}
                <span className='text-gray-800 font-medium'>
                  +971 98765 5432
                </span>
              </p>
            </div>
            <a
              href='https://wa.me/971987655432'
              className='absolute right-6 bottom-6'
            >
              <FaWhatsapp
                size={28}
                className='text-gray-600 hover:text-gray-500'
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConnectWithUs
