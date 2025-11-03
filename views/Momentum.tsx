import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import  Footer from '../components/Footer'
import {
  Check, ArrowUpRight, Phone, Mail, MapPin, Menu, ChevronRight, Star as StarIcon,
  TrendingUp, DollarSign, Shield, Zap, BarChart3, Target, AlertTriangle,
  Package, AlertCircle, Network, ArrowRight, User, Box, Rocket, Tag, CalendarCheck
} from 'lucide-react';

// ---------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// ---------------------------------------------------------------
// Reusable Components
// ---------------------------------------------------------------
const Section = ({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-24 ${className}`}>
    <div className="container mx-auto px-6 max-w-7xl">{children}</div>
  </section>
);

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 ${className}`}
  >
    {children}
  </motion.div>
);

const Button = ({ children, href, className = '' }: { children: React.ReactNode; href: string; className?: string }) => (
  <RouterLink
    to={href}
    className={`inline-flex items-center bg-brand-orange text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-all hover:shadow-lg ${className}`}
  >
    {children}
  </RouterLink>
);

// ---------------------------------------------------------------
// Header with Real Bull Logo

// ---------------------------------------------------------------
// CORE INVESTMENT PRODUCT
// ---------------------------------------------------------------
const CoreInvestmentProduct = () => (
  <Section id="core" className="bg-linear-to-b from-orange-50 via-white to-orange-50 pt-32">
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">Momentum  PRODUCT</h1>
      <div className="w-32 h-1 bg-linear-to-r from-transparent via-brand-orange to-transparent mx-auto mt-6"></div>
    </motion.div>

    {/* OUR APPROACH */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-4">OUR APPROACH</motion.h2>
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <span className="inline-block px-6 py-2 bg-brand-orange text-white font-semibold rounded-full text-lg">FUSION OF VALUE & MOMENTUM INVESTING</span>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { title: 'Value Investing', desc: 'It is a strategy where we buy the best businesses which are undervalued by the market participants or the value of a stock is set to expand looking at the upcoming growth triggers in near future.' },
          { title: 'Momentum Investing', desc: 'It is a special strategy we combine with value investing where we buy businesses at the best price at the best time dictated by long term technical trends. We believe, long term sectoral technical breakouts give a direction to look at immediate compoundable sectors.', example: true },
          { title: 'Capital Protection', desc: '“Return of Capital” is as important as “Return on Capital”. We lay more emphasis on the downside risk than the expected return.', highlight: true },
        ].map((item, i) => (
          <motion.div key={i} variants={fadeInUp} className={`relative bg-white rounded-3xl p-8 shadow-xl border ${item.highlight ? 'border-brand-orange' : 'border-gray-200'}`}>
            <div className="absolute -top-4 left-8 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-semibold">{item.title}</div>
            <div className="mt-6 space-y-3">
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              {item.example && <p className="text-brand-orange font-medium italic">Eg: Pharma sector in April & IT sector in June.</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* INVESTMENT PHILOSOPHY */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-16">INVESTMENT PHILOSOPHY</motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          { title: 'FINANCIALS', color: 'from-orange-100 to-orange-50', items: ['Growth Visible &gt; 15% For Next 1-3yrs', 'D/E &lt; 1.6', 'Positive Cash Flow Outlook', 'Sustainable ROCE/ROE'] },
          { title: 'SCUTTLEBUTT', color: 'from-amber-100 to-amber-50', items: ['Meeting Managements', 'Connecting With Dealers & Suppliers', 'Meeting Industry Competitors', 'Conference Calls'] },
          { title: 'TECHNICALS', color: 'from-yellow-100 to-yellow-50', items: ['Sectoral Index Breakouts', 'Multi Year Breakouts', 'Surpassing Crucial EMAs', 'High Volume Spurt along with Delivery %', '52week & ATHs'] },
          { title: 'MOAT', color: 'from-orange-100 to-orange-50', items: ['Competitive Edge', 'Sectoral Leadership', 'Management Pedigree', 'Large Addressable Market Size'] },
        ].map((quad, i) => (
          <motion.div key={i} variants={fadeInUp} className={`bg-linear-to-br ${quad.color} rounded-3xl p-8 shadow-lg border border-gray-200`}>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="inline-block w-3 h-3 bg-brand-orange rounded-full mr-3"></span>
              {quad.title}
            </h3>
            <ul className="space-y-3">
              {quad.items.map((text, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <Check className="w-5 h-5 text-brand-orange mr-3 mt-0.5 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* THINGS WE AVOID */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">THINGS WE AVOID IN OUR INVESTMENTS:</motion.h2>
      <div className="max-w-4xl mx-auto space-y-2">
        {['Corporate Governance Issues', 'Highly Pledged', 'Expensive Valuations', "Sectors Which We Don't Understand", 'Daily Stock Price Movements', 'High Leveraged Balance Sheet', 'No Business Growth Visibility Over 2 Years'].map((avoid, i) => (
          <motion.div key={i} variants={fadeInUp} className={`px-6 py-4 rounded-lg font-medium text-gray-800 ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
            {avoid}
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* ADVISORY DETAILS */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">ADVISORY PRODUCT DETAILS</motion.h2>
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <table className="w-full">
          <tbody>
            {[
              ['Diversification', 'Diversified into multiple sectors'],
              ['Target Market Cap', 'Multi-cap'],
              ['Time Horizon', '6-8 qtrs'],
              ['Number of stocks (annually)', '15-20'],
              ['Exit calls to be provided', ''],
              ['Recommended Max Exposure to a stock', 'upto 10%'],
              ['Benchmark', 'BSE 500'],
              ['Reporting', 'Monthly Performance Statement'],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 font-semibold text-gray-800 border-r border-gray-200">{row[0]}</td>
                <td className="px-6 py-4 text-gray-700">{row[1]}</td>
              </tr>
            ))}
            <tr className="bg-brand-orange">
              <td className="px-6 py-5 font-bold text-lg text-white">Fees & Period</td>
              <td className="px-6 py-5 text-lg font-bold text-white">₹31,199 for 1 year<br /><span className="text-sm font-normal text-orange-100">(inclusive of 18% GST)</span></td>
            </tr>
          </tbody>
        </table>
        <div className="p-6 bg-linear-to-r from-brand-orange to-orange-600 -m-px rounded-b-2xl text-center">
          <Button href="/contact" className="text-lg px-8 py-4">Get Started Now <ArrowUpRight className="ml-2 w-5 h-5" /></Button>
        </div>
      </Card>
    </motion.div>
  </Section>
);


// ---------------------------------------------------------------
// MAIN APP
// ---------------------------------------------------------------
const Momentum: React.FC = () => {
  // Handle hash-based navigation when the page loads
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        :root { --brand-orange: #f97316; }
        .text-brand-orange { color: var(--brand-orange); }
        .bg-brand-orange { background-color: var(--brand-orange); }
        .border-brand-orange { border-color: var(--brand-orange); }
      `}</style>
      <div className="bg-linear-to-b from-orange-50 to-white min-h-screen">
        <CoreInvestmentProduct />
      </div>
      <Footer/>
    </>
  );
};

export default Momentum;