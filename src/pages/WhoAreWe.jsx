import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { homeImgs, logos } from '../utils/localAssets'
import RecentWorks from '../components/HomeSection/RecentWorks'

const WhoAreWe = () => {
  return (
    <div>
      <div
        className='w-full h-[600px] flex items-center justify-center relative'
        style={{
          backgroundImage: `url(${homeImgs.aboutUsSection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Black overlay with improved opacity */}
        <div className='absolute inset-0 bg-black opacity-30'></div>
        <motion.h2
          className='relative z-10 text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-white'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Explore.
        </motion.h2>
      </div>
      {/* Full width content section */}
      <div className='relative z-10 w-full py-12 md:py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Logo section - centered */}
          <motion.div
            className='flex flex-col items-center justify-center mb-12'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={logos.main}
              alt='Voltant Energy Logo'
              className='h-14 lg:h-16'
            />
          </motion.div>

          {/* Full width text content */}
          <div className='w-full'>
            <div className='text-black'>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className='text-2xl md:text-3xl font-bold mb-6 text-gray-800'>
                    Voltant Energy – Driving Sustainable Solutions in the UAE
                  </h2>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    Established in Dubai, Voltant Energy is a leading provider of renewable energy and sustainability solutions, committed to supporting the UAE's mission toward Net Zero and a cleaner, smarter future. We tackle critical challenges in mobility and waste management, offering innovative technologies that drive efficiency, sustainability, and environmental responsibility.
                  </p>

                  <h3 className='text-xl md:text-2xl font-bold mb-4 mt-8 text-gray-800'>
                    EV Infrastructure Solutions
                  </h3>
                  <p className='mb-4 text-base md:text-lg font-normal leading-relaxed'>
                    Voltant Energy delivers end-to-end Electric Vehicle (EV) infrastructure services, including supply, installation, EPC, AMC, CPMS, and CPO services. We empower businesses, municipalities, and communities to adopt seamless EV solutions that reduce emissions and support sustainable mobility.
                  </p>
                  <p className='mb-3 text-base md:text-lg font-normal leading-relaxed'>
                    Our EV offerings include:
                  </p>
                  <ul className='mb-6 ml-6 text-base md:text-lg font-normal leading-relaxed list-disc space-y-2'>
                    <li>High-performance AC and DC chargers</li>
                    <li>Smart Charge Point Management Systems (CPMS) for real-time monitoring</li>
                    <li>Comprehensive Engineering, Procurement & Construction (EPC) services</li>
                    <li>Flexible Annual Maintenance Contracts (AMC) for optimal uptime</li>
                    <li>Certified Charge Point Operator (CPO) services managing the full lifecycle of EV charging networks</li>
                  </ul>

                  <h3 className='text-xl md:text-2xl font-bold mb-4 mt-8 text-gray-800'>
                    Waste-to-Energy Solutions
                  </h3>
                  <p className='mb-4 text-base md:text-lg font-normal leading-relaxed'>
                    We convert waste into clean, renewable energy, addressing urban and industrial waste management challenges. Our solutions include:
                  </p>
                  <ul className='mb-6 ml-6 text-base md:text-lg font-normal leading-relaxed list-disc space-y-2'>
                    <li>Anaerobic Digestion (AD) plants for domestic and modular applications</li>
                    <li>Containerized AD plants for scalable, efficient deployment</li>
                    <li>Large-scale biogas plants for industrial and municipal operations</li>
                  </ul>

                  <h3 className='text-xl md:text-2xl font-bold mb-4 mt-8 text-gray-800'>
                    Smart Waste Solutions
                  </h3>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    Smart waste segregation bins for residential and commercial communities that optimize waste management and promote efficient recycling practices.
                  </p>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    By integrating advanced technology with sustainable practices, Voltant Energy helps organizations reduce carbon footprints, optimize resources, and generate renewable energy.
                  </p>

                  <h3 className='text-xl md:text-2xl font-bold mb-4 mt-8 text-gray-800'>
                    Vision
                  </h3>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    To be a leading enabler of a sustainable future in the UAE and beyond, driving clean mobility and renewable energy solutions that empower communities, businesses, and the environment.
                  </p>

                  <h3 className='text-xl md:text-2xl font-bold mb-4 mt-8 text-gray-800'>
                    Mission
                  </h3>
                  <p className='mb-4 text-base md:text-lg font-normal leading-relaxed'>
                    To provide innovative, reliable, and turnkey solutions in electric vehicle infrastructure and waste-to-energy, enabling our clients to achieve their sustainability goals while creating measurable environmental and economic impact.
                  </p>
                  <ul className='mb-6 ml-6 text-base md:text-lg font-normal leading-relaxed list-disc space-y-2'>
                    <li>Deliver end-to-end EV infrastructure and CPO services with cutting-edge technology and seamless operations.</li>
                    <li>Convert organic waste into renewable energy through smart, scalable waste-to-energy solutions.</li>
                    <li>Support the UAE's Net Zero and sustainability initiatives by reducing carbon emissions and promoting circular economy practices.</li>
                    <li>Empower property owners, businesses, and communities to adopt green technologies with minimal investment and maximum benefit.</li>
                  </ul>

                  <h3 className='text-xl md:text-2xl font-bold mb-4 mt-8 text-gray-800'>
                    Our Logo, Our Purpose
                  </h3>
                  <p className='mb-4 text-base md:text-lg font-normal leading-relaxed'>
                    The Voltant Energy logo is more than just a symbol — it reflects our commitment to building a sustainable and efficient future. The two arrows represent the balance we strive to achieve for our clients, communities, and the environment:
                  </p>
                  <ul className='mb-4 ml-6 text-base md:text-lg font-normal leading-relaxed list-disc space-y-3'>
                    <li>
                      <strong>The Green Arrow (Upward):</strong>
                      <ul className='ml-6 mt-2 list-circle space-y-1'>
                        <li>Increasing green energy adoption</li>
                        <li>Driving efficiency and performance</li>
                        <li>Expanding the use of renewables and clean technologies</li>
                        <li>Growing sustainability impact for our partners</li>
                      </ul>
                    </li>
                    <li>
                      <strong>The Grey Arrow (Downward):</strong>
                      <ul className='ml-6 mt-2 list-circle space-y-1'>
                        <li>Reducing operational costs through smart solutions</li>
                        <li>Lowering carbon emissions with clean mobility and waste-to-energy</li>
                        <li>Minimizing waste and environmental impact</li>
                        <li>Cutting down on energy inefficiencies</li>
                      </ul>
                    </li>
                  </ul>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    Together, these arrows symbolize how Voltant Energy empowers businesses to grow sustainably — by maximizing green outcomes while minimizing costs and carbon footprints.
                  </p>

                  <h3 className='text-xl md:text-2xl font-bold mb-4 mt-8 text-gray-800'>
                    Our Sustainability Commitment
                  </h3>
                  <p className='mb-4 text-base md:text-lg font-normal leading-relaxed'>
                    At Voltant Energy, sustainability is at the core of our mission. We are committed to driving a cleaner, greener future in the UAE by providing innovative solutions that reduce environmental impact, promote renewable energy, and support the transition to a Net Zero economy, in alignment with the United Nations Sustainable Development Goals (SDGs).
                  </p>

                  <h4 className='text-lg md:text-xl font-bold mb-3 mt-6 text-gray-800'>
                    What We Stand For
                  </h4>
                  <ul className='mb-6 ml-6 text-base md:text-lg font-normal leading-relaxed list-disc space-y-2'>
                    <li><strong>Clean Mobility:</strong> As a trusted Charge Point Operator (CPO), we enable widespread adoption of electric vehicles, reducing carbon emissions and supporting sustainable transportation (SDG 11 & 13).</li>
                    <li><strong>Renewable Energy from Waste:</strong> Our waste-to-energy solutions turn organic waste into valuable renewable energy, minimizing landfill use and promoting a circular economy (SDG 7 & 12).</li>
                    <li><strong>Sustainable Communities:</strong> By deploying smart waste segregation bins and modular AD plants, we empower communities and businesses to manage waste responsibly while generating energy (SDG 11 & 12).</li>
                    <li><strong>Innovation & Responsibility:</strong> We continuously invest in cutting-edge technology, reliable infrastructure, and smart systems to ensure our solutions are efficient, scalable, and environmentally responsible (SDG 9 & 13).</li>
                  </ul>

                  <h4 className='text-lg md:text-xl font-bold mb-3 mt-6 text-gray-800'>
                    Our Pledge
                  </h4>
                  <p className='mb-3 text-base md:text-lg font-normal leading-relaxed'>
                    Voltant Energy pledges to:
                  </p>
                  <ul className='mb-6 ml-6 text-base md:text-lg font-normal leading-relaxed list-disc space-y-2'>
                    <li>Align all projects with the UAE's Net Zero goals and the UN SDGs.</li>
                    <li>Promote energy efficiency, carbon reduction, and renewable energy adoption.</li>
                    <li>Provide our clients and partners with solutions that are profitable, reliable, and environmentally responsible.</li>
                    <li>Educate and support communities and businesses in achieving measurable sustainability outcomes.</li>
                  </ul>
                  <p className='mb-6 text-base md:text-lg font-normal leading-relaxed'>
                    Together, we power a sustainable future — transforming mobility, waste, and energy into solutions that benefit people, the planet, and business, in line with global sustainability commitments.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link to='/contact'>
                    <button className='mt-4 border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 w-full md:w-auto'>
                      Get in Touch
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Social media icons - centered at bottom */}
            <motion.div
              className='flex flex-row justify-center items-center space-x-6 mt-12 mb-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                staggerChildren: 0.1,
                delayChildren: 0.2
              }}
            >
              <motion.a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                aria-label='YouTube'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaYoutube size={24} />
              </motion.a>
              <motion.a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                aria-label='Instagram'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                aria-label='Facebook'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaFacebookF size={24} />
              </motion.a>
              <motion.a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                aria-label='LinkedIn'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaLinkedinIn size={24} />
              </motion.a>
              <motion.a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:opacity-80 transition-opacity p-1'
                aria-label='Twitter'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaXTwitter size={24} />
              </motion.a>
            </motion.div>
        </div>
      </div>
      <div>
        <RecentWorks />
      </div>
    </div>
  )
}

export default WhoAreWe
