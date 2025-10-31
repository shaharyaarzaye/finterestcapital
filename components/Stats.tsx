import React from 'react';

// FIX: Added explicit types for props to resolve TypeScript errors.
const StatItem = ({ value, label, icon }: { value: string, label: string, icon: React.ReactNode }) => (
    <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-lg">
        <div>{icon}</div>
        <div>
            <p className="text-4xl font-bold text-brand-dark">{value}</p>
            <p className="text-gray-500 uppercase text-sm tracking-wider">{label}</p>
        </div>
    </div>
);

const Stats: React.FC = () => {
    const statsData = [
        { value: "2500+", label: "Companies Analysed", icon: <img src="https://placehold.co/50x50/0D1A2E/white?text=A" alt="" className="rounded"/> },
        { value: "30+", label: "Years of Team Experience", icon: <img src="https://placehold.co/50x50/0D1A2E/white?text=E" alt="" className="rounded"/> },
        { value: "15+", label: "Country Presence", icon: <img src="https://placehold.co/50x50/0D1A2E/white?text=C" alt="" className="rounded"/> },
        { value: "1,000+", label: "Happy Investors", icon: <img src="https://placehold.co/50x50/0D1A2E/white?text=H" alt="" className="rounded"/> },
    ];

    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
                    {statsData.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;