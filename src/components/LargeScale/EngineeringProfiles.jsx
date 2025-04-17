import React from "react";

function ProfileSection({ title, description }) {
  return (
    <>
      {title}
      <span style={{ fontSize: "20px" }}>{description}</span>
      <br />
      <br />
    </>
  );
}

export function EngineeringProfiles() {
  const handleDownload = () => {
    // In a real implementation, this would trigger a file download
    alert("Downloading charging profile...");
  };

  const leftProfiles = [
    {
      title: "Site Assessment & Feasibility Study ",
      description:
        "We begin with a comprehensive evaluation of the site, analyzing power availability, load capacity, and infrastructure readiness. This helps determine the best charger placement while ensuring compliance with local regulations and safety standards.",
    },
    {
      title: "Design & Engineering Solutions",
      description:
        "Every project is designed for maximum efficiency, integrating smart energy management, optimal power distribution, and scalable solutions. Whether it's a single charging point or a large-scale network, our engineering team develops tailored layouts and electrical schematics that align with sustainability goals.",
    },
    {
      title: "Installation & Commissioning",
      description:
        "From civil and electrical work to network setup, our team manages the entire installation process, ensuring seamless execution. We conduct rigorous testing and commissioning to guarantee smooth operation and long-term reliability.",
    },
  ];

  const rightProfiles = [
    {
      title: "Maintenance & Support",
      description:
        "Our job doesn't end after installation. We provide ongoing maintenance, real-time monitoring, and remote diagnostics to ensure optimal charger performance. With preventive service schedules and 24/7 technical support, we keep charging stations running efficiently.",
    },
    {
      title: "Software & Network Integration",
      description:
        "Seamless connectivity is key to modern EV charging. We integrate smart Charge Point Management Systems (CPMS) with real-time data analytics, load balancing, and OCPP-compliant backend systems. This allows for efficient monitoring, remote control, and a smooth user experience.",
    },
  ];

  return (
    <section className="self-center flex w-full max-w-[1098px] flex-col items-stretch mt-[100px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-[rgba(127,127,127,1)] text-4xl font-bold leading-none">
        Engineering Profiles
      </h2>
      <div className="mt-[60px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="text-[rgba(127,127,127,1)] text-2xl font-light leading-[48px] max-md:max-w-full max-md:mt-10">
              {leftProfiles.map((profile, index) => (
                <ProfileSection
                  key={index}
                  title={profile.title}
                  description={profile.description}
                />
              ))}
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch text-[rgba(127,127,127,1)] max-md:max-w-full max-md:mt-10">
              <div className="text-2xl font-light leading-[48px] max-md:max-w-full">
                {rightProfiles.map((profile, index) => (
                  <ProfileSection
                    key={index}
                    title={profile.title}
                    description={profile.description}
                  />
                ))}
              </div>
              <button
                onClick={handleDownload}
                className="text-xl font-normal text-center leading-none mt-[213px] px-9 py-[21px] rounded-[31px] border-[rgba(127,127,127,1)] border-solid border-2 max-md:mt-10 max-md:px-5 hover:bg-[rgba(127,127,127,0.1)] transition-colors"
              >
                Download Charging Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
