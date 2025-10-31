import React, { useState } from 'react';
import { Header } from './components/Header';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { type Page } from './types';

function App() {
  const [activePage, setActivePage] = useState<Page>('about');

  return (
    <div className="min-h-screen flex flex-col font-sans text-primary">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;