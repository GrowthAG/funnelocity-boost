
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { connectionTrafficData } from '@/utils/dashboardData';

const ConnectionTraffic = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-white">Tráfego de Dados por Integração</CardTitle>
      </CardHeader>
      <CardContent className="h-[320px]">
        <ChartContainer 
          config={{
            entrada: { color: "#d0ff00" },
            saida: { color: "#FF6B6B" }
          }}
        >
          <BarChart
            data={connectionTrafficData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="entrada" name="Dados Recebidos" fill="#d0ff00" radius={[4, 4, 0, 0]} />
            <Bar dataKey="saida" name="Dados Enviados" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ConnectionTraffic;
