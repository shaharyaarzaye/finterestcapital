import React, { useState, useEffect } from 'react';
import { useCountUp } from './hooks/useCountUp';

export const GrowthCapitalBox: React.FC = () => {
  const animatedCount = useCountUp(300, 2000);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        bg-white rounded-2xl shadow-xl max-w-sm md:max-w-md  overflow-hidden
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="p-8 text-center">
        <div className="flex items-baseline justify-center">
          <span className="text-7xl sm:text-7xl font-extrabold text-amber-700">
            ₹{animatedCount}
          </span>
          <span className="text-6xl sm:text-7xl font-extrabold text-amber-700">
            +
          </span>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-slate-800 mt-2">
          crores in Growth Capital
        </p>
        <p className="text-slate-600 mt-4 text-base sm:text-lg">
          through equity for listed companies on NSE and BSE as exclusive advisors.
        </p>
      </div>

      {/* Centered amber line + CTA */}
      <div className="pt-4 pb-6 px-6">
        {/* Perfectly centered line */}
        <div className="w-full h-1.5 bg-amber-700 rounded-full mx-auto mb-6" />

        <p className="text-center text-lg font-semibold text-amber-800">
          Looking to raise funds through equity?
        </p>
        <p className="text-center text-lg font-semibold text-amber-800 mt-2">
          Let's connect.
        </p>
      </div>
    </div>
  );
};