
import React from 'react';
import { 
  Users, 
  LineChart, 
  Smartphone,

  Calendar, 
  Layers, 
  MessageSquare, 
  BarChart4, 
  Combine, 
  PanelLeft 
} from 'lucide-react';

const features = [
  {
    icon: <PanelLeft className="h-6 w-6 text-growth-blue-electric" />,
    title: "CRM e Pipeline Visual",
    description: "Gerencie seus leads e oportunidades com um painel visual intuitivo e personalizável."
  },
  {
    icon: <Combine className="h-6 w-6 text-growth-blue-electric" />,
    title: "Automação de Marketing",
    description: "Crie fluxos de automação para nutrir leads e clientes em cada etapa da jornada."
  },
  {
    icon: <Layers className="h-6 w-6 text-growth-blue-electric" />,
    title: "Page Builder",
    description: "Construa landing pages de alta conversão sem precisar de conhecimentos técnicos."
  },
  {
    icon: <Users className="h-6 w-6 text-growth-blue-electric" />,
    title: "Formulários e Captura de Leads",
    description: "Capture leads com formulários personalizados e qualifique-os automaticamente."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-growth-blue-electric" />,
    title: "Marketing de WhatsApp e Email",
    description: "Envie mensagens personalizadas em massa para seus clientes por WhatsApp e email."
  },
  {
    icon: <Calendar className="h-6 w-6 text-growth-blue-electric" />,
    title: "Sistema de Agendamentos",
    description: "Permita que seus clientes agendem consultas e reuniões diretamente em seu calendário."
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-growth-blue-electric" />,
    title: "Dashboards e Métricas",
    description: "Visualize o desempenho do seu funil de vendas com dashboards personalizáveis."
  },
  {
    icon: <LineChart className="h-6 w-6 text-growth-blue-electric" />,
    title: "API e Integrações",
    description: "Conecte com mais de 2000 aplicativos através de nossa API e integrações nativas."
  },
  {
    icon: <Smartphone className="h-6 w-6 text-growth-blue-electric" />,
    title: "App Mobile",
    description: "Acesse suas informações de vendas e marketing em qualquer lugar pelo aplicativo móvel."
  }
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-black to-growth-blue-deep py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Todas as ferramentas que sua empresa precisa para crescer
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
              <div className="mb-4 p-2 rounded-lg bg-white/5 border border-white/10 w-fit">
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
