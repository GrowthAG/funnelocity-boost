
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const isMobile = useIsMobile();

  const values = [
    {
      title: 'Inovação',
      description: 'Buscamos constantemente novas tecnologias e abordagens para oferecer as melhores soluções aos nossos clientes.'
    },
    {
      title: 'Simplicidade',
      description: 'Acreditamos que tecnologia complexa deve ter uma interface simples e intuitiva.'
    },
    {
      title: 'Resultados',
      description: 'Focamos em entregar resultados mensuráveis e impactantes para o crescimento dos negócios dos nossos clientes.'
    },
    {
      title: 'Transparência',
      description: 'Construímos relacionamentos baseados em confiança, comunicação clara e honestidade.'
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20 md:pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white mobile-friendly-text flex items-center justify-center">
              Por trás do <img src="/lovable-uploads/376df737-1d25-4a27-97fd-bbf94bbc1232.png" alt="GrowthFunnels" className="h-10 md:h-14 ml-2" />
            </h1>
            <p className="text-lg md:text-xl text-white/80 mobile-friendly-text">
              Somos obcecados por crescimento, automação e resultados reais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Nossa Missão</h2>
              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 mobile-friendly-text">
                Democratizar o acesso a ferramentas avançadas de marketing e vendas, permitindo que empresas de todos os tamanhos cresçam de forma escalável e sustentável.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Nossa Visão</h2>
              <p className="text-base md:text-lg text-white/80 mobile-friendly-text">
                Ser a plataforma definitiva de automação de marketing e vendas, impulsionando o crescimento de milhares de empresas em todo o Brasil e América Latina.
              </p>
            </div>
            <div className="glass-panel p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Nossos Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-white/5 p-4 md:p-5 rounded-lg">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-growth-green">{value.title}</h3>
                    <p className="text-sm md:text-base text-white/80">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-growth-green/20 to-growth-green/5 rounded-2xl py-10 md:py-16 px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Junte-se a nós</h2>
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto mobile-friendly-text">
              Faça parte da revolução em automação de marketing e vendas. Experimente o GrowthFunnels hoje mesmo e transforme seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary text-base" 
                size={isMobile ? "default" : "lg"}
              >
                <Link to="/pricing">Experimente Agora</Link>
              </Button>
              <Button 
                className="border border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 text-base" 
                size={isMobile ? "default" : "lg"} 
                variant="outline"
              >
                <Link to="/contact">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
