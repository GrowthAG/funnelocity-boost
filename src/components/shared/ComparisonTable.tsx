
import React from 'react';
import { Shield, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ComparisonTableHeader from './comparison/ComparisonTableHeader';
import ReplacementToolsList from './comparison/ReplacementToolsList';
import GrowthFunnelsPricing from './comparison/GrowthFunnelsPricing';

export interface ToolInfo {
  name: string;
  value: string;
}

interface ComparisonTableProps {
  replacementTools: ToolInfo[];
  totalSaving?: string;
  className?: string;
}

const ComparisonTable = ({
  replacementTools,
  totalSaving = "R$ 5.609,69",
  className = ''
}: ComparisonTableProps) => {
  return (
    <div className={`${className}`}>
      <div className="bg-black border-t border-[#d0ff00]/30 pt-6">
        <div className="px-4 md:px-6">
          <ComparisonTableHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#d0ff00]/30 rounded-lg overflow-hidden">
            {/* Left Column */}
            <ReplacementToolsList 
              replacementTools={replacementTools} 
              totalSaving={totalSaving} 
            />
            
            {/* Right Column */}
            <GrowthFunnelsPricing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
