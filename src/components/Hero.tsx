
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-gradient min-h-screen pt-24 pb-16 px-4 md:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8 animate-slide-up">
            <div>
              <span className="px-3 py-1 bg-growth-green/10 border border-growth-green/30 rounded-full text-growth-green text-sm font-medium">
                Nova plataforma de Marketing & CRM
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Automatize Marketing, CRM, Funis de Vendas e Calendários em um <span className="text-gradient">Único Lugar</span>
            </h1>
            <p className="text-xl text-white/80">
              Coloque suas operações no piloto automático com Inteligência Artificial.
              Automatize tarefas e interações com seus leads, enquanto você foca no crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/demo">
                <Button size="lg" className="btn-primary w-full sm:w-auto">
                  Agendar Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/trial">
                <Button size="lg" variant="outline" className="btn-outline w-full sm:w-auto">
                  Experimente Grátis
                </Button>
              </Link>
            </div>
            <div className="pt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-black border-2 border-growth-green/30 flex items-center justify-center text-white text-sm">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm">
                Mais de <span className="font-bold text-growth-green">1,200+</span> empresas usando Growth Funnels
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 relative animate-fade-in">
            <div className="browser-mockup">
              <div className="browser-bar">
                <div className="browser-dot"></div>
                <div className="browser-dot"></div>
                <div className="browser-dot"></div>
                <div className="browser-address">app.growthfunnels.com.br</div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/b1082615-5b0d-4bd3-9b75-ee2724be2d23.png" 
                  alt="Growth Funnels Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto bg-growth-green/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-growth-green transition-all">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                      <div className="absolute -inset-2 rounded-full border-2 border-growth-green/50 animate-pulse"></div>
                    </div>
                    <p className="mt-4 text-white font-semibold text-lg">Ver demo interativa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 right-6 glass-panel p-4 w-40 shadow-lg">
              <div className="text-white text-center">
                <p className="text-xs text-white/70">Conversão</p>
                <p className="text-2xl font-bold text-growth-green">+147%</p>
                <div className="h-1 w-full bg-white/20 rounded-full mt-2">
                  <div className="h-full w-3/4 bg-growth-green rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 glass-panel p-4 w-40 shadow-lg animate-float">
              <div className="text-white text-center">
                <p className="text-xs text-white/70">Automação</p>
                <p className="text-2xl font-bold text-growth-green">24/7</p>
                <div className="h-1 w-full bg-white/20 rounded-full mt-2">
                  <div className="h-full w-full bg-growth-green rounded-full"></div>
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
