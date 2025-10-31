import React from "react";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Pricing from "../components/Pricing";
import GlobalPresence from "../components/GlobalPresence";
import Stats from "../components/Stats";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import Blog from "../components/Blog";
import Contact from "../components/Contact";


function Home() {
  return (
    <div className="bg-white text-brand-text overflow-x-hidden relative">
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
      <Footer/>
    </div>
  );
}

export default Home;
