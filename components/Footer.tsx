import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="bg-brand-orange text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6">Ascendia Heading</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between"><span>Week Days</span><span>09:00 - 24:00</span></div>
                            <div className="flex justify-between"><span>Saturday</span><span>08:00 - 03:00</span></div>
                            <div className="flex justify-between border-b border-white/20 pb-3"><span>Sunday</span><span>Day Off</span></div>
                        </div>
                        <a href="#" className="mt-6 inline-block w-full text-center bg-white text-brand-orange font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">Contact Us</a>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-brand-orange">Forum Support</a></li>
                            <li><a href="#" className="hover:text-brand-orange">Company History</a></li>
                            <li><a href="#" className="hover:text-brand-orange">Help & FAQ</a></li>
                            <li><a href="#" className="hover:text-brand-orange">Our Gallery</a></li>
                            <li><a href="#" className="hover:text-brand-orange">Pricing & Plans</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-6">&nbsp;</h3>
                         <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-brand-orange">About</a></li>
                            <li><a href="#" className="hover:text-brand-orange">My account</a></li>
                            <li><a href="#" className="hover:text-brand-orange">Services</a></li>
                            <li><a href="#" className="hover:text-brand-orange">Shop</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-6">Get Updates</h3>
                        <p className="text-gray-400 mb-4 text-sm">Sign up for our latest news & articles. We won't give you spam mails.</p>
                        <form className="flex">
                           <input type="email" placeholder="Enter Email Address" className="w-full bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-brand-orange"/>
                           <button type="submit" className="bg-brand-orange p-4 rounded-r-lg hover:bg-brand-orange-dark">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.789 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                           </button>
                        </form>
                         <p className="text-xs text-gray-500 mt-2">Note: We do not publish your email</p>
                    </div>
                </div>
            </div>
            <div className="bg-black/20 py-4 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Finterest Capital. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
