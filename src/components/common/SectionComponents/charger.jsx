import React from "react";
import { ACData } from "../../../utils/sectionData";

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

export const Charger = () => {
  const { chargerData } = ACData;
  const { chargerModels, specifications } = chargerData;

  // Calculate total table width based on columns with extra padding
  const labelWidth = 280;
  const valueWidth = 300;
  const totalWidth = labelWidth + (valueWidth * chargerModels.length) + 100;

  // Responsive design - Mobile view
  const MobileView = () => {
    // Only showing the first model for mobile
    const model = chargerModels[0];
    
    return (
      <div className="bg-white p-5">
        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold text-gray-700">Models</h1>
        </div>
        
        {/* Single charger display */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-md py-8 px-10">
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <h2 className="text-xl font-bold text-center">{chargerData.title}</h2>
                <h3 className="text-lg font-medium text-center">{chargerData.subtitle}</h3>
              </div>
              <div className="w-full max-w-xs h-48 mb-4">
                <img 
                  src={model.imageUrl} 
                  alt={`${model.power} Charger`} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Specification sections - vertical layout */}
        {specifications.map((specSection, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="text-lg font-medium text-gray-600 mb-3">{specSection.category}</h3>
            <div className="space-y-2">
              {specSection.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-row py-1">
                  <div className="w-1/2 text-right pr-4 text-gray-600">
                    {item.label}
                  </div>
                  <div className="w-1/2 pl-4 text-gray-800">
                    {item.values[0]} {/* Only showing first value */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Desktop view with horizontal scrolling
  const DesktopView = () => {
    return (
      <div 
        className="overflow-x-auto" 
        style={{ 
          width: '100%', 
          WebkitOverflowScrolling: 'touch',
          overflowX: 'scroll',
          scrollbarWidth: 'thin'
        }}
      >
        <div style={{ 
          width: `${totalWidth}px`, 
          minWidth: '1000px', 
          maxWidth: 'none' 
        }}>
          <table className="w-full border-collapse table-fixed">
            <colgroup>
              <col style={{ width: `${labelWidth}px` }} />
              {chargerModels.map((_, index) => (
                <col key={index} style={{ width: `${valueWidth}px` }} />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th className="text-left" style={{ verticalAlign: 'middle' }}>
                  <div className="h-60 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-700">{chargerData.title}</h1>
                    <h2 className="text-2xl font-medium text-gray-600">{chargerData.subtitle}</h2>
                  </div>
                </th>
                
                {chargerModels.map((model, index) => (
                  <th key={index} className="text-center" style={{ verticalAlign: 'bottom', paddingRight: '10px', paddingLeft: '10px' }}>
                    <div className="h-60 flex flex-col items-center justify-end">
                      <div className="mb-2">
                        <h2 className="text-3xl font-bold">{model.power}</h2>
                      </div>
                      <div className="w-full h-48">
                        <img 
                          src={model.imageUrl} 
                          alt={`${model.power} Charger`} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                    </div>
                  </th>
                ))}
                <th style={{ width: '20px' }}></th>
              </tr>
            </thead>
            <tbody>
              {specifications.map((specSection, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <tr>
                    <td colSpan={chargerModels.length + 2} className="py-6">
                      <div className="text-left text-xl font-medium text-gray-600">{specSection.category}</div>
                    </td>
                  </tr>
                  
                  {specSection.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td className="py-2 text-right pr-6 text-gray-600">
                        {item.label}
                      </td>
                      {item.values.map((value, valueIndex) => (
                        <td key={valueIndex} className="py-2 text-center text-gray-800">
                          {value}
                        </td>
                      ))}
                      <td></td>
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
    <section className="bg-white" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      {/* Mobile view - shown only on small screens */}
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
export default Charger;
