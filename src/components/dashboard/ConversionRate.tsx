
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Activity, ArrowUpRight } from 'lucide-react';
import { CustomProgress } from '@/components/ui/custom-progress';

const ConversionRate = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="text-white">Taxa de Conversão</div>
          <div className="p-2 rounded-lg bg-[#d0ff00]/10">
            <Activity className="h-5 w-5 text-[#d0ff00]" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">12.4%</div>
        <div className="flex items-center gap-2 text-green-500 text-sm mb-4">
          <ArrowUpRight className="h-4 w-4" />
          <span>+2.3% comparado ao mês anterior</span>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="text-white text-sm mb-1">Meta Mensal</p>
            <p className="text-lg font-medium text-white">15%</p>
          </div>
          <div>
            <p className="text-[#d0ff00] font-medium">82% concluído</p>
            <CustomProgress value={82} className="h-2 bg-white/10 w-32 mt-1" indicatorClassName="bg-[#d0ff00]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionRate;
