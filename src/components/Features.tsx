
import React, { useEffect, useState } from 'react';
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
  Bot
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas as Features' },
    { id: 'crm', name: 'CRM & Vendas' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'automation', name: 'Automação' },
    { id: 'communication', name: 'Comunicação' },
    { id: 'website', name: 'Website' },
    { id: 'tools', name: 'Ferramentas' }
  ];

  const filteredFeatures = activeTab === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeTab);

  return (
    <div className="min-h-screen bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 animate-slide-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-white leading-tight">
            Uma plataforma, <span className="text-gradient">todas as ferramentas</span> que você precisa
          </h1>
          <p className="text-base md:text-xl text-white/80 leading-relaxed">
            Substitua mais de 10 ferramentas e economize até 90% do seu investimento em tecnologia.
          </p>
        </div>

        {/* Platform Screenshots Section */}
        <div className="mb-20 md:mb-28 overflow-hidden rounded-xl bg-white/5 border border-[#d0ff00]/20 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
            <div className="flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Dashboard & Analytics</h3>
              <p className="text-white/70 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Visualize métricas importantes para seu negócio como receita mensal recorrente, crescimento e novos clientes.
              </p>
              <div className="bg-white/5 rounded-lg p-4 md:p-6 space-y-4 md:space-y-6 flex-1 shadow-inner">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <Card className="bg-black/60 border border-[#d0ff00]/20 hover:border-[#d0ff00]/40 transition-all duration-300">
                    <CardHeader className="pb-1 md:pb-2">
                      <CardTitle className="text-xs md:text-sm text-white/70">Receita Recorrente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl md:text-2xl font-bold text-white">R$ 12.947</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-black/60 border border-[#d0ff00]/20 hover:border-[#d0ff00]/40 transition-all duration-300">
                    <CardHeader className="pb-1 md:pb-2">
                      <CardTitle className="text-xs md:text-sm text-white/70">Novos Clientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl md:text-2xl font-bold text-white">32</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="h-28 md:h-40 bg-black/30 rounded-lg flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/873518a3-4940-430d-985b-470b533d4b7a.png" 
                    alt="Gráfico de Barras" 
                    className="h-16 md:h-20 w-auto" 
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Automações Visuais</h3>
              <p className="text-white/70 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Crie fluxos de automação sem código com nosso editor visual intuitivo.
              </p>
              <div className="bg-white/5 rounded-lg p-4 md:p-6 flex-1 flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/25d0a1ba-c7ab-4632-a6d7-ba4487a0a28c.png" 
                    alt="Automações Visuais" 
                    className="h-20 md:h-24 w-auto mx-auto mb-6 md:mb-8"
                  />
                  <p className="text-white text-base md:text-lg mb-4 md:mb-6">Crie sua automação</p>
                  <div className="mt-2 py-3 px-6 md:px-8 bg-[#d0ff00] rounded-full text-black inline-block text-sm md:text-base font-medium hover:bg-[#b3e600] cursor-pointer transition-all">
                    Começar Agora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="mb-8 md:mb-10 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-3 min-w-max p-1 bg-white/5 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base font-medium transition-all ${
                  activeTab === category.id 
                    ? 'bg-[#d0ff00] text-black shadow-md' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20">
          {filteredFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-6 md:p-8 rounded-xl border border-[#d0ff00]/10 hover:border-[#d0ff00]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#d0ff00]/5"
            >
              <div className="mb-4 md:mb-6 p-3 rounded-lg bg-[#d0ff00]/10 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tools Replacement Section */}
        <div className="mt-20 md:mt-28 mb-16 md:mb-24 rounded-xl overflow-hidden shadow-lg">
          <div className="bg-[#d0ff00] p-4 md:p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold text-black">Ferramentas</h3>
              <h3 className="text-xl md:text-2xl font-bold text-black">Valor</h3>
            </div>
          </div>
          <div className="divide-y divide-[#d0ff00]/10">
            {[
              { name: "CRM & Pipeline de Vendas", value: "R$ 502,71/mês" },
              { name: "Funis de vendas", value: "R$ 1.507,22/mês" },
              { name: "Planejamento de redes sociais", value: "R$ 324,90/mês" },
              { name: "Construtor de sites", value: "R$ 448,75/mês" },
              { name: "Formulários e Pesquisas", value: "R$ 457,03/mês" },
              { name: "E-mail marketing", value: "R$ 406,25/mês" }
            ].map((tool, index) => (
              <div key={index} className="flex justify-between p-4 md:p-5 bg-black hover:bg-black/80 transition-colors">
                <div className="text-white text-sm md:text-base">{tool.name}</div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-white text-sm md:text-base">{tool.value}</span>
                  <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-[#d0ff00]" />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#d0ff00]/10 p-4 md:p-6 flex justify-between">
            <h3 className="text-lg md:text-xl font-bold text-white">Total</h3>
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-white/70 line-through text-sm md:text-base">R$ 13.122,40/mês</span>
              <span className="text-[#d0ff00] font-bold text-lg md:text-xl">R$ 497/mês</span>
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
