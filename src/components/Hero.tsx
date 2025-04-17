import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <div className="bg-black min-h-screen pt-20 pb-8 px-4 md:px-8 flex items-center py-[60px] my-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mx-auto max-w-4xl space-y-6 animate-slide-up">
          <div>
            <span className="px-3 py-1 bg-[#d0ff00]/10 border border-[#d0ff00]/30 rounded-full text-[#d0ff00] text-sm font-medium inline-block">
              🚀 Automatize seu crescimento
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            Transforme o Ciclo de Receita da Sua Empresa
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Plataforma completa de CRM, automação de marketing e geração de demanda criada para centralizar sua operação, automatizar processos e impulsionar seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
            <a href="https://checkout.growthfunnels.com.br/pro-mensal" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#d0ff00] hover:bg-[#b3e600] text-black w-full sm:w-auto px-6 py-6 text-lg font-bold">
                Contratar Plano PRO <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </a>
            <Link to="/schedule">
              <Button size="lg" variant="outline" className="border border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 w-full sm:w-auto px-6 py-6 text-lg font-medium">
                Agendar Demonstração
              </Button>
            </Link>
          </div>
          <div className="pt-6 md:pt-8 flex flex-col items-center justify-center space-y-4">
            <p className="text-white/80 text-base md:text-lg">
              Mais de <span className="font-bold text-[#d0ff00]">2,500+</span> empresas já automatizaram seu crescimento
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg">
              {["Substitui até 12 ferramentas", "Economia de até 90%", "Construtor de páginas", "Automações inteligentes"].map((feature, i) => <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#d0ff00] flex-shrink-0" />
                  <span className="text-white/90 text-sm md:text-base">{feature}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;