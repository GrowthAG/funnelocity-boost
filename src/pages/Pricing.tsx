
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [billingAnnual, setBillingAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      price: billingAnnual ? 97 * 10 : 97,
      period: billingAnnual ? '/ano' : '/mês',
      description: 'Para pequenas empresas e empreendedores individuais',
      features: [
        'CRM completo',
        'Funis de vendas visuais',
        'Social Planner',
        'Landing Pages básicas',
        'Até 1.000 contatos',
        '1 usuário'
      ],
      cta: 'Testar Grátis',
      popular: false
    },
    {
      name: 'Pro',
      price: billingAnnual ? 197 * 10 : 197,
      period: billingAnnual ? '/ano' : '/mês',
      description: 'Ideal para empresas em crescimento',
      features: [
        'Tudo do Starter +',
        'Automações avançadas',
        'Workflows personalizados',
        'Disparos de e-mail',
        'Até 10.000 contatos',
        'Até 3 usuários'
      ],
      cta: 'Assinar',
      popular: true
    },
    {
      name: 'Max',
      price: billingAnnual ? 297 * 10 : 297,
      period: billingAnnual ? '/ano' : '/mês',
      description: 'Para equipes e empresas escaláveis',
      features: [
        'Tudo do Pro +',
        'Suporte dedicado',
        'Integrações premium',
        'API acesso completo',
        'Contatos ilimitados',
        'Até 10 usuários'
      ],
      cta: 'Agendar Demo',
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
              Planos que cabem na sua <span className="text-gradient">estratégia</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Escolha o plano ideal para começar a automatizar hoje mesmo
            </p>
            
            <div className="flex items-center justify-center mb-10">
              <div className="bg-white/10 p-1 rounded-full">
                <div className="flex">
                  <button
                    onClick={() => setBillingAnnual(false)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      !billingAnnual 
                        ? 'bg-growth-green text-black' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Mensal
                  </button>
                  <button
                    onClick={() => setBillingAnnual(true)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                      billingAnnual 
                        ? 'bg-growth-green text-black' 
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
                className={`rounded-2xl p-8 flex flex-col h-full relative ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-growth-green/20 to-black border border-growth-green' 
                    : 'feature-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-growth-green text-black py-1 px-4 rounded-full text-sm font-semibold">
                    Recomendado
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
                  <span className="text-white/70">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-growth-green mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link to={index === 2 ? "/demo" : "/trial"} className="w-full">
                    <Button 
                      className={`w-full ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Perguntas frequentes sobre preços</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <TooltipProvider>
                <div className="bg-white/5 p-4 rounded-lg border border-growth-green/10 flex items-center justify-between">
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
                <div className="bg-white/5 p-4 rounded-lg border border-growth-green/10 flex items-center justify-between">
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
                <div className="bg-white/5 p-4 rounded-lg border border-growth-green/10 flex items-center justify-between">
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
