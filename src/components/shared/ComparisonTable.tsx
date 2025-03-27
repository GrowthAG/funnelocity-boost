
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Check, ArrowDown, DollarSign } from 'lucide-react';

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
              <TableHead className="text-black font-bold">Ferramentas</TableHead>
              <TableHead className="text-black font-bold">Substitui</TableHead>
              <TableHead className="text-black font-bold text-right">Valor</TableHead>
              <TableHead className="text-black font-bold w-24 text-right">
                <img 
                  src="/lovable-uploads/6fa94abc-97bc-4df5-9e33-2cd888a9ebfa.png" 
                  alt="GrowthFunnels" 
                  className="h-8 ml-auto" 
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
                <TableCell className="font-medium text-white py-3">
                  {tool.name}
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex flex-wrap gap-2">
                    {tool.logos && tool.logos.map((logo, idx) => (
                      <img 
                        key={idx} 
                        src={logo} 
                        alt={tool.tools[idx] || ''} 
                        className="h-6 w-6 object-contain" 
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-white text-right py-3 font-medium">
                  {tool.value}/mês
                </TableCell>
                <TableCell className="text-right py-3">
                  <Check className="h-5 w-5 text-[#d0ff00] ml-auto" />
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-[#d0ff00]/10 border-t border-[#d0ff00]/30">
              <TableCell className="text-white font-bold py-4">Total</TableCell>
              <TableCell className="py-4"></TableCell>
              <TableCell className="py-4 text-right">
                <span className="text-red-500/80 line-through">{totalSaving}/mês</span>
              </TableCell>
              <TableCell className="py-4 text-right">
                <span className="text-[#d0ff00] font-bold">R$ 497/mês</span>
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
