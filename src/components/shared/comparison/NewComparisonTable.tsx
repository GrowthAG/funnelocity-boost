
import React from 'react';
import ComparisonTableHeader from './ComparisonTableHeader';
import GrowthFunnelsPricing from './GrowthFunnelsPricing';
import ReplacementToolsList from './ReplacementToolsList';

interface NewComparisonTableProps {
  logoUrl?: string;
  replacementTools?: any[];
  totalSaving?: string;
  billingAnnual?: boolean;
  getCheckoutLink?: (plan: string) => string;
}

const NewComparisonTable = ({ 
  logoUrl,
  replacementTools,
  totalSaving,
  billingAnnual = false,
  getCheckoutLink = (plan: string) => {
    const planLinks = {
      'PRO': billingAnnual ? 'https://checkout.growthfunnels.com.br/pro-anual' : 'https://checkout.growthfunnels.com.br/pro-mensal',
      'PLUS': billingAnnual ? 'https://checkout.growthfunnels.com.br/plus-anual' : 'https://checkout.growthfunnels.com.br/plus-mensal',
      'ENTERPRISE': 'https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd'
    };
    return planLinks[plan] || 'https://checkout.growthfunnels.com.br/pro-mensal';
  }
}: NewComparisonTableProps) => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <ComparisonTableHeader logoUrl={logoUrl} />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-6 border-r border-white/10">
          {replacementTools ? (
            <ReplacementToolsList tools={replacementTools} />
          ) : (
            <div className="bg-black p-4 h-full">
              <h3 className="text-lg font-bold text-white mb-2">O que você substituirá:</h3>
              <p className="text-white/70 text-sm">
                Lista de ferramentas que serão substituídas pelo GrowthFunnels,
                ajudando a otimizar seu orçamento e simplificar sua stack de
                marketing e vendas.
              </p>
            </div>
          )}
        </div>
        <div className="col-span-1 lg:col-span-6">
          <GrowthFunnelsPricing 
            totalSaving={totalSaving} 
            billingAnnual={billingAnnual}
            getCheckoutLink={getCheckoutLink}
          />
        </div>
      </div>
    </div>
  );
};

export default NewComparisonTable;
