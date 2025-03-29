import React from 'react';
import { ToolInfo } from '../ComparisonTable';

interface ReplacementToolsListProps {
  replacementTools: ToolInfo[];
  totalSaving: string;
}

// Map of tool names to their logo URLs
const toolLogoMap: Record<string, string> = {
  "Pipedrive": "/lovable-uploads/8d450804-20c6-46f6-9f0c-836bc0fa3ec2.png",
  // outros mapeamentos...
};

// Helper function to get the logo URL by tool name
const getToolLogoUrl = (toolName: string): string | undefined => {
  // Extract the main tool name (ignoring anything after "&" or similar)
  const mainToolName = toolName.split(/[\s&]+/)[0];
  return toolLogoMap[mainToolName];
};

const ReplacementToolsList = ({ replacementTools, totalSaving }: ReplacementToolsListProps) => {
  return (
    <div className="bg-growth-black border-r border-growth-green/30">
      <div className="p-4 border-b border-growth-green/30"> {/* Reduzido de p-5 para p-4 */}
        <h3 className="text-lg font-bold text-white">O que você substituirá:</h3>
      </div>
      <div className="px-4"> {/* Reduzido de px-5 para px-4 */}
        <ul className="divide-y divide-white/10">
          {replacementTools.map((tool, index) => (
            <li key={index} className="flex justify-between py-2.5"> {/* Reduzido de py-3 para py-2.5 */}
              <div className="flex items-center gap-1.5"> {/* Reduzido de gap-2 para gap-1.5 */}
                {getToolLogoUrl(tool.name) ? (
                  <img 
                    src={getToolLogoUrl(tool.name)} 
                    alt={`${tool.name} logo`}
                    className="h-4.5 w-auto max-w-[18px] object-contain" {/* Reduzido de h-5 e max-w-[20px] */}
                  />
                ) : (
                  <div className="h-4.5 w-4.5 flex items-center justify-center text-[#d0ff00] text-xs font-bold">
                    {tool.name.charAt(0)}
                  </div>
                )}
                <span className="text-white/80">{tool.name}</span>
              </div>
              <span className="text-white font-medium">{tool.value}</span>
            </li>
          ))}
          
          {totalSaving && (
            <li className="flex justify-between py-2.5"> {/* Reduzido de py-3 para py-2.5 */}
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