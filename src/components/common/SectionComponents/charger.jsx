import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

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

export const ChargerComponent = ({
  title,
  subtitle,
  chargerModels,
  specifications,
  buttonText,
  buttonText2,
  showButton = false,
  showButton2 = false,
  pdfUrl,
  pdfUrl2
}) => {
  // Function to handle PDF download
  const handleDownload = (url, fileName) => {
    if (!url) return

    // Create a link elements
    const link = document.createElement('a')
    link.href = url
    link.download =
      fileName ||
      `${title.toLowerCase().replace(/\s+/g, '-')}-specifications.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const MobileView = () => {
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
                    <div className='w-full h-64 bg-white rounded-xl relative'>
                      <img
                        src={model.imageUrl}
                        alt='Charger Image'
                        className='w-full h-full object-contain'
                      />
                      <div className='absolute inset-0 flex items-center justify-center'>
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
                      <h3 className='text-md font-bold text-gray-500 mb-5'>
                        {specSection.category}
                      </h3>
                      <div className='space-y-2'>
                        {specSection.items.map((item, itemIndex) => (
                          <div key={itemIndex} className='flex flex-col py-1'>
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
            {showButton && (
              <motion.div
                className='flex items-center justify-center w-full'
                variants={buttonAnimation}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1 }}
              >
                <button
                  className='w-64 text-base md:text-lg font-normal text-center leading-none px-6 md:px-9 py-[16px] rounded-[31px] border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]'
                  aria-label={buttonText}
                  onClick={() =>
                    handleDownload(
                      pdfUrl,
                      `${title}-${subtitle}-specifications.pdf`
                    )
                  }
                >
                  {buttonText}
                </button>
              </motion.div>
            )}

            {showButton2 && (
              <motion.div
                className='flex items-center justify-center w-full'
                variants={buttonAnimation}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1 }}
              >
                <button
                  className='w-64 text-base md:text-lg font-normal text-center leading-none px-6 md:px-9 py-[16px] rounded-[31px] border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]'
                  aria-label={buttonText2}
                  onClick={() =>
                    handleDownload(pdfUrl2, `${title}-installation-guide.pdf`)
                  }
                >
                  {buttonText2}
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    )
  }

  // Desktop view with horizontal scrolling
  const DesktopView = () => {
    return (
      <div
        className='overflow-x-auto bg-white py-8 w-full'
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin'
        }}
      >
        <div className='w-full px-8 min-w-[1200px]'>
          <table className='w-full border-collapse'>
            <colgroup>
              <col className='w-[280px]' />
              {chargerModels.map((_, index) => (
                <col key={index} className='w-[300px]' />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th className='text-left align-middle'>
                  <div className='h-60 flex flex-col justify-center pr-8 ml-18'>
                    <h1 className='text-3xl font-bold text-gray-500 mb-2'>
                      {title}
                    </h1>
                    <h2 className='text-2xl font-medium text-gray-500'>
                      {subtitle}
                    </h2>
                  </div>
                </th>

                {chargerModels.map((model, index) => (
                  <th key={index} className='text-center align-bottom px-4'>
                    <div className='h-80 flex flex-col items-center justify-end pb-2'>
                      <div className='mb-4 relative w-full'>
                        {' '}
                        <div className='w-full h-64 bg-white rounded-xl relative'>
                          <img
                            src={model.imageUrl}
                            alt='Hero Image'
                            className='w-full h-full object-contain'
                          />
                          {/* Centered Text Overlay */}
                          <div className='absolute inset-0 flex items-center justify-center'>
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
                  <tr>
                    <td
                      colSpan={chargerModels.length + 1}
                      className='pt-8 pb-4'
                    >
                      <div className='flex items-center justify-start ml-18 text-left text-xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2'>
                        {specSection.category}
                      </div>
                    </td>
                  </tr>

                  {specSection.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className='group hover:bg-gray-50'>
                      <td className='py-3 text-right pr-20 text-gray-400 font-medium align-start'>
                        <div className='h-full flex items-center justify-end'>
                          {item.label}
                        </div>
                      </td>
                      {item.values.map((value, valueIndex) => (
                        <td
                          key={valueIndex}
                          className='py-3 text-center text-gray-400 align-middle px-4'
                        >
                          <div className='min-h-[10spx] flex items-start justify-start ml-12'>
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
              {showButton && (
                <motion.div
                  className='flex items-center justify-start'
                  variants={buttonAnimation}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.1 }}
                >
                  <button
                    className='text-base md:text-lg font-normal text-center leading-none px-6 md:px-9 py-[16px] rounded-[31px] border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]'
                    aria-label={buttonText}
                    onClick={() =>
                      handleDownload(
                        pdfUrl,
                        `${title}-${subtitle}-specifications.pdf`
                      )
                    }
                  >
                    {buttonText}
                  </button>
                </motion.div>
              )}

              {showButton2 && (
                <motion.div
                  className='flex items-center justify-start'
                  variants={buttonAnimation}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.1 }}
                >
                  <button
                    className='text-base md:text-lg font-normal text-center leading-none px-6 md:px-9 py-[16px] rounded-[31px] border-[#7F7F7F] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(127,127,127,0.3)]'
                    aria-label={buttonText2}
                    onClick={() =>
                      handleDownload(pdfUrl2, `${title}-installation-guide.pdf`)
                    }
                  >
                    {buttonText2}
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <section className='bg-white w-full' style={{ overflowX: 'hidden' }}>
      <div className='md:hidden'>
        <MobileView />
      </div>

      {/* Desktop view - hidden on small screens */}
      <div className='hidden md:block'>
        <DesktopView />
      </div>
    </section>
  )
}

// Main component that accepts individual props
const Charger = ({
  title,
  subtitle,
  chargerModels,
  specifications,
  buttonText,
  buttonText2,
  showButton = false,
  showButton2 = false,
  pdfUrl,
  pdfUrl2
}) => {
  return (
    <ChargerComponent
      title={title}
      subtitle={subtitle}
      chargerModels={chargerModels}
      specifications={specifications}
      buttonText={buttonText}
      buttonText2={buttonText2}
      showButton={showButton}
      showButton2={showButton2}
      pdfUrl={pdfUrl}
      pdfUrl2={pdfUrl2}
    />
  )
}

export default Charger
