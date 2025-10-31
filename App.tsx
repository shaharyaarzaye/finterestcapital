import React, { useState } from 'react';
import { FaWhatsapp, FaCommentDots, FaTimes } from 'react-icons/fa';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import GlobalPresence from './components/GlobalPresence';
import Stats from './components/Stats';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Quote from './components/Quote';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="bg-white text-brand-text overflow-x-hidden relative">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Vision />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <GlobalPresence />
        <Stats />
        <Team />
        <Testimonial />
        <Quote />
        <Blog />
        <Contact />
      </main>
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Chatbot Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition flex items-center justify-center"
          aria-label="Chatbot"
        >
          <FaCommentDots size={22} />
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890" // 🔹 Replace with your WhatsApp number (e.g., 15551234567)
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1EBE5C] text-white p-4 rounded-full shadow-lg transition flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Chatbot Popup */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white border border-gray-300 rounded-lg shadow-xl z-50">
          <div className="flex justify-between items-center p-3 border-b bg-blue-600 text-white rounded-t-lg">
            <h4 className="font-semibold">Chatbot</h4>
            <button onClick={() => setChatOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="p-3 h-64 overflow-y-auto text-gray-600">
            👋 Hi there! How can I help you today?
          </div>
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-md text-sm focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-3 rounded-md text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
