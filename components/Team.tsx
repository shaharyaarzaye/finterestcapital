import React from 'react';

// 1. Define an Interface for Props
interface TeamMemberCardProps {
    name: string;
    title: string;
    imgSrc: string;
}

// 2. Use the Interface for the component props
const TeamMemberCard = ({ name, title, imgSrc }: TeamMemberCardProps) => (
    <div className="text-center group transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative">
            <img src={imgSrc} alt={name} className="w-full rounded-2xl shadow-lg group-hover:shadow-2xl"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-brand-orange font-semibold">{title}</p>
            </div>
        </div>
    </div>
);

const Team: React.FC = () => {
    const team: TeamMemberCardProps[] = [ // Added type annotation for the team array for extra safety
        { name: "Aryan Oswal", title: "Technical Analyst", imgSrc: "/aryan.jpeg" },
        { name: "Alexander Alpha", title: "Senior Analyst", imgSrc: "/alexender.jpeg" },
        { name: "Dhvij Patel", title: "Analyst", imgSrc: "/dhvij.jpeg" },
    ];
    
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Our Experts</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-text mt-4 mb-16">Our Team Mates</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* 3. Apply the FIX by passing props explicitly */}
                    {team.map(member => (
                        <TeamMemberCard 
                            name={member.name} 
                            title={member.title} 
                            imgSrc={member.imgSrc} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;