import React from "react";
import { ACData, DCData } from "../../../utils/sectionData";
import CloudinaryImage from '../CloudinaryImage'
import { getOptimizedAssetProps } from '../../../utils/cloudinaryHelper'

// Inline ChargerModel component since the import was removed
const ChargerModel = ({ power, imageUrl, specifications }) => {
  return (
    <div className="flex-shrink-0 flex flex-col bg-white rounded-xl shadow-md p-6 w-full max-w-sm px-[40px]" >
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-3xl font-bold text-center">{power}</h2>
      </div>
      <div className="w-full h-64 mb-6">
        <img
          src={imageUrl}
          alt={`${power} Charger`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export const ChargerAC = () => {
  const { chargerData } = ACData;
  const { chargerModels, specifications } = chargerData;

  const MobileView = () => {
    return (
      <div className="bg-white">
        {/* Fixed header section */}
        <div className="text-center mb-5 p-5">
          <h1 className="text-2xl font-bold text-gray-500">Models</h1>
          <h2 className="text-xl font-medium text-gray-500">{chargerData.title} {chargerData.subtitle}</h2>
        </div>

        {/* Scrollable section for charger models */}
        <div className="overflow-x-auto pb-4"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin'
          }}
        >
          <div className="flex px-5 space-x-8 min-w-max">
            {chargerModels.map((model, index) => (
              <div key={index} className="w-64 flex-shrink-0">
                <div className="h-80 flex flex-col items-center justify-end pb-2">
                  <div className="mb-4 relative w-full">
                    <div className="w-full h-64 bg-white rounded-xl relative">
                      <CloudinaryImage
                        {...getOptimizedAssetProps(model.imageUrl, 'charging', 'image')}
                        alt='Charger Image'
                        className='w-full h-full object-contain'
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-xl font-bold text-white drop-shadow-md rounded-xl">
                          {model.power}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Specification sections for this model */}
                <div className="px-4 pb-8">
                  {specifications.map((specSection, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6">
                      <h3 className="text-md font-bold text-gray-500 mb-5">{specSection.category}</h3>
                      <div className="space-y-2">
                        {specSection.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex flex-col py-1">
                            <div className="text-gray-400 mb-2 text-xs">
                              {item.label}
                            </div>
                            <div className="text-gray-400 text-sm">
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
      </div>
    );
  };

  // Desktop view with horizontal scrolling
  const DesktopView = () => {
    return (
      <div className="overflow-x-auto bg-white py-8 w-full"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin'
        }}
      >
        <div className="w-full px-8 min-w-[1200px]">
          <table className="w-full border-collapse">
            <colgroup>
              <col className="w-[280px]" />
              {chargerModels.map((_, index) => (
                <col key={index} className="w-[300px]" />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th className="text-left align-middle">
                  <div className="h-60 flex flex-col justify-center pr-8 ml-18">
                    <h1 className="text-3xl font-bold text-gray-500 mb-2">AMPHAWK</h1>
                    <h2 className="text-2xl font-medium text-gray-500">AC Charger</h2>
                  </div>
                </th>

                {chargerModels.map((model, index) => (
                  <th key={index} className="text-center align-bottom px-4">
                    <div className="h-80 flex flex-col items-center justify-end pb-2"> {/* Increased container height */}
                      <div className="mb-4 relative w-full"> {/* Added relative positioning */}
                        <div className="w-full h-64 bg-white rounded-xl relative"> {/* Increased image height */}
                          <CloudinaryImage
                            {...getOptimizedAssetProps(model.imageUrl, 'charging', 'image')}
                            alt='Hero Image'
                            className='w-full h-full object-contain'
                          />
                          {/* Centered Text Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-xl font-bold text-white drop-shadow-md rounded-xl">
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
                    <td colSpan={chargerModels.length + 1} className="pt-8 pb-4">
                      <div className="flex items-center justify-start ml-18 text-left text-xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2">
                        {specSection.category}
                      </div>
                    </td>
                  </tr>

                  {specSection.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="group hover:bg-gray-50">
                      <td className="py-3 text-right pr-20 text-gray-400 font-medium align-start">
                        <div className="h-full flex items-center justify-end">
                          {item.label}
                        </div>
                      </td>
                      {item.values.map((value, valueIndex) => (
                        <td key={valueIndex} className="py-3 text-center text-gray-400 align-middle px-4">
                          <div className="min-h-[10spx] flex items-start justify-start ml-12">
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
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white w-full" style={{ overflowX: 'hidden' }}>
      <div className="md:hidden">
        <MobileView />
      </div>

      {/* Desktop view - hidden on small screens */}
      <div className="hidden md:block">
        <DesktopView />
      </div>
    </section>
  );
};

export const ChargerDC = () => {
  const { chargerData } = DCData;
  const { chargerModels, specifications } = chargerData;

  const MobileView = () => {
    return (
      <div className="bg-white">
        {/* Fixed header section */}
        <div className="text-center mb-5 p-5">
          <h1 className="text-2xl font-bold text-gray-500">Models</h1>
          <h2 className="text-xl font-medium text-gray-500">{chargerData.title} {chargerData.subtitle}</h2>
        </div>

        {/* Scrollable section for charger models */}
        <div className="overflow-x-auto pb-4"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin'
          }}
        >
          <div className="flex px-5 space-x-8 min-w-max">
            {chargerModels.map((model, index) => (
              <div key={index} className="w-64 flex-shrink-0">
                <div className="h-80 flex flex-col items-center justify-end pb-2">
                  <div className="mb-4 relative w-full">
                    <div className="w-full h-64 bg-white rounded-xl relative">
                      <CloudinaryImage
                        {...getOptimizedAssetProps(model.imageUrl, 'charging', 'image')}
                        alt='Charger Image'
                        className='w-full h-full object-contain'
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-lg font-bold text-white drop-shadow-md rounded-xl">
                          <h2 className="text-xl font-bold text-center">{index === 0 && chargerData.title}</h2>
                          <h3 className="text-lg font-medium text-center mb-10">{index === 0 && chargerData.subtitle}</h3>
                          <span className="text-md font-thin text-center">{model.power}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Specification sections for this model */}
                <div className="px-4 pb-8">
                  {specifications.map((specSection, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6">
                      <h3 className="text-md font-bold text-gray-500 mb-5">{specSection.category}</h3>
                      <div className="space-y-2">
                        {specSection.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex flex-col py-1">
                            <div className="text-gray-400 mb-2 text-xs">
                              {item.label}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {item.values[index] || item.values.join(', ')}
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
      </div>
    );
  };

  // Desktop view with horizontal scrolling
  const DesktopView = () => {
    return (
      <div className="overflow-x-auto bg-white py-8 w-full"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin'
        }}
      >
        <div className="w-full px-8 min-w-[1200px]">
          <table className="w-full border-collapse">
            <colgroup>
              <col className="w-[280px]" />
              {chargerModels.map((_, index) => (
                <col key={index} className="w-[300px]" />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th className="text-left align-middle">
                  <div className="h-60 flex flex-col justify-center pr-8 ml-18">
                    <h1 className="text-3xl font-bold text-gray-500 mb-2">AMPHAWK</h1>
                    <h2 className="text-2xl font-medium text-gray-500">AC Charger</h2>
                  </div>
                </th>

                {chargerModels.map((model, index) => (
                  <th key={index} className="text-center align-bottom px-4">
                    <div className="h-80 flex flex-col items-center justify-end pb-2"> {/* Increased container height */}
                      <div className="mb-4 relative w-full"> {/* Added relative positioning */}
                        <div className="w-full h-64 bg-white rounded-xl relative"> {/* Increased image height */}
                          <CloudinaryImage
                            {...getOptimizedAssetProps(model.imageUrl, 'charging', 'image')}
                            alt='Hero Image'
                            className='w-full h-full object-contain'
                          />
                          {/* Centered Text Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-xl font-bold text-white drop-shadow-md rounded-xl">
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
                    <td colSpan={chargerModels.length + 1} className="pt-8 pb-4">
                      <div className="flex items-center justify-start ml-18 text-left text-xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2">
                        {specSection.category}
                      </div>
                    </td>
                  </tr>

                  {specSection.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="group hover:bg-gray-50">
                      <td className="py-3 text-right pr-20 text-gray-400 font-medium align-start">
                        <div className="h-full flex items-center justify-end">
                          {item.label}
                        </div>
                      </td>
                      {item.values.map((value, valueIndex) => (
                        <td key={valueIndex} className="py-3 text-center text-gray-400 align-middle px-4">
                          <div className="min-h-[10spx] flex items-start justify-start ml-12">
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
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white w-full" style={{ overflowX: 'hidden' }}>
      <div className="md:hidden">
        <MobileView />
      </div>

      {/* Desktop view - hidden on small screens */}
      <div className="hidden md:block">
        <DesktopView />
      </div>
    </section>
  );
};

// Add default export
const Charger = ({ type }) => {
  return type === 1 ? <ChargerAC /> : <ChargerDC />;
}

export default Charger;
