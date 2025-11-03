
import React from 'react';

const Star: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`absolute text-yellow-300 ${className}`}
    style={style}
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);


export const RocketAnimation: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Stars */}
      <Star className="w-3 h-3 top-2 left-10 animate-pulse" />
      <Star className="w-2 h-2 top-20 left-2 animate-[pulse_2s_infinite]" style={{ animationDelay: '0.5s' }} />
      <Star className="w-4 h-4 top-5 right-8 animate-[pulse_1.5s_infinite]" />
      <Star className="w-2 h-2 top-24 right-1 animate-[pulse_2.5s_infinite]" style={{ animationDelay: '1s' }} />
      <Star className="w-3 h-3 bottom-10 left-5 animate-[pulse_1.8s_infinite]" />
      <Star className="w-2 h-2 bottom-2 right-12 animate-pulse" style={{ animationDelay: '0.2s' }}/>
      <Star className="w-4 h-4 bottom-20 right-4 animate-[pulse_2.2s_infinite]" />


      {/* Rocket Group */}
      <div className="absolute animate-[lift_4s_ease-in-out_infinite]">
        {/* Smoke Clouds */}
        <div className="absolute -bottom-16 w-full flex justify-center items-center">
            <div className="absolute w-20 h-20 bg-gray-400 rounded-full animate-[drift_8s_ease-out_infinite]" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute w-24 h-24 bg-gray-500 rounded-full animate-[drift-reverse_10s_ease-out_infinite]"></div>
            <div className="absolute w-16 h-16 bg-gray-400 rounded-full animate-[drift_9s_ease-out_infinite]" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Flame */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-12 h-20">
          <div className="absolute bottom-0 w-full h-full rounded-t-full bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300 animate-[flicker_0.5s_ease-in-out_infinite]"></div>
        </div>

        {/* Rocket Body */}
        <svg
          width="100"
          height="200"
          viewBox="0 0 100 200"
          className="relative z-10 drop-shadow-2xl"
        >
          {/* Main Body */}
          <path d="M50 10 C 80 50, 80 150, 50 190 C 20 150, 20 50, 50 10 Z" fill="url(#grad-body)" />
          <defs>
            <linearGradient id="grad-body" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#e2e8f0', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#cbd5e1', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Nose Cone */}
          <path d="M50 0 L 60 25 C 55 23, 45 23, 40 25 L 50 0 Z" fill="#b91c1c" />
          
          {/* Window */}
          <circle cx="50" cy="60" r="12" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
          <circle cx="50" cy="60" r="8" fill="#0c4a6e" />

          {/* Left Fin */}
          <path d="M20 130 L 5 180 L 25 170 Z" fill="url(#grad-fin)" />

          {/* Right Fin */}
          <path d="M80 130 L 95 180 L 75 170 Z" fill="url(#grad-fin)" />
          <defs>
            <linearGradient id="grad-fin" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#991b1b' }} />
              <stop offset="100%" style={{ stopColor: '#ef4444' }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
