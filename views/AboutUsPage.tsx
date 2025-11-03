import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer'
import { Dices, TextSearch, Binoculars } from 'lucide-react'

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
                <div className=" overflow-hidden px-5 ">
                    <img
                        src="/aboutus.jpeg"
                        alt="Designers collaborating in a creative studio"
                        className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-out"
                        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                    />
                </div>
                <div className="space-y-6 px-10 text-secondary leading-loose animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">Our Philosophy</h2>
                    <p>
                        Finterest Capital-Founded by Nikhil Oswal and headquartered in Mumbai is a SEBI-registered equity research and advisory firm built on a simple idea: serious research creates lasting wealth.With a global client base of over 1,000 investors, we focus on research-driven strategies that uncover value, identify early-stage market leaders, and generate consistent alpha over time.
                    </p>
                    <p>
                        We are India’s first Research Advisory to launch a dedicated mobile app, enabling clients to access our recommendations, portfolio updates, and market insights in real time.Our expertise lies in discovering under-the-radar companies poised for institutional recognition and long-term growth. Alongside equity research, we also provide clients with access to pre-IPO and FPO opportunities, extending our commitment to helping investors participate in India’s evolving capital growth story.                    </p>
                </div>
            </div>

            <div className="my-20 md:mt-28 px-10">
                <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <h2 className="text-3xl font-semibold tracking-tight text-primary">How we Work</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="text-center p-6 bg-white rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        <div className="flex justify-center mb-4"><TextSearch /></div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Data-Backed Decisions</h3>
                        <p className="text-secondary">Every idea stems from structured screening, forensic accounting, and ratio analysis so conviction is built on evidence, not noise.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: '650ms' }}>
                        <div className="flex justify-center mb-4"><Binoculars /></div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Research Beyond Spreadsheets</h3>
                        <p className="text-secondary">Numbers tell part of the story; our fieldwork and management connects complete it, giving us a 360° view of each opportunity.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                        <div className="flex justify-center mb-4"><Dices /></div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Alpha Through Strategy</h3>
                        <p className="text-secondary">We focus on valuation discipline, growth catalysts, and inflection points turning data into strategy and insight into performance.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};