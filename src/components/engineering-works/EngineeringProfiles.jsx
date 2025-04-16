import React from "react";

export function EngineeringProfiles() {
  return (
    <section className="flex flex-col items-center w-full mt-[100px] mb-[100px] px-4 max-md:mt-10">
      <div className="max-w-[1098px] w-full flex flex-col">
        <h2 className="text-[rgba(127,127,127,1)] text-4xl max-md:text-3xl font-bold leading-none max-md:mx-[50px]">
        Profiles
        </h2>
        <div className="mt-[60px] max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:mx-[50px]">
            <div className="w-6/12 max-md:w-full">
              <div className="text-[rgba(127,127,127,1)] text-2xl font-light leading-[48px] max-md:leading-normal max-md:text-xl">
                <h3 className="text-2xl font-medium mb-2">Site Assessment & Feasibility Study</h3>
                <p className="text-[24px] max-md:text-[20px] leading-normal mb-6">
                  We begin with a comprehensive evaluation of the site, analyzing
                  power availability, load capacity, and infrastructure readiness.
                  This helps determine the best charger placement while ensuring
                  compliance with local regulations and safety standards.
                </p>
                
                <h3 className="text-2xl font-medium mb-2">Design & Engineering Solutions</h3>
                <p className="text-[24px] max-md:text-[20px] leading-normal mb-6">
                  Every project is designed for maximum efficiency, integrating
                  smart energy management, optimal power distribution, and
                  scalable solutions. Whether it's a single charging point or a
                  large-scale network, our engineering team develops tailored
                  layouts and electrical schematics that align with sustainability
                  goals.
                </p>
                
                <h3 className="text-2xl font-medium mb-2">Installation & Commissioning</h3>
                <p className="text-[24px] max-md:text-[20px] leading-normal">
                  From civil and electrical work to network setup, our team
                  manages the entire installation process, ensuring seamless
                  execution. We conduct rigorous testing and commissioning to
                  guarantee smooth operation and long-term reliability.
                </p>
              </div>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch text-[rgba(127,127,127,1)] max-md:mt-6">
                <div className="text-2xl font-light leading-[48px] max-md:leading-normal max-md:text-xl">
                  <h3 className="text-2xl font-medium mb-2">Maintenance & Support</h3>
                  <p className="text-[24px] max-md:text-[20px] leading-normal mb-6">
                    Our job doesn't end after installation. We provide ongoing
                    maintenance, real-time monitoring, and remote diagnostics to
                    ensure optimal charger performance. With preventive service
                    schedules and 24/7 technical support, we keep charging
                    stations running efficiently.
                  </p>
                  
                  <h3 className="text-2xl font-medium mb-2">Software & Network Integration</h3>
                  <p className="text-[24px] max-md:text-[20px] leading-normal">
                    Seamless connectivity is key to modern EV charging. We
                    integrate smart Charge Point Management Systems (CPMS) with
                    real-time data analytics, load balancing, and OCPP-compliant
                    backend systems. This allows for efficient monitoring, remote
                    control, and a smooth user experience.
                  </p>
                </div>
                <div className="flex justify-center w-full my-[70px]">
                  <button className="text-[24px] max-md:text-[16px] font-normal text-center leading-none px-9 py-[21px] rounded-[31px] border-[rgba(127,127,127,1)] border-solid border-2 hover:bg-[rgba(127,127,127,0.1)] transition-colors">
                    Download Charging Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
