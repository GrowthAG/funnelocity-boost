
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Check } from 'lucide-react';

export interface ToolInfo {
  name: string;
  value: string;
  tools: string[];
  logos?: string[];
}

interface ComparisonTableProps {
  replacementTools: ToolInfo[];
  totalSaving: string;
  showHeader?: boolean;
  showFooter?: boolean;
  headerTitle?: string;
  headerDescription?: string;
  footerLink?: string;
  footerLinkText?: string;
  onFooterClick?: () => void;
  variant?: 'dashboard' | 'pricing';
  className?: string;
}

const ComparisonTable = ({
  replacementTools,
  totalSaving,
  showHeader = true,
  showFooter = true,
  headerTitle = "Economize até 90% com GrowthFunnels",
  headerDescription = "Em vez de pagar por várias ferramentas separadas, tenha tudo em uma única plataforma completa",
  footerLink = "/pricing",
  footerLinkText = "Veja comparação completa",
  onFooterClick,
  variant = 'dashboard',
  className = ''
}: ComparisonTableProps) => {
  return (
    <div className={`${variant === 'dashboard' ? 'p-4 bg-[#d0ff00]/5 rounded-lg border border-[#d0ff00]/10' : ''} ${className}`}>
      {showHeader && (
        <div className="mb-4">
          <h3 className="text-lg font-medium text-white mb-3">{headerTitle}</h3>
          <p className="text-white/70 text-sm mb-4">
            {headerDescription}
          </p>
        </div>
      )}
      
      <div className="overflow-hidden rounded-lg border border-[#d0ff00]/20">
        <Table>
          <TableHeader className="bg-[#d0ff00]">
            <TableRow>
              <TableHead className="text-black font-bold text-lg">Ferramentas</TableHead>
              <TableHead className="text-black font-bold text-lg">Substitui</TableHead>
              <TableHead className="text-black font-bold text-lg text-right">Valor</TableHead>
              <TableHead className="text-black font-bold w-24 text-center">
                <img 
                  src="/lovable-uploads/6fa94abc-97bc-4df5-9e33-2cd888a9ebfa.png" 
                  alt="GrowthFunnels" 
                  className="h-8 mx-auto" 
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {replacementTools.map((tool, index) => (
              <TableRow 
                key={index} 
                className="border-b border-[#d0ff00]/10 hover:bg-white/5"
              >
                <TableCell className="font-medium text-white py-5 text-base">
                  {tool.name}
                </TableCell>
                <TableCell className="py-5">
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tools.map((toolName, idx) => (
                      <span 
                        key={idx} 
                        className="text-white/90 text-xs bg-white/10 px-2 py-0.5 rounded-full"
                      >
                        {toolName}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-white text-right py-5 font-medium text-base">
                  {tool.value}/mês
                </TableCell>
                <TableCell className="text-center py-5">
                  <div className="bg-[#d0ff00]/10 h-8 w-8 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-5 w-5 text-[#d0ff00]" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-[#d0ff00]/10 border-t border-[#d0ff00]/30">
              <TableCell className="text-white font-bold py-4 text-lg">Total</TableCell>
              <TableCell className="py-4"></TableCell>
              <TableCell className="py-4 text-right">
                <span className="text-red-500/80 line-through text-base">{totalSaving}/mês</span>
              </TableCell>
              <TableCell className="py-4 text-center">
                <span className="text-[#d0ff00] font-bold text-lg">R$ 497/mês</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      {showFooter && (
        <div className="mt-4 text-center">
          <button 
            className="text-[#d0ff00] border border-[#d0ff00]/30 px-4 py-2 rounded-md hover:bg-[#d0ff00]/10 text-sm font-medium"
            onClick={onFooterClick || (() => window.location.href = footerLink)}
          >
            {footerLinkText}
          </button>
        </div>
      )}
    </div>
  );
};

export default ComparisonTable;
