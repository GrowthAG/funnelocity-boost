
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { automationPerformanceData } from '@/utils/dashboardData';

const AutomationAreaChart = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-white">Performance das Automações (Últimos 30 dias)</CardTitle>
      </CardHeader>
      <CardContent className="h-[350px]">
        <ChartContainer 
          config={{ 
            mensagens: { color: "#d0ff00" },
            aberturas: { color: "#0088FE" },
            clicks: { color: "#FF6B6B" }
          }}
        >
          <AreaChart
            data={automationPerformanceData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" stroke="#666" />
            <YAxis stroke="#666" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Area type="monotone" dataKey="mensagens" stackId="1" stroke="#d0ff00" fill="#d0ff00" fillOpacity={0.3} />
            <Area type="monotone" dataKey="aberturas" stackId="2" stroke="#0088FE" fill="#0088FE" fillOpacity={0.3} />
            <Area type="monotone" dataKey="clicks" stackId="3" stroke="#FF6B6B" fill="#FF6B6B" fillOpacity={0.3} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AutomationAreaChart;
