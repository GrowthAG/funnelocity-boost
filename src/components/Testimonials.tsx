
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Com o Growth Funnels, aumentamos nossas conversões em 173% em apenas 3 meses. A automação de follow-ups transformou completamente nossa taxa de fechamento.",
    author: "Ana Silva",
    position: "CEO, Agência Impulso Digital",
    stars: 5
  },
  {
    quote: "Conseguimos centralizar todas as nossas operações de marketing e vendas em uma única plataforma. Economizamos tempo e dinheiro cancelando 4 outras ferramentas.",
    author: "Carlos Mendes",
    position: "Diretor de Marketing, TechSolutions",
    stars: 5
  },
  {
    quote: "O painel de CRM visual é simplesmente incrível. Consigo ver exatamente onde cada lead está no funil e o que precisa ser feito para avançá-lo.",
    author: "Mariana Costa",
    position: "Gerente de Vendas, EduTech",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-growth-blue-deep to-black py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            O que nossos clientes <span className="text-gradient">estão dizendo</span>
          </h2>
          <p className="text-lg text-white/80">
            Centenas de empresas já transformaram seus resultados usando o Growth Funnels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="feature-card p-8 flex flex-col h-full"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-growth-green fill-growth-green" />
                ))}
              </div>
              <blockquote className="text-lg font-medium mb-6 text-white/90 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-white/70 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
