
import React from 'react';
import { ToolInfo } from '../ComparisonTable';

interface ReplacementToolsListProps {
  replacementTools: ToolInfo[];
  totalSaving: string;
}

const ReplacementToolsList = ({ replacementTools, totalSaving }: ReplacementToolsListProps) => {
  return (
    <div className="bg-black border-r border-[#d0ff00]/30">
      <div className="p-5 border-b border-[#d0ff00]/30">
        <h3 className="text-lg font-bold text-white">O que você substituirá:</h3>
      </div>
      <div className="px-5">
        <ul className="divide-y divide-white/10">
          {replacementTools.map((tool, index) => (
            <li key={index} className="flex justify-between py-3">
              <span className="text-white/80">{tool.name}</span>
              <span className="text-white font-medium">{tool.value}</span>
            </li>
          ))}
          
          {totalSaving && (
            <li className="flex justify-between py-3">
              <span className="text-white font-bold">Total:</span>
              <span className="text-red-500 font-bold">{totalSaving}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReplacementToolsList;
