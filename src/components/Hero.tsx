
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-16 px-4 md:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8 animate-slide-up">
            <div>
              <span className="px-3 py-1 bg-[#d0ff00]/10 border border-[#d0ff00]/30 rounded-full text-[#d0ff00] text-sm font-medium">
                🚀 Automatize seu crescimento
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Transforme o Ciclo de Receita da Sua Empresa com o <span className="text-[#d0ff00]">GrowthFunnels</span>
            </h1>
            <p className="text-xl text-white/80">
              Plataforma completa de CRM, automação de marketing e geração de demanda criada para acelerar suas vendas e impulsionar o crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
            <div className="pt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-black border-2 border-[#d0ff00]/40 flex items-center justify-center text-[#d0ff00] text-sm">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-sm">
                Mais de <span className="font-bold text-[#d0ff00]">2,500+</span> empresas já automatizaram seu crescimento
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative animate-fade-in">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl border border-[#d0ff00]/20">
                <img 
                  src="/lovable-uploads/84ede28a-0919-4309-ba2c-876a53719806.png" 
                  alt="GrowthFunnels Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg shadow-lg w-48 border border-[#d0ff00]/20">
                <div className="text-center">
                  <p className="text-xs text-white/70">Aumento de Conversão</p>
                  <p className="text-2xl font-bold text-[#d0ff00]">+127%</p>
                  <div className="h-1 w-full bg-white/10 rounded-full mt-2">
                    <div className="h-full w-3/4 bg-[#d0ff00] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
