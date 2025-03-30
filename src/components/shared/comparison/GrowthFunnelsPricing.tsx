
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GrowthFunnelsPricingProps {
  totalSaving?: string;
}

const GrowthFunnelsPricing = ({ totalSaving = "R$ 5.609,69" }: GrowthFunnelsPricingProps) => {
  return (
    <div className="bg-growth-black p-5">
      <h3 className="text-lg font-bold text-white mb-4">Com GrowthFunnels você paga:</h3>
      
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src="/lovable-uploads/e972de3f-e663-467b-a000-a691202e4b0e.png" 
          alt="GrowthFunnels Logo" 
          className="h-10" 
        />
        <div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-growth-green">R$ 4.970</span>
            <span className="text-white text-sm ml-1">/ano</span>
          </div>
          <p className="text-white/70 text-sm">ou 12x de R$ 414</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-start">
          <CheckCircle className="h-5 w-5 text-growth-green mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-white">Todos os recursos em uma única plataforma</span>
        </div>
        <div className="flex items-start">
          <CheckCircle className="h-5 w-5 text-growth-green mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-white">Economize até {totalSaving} por ano</span>
        </div>
      </div>
      
      <Button className="w-full" variant="greenNeon">
        Começar agora
      </Button>
      
      <div className="mt-4 text-center">
        <span className="inline-block bg-growth-green/10 text-growth-green text-sm rounded-full py-1 px-3">
          Economize 90% comparado a outras soluções
        </span>
      </div>
    </div>
  );
};

export default GrowthFunnelsPricing;
