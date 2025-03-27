
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
        <div className="py-12"></div> {/* Espaçamento adicional */}
        <Features />
        <div className="py-8"></div> {/* Espaçamento adicional */}
        <Metrics />
        <div className="py-8"></div> {/* Espaçamento adicional */}
        <Testimonials />
        <div className="py-12"></div> {/* Espaçamento adicional */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
