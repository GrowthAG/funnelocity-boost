import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, CreditCard, Plus } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ComparisonTable from '@/components/shared/ComparisonTable';
import { replacementToolsData, totalSavingData } from '@/utils/dashboardData';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Log para depuração quando a página carrega
    console.log("Links de checkout configurados:", {
      'PRO Anual': checkoutLinks.PRO.annual,
      'PRO Mensal': checkoutLinks.PRO.monthly,
      'PLUS Anual': checkoutLinks.PLUS.annual,
      'PLUS Mensal': checkoutLinks.PLUS.monthly,
      'Modo atual': billingAnnual ? 'Anual' : 'Mensal'
    });
  }, []);

  const [billingAnnual, setBillingAnnual] = useState(true);

  // Função para alternar entre os modos de cobrança
  const toggleBillingMode = (isAnnual) => {
    setBillingAnnual(isAnnual);
    console.log(`Modo de cobrança alterado para: ${isAnnual ? 'Anual' : 'Mensal'}`);
  };

  // Links de checkout - definidos de forma clara e sem variáveis
  const checkoutLinks = {
    PRO: {
      annual: "https://checkout.growthfunnels.com.br/pro-anual",
      monthly: "https://checkout.growthfunnels.com.br/pro-mensal"
    },
    PLUS: {
      annual: "https://checkout.growthfunnels.com.br/plus-anual",
      monthly: "https://checkout.growthfunnels.com.br/plus-mensal"
    },
    ENTERPRISE: "https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd"
  };

  // Função revisada que garante o uso dos links corretos
  const getCheckoutLink = (planName) => {
    // Para o plano ENTERPRISE, usa sempre o mesmo link
    if (planName === 'ENTERPRISE') {
      return checkoutLinks.ENTERPRISE;
    }

    // Escolhe o link baseado na seleção do usuário (anual ou mensal)
    if (billingAnnual) {
      console.log(`Link ${planName} anual:`, checkoutLinks[planName].annual);
      return checkoutLinks[planName].annual;
    } else {
      console.log(`Link ${planName} mensal:`, checkoutLinks[planName].monthly);
      return checkoutLinks[planName].monthly;
    }
  };

  const plans = [
    {
      name: 'PRO',
      price: billingAnnual ? 4970 : 497,
      period: billingAnnual ? '/ano' : '/mês',
      monthlyInstallment: billingAnnual ? 'ou 12x de R$ 414' : null,
      description: 'Para pequenas empresas e startups',
      features: [
        'Até 3 usuários (+ R$69 por usuário adicional)',
        'Até 20.000 contatos',
        'Agendamentos e Calendários',
        'Inbox unificado (WhatsApp, Instagram e e-mail)',
        'Funis/Landing Pages ilimitadas',
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
      popular: false
    },
    {
      name: 'PLUS',
      price: billingAnnual ? 6970 : 697,
      period: billingAnnual ? '/ano' : '/mês',
      monthlyInstallment: billingAnnual ? 'ou 12x de R$ 580' : null,
      description: 'Para empresas em desenvolvimento',
      features: [
        'Todos os Recursos Pro +',
        'Até 5 usuários (+ R$69 por usuário adicional)',
        'Até 50.000 contatos',
        'Workflows e Automações',
        'Webhooks e APIs',
        'Gestor de Social Media Completo',
        'Chat Widgets e Bots de IA',
        'Ferramenta de Cursos com Certificados',
        'Pagamentos integrados com Stripe e +',
        'Gestão de afiliados e comunidades'
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
      popular: true
    },
    {
      name: 'ENTERPRISE',
      price: null,
      period: '',
      description: 'Para corporações e grandes times',
      features: [
        'Todos os recursos Plus +',
        'Usuários ilimitados',
        'Contatos ilimitados',
        'Whitelabel',
        'Setup completo com especialistas',
        'Total controle e flexibilidade',
        'Suporte dedicado',
        'Integrações personalizadas',
        'Treinamento da equipe'
      ],
      additionalCosts: [],
      popular: false
    }
  ];

  // Componente de Tabela de Comparação Aprimorada
  const EnhancedComparisonTable = ({ replacementTools, totalSaving }) => {
    return (
      <div className="bg-black text-white">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://growthfunnels.com.br/wp-content/uploads/2024/05/logo-growth-funnels.svg" 
              alt="GrowthFunnels Logo" 
              className="h-10 mr-2" 
            />
            <span className="text-2xl font-bold">vs. Outras Soluções</span>
          </div>
          <p className="text-center text-white/70 mb-8 text-lg">
            Compare o custo e os recursos do GrowthFunnels com as alternativas do mercado e veja quanto você pode economizar enquanto simplifica sua stack de marketing e vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="p-6 border-r border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white">O que você substituirá:</h3>
            <p className="text-white/70 text-lg mb-6">
              Todas essas ferramentas podem ser substituídas pelo GrowthFunnels, simplificando sua operação e reduzindo custos:
            </p>
          
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody className="text-base">
                  {replacementTools.map((tool, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-white/10"
                    >
                      <td className="py-4 text-left font-medium text-lg">
                        <div>
                          {tool.name}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {tool.logos.map((logo, i) => (
                            <div 
                              key={i} 
                              className="bg-black/80 rounded-md h-8 w-auto px-2 flex items-center justify-center"
                              title={logo.alt || ''}
                            >
                              <img 
                                src={logo.src} 
                                alt={logo.alt || tool.name} 
                                className="h-5 object-contain" 
                              />
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 text-right font-bold text-lg text-[#d0ff00]">{tool.value}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#d0ff00]">
                    <td className="py-5 text-left font-bold text-xl">Total</td>
                    <td className="py-5 text-right font-bold text-2xl text-[#d0ff00]">{totalSaving}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-6 bg-black border-l border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white">Com GrowthFunnels você paga:</h3>
            <p className="text-white/70 mb-2 text-lg">Plano Mensal:</p>
            <div className="mb-8">
              <div className="flex items-center">
                <span className="text-5xl font-bold text-[#d0ff00]">R$ 497</span>
                <span className="text-white/70 text-xl">/mês</span>
              </div>
            </div>
            
            <ul className="space-y-6 text-lg">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#d0ff00] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Substitua até 12 ferramentas</p>
                  <p className="text-white/70">Todas as funcionalidades em uma única plataforma</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 text-[#d0ff00] mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Economize até R$ 10.122,40 por ano</p>
                  <p className="text-white/70">Reduza seus custos em até 90% com mais qualidade</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 text-[#d0ff00] mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Até 3 usuários incluídos</p>
                  <p className="text-white/70">Adicione mais usuários por apenas R$ 69/mês cada</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 text-[#d0ff00] mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Suporte técnico dedicado</p>
                  <p className="text-white/70">Conte com nossa equipe para implementação e dúvidas</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 text-[#d0ff00] mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">25.000 contatos incluídos</p>
                  <p className="text-white/70">Gerencie seus clientes e leads em um só lugar</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-10">
              <a 
                href="https://checkout.growthfunnels.com.br/pro-mensal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#d0ff00] text-black font-bold py-4 px-6 rounded-lg inline-flex items-center justify-center w-full hover:brightness-110 transition-all text-lg"
              >
                Contratar Plano PRO Mensal
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <TooltipProvider delayDuration={200}>
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
                      onClick={() => toggleBillingMode(false)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!billingAnnual ? 'bg-[#d0ff00] text-black' : 'text-white/70 hover:text-white'}`}
                    >
                      Mensal
                    </button>
                    <button
                      onClick={() => toggleBillingMode(true)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${billingAnnual ? 'bg-[#d0ff00] text-black' : 'text-white/70 hover:text-white'}`}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col bg-black rounded-2xl p-8 border ${plan.popular ? 'border-2 border-[#d0ff00]' : 'border border-[#d0ff00]/30'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#d0ff00] text-black py-1 px-4 rounded-full text-sm font-semibold z-10">
                      Mais Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-[#d0ff00] min-h-[30px]">{plan.name}</h3>
                    <p className="text-white/70 mb-6 min-h-[50px]">{plan.description}</p>

                    {plan.price ? (
                      <div className="mb-6 min-h-[80px]">
                        <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
                        <span className="text-white/70">{plan.period}</span>
                        {plan.monthlyInstallment && (
                          <div className="text-white/70 text-sm mt-1">{plan.monthlyInstallment}</div>
                        )}
                      </div>
                    ) : (
                      <div className="mb-6 min-h-[80px]">
                        <span className="text-2xl font-bold text-white">Entre em contato</span>
                      </div>
                    )}

                    <div className="mt-8">
                      <a 
                        href={getCheckoutLink(plan.name)} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full"
                        onClick={(e) => {
                          // Garantir que o link correto está sendo usado
                          const link = getCheckoutLink(plan.name);
                          e.currentTarget.href = link;
                          console.log(`Redirecionando para: ${link}`);
                        }}
                      >
                        <Button className="w-full py-2.5" variant="greenNeon" size="lg">
                          {plan.name === 'ENTERPRISE' ? 'FALE CONOSCO' : 'CONTRATAR PLANO'}
                        </Button>
                      </a>
                    </div>

                    <ul className="space-y-3 mt-8 mb-4 min-h-[350px]">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#d0ff00] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.additionalCosts.length > 0 && (
                      <div className="min-h-[80px]">
                        <div className="flex items-center gap-2 text-white mb-2">
                          <Plus className="h-4 w-4 text-[#d0ff00]" />
                          <span className="text-sm font-medium">Custos Adicionais</span>
                        </div>
                        <ul className="text-xs text-white/60 space-y-1 pl-6">
                          {plan.additionalCosts.slice(0, 3).map((cost, i) => (
                            <li key={i}>{cost}</li>
                          ))}
                          {plan.additionalCosts.length > 3 && (
                            <li>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="text-[#d0ff00] text-xs cursor-pointer hover:underline focus:outline-none">
                                    + {plan.additionalCosts.length - 3} mais
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-black/95 border border-[#d0ff00]/30 p-3 rounded-lg shadow-lg">
                                  <ul className="space-y-1 text-white">
                                    {plan.additionalCosts.slice(3).map((cost, i) => (
                                      <li key={i}>{cost}</li>
                                    ))}
                                  </ul>
                                </TooltipContent>
                              </Tooltip>
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center mt-6">
                    <CreditCard className="h-5 w-5 text-white/70 mr-3" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-6 w-auto mx-1" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-6 w-auto mx-1" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="American Express" className="h-6 w-auto mx-1" />
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="Paypal" className="h-6 w-auto mx-1" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <EnhancedComparisonTable 
                replacementTools={replacementToolsData}
                totalSaving={totalSavingData}
              />
            </div>
          </div>
        </main>
      </TooltipProvider>
      <Footer />
    </div>
  );
};

export default Pricing;