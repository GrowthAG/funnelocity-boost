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
      price: billingAnnual ? 497 : 497,
      period: '/mês',
      monthlyInstallment: null,
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
      period: billingAnnual ? ' à vista' : '/mês',
      monthlyInstallment: null,
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
              className="h-8 mr-2" 
            />
            <span className="text-xl font-bold">vs. Outras Soluções</span>
          </div>
          <p className="text-center text-white/70 mb-8">
            Compare o custo e os recursos do GrowthFunnels com as alternativas do mercado
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* ... tabela permanece igual ... */}
          </table>
        </div>

        <div className="mt-8 mb-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-black/30 border border-white/10 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-white">O que você substituirá:</h3>
            <p className="text-white/70">
              Lista de ferramentas que serão substituídas pelo GrowthFunnels, ajudando a otimizar seu orçamento e simplificar sua stack de marketing e vendas.
            </p>
          </div>

          <div className="p-6 bg-black/30 border border-white/10 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-white">Com GrowthFunnels você paga:</h3>
            <div className="mt-4 text-center">
              <p className="text-sm text-white/70 mb-2">A partir de:</p>
              <div className="flex items-center justify-center">
                <img 
                  src="https://growthfunnels.com.br/wp-content/uploads/2024/05/logo-growth-funnels.svg" 
                  alt="GrowthFunnels Logo" 
                  className="h-8 mr-2" 
                />
                <span className="text-3xl font-bold text-[#d0ff00]">R$ 497</span>
                <span className="text-white/70">/mês</span>
              </div>
              <p className="text-sm text-white/70 mt-1"></p>
              <div className="flex items-center justify-center mt-4 mb-6">
                <CheckCircle className="h-5 w-5 text-[#d0ff00] mr-2" />
                <span className="text-white">Todos os recursos em uma única plataforma</span>
              </div>
              <div className="mt-4">
                <a 
                  href={getCheckoutLink('PRO')} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full"
                >
                  <Button className="w-full py-3" variant="greenNeon" size="lg">
                    Contratar Plano PRO
                  </Button>
                </a>
              </div>
              <div className="mt-4 bg-[#d0ff00]/10 rounded-full py-1 px-4 inline-block">
                <span className="text-[#d0ff00] font-medium text-sm">Economize 90%</span>
              </div>
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
              {/* ... cabeçalho permanece igual ... */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* ... planos permanecem iguais com preços atualizados ... */}
            </div>
            <div className="mt-16">
              <ComparisonTable 
                replacementTools={replacementToolsData}
                totalSaving={totalSavingData}
                billingAnnual={billingAnnual}
                getCheckoutLink={getCheckoutLink}
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
