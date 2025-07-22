import React, { useRef, useEffect } from 'react'
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

  // Infinite scroll effect
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    // Set initial scroll to first real card
    const card = row.querySelector('div[data-card]');
    if (!card) return;
    const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
    // On mount, scroll to the first real card
    row.scrollLeft = cardWidth * 4;

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
    return () => row.removeEventListener('scroll', onScroll);
  }, [cards.length]);

  return (
    <section className='relative w-full bg-white py-20'>
      {/* Title */}
      <h2 className='font-bold text-[#7f7f7f] text-[30px] md:text-[40px] text-center mb-12 md:mb-24 font-[Cairo]'>
        Recent Works
      </h2>

      {/* Cards Row with Buttons and Responsive Scroll */}
      <div className='flex flex-row items-center justify-center gap-4 sm:px-4 relative'>
        {/* Left Button - hide on mobile */}
        <button
          className='hidden sm:flex absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-1 hover:scale-110 transition-transform shadow-lg bg-white/80 backdrop-blur rounded-full border-2 border-white'
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
          className='flex flex-row gap-4 sm:gap-8 w-full overflow-x-auto snap-x snap-mandatory px-2 sm:px-0 hide-scrollbar'
          style={{ maxWidth: '100vw', scrollSnapType: 'x mandatory', background: 'none', boxShadow: 'none' }}
        >
          {infiniteCards.map((card, idx) => (
            <div
              key={card.img + idx}
              data-card
              className='h-[220px] sm:h-[242px] w-[85vw] sm:w-[340px] bg-cover bg-center flex-shrink-0 snap-center rounded-2xl shadow-md transition-all duration-300'
              style={{ backgroundImage: `url(${card.img})` }}
              title={card.alt}
            />
          ))}
        </div>

        {/* Right Button - hide on mobile */}
        <button
          className='hidden sm:flex absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-1 hover:scale-110 transition-transform shadow-lg bg-white/80 backdrop-blur rounded-full'
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
      <div className='absolute left-0 top-[96%] flex flex-row w-full justify-between px-8 pointer-events-none'>
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
    </section>
  )
}

export default RecentWorks
