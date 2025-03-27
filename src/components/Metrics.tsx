
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const metrics = [
  {
    value: "147%",
    label: "Média de aumento nas taxas de conversão",
    description: "Nossos clientes experimentam um aumento significativo nas suas taxas de conversão."
  },
  {
    value: "73%",
    label: "Redução no tempo de fechamento de vendas",
    description: "Reduza o ciclo de vendas com automações inteligentes e acompanhamento eficiente."
  },
  {
    value: "12h+",
    label: "Economia de tempo semanal em tarefas manuais",
    description: "Recupere horas valiosas automatizando tarefas repetitivas de marketing e vendas."
  },
  {
    value: "3x",
    label: "Aumento na retenção de clientes",
    description: "Melhore o relacionamento e aumente a fidelidade dos seus clientes."
  }
];

const Metrics = () => {
  return (
    <section className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Resultados que <span className="text-gradient">transformam negócios</span>
          </h2>
          <p className="text-lg text-white/80">
            O Growth Funnels não só simplifica seus processos, mas também impulsiona seu crescimento com resultados mensuráveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="feature-card p-6 flex flex-col h-full"
            >
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-growth-green">{metric.value}</span>
                <ArrowUpRight className="ml-2 h-5 w-5 text-growth-green" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white leading-tight">{metric.label}</h3>
              <p className="text-white/70 text-sm mt-auto">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
