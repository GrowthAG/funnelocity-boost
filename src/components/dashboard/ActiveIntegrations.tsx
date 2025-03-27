
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, ArrowDown, DollarSign } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

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

  // Dados da comparação
  const replacementTools = [
    { 
      name: "CRM & Pipeline de Vendas", 
      value: "R$ 502,71", 
      tools: ["Pipedrive", "Close", "Salesflare", "ActiveCampaign"] 
    },
    {
      name: "Funis de Vendas", 
      value: "R$ 1.507,22", 
      tools: ["Salesforce", "Pipefy", "HubSpot"] 
    },
    {
      name: "Planejamento Redes Sociais", 
      value: "R$ 24,90", 
      tools: ["mLabs", "Etus"] 
    },
    {
      name: "Construtor de Sites", 
      value: "R$ 248,75", 
      tools: ["WordPress", "Wix", "Webflow"] 
    },
    {
      name: "Formulários e Pesquisas", 
      value: "R$ 457,03", 
      tools: ["Typeform", "Google Forms", "Respond.io"] 
    },
    {
      name: "E-mail Marketing", 
      value: "R$ 406,25", 
      tools: ["Brevo", "Mailchimp", "ActiveCampaign"] 
    },
    {
      name: "Calendário e Agendamentos", 
      value: "R$ 111,72", 
      tools: ["Calendly", "Google Calendar"] 
    },
    {
      name: "Automações de Marketing", 
      value: "R$ 858,20", 
      tools: ["ActiveCampaign", "Salesforce Marketing Cloud"] 
    },
    {
      name: "Cursos/Produtos", 
      value: "R$ 492,54", 
      tools: ["Hotmart", "Eduzz", "Kiwify", "HeroSpark"] 
    },
    {
      name: "Chamadas e Monitoramentos", 
      value: "R$ 482,47", 
      tools: ["GoTo Connect", "Twilio"] 
    },
    {
      name: "Gestão de Reputação", 
      value: "R$ 2.448,00", 
      tools: ["Trustpilot"] 
    },
    {
      name: "Analytics", 
      value: "R$ 126,96", 
      tools: ["Mixpanel", "Amplitude"] 
    }
  ];
  
  const totalSaving = "R$ 10.122,40";
  
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md col-span-1 md:col-span-3">
      <CardHeader className="relative pb-0">
        <div className="absolute top-4 right-4">
          <img 
            src="/lovable-uploads/3a771a88-69f5-4e59-a54e-cc23daedc64e.png" 
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
        <div className="overflow-hidden rounded-lg mt-4">
          <Table>
            <TableHeader className="bg-[#d0ff00]">
              <TableRow>
                <TableHead className="text-black font-bold">Ferramenta GrowthFunnels</TableHead>
                <TableHead className="text-black font-bold">Substitui</TableHead>
                <TableHead className="text-black font-bold text-right">Valor mensal</TableHead>
                <TableHead className="text-black font-bold w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {replacementTools.map((tool, index) => (
                <TableRow 
                  key={index} 
                  className="border-b border-[#d0ff00]/10 hover:bg-white/5"
                >
                  <TableCell className="text-white py-3">{tool.name}</TableCell>
                  <TableCell className="py-3">
                    <div className="flex flex-wrap gap-2">
                      {tool.tools.map((toolName, idx) => (
                        <span 
                          key={idx} 
                          className="bg-black/60 text-white px-2 py-1 rounded-md border border-[#d0ff00]/20 text-sm"
                        >
                          {toolName}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-white text-right py-3">{tool.value}/mês</TableCell>
                  <TableCell className="text-right py-3">
                    <Check className="h-5 w-5 text-[#d0ff00] ml-auto" />
                  </TableCell>
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
                <TableCell className="py-4 text-right">
                  <Check className="h-5 w-5 text-[#d0ff00] ml-auto" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
