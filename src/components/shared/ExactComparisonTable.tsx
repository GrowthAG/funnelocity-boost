import React from 'react';
import { ArrowRight, CheckCircle, Zap, Users, Shield, Database, Clock, Medal, BellRing, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface ExactComparisonTableProps {
  replacementTools: Array<{
    name: string;
    value: string;
    tools?: string[];
  }>;
  totalSaving: string;
  billingAnnual?: boolean;
  getCheckoutLink?: (plan: string) => string;
  className?: string;
}
const ExactComparisonTable: React.FC<ExactComparisonTableProps> = ({
  replacementTools,
  totalSaving,
  billingAnnual = false,
  getCheckoutLink = (plan: string) => `https://checkout.growthfunnels.com.br/${plan.toLowerCase()}-${billingAnnual ? 'anual' : 'mensal'}`,
  className = ''
}) => {
  return <div className={`bg-black text-white ${className}`}>
      <div className="flex justify-center items-bottom gap-2 mb-2 px-0 mx-0 my-[12px] py-[5px]">
        <img src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/6700440a319ff820f2ee4b4e.png" alt="GrowthFunnels Logo" className="h-6" />
        <span className="text-xl font-bold text-white">vs. Outras Soluções</span>
      </div>
      <p className="text-center text-white/70 mb-4 text-sm">
        Compare o custo e os recursos do GrowthFunnels com as alternativas do mercado e veja quanto você pode 
        economizar enquanto simplifica sua stack de marketing e vendas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/20">
        {/* Left column */}
        <div className="border-r border-white/20">
          <div className="p-4 border-b border-white/20">
            <h3 className="text-xl font-bold text-white">O que você substituirá:</h3>
            <p className="text-white/70 text-sm mt-1">
              Todas essas ferramentas podem ser substituídas pelo GrowthFunnels, simplificando sua 
              operação e reduzindo custos:
            </p>
          </div>
          
          <div className="divide-y divide-white/20">
            {replacementTools.map((tool, index) => <div key={index} className="p-3 flex flex-col">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{tool.name}</span>
                  <span className="font-bold text-[#d0ff00]">{tool.value}</span>
                </div>
                
                {tool.tools && tool.tools.length > 0 && <div className="flex flex-wrap gap-1 mt-1">
                    {tool.tools.map((toolName, i) => <div key={i} className="bg-[#333333] hover:bg-[#444444] text-white/80 rounded px-2 py-0.5 text-xs flex items-center transition-colors duration-200">
                        <ArrowRight className="h-3 w-3 mr-1 text-[#d0ff00]" />
                        {toolName}
                      </div>)}
                  </div>}
              </div>)}
          </div>
        </div>
        
        {/* Right column */}
        <div>
          <div className="p-4 border-b border-white/20 flex justify-between items-start">
            <h3 className="text-xl font-bold text-white">Com GrowthFunnels você paga:</h3>
            <div className="text-[#d0ff00]">
              <DollarSign size={24} />
            </div>
          </div>
          
          <div className="p-4 mb-2">
            <p className="text-sm text-white/70">Plano Mensal:</p>
            <div className="flex justify-center items-baseline mt-2">
              <span className="text-[#d0ff00] font-bold text-xl">R$</span>
              <span className="text-[#d0ff00] text-7xl font-bold mx-1">497</span>
              <span className="text-white/70 font-normal text-lg">/mês</span>
            </div>
          </div>
          
          <div className="space-y-4 p-4 py-[15px]">
            <div className="flex items-start gap-2 px-0 py-[5px]">
              <CheckCircle className="h-5 w-5 text-[#d0ff00] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Substitua até 12 ferramentas</span>
                <p className="text-white/70 text-sm">Todas as funcionalidades em uma única plataforma</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 py-[5px]">
              <Zap className="h-5 w-5 text-[#d0ff00] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Economize até R$ 10.122,40 por ano</span>
                <p className="text-white/70 text-sm">Reduza seus custos em até 90% com mais qualidade</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 py-[5px]">
              <Users className="h-5 w-5 text-[#d0ff00] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Até 3 usuários incluídos</span>
                <p className="text-white/70 text-sm">Adicione mais usuários por apenas R$ 69/mês cada</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 py-[6px]">
              <Shield className="h-5 w-5 text-[#d0ff00] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Suporte técnico dedicado</span>
                <p className="text-white/70 text-sm">Conte com nossa equipe para implementação e dúvidas</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 py-[5px]">
              <Database className="h-5 w-5 text-[#d0ff00] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">20.000 contatos incluídos</span>
                <p className="text-white/70 text-sm">Gerencie seus clientes e leads em um só lugar</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 py-[5px]">
              <Clock className="h-5 w-5 text-[#d0ff00] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Automações ilimitadas</span>
                <p className="text-white/70 text-sm">Crie fluxos automatizados para marketing e vendas</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 py-[5px]">
              <Medal className="h-5 w-5 text-[#d0ff00] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Funções premium inclusas</span>
                <p className="text-white/70 text-sm">Sem cobranças adicionais por recursos avançados</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 py-[5px]">
              <BellRing className="h-5 w-5 text-[#d0ff00] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Notificações inteligentes</span>
                <p className="text-white/70 text-sm">Acompanhe em tempo real suas campanhas</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 mt-2">
            <a href={getCheckoutLink('PRO')} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button className="w-full py-3 bg-[#d0ff00] hover:bg-[#b3e600] text-black font-medium" size="lg">
                Contratar Plano PRO
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default ExactComparisonTable;