
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, ArrowDown, DollarSign, ExternalLink } from 'lucide-react';
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
      tools: ["Pipedrive", "Close", "Salesflare", "ActiveCampaign"],
      logos: [
        "/lovable-uploads/ec2d3fe2-1f5f-4a70-9f28-8af8a18ffe4d.png", 
        "/lovable-uploads/23a9d576-f113-4771-b2d3-ff5962bb0ae4.png",
        "/lovable-uploads/28b22c78-8b09-4993-9304-088fc6a22e3d.png",
        "/lovable-uploads/76071022-36a4-436d-b967-40b405aa5348.png"
      ]
    },
    {
      name: "Funis de Vendas", 
      value: "R$ 1.507,22", 
      tools: ["Salesforce", "Pipefy", "HubSpot"],
      logos: [
        "/lovable-uploads/fa9ce812-73e9-4b7a-8a2d-8d4bec1b9366.png",
        "/lovable-uploads/af51da29-988c-4767-aa02-b724b80fd078.png",
        "/lovable-uploads/85e849b6-0017-45f5-b4aa-d9c00e9236e5.png"
      ]
    },
    {
      name: "Planejamento Redes Sociais", 
      value: "R$ 24,90", 
      tools: ["mLabs", "Etus"],
      logos: [
        "/lovable-uploads/873518a3-4940-430d-985b-470b533d4b7a.png",
        "/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"
      ]
    },
    {
      name: "Construtor de Sites", 
      value: "R$ 248,75", 
      tools: ["WordPress", "Wix", "Webflow"],
      logos: [
        "/lovable-uploads/1afce23a-a9c6-4720-a725-f3a850ce22be.png",
        "/lovable-uploads/19e748f8-e8c3-4367-a3ed-5d16da13f8c1.png",
        "/lovable-uploads/f08c6356-9c67-4e4d-8373-5cfd85f5e2f4.png"
      ]
    },
    {
      name: "Formulários e Pesquisas", 
      value: "R$ 457,03", 
      tools: ["Typeform", "Google Forms", "Respond.io"],
      logos: [
        "/lovable-uploads/b1082615-5b0d-4bd3-9b75-ee2724be2d23.png",
        "/lovable-uploads/84ede28a-0919-4309-ba2c-876a53719806.png",
        "/lovable-uploads/88654284-fd43-4ec7-b610-7c068119ff81.png"
      ]
    },
    {
      name: "E-mail Marketing", 
      value: "R$ 406,25", 
      tools: ["Brevo", "Mailchimp", "ActiveCampaign"],
      logos: [
        "/lovable-uploads/3ae50462-d15d-4181-8b6b-e438e28d2c65.png",
        "/lovable-uploads/25d0a1ba-c7ab-4632-a6d7-ba4487a0a28c.png",
        "/lovable-uploads/76071022-36a4-436d-b967-40b405aa5348.png"
      ]
    },
    {
      name: "Calendário e Agendamentos", 
      value: "R$ 111,72", 
      tools: ["Calendly", "Google Calendar"],
      logos: [
        "/lovable-uploads/1ececfa5-5b1c-40d9-97cc-7d5d576880b0.png",
        "/lovable-uploads/efea1fc0-61ab-4104-bbee-bdb236109631.png"
      ]
    },
    {
      name: "Automações de Marketing", 
      value: "R$ 858,20", 
      tools: ["ActiveCampaign", "Salesforce Marketing Cloud"],
      logos: [
        "/lovable-uploads/76071022-36a4-436d-b967-40b405aa5348.png",
        "/lovable-uploads/fa9ce812-73e9-4b7a-8a2d-8d4bec1b9366.png"
      ]
    },
    {
      name: "Cursos/Produtos", 
      value: "R$ 492,54", 
      tools: ["Hotmart", "Eduzz", "Kiwify", "HeroSpark"],
      logos: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    },
    {
      name: "Chamadas e Monitoramentos", 
      value: "R$ 482,47", 
      tools: ["GoTo Connect", "Twilio"],
      logos: [
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    },
    {
      name: "Gestão de Reputação", 
      value: "R$ 2.448,00", 
      tools: ["Trustpilot"],
      logos: [
        "/placeholder.svg"
      ]
    },
    {
      name: "Analytics", 
      value: "R$ 126,96", 
      tools: ["Mixpanel", "Amplitude"],
      logos: [
        "/placeholder.svg",
        "/placeholder.svg"
      ]
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
        <div className="mt-4 mb-6 p-4 bg-[#d0ff00]/5 rounded-lg border border-[#d0ff00]/10">
          <h3 className="text-lg font-medium text-white mb-3">Economize até 90% com GrowthFunnels</h3>
          <p className="text-white/70 text-sm mb-4">
            Em vez de pagar por várias ferramentas separadas, tenha tudo em uma única plataforma completa
          </p>
          
          <div className="overflow-hidden rounded-lg border border-[#d0ff00]/20">
            <Table>
              <TableHeader className="bg-[#d0ff00]">
                <TableRow>
                  <TableHead className="text-black font-bold">Ferramenta GrowthFunnels</TableHead>
                  <TableHead className="text-black font-bold">Substitui</TableHead>
                  <TableHead className="text-black font-bold text-right">Valor mensal</TableHead>
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
                            {tool.logos[idx] && (
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
                    <TableCell className="text-white text-right py-3 font-medium">{tool.value}/mês</TableCell>
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
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 text-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-[#d0ff00] border-[#d0ff00]/30 hover:bg-[#d0ff00]/10"
              onClick={() => window.location.href = "/pricing"}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Veja comparação completa
            </Button>
          </div>
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

