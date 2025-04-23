import React, { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gsap from "gsap";

const ProgressCircle = ({ value, label, unit = "%", size = 180 }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const circleRef = useRef(null);
  const progressRef = useRef(null);
  const inViewRef = useRef(false);

  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Set up intersection observer to trigger animation when element is in view
  useEffect(() => {
    // Skip if we've already animated
    if (inViewRef.current) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !inViewRef.current) {
          inViewRef.current = true;
          
          // If user prefers reduced motion, just set the final value
          if (prefersReducedMotion) {
            setAnimatedValue(value);
            if (progressRef.current) {
              const finalOffset = ((100 - value) / 100) * circumference;
              gsap.set(progressRef.current, { strokeDashoffset: finalOffset });
            }
            return;
          }
          
          // Use GSAP for smoother animation
          gsap.to(progressRef.current, {
            strokeDashoffset: ((100 - value) / 100) * circumference,
            duration: 1.8,
            ease: "power2.out"
          });
          
          // Create a separate counter animation for the value
          gsap.to({ val: 0 }, {
            val: value,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: function() {
              setAnimatedValue(Math.ceil(this.targets()[0].val));
            }
          });
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -100px 0px" });
    
    if (circleRef.current) {
      observer.observe(circleRef.current);
    }
    
    return () => observer.disconnect();
  }, [value, circumference]);

  return (
    <div className="relative flex flex-col items-center" role="presentation" aria-label={`${label}: ${value}${unit}`}>
      <div ref={circleRef} className="relative w-[180px] h-[180px] flex items-center justify-center mb-4">
        <svg
          className="absolute top-0 left-0"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: "rotate(-90deg)" }}
          aria-hidden="true"
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
            ref={progressRef}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#00A651"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
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

// Animation variants for consistent animation across components
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const ImpactMetrics = () => {
  const metricsData = [
    { value: 3, label: "CO₂ REDUCED", unit: "%" },
    { value: 15, label: "WASTE PROCESSED", unit: "%" },
    { value: 45, label: "ENERGY GENERATED", unit: "MWh" }
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-[1200px] mx-auto mt-16 px-4 md:px-6 mb-16 md:mt-24">
      <motion.h2 
        className="text-[#7F7F7F] text-center font-bold text-2xl md:text-[40px] leading-snug mb-8 md:mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Driving Sustainability,<br />
        Creating Impact.
      </motion.h2>
      
      <motion.p 
        className="text-[#7F7F7F] text-base md:text-xl font-light leading-relaxed text-center max-w-[1000px] mb-10 md:mb-20 px-4 md:px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2 }}
      >
        At Voltant Energy, sustainability isn't just a commitment—it's the core
        of everything we do. We're redefining energy solutions by aligning with
        global and UAE sustainability initiatives, cutting carbon footprints,
        maximizing energy efficiency, and accelerating the shift toward a
        circular economy.
      </motion.p>
      
      <motion.div 
        className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 w-full max-w-[1000px] mx-auto py-8 md:py-0"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {metricsData.map((metric) => (
          <motion.div 
            key={metric.label}
            variants={fadeInUp}
            className="transition-transform hover:scale-105 duration-300"
          >
            <ProgressCircle 
              value={metric.value} 
              label={metric.label} 
              unit={metric.unit} 
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ImpactMetrics;