import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ProgressCircle = ({ value, label, unit = "%", size = 180 }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const circleRef = useRef(null);
  const inViewRef = useRef(false);

  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - animatedValue) / 100) * circumference;

  // Set up intersection observer to trigger animation when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !inViewRef.current) {
          inViewRef.current = true;
          
          // Animate the value counting up
          let startValue = 0;
          const duration = 1500;
          const startTime = performance.now();
          
          const updateValue = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.ceil(progress * value);
            
            setAnimatedValue(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(updateValue);
            }
          };
          
          requestAnimationFrame(updateValue);
        }
      });
    }, { threshold: 0.2 });
    
    if (circleRef.current) {
      observer.observe(circleRef.current);
    }
    
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="relative flex flex-col items-center">
      <div ref={circleRef} className="relative w-[180px] h-[180px] flex items-center justify-center mb-4">
        <svg
          className="absolute top-0 left-0 transform rotate-[-90deg] md:rotate-[-90deg]"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: "rotate(-90deg)" }}
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
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#00A651"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: progressOffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center z-10">
          <span className="text-[#7F7F7F] text-4xl font-normal">
            {animatedValue}
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
    <section className="flex flex-col items-center w-full max-w-[1200px] mx-auto mt-16 px-4 md:px-6 mb-16 md:mt-24">
      <motion.h2 
        className="text-[#7F7F7F] text-center font-bold text-2xl md:text-[40px] leading-snug mb-8 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        Driving Sustainability,<br />
        Creating Impact.
      </motion.h2>
      <motion.p 
        className="text-[#7F7F7F] text-base md:text-xl font-light leading-relaxed text-center max-w-[1000px] mb-10 md:mb-20 px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        At Voltant Energy, sustainability isn't just a commitment—it's the core
        of everything we do. We're redefining energy solutions by aligning with
        global and UAE sustainability initiatives, cutting carbon footprints,
        maximizing energy efficiency, and accelerating the shift toward a
        circular economy.
      </motion.p>
      <motion.div 
        className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 w-full max-w-[1000px] mx-auto py-8 md:py-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ProgressCircle value={3} label="CO₂ REDUCED" />
        <ProgressCircle value={15} label="WASTE PROCESSED" />
        <ProgressCircle value={45} label="ENERGY GENERATED" unit="MWh" />
      </motion.div>
    </section>
  );
};

export default ImpactMetrics;