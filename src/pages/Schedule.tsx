
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Schedule = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Load the booking widget script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Headline Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Agende sua <span className="text-[#d0ff00]">Demonstração</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Escolha um horário conveniente para conversar com nossa equipe e descobrir como o GrowthFunnels 
              pode impulsionar seu negócio.
            </p>
          </div>
          
          {/* Booking Widget */}
          <div className="bg-[#111111] rounded-2xl p-4 md:p-6 shadow-lg mb-12">
            <div className="max-w-4xl mx-auto h-[800px]">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd" 
                style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }}
                scrolling="no" 
                id="MPETKLENngnBUUDATVAd_1744110056871" 
                title="Agendar Demonstração"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Schedule;
