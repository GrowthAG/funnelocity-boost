
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ActiveIntegrations = () => {
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
              <div className="p-2 rounded-full bg-[#d0ff00]/10">
                <img 
                  src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                  alt="Google" 
                  className="h-8 w-8 object-contain rounded-full"
                />
              </div>
              <div>
                <p className="text-white font-medium">Google Ads</p>
                <p className="text-xs text-[#d0ff00]">Conectado</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 h-8">
              Configurar
            </Button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#d0ff00]/10">
                <img 
                  src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                  alt="Meta" 
                  className="h-8 w-8 object-contain rounded-full"
                />
              </div>
              <div>
                <p className="text-white font-medium">Meta Ads</p>
                <p className="text-xs text-[#d0ff00]">Conectado</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 h-8">
              Configurar
            </Button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-[#d0ff00]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#d0ff00]/10">
                <img 
                  src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                  alt="Zapier" 
                  className="h-8 w-8 object-contain rounded-full"
                />
              </div>
              <div>
                <p className="text-white font-medium">Zapier</p>
                <p className="text-xs text-[#d0ff00]">Conectado</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 h-8">
              Configurar
            </Button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/5">
                <img 
                  src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                  alt="Stripe" 
                  className="h-8 w-8 object-contain rounded-full opacity-50"
                />
              </div>
              <div>
                <p className="text-white/70 font-medium">Stripe</p>
                <p className="text-xs text-white/50">Desconectado</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-white/10 text-white/70 hover:bg-white/5 h-8">
              Conectar
            </Button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/5">
                <img 
                  src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                  alt="Mailchimp" 
                  className="h-8 w-8 object-contain rounded-full opacity-50"
                />
              </div>
              <div>
                <p className="text-white/70 font-medium">Mailchimp</p>
                <p className="text-xs text-white/50">Desconectado</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-white/10 text-white/70 hover:bg-white/5 h-8">
              Conectar
            </Button>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/5">
                <img 
                  src="/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png" 
                  alt="HubSpot" 
                  className="h-8 w-8 object-contain rounded-full opacity-50"
                />
              </div>
              <div>
                <p className="text-white/70 font-medium">HubSpot</p>
                <p className="text-xs text-white/50">Desconectado</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-white/10 text-white/70 hover:bg-white/5 h-8">
              Conectar
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black">
          Adicionar Nova Integração
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActiveIntegrations;
