
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-[#d0ff00]/10 border-y border-[#d0ff00]/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
          Pronto para acelerar seu crescimento?
        </h2>
        <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
          Junte-se a milhares de empresas que usam o GrowthFunnels para automatizar processos, converter mais leads e aumentar sua receita recorrente. <span className="font-medium text-[#d0ff00]">Garantia de 14 dias: receba 100% do valor de volta se não estiver satisfeito.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <a href="https://checkout.growthfunnels.com.br/pro" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#d0ff00] hover:bg-[#b3e600] text-black w-full sm:w-auto px-6 md:px-10 py-6 md:py-7 text-base md:text-lg font-bold shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transition-all duration-300">
              Contratar Plano PRO <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
          </a>
          <a href="https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-white text-white font-medium hover:bg-white/10 w-full sm:w-auto px-6 md:px-10 py-6 md:py-7 text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300">
              Agendar Demonstração
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
