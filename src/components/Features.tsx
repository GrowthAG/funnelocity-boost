import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
  Filter,
  CheckCircle,
  XCircle,
  PieChart,
  BarChart2,
  Users,
  LineChart,
  Workflow,
  Bot,
  Instagram,
  Linkedin,
  Check,
  TrendingUp,
  Users as UsersIcon,
  RefreshCw,
  Zap,
  ArrowUpRight,
  Clock,
  Tag,
  FormInput,
  ShoppingCart,
  FileCheck,
  BadgeCheck,
  Bell,
  Settings,
  BarChart4,
  UserCheck,
  ArrowDown,
  DollarSign
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Features = () => {
  const [activeTab, setActiveTab] = useState('all');

  const features = [
    {
      icon: <Database className="h-6 w-6 text-[#d0ff00]" />,
      title: "CRM & Pipeline de Vendas",
      description: "Acompanhe leads, negociações e oportunidades em um único lugar.",
      category: "crm"
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-[#d0ff00]" />,
      title: "Construtor de Páginas",
      description: "Monte páginas de captura e vendas facilmente sem conhecimento técnico.",
      category: "website"
    },
    {
      icon: <Activity className="h-6 w-6 text-[#d0ff00]" />,
      title: "Automação de Fluxos",
      description: "Crie sequências de automação para leads e clientes que ativam com base em comportamentos.",
      category: "automation"
    },
    {
      icon: <FileText className="h-6 w-6 text-[#d0ff00]" />,
      title: "Formulários Personalizados",
      description: "Capte informações com formulários dinâmicos totalmente personalizáveis.",
      category: "website"
    },
    {
      icon: <Link2 className="h-6 w-6 text-[#d0ff00]" />,
      title: "Integrações",
      description: "Conecte-se com outras plataformas de forma simples e centralizada.",
      category: "tools"
    },
    {
      icon: <MessagesSquare className="h-6 w-6 text-[#d0ff00]" />,
      title: "Chat Unificado",
      description: "Centralize mensagens de vários canais em um só lugar para melhor atendimento.",
      category: "communication"
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#d0ff00]" />,
      title: "Calendários e Agendamentos",
      description: "Gerencie compromissos e agendamentos de forma simples e automatizada.",
      category: "tools"
    },
    {
      icon: <Mail className="h-6 w-6 text-[#d0ff00]" />,
      title: "Campanhas de E-mail",
      description: "Automatize e-mails e acompanhe resultados com métricas detalhadas.",
      category: "marketing"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-[#d0ff00]" />,
      title: "WhatsApp e Instagram",
      description: "Envie mensagens manuais e automáticas diretamente para seus leads e clientes.",
      category: "communication"
    },
    {
      icon: <Filter className="h-6 w-6 text-[#d0ff00]" />,
      title: "Funis de Vendas",
      description: "Crie e gerencie funis de conversão completos para aumentar suas vendas.",
      category: "sales"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#d0ff00]" />,
      title: "Análises Avançadas",
      description: "Visualize relatórios completos sobre a performance de suas campanhas e equipe.",
      category: "marketing"
    },
    {
      icon: <UserCheck className="h-6 w-6 text-[#d0ff00]" />,
      title: "Gestão de Equipe",
      description: "Controle permissões e monitore a produtividade dos membros do seu time.",
      category: "tools"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas as Features', icon: <LayoutGrid className="h-4 w-4" /> },
    { id: 'crm', name: 'CRM & Vendas', icon: <Database className="h-4 w-4" /> },
    { id: 'marketing', name: 'Marketing', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'automation', name: 'Automação', icon: <Activity className="h-4 w-4" /> },
    { id: 'communication', name: 'Comunicação', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'website', name: 'Website', icon: <LayoutGrid className="h-4 w-4" /> },
    { id: 'tools', name: 'Ferramentas', icon: <Link2 className="h-4 w-4" /> }
  ];

  const filteredFeatures = activeTab === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeTab);

  const replacementTools = [{
    name: "CRM & Pipeline de Vendas",
    value: "R$ 502,71/mês",
    logos: [{
      name: "Pipedrive",
      src: "/lovable-uploads/8d450804-20c6-46f6-9f0c-836bc0fa3ec2.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Close",
      src: "/lovable-uploads/8d450804-20c6-46f6-9f0c-836bc0fa3ec2.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "ActiveCampaign",
      src: "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Salesflare",
      src: "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Funis de vendas",
    value: "R$ 1.507,22/mês",
    logos: [{
      name: "Salesforce",
      src: "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Pipefy",
      src: "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "HubSpot",
      src: "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Planejamento de redes sociais",
    value: "R$ 24,90/mês",
    logos: [{
      name: "mLabs",
      src: "/lovable-uploads/8ba59a61-7e7a-49e9-adf2-e08574abd59b.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Etus",
      src: "/lovable-uploads/2c2112ad-609f-45d0-a9c7-bf4fa9821097.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Construtor de sites",
    value: "R$ 248,75/mês",
    logos: [{
      name: "WordPress",
      src: "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Wix",
      src: "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Webflow",
      src: "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Formulários e Pesquisas",
    value: "R$ 457,03/mês",
    logos: [{
      name: "Typeform",
      src: "/lovable-uploads/60db33c2-03f0-4a6c-8895-126a032cd6f3.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Google Forms",
      src: "/lovable-uploads/7dffaafa-f42a-4ab3-8cf9-c6998479f2d5.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Respond.io",
      src: "/lovable-uploads/1d6c3d72-1270-43d4-b0bb-1300829056ef.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "E-mail marketing",
    value: "R$ 406,25/mês",
    logos: [{
      name: "Brevo",
      src: "/lovable-uploads/a370bacb-4932-489a-80b1-47f3030227c3.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Mailchimp",
      src: "/lovable-uploads/a370bacb-4932-489a-80b1-47f3030227c3.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "ActiveCampaign",
      src: "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Calendário e Agendamentos",
    value: "R$ 111,72/mês",
    logos: [{
      name: "Calendly",
      src: "/lovable-uploads/cb262656-76f3-4604-bea4-c8d1a91f4cd8.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Google Calendar",
      src: "/lovable-uploads/7dffaafa-f42a-4ab3-8cf9-c6998479f2d5.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Automações de marketing",
    value: "R$ 858,20/mês",
    logos: [{
      name: "ActiveCampaign",
      src: "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Salesforce Marketing Cloud",
      src: "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Cursos/Produtos",
    value: "R$ 492,54/mês",
    logos: [{
      name: "Hotmart",
      src: "/lovable-uploads/fafd30ca-de73-40a1-accf-bb56a14b939d.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Eduzz",
      src: "/lovable-uploads/f157b2b4-81b3-47df-9349-f2b5e65e6fac.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Kiwify",
      src: "/lovable-uploads/abaa61f2-0495-45f4-8d2f-7de74d200d17.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "HeroSpark",
      src: "/lovable-uploads/f9fa06e2-b163-447f-8bdd-318737e3fb97.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Chamadas e monitoramentos",
    value: "R$ 482,47/mês",
    logos: [{
      name: "GoTo Connect",
      src: "/lovable-uploads/cb262656-76f3-4604-bea4-c8d1a91f4cd8.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Twilio",
      src: "/lovable-uploads/1d6c3d72-1270-43d4-b0bb-1300829056ef.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Gestão de reputação",
    value: "R$ 2.448,00/mês",
    logos: [{
      name: "Trustpilot",
      src: "/lovable-uploads/2c2112ad-609f-45d0-a9c7-bf4fa9821097.png",
      style: { height: "20px", width: "auto" }
    }]
  }, {
    name: "Analytics",
    value: "R$ 126,96/mês",
    logos: [{
      name: "Mixpanel",
      src: "/lovable-uploads/4f7a5365-d10b-430c-a678-34f30b6019f3.png",
      style: { height: "20px", width: "auto" }
    }, {
      name: "Amplitude",
      src: "/lovable-uploads/4f7a5365-d10b-430c-a678-34f30b6019f3.png",
      style: { height: "20px", width: "auto" }
    }]
  }];

  const totalSaving = "R$ 10.122,40";

  const mockRevenueData = [
    { month: 'Jan', value: 9.2 },
    { month: 'Feb', value: 10.8 },
    { month: 'Mar', value: 12.4 },
    { month: 'Apr', value: 11.9 },
    { month: 'May', value: 13.6 },
    { month: 'Jun', value: 15.2 },
    { month: 'Jul', value: 17.8 }
  ];

  const automationExamples = [
    {
      id: 'lead-nurturing',
      title: 'Nutrição de Leads',
      description: 'Sequência automatizada para converter visitantes em clientes',
      triggers: ['Formulário Preenchido', 'E-book Baixado', 'Webinar Registrado'],
      actions: ['Enviar E-mail', 'Adicionar Tag CRM', 'Notificar Vendedor'],
      conversion: '32%',
      color: '#d0ff00'
    },
    {
      id: 'abandoned-cart',
      title: 'Carrinho Abandonado',
      description: 'Recupere vendas perdidas com lembretes automáticos',
      triggers: ['Carrinho Não Finalizado', 'Checkout Iniciado', 'Produto Adicionado'],
      actions: ['Enviar WhatsApp', 'Oferecer Desconto', 'Reengajar no Instagram'],
      conversion: '24%',
      color: '#d0ff00'
    },
    {
      id: 'client-onboarding',
      title: 'Onboarding de Clientes',
      description: 'Apresente sua empresa e produto para novos clientes',
      triggers: ['Primeira Compra', 'Assinatura Iniciada', 'Cadastro Completo'],
      actions: ['Enviar Boas-vindas', 'Agendar Reunião', 'Enviar Material de Treinamento'],
      conversion: '89%',
      color: '#d0ff00'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 animate-slide-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-white leading-tight">
            Uma plataforma, <span className="text-gradient">todas as ferramentas</span> que você precisa
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            Substitua mais de 10 ferramentas e economize até 90% do seu investimento em tecnologia.
          </p>
        </div>

        <div className="mb-20 md:mb-28">
          <div className="overflow-hidden rounded-xl bg-black border border-[#d0ff00]/20 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Dashboard Analytics Section */}
              <div className="p-8 md:p-10 border-r border-[#d0ff00]/10 flex flex-col min-h-[680px]">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center gap-2 h-9">
                  <BarChart3 className="h-6 w-6 text-[#d0ff00]" />
                  Dashboard & Analytics
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed text-sm md:text-base h-[60px]">
                  Acompanhe os principais indicadores do seu funil em tempo real: receita recorrente, novos clientes e performance de campanhas.
                </p>
               import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInput, ShoppingCart, BadgeCheck } from 'lucide-react';

const automationExamples = [
  {
    id: 'lead-nurturing',
    title: 'Nutrição de Leads',
    description: 'Sequência automatizada para converter visitantes em clientes',
    triggers: ['Formulário Preenchido', 'E-book Baixado', 'Webinar Registrado'],
    actions: ['Enviar E-mail', 'Adicionar Tag CRM', 'Notificar Vendedor'],
    conversion: '32%',
    color: '#d0ff00',
    icon: <FormInput className="h-5 w-5 text-[#d0ff00]" />
  },
  {
    id: 'abandoned-cart',
    title: 'Carrinho Abandonado',
    description: 'Recupere vendas perdidas com lembretes automáticos',
    triggers: ['Carrinho Não Finalizado', 'Checkout Iniciado', 'Produto Adicionado'],
    actions: ['Enviar WhatsApp', 'Oferecer Desconto', 'Reengajar no Instagram'],
    conversion: '24%',
    color: '#d0ff00',
    icon: <ShoppingCart className="h-5 w-5 text-[#d0ff00]" />
  },
  {
    id: 'client-onboarding',
    title: 'Onboarding de Clientes',
    description: 'Apresente sua empresa e produto para novos clientes',
    triggers: ['Primeira Compra', 'Assinatura Iniciada', 'Cadastro Completo'],
    actions: ['Enviar Boas-vindas', 'Agendar Reunião', 'Enviar Material de Treinamento'],
    conversion: '89%',
    color: '#d0ff00',
    icon: <BadgeCheck className="h-5 w-5 text-[#d0ff00]" />
  }
];

// Componente de Template de Automação
const AutomationTemplateCard: React.FC<{
  template: typeof automationExamples[0]
}> = ({ template }) => {
  const navigate = useNavigate();

  const handleUseTemplate = () => {
    // Navega para a página de preços passando o tipo de template
    navigate('/pricing', { 
      state: { 
        templateType: template.id 
      } 
    });
  };

  return (
    <div 
      key={template.id}
      className="bg-black border border-[#d0ff00]/20 rounded-xl p-5 transition-all hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d0ff00]/5 hover:border-[#d0ff00]/40 flex flex-col h-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="h-10 w-10 rounded-lg flex items-center justify-center border bg-[#d0ff00]/10 border-[#d0ff00]/30"
        >
          {template.icon}
        </div>
        <div>
          <h3 className="text-white font-medium">{template.title}</h3>
          <div className="flex items-center mt-1">
            <span className="text-[#d0ff00] text-xs font-medium">Conversão: {template.conversion}</span>
          </div>
        </div>
      </div>
      
      <p className="text-white/70 text-sm mb-4">{template.description}</p>
      
      <div className="mb-4">
        <h4 className="text-white/80 text-xs font-medium mb-2">Gatilhos:</h4>
        <div className="flex flex-wrap gap-2">
          {template.triggers.map((trigger, idx) => (
            <div key={idx} className="bg-black/70 border border-white/10 rounded-full py-1 px-2.5 text-white/70 text-xs">
              {trigger}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-white/80 text-xs font-medium mb-2">Ações:</h4>
        <div className="flex flex-wrap gap-2">
          {template.actions.map((action, idx) => (
            <div 
              key={idx} 
              className="border rounded-full py-1 px-2.5 text-xs bg-[#d0ff00]/5 border-[#d0ff00]/30 text-[#d0ff00]"
            >
              {action}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pt-6">
        <button 
          onClick={handleUseTemplate}
          aria-label={`Usar Template ${template.title}`}
          className="block w-full py-3 px-6 rounded-md text-base font-semibold bg-[#d0ff00] text-black hover:bg-[#b3e600] transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md"
        >
          Usar Template
        </button>
      </div>
    </div>
  );
};

// Seção de Templates de Automação
const AutomationTemplatesSection: React.FC = () => {
  return (
    <div className="mb-16 md:mb-24">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
          Templates de Automação Prontos
        </h2>
        <p className="text-white/70 text-base">
          Comece em minutos com nossos modelos de automação testados e otimizados
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {automationExamples.map((template) => (
          <AutomationTemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default AutomationTemplatesSection;nstagram className="h-3 w-3 text-[#E4405F]" />
                      </div>
                      <span className="text-white/80 text-xs">Instagram</span>
                    </div>
                    <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#0A66C2]/10 flex items-center justify-center border border-[#0A66C2]/30">
                        <Linkedin className="h-3 w-3 text-[#0A66C2]" />
                      </div>
                      <span className="text-white/80 text-xs">LinkedIn</span>
                    </div>
                    <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#d0ff00]/10 flex items-center justify-center border border-[#d0ff00]/30">
                        <Mail className="h-3 w-3 text-[#d0ff00]" />
                      </div>
                      <span className="text-white/80 text-xs">E-mail</span>
                    </div>
                    <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#4A66FB]/10 flex items-center justify-center border border-[#4A66FB]/30">
                        <Database className="h-3 w-3 text-[#4A66FB]" />
                      </div>
                      <span className="text-white/80 text-xs">CRM</span>
                    </div>
                    <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#ea384c]/10 flex items-center justify-center border border-[#ea384c]/30">
                        <Bell className="h-3 w-3 text-[#ea384c]" />
                      </div>
                      <span className="text-white/80 text-xs">Notificações</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="py-8 border-t border-[#d0ff00]/10 flex justify-center">
  <a 
    href="/pricing" 
    className="bg-[#d0ff00] hover:bg-[#b3e600] text-black font-medium rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transform hover:-translate-y-1"
  >
    Começar com Garantia de 14 Dias
  </a>
</div>
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
              Templates de Automação Prontos
            </h2>
            <p className="text-white/70 text-base">
              Comece em minutos com nossos modelos de automação testados e otimizados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automationExamples.map((example) => (
              <div 
                key={example.id}
                className="bg-black border border-[#d0ff00]/20 rounded-xl p-5 transition-all hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d0ff00]/5 hover:border-[#d0ff00]/40 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="h-10 w-10 rounded-lg flex items-center justify-center border bg-[#d0ff00]/10 border-[#d0ff00]/30"
                  >
                    {example.id === 'lead-nurturing' && <FormInput className="h-5 w-5 text-[#d0ff00]" />}
                    {example.id === 'abandoned-cart' && <ShoppingCart className="h-5 w-5 text-[#d0ff00]" />}
                    {example.id === 'client-onboarding' && <BadgeCheck className="h-5 w-5 text-[#d0ff00]" />}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{example.title}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-[#d0ff00] text-xs font-medium">Conversão: {example.conversion}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm mb-4">{example.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white/80 text-xs font-medium mb-2">Gatilhos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {example.triggers.map((trigger, idx) => (
                      <div key={idx} className="bg-black/70 border border-white/10 rounded-full py-1 px-2.5 text-white/70 text-xs">
                        {trigger}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white/80 text-xs font-medium mb-2">Ações:</h4>
                  <div className="flex flex-wrap gap-2">
                    {example.actions.map((action, idx) => (
                      <div 
                        key={idx} 
                        className="border rounded-full py-1 px-2.5 text-xs bg-[#d0ff00]/5 border-[#d0ff00]/30 text-[#d0ff00]"
                      >
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-6">
                  <a 
                    href="https://checkout.growthfunnels.com.br/plus"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Usar Template ${example.title} - Redireciona para o checkout do plano PLUS`}
                    className="block w-full py-3 px-6 rounded-md text-base font-semibold bg-[#d0ff00] text-black hover:bg-[#b3e600] transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md"
                  >
                    Usar Template
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-[#d0ff00]/5 rounded-lg -z-10" />
            <div className="overflow-x-auto py-2 px-1">
              <TabsList className="bg-black border border-[#d0ff00]/20 p-1 rounded-lg inline-flex w-full md:w-auto min-w-max mx-auto justify-start md:justify-center">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className={`
                      px-4 py-2.5 rounded-md text-sm md:text-base flex items-center gap-2 font-medium transition-all 
                      data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
                      data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
                      min-w-[100px] md:min-w-0 justify-center md:justify-start
                    `}
                  >
                    {category.icon}
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          
          {categories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="animate-fade-in mt-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-card p-6 md:p-8 rounded-xl border border-[#d0ff00]/10 hover:border-[#d0ff00]/30 
                    bg-black/40 backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg 
                    hover:shadow-[#d0ff00]/5 h-full"
                  >
                    <div className="mb-4 md:mb-6 p-3 rounded-lg bg-[#d0ff00]/10 w-fit">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">{feature.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20 md:mt-28 mb-16 md:mb-24 rounded-xl overflow-hidden shadow-lg border border-[#d0ff00]/30">
          <div className="bg-[#d0ff00] p-5 md:p-6">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4 md:col-span-5">
                <h3 className="text-lg md:text-xl font-bold text-black">Ferramentas</h3>
              </div>
              <div className="col-span-4 md:col-span-3 text-center">
                <h3 className="text-lg md:text-xl font-bold text-black">Substitui</h3>
              </div>
              <div className="col-span-3 md:col-span-3">
                <h3 className="text-lg md:text-xl font-bold text-black text-right md:text-center">Valor</h3>
              </div>
              <div className="col-span-1 hidden md:block">
                <div className="flex justify-end">
                  <img 
                    src="/lovable-uploads/38330c75-db65-4540-ae8c-3b05f2f6cd94.png" 
                    alt="Growth Funnels Logo" 
                    className="h-12 w-auto object-contain brightness-0"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-[#d0ff00]/30">
            {replacementTools.map((tool, index) => (
              <div key={index} className="flex items-center p-4 md:p-5 bg-black hover:bg-black/80 transition-colors">
                <div className="w-full grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 md:col-span-5">
                    <div className="text-white text-sm md:text-base">{tool.name}</div>
                  </div>
                  <div className="col-span-3 md:col-span-3 flex justify-center">
                    <div className="flex flex-wrap justify-center items-center gap-2 bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      {tool.logos.map((logo, logoIndex) => (
                        <div 
                          key={logoIndex} 
                          className="flex items-center justify-center p-1"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.name}
                            className="object-contain h-5 w-auto max-w-[24px]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-3 md:col-span-3 text-right md:text-center">
                    <span className="text-white text-sm md:text-base">{tool.value}</span>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <div className="bg-[#d0ff00]/10 h-8 w-8 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-[#d0ff00]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-[#d0ff00]/10 p-4 md:p-6">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-5 md:col-span-5">
                <h3 className="text-lg md:text-xl font-bold text-white">Total</h3>
              </div>
              <div className="col-span-3 md:col-span-3">
              </div>
              <div className="col-span-4 md:col-span-4 text-right md:text-center">
                <div className="flex items-center justify-end md:justify-center gap-3 md:gap-4">
                  <span className="text-red-500/70 line-through text-sm md:text-base">{totalSaving}</span>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-[#d0ff00] mr-1" />
                    <span className="text-[#d0ff00] font-bold text-lg md:text-xl">R$ 497/mês</span>
                  </div>
                  <div className="flex items-center bg-[#d0ff00]/20 rounded-full px-2 py-1 ml-1">
                    <ArrowDown className="h-3 w-3 text-[#d0ff00] mr-1" />
                    <span className="text-[#d0ff00] text-xs font-medium">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 md:mt-24 py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-white leading-tight">
            Pronto para começar a automatizar sua operação?
          </h3>
          <p className="text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Escolha o plano que melhor se adapta às suas necessidades e comece a transformar sua estratégia de marketing e vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link to="/pricing">
              <Button className="bg-[#d0ff00] hover:bg-[#b3e600] text-black px-6 md:px-10 py-6 md:py-7 text-base md:text-lg shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transition-all duration-300" size="lg">
                Ver Planos e Preços
              </Button>
            </Link>
            <Link to="/demo">
              <Button className="border border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 px-6 md:px-10 py-6 md:py-7 text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300" size="lg" variant="outline">
                Agendar Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
