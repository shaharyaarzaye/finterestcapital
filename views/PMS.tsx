import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

/* --------------------------------------------------------------- */
/*  Button – solid orange gradient, always visible                */
/* --------------------------------------------------------------- */

const Button = ({ children, href, className = '' }: { children: React.ReactNode; href: string; className?: string }) => (
  <RouterLink
    to={href}
    className={`inline-flex items-center border-2 border-orange-600 text-gray-600 px-6 py-3 rounded-full font-medium hover:bg-orange-600  transition-transform hover:shadow-lg hover:text-white ${className}`}
  >
    {children}
  </RouterLink>
);



/* --------------------------------------------------------------- */
/*  PMS page – everything in one file                              */
/* --------------------------------------------------------------- */
const PMS: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-linear-to-br from-blue-50 to-indigo-100 text-center">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-orange-950 drop-shadow-sm mb-6">
        Coming Soon
      </h1>

      {/* Copy */}
      <p className="max-w-2xl text-lg text-gray-700 mb-4">
        We’re almost ready to unveil our PMS — crafted for investors who want{' '}
        <span className="font-semibold text-orange-900">research‑led wealth creation</span>, not noise.
      </p>

      <p className="max-w-2xl text-lg text-gray-600 mb-12">
        Stay connected, and we’ll let you know when we go live.
      </p>

      {/* Buttons – each inside a solid‑white card so they never disappear */}
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">

            <div className="rounded-2xl px-2">
              <Button href="/contact"> Get Started Now <ArrowUpRight/></Button>
            </div>
            <div className="rounded-2xl px-2">
              <Button href='#'>Stay Updated</Button>
            </div>
      </div>
    </div>
  );
};

export default PMS;