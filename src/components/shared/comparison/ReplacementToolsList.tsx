
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
    <div className="bg-black border-r border-white/10 h-full">
      <div className="p-6 border-b border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">O que você substituirá:</h3>
        <p className="text-white/70 text-base">
          Todas essas ferramentas podem ser substituídas pelo GrowthFunnels,
          simplificando sua operação e reduzindo custos:
        </p>
      </div>
      
      <div className="divide-y divide-white/10">
        {tools.map((tool, index) => (
          <div key={index} className="p-4 hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-white">{tool.name}</span>
              <span className="font-bold text-[#d0ff00]">{tool.value}</span>
            </div>
            
            {tool.tools && tool.tools.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tool.tools.map((toolName, i) => (
                  <div 
                    key={i} 
                    className="bg-white/10 text-white/80 rounded px-2 py-1 text-xs flex items-center"
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
      
      <div className="p-4 bg-[#d0ff00]/5 border-t border-[#d0ff00]/30">
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">Total economizado:</span>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-[#d0ff00] mr-1" />
            <span className="text-xl font-bold text-[#d0ff00]">
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
