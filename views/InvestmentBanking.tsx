import Footer from '@/components/Footer';
import React from 'react';

const InvestmentBanking: React.FC = () => {
  return (
    <div className="pt-32">
      <h1 className="text-5xl text-center md:text-6xl font-bold text-gray-900 mb-3">
        Investment Banking
      </h1>
      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mt-6" />

      <p className="mt-10 text-lg px-20 text-gray-600">
        At our Investment Banking Division, we specialize in driving growth for NSE and BSE-listed companies through Growth Capital Raising, Debt Syndication, and Value-driven Financial Advisory. Our team brings deep market insight and strong investor networks to structure and execute funding solutions that align with each company’s stage of growth and long-term vision. We work closely with promoters and management teams to unlock capital efficiency and accelerate expansion.
      </p>

      <p className="mt-10 text-lg px-20 pb-10 text-gray-600">
        Beyond fundraising, our expertise extends to comprehensive valuation consultancy, transaction structuring, and corporate advisory across sectors. We combine analytical precision with an entrepreneurial approach, ensuring our clients receive tailored, execution-ready strategies in every engagement. From sourcing equity investors to optimizing debt portfolios, we deliver investment banking services designed to create enduring shareholder value.
      </p>

      {/* Animated Logo Marquee */}
      {/* ==== Animated Logo Marquee – NO OVERLAP ==== */}
<div className="overflow-hidden bg-gray-50 py-10 mt-10 mb-20">
  <div className="flex animate-marquee whitespace-nowrap">
    {/* 1st copy – the scrolling part
    <div className="flex items-center gap-12 px-4">
      <img src="inv-logos/logo1.png" alt="Logo 1" className="h-20 w-auto" />
      <img src="inv-logos/logo2.png" alt="Logo 2" className="h-20 w-auto" />
      <img src="inv-logos/logo3.webp" alt="Logo 3" className="h-20 w-auto" />
      <img src="inv-logos/logo4.png" alt="Logo 4" className="h-20 w-auto" />
      <img src="inv-logos/logo5.png" alt="Logo 5" className="h-20 w-auto" />
      <img src="inv-logos/logo6.png" alt="Logo 6" className="h-20 w-auto" />
    </div> */}

    {/* 2nd copy – makes the loop seamless */}
    <div className="flex items-center gap-12 px-4">
      <img src="inv-logos/logo1.png" alt="Logo 1" className="h-20 w-auto" />
      <img src="inv-logos/logo2.png" alt="Logo 2" className="h-20 w-auto" />
      <img src="inv-logos/logo3.webp" alt="Logo 3" className="h-20 w-auto" />
      <img src="inv-logos/logo4.png" alt="Logo 4" className="h-20 w-auto" />
      <img src="inv-logos/logo5.png" alt="Logo 5" className="h-20 w-auto" />
      <img src="inv-logos/logo6.png" alt="Logo 6" className="h-20 w-auto" />
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default InvestmentBanking;