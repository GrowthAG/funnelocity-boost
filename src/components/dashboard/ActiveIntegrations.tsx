
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ComparisonTable from "@/components/shared/ComparisonTable";
import { replacementToolsData, totalSavingData } from '@/utils/dashboardData';

const ActiveIntegrations = () => {
  const { toast } = useToast();
  
  const handleConfigureClick = (integration: string) => {
    toast({
      title: `Configurando ${integration}`,
      description: "Você será redirecionado para a página de configuração em breve.",
    });
  };
  
  const handleConnectClick = (integration: string) => {
    toast({
      title: `Conectando com ${integration}`,
      description: "Iniciando processo de conexão com a plataforma.",
    });
  };
  
  const handleAddNewIntegration = () => {
    toast({
      title: "Adicionar Nova Integração",
      description: "Selecione um serviço para integrar à sua conta GrowthFunnels.",
    });
  };
  
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md col-span-1 md:col-span-3">
      <CardHeader className="relative pb-0">
        <div className="absolute top-4 right-4">
          <img 
            src="/lovable-uploads/38330c75-db65-4540-ae8c-3b05f2f6cd94.png" 
            alt="GrowthFunnels Logo" 
            className="h-10 md:h-12"
          />
        </div>
        <CardTitle className="text-white">Integrações e Substituições</CardTitle>
        <CardDescription className="text-white/60">
          Compare quanto você economiza com o GrowthFunnels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-4 mb-6">
          <ComparisonTable 
            replacementTools={replacementToolsData}
            totalSaving={totalSavingData}
            variant="dashboard"
          />
        </div>

        <h3 className="text-lg font-medium text-white mb-4">Suas integrações ativas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/30 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#d0ff00]/10 flex items-center justify-center w-10 h-10">
                <span className="text-[#d0ff00] text-sm font-medium">GA</span>
              </div>
              <div>
                <p className="text-white font-medium">Google Ads</p>
                <p className="text-xs text-[#d0ff00]">Conectado</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 h-8"
              onClick={() => handleConfigureClick("Google Ads")}
            >
              Configurar
            </Button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#d0ff00]/10 flex items-center justify-center w-10 h-10">
                <span className="text-[#d0ff00] text-sm font-medium">MA</span>
              </div>
              <div>
                <p className="text-white font-medium">Meta Ads</p>
                <p className="text-xs text-[#d0ff00]">Conectado</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 h-8"
              onClick={() => handleConfigureClick("Meta Ads")}
            >
              Configurar
            </Button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#d0ff00]/10 flex items-center justify-center w-10 h-10">
                <span className="text-[#d0ff00] text-sm font-medium">ZP</span>
              </div>
              <div>
                <p className="text-white font-medium">Zapier</p>
                <p className="text-xs text-[#d0ff00]">Conectado</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 h-8"
              onClick={() => handleConfigureClick("Zapier")}
            >
              Configurar
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black"
          onClick={handleAddNewIntegration}
        >
          Adicionar Nova Integração
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActiveIntegrations;
