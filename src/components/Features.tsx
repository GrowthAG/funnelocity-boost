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
  Bot,
  Instagram,
  Linkedin,
  Check,
  TrendingUp,
  Users as UsersIcon,
  RefreshCw,
  Zap,
  ArrowUpRight
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

  const replacementTools = [
    { name: "CRM & Pipeline de Vendas", value: "R$ 502,71/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Funis de vendas", value: "R$ 1.507,22/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Planejamento de redes sociais", value: "R$ 24,90/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Construtor de sites", value: "R$ 248,75/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Formulários e Pesquisas", value: "R$ 457,03/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "E-mail marketing", value: "R$ 406,25/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Calendário e Agendamentos", value: "R$ 111,72/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Automações de marketing", value: "R$ 858,20/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Cursos/Produtos", value: "R$ 492,54/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Chamadas e monitoramentos", value: "R$ 482,47/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Gestão de reputação", value: "R$ 2.448/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] },
    { name: "Analytics", value: "R$ 126,96/mês", logos: ["lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"] }
  ];

  const mockRevenueData = [
    { month: 'Jan', value: 9.2 },
    { month: 'Feb', value: 10.8 },
    { month: 'Mar', value: 12.4 },
    { month: 'Apr', value: 11.9 },
    { month: 'May', value: 13.6 },
    { month: 'Jun', value: 15.2 },
    { month: 'Jul', value: 17.8 }
  ];

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

        <div className="mb-20 md:mb-28 overflow-hidden rounded-xl bg-black border border-[#d0ff00]/20 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10 border-r border-[#d0ff00]/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-[#d0ff00]" />
                Dashboard & Analytics
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm md:text-base">
                Acompanhe os principais indicadores do seu funil em tempo real: receita recorrente, novos clientes e performance de campanhas.
              </p>
              
              <div className="flex items-center justify-end mb-4 text-xs text-[#d0ff00]/80">
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" style={{animationDuration: '3s'}} />
                <span>Atualizado em tempo real</span>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black border border-[#d0ff00]/20 rounded-lg p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-white/70 text-sm">Receita Recorrente</p>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-white text-xl md:text-2xl font-bold">R$ 12.947</p>
                    <p className="text-green-500 text-xs mt-1 flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +8.3% vs último mês
                    </p>
                  </div>
                  <div className="bg-black border border-[#d0ff00]/20 rounded-lg p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-white/70 text-sm">Novos Clientes</p>
                      <UsersIcon className="h-4 w-4 text-[#d0ff00]" />
                    </div>
                    <p className="text-white text-xl md:text-2xl font-bold">32</p>
                    <p className="text-green-500 text-xs mt-1 flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +12% vs último mês
                    </p>
                  </div>
                </div>
                
                <div className="bg-black/40 border border-[#d0ff00]/10 rounded-lg p-5 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-white text-sm font-medium">Performance últimos 7 dias</h4>
                    <div className="bg-[#d0ff00]/20 rounded-full px-2 py-0.5 text-xs text-[#d0ff00]">
                      +17.8%
                    </div>
                  </div>
                  
                  <div className="h-[160px] w-full">
                    <div className="relative h-full w-full flex items-end justify-between px-2">
                      {mockRevenueData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-end">
                          <div 
                            className="w-8 bg-gradient-to-t from-[#d0ff00]/60 to-[#d0ff00] rounded-t-sm"
                            style={{ height: `${(item.value/20)*100}%` }}
                          ></div>
                          <span className="text-white/60 text-xs mt-2">{item.month}</span>
                        </div>
                      ))}
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <svg className="w-full h-[70%] overflow-visible" preserveAspectRatio="none">
                          <path 
                            d="M 30 80 L 70 65 L 110 55 L 150 60 L 190 45 L 230 35 L 270 20" 
                            fill="none" 
                            stroke="#ffffff" 
                            strokeWidth="1.5" 
                            strokeDasharray="4,4"
                            strokeLinecap="round"
                            className="opacity-50"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 relative">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <Workflow className="h-6 w-6 text-[#d0ff00]" />
                Automações Visuais
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm md:text-base">
                Crie automações poderosas sem precisar de código, usando nosso editor visual com lógica condicional, agendamentos e múltiplas integrações.
              </p>
              
              <div className="flex justify-center mb-6">
                <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-2 px-4 flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/30">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#E4405F]/10 flex items-center justify-center border border-[#E4405F]/30">
                    <Instagram className="h-4 w-4 text-[#E4405F]" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#4267B2]/10 flex items-center justify-center border border-[#4267B2]/30">
                    <Linkedin className="h-4 w-4 text-[#4267B2]" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#d0ff00]/10 flex items-center justify-center border border-[#d0ff00]/30">
                    <Mail className="h-4 w-4 text-[#d0ff00]" />
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-black/30 border border-[#d0ff00]/10 rounded-lg mb-8">
                <div className="flex items-center justify-center">
                  <div className="relative flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-[#d0ff00]/10 border border-[#d0ff00] flex items-center justify-center">
                          <Users className="h-6 w-6 text-[#d0ff00]" />
                        </div>
                        <span className="text-white text-xs mt-2">Cliente</span>
                      </div>
                      
                      <svg width="40" height="20">
                        <path d="M 0 10 L 40 10" stroke="#d0ff00" strokeWidth="1.5" />
                        <path d="M 30 5 L 40 10 L 30 15" fill="none" stroke="#d0ff00" strokeWidth="1.5" />
                      </svg>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-md bg-[#FF6B6B]/10 border border-[#FF6B6B] flex items-center justify-center">
                          <Filter className="h-6 w-6 text-[#FF6B6B]" />
                        </div>
                        <span className="text-white text-xs mt-2">Condição</span>
                      </div>
                      
                      <svg width="40" height="20">
                        <path d="M 0 10 L 40 10" stroke="#d0ff00" strokeWidth="1.5" />
                        <path d="M 30 5 L 40 10 L 30 15" fill="none" stroke="#d0ff00" strokeWidth="1.5" />
                      </svg>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-md bg-[#0088FE]/10 border border-[#0088FE] flex items-center justify-center">
                          <Zap className="h-6 w-6 text-[#0088FE]" />
                        </div>
                        <span className="text-white text-xs mt-2">Ação</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-md bg-[#d0ff00]/10 border border-[#d0ff00] flex items-center justify-center">
                          <Mail className="h-6 w-6 text-[#d0ff00]" />
                        </div>
                        <span className="text-white text-xs mt-2">Email</span>
                      </div>
                      
                      <svg width="40" height="20">
                        <path d="M 0 10 L 40 10" stroke="#d0ff00" strokeWidth="1.5" />
                        <path d="M 30 5 L 40 10 L 30 15" fill="none" stroke="#d0ff00" strokeWidth="1.5" />
                      </svg>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-md bg-[#8884d8]/10 border border-[#8884d8] flex items-center justify-center">
                          <Database className="h-6 w-6 text-[#8884d8]" />
                        </div>
                        <span className="text-white text-xs mt-2">CRM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link to="/demo" className="bg-gradient-to-r from-[#d0ff00] to-[#b3e600] hover:from-[#d0ff00] hover:to-[#a3cc00] text-black font-medium rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transform hover:-translate-y-1">
                  Começar Agora
                </Link>
              </div>
            </div>
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
                <h3 className="text-lg md:text-2xl font-bold text-black">Ferramentas</h3>
              </div>
              <div className="col-span-4 md:col-span-3 text-center">
                <h3 className="text-lg md:text-2xl font-bold text-black">Substitui</h3>
              </div>
              <div className="col-span-3 md:col-span-3">
                <h3 className="text-lg md:text-2xl font-bold text-black text-right md:text-center">Valor</h3>
              </div>
              <div className="col-span-1 hidden md:block">
                <div className="flex justify-end">
                  <img 
                    src="/lovable-uploads/3a771a88-69f5-4e59-a54e-cc23daedc64e.png" 
                    alt="Growth Funnels Logo" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-[#d0ff00]/10">
            {replacementTools.map((tool, index) => (
              <div key={index} className="flex items-center p-4 md:p-5 bg-black hover:bg-black/80 transition-colors">
                <div className="w-full grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 md:col-span-5">
                    <div className="text-white text-sm md:text-base">{tool.name}</div>
                  </div>
                  <div className="col-span-3 md:col-span-3 flex justify-center">
                    <div className="flex space-x-1 md:space-x-2">
                      <div className="h-6 w-6 bg-white/10 rounded-full"></div>
                      <div className="h-6 w-6 bg-white/10 rounded-full hidden md:block"></div>
                      <div className="h-6 w-6 bg-white/10 rounded-full hidden md:block"></div>
                    </div>
                  </div>
                  <div className="col-span-3 md:col-span-3 text-right md:text-center">
                    <span className="text-white text-sm md:text-base">{tool.value}</span>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <Check className="h-5 w-5 text-[#d0ff00]" />
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
                  <span className="text-white/70 line-through text-sm md:text-base">R$ 10.122,40/mês</span>
                  <span className="text-[#d0ff00] font-bold text-lg md:text-xl">R$ 497/mês</span>
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
