
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#d0ff00]/10 border-y border-[#d0ff00]/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">
          Pronto para acelerar seu crescimento?
        </h2>
        <p className="text-xl text-white/80 mb-14 max-w-3xl mx-auto leading-relaxed">
          Junte-se a milhares de empresas que usam Funnels para automatizar processos, converter mais leads e aumentar sua receita recorrente.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="https://app.growthfunnels.com.br/trial" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#d0ff00] hover:bg-[#b3e600] text-black w-full sm:w-auto px-10 py-7 text-lg shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transition-all duration-300">
              Testar Grátis por 14 Dias <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto px-10 py-7 text-lg shadow-md hover:shadow-lg transition-all duration-300">
              Agendar Demonstração
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
