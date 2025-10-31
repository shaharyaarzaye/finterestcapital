import React from 'react';

// FIX: Added explicit types for props to resolve TypeScript errors.
const PresenceItem = ({icon, title, children}: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="text-center">
        <div className="w-16 h-16 bg-brand-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            {icon}
        </div>
        <h3 className="font-bold text-brand-text">{title}</h3>
        <p className="text-gray-500 text-sm">{children}</p>
    </div>
);

const GlobalPresence: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Our Global Presence</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-text mt-4 mb-12">
                    We know how to manage business globally
                </h2>
                <div className="flex justify-center mb-16">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/BlankMap-World-states-grey.svg/1280px-BlankMap-World-states-grey.svg.png" alt="World Map" className="max-w-4xl w-full opacity-60"/>
                </div>
                 <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <PresenceItem title="Managing wealth beyond borders" icon={<img src="https://placehold.co/40x40/F9A826/white?text=W" alt="" className="rounded"/>}>
                        through insight, precision, and partnership.
                    </PresenceItem>
                    <PresenceItem title="Empowering global investors" icon={<img src="https://placehold.co/40x40/F9A826/white?text=G" alt="" className="rounded"/>}>
                        with India-focused intelligence and on-ground expertise.
                    </PresenceItem>
                    <PresenceItem title="Seamlessly connecting global capital" icon={<img src="https://placehold.co/40x40/F9A826/white?text=C" alt="" className="rounded"/>}>
                        with India's most promising opportunities.
                    </PresenceItem>
                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;