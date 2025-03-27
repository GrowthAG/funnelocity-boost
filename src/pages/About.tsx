
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Carlos Mendes',
      role: 'CEO & Co-fundador',
      bio: 'Especialista em marketing digital com mais de 10 anos de experiência. Apaixonado por automação e transformação digital.',
      image: '/lovable-uploads/efea1fc0-61ab-4104-bbee-bdb236109631.png',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Mariana Costa',
      role: 'CTO & Co-fundadora',
      bio: 'Desenvolvedora full-stack e especialista em IA. Liderou projetos de tecnologia em grandes empresas de SaaS.',
      image: '/lovable-uploads/b1082615-5b0d-4bd3-9b75-ee2724be2d23.png',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Rafael Mendonça',
      role: 'CMO',
      bio: 'Especialista em growth hacking e estratégias de aquisição. Escalou startups de 0 a milhões em receita.',
      image: '/lovable-uploads/efea1fc0-61ab-4104-bbee-bdb236109631.png',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  const timelineEvents = [
    {
      year: '2019',
      title: 'Fundação',
      description: 'Growth Funnels é fundada com a missão de democratizar o acesso a ferramentas avançadas de marketing e vendas.'
    },
    {
      year: '2020',
      title: 'Primeiro MVP',
      description: 'Lançamento da primeira versão do produto com foco em automação de e-mails e CRM básico.'
    },
    {
      year: '2021',
      title: 'Expansão',
      description: 'Integração com plataformas de mídia paga e adição de recursos avançados de CRM e automação.'
    },
    {
      year: '2022',
      title: 'Crescimento',
      description: 'Alcance de 500 clientes ativos e expansão da equipe para 25 colaboradores.'
    },
    {
      year: '2023',
      title: 'Integração de IA',
      description: 'Implementação de recursos de inteligência artificial para otimização de campanhas e análise preditiva.'
    }
  ];

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
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Por trás do <span className="text-gradient">GrowthFunnels</span>
            </h1>
            <p className="text-xl text-white/80">
              Somos obcecados por crescimento, automação e resultados reais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Nossa Missão</h2>
              <p className="text-white/80 text-lg mb-8">
                Democratizar o acesso a ferramentas avançadas de marketing e vendas, permitindo que empresas de todos os tamanhos cresçam de forma escalável e sustentável.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-white">Nossa Visão</h2>
              <p className="text-white/80 text-lg">
                Ser a plataforma definitiva de automação de marketing e vendas, impulsionando o crescimento de milhares de empresas em todo o Brasil e América Latina.
              </p>
            </div>
            <div className="glass-panel p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">Nossos Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-white/5 p-5 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-growth-green">{value.title}</h3>
                    <p className="text-white/80">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-white text-center">Time Fundador</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="feature-card p-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-growth-green">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-growth-green mb-3">{member.role}</p>
                  <p className="text-white/70 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.linkedin} className="text-white/60 hover:text-growth-green">
                      <LinkedinIcon size={20} />
                    </a>
                    <a href={member.social.twitter} className="text-white/60 hover:text-growth-green">
                      <TwitterIcon size={20} />
                    </a>
                    <a href={member.social.github} className="text-white/60 hover:text-growth-green">
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-white text-center">Nossa História</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-growth-green/30"></div>
              
              {/* Timeline events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 p-6 feature-card">
                      <h3 className="text-xl font-bold text-growth-green mb-2">{event.title}</h3>
                      <p className="text-white/80">{event.description}</p>
                    </div>
                    <div className="z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-growth-green flex items-center justify-center mx-4 text-black font-bold">
                        {event.year}
                      </div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-growth-green/20 to-growth-blue-electric/20 rounded-2xl py-16 px-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Junte-se a nós</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Faça parte da revolução em automação de marketing e vendas. Experimente o GrowthFunnels hoje mesmo e transforme seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/trial">
                <Button className="btn-primary" size="lg">
                  Experimente Grátis
                </Button>
              </Link>
              <Link to="/careers">
                <Button className="btn-outline" size="lg">
                  Vagas Abertas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
