import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { homeImgs, logos, showcaseImgs } from '../../utils/localAssets'
import { RecentWorks } from '../../components/sections/home'

const WhoAreWe = () => {
  return (
    <div className='bg-white min-h-screen'>
      {/* Hero Section with Background Image */}
      <div
        className='relative w-full h-[507px] flex items-center justify-center'
        style={{
          backgroundImage: `url(${homeImgs.aboutUsSection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-40'></div>
        
        {/* Title */}
        <h1 className='relative z-10 text-[40px] font-bold text-white text-center'>
          Who We Are
        </h1>
      </div>
      {/* Logo Section */}
      <div className='relative w-full pt-[130px] pb-[63px]'>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={logos.main}
            alt='Voltant Energy Logo'
            className='h-[55px] mb-[15px]'
          />
          <img
            src={logos.icon}
            alt='Voltant Energy Icon'
            className='h-[15px]'
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className='w-full px-[183px] pb-[100px]'>
        <div className='flex flex-col gap-[65px]'>
          {/* Section 1 */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              Voltant Energy – Driving Sustainable Solutions in the UAE
            </h2>
            <p className='text-[20px] font-light text-[#7f7f7f] leading-normal'>
              Established in Dubai, Voltant Energy is a leading provider of renewable energy and sustainability solutions, committed to supporting the UAE's mission toward Net Zero and a cleaner, smarter future. We tackle critical challenges in mobility and waste management, offering innovative technologies that drive efficiency, sustainability, and environmental responsibility.
            </p>
          </div>

          {/* Section 2 - EV Infrastructure */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              EV Infrastructure Solutions
            </h2>
            <div className='text-[20px] font-light text-[#7f7f7f]'>
              <p className='mb-4'>
                Voltant Energy delivers end-to-end Electric Vehicle (EV) infrastructure services, including supply, installation, EPC, AMC, CPMS, and CPO services. We empower businesses, municipalities, and communities to adopt seamless EV solutions that reduce emissions and support sustainable mobility.
              </p>
              <p className='mb-2'>Our EV offerings include:</p>
              <ul className='list-disc ml-[30px] space-y-1'>
                <li>High-performance AC and DC chargers</li>
                <li>Smart Charge Point Management Systems (CPMS) for real-time monitoring</li>
                <li>Comprehensive Engineering, Procurement & Construction (EPC) services</li>
                <li>Flexible Annual Maintenance Contracts (AMC) for optimal uptime</li>
                <li>Certified Charge Point Operator (CPO) services managing the full lifecycle of EV charging networks</li>
              </ul>
            </div>
          </div>

          {/* Section 3 - Waste-to-Energy */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              Waste-to-Energy Solutions
            </h2>
            <div className='text-[20px] font-light text-[#7f7f7f]'>
              <p className='mb-2'>
                We convert waste into clean, renewable energy, addressing urban and industrial waste management challenges. Our solutions include:
              </p>
              <ul className='list-disc ml-[30px] space-y-1'>
                <li>Anaerobic Digestion (AD) plants for domestic and modular applications</li>
                <li>Containerized AD plants for scalable, efficient deployment</li>
                <li>Large-scale biogas plants for industrial and municipal operations</li>
              </ul>
            </div>
          </div>

          {/* Section 4 - Smart Waste */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              Smart Waste Solutions
            </h2>
            <div className='text-[20px] font-light text-[#7f7f7f]'>
              <p className='mb-4'>
                Smart waste segregation bins for residential and commercial communities that optimize waste management and promote efficient recycling practices.
              </p>
              <p>
                By integrating advanced technology with sustainable practices, Voltant Energy helps organizations reduce carbon footprints, optimize resources, and generate renewable energy.
              </p>
            </div>
          </div>

          {/* Section 5 - Vision */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              Vision
            </h2>
            <p className='text-[20px] font-light text-[#7f7f7f]'>
              To be a leading enabler of a sustainable future in the UAE and beyond, driving clean mobility and renewable energy solutions that empower communities, businesses, and the environment.
            </p>
          </div>

          {/* Section 6 - Mission */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              Mission
            </h2>
            <div className='text-[20px] font-light text-[#7f7f7f]'>
              <p className='mb-4'>
                To provide innovative, reliable, and turnkey solutions in electric vehicle infrastructure and waste-to-energy, enabling our clients to achieve their sustainability goals while creating measurable environmental and economic impact.
              </p>
              <ul className='list-disc ml-[30px] space-y-1'>
                <li>Deliver end-to-end EV infrastructure and CPO services with cutting-edge technology and seamless operations.</li>
                <li>Convert organic waste into renewable energy through smart, scalable waste-to-energy solutions.</li>
                <li>Support the UAE's Net Zero and sustainability initiatives by reducing carbon emissions and promoting circular economy practices.</li>
                <li>Empower property owners, businesses, and communities to adopt green technologies with minimal investment and maximum benefit.</li>
              </ul>
            </div>
          </div>

          {/* About Section Sub Logo */}
          <div className='flex justify-center items-center w-full py-[50px]'>
            <img
              src={homeImgs.aboutSectionSubLogo}
              alt='Voltant Energy Mission'
              className='max-w-full h-auto'
            />
          </div>


          {/* Section 7 - Our Logo, Our Purpose */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              Our Logo, Our Purpose
            </h2>
            <div className='text-[20px] font-light text-[#7f7f7f]'>
              <p className='mb-4'>
                The Voltant Energy logo is more than just a symbol — it reflects our commitment to building a sustainable and efficient future. The two arrows represent the balance we strive to achieve for our clients, communities, and the environment:
              </p>
              <ul className='mb-0'>
                <li className='list-disc ml-[30px] mb-0'>
                  The Green Arrow (Upward):
                </li>
                <ul className='list-disc ml-[60px] mb-4'>
                  <li>Increasing green energy adoption</li>
                  <li>Driving efficiency and performance</li>
                  <li>Expanding the use of renewables and clean technologies</li>
                  <li>Growing sustainability impact for our partners</li>
                </ul>
              </ul>
              <ul className='mb-4'>
                <li className='list-disc ml-[30px] mb-0'>
                  The Grey Arrow (Downward):
                </li>
                <ul className='list-disc ml-[60px]'>
                  <li>Reducing operational costs through smart solutions</li>
                  <li>Lowering carbon emissions with clean mobility and waste-to-energy</li>
                  <li>Minimizing waste and environmental impact</li>
                  <li>Cutting down on energy inefficiencies</li>
                </ul>
              </ul>
              <p>
                Together, these arrows symbolize how Voltant Energy empowers businesses to grow sustainably — by maximizing green outcomes while minimizing costs and carbon footprints.
              </p>
            </div>
          </div>

          {/* Section 8 - Our Sustainability Commitment */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              Our Sustainability Commitment
            </h2>
            <p className='text-[20px] font-light text-[#7f7f7f]'>
              At Voltant Energy, sustainability is at the core of our mission. We are committed to driving a cleaner, greener future in the UAE by providing innovative solutions that reduce environmental impact, promote renewable energy, and support the transition to a Net Zero economy, in alignment with the United Nations Sustainable Development Goals (SDGs).
            </p>
          </div>

          {/* Section 9 - What We Stand For */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              What We Stand For
            </h2>
            <ul className='text-[20px] font-light text-[#7f7f7f] list-disc ml-[30px] space-y-1'>
              <li>Clean Mobility: As a trusted Charge Point Operator (CPO), we enable widespread adoption of electric vehicles, reducing carbon emissions and supporting sustainable transportation (SDG 11 & 13).</li>
              <li>Renewable Energy from Waste: Our waste-to-energy solutions turn organic waste into valuable renewable energy, minimizing landfill use and promoting a circular economy (SDG 7 & 12).</li>
              <li>Sustainable Communities: By deploying smart waste segregation bins and modular AD plants, we empower communities and businesses to manage waste responsibly while generating energy (SDG 11 & 12).</li>
              <li>Innovation & Responsibility: We continuously invest in cutting-edge technology, reliable infrastructure, and smart systems to ensure our solutions are efficient, scalable, and environmentally responsible (SDG 9 & 13).</li>
            </ul>
          </div>

          {/* Section 10 - Our Pledge */}
          <div className='flex flex-col gap-[50px]'>
            <h2 className='text-[24px] font-semibold text-[#7f7f7f]'>
              Our Pledge
            </h2>
            <div className='text-[20px] font-light text-[#7f7f7f]'>
              <p className='mb-4'>
                Voltant Energy pledges to:
              </p>
              <ul className='list-disc ml-[30px] space-y-1 mb-4'>
                <li>Align all projects with the UAE's Net Zero goals and the UN SDGs.</li>
                <li>Promote energy efficiency, carbon reduction, and renewable energy adoption.</li>
                <li>Provide our clients and partners with solutions that are profitable, reliable, and environmentally responsible.</li>
                <li>Educate and support communities and businesses in achieving measurable sustainability outcomes.</li>
              </ul>
              <p>
                Together, we power a sustainable future — transforming mobility, waste, and energy into solutions that benefit people, the planet, and business, in line with global sustainability commitments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch Button and Social Media Section */}
      <div className='w-full flex flex-col items-center gap-[100px] py-16'>
        <div className='flex justify-center'>
          <Link to='/contact'>
            <button className='border-2 border-[#7f7f7f] text-[#7f7f7f] text-[20px] px-[18px] rounded-[31px] hover:bg-[#7f7f7f] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#7f7f7f]/50 w-[176px] h-[62px] flex items-center justify-center'>
              Get in Touch
            </button>
          </Link>
        </div>

        {/* Social media icons */}
        <div className='flex flex-row justify-center items-center gap-[50px]'>
          <a
            href='https://youtube.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#7f7f7f] hover:opacity-80 transition-opacity'
            aria-label='YouTube'
          >
            <FaYoutube size={24} />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#7f7f7f] hover:opacity-80 transition-opacity'
            aria-label='Instagram'
          >
            <FaInstagram size={24} />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#7f7f7f] hover:opacity-80 transition-opacity'
            aria-label='Facebook'
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#7f7f7f] hover:opacity-80 transition-opacity'
            aria-label='LinkedIn'
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#7f7f7f] hover:opacity-80 transition-opacity'
            aria-label='Twitter'
          >
            <FaXTwitter size={24} />
          </a>
        </div>
        <RecentWorks />
      </div>
    </div>
  )
}

export default WhoAreWe
