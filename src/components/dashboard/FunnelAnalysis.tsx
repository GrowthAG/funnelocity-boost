
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { funnelData } from '@/utils/dashboardData';

const FunnelAnalysis = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-white">Análise de Funil de Vendas</CardTitle>
      </CardHeader>
      <CardContent className="h-[350px]">
        <ChartContainer 
          config={{ 
            visitantes: { color: "#d0ff00" },
            leads: { color: "#0088FE" },
            oportunidades: { color: "#FFBB28" },
            clientes: { color: "#FF6B6B" }
          }}
        >
          <BarChart
            data={funnelData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
            <XAxis type="number" stroke="#666" />
            <YAxis dataKey="name" type="category" stroke="#666" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="total" name="Quantidade" radius={[0, 4, 4, 0]}>
              {[
                <Cell key="cell-0" fill="#d0ff00" />,
                <Cell key="cell-1" fill="#0088FE" />,
                <Cell key="cell-2" fill="#FFBB28" />,
                <Cell key="cell-3" fill="#FF6B6B" />,
              ]}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default FunnelAnalysis;
