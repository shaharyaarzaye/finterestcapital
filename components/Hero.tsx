'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  tagline?: string;
  title: string;
  src? : string;
  subtitle: string;
}

const BACKGROUND_IMAGE =
  '/Crousel-img/image.png';

const slides: Slide[] = [
  {
    title: 'Built on research,<br/> Driven by conviction.',
    src: 'Crousel-img/Image.png',
    subtitle:
      'Welcome to Finterest Capital',
  },
  {
    title: 'Insight Begins with Research.',
        src: 'Crousel-img/Image2.jpeg',

    subtitle:
      'We study businesses in depth — their numbers, management, and industry dynamics — to uncover clarity where most see complexity. Every idea starts with understanding.',
  },
  {
    title: 'Strategy that Stays Ahead.',
        src: 'Crousel-img/Image1.jpeg',

    subtitle:
      'We combine valuation awareness, earnings triggers, and disciplined allocation to build strategies that adapt through cycles and create long-term advantage.',
  },
  {
    title: ' Wealth Built on Conviction.',
        src: 'Crousel-img/Image3.jpeg',

    subtitle:
      'Our portfolios reflect belief backed by research. Steady compounding, smart risk-taking, and clear execution — that’s how conviction turns into wealth.',
  },
];

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

/* -------------------------------------------------
   Horizontal slide – slower spring, no Y shift
   ------------------------------------------------- */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 180, damping: 30, duration: 0.8 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 180, damping: 30, duration: 0.8 },
      opacity: { duration: 0.3 },
    },
  }),
};

export const Hero: React.FC<{ autoPlay?: number }> = ({ autoPlay = 7000 }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goPrev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };
  const goNext = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % slides.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(goNext, autoPlay);
    return () => clearInterval(id);
  }, [autoPlay, index]);

  const current = slides[index];

  return (
    <section
      className="relative h-[85vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Hero carousel"
                  style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}

    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Fixed container for absolute positioning */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Absolute container to prevent layout shift */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full text-center space-y-4"

            >
              {/* Tagline */}
              {current.tagline && (
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-200">
                  {current.tagline}
                </p>
              )}

              {/* Title */}
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
                dangerouslySetInnerHTML={{ __html: current.title }}
              />

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                {current.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 rounded-full hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-white/70 transition-all"
      >
        <ChevronLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 rounded-full hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-white/70 transition-all"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;  