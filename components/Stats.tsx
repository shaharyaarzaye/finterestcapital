import React, { useEffect, useRef, useState } from 'react';

// FIX: Added explicit types for props to resolve TypeScript errors.
const StatItem = ({ value, label, icon }: { value: string, label: string, icon: React.ReactNode }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const target = parseInt(value.replace(/\D/g, '')) || 0; // Extract number from "2500+", "30+", etc.
    const suffix = value.replace(/[\d,]+/g, ''); // Keep "+" or other suffix
    const duration = 2000; // Animation duration in ms
    const steps = 60; // Smoothness
    const increment = target / (duration / (1000 / steps));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, 1000 / steps);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [target, increment]);

    return (
        <div ref={ref} className="border border-gray-300 py-10 flex flex-col justify-center items-center gap-6 p-6 reveal">
            <div>{icon}</div>
            <div>
                <p className="text-4xl text-center font-bold text-brand-dark">
                    {count.toLocaleString()}
                    {suffix}
                </p>
                <p className="text-gray-500 uppercase text-sm tracking-wider">{label}</p>
            </div>
        </div>
    );
};

const Stats: React.FC = () => {
    const statsData = [
        { value: "2500+", label: "Companies Analysed", icon: <img src="icon1.png" alt="" className="rounded"/> },
        { value: "30+", label: "Years of Team Experience", icon: <img src="icon2.png" alt="" className="rounded"/> },
        { value: "15+", label: "Country Presence", icon: <img src="icon3.png" alt="" className="rounded"/> },
        { value: "1,000+", label: "Happy Investors", icon: <img src="icon4.png" alt="" className="rounded"/> },
    ];

    return (
        <section className="py-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 reveal">
                    {statsData.map((stat, index) => (
                        <StatItem  {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;