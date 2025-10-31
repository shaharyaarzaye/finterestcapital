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
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-50 border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/bull-logo.png" alt="Finterest Capital" className="w-12 h-12" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">FINTEREST CAPITAL</h1>
            <p className="text-xs text-gray-600 -mt-1">Our Research Your Growth</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#core" className="text-gray-700 hover:text-brand-orange font-medium">Core</a>
          <a href="#momentum" className="text-gray-700 hover:text-brand-orange font-medium">Momentum</a>
          <a href="#microcap" className="text-gray-700 hover:text-brand-orange font-medium">Microcap</a>
          <a href="#contact" className="text-gray-700 hover:text-brand-orange font-medium">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t px-6 py-4 space-y-3"
        >
          <a href="#core" className="block text-gray-700 hover:text-brand-orange font-medium">Core</a>
          <a href="#momentum" className="block text-gray-700 hover:text-brand-orange font-medium">Momentum</a>
          <a href="#microcap" className="block text-gray-700 hover:text-brand-orange font-medium">Microcap</a>
          <a href="#contact" className="block text-gray-700 hover:text-brand-orange font-medium">Contact</a>
        </motion.nav>
      )}
    </header>
  );
};

// ---------------------------------------------------------------
// CORE INVESTMENT PRODUCT
// ---------------------------------------------------------------
const CoreInvestmentProduct = () => (
  <Section id="core" className="bg-linear-to-b from-orange-50 via-white to-orange-50 pt-32">
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">CORE INVESTMENT PRODUCT</h1>
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
// MOMENTUM PRODUCT
// ---------------------------------------------------------------
const MomentumProduct = () => (
  <Section id="momentum" className="bg-linear-to-b from-white via-orange-50 to-white pt-32">
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">MOMENTUM PRODUCT</h1>
      <div className="w-32 h-1 bg-linear-to-r from-transparent via-brand-orange to-transparent mx-auto mt-6"></div>
    </motion.div>

    {/* OUR APPROACH */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">OUR APPROACH</motion.h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="space-y-6">
          <motion.div variants={fadeInUp} className="bg-linear-to-r from-orange-100 to-orange-50 p-8 rounded-3xl shadow-lg">
            <p className="text-gray-800 leading-relaxed">
              Our strategy here is to <strong className="text-brand-orange">catch trends</strong>, focus on <strong>CANSLIM</strong> and companies that are growing at more than <strong>50% YoY</strong>. We believe in catching trends at early stage to create <strong className="text-brand-orange">Alpha and Manifold returns</strong>.
            </p>
          </motion.div>
          <motion.blockquote variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-orange italic text-gray-700">
            <p className="text-lg">“Trading will help you to obtain the capital and investment will help you to grow it.”</p>
            <footer className="text-sm font-semibold text-brand-orange mt-2">— Radhakishan Damani</footer>
          </motion.blockquote>
        </div>
        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
          <div className="bg-linear-to-br from-orange-200 to-orange-300 rounded-2xl h-48 flex items-center justify-center shadow-lg"><Zap className="w-20 h-20 text-white" /></div>
          <div className="bg-linear-to-br from-gray-700 to-gray-900 rounded-2xl h-48 flex items-center justify-center shadow-lg"><BarChart3 className="w-20 h-20 text-white" /></div>
        </motion.div>
      </div>
    </motion.div>

    {/* CORE AREAS - Arrow Flow */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">CORE AREAS FOR MOMENTUM PRICE</motion.h2>
      <div className="max-w-5xl mx-auto">
        {[
          [{ num: '01', title: 'Quality', desc: 'Our first priority is to focus on the quality of the company and earnings.', color: 'bg-brand-orange' }, { num: '02', title: 'Earnings', desc: 'Quarterly sustainable earning breakout. Company should grow 40-50% QoQ', color: 'bg-gray-600' }],
          [{ num: '03', title: 'Margin of safety', desc: 'Risk management to buy at right price and valuation.', color: 'bg-brand-orange' }, { num: '04', title: 'Change', desc: 'Change in terms of new management, new product launch, new services', color: 'bg-gray-600' }],
          [{ num: '05', title: 'Disruption', desc: 'Any major disruption be it short term or long term.', color: 'bg-brand-orange' }],
        ].map((row, i) => (
          <div key={i} className="flex justify-center items-center gap-4 mb-8">
            {row.map((item, j) => (
              <React.Fragment key={j}>
                <motion.div variants={fadeInUp} className={`flex items-center ${item.color} text-white rounded-full px-6 py-3 font-bold shadow-lg`}>
                  <span className="text-lg mr-3">{item.num}</span>
                  <span className="text-sm">{item.title}</span>
                </motion.div>
                {j < row.length - 1 && <div className="w-16 h-1 bg-linear-to-r from-brand-orange to-gray-600"></div>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </motion.div>

    {/* CORE AREAS (contd.) - Reverse Flow */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">CORE AREAS OF MOMENTUM PRICE (contd.)</motion.h2>
      <div className="max-w-5xl mx-auto">
        {[
          [{ num: '06', title: 'Mismatch', desc: 'Demand supply mismatch tracking of commodity', color: 'bg-brand-orange' }, { num: '07', title: 'Market Share', desc: 'If the company is gaining market very fast by increasing capacities', color: 'bg-gray-600' }],
          [{ num: '08', title: 'Market Momentum', desc: 'For momentum to perform, market must be in right direction.', color: 'bg-brand-orange' }, { num: '09', title: 'Price', desc: 'Change in the price of Commodity which would further bring margin expansion.', color: 'bg-gray-600' }],
          [{ num: '10', title: 'Technical Indicators', desc: 'Considering price action & volume study which brings into notice about some change', color: 'bg-gray-600' }],
        ].map((row, i) => (
          <div key={i} className="flex justify-center items-center gap-4 mb-8 flex-row-reverse">
            {row.map((item, j) => (
              <React.Fragment key={j}>
                <motion.div variants={fadeInUp} className={`flex items-center ${item.color} text-white rounded-full px-6 py-3 font-bold shadow-lg`}>
                  <span className="text-lg mr-3">{item.num}</span>
                  <span className="text-sm">{item.title}</span>
                </motion.div>
                {j < row.length - 1 && <div className="w-16 h-1 bg-linear-to-l from-brand-orange to-gray-600"></div>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </motion.div>

    {/* FINANCIAL CHECKLIST */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-16">FINANCIAL CHECKLIST</motion.h2>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-2 bg-linear-to-r from-brand-orange via-gray-400 to-brand-orange top-12 w-full"></div>
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {[
              { icon: Target, title: 'Market Cap', desc: '&gt; 500 Cr' },
              { icon: BarChart3, title: 'QoQ Sales', desc: 'Double Digits' },
              { icon: TrendingUp, title: 'QoQ PAT', desc: '&gt; 30%' },
              { icon: Shield, title: 'Debt', desc: 'D/E &lt; 1.5x' },
              { icon: Zap, title: 'YoY Growth', desc: '50% + PE Expansion' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-xl flex flex-col items-center justify-center p-4 border-4 border-brand-orange mb-4">
                  <item.icon className="w-10 h-10 text-brand-orange mb-1" />
                  <span className="text-xs font-bold">{i + 1}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    {/* PRICING */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">ADVISORY PRODUCT DETAILS</motion.h2>
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <table className="w-full">
          <tbody>
            {[
              ['Time Horizon', 'Less than 1 year, target: 25-30% returns'],
              ['Number of stocks (annually)', '20-25'],
              ['Fees & Period', '₹26,399 for 12 months (incl. 18% GST)'],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 font-semibold text-gray-800 border-r">{row[0]}</td>
                <td className="px-6 py-4 text-gray-700">{row[1]}</td>
              </tr>
            ))}
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
// MICROCAP PRODUCT
// ---------------------------------------------------------------
const MicrocapProduct = () => (
  <Section id="microcap" className="bg-linear-to-b from-orange-50 via-white to-orange-50 pt-32">
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-16">
      <div className="flex justify-center mb-6">
        <BarChart3 className="w-12 h-12 text-brand-orange" />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">MICRO-CAP PRODUCT</h1>
      <p className="text-xl text-gray-700">FOCUSING ON THE UNHEARD</p>
      <div className="w-32 h-1 bg-linear-to-r from-transparent via-brand-orange to-transparent mx-auto mt-6"></div>
    </motion.div>

    {/* WHY NOW */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">In this market? Why?</motion.h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="space-y-6">
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start"><Check className="w-6 h-6 text-brand-orange mr-3 shrink-0" /> Smallcap Index back to 2017 levels — opportunity in down cycle</li>
            <li className="flex items-start"><Check className="w-6 h-6 text-brand-orange  mr-3 shrink-0" /> Every Midcap/Largecap started as micro/smallcap</li>
            <li className="flex items-start"><Check className="w-6 h-6 text-brand-orange  mr-3 shrink-0" /> Invest at seed stage → multifold returns</li>
          </ul>
        </div>
        <div className="bg-linear-to-br from-orange-200 to-orange-300 rounded-2xl h-64 flex items-center justify-center shadow-lg">
          <Package className="w-24 h-24 text-white" />
        </div>
      </div>
    </motion.div>

    {/* OUR FOCUS */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">OUR FOCUS</motion.h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { icon: Package, num: '01', title: 'Out of the box Investing', desc: 'Catch those companies which are unheard and stay away from market limelight' },
          { icon: AlertCircle, num: '02', title: 'Minimise Risk', desc: 'Filter proven management background, earnings visibility and scalable business potential' },
          { icon: Network, num: '03', title: 'Diversification', desc: 'Overall coverage of all sectors with optimum allocation' },
        ].map((item, i) => (
          <motion.div key={i} variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">{item.num}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* EXAMPLES TABLE */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">A Few Examples of Such Unheard Companies</motion.h2>
      <Card className="max-w-5xl mx-auto overflow-hidden">
        <table className="w-full text-center">
          <thead className="bg-brand-orange text-white">
            <tr>
              <th className="px-6 py-4">Companies</th>
              <th className="px-6 py-4">Market Cap growth</th>
              <th className="px-6 py-4">Time Horizon</th>
              <th className="px-6 py-4">MarketCap 10 years back (Crs)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Deepak Nitrite', '180x', '10 Years', '200'],
              ['Alkyl Amines', '150x', '10 Years', '120'],
              ['Avanti Feeds', '90x', '10 Years', '110'],
              ['Balaji Amines', '140x', '10 Years', '110'],
              ['Aarti Industries', '70x', '10 Years', '500'],
              ['Minda Industries', '120x', '10 Years', '300'],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                {row.map((cell, j) => (
                  <td key={j} className="px-6 py-4 font-medium">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </motion.div>

    {/* 5Ps */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">5Ps of Finterest Micro-cap Product</motion.h2>
      <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {[
          { title: 'Promoter', icon: <User className="w-8 h-8" /> },
          { title: 'Product', icon: <Box className="w-8 h-8" /> },
          { title: 'Potential', icon: <Rocket className="w-8 h-8" /> },
          { title: 'Price', icon: <Tag className="w-8 h-8" /> },
          { title: 'Planning', icon: <CalendarCheck className="w-8 h-8" /> }
        ].map((item, i) => (
          <motion.div key={i} variants={fadeInUp} className="text-center group">
            <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
              <div className="flex flex-col items-center">
                <div className="text-white">{item.icon}</div>
              </div>
            </div>
            <h3 className="font-bold text-gray-900">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* RETURN & PRICING */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">Return Expectations</motion.h2>
      <Card className="max-w-4xl mx-auto text-center p-12">
        <p className="text-5xl font-bold text-brand-orange mb-4">30% CAGR in 3 years</p>
        <p className="text-2xl font-bold text-gray-900 mb-6">₹25,058 (incl. 18% GST) / 1 year</p>
        <p className="text-lg text-gray-600 mb-8">10–15 stock ideas per year</p>
        <Button href="/contact" className="text-lg px-8 py-4">Get Started Now <ArrowUpRight className="ml-2 w-5 h-5" /></Button>
      </Card>
      <div className="text-center mt-12">
        <p className="text-xl font-bold text-red-600">RISK HAI TOH ISHQ HAI</p>
      </div>
    </motion.div>
  </Section>
);

// ---------------------------------------------------------------
// MAIN APP
// ---------------------------------------------------------------
const Research: React.FC = () => {
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
        <MomentumProduct />
        <MicrocapProduct />
      </div>
      <Footer/>
    </>
  );
};

export default Research;