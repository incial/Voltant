import React from "react";
import MiddleImg from "../../assets/images/engineering_works/middle.png"
import ThumbUpIcon from "../../assets/icons/engineering-works/mdi-light_thumb-up.svg";
import HourglassIcon from "../../assets/icons/engineering-works/fluent_hourglass-20-regular.svg";
import VectorCombineIcon from "../../assets/icons/engineering-works/mdi-light_vector-combine.svg";
import ShieldIcon from "../../assets/icons/engineering-works/si_shield-health-safety-line.svg";
import StarIcon from "../../assets/icons/engineering-works/stash_star-light.svg";
import GroupIcon from "../../assets/icons/engineering-works/Group.svg";

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-[20px] px-[40px]">
      {/* Desktop and Mobile: Icon */}
      {icon && (
        <img
          src={icon}
          className="aspect-[1] object-contain w-[40px]  h-[40px] shrink-0 my-auto"
          alt={`${title} icon`}
        />
      )}
      
      {/* Desktop: Title and Description */}
      <div className="grow shrink w-[415px] basis-auto max-md:max-w-full max-md:hidden py-[20px] ">
        <div className="text-white font-['Cairo'] text-[24px] font-[400] leading-[100%] ">{title}</div>
        <span className="text-white font-['Cairo'] font-[200] block mt-1">{description}</span>
      </div>
      
      {/* Mobile: Title and Description */}
      <div className="hidden max-md:block max-md:w-full py-[20px]">
        <div className="text-white font-['Cairo'] text-[24px] font-[400] leading-[100%]">{title}</div>
        <span className="text-white font-['Cairo'] font-[200] block mt-1">{description}</span>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      icon: StarIcon,
      title: "Expert-Led Solutions",
      description:
        "Our team of skilled engineers ensures precision in every stage of deployment.",
    },
    {
      icon: GroupIcon,
      title: "Tailored for Your Needs",
      description:
        "Custom solutions for commercial hubs, fleet depots, and residential installations.",
    },
    {
      icon: VectorCombineIcon,
      title: "Seamless Grid Integration",
      description:
        "Optimized power distribution with advanced load balancing technology.",
    },
    {
      icon: ShieldIcon,
      title: "Compliance & Safety First",
      description:
        "Adherence to UAE regulations and global industry standards.",
    },
    {
      icon: ThumbUpIcon,
      title: "Future-Ready Infrastructure",
      description:
        "Scalable, smart, and equipped for evolving EV charging demands.",
    },
    {
      icon: HourglassIcon,
      title: "End-to-End Support",
      description:
        "From planning to execution, we handle every aspect for a hassle-free setup.",
    },
  ];

  return (
    <section className="flex flex-col relative h-[918px] w-full text-2xl text-white font-normal leading-6 mt-[100px] max-md:mt-10">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={MiddleImg}
          className="absolute h-full w-full inset-0 object-cover md:object-right max-md:object-right md:blur-none max-md:blur-[7.5px]"
          alt="Why choose us background"
        />
      </div>
      <div className="relative bg-[rgba(0,0,0,0.5)] flex w-full md:w-[720px] max-w-full h-[918px] flex-col items-stretch justify-center px-5 py-10 md:px-20 md:py-[77px]">
        <div className="flex flex-col items-stretch max-md:max-w-full">
          <h2 className="text-[40px] max-md:text-[24px] mt-[20px] mb-[40px]  max-md:mb-[20px] font-bold leading-none max-md:text-center">Why Choose Us?</h2>

          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
