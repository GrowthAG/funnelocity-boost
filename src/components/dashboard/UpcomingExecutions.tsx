
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock, Users, Activity } from 'lucide-react';

const UpcomingExecutions = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-white">Próximas Execuções</CardTitle>
        <CardDescription className="text-white/60">Automações agendadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg border border-[#d0ff00]/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#d0ff00]/10">
                <CalendarClock className="h-5 w-5 text-[#d0ff00]" />
              </div>
              <div>
                <p className="text-white font-medium">E-mail Semanal</p>
                <p className="text-xs text-white/60">650 destinatários</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">Hoje</p>
              <p className="text-xs text-white/60">14:30</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg border border-[#d0ff00]/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#d0ff00]/10">
                <Users className="h-5 w-5 text-[#d0ff00]" />
              </div>
              <div>
                <p className="text-white font-medium">Segmentação de Clientes</p>
                <p className="text-xs text-white/60">Automático</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">Amanhã</p>
              <p className="text-xs text-white/60">03:00</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg border border-[#d0ff00]/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#d0ff00]/10">
                <Activity className="h-5 w-5 text-[#d0ff00]" />
              </div>
              <div>
                <p className="text-white font-medium">Reengajamento</p>
                <p className="text-xs text-white/60">124 clientes inativos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">Quinta</p>
              <p className="text-xs text-white/60">10:00</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10">
          Adicionar Nova Automação
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UpcomingExecutions;
