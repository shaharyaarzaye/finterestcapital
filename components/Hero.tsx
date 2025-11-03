'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  tagline?: string;
  title: string;
  subtitle: string;
}

const BACKGROUND_IMAGE =
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop';

const slides: Slide[] = [
  {
    tagline: 'WELCOME! START GROWING YOUR BUSINESS TODAY',
    title: 'Impressive Solutions<br />Crafted for Your Goal',
    subtitle:
      'We specialize in delivering impressive, results-driven solutions tailored to your unique goals. Whether you\'re scaling a startup.',
  },
  {
    tagline: 'INVEST SMARTER • GROW FASTER',
    title: 'Unlock Wealth with Precision & Performance',
    subtitle:
      'Empowering Ambitious Investors to Create Real Wealth, The Smarter Way. Driven by deep research, market foresight, and proven strategies, Finterest Capital is where tomorrow’s leaders invest today. Our unique approach blends momentum, value, and discovery to seize opportunities others miss—delivering compound growth and capital safety.',
  },
  {
    title: 'Content Needed',
    subtitle:
      'With every move backed by forensic analytics and decades of domain expertise, we don’t just help you grow wealth—we help you build a legacy.',
  },
  {
    title: 'Content Needed',
    subtitle:
      'Experience data-driven, opportunity-focused investing for India’s new-age markets. At Finterest Capital, growing and safeguarding your money isn’t just our job—it’s our conviction.',
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
      style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
      aria-roledescription="carousel"
      aria-label="Hero carousel"
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