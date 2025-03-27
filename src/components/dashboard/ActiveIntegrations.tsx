
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
      <CardHeader>
        <CardTitle className="text-white">Integrações Ativas</CardTitle>
        <CardDescription className="text-white/60">Serviços conectados à sua conta</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          
          <div className="bg-black/30 p-4 rounded-lg border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/5 flex items-center justify-center w-10 h-10">
                <span className="text-white/70 text-sm font-medium">ST</span>
              </div>
              <div>
                <p className="text-white/70 font-medium">Stripe</p>
                <p className="text-xs text-white/50">Desconectado</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/10 text-white/70 hover:bg-white/5 h-8"
              onClick={() => handleConnectClick("Stripe")}
            >
              Conectar
            </Button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/5 flex items-center justify-center w-10 h-10">
                <span className="text-white/70 text-sm font-medium">MC</span>
              </div>
              <div>
                <p className="text-white/70 font-medium">Mailchimp</p>
                <p className="text-xs text-white/50">Desconectado</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/10 text-white/70 hover:bg-white/5 h-8"
              onClick={() => handleConnectClick("Mailchimp")}
            >
              Conectar
            </Button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/5 flex items-center justify-center w-10 h-10">
                <span className="text-white/70 text-sm font-medium">HS</span>
              </div>
              <div>
                <p className="text-white/70 font-medium">HubSpot</p>
                <p className="text-xs text-white/50">Desconectado</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/10 text-white/70 hover:bg-white/5 h-8"
              onClick={() => handleConnectClick("HubSpot")}
            >
              Conectar
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
