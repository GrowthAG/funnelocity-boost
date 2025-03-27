
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { LineChart as LineIcon, ArrowUpRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import { ticketData } from '@/utils/dashboardData';

const AverageTicket = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="text-white">Ticket Médio</div>
          <div className="p-2 rounded-lg bg-[#d0ff00]/10">
            <LineIcon className="h-5 w-5 text-[#d0ff00]" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">R$ 1.840</div>
        <div className="flex items-center gap-2 text-green-500 text-sm mb-4">
          <ArrowUpRight className="h-4 w-4" />
          <span>+R$ 210 comparado ao mês anterior</span>
        </div>
        <div className="h-24 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ticketData}>
              <Line type="monotone" dataKey="valor" stroke="#d0ff00" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AverageTicket;
