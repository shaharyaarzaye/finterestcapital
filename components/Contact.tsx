import React from 'react';

// FIX: Added explicit types for props to resolve TypeScript errors.
const ContactInfoItem = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
           {icon}
        </div>
        <div>
            <h3 className="font-bold text-brand-text">{title}</h3>
            <div className="text-gray-500">{children}</div>
        </div>
    </div>
);

const Contact: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="reveal shadow-xl rounded-2xl overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019551347683!2d-122.4206796846816!3d37.7882519797566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4451%3A0x23f25c7a0d8c9371!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1681502464734!5m2!1sen!2s" 
                            width="100%" 
                            height="500" 
                            style={{ border: 0 }}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                     <div className="reveal">
                        <h2 className="text-4xl font-bold text-brand-text mb-8">Contact Us</h2>
                        <div className="space-y-8">
                            <ContactInfoItem title="Call Us 24/7" icon={<PhoneIcon/>}>
                                <a href="tel:+25621452156" className="hover:text-brand-orange">(+256) 2145.2156</a>
                            </ContactInfoItem>
                             <ContactInfoItem title="Work with us" icon={<MailIcon/>}>
                                <a href="mailto:info@invena.com" className="hover:text-brand-orange">info@invena.com</a>
                            </ContactInfoItem>
                             <ContactInfoItem title="Our Location" icon={<LocationIcon/>}>
                                <p>125 Town, United State</p>
                            </ContactInfoItem>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

export default Contact;