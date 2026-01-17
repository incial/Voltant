import dynamic from "next/dynamic";
import {
  HomeHeroSection as HeroSection,
  RecentWorks,
} from "@/components/sections/home";
import SplitHoverImages from "@/components/sections/home/SplitImages";

// Lazy load components that appear below the fold
const ConnectWithUs = dynamic(
  () => import("@/components/sections/home/ConnectWithUs"),
  {
    loading: () => <SectionLoader />,
  },
);

const VideoBanner = dynamic(
  () => import("@/components/sections/home/VideoBanner"),
  {
    loading: () => <SectionLoader />,
  },
);

// Simple loading component for below-the-fold sections
function SectionLoader() {
  return (
    <div className="flex items-center justify-center w-full py-16">
      <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export const metadata = {
  title: "Voltant Energy | Home",
  description:
    "Shaping a net-zero future with smart, sustainable energy solutions. We provide innovative waste-to-energy technology, EV charging infrastructure, and energy monitoring systems.",
};

export default function HomePage() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* Hero section */}
      <div
        className="relative bg-black w-full h-screen"
        style={{
          overflow: "hidden",
        }}
      >
        <HeroSection />
      </div>

      {/* Content sections */}
      <SplitHoverImages />

      <div className="w-full">
        {/* RecentWorks section */}
        <div className="w-full">
          <RecentWorks />
        </div>

        {/* VideoBanner */}
        <div className="w-full flex justify-center md:py-10">
          <VideoBanner />
        </div>

        {/* ConnectWithUs */}
        <div className="w-full py-8 md:py-16 lg:py-24 flex justify-center px-4 sm:px-7">
          <ConnectWithUs />
        </div>
      </div>
    </div>
  );
}
