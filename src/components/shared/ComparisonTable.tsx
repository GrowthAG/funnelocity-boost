
import React from 'react';
import NewComparisonTable from './comparison/NewComparisonTable';

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
      <NewComparisonTable />
    </div>
  );
};

export default ComparisonTable;
