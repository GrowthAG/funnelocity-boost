
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Users, ArrowUpRight } from 'lucide-react';
import { CustomProgress } from '@/components/ui/custom-progress';

const ContactMetric = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="text-white">Base de Contatos</div>
          <div className="p-2 rounded-lg bg-[#d0ff00]/10">
            <Users className="h-5 w-5 text-[#d0ff00]" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">8.452</div>
        <div className="flex items-center gap-2 text-green-500 text-sm mb-4">
          <ArrowUpRight className="h-4 w-4" />
          <span>+245 nos últimos 30 dias</span>
        </div>
        <div className="space-y-4 mt-2">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white">Leads</span>
              <span className="text-white/70">5.842</span>
            </div>
            <CustomProgress value={68} className="h-2 bg-white/10" indicatorClassName="bg-[#d0ff00]" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white">Clientes</span>
              <span className="text-white/70">2.610</span>
            </div>
            <CustomProgress value={32} className="h-2 bg-white/10" indicatorClassName="bg-[#0088FE]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactMetric;
