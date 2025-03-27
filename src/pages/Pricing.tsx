
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, HelpCircle, Plus, Check, ArrowDown, Shield, CreditCard } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComparisonTable from '@/components/shared/ComparisonTable';

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

  const replacementTools = [
    { name: "CRM & Pipeline de Vendas", value: "R$ 502,71" },
    { name: "Funis de vendas", value: "R$ 1.507,22" },
    { name: "Planejamento de redes sociais", value: "R$ 24,90" },
    { name: "Construtor de sites", value: "R$ 248,75" },
    { name: "Formulários e Pesquisas", value: "R$ 457,03" },
    { name: "E-mail marketing", value: "R$ 406,25" },
    { name: "Calendário e Agendamentos", value: "R$ 111,72" },
    { name: "Automações de marketing", value: "R$ 858,20" },
    { name: "Cursos/Produtos", value: "R$ 492,54" },
    { name: "Chamadas e monitoramentos", value: "R$ 482,47" },
    { name: "Gestão de reputação", value: "R$ 2.448,00" }
  ];

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
                      {billingAnnual && (
                        <div className="text-white/70 text-sm mt-1">ou 12x de R$ {Math.floor(plan.price / 12)}</div>
                      )}
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
                  <div className="flex justify-center py-3 mb-4">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-6 w-6 text-white/70" />
                      <div className="flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-6 w-auto" />
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-6 w-auto" />
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="American Express" className="h-6 w-auto" />
                        <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="Paypal" className="h-6 w-auto" />
                      </div>
                    </div>
                  </div>
                  
                  <a href={plan.checkoutLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                      className={`w-full py-2.5`}
                      variant={plan.popular ? "greenNeon" : "redNeon"}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <ComparisonTable 
              replacementTools={replacementTools}
              totalSaving="R$ 7.539,79"
            />
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
