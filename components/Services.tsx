import React from 'react';

// FIX: Added explicit types for props to resolve TypeScript errors.
const ServiceCard = ({ icon, title, children, align }: { icon: React.ReactNode, title: string, children: React.ReactNode, align: string }) => (
    <div className={`flex flex-col ${align === 'right' ? 'items-end text-right' : 'items-start text-left'} space-y-3`}>
        <div className="w-16 h-16 bg-brand-orange/10 rounded-lg flex items-center justify-center">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-brand-text">{title}</h3>
        <p className="text-gray-500 max-w-sm">{children}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Our Services</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-text mt-4 mb-16">
                    INDIA'S ONLY RESEARCH APP
                </h2>
                <div className="grid md:grid-cols-3 items-center gap-10 md:gap-4">
                    <div className="space-y-12 reveal">
                        <ServiceCard title="Comprehensive Coverage" align="right" icon={<img src="https://placehold.co/40x40/F9A826/white?text=C" alt="" className="rounded"/>}>
                            We analyse 5,000+ companies every quarter to identify high-potential sectors and businesses, supported by insights from management concalls.
                        </ServiceCard>
                         <ServiceCard title="On-Ground Intelligence" align="right" icon={<img src="https://placehold.co/40x40/F9A826/white?text=I" alt="" className="rounded"/>}>
                            Our team conducts plant visits, channel checks, and industry interactions to validate business fundamentals.
                        </ServiceCard>
                    </div>

                    <div className="reveal">
                        <img src="/mobile-img.png" alt="Finterest App" className="max-w-xs mx-auto transform "/>
                    </div>

                    <div className="space-y-12 reveal">
                         <ServiceCard title="Actionable Research" align="left" icon={<img src="https://placehold.co/40x40/F9A826/white?text=A" alt="" className="rounded"/>}>
                            We prepare in-depth research reports backed by clear investment rationale, and closely track every corporate development, announcement, and macro event.
                        </ServiceCard>
                         <ServiceCard title="Investor Guidance" align="left" icon={<img src="https://placehold.co/40x40/F9A826/white?text=G" alt="" className="rounded"/>}>
                            We provide timely Buy, Sell, and Book Profit recommendations to help investors stay ahead of market moves.
                        </ServiceCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;