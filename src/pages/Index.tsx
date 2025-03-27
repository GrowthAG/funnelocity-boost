
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Metrics from '../components/Metrics';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Metrics />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
