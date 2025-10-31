import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center gap-2">
        <img 
            src="/logo-dark.png" 
            className="h-14 rounded-md flex items-center justify-center font-bold text-white text-2xl p-1 flex-shrink-0" 
        />
        {/* <span className="font-bold text-xl text-brand-dark">FINTEREST CAPITAL</span> */}
    </div>
);


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "Research", "PMS", "Investment Banking", "Investor Relations", "About", "Contact"];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-gray-600 hover:text-brand-orange transition-colors duration-200 font-medium">
                {link}
              </a>
            ))}
          </nav>
          <a href="#" className="hidden lg:inline-block bg-brand-dark text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
            Get Quote
          </a>
          <button className="lg:hidden text-brand-dark">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;