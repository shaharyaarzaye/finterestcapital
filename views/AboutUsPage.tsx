import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer'


const CollaborationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.75-4.472" />
    </svg>
);

const CraftsmanshipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22l-.648-1.437a3.375 3.375 0 00-2.456-2.456L12 17.25l1.437-.648a3.375 3.375 0 002.456-2.456L16.25 13l.648 1.437a3.375 3.375 0 002.456 2.456L20.75 18l-1.437.648a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

const SustainabilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.832 8.906a1.5 1.5 0 010 2.188l-4.5 4.5a1.5 1.5 0 01-2.122 0l-1.5-1.5a1.5 1.5 0 012.122-2.12l1.5 1.5 3.378-3.378a1.5 1.5 0 012.122 0z" clipRule="evenodd" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" clipRule="evenodd" />
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path d="M17.668 8.042A5.965 5.965 0 0118 9c0 3.314-2.686 6-6 6a5.965 5.965 0 01-.958-.032" />
        <path d="M17 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
    </svg>
);

export const AboutUsPage: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="pt-10">
            <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">Crafting Spaces, Together</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-secondary leading-relaxed">
                    At Venera, we see design as a conversation. A collaboration between artisan, designer, and you, to create spaces that don't just look beautiful, but feel deeply personal.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1556742533-3b4a03767123?q=80&w=1200&h=1500&auto=format&fit=crop"
                        alt="Designers collaborating in a creative studio"
                        className="w-full h-full object-cover transition-transform duration-300 ease-out"
                        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                    />
                </div>
                <div className="space-y-6 px-10 text-secondary leading-loose animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">Our Philosophy</h2>
                    <p>
                        We believe the most inspiring homes are a reflection of the people who inhabit them. Our philosophy is rooted in collaboration—working closely with skilled artisans and our clients to bring a shared vision to life. We focus on clean lines, natural materials, and the quiet power of a well-crafted piece.
                    </p>
                    <p>
                        Each item in our collection is a testament to this partnership. By sourcing sustainable materials and celebrating meticulous craftsmanship, we create pieces that are not just possessions, but companions for a life thoughtfully lived.
                    </p>
                </div>
            </div>

            <div className="my-20 md:mt-28 px-10">
                <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                     <h2 className="text-3xl font-semibold tracking-tight text-primary">Our Collaborative Spirit</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="text-center p-6 bg-white rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        <div className="flex justify-center mb-4"><CollaborationIcon /></div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Human-Centric Design</h3>
                        <p className="text-secondary">We design with you and for you, creating pieces that adapt to your life and tell your story.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: '650ms' }}>
                        <div className="flex justify-center mb-4"><CraftsmanshipIcon /></div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Artisan Partnerships</h3>
                        <p className="text-secondary">We honor the hands that make our furniture, fostering relationships with crafters who share our values.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                        <div className="flex justify-center mb-4"><SustainabilityIcon /></div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Mindful Materials</h3>
                        <p className="text-secondary">We are committed to conscious sourcing and ethical practices that respect both people and our planet.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};