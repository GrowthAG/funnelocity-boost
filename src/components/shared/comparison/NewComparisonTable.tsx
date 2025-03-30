
import React from 'react';
import ComparisonTableHeader from './ComparisonTableHeader';
import GrowthFunnelsPricing from './GrowthFunnelsPricing';
import ReplacementToolsList from './ReplacementToolsList';

interface NewComparisonTableProps {
  logoUrl?: string;
  replacementTools?: any[];
  totalSaving?: string;
}

const NewComparisonTable = ({ 
  logoUrl,
  replacementTools,
  totalSaving
}: NewComparisonTableProps) => {
  return (
    <div className="rounded-md overflow-hidden divide-y divide-growth-green/30">
      <ComparisonTableHeader logoUrl={logoUrl} />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-4">
          {replacementTools ? (
            <ReplacementToolsList tools={replacementTools} />
          ) : (
            <div className="bg-growth-black border-r border-growth-green/30 p-5">
              <h3 className="text-lg font-bold text-white mb-4">O que você substituirá:</h3>
              <p className="text-white/80">Lista de ferramentas que serão substituídas pelo GrowthFunnels</p>
            </div>
          )}
        </div>
        <div className="col-span-1 lg:col-span-8">
          <GrowthFunnelsPricing totalSaving={totalSaving} />
        </div>
      </div>
    </div>
  );
};

export default NewComparisonTable;
