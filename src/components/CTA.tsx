
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  "Comece em minutos, sem necessidade de código",
  "Migração gratuita de outras plataformas",
  "Suporte personalizado em português",
  "Garantia de 14 dias de reembolso"
];

const CTA = () => {
  return (
    <section className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel p-8 md:p-12 lg:p-16 bg-opacity-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-growth-blue-electric/20 to-growth-green/10 opacity-30"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Pronto para transformar seu negócio com o Growth Funnels?
              </h2>
              <p className="text-xl text-white/80">
                Comece hoje mesmo e veja resultados imediatos. Oferecemos um período de teste gratuito para você experimentar todas as funcionalidades.
              </p>
              
              <div className="space-y-4 pt-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-growth-green/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-growth-green" />
                    </div>
                    <p className="text-white/80">{benefit}</p>
                  </div>
                ))}
              </div>
                            
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
            </div>
            
            <div className="relative">
              <div className="bg-growth-blue-deep/30 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-white text-lg font-medium mb-6">Empresas que usam Growth Funnels economizam:</h3>
                
                <div className="space-y-6">
                  <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                    <p className="text-white/70 text-sm mb-2">Tempo ganho semanalmente</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">12+ horas</span>
                      <span className="text-growth-green ml-2">↑</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                    <p className="text-white/70 text-sm mb-2">Economia mensal em ferramentas</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">R$ 1.200+</span>
                      <span className="text-growth-green ml-2">↑</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                    <p className="text-white/70 text-sm mb-2">Aumento médio em vendas</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">37%</span>
                      <span className="text-growth-green ml-2">↑</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-growth-green text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg">
                ROI positivo em 30 dias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
