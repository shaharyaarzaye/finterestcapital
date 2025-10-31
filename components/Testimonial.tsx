import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 reveal">
                <div className="text-center">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Our Testimonial</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-text mt-4 mb-16">Our Client Reviews</h2>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 items-center bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="order-2 md:order-1 bg-brand-brown text-white p-10 lg:p-16 h-full flex flex-col justify-center">
                       <p className="text-2xl italic leading-relaxed">
                            "I can't recommend The Gourmet Haven enough. It's a place for special occasions, date nights, or whenever you're in the mood for a culinary adventure. The combination of exceptional."
                       </p>
                       <div className="mt-8">
                           <p className="font-bold text-lg text-white">William Henry</p>
                           <p className="text-brand-orange/80">Founder, Vertex Agency</p>
                       </div>
                    </div>
                     <div className="order-1 md:order-2">
                        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop" alt="William Henry" className="w-full h-full object-cover min-h-[400px]"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
