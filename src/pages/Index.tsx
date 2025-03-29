import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Metrics from '../components/Metrics';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ComparisonSection from '../components/ComparisonSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main className="space-y-8 md:space-y-12"> {/* Usando space-y para controlar espaçamento uniforme */}
        <Hero />
        <Features />
        <Metrics />
        <ComparisonSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;