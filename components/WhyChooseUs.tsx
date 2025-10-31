import React from 'react';

// FIX: Added explicit types for props to resolve TypeScript errors.
const FeatureCard = ({ number, title, children, highlighted = false }: { number: string, title: string, children: React.ReactNode, highlighted?: boolean }) => (
    <div className={`p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 ${highlighted ? 'bg-brand-orange text-white shadow-2xl' : 'bg-white text-brand-text hover:shadow-xl'}`}>
        <span className={`text-5xl font-bold ${highlighted ? 'text-white/50' : 'text-brand-orange/20'}`}>
            {number}
        </span>
        <h3 className="text-2xl font-bold mt-4 mb-3">{title}</h3>
        <p className={`${highlighted ? 'text-white/90' : 'text-gray-500'}`}>{children}</p>
    </div>
);

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12 items-start reveal">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-text leading-tight">Why Choose Us?</h2>
                        <p className="mt-4 text-gray-500">
                            Whether you're looking to switch to solar energy or upgrade your cable services, our sales and marketing company is here to help.
                        </p>
                    </div>
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                        <FeatureCard number="01" title="Strategic and Diversified Portfolio Selection">
                           We blend top-down sector analysis with bottom-up stock picking to create a balanced and high-conviction portfolio that adapts to evolving market dynamics.
                        </FeatureCard>
                        <FeatureCard number="02" title="Disciplined Entry and Exit Strategy" highlighted>
                           Every recommendation is backed by clear valuation metrics and catalysts - ensuring optimal timing for both investment entry and profit booking.
                        </FeatureCard>
                    </div>
                </div>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 reveal">
                    <FeatureCard number="03" title="Ground-Level Research">
                       Our insights go beyond numbers — with management interactions, plant visits, and channel checks giving us an edge in assessing real business momentum.
                    </FeatureCard>
                    <FeatureCard number="04" title="Data-Driven Process">
                       We combine quantitative screeners with qualitative insights to identify high-potential companies early in their growth trajectory.
                    </FeatureCard>
                    <FeatureCard number="05" title="Hassle-Free Process">
                       We handle all the research, negotiations, and paperwork for you, making the process of finding.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;