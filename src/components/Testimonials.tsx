
import React from 'react';
import { Star, StarIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Automação inteligente que gera novas oportunidades. O Funnels tem impulsionado nossos processos, oferecendo automações inteligentes que abrem portas e fortalecem nosso desempenho. É uma ferramenta completa e indispensável para o nosso crescimento.",
    author: "Fabio",
    position: "BLDN Digital",
    avatar: "/lovable-uploads/1afce23a-a9c6-4720-a725-f3a850ce22be.png",
    stars: 5
  },
  {
    quote: "Totalmente integrado e eficiente. Com o Funnels, aceleramos a implementação de equipes e processos, alcançando resultados expressivos e mensuráveis em apenas uma semana. Uma solução prática, integrada e transformadora.",
    author: "Yves",
    position: "Wysion",
    avatar: "/lovable-uploads/fa9ce812-73e9-4b7a-8a2d-8d4bec1b9366.png",
    stars: 5
  },
  {
    quote: "Resultados acelerados com o Funnels! O Funnels revolucionou nosso marketing com um CRM poderoso, aliado a estratégias de tráfego precisas. Alcançamos resultados rápidos, consistentes e surpreendentes, superando todas as expectativas.",
    author: "Daniel Lestinge",
    position: "BlueForecasts",
    avatar: "/lovable-uploads/ec2d3fe2-1f5f-4a70-9f28-8af8a18ffe4d.png",
    stars: 5
  },
  {
    quote: "O Funnels transformou nosso gerenciamento de clientes. A interface intuitiva e as funcionalidades completas simplificaram o dia a dia da agência. O suporte é ágil e eficiente, apoiando todas das nossas estratégias fortemente.",
    author: "Amanda",
    position: "Lindoya",
    avatar: "/lovable-uploads/23a9d576-f113-4771-b2d3-ff5962bb0ae4.png",
    stars: 5
  }
];

const Testimonials = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight">
            O que nossos clientes <span className="text-gradient">estão dizendo</span>
          </h2>
          <p className="text-base md:text-lg text-white/80">
            Centenas de empresas já transformaram seus resultados usando o Growth Funnels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="feature-card p-5 md:p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-[#d0ff00]/10"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#d0ff00] fill-[#d0ff00]" />
                ))}
              </div>
              <blockquote className="text-sm md:text-base font-medium mb-4 text-white/90 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-[#d0ff00]/30">
                  <AvatarImage 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-growth-green/20 text-white text-xs">
                    {testimonial.author.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
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
