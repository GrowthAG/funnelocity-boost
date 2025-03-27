
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Metrics from '../components/Metrics';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="py-8 md:py-16"></div> {/* Espaçamento ajustado para mobile e desktop */}
        <Features />
        <div className="py-6 md:py-12"></div> {/* Espaçamento ajustado para mobile e desktop */}
        <Metrics />
        <div className="py-6 md:py-12"></div> {/* Espaçamento ajustado para mobile e desktop */}
        <Testimonials />
        <div className="py-8 md:py-16"></div> {/* Espaçamento ajustado para mobile e desktop */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
