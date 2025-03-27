import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Check, Shield, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
      
      {variant === 'dashboard' && (
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
                <TableCell className="py-4 text-center flex items-center justify-center">
                  <div className="flex items-center justify-center gap-2">
                    <img 
                      src="/lovable-uploads/2af2ab0f-347b-4cb0-b0d4-882a872e07fe.png" 
                      alt="GrowthFunnels Logo" 
                      className="h-6 w-auto"
                    />
                    <span className="text-[#d0ff00] font-bold text-lg">R$ 497/mês</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
      
      {variant === 'pricing' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <div className="bg-black border border-[#d0ff00]/20 rounded-xl h-full">
              <div className="p-5 border-b border-[#d0ff00]/20">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  O que você substituirá:
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  {replacementTools.map((tool, index) => (
                    <li key={index} className="flex justify-between pb-2 border-b border-white/10">
                      <span className="text-white/80">{tool.name}</span>
                      <span className="text-white font-medium">{tool.value}</span>
                    </li>
                  ))}
                  <li className="flex justify-between pt-2">
                    <span className="text-white font-bold text-lg">Total:</span>
                    <span className="text-red-500 font-bold text-lg">{totalSaving}/mês</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-black border-2 border-[#d0ff00] rounded-xl h-full relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#d0ff00] rotate-45 z-0 opacity-20"></div>
              
              <div className="p-5 border-b border-[#d0ff00]/20 relative z-10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#d0ff00]" />
                  Com GrowthFunnels você paga:
                </h3>
              </div>
              
              <div className="p-5 flex flex-col items-center justify-center relative z-10">
                <div className="absolute -right-2 top-4">
                  <div className="bg-[#d0ff00] text-black font-bold text-sm px-4 py-1 rounded-l-full flex items-center gap-1 shadow-lg">
                    <Star className="h-4 w-4" fill="black" strokeWidth={0} />
                    <span>Economize 90%</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center my-8">
                  <p className="text-white/70 mb-2">A partir de:</p>
                  <div className="flex items-center justify-center mb-2">
                    <img 
                      src="/lovable-uploads/2af2ab0f-347b-4cb0-b0d4-882a872e07fe.png" 
                      alt="GrowthFunnels Logo" 
                      className="h-10 w-auto mr-3" 
                    />
                    <p className="text-5xl font-bold text-[#d0ff00]">R$ 497<span className="text-white/70 text-base">/mês</span></p>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-3 mb-6">
                    <Check className="h-5 w-5 text-[#d0ff00]" />
                    <span className="text-white/80">Todos os recursos em uma única plataforma</span>
                  </div>
                  
                  <a href="https://checkout.growthfunnels.com.br/pro" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                    <Button 
                      className="w-full bg-[#d0ff00] text-black hover:bg-[#b3e600] shadow-lg hover:shadow-xl transition-all font-bold text-base py-6"
                      size="lg"
                    >
                      Contratar Plano PRO
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
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
