"use client";

import Image from "next/image";

const VideoBanner = () => {
  return (
    <div className="relative w-full">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
        <Image
          src="/assets/images/Home/Descpition.png"
          alt="Sustainable Energy Background"
          fill
          className="object-cover"
          quality={80}
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0b2d057d] opacity-50 z-10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white space-y-4 lg:space-y-6">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-snug font-normal">
              By transforming waste into clean energy and reducing fossil fuel
              dependence, we actively support the UN Sustainable Development
              Goals (SDGs) and contribute to UAE&apos;s vision for a greener
              future.
            </p>
            <div className="h-2 lg:h-4" />
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-snug font-normal">
              With cutting-edge technology and smart energy solutions, we
              empower businesses to embrace sustainability—reducing costs while
              making a real environmental impact. The future is clean,
              efficient, and sustainable. Let&apos;s build it together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
