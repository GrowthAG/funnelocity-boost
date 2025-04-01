
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Metrics from '../components/Metrics';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { replacementToolsData, totalSavingData } from '@/utils/dashboardData';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Define a function for checkout links
  const getCheckoutLink = (plan) => {
    const planLinks = {
      'PRO': 'https://checkout.growthfunnels.com.br/pro-mensal',
      'PLUS': 'https://checkout.growthfunnels.com.br/plus-mensal',
      'ENTERPRISE': 'https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd'
    };
    return planLinks[plan] || 'https://checkout.growthfunnels.com.br/pro-mensal';
  };
  
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main className="space-y-4 md:space-y-6 lg:space-y-8"> {/* Espaçamento reduzido entre seções */}
        <Hero />
        <Features />
        <Metrics />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
