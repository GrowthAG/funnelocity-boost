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
    console.log("Links de checkout configurados:", {
      'PRO Anual': checkoutLinks.PRO.annual,
      'PRO Mensal': checkoutLinks.PRO.monthly,
      'PLUS Anual': checkoutLinks.PLUS.annual,
      'PLUS Mensal': checkoutLinks.PLUS.monthly,
      'Modo atual': billingAnnual ? 'Anual' : 'Mensal'
    });
  }, []);

  const [billingAnnual, setBillingAnnual] = useState(true);

  const toggleBillingMode = (isAnnual) => {
    setBillingAnnual(isAnnual);
    console.log(`Modo de cobrança alterado para: ${isAnnual ? 'Anual' : 'Mensal'}`);
  };

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

  const getCheckoutLink = (planName) => {
    if (planName === 'ENTERPRISE') {
      return checkoutLinks.ENTERPRISE;
    }
    return billingAnnual ? checkoutLinks[planName].annual : checkoutLinks[planName].monthly;
  };

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
            <thead>
              <tr className="bg-[#d0ff00] text-black">
                <th className="py-4 px-6 text-left font-bold">Ferramentas</th>
                <th className="py-4 px-6 text-center font-bold">Substitui</th>
                <th className="py-4 px-6 text-right font-bold">Valor</th>
                <th className="py-4 px-2 text-center w-12 font-bold"></th>
              </tr>
            </thead>
            <tbody>
              {replacementTools.map((tool, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-white/10 hover:bg-white/5 transition-colors ${index % 2 === 0 ? 'bg-black/60' : 'bg-black/30'}`}
                >
                  <td className="py-4 px-6 text-left">{tool.name}</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {tool.tools && tool.tools.map((toolName, i) => (
                        <div 
                          key={i} 
                          className="bg-white/10 rounded-md px-2 py-1 text-xs"
                        >
                          {toolName}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-medium">{tool.value}</td>
                  <td className="py-4 px-2 text-center">
                    <CheckCircle className="h-5 w-5 text-[#d0ff00] inline-block" />
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-[#d0ff00] bg-black/80">
                <td className="py-5 px-6 text-left font-bold text-xl">Total</td>
                <td className="py-5 px-6"></td>
                <td className="py-5 px-6 text-right font-bold text-xl text-[#d0ff00]">{totalSaving}</td>
                <td className="py-5 px-2 text-center">
                  <CheckCircle className="h-6 w-6 text-[#d0ff00] inline-block" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 mb-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-black/30 border border-white/10 rounded-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold mb-4 text-white">O que você substituirá:</h3>
            <p className="text-white/70">
              Todas essas ferramentas podem ser substituídas pelo GrowthFunnels, simplificando sua operação e reduzindo custos.
            </p>
          </div>

          <div className="p-6 bg-black/30 border border-white/10 rounded-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center justify-center">
              Com o
              <img 
                src="https://growthfunnels.com.br/wp-content/uploads/2024/05/logo-growth-funnels.svg" 
                alt="Logo GrowthFunnels" 
                className="h-6 mx-2 inline-block"
              />
              você paga:
            </h3>

            <div className="text-3xl font-bold text-[#d0ff00]">
              R$ 497<span className="text-white text-base font-normal"> /mês</span>
            </div>
            <p className="text-sm text-white/70 mt-1">ou R$ 4.970 à vista (plano anual)</p>

            <ul className="text-white/80 mt-6 space-y-2 text-sm">
              <li>Substitua até 12 ferramentas</li>
              <li>Economize até R$ 10.122,40 por ano</li>
              <li>Até 3 usuários incluídos</li>
              <li>Suporte técnico dedicado</li>
              <li>20.000 contatos incluídos</li>
              <li>Automações ilimitadas</li>
              <li>Funções premium inclusas</li>
              <li>Notificações inteligentes</li>
            </ul>

            <div className="mt-6 w-full">
              <a 
                href={getCheckoutLink('PRO')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full"
              >
                <Button className="w-full py-3" variant="greenNeon" size="lg">
                  Contratar Plano PRO Mensal
                </Button>
              </a>
            </div>

            <div className="mt-4 bg-[#d0ff00]/10 rounded-full py-1 px-4 inline-block">
              <span className="text-[#d0ff00] font-medium text-sm">Economize 90% em relação às outras soluções</span>
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
            <EnhancedComparisonTable 
              replacementTools={replacementToolsData}
              totalSaving={totalSavingData}
            />
          </div>
        </main>
      </TooltipProvider>
      <Footer />
    </div>
  );
};

export default Pricing;
