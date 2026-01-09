import React, { useRef, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const RecentWorks = () => {
  // Card data - showcase images
  const showcaseImages = [
    'Image 13.png',
    'Image 14.png',
    'Image 15.png',
    'Image 16.png',
    'Image 17.png',
    'Image 18.png',
    'Image 19.png',
    'Image 20.png',
    'Image 21.png',
    'Image 22.png',
    'Image 23.png',
    'Image 24.png'
  ];

  console.log('Total images:', showcaseImages.length);

  const cards = showcaseImages.map((img, index) => ({
    img: `/assets/images/showcaseimages/${encodeURIComponent(img)}`,
    alt: `Showcase ${index + 13}`,
    isImage22: img === 'Image 22.png',
    isImage19: img === 'Image 19.png'
  }));

  // For infinite scroll, clone cards at both ends
  const infiniteCards = [
    ...cards.slice(-3),
    ...cards,
    ...cards.slice(0, 3)
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
    row.scrollLeft = cardWidth * 3;

    // Auto-scroll interval (scroll right to left continuously)
    const autoScrollInterval = setInterval(() => {
      if (!isPaused.current && !isAdjusting.current) {
        row.scrollLeft += 2; // Smooth continuous scroll
      }
    }, 15); // Adjust speed here (lower = faster)

    // Handle infinite scroll loop
    const onScroll = () => {
      if (isAdjusting.current) return;
      const maxScroll = row.scrollWidth - row.clientWidth;
      const currentScroll = row.scrollLeft;
      
      // When scrolling near the end, jump back to start of real content
      if (currentScroll >= maxScroll - cardWidth) {
        isAdjusting.current = true;
        row.scrollLeft = cardWidth * 3;
        setTimeout(() => { isAdjusting.current = false; }, 10);
      } 
      // When scrolling near the beginning, jump to end of real content
      else if (currentScroll <= cardWidth) {
        isAdjusting.current = true;
        row.scrollLeft = cardWidth * (cards.length + 2);
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
    <section className='w-full bg-white py-10 md:py-12 lg:py-16 xl:py-20'>
      <div className='w-full'>
        {/* Title */}
        <div className='text-center mb-6 md:mb-8 lg:mb-12 xl:mb-16 px-4 sm:px-6 lg:px-8'>
          <h2 className='font-bold text-[#7f7f7f] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-2 font-[Cairo]'>
            Showcase of Excellence
          </h2>
          <p className='text-[#7f7f7f] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-[Cairo]'>
            A glimpse into our work, from installations to innovations
          </p>
        </div>

        {/* Cards Row with Buttons and Responsive Scroll */}
        <div className='relative w-full overflow-visible py-6 md:py-8'>
          {/* Left Button - hide on mobile */}
          <button
            className='hidden sm:flex absolute left-3 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 hover:scale-110 transition-transform shadow-lg bg-white/80 backdrop-blur rounded-full border-2 border-white'
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
            <FaChevronLeft className='text-gray-600 md:text-white text-xl md:text-2xl m-0 md:m-2' />
          </button>

          {/* Cards - scrollable, responsive, rounded, with spacing */}
          <div
            ref={rowRef}
            className='flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full overflow-x-auto hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-10'
            style={{ background: 'none', boxShadow: 'none', scrollSnapType: 'none', overflowY: 'visible' }}
          >
            {infiniteCards.map((card, idx) => (
              <div
                key={card.img + idx}
                data-card
                className={`h-64 sm:h-72 md:h-80 lg:h-88 xl:h-96 w-72 sm:w-80 md:w-88 lg:w-96 xl:w-[26rem] shrink-0 rounded-xl md:rounded-2xl shadow-md overflow-hidden cursor-pointer transition-shadow duration-500 ${
                  card.isImage22 ? 'bg-[#d4824a]' : card.isImage19 ? 'bg-gray-900' : ''
                }`}
                title={card.alt}
                onMouseEnter={() => {
                  isPaused.current = true;
                  setHoveredCard(idx);
                }}
                onMouseLeave={() => {
                  isPaused.current = false;
                  setHoveredCard(null);
                }}
              >
                <div
                  className={`w-full h-full ${card.isImage22 || card.isImage19 ? 'bg-contain bg-no-repeat' : 'bg-cover'} bg-center transition-transform duration-500 ${
                    hoveredCard === idx ? 'scale-110' : 'scale-100'
                  }`}
                  style={{ backgroundImage: `url(${card.img})` }}
                />
              </div>
            ))}
          </div>

          {/* Right Button - hide on mobile */}
          <button
            className='hidden sm:flex absolute right-3 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 hover:scale-110 transition-transform shadow-lg bg-white/80 backdrop-blur rounded-full border-2 border-white'
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
            <FaChevronRight className='text-gray-600 md:text-white text-xl md:text-2xl m-0 md:m-2' />
          </button>
        </div>

        {/* Decorative Arrows */}
        <div className='relative flex justify-between mt-6 md:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-8 pointer-events-none'>
          {/* Left Arrow */}
          <svg
            width='50'
            height='25'
            viewBox='0 0 52 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='rotate-90 w-10 md:w-12 lg:w-[50px]'
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
            className='-rotate-90 w-10 md:w-12 lg:w-[50px]'
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