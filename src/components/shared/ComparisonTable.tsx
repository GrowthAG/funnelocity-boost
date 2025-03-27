
import React from 'react';
import { Check, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface ToolInfo {
  name: string;
  value: string;
}

interface ComparisonTableProps {
  replacementTools: ToolInfo[];
  totalSaving?: string;
  className?: string;
}

const ComparisonTable = ({
  replacementTools,
  totalSaving = "R$ 5.609,69",
  className = ''
}: ComparisonTableProps) => {
  return (
    <div className={`${className}`}>
      <div className="bg-black border-t border-[#d0ff00]/30 pt-6">
        <div className="px-4 md:px-6">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-[#d0ff00]" />
            <h3 className="text-xl font-bold text-white">Quanto você economiza com GrowthFunnels?</h3>
          </div>
          <p className="text-white/70 mb-6">A plataforma substitui mais de 12 ferramentas diferentes</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#d0ff00]/30 rounded-lg overflow-hidden">
            {/* Left Column */}
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
            
            {/* Right Column */}
            <div className="bg-black relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-[#d0ff00]/20 rounded-full z-0"></div>
              <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#d0ff00]/10 rounded-full z-0"></div>
              
              <div className="p-5 border-b border-[#d0ff00]/30 relative z-10">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#d0ff00]" />
                  <h3 className="text-lg font-bold text-white">Com GrowthFunnels você paga:</h3>
                </div>
              </div>
              
              <div className="p-5 relative z-10">
                <div className="absolute right-4 top-4">
                  <div className="bg-[#d0ff00] text-black font-bold text-sm px-4 py-1 rounded-full flex items-center gap-1">
                    ★ Economize 90%
                  </div>
                </div>
                
                <div className="flex flex-col items-center py-3">
                  <p className="text-white/70 mb-1">A partir de:</p>
                  <div className="flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/2af2ab0f-347b-4cb0-b0d4-882a872e07fe.png" 
                      alt="GrowthFunnels Logo" 
                      className="h-8 w-auto mr-2" 
                    />
                    <div className="flex items-baseline">
                      <span className="text-[#d0ff00] text-4xl font-bold">R$ 497</span>
                      <span className="text-white/70 text-base">/mês</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mt-1">ou 12x de R$ 41,41</p>
                  
                  <div className="flex items-center gap-2 mt-4 mb-4">
                    <Check className="h-5 w-5 text-[#d0ff00] flex-shrink-0" />
                    <span className="text-white/80">Todos os recursos em uma única plataforma</span>
                  </div>
                  
                  <a href="https://checkout.growthfunnels.com.br/pro" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                      className="w-full"
                      variant="redNeon"
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
      </div>
    </div>
  );
};

export default ComparisonTable;
