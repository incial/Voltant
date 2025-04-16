import React from "react";
import MiddleImg from "../../assets/images/engineering_works/middle.png"
function Feature({ icon, title, description }) {
  return (
    <div className="flex items-stretch gap-[38px] flex-wrap mt-10 first:mt-20 first:max-md:mt-10">
      {icon && (
        <img
          src={icon}
          className="aspect-[1] object-contain w-12 shrink-0 my-auto"
          alt={`${title} icon`}
        />
      )}
      <div className="grow shrink w-[415px] basis-auto max-md:max-w-full">
        <div className="text-white font-['Cairo'] text-[24px] font-normal leading-[100%]">{title}</div>
        <span className="font-light block mt-1">{description}</span>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/280d149e61bf4893a5e0589987c9eb4b/fd0f5de35ac0181c3e428cfac28e6654a328b73e?placeholderIfAbsent=true",
      title: "Expert-Led Solutions",
      description:
        "Our team of skilled engineers ensures precision in every stage of deployment.",
    },
    {
      icon: "",
      title: "Tailored for Your Needs",
      description:
        "Custom solutions for commercial hubs, fleet depots, and residential installations.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/280d149e61bf4893a5e0589987c9eb4b/ece36ef8254fb2736aae3a3404085adea29a3216?placeholderIfAbsent=true",
      title: "Seamless Grid Integration",
      description:
        "Optimized power distribution with advanced load balancing technology.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/280d149e61bf4893a5e0589987c9eb4b/85070f567bd51a1e4725d9e2dcab98b59af5468b?placeholderIfAbsent=true",
      title: "Compliance & Safety First",
      description:
        "Adherence to UAE regulations and global industry standards.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/280d149e61bf4893a5e0589987c9eb4b/6831476f7597bae0250b7c290fc4bcc23b7767ef?placeholderIfAbsent=true",
      title: "Future-Ready Infrastructure",
      description:
        "Scalable, smart, and equipped for evolving EV charging demands.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/280d149e61bf4893a5e0589987c9eb4b/f37446204a8377d7acb52c54ccab9c0d02a8febb?placeholderIfAbsent=true",
      title: "End-to-End Support",
      description:
        "From planning to execution, we handle every aspect for a hassle-free setup.",
    },
  ];

  return (
    <section className="flex flex-col relative h-full w-full text-2xl text-white font-normal leading-6 mt-[100px] max-md:mt-10">
      <img
        src={MiddleImg}
        className="absolute h-full w-full object-cover inset-0"
        alt="Why choose us background"
      />
      <div className="relative bg-[rgba(0,0,0,0.5)] flex w-full md:w-[720px] max-w-full flex-col items-stretch justify-center px-5 py-10 md:px-20 md:py-[77px]">
        <div className="flex flex-col items-stretch max-md:max-w-full">
          <h2 className="text-[40px] max-md:text-3xl font-bold leading-none">Why Choose Us?</h2>

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
