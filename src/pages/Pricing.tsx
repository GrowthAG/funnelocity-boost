from IPython.display import Markdown

# Código atualizado e formatado conforme solicitado
updated_code = """
```tsx
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, HelpCircle, Plus, CreditCard } from 'lucide-react';
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
  }, []);

  const [billingAnnual, setBillingAnnual] = useState(true);

  const plans = [
    {
      name: 'PRO',
      price: billingAnnual ? 4970 : 497,
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
      checkoutLink: billingAnnual
        ? 'https://checkout.growthfunnels.com.br/pro-anual'
        : 'https://checkout.growthfunnels.com.br/pro-mensal',
      popular: false
    },
    {
      name: 'PLUS',
      price: billingAnnual ? 6970 : 697,
      period: billingAnnual ? '/ano' : '/mês',
      description: 'Para empresas em crescimento',
      features: [
        'Todos os Recursos Pro +',
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
      cta: 'CONTRATAR PLANO',
      checkoutLink: billingAnnual
        ? 'https://checkout.growthfunnels.com.br/plus-anual'
        : 'https://checkout.growthfunnels.com.br/plus-mensal',
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
        'Setup completo com especialistas',
        'Total controle e flexibilidade',
        'Suporte dedicado'
      ],
      additionalCosts: [],
      cta: 'FALE CONOSCO',
      checkoutLink: 'https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd',
      popular: false
    }
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
                    className={\`px-5 py-2 rounded-full text-sm font-medium transition-all \${!billingAnnual ? 'bg-[#d0ff00] text-black' : 'text-white/70 hover:text-white'}\`}
                  >
                    Mensal
                  </button>
                  <button
                    onClick={() => setBillingAnnual(true)}
                    className={\`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 \${billingAnnual ? 'bg-[#d0ff00] text-black' : 'text-white/70 hover:text-white'}\`}
                  >
                    Anual
                    <span className="bg-black/20 text-white text-xs px-2 py-0.5 rounded-full">Economize 16%</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={\`flex flex-col justify-between bg-black rounded-2xl p-8 h-full relative \${plan.popular ? 'border-2 border-[#d0ff00]' : 'border border-[#d0ff00]/30'}\`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#d0ff00] text-black py-1 px-4 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-[#d0ff00] mb-2">{plan.name}</h3>
                  <p className="text-white/70 mb-4">{plan.description}</p>
                  {plan.price ? (
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
                      <span className="text-white/70">{plan.period}</span>
                      {billingAnnual && (
                        <div className="text-white/70 text-sm mt-1">
                          ou 12x de R$ {Math.floor(plan.price / 12)}
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-white mb-4">Entre em contato</p>
                  )}
                  <a href={plan.checkoutLink} target="_blank" rel="noopener noreferrer" className="w-full block mb-6">
                    <Button className="w-full py-2.5" variant="greenNeon" size="lg">
                      {plan.cta}
                    </Button>
                  </a>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#d0ff00] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.additionalCosts.length > 0 && (
                    <div className="mb-6">
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
                              <TooltipTrigger className="text-[#d0ff00] text-xs">+ {plan.additionalCosts.length - 3} mais</TooltipTrigger>
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
                  <div className="flex justify-center py-3">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-6 w-6 text-white/70" />
                      <div className="flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-6 w-auto" />
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-6 w-auto" />
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="Amex" className="h-6 w-auto" />
                        <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="Paypal" className="h-6 w-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <ComparisonTable replacementTools={replacementToolsData} totalSaving={totalSavingData} />
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Perguntas frequentes sobre preços</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              {/* ... FAQ Tooltips ... */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
