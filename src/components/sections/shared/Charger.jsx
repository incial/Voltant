import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { isIOS } from '../../../utils/device'
import { OptimizedImage } from '../../ui'

// Animation variants
const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

// Shared button/anchor styles
const buttonStyles = 'text-base md:text-lg font-normal text-center leading-none px-6 md:px-9 py-[16px] rounded-[31px] border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]'
const mobileButtonStyles = 'w-64 text-base md:text-lg font-normal text-center leading-none px-6 md:px-9 py-[16px] rounded-[31px] border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]'

const MobileView = ({
  title,
  subtitle,
  chargerModels,
  specifications,
  buttonText,
  buttonText2,
  showButton = false,
  showButton2 = false,
  pdfUrl2
}) => {
  const iosDevice = isIOS;

  return (
    <div className='bg-white'>
        {/* Fixed header section */}
        <div className='text-center mb-5 p-5'>
          <h1 className='text-2xl font-bold text-gray-500'>Models</h1>
          <h2 className='text-xl font-medium text-gray-500'>
            {title} {subtitle}
          </h2>
        </div>

        {/* Scrollable section for charger models */}
        <div
          className='overflow-x-auto pb-4'
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin'
          }}
        >
          <div className='flex px-5 space-x-8 min-w-max'>
            {chargerModels.map((model, index) => (
              <div key={index} className='w-64 flex-shrink-0'>
                <div className='h-80 flex flex-col items-center justify-end pb-2'>
                  <div className='mb-4 relative w-full'>
                    {' '}
                      <div className='w-full h-64 bg-white rounded-xl relative overflow-hidden'>
                      <OptimizedImage
                        src={model.imageUrl}
                        alt='Charger Image'
                        width={256}
                        height={256}
                        className='w-full h-full object-cover object-center rounded-xl'
                        loading='lazy'
                        decoding='async'
                      />
                      <div className='absolute inset-0 flex flex-col items-center justify-center'>
                        <span className='text-xl font-bold text-white drop-shadow-md mb-1'>{model.model}</span>
                        <h2 className='text-xl font-bold text-white drop-shadow-md rounded-xl'>
                          {model.power}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specification sections for this model */}
                <div className='px-4 pb-8'>
                  {specifications.map((specSection, sectionIndex) => (
                    <div key={sectionIndex} className='mb-6'>
                      {/* Section heading for mobile */}
                      <h3 className='text-[#7F7F7F] text-sm md:text-base font-medium mb-3'>
                        {specSection.category}
                      </h3>

                      <div className='space-y-2'>
                        {specSection.items.map((item, itemIndex) => (
                          <div key={itemIndex} className='flex flex-col py-3'>
                            <div className='text-gray-400 mb-2 text-xs'>
                              {item.label}
                            </div>
                            <div className='text-gray-400 text-sm'>
                              {item.values[index]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons Section for Mobile */}
        {(showButton || showButton2) && (
          <div className='flex flex-col items-center justify-center gap-4 py-8 px-4'>
            {showButton && pdfUrl2 && (
              <motion.div
                className='flex items-center justify-center w-full'
                variants={buttonAnimation}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1 }}
              >
                <a
                  href={pdfUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mobileButtonStyles}
                  aria-label={buttonText}
                >
                  {buttonText}
                </a>
              </motion.div>
            )}

            {showButton2 && pdfUrl2 && (
              <motion.div
                className='flex items-center justify-center w-full'
                variants={buttonAnimation}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1 }}
              >
                <a
                  href={pdfUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mobileButtonStyles}
                  aria-label={buttonText2}
                >
                  {buttonText2}
                </a>
              </motion.div>
            )}
            {iosDevice && (
              <p className='text-xs text-gray-500 text-center px-6'>
                Tip: Tap Share → Save to Files to keep this brochure on iPhone.
              </p>
            )}
          </div>
        )}
      </div>
      )
  }
  
  const DesktopView = ({
    title,
    subtitle,
    chargerModels,
    specifications,
    buttonText,
    buttonText2,
    showButton = false,
    showButton2 = false,
    pdfUrl2
  }) => {
    const iosDevice = isIOS;

    return (
      <div
        className='overflow-x-auto bg-white py-8 w-full'
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin'
        }}
      >
        <div className='w-full px-8 min-w-[1200px]'>
          <table className='w-full border-collapse border-0'>
            <colgroup>
              <col className='w-[200px]' />
              {chargerModels.map((_, index) => (
                <col key={index} className='w-[300px]' />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th colSpan={chargerModels.length + 1} className='text-center pt-6 pb-4 border-t-0'>
                  <h1 className='text-2xl font-semibold text-gray-500'>Models</h1>
                </th>
              </tr>

              <tr>
                <th className='text-left align-middle'>
                  <div className='h-48 flex flex-col justify-center pr-8 pl-6'>
                    <h1 className='text-2xl font-semibold text-gray-500 mb-2'>
                      {title}
                    </h1>
                    <h2 className='text-base font-medium text-gray-500'>
                      {subtitle}
                    </h2>
                  </div>
                </th>

                {chargerModels.map((model, index) => (
                  <th key={index} className='text-center align-bottom px-4'>
                    <div className='h-80 flex flex-col items-center justify-end pb-2'>
                      <div className='mb-4 relative w-full'>
                        {' '}
                        <div className='w-full h-64 bg-white rounded-xl relative overflow-hidden'>
                          <OptimizedImage
                            src={model.imageUrl}
                            alt='Charger Image'
                            width={300}
                            height={256}
                            className='w-full h-full object-cover object-center rounded-xl'
                            loading='lazy'
                            decoding='async'
                          />
                          {/* Centered Text Overlay */}
                          <div className='absolute inset-0 flex flex-col items-center justify-center'>
                            <span className='text-xl font-bold text-white drop-shadow-md mb-1'>{model.model}</span>
                            <h2 className='text-xl font-bold text-white drop-shadow-md rounded-xl'>
                              {model.power}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specifications.map((specSection, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  {/* Section heading row */}
                  <tr>
                    <td colSpan={chargerModels.length + 1} className='py-4 text-left pl-6 pr-8 text-[#7F7F7F] text-base font-bold'>
                      {specSection.category}
                    </td>
                  </tr>

                  {specSection.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className='group hover:bg-gray-50'>
                      <td className='py-3 text-left pl-6 text-gray-400 text-sm font-medium align-top'>
                        <div className='h-full flex items-start justify-start'>
                          {item.label}
                        </div>
                      </td>
                      {item.values.map((value, valueIndex) => (
                        <td
                          key={valueIndex}
                          className='py-3 text-left text-gray-400 align-top pl-8 pr-4'
                        >
                          <div className='flex items-start justify-start'>
                            {value}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {/* Buttons Section for Desktop */}
          {(showButton || showButton2) && (
            <div className='flex flex-row justify-center items-center gap-6 mt-16 mb-8'>
              {showButton && pdfUrl2 && (
                <motion.div
                  className='flex items-center justify-start'
                  variants={buttonAnimation}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.1 }}
                >
                  <a
                    href={pdfUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles}
                    aria-label={buttonText}
                  >
                    {buttonText}
                  </a>
                </motion.div>
              )}

              {showButton2 && pdfUrl2 && (
                <motion.div
                  className='flex items-center justify-start'
                  variants={buttonAnimation}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.1 }}
                >
                  <a
                    href={pdfUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles}
                    aria-label={buttonText2}
                  >
                    {buttonText2}
                  </a>
                </motion.div>
              )}
            </div>
          )}
          {iosDevice && (showButton || showButton2) && (
            <p className='text-xs text-gray-500 text-center mb-10'>
              Tip: Tap Share → Save to Files to store this PDF on iPhone.
            </p>
          )}
        </div>
        </div>
      )
  }
  
  const Charger = ({
    title,
    subtitle,
    chargerModels,
    specifications,
    buttonText,
    buttonText2,
    showButton = false,
    showButton2 = false,
    pdfUrl2
  }) => {
    return (
    <section className='bg-white w-full' style={{ overflowX: 'hidden' }}>
      <div className='md:hidden'>
        <MobileView
          title={title}
          subtitle={subtitle}
          chargerModels={chargerModels}
          specifications={specifications}
          buttonText={buttonText}
          buttonText2={buttonText2}
          showButton={showButton}
          showButton2={showButton2}
          pdfUrl2={pdfUrl2}
        />
      </div>

      {/* Desktop view - hidden on small screens */}
      <div className='hidden md:block'>
        <DesktopView
          title={title}
          subtitle={subtitle}
          chargerModels={chargerModels}
          specifications={specifications}
          buttonText={buttonText}
          buttonText2={buttonText2}
          showButton={showButton}
          showButton2={showButton2}
          pdfUrl2={pdfUrl2}
        />
      </div>
    </section>
  )
}

export default Charger
