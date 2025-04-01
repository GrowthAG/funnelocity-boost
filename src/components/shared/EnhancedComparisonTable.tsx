
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface EnhancedComparisonTableProps {
  replacementTools: Array<{
    name: string;
    value: string;
    tools?: string[];
  }>;
  totalSaving: string;
  billingAnnual?: boolean;
  getCheckoutLink?: (plan: string) => string;
  className?: string;
}

const EnhancedComparisonTable: React.FC<EnhancedComparisonTableProps> = ({
  replacementTools,
  totalSaving,
  billingAnnual = false,
  getCheckoutLink = (plan: string) => `https://checkout.growthfunnels.com.br/${plan.toLowerCase()}-${billingAnnual ? 'anual' : 'mensal'}`,
  className = ''
}) => {
  return (
    <div className={`bg-black text-white ${className}`}>
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

      <div className="mt-8 mb-12 grid md:grid-cols-2 gap-8">
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
            <p className="text-sm text-white/70 mt-1">{billingAnnual ? 'ou 12x de R$ 414' : ''}</p>
            
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

export default EnhancedComparisonTable;
