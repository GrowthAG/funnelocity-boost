
import React from 'react';
import { 
  Users, 
  LineChart, 
  Smartphone,
  Calendar, 
  Layers, 
  MessageSquare, 
  BarChart4, 
  Workflow, 
  PanelLeft,
  FileText,
  Bot,
  Map
} from 'lucide-react';

const features = [
  {
    icon: <PanelLeft className="h-6 w-6 text-growth-green" />,
    title: "CRM com Funis Visuais",
    description: "Gerencie seus leads e oportunidades com um painel visual intuitivo e personalizável."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-growth-green" />,
    title: "WhatsApp, Email e SMS",
    description: "Envie mensagens automatizadas para seus leads e clientes em múltiplos canais de comunicação."
  },
  {
    icon: <Calendar className="h-6 w-6 text-growth-green" />,
    title: "Agenda e Agendamentos",
    description: "Sistema de agendamentos integrado com seu calendário, permitindo que clientes marquem horários automaticamente."
  },
  {
    icon: <Layers className="h-6 w-6 text-growth-green" />,
    title: "Landing Pages e Funis",
    description: "Construa landing pages de alta conversão e funis de vendas completos sem conhecimento técnico."
  },
  {
    icon: <Workflow className="h-6 w-6 text-growth-green" />,
    title: "Automação de Fluxos",
    description: "Crie fluxos de automação para nutrir leads e clientes em cada etapa da jornada de compra."
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-growth-green" />,
    title: "Dashboards em Tempo Real",
    description: "Visualize o desempenho do seu funil de vendas com dashboards personalizáveis atualizados em tempo real."
  },
  {
    icon: <Bot className="h-6 w-6 text-growth-green" />,
    title: "IA para Marketing",
    description: "Use Inteligência Artificial para criar campanhas mais eficientes e segmentar leads com precisão."
  },
  {
    icon: <FileText className="h-6 w-6 text-growth-green" />,
    title: "Propostas e Contratos",
    description: "Crie, envie e assine propostas e contratos digitalmente, agilizando o processo de fechamento."
  },
  {
    icon: <Map className="h-6 w-6 text-growth-green" />,
    title: "Jornada do Cliente",
    description: "Mapeie e otimize cada etapa da jornada do cliente para maximizar conversões e retenção."
  }
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-black to-growth-dark py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Todas as ferramentas que sua empresa precisa para <span className="text-gradient">crescer</span>
          </h2>
          <p className="text-lg text-white/80">
            O Growth Funnels reúne todas as ferramentas essenciais para automação de marketing, CRM e gestão de vendas em uma única plataforma intuitiva.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-2 rounded-lg bg-growth-green/10 border border-growth-green/20 w-fit">
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
