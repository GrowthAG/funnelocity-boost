
import React from 'react';
import { 
  LayoutGrid, 
  Activity, 
  MessageSquare,
  Calendar, 
  FileText, 
  Link2, 
  Database, 
  MessagesSquare,
  Mail,
  BarChart3,
  MessageCircle,
  Filter
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Database className="h-6 w-6 text-[#d0ff00]" />,
      title: "CRM",
      description: "Acompanhe leads, negociações e oportunidades em um único lugar."
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-[#d0ff00]" />,
      title: "Construtor de Páginas",
      description: "Monte páginas de captura e vendas facilmente sem conhecimento técnico."
    },
    {
      icon: <Activity className="h-6 w-6 text-[#d0ff00]" />,
      title: "Automação de Fluxos",
      description: "Crie sequências de automação para leads e clientes que ativam com base em comportamentos."
    },
    {
      icon: <FileText className="h-6 w-6 text-[#d0ff00]" />,
      title: "Formulários Personalizados",
      description: "Capte informações com formulários dinâmicos totalmente personalizáveis."
    },
    {
      icon: <Link2 className="h-6 w-6 text-[#d0ff00]" />,
      title: "Integrações",
      description: "Conecte-se com outras plataformas de forma simples e centralizada."
    },
    {
      icon: <MessagesSquare className="h-6 w-6 text-[#d0ff00]" />,
      title: "Chat Unificado",
      description: "Centralize mensagens de vários canais em um só lugar para melhor atendimento."
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#d0ff00]" />,
      title: "Calendários",
      description: "Gerencie compromissos e agendamentos de forma simples e automatizada."
    },
    {
      icon: <Mail className="h-6 w-6 text-[#d0ff00]" />,
      title: "Campanhas de E-mail",
      description: "Automatize e-mails e acompanhe resultados com métricas detalhadas."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-[#d0ff00]" />,
      title: "WhatsApp",
      description: "Envie mensagens manuais e automáticas diretamente para seus leads e clientes."
    },
    {
      icon: <Filter className="h-6 w-6 text-[#d0ff00]" />,
      title: "Funis de Vendas",
      description: "Crie e gerencie funis de conversão completos para aumentar suas vendas."
    }
  ];

  return (
    <section className="bg-black py-24 px-4 md:px-8 border-t border-[#d0ff00]/10" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Sua operação centralizada <span className="text-[#d0ff00]">em um único lugar</span>
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
