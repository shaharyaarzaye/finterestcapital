import React from 'react';

const Quote: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Make an Appointment</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-text my-6 leading-tight">
                           Request a free quote
                        </h2>
                        <form className="space-y-4">
                           <div className="grid sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" className="w-full p-4 bg-brand-gray rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-orange"/>
                                <input type="text" placeholder="Number" className="w-full p-4 bg-brand-gray rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-orange"/>
                           </div>
                           <input type="email" placeholder="Email" className="w-full p-4 bg-brand-gray rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-orange"/>
                           <textarea placeholder="Type Your Message" rows={5} className="w-full p-4 bg-brand-gray rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-orange"></textarea>
                           <button type="submit" className="bg-brand-dark text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                               Submit Message
                           </button>
                        </form>
                    </div>
                    <div className="reveal hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2835&auto=format&fit=crop" alt="Happy clients" className="rounded-2xl w-full h-full object-cover shadow-xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quote;
