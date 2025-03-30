
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
  billingAnnual = true,
  getCheckoutLink = () => "https://checkout.growthfunnels.com.br/pro-anual"
}: NewComparisonTableProps) => {
  return (
    <div className="rounded-md overflow-hidden divide-y divide-growth-green/30 shadow-lg shadow-growth-green/5">
      <ComparisonTableHeader logoUrl={logoUrl} />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-5 xl:col-span-4">
          {replacementTools ? (
            <ReplacementToolsList tools={replacementTools} />
          ) : (
            <div className="bg-growth-black border-r border-growth-green/30 p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">O que você substituirá:</h3>
              <p className="text-white/80 text-base">
                Lista de ferramentas que serão substituídas pelo GrowthFunnels,
                ajudando a otimizar seu orçamento e simplificar sua stack de
                marketing e vendas.
              </p>
            </div>
          )}
        </div>
        <div className="col-span-1 lg:col-span-7 xl:col-span-8">
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
