import React from "react";

const ProgressCircle = ({ value, label, unit = "%", size = 180 }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - value) / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-[180px] h-[180px] flex items-center justify-center mb-4">
        <svg
          className="absolute top-0 left-0"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E5E5"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#00A651"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center z-10">
          <span className="text-[#7F7F7F] text-4xl font-normal">
            {value}
            {unit}
          </span>
          <span className="text-[#7F7F7F] text-sm font-light tracking-wider mt-2">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

const ImpactMetrics = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1200px] mx-auto mt-16 px-4 mb-16">
      <h2 className="text-[#7F7F7F] text-4xl font-normal leading-[1.2] text-center mb-16">
        Driving Sustainability,<br />
        Creating Impact.
      </h2>
      <p className="text-[#7F7F7F] text-xl font-light leading-7 text-center max-w-[1000px] mb-20">
        At Voltant Energy, sustainability isn't just a commitment—it's the core
        of everything we do. We're redefining energy solutions by aligning with
        global and UAE sustainability initiatives, cutting carbon footprints,
        maximizing energy efficiency, and accelerating the shift toward a
        circular economy.
      </p>
      <div className="flex justify-center gap-20 w-full max-w-[1000px] mx-auto max-md:flex-col max-md:items-center">
        <ProgressCircle value={3} label="CO₂ REDUCED" />
        <ProgressCircle value={15} label="WASTE PROCESSED" />
        <ProgressCircle value={45} label="ENERGY GENERATED" unit="MWh" />
      </div>
    </section>
  );
};

export default ImpactMetrics;