
import React from 'react';
import { 
  Users, 
  BarChart, 
  MessageSquare,
  Calendar, 
  Database, 
  Globe, 
  LineChart, 
  Zap, 
  Shield
} from 'lucide-react';

const features = [
  {
    icon: <Database className="h-6 w-6 text-[#d0ff00]" />,
    title: "CRM Completo",
    description: "Visualize toda a jornada do cliente em um único lugar. Organize leads, oportunidades e clientes em pipelines visuais para aumentar sua taxa de conversão."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-[#d0ff00]" />,
    title: "Automação de Marketing",
    description: "Crie sequências de emails, SMS e WhatsApp que se ativam automaticamente baseadas nas ações do seu lead, aumentando engajamento e vendas."
  },
  {
    icon: <Calendar className="h-6 w-6 text-[#d0ff00]" />,
    title: "Agendamento Inteligente",
    description: "Permita que seus leads agendem reuniões diretamente na sua agenda, eliminando o vai-e-vem de emails e reduzindo o ciclo de vendas."
  },
  {
    icon: <Globe className="h-6 w-6 text-[#d0ff00]" />,
    title: "Landing Pages",
    description: "Construa páginas de alta conversão em minutos usando nosso editor de arrastar e soltar, sem necessidade de conhecimento técnico."
  },
  {
    icon: <Zap className="h-6 w-6 text-[#d0ff00]" />,
    title: "Automação de Workflows",
    description: "Automatize processos repetitivos de vendas e marketing com fluxos de trabalho visuais que economizam tempo e reduzem erros humanos."
  },
  {
    icon: <LineChart className="h-6 w-6 text-[#d0ff00]" />,
    title: "Analytics em Tempo Real",
    description: "Monitore métricas de performance como CAC, LTV e ROI de campanhas, permitindo ajustes rápidos em sua estratégia de crescimento."
  },
  {
    icon: <Shield className="h-6 w-6 text-[#d0ff00]" />,
    title: "Segurança Avançada",
    description: "Proteja os dados dos seus clientes com criptografia de ponta a ponta e conformidade com LGPD, construindo confiança com sua base."
  },
  {
    icon: <Users className="h-6 w-6 text-[#d0ff00]" />,
    title: "Colaboração de Equipe",
    description: "Aumente a produtividade de vendas e marketing com ferramentas colaborativas que alinham equipes e eliminam silos de informação."
  },
  {
    icon: <BarChart className="h-6 w-6 text-[#d0ff00]" />,
    title: "Atribuição Avançada",
    description: "Identifique com precisão quais canais e campanhas geram mais receita, otimizando seu investimento em marketing de performance."
  }
];

const Features = () => {
  return (
    <section className="bg-black py-24 px-4 md:px-8 border-t border-[#d0ff00]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Todas as ferramentas para <span className="text-[#d0ff00]">automatizar</span> seu crescimento
          </h2>
          <p className="text-lg text-white/80">
            GrowthFunnels integra todas as funcionalidades essenciais para aquisição, nutrição e conversão de leads em uma única plataforma intuitiva, eliminando a necessidade de múltiplas ferramentas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-white/5 p-6 rounded-xl border border-[#d0ff00]/10 hover:border-[#d0ff00]/30 transition-all duration-300"
            >
              <div className="mb-4 p-2 rounded-lg bg-[#d0ff00]/10 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
