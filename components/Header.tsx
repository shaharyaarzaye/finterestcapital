import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <img
      src="/logo-dark.png"
      className="h-14 rounded-md flex items-center justify-center font-bold text-white text-2xl p-1 shrink-0"
    />
  </div>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { Text: 'Home', src: '/' },
    { Text: 'PMS', src: '/pms' },
    { Text: 'Investment Banking', src: '/investmentbanking' },
    { Text: 'Investor Relations', src: '/investorrelations' },
    { Text: 'About', src: '/about' },
    { Text: 'Contact', src: '/contact' },
  ];

  const researchDropdown = [
    { Text: 'Core', src: '/research/core' },
    { Text: 'Momentum', src: '/research/momentum' },
    { Text: 'Microcap', src: '/research/microcap' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            {/* Research with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsResearchOpen(true)}
                onClick={() => setIsResearchOpen(!isResearchOpen)}
                className="text-gray-600 hover:text-brand-orange transition-colors duration-200 font-medium flex items-center gap-1"
              >
                Research
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isResearchOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isResearchOpen && (
                <div
                  onMouseEnter={() => setIsResearchOpen(true)}
                  onMouseLeave={() => setIsResearchOpen(false)}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                >
                  {researchDropdown.map((item) => (
                    <Link
                      key={item.src}
                      to={item.src}
                      onClick={() => setIsResearchOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-brand-orange hover:text-white transition-colors duration-200"
                    >
                      {item.Text}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.src}
                to={link.src}
                className="text-gray-600 hover:text-brand-orange transition-colors duration-200 font-medium"
              >
                {link.Text}
              </Link>
            ))}
          </nav>

          <a
            href="#"
            className="hidden lg:inline-block bg-brand-dark text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Get Quote
          </a>

          <button className="lg:hidden text-brand-dark">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;