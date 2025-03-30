
import React from 'react';
import { DollarSign, ArrowRight } from 'lucide-react';

interface ToolsListProps {
  tools: Array<{
    name: string;
    value: string;
    tools?: string[];
  }>;
}

const ReplacementToolsList: React.FC<ToolsListProps> = ({ tools }) => {
  return (
    <div className="bg-black h-full flex flex-col">
      <div className="p-5 border-b border-white/10">
        <h3 className="text-xl font-bold text-white mb-2">O que você substituirá:</h3>
        <p className="text-white/70 text-sm">
          Todas essas ferramentas podem ser substituídas pelo GrowthFunnels,
          simplificando sua operação e reduzindo custos:
        </p>
      </div>
      
      <div className="divide-y divide-white/10 flex-grow overflow-auto">
        {tools.map((tool, index) => (
          <div key={index} className="p-3 hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-white text-sm">{tool.name}</span>
              <span className="font-bold text-[#d0ff00] text-sm">{tool.value}</span>
            </div>
            
            {tool.tools && tool.tools.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1">
                {tool.tools.map((toolName, i) => (
                  <div 
                    key={i} 
                    className="bg-white/10 text-white/80 rounded px-2 py-0.5 text-xs flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-1 text-[#d0ff00]" />
                    {toolName}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-[#d0ff00]/5 border-t border-[#d0ff00]/30 mt-auto">
        <div className="flex justify-between items-center">
          <span className="text-white font-bold text-sm">Total economizado:</span>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-[#d0ff00] mr-1" />
            <span className="text-lg font-bold text-[#d0ff00]">
              {tools.reduce((acc, tool) => {
                const value = parseFloat(tool.value.replace('R$ ', '').replace('.', '').replace(',', '.'));
                return acc + value;
              }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplacementToolsList;
