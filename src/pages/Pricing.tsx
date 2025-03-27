
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, HelpCircle, Plus, Check, ArrowDown, DollarSign } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComparisonTable, { ToolInfo } from '@/components/shared/ComparisonTable';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [billingAnnual, setBillingAnnual] = useState(true);

  const plans = [
    {
      name: 'PRO',
      price: billingAnnual ? 497 * 10 : 497,
      period: billingAnnual ? '/ano' : '/mês',
      description: 'Para pequenas empresas e empreendedores',
      features: [
        'Até 3 usuários (+ R$69 por usuário adicional)',
        'Até 20.000 contatos',
        'Agendamentos e Calendários',
        'Inbox unificado com WhatsApp, Instagram e e-mail',
        'Construção de Funis/Landing Pages ilimitadas',
        'Automações de e-mail',
        'CRM de vendas',
        'Reputação',
        'Acesso à RevHackers Academy'
      ],
      additionalCosts: [
        '$0.0105 Fluxos de trabalho Premium',
        '$0.002625 Verificação de e-mail',
        '$0.0945 Conteúdo de IA',
        '$0.0315 Fluxos de trabalho com IA',
        '$0.021 Por mensagem para IA',
        '$0.0777 Conversa no WhatsApp',
        '$0.0004254 Por e-mail disparado'
      ],
      cta: 'CONTRATAR PLANO',
      checkoutLink: 'https://checkout.growthfunnels.com.br/pro',
      popular: false
    },
    {
      name: 'PLUS',
      price: billingAnnual ? 697 * 10 : 697,
      period: billingAnnual ? '/ano' : '/mês',
      description: 'Para empresas em crescimento',
      features: [
        'Todos os Recursos Pro +',
        'Até 50.000 contatos',
        'Workflows e Automações',
        'Webhooks e APIs',
        'Gestor de Social Media Completo',
        'Chat Widgets e Bots de IA',
        'Ferramenta de Cursos com Certificados (adeus, Hotmart!)',
        'Pagamentos: crie produtos, faturas, assinaturas, conecte com Stripe e +',
        'Gestão de afiliados e campanhas',
        'Ferramenta de Criação de Comunidades'
      ],
      additionalCosts: [
        '$0.0105 Fluxos de trabalho Premium',
        '$0.002625 Verificação de e-mail',
        '$0.0945 Conteúdo de IA',
        '$0.0315 Fluxos de trabalho com IA',
        '$0.021 Por mensagem para IA',
        '$0.0777 Conversa no WhatsApp',
        '$0.0004254 Por e-mail disparado'
      ],
      cta: 'CONTRATAR PLANO',
      checkoutLink: 'https://checkout.growthfunnels.com.br/plus',
      popular: true
    },
    {
      name: 'ENTERPRISE',
      price: null,
      period: '',
      description: 'Para equipes e empresas escaláveis',
      features: [
        'Todos os recursos Plus +',
        'Usuários ilimitados',
        'Contatos ilimitados',
        'Whitelabel',
        'Realizamos todo o seu setup',
        'Implementação por especialistas',
        'Total controle e flexibilidade',
        'Suporte dedicado'
      ],
      additionalCosts: [],
      cta: 'FALE CONOSCO',
      checkoutLink: 'https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd',
      popular: false
    }
  ];

  const replacementTools: ToolInfo[] = [
    { 
      name: "CRM & Pipeline de Vendas", 
      value: "R$ 502,71/mês", 
      tools: ["Pipedrive", "Close", "Salesflare", "ActiveCampaign"],
      logos: [
        "/lovable-uploads/ec2d3fe2-1f5f-4a70-9f28-8af8a18ffe4d.png", 
        "/lovable-uploads/23a9d576-f113-4771-b2d3-ff5962bb0ae4.png",
        "/lovable-uploads/28b22c78-8b09-4993-9304-088fc6a22e3d.png",
        "/lovable-uploads/76071022-36a4-436d-b967-40b405aa5348.png"
      ]
    },
    { 
      name: "Funis de vendas", 
      value: "R$ 1.507,22/mês", 
      tools: ["Salesforce", "Pipefy", "HubSpot"],
      logos: [
        "/lovable-uploads/fa9ce812-73e9-4b7a-8a2d-8d4bec1b9366.png",
        "/lovable-uploads/af51da29-988c-4767-aa02-b724b80fd078.png",
        "/lovable-uploads/85e849b6-0017-45f5-b4aa-d9c00e9236e5.png"
      ]
    },
    { 
      name: "Planejamento de redes sociais", 
      value: "R$ 24,90/mês", 
      tools: ["mLabs", "Etus"],
      logos: [
        "/lovable-uploads/873518a3-4940-430d-985b-470b533d4b7a.png",
        "/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"
      ]
    },
    { 
      name: "Construtor de sites", 
      value: "R$ 248,75/mês", 
      tools: ["WordPress", "Wix", "Webflow"],
      logos: [
        "/lovable-uploads/1afce23a-a9c6-4720-a725-f3a850ce22be.png",
        "/lovable-uploads/19e748f8-e8c3-4367-a3ed-5d16da13f8c1.png",
        "/lovable-uploads/f08c6356-9c67-4e4d-8373-5cfd85f5e2f4.png"
      ]
    },
    { 
      name: "Formulários e Pesquisas", 
      value: "R$ 457,03/mês", 
      tools: ["Typeform", "Google Forms", "Respond.io"],
      logos: [
        "/lovable-uploads/b1082615-5b0d-4bd3-9b75-ee2724be2d23.png",
        "/lovable-uploads/84ede28a-0919-4309-ba2c-876a53719806.png",
        "/lovable-uploads/88654284-fd43-4ec7-b610-7c068119ff81.png"
      ]
    },
    { 
      name: "E-mail marketing", 
      value: "R$ 406,25/mês", 
      tools: ["Brevo", "Mailchimp", "ActiveCampaign"],
      logos: [
        "/lovable-uploads/3ae50462-d15d-4181-8b6b-e438e28d2c65.png",
        "/lovable-uploads/25d0a1ba-c7ab-4632-a6d7-ba4487a0a28c.png",
        "/lovable-uploads/76071022-36a4-436d-b967-40b405aa5348.png"
      ]
    },
    { 
      name: "Calendário e Agendamentos", 
      value: "R$ 111,72/mês", 
      tools: ["Calendly", "Google Calendar"],
      logos: [
        "/lovable-uploads/1ececfa5-5b1c-40d9-97cc-7d5d576880b0.png",
        "/lovable-uploads/efea1fc0-61ab-4104-bbee-bdb236109631.png"
      ]
    },
    { 
      name: "Automações de marketing", 
      value: "R$ 858,20/mês", 
      tools: ["ActiveCampaign", "Salesforce Marketing Cloud"],
      logos: [
        "/lovable-uploads/76071022-36a4-436d-b967-40b405aa5348.png",
        "/lovable-uploads/fa9ce812-73e9-4b7a-8a2d-8d4bec1b9366.png"
      ]
    },
    { 
      name: "Cursos/Produtos", 
      value: "R$ 492,54/mês", 
      tools: ["Hotmart", "Eduzz", "Kiwify", "HeroSpark"],
      logos: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    },
    { 
      name: "Chamadas e monitoramentos", 
      value: "R$ 482,47/mês", 
      tools: ["GoTo Connect", "Twilio"],
      logos: [
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    },
    { 
      name: "Gestão de reputação", 
      value: "R$ 2.448/mês", 
      tools: ["Trustpilot"],
      logos: [
        "/placeholder.svg"
      ]
    },
    { 
      name: "Analytics", 
      value: "R$ 126,96/mês", 
      tools: ["Mixpanel", "Amplitude"],
      logos: [
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    }
  ];
  
  const totalSaving = "R$ 10.122,40";

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Uma <span className="text-gradient">plataforma completa</span> pelo preço de uma ferramenta
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Economize até 90% substituindo várias ferramentas e tendo tudo em um só lugar
            </p>
            
            <div className="flex items-center justify-center mb-10">
              <div className="bg-white/10 p-1 rounded-full">
                <div className="flex">
                  <button
                    onClick={() => setBillingAnnual(false)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      !billingAnnual 
                        ? 'bg-[#d0ff00] text-black' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Mensal
                  </button>
                  <button
                    onClick={() => setBillingAnnual(true)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                      billingAnnual 
                        ? 'bg-[#d0ff00] text-black' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Anual
                    <span className="bg-black/20 text-white text-xs px-2 py-0.5 rounded-full">
                      Economize 16%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-black rounded-2xl p-8 flex flex-col h-full relative ${
                  plan.popular 
                    ? 'border-2 border-[#d0ff00]' 
                    : 'border border-[#d0ff00]/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#d0ff00] text-black py-1 px-4 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#d0ff00] mb-2">{plan.name}</h3>
                <p className="text-white/70 mb-6">{plan.description}</p>
                <div className="mb-6">
                  {plan.price ? (
                    <>
                      <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
                      <span className="text-white/70">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-white">Entre em contato</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#d0ff00] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.additionalCosts.length > 0 && (
                  <div className="mt-4 mb-6">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Plus className="h-4 w-4 text-[#d0ff00]" />
                      <span className="text-sm font-medium">Custos Adicionais</span>
                    </div>
                    <ul className="text-xs text-white/60 space-y-1 pl-6">
                      {plan.additionalCosts.slice(0, 3).map((cost, i) => (
                        <li key={i}>{cost}</li>
                      ))}
                      {plan.additionalCosts.length > 3 && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="text-[#d0ff00] text-xs">
                              + {plan.additionalCosts.length - 3} mais
                            </TooltipTrigger>
                            <TooltipContent>
                              <ul className="space-y-1">
                                {plan.additionalCosts.slice(3).map((cost, i) => (
                                  <li key={i}>{cost}</li>
                                ))}
                              </ul>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </ul>
                  </div>
                )}
                
                <div className="mt-auto">
                  <div className="flex justify-center py-2 mb-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-5 mx-1" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-5 mx-1" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="American Express" className="h-5 mx-1" />
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="Paypal" className="h-5 mx-1" />
                  </div>
                  
                  <a href={plan.checkoutLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-[#d0ff00] text-black hover:bg-[#b3e600] font-bold' 
                          : 'border border-[#d0ff00]/60 text-[#d0ff00] hover:bg-[#d0ff00]/10 hover:text-white font-medium'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-white/5 rounded-xl overflow-hidden border border-[#d0ff00]/10">
            <div className="p-6 border-b border-[#d0ff00]/10">
              <h3 className="text-2xl font-bold text-white">Quanto você economiza com GrowthFunnels?</h3>
              <p className="text-white/70 mt-2">A plataforma substitui mais de 12 ferramentas diferentes</p>
            </div>
            
            <div className="p-6">
              <ComparisonTable 
                replacementTools={replacementTools}
                totalSaving={totalSaving}
                variant="pricing"
                showHeader={false}
                showFooter={false}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <Card className="bg-black border border-[#d0ff00]/20">
                    <CardHeader>
                      <CardTitle className="text-white">O que você substituirá:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {replacementTools.map((tool, index) => (
                          <li key={index} className="flex justify-between pb-2 border-b border-white/10">
                            <span className="text-white/80">{tool.name}</span>
                            <span className="text-white">{tool.value}</span>
                          </li>
                        ))}
                        <li className="flex justify-between pt-2">
                          <span className="text-white font-bold">Total:</span>
                          <span className="text-[#d0ff00] font-bold">{totalSaving}/mês</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="bg-black border border-[#d0ff00]/20 h-full">
                    <CardHeader>
                      <CardTitle className="text-white">Com GrowthFunnels você paga:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center justify-center h-full space-y-6">
                        <div className="text-center">
                          <p className="text-white/70 mb-2">A partir de:</p>
                          <p className="text-5xl font-bold text-[#d0ff00]">R$ 497<span className="text-white/70 text-base">/mês</span></p>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-white/70 mb-2">Economia de até:</p>
                          <p className="text-3xl font-bold text-white">90%</p>
                        </div>
                        
                        <a href="https://checkout.growthfunnels.com.br/pro" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-[#d0ff00] text-black hover:bg-[#b3e600] mt-4 font-bold" size="lg">
                            Contratar Plano PRO
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Perguntas frequentes sobre preços</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <TooltipProvider>
                <div className="bg-white/5 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
                  <p className="text-white">Posso trocar de plano a qualquer momento?</p>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white/60">
                        <HelpCircle className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Ao fazer upgrade, o valor será calculado proporcionalmente.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
                  <p className="text-white">O teste grátis tem limitações?</p>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white/60">
                        <HelpCircle className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">O teste grátis de 14 dias inclui todas as funcionalidades do plano Pro, sem restrições.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
                  <p className="text-white">Existe taxa de setup ou cancelamento?</p>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white/60">
                        <HelpCircle className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">Não cobramos nenhuma taxa de setup ou cancelamento. Você pode cancelar sua assinatura a qualquer momento.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
