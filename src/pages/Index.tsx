
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Metrics from '../components/Metrics';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ExactComparisonTable from '@/components/shared/ExactComparisonTable';
import EnhancedComparisonTable from '@/components/shared/EnhancedComparisonTable';
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
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#d0ff00]/30 my-16 md:my-24">
            <EnhancedComparisonTable 
              replacementTools={replacementToolsData}
              totalSaving={totalSavingData}
              getCheckoutLink={getCheckoutLink}
            />
          </div>
        </div>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
