
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CustomProgress } from '@/components/ui/custom-progress';

const ActiveAutomations = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-white">Automações Ativas</CardTitle>
        <CardDescription className="text-white/60">Fluxos automatizados em execução</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white">Funil de Vendas</span>
              <span className="text-[#d0ff00]">92%</span>
            </div>
            <CustomProgress value={92} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white">Onboarding de Clientes</span>
              <span className="text-[#d0ff00]">78%</span>
            </div>
            <CustomProgress value={78} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white">Recuperação de Carrinho</span>
              <span className="text-[#d0ff00]">64%</span>
            </div>
            <CustomProgress value={64} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white">Nutrição de Leads</span>
              <span className="text-[#d0ff00]">87%</span>
            </div>
            <CustomProgress value={87} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black">Ver Todas Automações</Button>
      </CardFooter>
    </Card>
  );
};

export default ActiveAutomations;
