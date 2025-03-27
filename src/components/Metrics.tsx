
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const metrics = [
  {
    value: "127%",
    label: "Aumento médio em conversões",
    description: "Nossos clientes experimentam melhorias significativas nas taxas de conversão após implementação."
  },
  {
    value: "68%",
    label: "Redução no ciclo de vendas",
    description: "Reduza o tempo entre o primeiro contato e o fechamento com automações inteligentes."
  },
  {
    value: "15h+",
    label: "Economia semanal em tarefas manuais",
    description: "Recupere horas valiosas automatizando tarefas repetitivas de marketing e vendas."
  },
  {
    value: "2.5x",
    label: "Aumento na retenção de clientes",
    description: "Melhore relacionamentos e aumente a fidelidade com engajamento automatizado."
  }
];

const Metrics = () => {
  return (
    <section className="bg-black py-10 md:py-14 px-4 md:px-8 border-t border-[#d0ff00]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white leading-tight">
            Resultados que <span className="text-[#d0ff00]">transformam negócios</span>
          </h2>
          <p className="text-base md:text-lg text-white/80">
            GrowthFunnels não apenas simplifica seus processos, mas impulsiona seu crescimento com resultados mensuráveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="feature-card bg-white/5 p-5 md:p-6 rounded-xl border border-[#d0ff00]/10 hover:border-[#d0ff00]/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-baseline mb-3">
                <span className="text-3xl md:text-4xl font-bold text-[#d0ff00]">{metric.value}</span>
                <ArrowUpRight className="ml-1 h-5 w-5 text-[#d0ff00]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white leading-tight">{metric.label}</h3>
              <p className="text-white/70 text-sm mt-auto">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
