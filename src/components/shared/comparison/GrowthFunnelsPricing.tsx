
import React from 'react';
import { CheckCircle, ExternalLink, DollarSign, Zap, Shield, Users, Clock, Database, CheckCheck, Medal, Sparkles, Rocket, BellRing } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GrowthFunnelsPricingProps {
  totalSaving?: string;
  billingAnnual?: boolean;
  getCheckoutLink?: (plan: string) => string;
}

const GrowthFunnelsPricing = ({ 
  totalSaving = "R$ 10.122,40", 
  billingAnnual = false,
  getCheckoutLink = () => "https://checkout.growthfunnels.com.br/pro-mensal"
}: GrowthFunnelsPricingProps) => {
  const price = billingAnnual ? "4.970" : "497";
  const period = billingAnnual ? "/ano" : "/mês";
  const installment = billingAnnual ? "ou 12x de R$ 414" : null;
  const planType = billingAnnual ? "Anual" : "Mensal";

  return (
    <div className="bg-black h-full flex flex-col">
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">Com GrowthFunnels você paga:</h3>
          <div className="bg-white/5 rounded-full p-1">
            <DollarSign className="h-5 w-5 text-[#d0ff00]" />
          </div>
        </div>
        
        <div className="mb-3">
          <p className="text-sm text-white/70 mb-1">Plano {planType}:</p>
          <div className="flex flex-col items-center mb-1">
            <div className="flex items-baseline">
              <span className="text-[#d0ff00] text-xl font-bold">R$</span>
              <span className="text-[#d0ff00] text-4xl font-bold ml-1">{price}</span>
              <span className="text-white/90 text-lg ml-1">{period}</span>
            </div>
            {installment && (
              <p className="text-white/70 text-sm mt-1">{installment}</p>
            )}
          </div>
        </div>
      </div>
        
      <div className="space-y-2 p-3 overflow-auto flex-grow">
        <div className="flex items-start bg-white/5 p-2 rounded-lg">
          <CheckCheck className="h-4 w-4 text-[#d0ff00] mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <span className="text-white text-sm font-medium">Substitua até 12 ferramentas</span>
            <p className="text-white/60 text-xs mt-0.5">Todas as funcionalidades em uma única plataforma</p>
          </div>
        </div>
        
        <div className="flex items-start bg-white/5 p-2 rounded-lg">
          <Zap className="h-4 w-4 text-[#d0ff00] mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <span className="text-white text-sm font-medium">Economize até {totalSaving} por ano</span>
            <p className="text-white/60 text-xs mt-0.5">Reduza seus custos em até 90% com mais qualidade</p>
          </div>
        </div>
        
        <div className="flex items-start bg-white/5 p-2 rounded-lg">
          <Users className="h-4 w-4 text-[#d0ff00] mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <span className="text-white text-sm font-medium">Até 3 usuários incluídos</span>
            <p className="text-white/60 text-xs mt-0.5">Adicione mais usuários por apenas R$ 69/mês cada</p>
          </div>
        </div>

        <div className="flex items-start bg-white/5 p-2 rounded-lg">
          <Shield className="h-4 w-4 text-[#d0ff00] mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <span className="text-white text-sm font-medium">Suporte técnico dedicado</span>
            <p className="text-white/60 text-xs mt-0.5">Conte com nossa equipe para implementação e dúvidas</p>
          </div>
        </div>
        
        <div className="flex items-start bg-white/5 p-2 rounded-lg">
          <Database className="h-4 w-4 text-[#d0ff00] mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <span className="text-white text-sm font-medium">20.000 contatos incluídos</span>
            <p className="text-white/60 text-xs mt-0.5">Gerencie seus clientes e leads em um só lugar</p>
          </div>
        </div>
        
        <div className="flex items-start bg-white/5 p-2 rounded-lg">
          <Clock className="h-4 w-4 text-[#d0ff00] mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <span className="text-white text-sm font-medium">Automações ilimitadas</span>
            <p className="text-white/60 text-xs mt-0.5">Crie fluxos automatizados para marketing e vendas</p>
          </div>
        </div>

        <div className="flex items-start bg-white/5 p-2 rounded-lg">
          <Medal className="h-4 w-4 text-[#d0ff00] mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <span className="text-white text-sm font-medium">Funções premium inclusas</span>
            <p className="text-white/60 text-xs mt-0.5">Sem cobranças adicionais por recursos avançados</p>
          </div>
        </div>

        <div className="flex items-start bg-white/5 p-2 rounded-lg">
          <BellRing className="h-4 w-4 text-[#d0ff00] mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <span className="text-white text-sm font-medium">Notificações inteligentes</span>
            <p className="text-white/60 text-xs mt-0.5">Acompanhe em tempo real suas campanhas</p>
          </div>
        </div>
      </div>
      
      <div className="p-3 mt-auto border-t border-white/10">
        <a 
          href={getCheckoutLink('PRO')} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full"
        >
          <Button className="w-full py-2 text-sm font-bold" variant="greenNeon" size="default">
            Contratar Plano PRO Mensal
            <ExternalLink className="h-4 w-4 ml-1" />
          </Button>
        </a>
        
        <div className="flex items-center justify-center p-2 mt-2 border border-[#d0ff00]/30 rounded-lg bg-[#d0ff00]/5">
          <div className="text-center">
            <span className="block text-[#d0ff00] text-xs font-medium">
              Economize 90% em relação a outras soluções
            </span>
            <span className="text-white/60 text-[10px]">Uma única assinatura para todas as ferramentas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthFunnelsPricing;
