import React from 'react';

const Vision: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider border border-gray-300 px-3 py-1 rounded">Our Vision</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-text my-6 leading-tight">
                           "Sab Dhandha Excel pe nahi hota"
                        </h2>
                        <p className="text-gray-500 font-medium mb-8">Sustainable growth | Create Value | Risk management.</p>
                        <div className="space-y-4 text-gray-600">
                           <p>
                             Finterest Capital is a research house with a dedicated and hard-working team to help investors attain their financial freedom faster. Our vision is to create a global research house and create a tech enabled research platform. Hence in 2023, we launched our Mobile App.
                           </p>
                           <p>
                             We are amongst the first in India and only dedicated research company to have a tech enabled platform. We see India breaching $5 trillion economy by 2028 and our aim to at least make 5x in 5 years. Our first focus is "PROTECTION" of client's capital and provide tailor made investment solutions for equity investors across globe.
                           </p>
                        </div>
                        <div className="mt-10 flex items-center gap-8">
                            <a href="#" className="bg-brand-orange text-white font-semibold py-4 px-8 rounded-lg hover:bg-brand-orange-dark transition-transform duration-300 transform hover:scale-105">
                                Book A consultation
                            </a>
                            <div>
                                <p className="font-bold text-lg italic text-brand-text" style={{fontFamily: "'Brush Script MT', cursive"}}>Jonathon Doe</p>
                            </div>
                        </div>
                    </div>
                    <div className="reveal">
                        <div className="p-2 ">
                           <img src="/image1.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
