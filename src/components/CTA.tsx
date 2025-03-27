
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-28 px-4 md:px-8 bg-[#d0ff00]/10 border-y border-[#d0ff00]/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
          Pronto para acelerar seu crescimento?
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Junte-se a milhares de empresas que usam Funnels para automatizar processos, converter mais leads e aumentar sua receita recorrente.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link to="/trial">
            <Button size="lg" className="bg-[#d0ff00] hover:bg-[#b3e600] text-black w-full sm:w-auto px-8 py-6 text-lg">
              Testar Grátis por 14 Dias <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/demo">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto px-8 py-6 text-lg">
              Agendar Demonstração
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
