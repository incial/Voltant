"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SHOWCASE_IMAGES = [
  "Image 13.png",
  "Image 14.png",
  "Image 15.png",
  "Image 34.png",
  "Image 33.png",
  "Image 32.png",
  "Image 31.png",
  "Image 28.png",
  "Image 21.png",
  "Image 30.png",
  "Image 29.png",
  "Image 24.png",
];

const RecentWorks = () => {
  const rowRef = useRef(null);
  const isPaused = useRef(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = useMemo(
    () =>
      SHOWCASE_IMAGES.map((name, index) => ({
        src: `/assets/images/showcaseimages/${encodeURIComponent(name)}`,
        alt: `Showcase ${index + 13}`,
        isImage22: name === "Image 22.png",
        isImage19: name === "Image 19.png",
      })),
    []
  );

  // Infinite scroll cards
  const infiniteCards = useMemo(
    () => [...cards.slice(-3), ...cards, ...cards.slice(0, 3)],
    [cards]
  );

  const scrollByCard = (direction) => {
    if (!rowRef.current) return;
    const card = rowRef.current.querySelector("[data-card]");
    if (!card) return;
    const cardWidth =
      card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
    rowRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const card = row.querySelector("[data-card]");
    if (!card) return;
    const cardWidth =
      card.offsetWidth + parseInt(getComputedStyle(card).marginRight);

    // Initial position
    row.scrollLeft = cardWidth * 3;

    // Auto-scroll
    const interval = setInterval(() => {
      if (!isPaused.current) {
        row.scrollLeft += 2;
      }
    }, 15);

    // Infinite loop handling
    const handleScroll = () => {
      const maxScroll = row.scrollWidth - row.clientWidth;
      if (row.scrollLeft >= maxScroll - cardWidth) {
        row.scrollLeft = cardWidth * 3;
      } else if (row.scrollLeft <= cardWidth) {
        row.scrollLeft = cardWidth * (cards.length + 2);
      }
    };

    row.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      row.removeEventListener("scroll", handleScroll);
    };
  }, [cards.length]);

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="w-full">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="font-bold text-[#7f7f7f] text-[28px] md:text-[40px] mb-2">
            Showcase of Excellence
          </h2>
          <p className="text-[#7f7f7f] text-base md:text-xl">
            A glimpse into our work, from installations to innovations
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="relative w-full overflow-hidden py-6">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollByCard(-1)}
            className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-gray-600 text-xl" />
          </button>

          <div
            ref={rowRef}
            className="flex gap-4 md:gap-6 w-full overflow-x-auto px-4 md:px-10 hide-scrollbar"
            style={{ scrollSnapType: "none" }}
          >
            {infiniteCards.map((card, idx) => (
              <div
                key={`${card.src}-${idx}`}
                data-card
                className={`h-[420px] w-[360px] shrink-0 rounded-xl md:rounded-2xl shadow-md overflow-hidden cursor-pointer ${
                  card.isImage22
                    ? "bg-[#d4824a]"
                    : card.isImage19
                    ? "bg-gray-900"
                    : ""
                }`}
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
                  className={`relative w-full h-full transition-transform duration-500 ${
                    hoveredCard === idx ? "scale-110" : "scale-100"
                  } ${card.isImage22 || card.isImage19 ? "p-6" : ""}`}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className={`${
                      card.isImage22 || card.isImage19
                        ? "object-contain"
                        : "object-cover"
                    }`}
                    sizes="360px"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollByCard(1)}
            className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Next"
          >
            <FaChevronRight className="text-gray-600 text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;