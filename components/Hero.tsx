import React from 'react';

const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 text-center reveal">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4">WELCOME! START GROWING YOUR BUSINESS TODAY</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Impressive Solutions<br />Crafted for Your Goal
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          We specialize in delivering impressive, results-driven solutions tailored to your unique goals. Whether you're scaling a startup.
        </p>
      </div>

      <button aria-label="Previous slide" className="absolute left-4 md:left-10 z-10 p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
        <ChevronLeftIcon />
      </button>
      <button aria-label="Next slide" className="absolute right-4 md:right-10 z-10 p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
        <ChevronRightIcon />
      </button>
    </section>
  );
};

export default Hero;
