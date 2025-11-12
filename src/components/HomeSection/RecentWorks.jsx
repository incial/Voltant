import React, { useRef, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const RecentWorks = () => {
  // Card data
  const cards = [
    { img: '/assets/images/EV_charging/charger.webp', alt: 'EV Charger' },
    { img: '/assets/images/WateTOEnergy/Containerized_Plant.webp', alt: 'Containerized Plant' },
    { img: '/assets/images/EV_charging/Engineering_works.webp', alt: 'Engineering Works' },
    { img: '/assets/images/WateTOEnergy/SmartWaste.webp', alt: 'Smart Waste' },
    { img: '/assets/images/WateTOEnergy/SmartWaste.webp', alt: 'Smart Waste' },
    { img: '/assets/images/WateTOEnergy/SmartWaste.webp', alt: 'Smart Waste' },
    { img: '/assets/images/WateTOEnergy/Containerized_Plant.webp', alt: 'Containerized Plant' },
    { img: '/assets/images/WateTOEnergy/Containerized_Plant.webp', alt: 'Containerized Plant' }
  ];

  // For infinite scroll, clone cards at both ends
  const infiniteCards = [
    ...cards.slice(-4),
    ...cards,
    ...cards.slice(0, 4)
  ];

  // Ref for the scrollable card row
  const rowRef = useRef(null);
  // Track if user is adjusting scroll
  const isAdjusting = useRef(false);
  // Track if auto-scroll is paused
  const isPaused = useRef(false);
  // Track hovered card
  const [hoveredCard, setHoveredCard] = useState(null);

  // Scroll by one card width
  const handleLeft = () => {
    if (!rowRef.current) return;
    const card = rowRef.current.querySelector('div[data-card]');
    if (!card) return;
    const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
    rowRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };
  const handleRight = () => {
    if (!rowRef.current) return;
    const card = rowRef.current.querySelector('div[data-card]');
    if (!card) return;
    const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
    rowRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  // Auto-scroll effect
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    
    // Set initial scroll to first real card
    const card = row.querySelector('div[data-card]');
    if (!card) return;
    const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
    
    // On mount, scroll to the first real card
    row.scrollLeft = cardWidth * 4;

    // Auto-scroll interval (scroll right to left continuously)
    const autoScrollInterval = setInterval(() => {
      if (!isPaused.current && !isAdjusting.current) {
        row.scrollLeft += 2; // Smooth continuous scroll
      }
    }, 15); // Adjust speed here (lower = faster)

    // Handle infinite scroll loop
    const onScroll = () => {
      if (isAdjusting.current) return;
      const maxScroll = cardWidth * (cards.length + 4);
      
      if (row.scrollLeft <= 0) {
        isAdjusting.current = true;
        row.scrollLeft = cardWidth * cards.length;
        setTimeout(() => { isAdjusting.current = false; }, 10);
      } else if (row.scrollLeft >= maxScroll) {
        isAdjusting.current = true;
        row.scrollLeft = cardWidth * 4;
        setTimeout(() => { isAdjusting.current = false; }, 10);
      }
    };
    
    row.addEventListener('scroll', onScroll);
    
    return () => {
      clearInterval(autoScrollInterval);
      row.removeEventListener('scroll', onScroll);
    };
  }, [cards.length]);

  return (
    <section className='w-full bg-white py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Title */}
        <div className='text-center mb-12 md:mb-20'>
          <h2 className='font-bold text-[#7f7f7f] text-[36px] md:text-[40px] mb-2 font-[Cairo]'>
            Showcase of Excellence
          </h2>
          <p className='text-[#7f7f7f] text-[18px] md:text-[20px] font-[Cairo]'>
            A glimpse into our work, from installations to innovations
          </p>
        </div>

        {/* Cards Row with Buttons and Responsive Scroll */}
        <div className='relative flex items-center justify-center'>
          {/* Left Button - hide on mobile */}
          <button
            className='hidden sm:flex absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 p-2 hover:scale-110 transition-transform shadow-lg bg-white/80 backdrop-blur rounded-full border-2 border-white'
            onClick={handleLeft}
            aria-label='Previous'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid white',
              boxShadow: '0 4px 16px 0 rgba(0,0,0,0.15)',
              background: 'none'
            }}
          >
            <FaChevronLeft size={24} className='text-gray-600 md:text-white m-0 md:m-2' />
          </button>

          {/* Cards - scrollable, responsive, rounded, with spacing */}
          <div
            ref={rowRef}
            className='flex gap-4 sm:gap-6 w-full max-w-5xl overflow-x-auto px-6 hide-scrollbar'
            style={{ background: 'none', boxShadow: 'none', scrollSnapType: 'none' }}
          >
            {infiniteCards.map((card, idx) => (
              <div
                key={card.img + idx}
                data-card
                className={`h-56 sm:h-60 w-64 sm:w-80 bg-cover bg-center shrink-0 rounded-2xl shadow-md transition-all duration-500 cursor-pointer ${
                  hoveredCard === idx ? 'scale-110 z-30 shadow-2xl' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${card.img})` }}
                title={card.alt}
                onMouseEnter={() => {
                  isPaused.current = true;
                  setHoveredCard(idx);
                }}
                onMouseLeave={() => {
                  isPaused.current = false;
                  setHoveredCard(null);
                }}
              />
            ))}
          </div>

          {/* Right Button - hide on mobile */}
          <button
            className='hidden sm:flex absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-20 p-2 hover:scale-110 transition-transform shadow-lg bg-white/80 backdrop-blur rounded-full border-2 border-white'
            onClick={handleRight}
            aria-label='Next'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid white',
              boxShadow: '0 4px 16px 0 rgba(0,0,0,0.15)',
              background: 'none'
            }}
          >
            <FaChevronRight size={24} className='text-gray-600 md:text-white m-0 md:m-2' />
          </button>
        </div>

        {/* Decorative Arrows */}
        <div className='relative flex justify-between px-6 mt-10 pointer-events-none'>
          {/* Left Arrow */}
          <svg
            width='50'
            height='25'
            viewBox='0 0 52 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='rotate-90'
          >
            <g>
              <path
                d='M1 25.7487L25.7487 1'
                stroke='#fff'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M50.4975 25.7487L25.7487 0.999996'
                stroke='#fff'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </g>
          </svg>
          {/* Right Arrow */}
          <svg
            width='50'
            height='25'
            viewBox='0 0 52 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='-rotate-90'
          >
            <g>
              <path
                d='M1 25.7487L25.7487 1'
                stroke='#fff'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M50.4975 25.7487L25.7487 0.999996'
                stroke='#fff'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default RecentWorks
