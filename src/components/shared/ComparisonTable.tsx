
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Check, ArrowDown, DollarSign, ExternalLink } from 'lucide-react';

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
              <TableHead className="text-black font-bold">Ferramenta GrowthFunnels</TableHead>
              <TableHead className="text-black font-bold">Substitui</TableHead>
              <TableHead className="text-black font-bold text-right">Valor mensal</TableHead>
              {variant === 'pricing' && (
                <TableHead className="text-black font-bold w-10"></TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {replacementTools.map((tool, index) => (
              <TableRow 
                key={index} 
                className="border-b border-[#d0ff00]/10 hover:bg-white/5"
              >
                <TableCell className="font-medium text-white py-3">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#d0ff00]" />
                    {tool.name}
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex flex-wrap gap-2">
                    {tool.tools.map((toolName, idx) => (
                      <div 
                        key={idx} 
                        className="bg-black/60 text-white px-2 py-1 rounded-md border border-[#d0ff00]/20 text-sm flex items-center gap-1"
                      >
                        {tool.logos && tool.logos[idx] && (
                          <img 
                            src={tool.logos[idx]} 
                            alt={toolName} 
                            className="h-4 w-4 object-contain" 
                          />
                        )}
                        <span>{toolName}</span>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-white text-right py-3 font-medium">{tool.value}</TableCell>
                {variant === 'pricing' && (
                  <TableCell className="text-right py-3">
                    <Check className="h-5 w-5 text-[#d0ff00] ml-auto" />
                  </TableCell>
                )}
              </TableRow>
            ))}
            <TableRow className="bg-[#d0ff00]/10 border-t border-[#d0ff00]/30">
              <TableCell className="text-white font-bold py-4">Total</TableCell>
              <TableCell className="py-4"></TableCell>
              <TableCell className="py-4 text-right">
                <div className="flex items-center justify-end gap-3">
                  <span className="text-red-500/80 line-through">{totalSaving}/mês</span>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-[#d0ff00] mr-1" />
                    <span className="text-[#d0ff00] font-bold">R$ 497/mês</span>
                  </div>
                  <div className="flex items-center bg-[#d0ff00]/20 rounded-full px-2 py-1 ml-1">
                    <ArrowDown className="h-3 w-3 text-[#d0ff00] mr-1" />
                    <span className="text-[#d0ff00] text-xs font-medium">90%</span>
                  </div>
                </div>
              </TableCell>
              {variant === 'pricing' && (
                <TableCell className="py-4 text-right">
                  <Check className="h-5 w-5 text-[#d0ff00] ml-auto" />
                </TableCell>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      {showFooter && (
        <div className="mt-4 text-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-[#d0ff00] border-[#d0ff00]/30 hover:bg-[#d0ff00]/10"
            onClick={onFooterClick || (() => window.location.href = footerLink)}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            {footerLinkText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ComparisonTable;
