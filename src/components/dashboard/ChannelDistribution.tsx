
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { channelData, COLORS } from '@/utils/dashboardData';

const ChannelDistribution = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 lg:col-span-2 shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-white">Distribuição de Canais</CardTitle>
      </CardHeader>
      <CardContent className="h-[320px] flex items-center justify-center">
        <ChartContainer 
          config={channelData.reduce((acc, item, index) => {
            acc[item.name] = { color: COLORS[index % COLORS.length] };
            return acc;
          }, {} as any)}
        >
          <PieChart>
            <Pie
              data={channelData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {channelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChannelDistribution;
