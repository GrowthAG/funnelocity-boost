
import React from 'react';
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
    <div className={`${className}`}>
      {showHeader && (
        <div className="mb-4">
          <h3 className="text-lg font-medium text-white mb-3">{headerTitle}</h3>
          <p className="text-white/70 text-sm mb-4">
            {headerDescription}
          </p>
        </div>
      )}
      
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
                <p className="text-white/70 text-sm mt-1">ou 12x de R$ 41,41</p>
                
                <div className="flex items-center gap-1 mt-3 mb-6">
                  <Check className="h-5 w-5 text-[#d0ff00]" />
                  <span className="text-white/80">Todos os recursos em uma única plataforma</span>
                </div>
                
                <a href="https://checkout.growthfunnels.com.br/pro" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                  <Button 
                    className="w-full py-6"
                    size="lg"
                    variant="redNeon"
                  >
                    Contratar Plano PRO
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
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
