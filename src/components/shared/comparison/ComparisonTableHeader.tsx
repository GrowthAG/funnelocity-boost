
import React from 'react';

interface ComparisonTableHeaderProps {
  logoUrl?: string;
}

const ComparisonTableHeader = ({ logoUrl }: ComparisonTableHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-growth-green to-growth-green/90 p-5 text-center">
      <div className="flex justify-center items-center space-x-2">
        {logoUrl && (
          <img 
            src={logoUrl} 
            alt="GrowthFunnels" 
            className="h-8 md:h-10"
          />
        )}
        <h2 className="text-xl md:text-2xl font-bold text-black">vs. Outras Soluções</h2>
      </div>
      <p className="text-black/90 text-sm md:text-base mt-1">
        Compare o custo e os recursos do GrowthFunnels com as alternativas
      </p>
    </div>
  );
};

export default ComparisonTableHeader;
