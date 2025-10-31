import React from 'react';

const Core: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-50 h-screen bg-linear-to-br from-blue-50 to-indigo-100 text-center">
      <h1 className="text-6xl font-extrabold text-orange-950 drop-shadow-sm">
        Coming Soon
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We’re working hard to bring you something amazing.
      </p>
    </div>
  );
};

export default Core;
