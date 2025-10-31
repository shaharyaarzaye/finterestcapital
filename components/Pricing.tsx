import React from 'react';

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;

const PricingCard = ({ plan, price, description, features, highlighted = false }) => (
    <div className={`border rounded-2xl p-8 flex flex-col transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 ${highlighted ? 'bg-white' : 'bg-brand-gray/50 border-transparent'}`}>
        <h3 className="text-lg font-bold uppercase text-brand-orange">{plan}</h3>
        <p className="mt-2 text-sm text-gray-500 h-16">{description}</p>
        <div className="my-6">
            <span className="text-5xl font-bold text-brand-text">₹{price}</span>
            <span className="text-gray-500">/year</span>
        </div>
        <a href="#" className={`w-full text-center font-semibold py-3 rounded-lg border-2 transition-colors duration-300 ${highlighted ? 'bg-brand-orange border-brand-orange text-white hover:bg-brand-orange-dark hover:border-brand-orange-dark' : 'bg-transparent border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white'}`}>
            Learn More
        </a>
        <ul className="mt-8 space-y-4 text-sm text-gray-600 grow">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);


const Pricing: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Pricing Plans</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-text mt-4">Pricing That Suits Your Needs.</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-500">
                    Whether you're a startup on a tight budget or a multinational corporation looking for comprehensive support.
                </p>
                <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16 text-left">
                    <PricingCard 
                        plan="Core"
                        price="49"
                        description="We focus on building your wealth over time by investing in businesses with solid fundamentals and strong moat."
                        features={[
                            "Investment Horizon: Long Term - 4 to 8 quarters",
                            "Vision: Compounding at least 25% p.a",
                            "Number of Ideas/year: 15 to 20"
                        ]}
                    />
                    <PricingCard 
                        plan="Momentum"
                        price="69"
                        description="Short-term trading ideas powered by Technical Analysis, Price Action, Earnings Breakouts, and Sector Rotation."
                        features={[
                            "Investment Horizon: Short Term - 2 - 3 quarters",
                            "Vision: 25-30%",
                            "Number of Ideas/year: 25 to 30"
                        ]}
                        highlighted
                    />
                     <PricingCard 
                        plan="Microcap"
                        price="99"
                        description="Identifying under-the-radar companies with the potential to become market leaders and attract institutional buying."
                        features={[
                            "Investment Horizon: Long Term - 6 to 12 quarters",
                            "Vision: 10x in 10 years",
                            "Number of Ideas: 12 to 15"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
