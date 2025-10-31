import React, { useState } from 'react';
import Footer from '../components/Footer'
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const CollaborationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.75-4.472" />
    </svg>
);


export const ContactPage: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('submitted');
        }, 1500);
    };

    return (
        <div className="pt-10">
            <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">Let's Create Together</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-secondary leading-relaxed">
                    Whether you're a homeowner with a vision, an interior designer, or a creative interested in collaboration, we'd love to start a conversation.
                </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-semibold tracking-tight text-primary">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="mt-1"><LocationIcon /></div>
                                <div>
                                    <h3 className="font-semibold text-primary">Our Studio</h3>
                                    <p className="text-secondary">123 Design Avenue, Suite 100<br />Metropolis, 10101</p>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <div className="mt-1"><CollaborationIcon /></div>
                                <div>
                                    <h3 className="font-semibold text-primary">Partnerships</h3>
                                    <p className="text-secondary hover:text-primary transition-colors"><a href="mailto:partners@venera.com">partners@venera.com</a></p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="mt-1"><EmailIcon /></div>
                                <div>
                                    <h3 className="font-semibold text-primary">General Inquiries</h3>
                                    <p className="text-secondary hover:text-primary transition-colors"><a href="mailto:hello@venera.com">hello@venera.com</a></p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                               <div className="mt-1"><PhoneIcon /></div>
                                <div>
                                    <h3 className="font-semibold text-primary">Customer Support</h3>
                                    <p className="text-secondary hover:text-primary transition-colors"><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {status === 'submitted' ? (
                             <div className="flex flex-col items-center justify-center h-full bg-background rounded-md p-8 text-center animate-fade-in-up">
                                <h3 className="text-2xl font-semibold text-primary">Thank You!</h3>
                                <p className="mt-2 text-secondary">Your message has been sent. We'll be in touch shortly.</p>
                             </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Full Name</label>
                                    <input type="text" name="name" id="name" required className="block w-full px-4 py-3 border border-border rounded-md shadow-sm placeholder-accent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email Address</label>
                                    <input type="email" name="email" id="email" required className="block w-full px-4 py-3 border border-border rounded-md shadow-sm placeholder-accent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
                                </div>
                                 <div>
                                    <label htmlFor="inquiry" className="block text-sm font-medium text-secondary mb-1">Inquiry Type</label>
                                    <select id="inquiry" name="inquiry" required className="block w-full px-4 py-3 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white">
                                        <option>General Question</option>
                                        <option>Order Support</option>
                                        <option>Design Collaboration</option>
                                        <option>Press Inquiry</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Message</label>
                                    <textarea id="message" name="message" rows={5} required className="block w-full px-4 py-3 border border-border rounded-md shadow-sm placeholder-accent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"></textarea>
                                </div>
                                <div>
                                    <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-accent transition-colors">
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};