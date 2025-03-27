
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
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="py-10 md:py-24"></div>
        <Features />
        <div className="py-16 md:py-24"></div>
        <Metrics />
        <div className="py-16 md:py-24"></div>
        <Testimonials />
        <div className="py-16 md:py-24"></div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
