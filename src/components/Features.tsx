
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
import { replacementToolsData, totalSavingData } from '@/utils/dashboardData';
import ExactComparisonTable from '@/components/shared/ExactComparisonTable';

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

  // Define the checkout links function
  const getCheckoutLink = (plan) => {
    const planLinks = {
      'PRO': 'https://checkout.growthfunnels.com.br/pro-mensal',
      'PLUS': 'https://checkout.growthfunnels.com.br/plus-mensal',
      'ENTERPRISE': 'https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd'
    };
    return planLinks[plan] || 'https://checkout.growthfunnels.com.br/pro-mensal';
  };

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
                
                <div className="flex items-center justify-end mb-4 text-xs text-[#d0ff00]/80">
                  <RefreshCw className="h-3 w-3 mr-1 animate-spin" style={{animationDuration: '3s'}} />
                  <span>Atualizado em tempo real</span>
                </div>
                
                <div className="space-y-6 flex-grow">
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
                  
                  <div className="bg-black/40 border border-[#d0ff00]/10 rounded-lg p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-white text-sm font-medium">Performance últimos 7 dias</h4>
                      <div className="bg-[#d0ff00]/20 rounded-full px-2 py-0.5 text-xs text-[#d0ff00]">
                        +17.8%
                      </div>
                    </div>
                    
                    <div className="h-[180px] w-full mt-4 flex-grow">
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
              
              {/* Automações Inteligentes Section */}
              <div className="p-8 md:p-10 relative flex flex-col min-h-[680px]">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center gap-2 h-9">
                  <Workflow className="h-6 w-6 text-[#d0ff00]" />
                  Automações Inteligentes
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed text-sm md:text-base h-[60px]">
                  Crie sequências automáticas baseadas em comportamentos de clientes e prospects que aumentam suas conversões sem precisar criar códigos ou contratar developers.
                </p>
                
                <div className="bg-black/30 border border-[#d0ff00]/10 rounded-lg p-5 mb-6 flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-full bg-[#d0ff00]/10 flex items-center justify-center border border-[#d0ff00]/30">
                      <FormInput className="h-4 w-4 text-[#d0ff00]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-medium">Nutrição de Leads</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-[#d0ff00] text-xs font-medium">Conversão: 32%</span>
                        <span className="mx-2 text-white/30">•</span>
                        <span className="text-white/50 text-xs">Ativa há 47 dias</span>
                      </div>
                    </div>
                    <div className="bg-[#d0ff00]/20 rounded-full px-2 py-0.5 text-xs text-[#d0ff00]">
                      +204 leads
                    </div>
                  </div>

                  <div className="mt-5 relative">
                    <div className="absolute left-[22px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#d0ff00] to-[#d0ff00]/20"></div>
                    
                    <div className="flex mb-5 relative">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#d0ff00] z-10 shrink-0">
                        <FormInput className="h-5 w-5 text-black" />
                      </div>
                      <div className="ml-4 bg-black/40 rounded-lg p-3 flex-1 border border-[#d0ff00]/30">
                        <h5 className="text-white text-sm font-medium mb-1">Trigger: Formulário Preenchido</h5>
                        <p className="text-white/60 text-xs">O lead preenche o formulário de captura no seu site</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-5 relative">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#d0ff00] z-10 shrink-0">
                        <Filter className="h-5 w-5 text-black" />
                      </div>
                      <div className="ml-4 bg-black/40 rounded-lg p-3 flex-1 border border-[#d0ff00]/30">
                        <h5 className="text-white text-sm font-medium mb-1">Condição: Interesse no Produto X?</h5>
                        <p className="text-white/60 text-xs">Se marcou interesse no produto X, segue fluxo A, senão segue fluxo B</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-5 relative">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#d0ff00] z-10 shrink-0">
                        <Mail className="h-5 w-5 text-black" />
                      </div>
                      <div className="ml-4 bg-black/40 rounded-lg p-3 flex-1 border border-[#d0ff00]/30">
                        <h5 className="text-white text-sm font-medium mb-1">Ação: Enviar Sequência de E-mails</h5>
                        <p className="text-white/60 text-xs">Envia 3 e-mails ao longo de 7 dias com conteúdo educativo</p>
                      </div>
                    </div>
                    
                    <div className="flex relative">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#d0ff00] z-10 shrink-0">
                        <Tag className="h-5 w-5 text-black" />
                      </div>
                      <div className="ml-4 bg-black/40 rounded-lg p-3 flex-1 border border-[#d0ff00]/30">
                        <h5 className="text-white text-sm font-medium mb-1">Ação: Adicionar Tag no CRM</h5>
                        <p className="text-white/60 text-xs">Adiciona tag "Nutrido" e notifica o time comercial</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white text-sm font-medium mb-3">Integrações Disponíveis:</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/30">
                        <MessageCircle className="h-3 w-3 text-[#25D366]" />
                      </div>
                      <span className="text-white/80 text-xs">WhatsApp</span>
                    </div>
                    <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#E4405F]/10 flex items-center justify-center border border-[#E4405F]/30">
                        <Instagram className="h-3 w-3 text-[#E4405F]" />
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
                  <Link 
                    to="/pricing"
                    aria-label={`Usar Template ${example.title} - Redireciona para a página de preços`}
                    className="block w-full py-3 px-6 rounded-md text-base font-semibold bg-[#d0ff00] text-black hover:bg-[#b3e600] transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md"
                  >
                    Usar Template
                  </Link>
                  </a>
                </div>
            ))}
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
          <ExactComparisonTable 
            replacementTools={replacementToolsData} 
            totalSaving={totalSavingData}
            getCheckoutLink={getCheckoutLink}
          />
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
