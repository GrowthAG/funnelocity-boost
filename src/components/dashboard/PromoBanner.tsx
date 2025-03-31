
import React from 'react';
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <div className="text-center mt-12 md:mt-16 py-8 md:py-10 glass-panel bg-black/40 border border-[#d0ff00]/20 rounded-xl backdrop-blur-sm">
      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
        Maximize seus resultados com nossos planos
      </h3>
      <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
        Desbloquele recursos avançados de analytics, automação e integrações com o plano certo para você.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          className="bg-[#d0ff00] hover:bg-[#b3e600] text-black px-5 md:px-6 py-2.5 md:py-3 text-base font-semibold shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transition-all duration-300" 
          size="lg"
          asChild
        >
          <a href="https://checkout.growthfunnels.com.br/pro-mensal">Ver Planos</a>
        </Button>
        <Button 
          className="border border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 hover:text-white px-5 md:px-6 py-2.5 md:py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300" 
          size="lg" 
          variant="outline"
          asChild
        >
          <a href="https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd">Agendar Demo</a>
        </Button>
      </div>
    </div>
  );
};

export default PromoBanner;
