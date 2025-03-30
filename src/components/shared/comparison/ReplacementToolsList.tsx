
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ToolData {
  name: string;
  value: string;
  tools: string[];
}

interface ReplacementToolsListProps {
  tools: ToolData[];
}

const ReplacementToolsList = ({ tools }: ReplacementToolsListProps) => {
  return (
    <div className="bg-growth-black border-r border-growth-green/30 p-5">
      <h3 className="text-lg font-bold text-white mb-4">O que você substituirá:</h3>
      
      <div className="space-y-4">
        {tools.map((tool, index) => (
          <div key={index} className="pb-3 border-b border-growth-green/20 last:border-b-0">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium">{tool.name}</span>
              <span className="text-growth-green font-bold">{tool.value}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {tool.tools.map((toolName, i) => (
                <span key={i} className="bg-growth-green/10 text-white/80 text-xs px-2 py-1 rounded">
                  {toolName}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-5 pt-3 border-t border-growth-green/40">
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">Economia Total</span>
          <span className="text-growth-green font-bold text-xl">
            <CheckCircle className="inline-block h-4 w-4 mr-1" />
            Garantida
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReplacementToolsList;
