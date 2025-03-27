
import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  AreaChart,
  Area
} from 'recharts';
import { 
  BarChart3, 
  LineChart as LineIcon, 
  PieChart as PieIcon, 
  Activity, 
  Database, 
  Link2, 
  Workflow, 
  ArrowRight, 
  ArrowUpRight,
  Users,
  CalendarClock
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";

// Sample data for the charts
const conversionData = [
  { name: 'Jan', conversions: 65, mrr: 12400 },
  { name: 'Fev', conversions: 78, mrr: 15200 },
  { name: 'Mar', conversions: 82, mrr: 16800 },
  { name: 'Abr', conversions: 95, mrr: 19000 },
  { name: 'Mai', conversions: 109, mrr: 21800 },
  { name: 'Jun', conversions: 127, mrr: 25400 },
  { name: 'Jul', conversions: 142, mrr: 28400 },
];

const automationData = [
  { name: 'E-mail', value: 2450, fillColor: '#d0ff00' },
  { name: 'WhatsApp', value: 1850, fillColor: '#4FCE5D' },
  { name: 'SMS', value: 950, fillColor: '#FF6B6B' },
  { name: 'Push', value: 650, fillColor: '#5E72E4' },
];

const channelData = [
  { name: 'Direto', value: 35 },
  { name: 'Google Ads', value: 25 },
  { name: 'Facebook', value: 20 },
  { name: 'Instagram', value: 15 },
  { name: 'Outros', value: 5 },
];

const COLORS = ['#d0ff00', '#0088FE', '#FF6B6B', '#4FCE5D', '#FFBB28'];

const automationMetrics = [
  {
    title: "E-mails Enviados",
    value: "6.842",
    change: "+12.5%",
    positive: true,
    icon: <Activity className="h-6 w-6 text-[#d0ff00]" />,
  },
  {
    title: "WhatsApp Enviados",
    value: "2.485",
    change: "+24.8%",
    positive: true,
    icon: <Activity className="h-6 w-6 text-[#d0ff00]" />,
  },
  {
    title: "Tarefas Automáticas",
    value: "853",
    change: "+18.2%",
    positive: true,
    icon: <Workflow className="h-6 w-6 text-[#d0ff00]" />,
  },
  {
    title: "Conexões Ativas",
    value: "12",
    change: "+4",
    positive: true,
    icon: <Link2 className="h-6 w-6 text-[#d0ff00]" />,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading progress
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20 md:pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-white">
              Dashboard <span className="text-[#d0ff00]">Analytics</span>
            </h1>
            <p className="text-base md:text-lg text-white/70">
              Monitore o desempenho de suas automações, conexões e conversões em tempo real.
            </p>
          </div>
          
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#d0ff00]/5 rounded-lg -z-10" />
              <div className="overflow-x-auto py-2 px-1 no-scrollbar">
                <TabsList className="bg-black/80 border border-[#d0ff00]/20 p-1 rounded-lg inline-flex w-full min-w-max">
                  <TabsTrigger 
                    value="overview"
                    className="px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300
                      data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
                      data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
                      flex items-center gap-2"
                  >
                    <BarChart3 className="h-4 w-4" />
                    Visão Geral
                  </TabsTrigger>
                  <TabsTrigger 
                    value="automations"
                    className="px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300
                      data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
                      data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
                      flex items-center gap-2"
                  >
                    <Workflow className="h-4 w-4" />
                    Automações
                  </TabsTrigger>
                  <TabsTrigger 
                    value="connections"
                    className="px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300
                      data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
                      data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
                      flex items-center gap-2"
                  >
                    <Link2 className="h-4 w-4" />
                    Conexões
                  </TabsTrigger>
                  <TabsTrigger 
                    value="data"
                    className="px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300
                      data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
                      data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
                      flex items-center gap-2"
                  >
                    <Database className="h-4 w-4" />
                    Dados
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="animate-fade-in">
              {/* Top Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {automationMetrics.map((metric, index) => (
                  <Card key={index} className="bg-black/40 border border-[#d0ff00]/10 shadow-md hover:shadow-lg hover:shadow-[#d0ff00]/5 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-white text-lg">{metric.title}</CardTitle>
                        <div className="p-2 rounded-lg bg-[#d0ff00]/10">{metric.icon}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end gap-2">
                        <div className="text-2xl md:text-3xl font-bold text-white">{metric.value}</div>
                        <div className={`text-sm font-medium flex items-center ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                          {metric.change}
                          <ArrowUpRight className={`h-4 w-4 ml-0.5 ${!metric.positive && 'rotate-180'}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Main Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-6">
                {/* Conversion Chart - 5 columns wide */}
                <Card className="bg-black/40 border border-[#d0ff00]/10 lg:col-span-5 shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-white">Conversões e MRR</CardTitle>
                      <div className="flex items-center gap-4 text-white/70 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-[#d0ff00] rounded-full"></div>
                          <span>Conversões</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-[#0088FE] rounded-full"></div>
                          <span>MRR (R$)</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="h-[320px]">
                    <ChartContainer 
                      config={{ 
                        conversions: { color: "#d0ff00" },
                        mrr: { color: "#0088FE" }
                      }}
                    >
                      <LineChart data={conversionData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" stroke="#666" />
                        <YAxis yAxisId="left" stroke="#666" />
                        <YAxis yAxisId="right" orientation="right" stroke="#666" />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                        />
                        <Legend />
                        <Line 
                          yAxisId="left" 
                          type="monotone" 
                          dataKey="conversions" 
                          stroke="#d0ff00" 
                          strokeWidth={2} 
                          activeDot={{ r: 8 }} 
                        />
                        <Line 
                          yAxisId="right" 
                          type="monotone" 
                          dataKey="mrr" 
                          stroke="#0088FE" 
                          strokeWidth={2} 
                        />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
                
                {/* Channel Distribution - 2 columns wide */}
                <Card className="bg-black/40 border border-[#d0ff00]/10 lg:col-span-2 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white">Distribuição de Canais</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[320px] flex items-center justify-center">
                    <ChartContainer 
                      config={channelData.reduce((acc, item, index) => {
                        acc[item.name] = { color: COLORS[index % COLORS.length] };
                        return acc;
                      }, {} as any)}
                    >
                      <PieChart>
                        <Pie
                          data={channelData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {channelData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
              
              {/* Automation Performance */}
              <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">Performance das Automações</CardTitle>
                </CardHeader>
                <CardContent className="h-[280px]">
                  <ChartContainer
                    config={automationData.reduce((acc, item) => {
                      acc[item.name] = { color: item.fillColor };
                      return acc;
                    }, {} as any)}
                  >
                    <BarChart data={automationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#666" />
                      <YAxis stroke="#666" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="value" name="Mensagens Enviadas" radius={[4, 4, 0, 0]}>
                        {automationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fillColor} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Automations Tab */}
            <TabsContent value="automations" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-white">Automações Ativas</CardTitle>
                    <CardDescription className="text-white/60">Fluxos automatizados em execução</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white">Funil de Vendas</span>
                          <span className="text-[#d0ff00]">92%</span>
                        </div>
                        <Progress value={92} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white">Onboarding de Clientes</span>
                          <span className="text-[#d0ff00]">78%</span>
                        </div>
                        <Progress value={78} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white">Recuperação de Carrinho</span>
                          <span className="text-[#d0ff00]">64%</span>
                        </div>
                        <Progress value={64} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white">Nutrição de Leads</span>
                          <span className="text-[#d0ff00]">87%</span>
                        </div>
                        <Progress value={87} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black">Ver Todas Automações</Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-white">Próximas Execuções</CardTitle>
                    <CardDescription className="text-white/60">Automações agendadas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg border border-[#d0ff00]/10">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#d0ff00]/10">
                            <CalendarClock className="h-5 w-5 text-[#d0ff00]" />
                          </div>
                          <div>
                            <p className="text-white font-medium">E-mail Semanal</p>
                            <p className="text-xs text-white/60">650 destinatários</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">Hoje</p>
                          <p className="text-xs text-white/60">14:30</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg border border-[#d0ff00]/10">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#d0ff00]/10">
                            <Users className="h-5 w-5 text-[#d0ff00]" />
                          </div>
                          <div>
                            <p className="text-white font-medium">Segmentação de Clientes</p>
                            <p className="text-xs text-white/60">Automático</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">Amanhã</p>
                          <p className="text-xs text-white/60">03:00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg border border-[#d0ff00]/10">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#d0ff00]/10">
                            <Activity className="h-5 w-5 text-[#d0ff00]" />
                          </div>
                          <div>
                            <p className="text-white font-medium">Reengajamento</p>
                            <p className="text-xs text-white/60">124 clientes inativos</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">Quinta</p>
                          <p className="text-xs text-white/60">10:00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10">
                      Adicionar Nova Automação
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">Performance das Automações (Últimos 30 dias)</CardTitle>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ChartContainer 
                    config={{ 
                      mensagens: { color: "#d0ff00" },
                      aberturas: { color: "#0088FE" },
                      clicks: { color: "#FF6B6B" }
                    }}
                  >
                    <AreaChart
                      data={[
                        { name: '01/06', mensagens: 400, aberturas: 240, clicks: 100 },
                        { name: '08/06', mensagens: 350, aberturas: 198, clicks: 87 },
                        { name: '15/06', mensagens: 420, aberturas: 260, clicks: 112 },
                        { name: '22/06', mensagens: 380, aberturas: 230, clicks: 89 },
                        { name: '29/06', mensagens: 450, aberturas: 278, clicks: 134 },
                        { name: '06/07', mensagens: 470, aberturas: 290, clicks: 145 },
                      ]}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#666" />
                      <YAxis stroke="#666" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Area type="monotone" dataKey="mensagens" stackId="1" stroke="#d0ff00" fill="#d0ff00" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="aberturas" stackId="2" stroke="#0088FE" fill="#0088FE" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="clicks" stackId="3" stroke="#FF6B6B" fill="#FF6B6B" fillOpacity={0.3} />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Connections Tab */}
            <TabsContent value="connections" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md col-span-1 md:col-span-3">
                  <CardHeader>
                    <CardTitle className="text-white">Integrações Ativas</CardTitle>
                    <CardDescription className="text-white/60">Serviços conectados à sua conta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-black/30 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-[#d0ff00]/10">
                            <img 
                              src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                              alt="Google" 
                              className="h-8 w-8 object-contain rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-white font-medium">Google Ads</p>
                            <p className="text-xs text-[#d0ff00]">Conectado</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 h-8">
                          Configurar
                        </Button>
                      </div>
                      
                      <div className="bg-black/30 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-[#d0ff00]/10">
                            <img 
                              src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                              alt="Meta" 
                              className="h-8 w-8 object-contain rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-white font-medium">Meta Ads</p>
                            <p className="text-xs text-[#d0ff00]">Conectado</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 h-8">
                          Configurar
                        </Button>
                      </div>
                      
                      <div className="bg-black/30 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-[#d0ff00]/10">
                            <img 
                              src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                              alt="Zapier" 
                              className="h-8 w-8 object-contain rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-white font-medium">Zapier</p>
                            <p className="text-xs text-[#d0ff00]">Conectado</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 h-8">
                          Configurar
                        </Button>
                      </div>
                      
                      <div className="bg-black/30 p-4 rounded-lg border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-white/5">
                            <img 
                              src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                              alt="Stripe" 
                              className="h-8 w-8 object-contain rounded-full opacity-50"
                            />
                          </div>
                          <div>
                            <p className="text-white/70 font-medium">Stripe</p>
                            <p className="text-xs text-white/50">Desconectado</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-white/10 text-white/70 hover:bg-white/5 h-8">
                          Conectar
                        </Button>
                      </div>
                      
                      <div className="bg-black/30 p-4 rounded-lg border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-white/5">
                            <img 
                              src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                              alt="Mailchimp" 
                              className="h-8 w-8 object-contain rounded-full opacity-50"
                            />
                          </div>
                          <div>
                            <p className="text-white/70 font-medium">Mailchimp</p>
                            <p className="text-xs text-white/50">Desconectado</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-white/10 text-white/70 hover:bg-white/5 h-8">
                          Conectar
                        </Button>
                      </div>
                      
                      <div className="bg-black/30 p-4 rounded-lg border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-white/5">
                            <img 
                              src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                              alt="HubSpot" 
                              className="h-8 w-8 object-contain rounded-full opacity-50"
                            />
                          </div>
                          <div>
                            <p className="text-white/70 font-medium">HubSpot</p>
                            <p className="text-xs text-white/50">Desconectado</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-white/10 text-white/70 hover:bg-white/5 h-8">
                          Conectar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black">
                      Adicionar Nova Integração
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">Tráfego de Dados por Integração</CardTitle>
                </CardHeader>
                <CardContent className="h-[320px]">
                  <ChartContainer 
                    config={{
                      entrada: { color: "#d0ff00" },
                      saida: { color: "#FF6B6B" }
                    }}
                  >
                    <BarChart
                      data={[
                        { name: 'Google Ads', entrada: 450, saida: 210 },
                        { name: 'Meta Ads', entrada: 320, saida: 180 },
                        { name: 'Zapier', entrada: 280, saida: 290 },
                        { name: 'Webhook', entrada: 190, saida: 110 },
                        { name: 'API', entrada: 320, saida: 340 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#666" />
                      <YAxis stroke="#666" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="entrada" name="Dados Recebidos" fill="#d0ff00" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="saida" name="Dados Enviados" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Data Tab */}
            <TabsContent value="data" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Base de Contatos</CardTitle>
                      <div className="p-2 rounded-lg bg-[#d0ff00]/10">
                        <Users className="h-5 w-5 text-[#d0ff00]" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">8.452</div>
                    <div className="flex items-center gap-2 text-green-500 text-sm mb-4">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>+245 nos últimos 30 dias</span>
                    </div>
                    <div className="space-y-4 mt-2">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white">Leads</span>
                          <span className="text-white/70">5.842</span>
                        </div>
                        <Progress value={68} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white">Clientes</span>
                          <span className="text-white/70">2.610</span>
                        </div>
                        <Progress value={32} className="h-2 bg-white/10" indicatorClassName="bg-[#0088FE]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Taxa de Conversão</CardTitle>
                      <div className="p-2 rounded-lg bg-[#d0ff00]/10">
                        <Activity className="h-5 w-5 text-[#d0ff00]" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">12.4%</div>
                    <div className="flex items-center gap-2 text-green-500 text-sm mb-4">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>+2.3% comparado ao mês anterior</span>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                      <div>
                        <p className="text-white text-sm mb-1">Meta Mensal</p>
                        <p className="text-lg font-medium text-white">15%</p>
                      </div>
                      <div>
                        <p className="text-[#d0ff00] font-medium">82% concluído</p>
                        <Progress value={82} className="h-2 bg-white/10 w-32 mt-1" indicatorClassName="bg-[#d0ff00]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Ticket Médio</CardTitle>
                      <div className="p-2 rounded-lg bg-[#d0ff00]/10">
                        <LineIcon className="h-5 w-5 text-[#d0ff00]" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">R$ 1.840</div>
                    <div className="flex items-center gap-2 text-green-500 text-sm mb-4">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>+R$ 210 comparado ao mês anterior</span>
                    </div>
                    <div className="h-24 mt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={[
                          { date: '01/06', valor: 1580 },
                          { date: '08/06', valor: 1650 },
                          { date: '15/06', valor: 1720 },
                          { date: '22/06', valor: 1790 },
                          { date: '29/06', valor: 1840 },
                        ]}>
                          <Line type="monotone" dataKey="valor" stroke="#d0ff00" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">Análise de Funil de Vendas</CardTitle>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ChartContainer 
                    config={{ 
                      visitantes: { color: "#d0ff00" },
                      leads: { color: "#0088FE" },
                      oportunidades: { color: "#FFBB28" },
                      clientes: { color: "#FF6B6B" }
                    }}
                  >
                    <BarChart
                      data={[
                        { name: 'Visitantes', total: 9840 },
                        { name: 'Leads', total: 3250 },
                        { name: 'Oportunidades', total: 1280 },
                        { name: 'Clientes', total: 520 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                      <XAxis type="number" stroke="#666" />
                      <YAxis dataKey="name" type="category" stroke="#666" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="total" name="Quantidade" radius={[0, 4, 4, 0]}>
                        {[
                          <Cell key="cell-0" fill="#d0ff00" />,
                          <Cell key="cell-1" fill="#0088FE" />,
                          <Cell key="cell-2" fill="#FFBB28" />,
                          <Cell key="cell-3" fill="#FF6B6B" />,
                        ]}
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12 md:mt-16 py-8 md:py-10 glass-panel bg-black/40 border border-[#d0ff00]/20 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
              Maximize seus resultados com nossos planos
            </h3>
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Desbloquele recursos avançados de analytics, automação e integrações com o plano certo para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#d0ff00] hover:bg-[#b3e600] text-black px-5 md:px-6 py-2.5 md:py-3 text-base font-semibold shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transition-all duration-300" 
                size="lg"
                asChild
              >
                <a href="/pricing">Ver Planos</a>
              </Button>
              <Button 
                className="border border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 px-5 md:px-6 py-2.5 md:py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300" 
                size="lg" 
                variant="outline"
                asChild
              >
                <a href="/demo">Agendar Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
