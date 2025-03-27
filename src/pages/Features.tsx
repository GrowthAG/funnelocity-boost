import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, XCircle, FormInput, Tag, Filter, Mail, Calendar, MessageCircle, Database, Clock, ShoppingCart, BadgeCheck, Bell, Check, ArrowDown, DollarSign } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeCategory, setActiveCategory] = useState("adManager");
  const isMobile = useIsMobile();
  const featureCategories = [{
    id: "adManager",
    label: "🔍 Ad Manager & Reporting"
  }, {
    id: "marketing",
    label: "📧 Marketing"
  }, {
    id: "workflow",
    label: "⚙️ Workflows & Automação"
  }, {
    id: "crm",
    label: "👥 CRM & Outras Ferramentas"
  }];

  const automationWorkflow = {
    title: "Sequência de Nutrição de Leads",
    conversion: "32%",
    steps: [{
      type: "trigger",
      title: "Formulário Preenchido",
      description: "Lead preenche formulário no site",
      icon: <FormInput className="h-5 w-5 text-white" />,
      color: "#9b87f5"
    }, {
      type: "filter",
      title: "Interesse no Produto X?",
      description: "Segmenta leads por interesse",
      icon: <Filter className="h-5 w-5 text-white" />,
      color: "#F97316"
    }, {
      type: "action",
      title: "Enviar Sequência de E-mails",
      description: "3 e-mails educativos em 7 dias",
      icon: <Mail className="h-5 w-5 text-white" />,
      color: "#0EA5E9"
    }, {
      type: "action",
      title: "Adicionar Tag no CRM",
      description: "Tag 'Nutrido' + notificação",
      icon: <Tag className="h-5 w-5 text-black" />,
      color: "#d0ff00"
    }]
  };

  const features = {
    adManager: [{
      name: 'Google Ads Report',
      extraCost: false,
      description: 'Painel com desempenho de campanhas Google Ads.'
    }, {
      name: 'Meta Ads Report',
      extraCost: false,
      description: 'Painel com desempenho de campanhas Facebook/Instagram.'
    }, {
      name: 'Attribution Report',
      extraCost: false,
      description: 'Conversões por canal de origem.'
    }, {
      name: 'Appointment Report',
      extraCost: false,
      description: 'Conversões de agendamentos por origem.'
    }, {
      name: 'Call Report',
      extraCost: false,
      description: 'Conversões por chamadas telefônicas.'
    }],
    marketing: [{
      name: 'Disparo de E-mails',
      extraCost: true,
      description: 'Envio de campanhas e automações por e-mail.'
    }, {
      name: 'Verificação de E-mails',
      extraCost: true,
      description: 'Validação de e-mails para evitar hard bounce.'
    }, {
      name: 'Construtor de E-mails',
      extraCost: false,
      description: 'Editor intuitivo drag & drop.'
    }],
    workflow: [{
      name: 'Automação de Nutrição de Leads',
      extraCost: false,
      description: 'Sequências de e-mails e mensagens baseadas em comportamento do usuário que aumentam sua taxa de conversão em 32%.'
    }, {
      name: 'Automação de Carrinho Abandonado',
      extraCost: false,
      description: 'Recupere até 24% das vendas perdidas com lembretes automáticos via WhatsApp e e-mail.'
    }, {
      name: 'Onboarding de Clientes',
      extraCost: false,
      description: 'Entregue conteúdo educacional e agende demonstrações automaticamente para novos clientes.'
    }, {
      name: 'Workflows Avançados',
      extraCost: true,
      description: 'Crie automações complexas com múltiplas condições, atrasos e bifurcações.'
    }, {
      name: 'Triggers Personalizados',
      extraCost: true,
      description: 'Configure gatilhos baseados em eventos específicos do seu negócio.'
    }],
    crm: [{
      name: 'CRM completo',
      extraCost: false,
      description: 'Gerenciamento de contatos, oportunidades e pipelines.'
    }, {
      name: 'Funnels',
      extraCost: false,
      description: 'Criação de funis de vendas visuais.'
    }, {
      name: 'Social Planner',
      extraCost: false,
      description: 'Agendamento de postagens em redes sociais.'
    }, {
      name: 'Membership',
      extraCost: true,
      description: 'Área de membros com acesso restrito.'
    }, {
      name: 'Communities',
      extraCost: false,
      description: 'Criação de comunidades para engajar leads.'
    }]
  };

  const replacementTools = [{
    name: "CRM & Pipeline de Vendas",
    value: "R$ 502,71/mês",
    logos: [{
      name: "Pipedrive",
      src: "/lovable-uploads/8d450804-20c6-46f6-9f0c-836bc0fa3ec2.png"
    }, {
      name: "Close",
      src: "/lovable-uploads/8d450804-20c6-46f6-9f0c-836bc0fa3ec2.png"
    }, {
      name: "ActiveCampaign",
      src: "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png"
    }, {
      name: "Salesflare",
      src: "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png"
    }]
  }, {
    name: "Funis de vendas",
    value: "R$ 1.507,22/mês",
    logos: [{
      name: "Salesforce",
      src: "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png"
    }, {
      name: "Pipefy",
      src: "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png"
    }, {
      name: "HubSpot",
      src: "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png"
    }]
  }, {
    name: "Planejamento de redes sociais",
    value: "R$ 24,90/mês",
    logos: [{
      name: "mLabs",
      src: "/lovable-uploads/8ba59a61-7e7a-49e9-adf2-e08574abd59b.png"
    }, {
      name: "Etus",
      src: "/lovable-uploads/2c2112ad-609f-45d0-a9c7-bf4fa9821097.png"
    }]
  }, {
    name: "Construtor de sites",
    value: "R$ 248,75/mês",
    logos: [{
      name: "WordPress",
      src: "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png"
    }, {
      name: "Wix",
      src: "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png"
    }, {
      name: "Webflow",
      src: "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png"
    }]
  }, {
    name: "Formulários e Pesquisas",
    value: "R$ 457,03/mês",
    logos: [{
      name: "Typeform",
      src: "/lovable-uploads/60db33c2-03f0-4a6c-8895-126a032cd6f3.png"
    }, {
      name: "Google Forms",
      src: "/lovable-uploads/7dffaafa-f42a-4ab3-8cf9-c6998479f2d5.png"
    }, {
      name: "Respond.io",
      src: "/lovable-uploads/1d6c3d72-1270-43d4-b0bb-1300829056ef.png"
    }]
  }, {
    name: "E-mail marketing",
    value: "R$ 406,25/mês",
    logos: [{
      name: "Brevo",
      src: "/lovable-uploads/a370bacb-4932-489a-80b1-47f3030227c3.png"
    }, {
      name: "Mailchimp",
      src: "/lovable-uploads/a370bacb-4932-489a-80b1-47f3030227c3.png"
    }, {
      name: "ActiveCampaign",
      src: "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png"
    }]
  }, {
    name: "Calendário e Agendamentos",
    value: "R$ 111,72/mês",
    logos: [{
      name: "Calendly",
      src: "/lovable-uploads/cb262656-76f3-4604-bea4-c8d1a91f4cd8.png"
    }, {
      name: "Google Calendar",
      src: "/lovable-uploads/7dffaafa-f42a-4ab3-8cf9-c6998479f2d5.png"
    }]
  }, {
    name: "Automações de marketing",
    value: "R$ 858,20/mês",
    logos: [{
      name: "ActiveCampaign",
      src: "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png"
    }, {
      name: "Salesforce Marketing Cloud",
      src: "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png"
    }]
  }, {
    name: "Cursos/Produtos",
    value: "R$ 492,54/mês",
    logos: [{
      name: "Hotmart",
      src: "/lovable-uploads/fafd30ca-de73-40a1-accf-bb56a14b939d.png"
    }, {
      name: "Eduzz",
      src: "/lovable-uploads/f157b2b4-81b3-47df-9349-f2b5e65e6fac.png"
    }, {
      name: "Kiwify",
      src: "/lovable-uploads/abaa61f2-0495-45f4-8d2f-7de74d200d17.png"
    }, {
      name: "HeroSpark",
      src: "/lovable-uploads/f9fa06e2-b163-447f-8bdd-318737e3fb97.png"
    }]
  }, {
    name: "Chamadas e monitoramentos",
    value: "R$ 482,47/mês",
    logos: [{
      name: "GoTo Connect",
      src: "/lovable-uploads/cb262656-76f3-4604-bea4-c8d1a91f4cd8.png"
    }, {
      name: "Twilio",
      src: "/lovable-uploads/1d6c3d72-1270-43d4-b0bb-1300829056ef.png"
    }]
  }, {
    name: "Gestão de reputação",
    value: "R$ 2.448,00/mês",
    logos: [{
      name: "Trustpilot",
      src: "/lovable-uploads/2c2112ad-609f-45d0-a9c7-bf4fa9821097.png"
    }]
  }, {
    name: "Analytics",
    value: "R$ 126,96/mês",
    logos: [{
      name: "Mixpanel",
      src: "/lovable-uploads/4f7a5365-d10b-430c-a678-34f30b6019f3.png"
    }, {
      name: "Amplitude",
      src: "/lovable-uploads/4f7a5365-d10b-430c-a678-34f30b6019f3.png"
    }]
  }];

  const totalSaving = "R$ 10.122,40";

  const FeatureTable = ({
    featureList
  }: {
    featureList: any[];
  }) => <div className="overflow-x-auto w-full rounded-b-xl">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="text-left p-3 md:p-4 bg-white/5 text-white rounded-tl-lg border-b border-[#d0ff00]/10">Feature</th>
            <th className="text-center p-3 md:p-4 bg-white/5 text-white border-b border-[#d0ff00]/10 w-20 md:w-32">Custo Extra</th>
            <th className="text-left p-3 md:p-4 bg-white/5 text-white rounded-tr-lg border-b border-[#d0ff00]/10">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {featureList.map((feature, index) => <tr key={index} className="hover:bg-black/60 transition-colors">
              <td className="p-3 md:p-4 text-white font-medium border-t border-[#d0ff00]/10">{feature.name}</td>
              <td className="p-3 md:p-4 text-center border-t border-[#d0ff00]/10">
                {feature.extraCost ? <XCircle className="h-5 w-5 text-destructive mx-auto" /> : <CheckCircle className="h-5 w-5 text-[#d0ff00] mx-auto" />}
              </td>
              <td className="p-3 md:p-4 text-white/80 border-t border-[#d0ff00]/10">{feature.description}</td>
            </tr>)}
        </tbody>
      </table>
    </div>;

  const renderToolLogo = (logo: {
    name: string;
    src: string;
  }) => <img key={logo.name} src={logo.src} alt={`${logo.name} logo`} title={logo.name} className="h-8 w-auto max-w-[100px] object-fill" />;

  return <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20 md:pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white mobile-friendly-text">
              Explore tudo o que você pode fazer com o <span className="text-gradient">GrowthFunnels</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mobile-friendly-text">
              Funcionalidades completas para automatizar sua operação de ponta a ponta.
            </p>
          </div>
          
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Uma plataforma substitui <span className="text-[#d0ff00]">todas</span> essas ferramentas
              </h2>
              <p className="text-white/70">
                Com o GrowthFunnels, você economiza tempo e dinheiro substituindo múltiplas ferramentas fragmentadas
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#d0ff00]/30">
              <div className="bg-[#d0ff00] p-5 md:p-6">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 md:col-span-5">
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
                      <img alt="Growth Funnels Logo" className="h-12 w-auto object-contain brightness-0" src="/lovable-uploads/38330c75-db65-4540-ae8c-3b05f2f6cd94.png" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-[#d0ff00]/30">
                {replacementTools.map((tool, index) => <div key={index} className="flex items-center p-4 md:p-5 bg-black hover:bg-black/80 transition-colors">
                    <div className="w-full grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-5 md:col-span-5">
                        <div className="text-white text-sm md:text-base">{tool.name}</div>
                      </div>
                      <div className="col-span-4 md:col-span-3">
                        <div className="flex flex-wrap justify-center items-center gap-2 bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                          {tool.logos.map(logo => <div key={logo.name} className="flex items-center justify-center p-1">
                              <img src={logo.src} alt={logo.name} className="h-5 w-auto max-w-[24px] object-contain" />
                            </div>)}
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
                  </div>)}
              </div>
              
              <div className="bg-[#d0ff00]/10 p-4 md:p-6">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 md:col-span-5">
                    <h3 className="text-lg md:text-xl font-bold text-white">Economia Total</h3>
                  </div>
                  <div className="col-span-3 md:col-span-3">
                  </div>
                  <div className="col-span-4 md:col-span-4 text-right md:text-center">
                    <div className="flex items-center justify-end md:justify-center gap-3 md:gap-4">
                      <span className="text-red-500/70 line-through text-sm md:text-base">{totalSaving}</span>
                      <div className="flex items-center">
                        <img src="/lovable-uploads/2af2ab0f-347b-4cb0-b0d4-882a872e07fe.png" alt="GrowthFunnels Logo" className="h-6 w-auto mr-2" />
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
          </div>
          
          <Tabs defaultValue="adManager" value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-16">
            <div className="relative mb-8 md:mb-10">
              <div className="absolute inset-0 bg-[#d0ff00]/5 rounded-lg -z-10" />
              <div className="overflow-x-auto py-2 px-1 no-scrollbar">
                <TabsList className="bg-black/80 border border-[#d0ff00]/20 p-1 rounded-lg inline-flex w-full min-w-max">
                  {featureCategories.map(category => <TabsTrigger key={category.id} value={category.id} className={`
                        px-3 md:px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300
                        data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
                        data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
                        min-w-[80px] md:min-w-0 justify-center md:justify-start
                      `}>
                      {isMobile ? category.label.split(' ')[0] : category.label}
                    </TabsTrigger>)}
                </TabsList>
              </div>
            </div>
            
            {featureCategories.map(category => <TabsContent key={category.id} value={category.id} className="animate-fade-in">
                {category.id === "workflow" && <div className="mb-8 rounded-xl overflow-hidden border border-[#d0ff00]/20 bg-black/40">
                    <div className="p-5 border-b border-[#d0ff00]/10">
                      <h3 className="text-xl font-bold text-white">Automação que realmente converte</h3>
                      <p className="text-white/70 mt-1">Configure uma vez e deixe seu marketing e vendas trabalharem 24/7</p>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-white font-medium">{automationWorkflow.title}</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-[#9b87f5] text-xs font-medium">Conversão: {automationWorkflow.conversion}</span>
                            <span className="mx-2 text-white/30">•</span>
                            <span className="text-white/50 text-xs">204 leads nos últimos 30 dias</span>
                          </div>
                        </div>
                        <Button className="text-xs bg-[#d0ff00] hover:bg-[#b3e600] text-black">Ver Detalhes</Button>
                      </div>
                      
                      <div className="mt-6 relative">
                        <div className="absolute left-[22px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#9b87f5] to-[#d0ff00]"></div>
                        
                        {automationWorkflow.steps.map((step, index) => <div key={index} className="flex mb-5 relative">
                            <div className="w-11 h-11 rounded-full flex items-center justify-center z-10 shrink-0" style={{
                      backgroundColor: step.color
                    }}>
                              {step.icon}
                            </div>
                            <div className="ml-4 bg-black/40 rounded-lg p-3 flex-1 border" style={{
                      borderColor: `${step.color}30`
                    }}>
                              <h5 className="text-white text-sm font-medium mb-1">{step.type === "trigger" ? "Trigger" : step.type === "filter" ? "Condição" : "Ação"}: {step.title}</h5>
                              <p className="text-white/60 text-xs">{step.description}</p>
                            </div>
                          </div>)}
                      </div>
                      
                      <div className="mt-6 pt-5 border-t border-[#d0ff00]/10">
                        <h4 className="text-white/80 text-sm font-medium mb-3">Integrações Disponíveis:</h4>
                        <div className="flex flex-wrap gap-2">
                          <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                            <MessageCircle className="h-4 w-4 text-[#25D366]" />
                            <span className="text-white/80 text-xs">WhatsApp</span>
                          </div>
                          <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                            <Mail className="h-4 w-4 text-[#d0ff00]" />
                            <span className="text-white/80 text-xs">E-mail</span>
                          </div>
                          <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                            <Database className="h-4 w-4 text-[#4A66FB]" />
                            <span className="text-white/80 text-xs">CRM</span>
                          </div>
                          <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-[#0EA5E9]" />
                            <span className="text-white/80 text-xs">Calendário</span>
                          </div>
                          <div className="bg-black/40 border border-[#d0ff00]/10 rounded-full py-1.5 px-3 flex items-center gap-2">
                            <Bell className="h-4 w-4 text-[#ea384c]" />
                            <span className="text-white/80 text-xs">Notificações</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                
                <div className="mb-8 md:mb-12">
                  <FeatureTable featureList={features[category.id as keyof typeof features]} />
                </div>
              </TabsContent>)}
          </Tabs>
          
          <div className="text-center mt-12 md:mt-16 py-8 md:py-10 glass-panel bg-black/40 border border-[#d0ff00]/20 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
              Pronto para começar a automatizar sua operação?
            </h3>
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Escolha o plano que melhor se adapta às suas necessidades e comece a transformar sua estratégia de marketing e vendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#d0ff00] hover:bg-[#b3e600] text-black px-5 md:px-6 py-2.5 md:py-3 text-base font-semibold shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transition-all duration-300" size="lg" asChild>
                <a href="/pricing">Ver Planos e Preços</a>
              </Button>
              <Button className="border border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 px-5 md:px-6 py-2.5 md:py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300" size="lg" variant="outline" asChild>
                <a href="/demo">Agendar Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};

export default Features;
