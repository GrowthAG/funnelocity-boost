
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Automação inteligente que gera novas oportunidades. O Funnels tem impulsionado nossos processos, oferecendo automações inteligentes que abrem portas e fortalecem nosso desempenho. É uma ferramenta completa e indispensável para o nosso crescimento.",
    author: "Fabio Boldrini",
    position: "CEO da BLDN",
    avatar: "/lovable-uploads/76071022-36a4-436d-b967-40b405aa5348.png",
    stars: 5
  },
  {
    quote: "Totalmente integrado e eficiente. Com o Funnels, aceleramos a implementação de equipes e processos, alcançando resultados expressivos e mensuráveis em apenas uma semana. Uma solução prática, integrada e transformadora.",
    author: "Henrique Prado",
    position: "Gestor de Marketing",
    avatar: "/lovable-uploads/28b22c78-8b09-4993-9304-088fc6a22e3d.png",
    stars: 5
  },
  {
    quote: "Resultados acelerados com o Funnels! O Funnels revolucionou nosso marketing com um CRM poderoso, aliado a estratégias de tráfego precisas. Alcançamos resultados rápidos, consistentes e surpreendentes, superando todas as expectativas.",
    author: "Daniel Lestinge",
    position: "BlueForecast",
    avatar: "/lovable-uploads/88654284-fd43-4ec7-b610-7c068119ff81.png",
    stars: 5
  },
  {
    quote: "O Funnels transformou nosso gerenciamento de clientes. A interface intuitiva e as funcionalidades completas simplificaram o dia a dia da agência. O suporte é ágil e eficiente, apoiando todas das nossas estratégias fortemente.",
    author: "André Lima",
    position: "Diretor de Operações",
    avatar: "/lovable-uploads/85e849b6-0017-45f5-b4aa-d9c00e9236e5.png",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight">
            O que nossos clientes <span className="text-gradient">estão dizendo</span>
          </h2>
          <p className="text-base md:text-lg text-white/80">
            Centenas de empresas já transformaram seus resultados usando o Growth Funnels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="feature-card p-6 flex flex-col h-full"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#d0ff00] fill-[#d0ff00]" />
                ))}
              </div>
              <blockquote className="text-base font-medium mb-4 text-white/90 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto flex items-center gap-3">
                {testimonial.avatar && (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="h-10 w-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                  <p className="text-white/70 text-xs">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
