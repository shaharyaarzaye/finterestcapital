
import React from 'react';
import { RocketAnimation } from './components/RocketAnimation';

const App: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-indigo-900/30 to-gray-900"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <RocketAnimation />
        
        <h1 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          We're Launching Soon
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl text-gray-300">
          Our team is working hard to bring you something amazing. Stay tuned for an experience that's out of this world!
        </p>
        <div className="mt-10">
          <div className="flex w-full max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email for updates" 
              className="w-full px-4 py-3 text-gray-900 bg-gray-100 border border-transparent rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-3 font-semibold text-white bg-indigo-600 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300">
              Notify Me
            </button>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-4 text-gray-500 text-sm z-10">
        © {new Date().getFullYear()} Stellar Ventures. All rights reserved.
      </footer>
    </main>
  );
};

export default App;
