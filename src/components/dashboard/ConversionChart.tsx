
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { conversionData } from '@/utils/dashboardData';

const ConversionChart = () => {
  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 lg:col-span-5 shadow-md">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <CardTitle className="text-white">Conversões e MRR</CardTitle>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-[#d0ff00] rounded-full"></div>
              <span>Conversões</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-[#0088FE] rounded-full"></div>
              <span>MRR (R$)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[320px]">
        <ChartContainer 
          config={{ 
            conversions: { color: "#d0ff00" },
            mrr: { color: "#0088FE" }
          }}
        >
          <LineChart data={conversionData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis yAxisId="left" stroke="#666" />
            <YAxis yAxisId="right" orientation="right" stroke="#666" />
            <ChartTooltip 
              content={<ChartTooltipContent />}
            />
            <Legend />
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="conversions" 
              stroke="#d0ff00" 
              strokeWidth={2} 
              activeDot={{ r: 8 }} 
            />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="mrr" 
              stroke="#0088FE" 
              strokeWidth={2} 
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ConversionChart;
