import React from 'react';

// FIX: Added explicit types for props to resolve TypeScript errors.
const StatItem = ({ value, label, icon }: { value: string, label: string, icon: React.ReactNode }) => (
    <div className="border border-gray-300 py-10 flex flex-col justify-center  items-center gap-6 p-6 reveal">
        <div>{icon}</div>
        <div >
            <p className="text-4xl text-center font-bold text-brand-dark">{value}</p>
            <p className="text-gray-500 uppercase text-sm tracking-wider">{label}</p>
        </div>
    </div>
);

const Stats: React.FC = () => {
    const statsData = [
        { value: "2500+", label: "Companies Analysed", icon: <img src="icon1.png" alt="" className="rounded"/> },
        { value: "30+", label: "Years of Team Experience", icon: <img src="icon2.png" alt="" className="rounded"/> },
        { value: "15+", label: "Country Presence", icon: <img src="icon3.png" alt="" className="rounded"/> },
        { value: "1,000+", label: "Happy Investors", icon: <img src="icon4.png" alt="" className="rounded"/> },
    ];

    return (
        <section className="py-10  ">
            <div className="  mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" grid sm:grid-cols-2 lg:grid-cols-4  reveal">
                    {statsData.map((stat, index) => (
                        <StatItem  {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Stats;