import React from 'react';
import { Quote, Star, UserCircle2 } from 'lucide-react';
import { image } from 'framer-motion/client';

interface TestimonialData {
    quote: string;
    author: string;
    title: string;
    imageUrl?: string;
}


const testimonials = [
    {
        quote: "One of the finest in advisory. Every pick is deeply researched with a commitment to maximize returns. No dud picks in two years. Best analytical insights. Congrats on momentum product!",
        author: "Bhavik Merchant",
        title: "VP MCB, Yes Bank",
        imageUrl: "/testm3.png"
    },
    {
        quote: "Associated since 2021. Picks like Balaji Amines turned 5x and many multibaggers. Thoroughly researched, safe, and market-resilient. Deep business and financial insight. Portfolio booming. Excited for momentum product!",
        author: "Sachin Arora",
        title: "Head Data & AI, AWS India",
        imageUrl: "/testm2.png"
    },
    {
        quote: "Exceptional advisory with deep research and proven results. Every recommendation is backed by solid analysis and investor-first thinking. A rare blend of financial acumen and market foresight.",
        author: "Ashwin Shanbhag",
        title: "M&A Consultant, MSC Consulting, Germany",
        imageUrl: "/testm1.png"

    }
];

const TestimonialCard: React.FC<{ data: TestimonialData }> = ({ data }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-7 lg:p-9 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-brand-orange/30 hover:-translate-y-1 group">
            <div className="flex flex-col md:flex-row items-start gap-5">
                {/* Icon Avatar */}
                <div className="shrink-0">
                    <div className="w-14 h-14 rounded-full bg-linear-to-br from-brand-orange to-brand-brown flex items-center justify-center shadow-md ">
                       <img src={data.imageUrl} alt="testimonail image" className="rounded-full"/>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <Quote className="w-7 h-7 text-brand-orange mb-3 group-hover:text-brand-orange/60 transition-colors" />

                    <blockquote className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 line-clamp-6 lg:line-clamp-none">
                        "{data.quote}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4.5 h-4.5 fill-brand-orange text-brand-orange" />
                        ))}
                    </div>

                    {/* Author */}
                    <div>
                        <p className="font-bold text-brand-text text-lg">{data.author}</p>
                        <p className="text-brand-orange text-sm font-medium">{data.title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonial: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-linear-to-b from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal fade-in-up">
                    <span className="inline-block px-4 py-1.5 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest rounded-full">
                        Trusted by Investors
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold bg-clip-text text-black bg-linear-to-r from-brand-brown to-brand-orange">
                        Real Results, Real Voices
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
                        Join thousands of smart investors who’ve grown their wealth with research-backed insights.
                    </p>
                </div>

                {/* Testimonial Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((t, i) => (
                        <div key={i} className="reveal" style={{ animationDelay: `${i * 150}ms` }}>
                            <TestimonialCard data={t} />
                        </div>
                    ))}
                </div>

                {/* Optional CTA or Dots */}
                {/* <div className="flex justify-center mt-12">
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    i === 0 ? 'w-8 bg-brand-orange' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Testimonial;