
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { automationData } from '@/utils/dashboardData';

const AutomationPerformance = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-white">Performance das Automações</CardTitle>
      </CardHeader>
      <CardContent className="h-[280px]">
        <ChartContainer
          config={automationData.reduce((acc, item) => {
            acc[item.name] = { color: item.fillColor };
            return acc;
          }, {} as any)}
        >
          <BarChart data={automationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="value" name="Mensagens Enviadas" radius={[4, 4, 0, 0]}>
              {automationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fillColor} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AutomationPerformance;
