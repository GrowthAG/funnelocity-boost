
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
    icon: <PanelLeft className="h-6 w-6 text-[#d0ff00]" />,
    title: "CRM com Funis Visuais",
    description: "Gerencie leads e oportunidades com painéis visuais personalizáveis. Acompanhe todo o ciclo de vendas em uma interface intuitiva."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-[#d0ff00]" />,
    title: "WhatsApp, Email e SMS",
    description: "Comunique-se com seus leads e clientes em múltiplos canais. Envie mensagens automatizadas e personalizadas no momento certo."
  },
  {
    icon: <Calendar className="h-6 w-6 text-[#d0ff00]" />,
    title: "Agenda e Agendamentos",
    description: "Sistema de agendamentos inteligente integrado com seu calendário. Permita que clientes marquem horários sem intervenção manual."
  },
  {
    icon: <Layers className="h-6 w-6 text-[#d0ff00]" />,
    title: "Landing Pages e Funis",
    description: "Construa landing pages de alta conversão e funis de vendas completos sem conhecimento técnico usando nosso editor drag & drop."
  },
  {
    icon: <Workflow className="h-6 w-6 text-[#d0ff00]" />,
    title: "Automação de Fluxos",
    description: "Crie fluxos de automação complexos para nutrir leads e clientes. Automatize tarefas repetitivas e aumente a eficiência da equipe."
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-[#d0ff00]" />,
    title: "Dashboards em Tempo Real",
    description: "Visualize métricas importantes com dashboards atualizados em tempo real. Tome decisões baseadas em dados concretos e tendências."
  },
  {
    icon: <Bot className="h-6 w-6 text-[#d0ff00]" />,
    title: "IA para Marketing",
    description: "Utilize Inteligência Artificial para otimizar campanhas, segmentar leads com precisão e criar conteúdo personalizado automaticamente."
  },
  {
    icon: <FileText className="h-6 w-6 text-[#d0ff00]" />,
    title: "Propostas e Contratos",
    description: "Crie, envie e assine propostas e contratos digitalmente. Acompanhe status e receba notificações de abertura e assinatura."
  },
  {
    icon: <Map className="h-6 w-6 text-[#d0ff00]" />,
    title: "Jornada do Cliente",
    description: "Mapeie cada etapa da jornada do cliente para maximizar conversões e retenção. Identifique gargalos e oportunidades de melhoria."
  }
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-black to-growth-dark py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Todas as ferramentas que sua empresa precisa para <span className="text-[#d0ff00]">crescer</span>
          </h2>
          <p className="text-lg text-white/80">
            O GrowthFunnels reúne todas as ferramentas essenciais para automação de marketing, CRM e gestão de vendas em uma única plataforma intuitiva, permitindo que você gerencie todo o ciclo de receita de forma integrada e eficiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-2 rounded-lg bg-[#d0ff00]/10 border border-[#d0ff00]/20 w-fit">
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
