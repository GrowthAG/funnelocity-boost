
import React from 'react';
import { CheckCircle, ExternalLink, DollarSign, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GrowthFunnelsPricingProps {
  totalSaving?: string;
  billingAnnual?: boolean;
  getCheckoutLink?: (plan: string) => string;
}

const GrowthFunnelsPricing = ({ 
  totalSaving = "R$ 10.122,40", 
  billingAnnual = true,
  getCheckoutLink = () => "https://checkout.growthfunnels.com.br/pro-anual"
}: GrowthFunnelsPricingProps) => {
  const price = billingAnnual ? "4.970" : "497";
  const period = billingAnnual ? "/ano" : "/mês";
  const installment = billingAnnual ? "ou 12x de R$ 414" : null;

  return (
    <div className="bg-black p-6 md:p-8 rounded-b-md md:rounded-r-md md:rounded-bl-none h-full flex flex-col justify-between border border-white/10">
      <div>
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <h3 className="text-xl font-bold text-white">Com GrowthFunnels você paga:</h3>
          <div className="bg-white/5 rounded-full p-1">
            <DollarSign className="h-5 w-5 text-[#d0ff00]" />
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-sm text-white/70 mb-2">A partir de:</p>
          <div className="flex flex-col items-center mb-3">
            <div className="flex items-baseline">
              <span className="text-[#d0ff00] text-xl font-bold">R$</span>
              <span className="text-[#d0ff00] text-5xl font-bold ml-1">{price}</span>
              <span className="text-white/90 text-lg ml-1">{period}</span>
            </div>
            {installment && (
              <p className="text-white/70 text-sm mt-1">{installment}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-5 mb-8">
          <div className="flex items-start bg-white/5 p-3 rounded-lg">
            <CheckCircle className="h-5 w-5 text-[#d0ff00] mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <span className="text-white text-base font-medium">Todos os recursos em uma única plataforma</span>
              <p className="text-white/60 text-sm mt-1">Substitua até 12 ferramentas diferentes por uma solução completa</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white/5 p-3 rounded-lg">
            <Zap className="h-5 w-5 text-[#d0ff00] mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <span className="text-white text-base font-medium">Economize até {totalSaving} por ano</span>
              <p className="text-white/60 text-sm mt-1">Reduza seus custos em até 90% mantendo todas as funcionalidades</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white/5 p-3 rounded-lg">
            <Shield className="h-5 w-5 text-[#d0ff00] mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <span className="text-white text-base font-medium">Suporte técnico dedicado</span>
              <p className="text-white/60 text-sm mt-1">Conte com nossa equipe para implementação e dúvidas</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto space-y-4">
        <a 
          href={getCheckoutLink('PRO')} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full"
        >
          <Button className="w-full py-3 text-base font-bold" variant="greenNeon" size="lg">
            Contratar Plano PRO
            <ExternalLink className="h-4 w-4 ml-1" />
          </Button>
        </a>
        
        <div className="flex items-center justify-center p-2 border border-[#d0ff00]/30 rounded-lg bg-[#d0ff00]/5">
          <div className="text-center">
            <span className="block text-[#d0ff00] text-sm font-medium">
              Economize 90% em relação a outras soluções
            </span>
            <span className="text-white/60 text-xs">Otimize seu orçamento mantendo todas as funcionalidades</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthFunnelsPricing;
