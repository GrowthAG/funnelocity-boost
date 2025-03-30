
import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GrowthFunnelsPricingProps {
  totalSaving?: string;
  billingAnnual?: boolean;
  getCheckoutLink?: (plan: string) => string;
}

const GrowthFunnelsPricing = ({ 
  totalSaving = "R$ 5.609,69", 
  billingAnnual = true,
  getCheckoutLink = () => "https://checkout.growthfunnels.com.br/pro-anual"
}: GrowthFunnelsPricingProps) => {
  const price = billingAnnual ? "4.970" : "497";
  const period = billingAnnual ? "/ano" : "/mês";
  const installment = billingAnnual ? "ou 12x de R$ 414" : null;

  return (
    <div className="bg-growth-black p-6 md:p-8 rounded-b-md md:rounded-r-md md:rounded-bl-none h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-white mb-6">Com GrowthFunnels você paga:</h3>
        
        <div className="mb-6 text-center">
          <p className="text-sm text-white/70 mb-2">A partir de:</p>
          <div className="flex items-center justify-center mb-1">
            <img 
              src="/lovable-uploads/e972de3f-e663-467b-a000-a691202e4b0e.png" 
              alt="GrowthFunnels Logo" 
              className="h-10 mr-3" 
            />
            <div className="flex items-baseline">
              <span className="text-growth-green text-4xl font-bold">R$</span>
              <span className="text-growth-green text-5xl font-bold ml-1">{price}</span>
              <span className="text-white/90 text-lg ml-1">{period}</span>
            </div>
          </div>
          {installment && (
            <p className="text-white/70 text-sm">{installment}</p>
          )}
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-growth-green mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-white text-base">Todos os recursos em uma única plataforma</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-growth-green mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-white text-base">Economize até {totalSaving} por ano</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-growth-green mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-white text-base">Suporte técnico dedicado</span>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
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
        
        <div className="mt-4 text-center">
          <span className="inline-block bg-growth-green/10 text-growth-green text-sm rounded-full py-1.5 px-4 font-medium">
            Economize 90% em relação a outras soluções
          </span>
        </div>
      </div>
    </div>
  );
};

export default GrowthFunnelsPricing;
