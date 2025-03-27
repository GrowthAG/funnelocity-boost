
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-16 px-4 md:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mx-auto max-w-4xl space-y-8 animate-slide-up">
          <div>
            <span className="px-3 py-1 bg-[#d0ff00]/10 border border-[#d0ff00]/30 rounded-full text-[#d0ff00] text-sm font-medium">
              🚀 Automatize seu crescimento
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            Transforme o Ciclo de Receita da Sua Empresa
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Plataforma completa de CRM, automação de marketing e geração de demanda criada para centralizar sua operação, automatizar processos e impulsionar seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Link to="/trial">
              <Button size="lg" className="bg-[#d0ff00] hover:bg-[#b3e600] text-black w-full sm:w-auto">
                Testar Grátis por 14 Dias <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="border border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 w-full sm:w-auto">
                Agendar Demonstração
              </Button>
            </Link>
          </div>
          <div className="pt-8 flex flex-col items-center justify-center space-y-4">
            <p className="text-white/80 text-sm">
              Mais de <span className="font-bold text-[#d0ff00]">2,500+</span> empresas já automatizaram seu crescimento
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg">
              {[
                "Substitui até 12 ferramentas",
                "Economia de até 90%",
                "Construtor de páginas",
                "Automações inteligentes"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#d0ff00] flex-shrink-0" />
                  <span className="text-white/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
