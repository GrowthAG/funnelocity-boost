
import React from 'react';
import NewComparisonTable from './comparison/NewComparisonTable';

export interface ToolInfo {
  name: string;
  value: string;
}

interface ComparisonTableProps {
  replacementTools: any[];
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
      <NewComparisonTable 
        logoUrl="/lovable-uploads/e972de3f-e663-467b-a000-a691202e4b0e.png"
        replacementTools={replacementTools}
        totalSaving={totalSaving}
      />
    </div>
  );
};

export default ComparisonTable;
