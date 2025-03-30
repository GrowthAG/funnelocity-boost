
import React from 'react';

interface ComparisonTableHeaderProps {
  logoUrl?: string;
}

const ComparisonTableHeader: React.FC<ComparisonTableHeaderProps> = ({ logoUrl }) => {
  return (
    <div className="bg-black p-6 text-center border-b border-white/10">
      <div className="flex items-center justify-center">
        <img 
          src={logoUrl || "/lovable-uploads/e972de3f-e663-467b-a000-a691202e4b0e.png"} 
          alt="GrowthFunnels Logo" 
          className="h-8 mr-3" 
        />
        <h2 className="text-xl font-bold text-white">vs. Outras Soluções</h2>
      </div>
      <p className="text-white/70 text-sm mt-2 max-w-2xl mx-auto">
        Compare o custo e os recursos do GrowthFunnels com as alternativas do mercado
        e veja quanto você pode economizar enquanto simplifica sua stack de marketing e vendas.
      </p>
    </div>
  );
};

export default ComparisonTableHeader;
