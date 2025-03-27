
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Activity, ArrowUpRight, Workflow, Link2 } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}

const MetricCard = ({ title, value, change, positive, icon }: MetricCardProps) => {
  const renderIcon = () => {
    switch (icon) {
      case "Activity":
        return <Activity className="h-6 w-6 text-[#d0ff00]" />;
      case "Workflow":
        return <Workflow className="h-6 w-6 text-[#d0ff00]" />;
      case "Link2":
        return <Link2 className="h-6 w-6 text-[#d0ff00]" />;
      default:
        return <Activity className="h-6 w-6 text-[#d0ff00]" />;
    }
  };

  return (
    <Card className="bg-black/40 border border-[#d0ff00]/10 shadow-md hover:shadow-lg hover:shadow-[#d0ff00]/5 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="text-white text-lg">{title}</div>
          <div className="p-2 rounded-lg bg-[#d0ff00]/10">{renderIcon()}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2">
          <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
          <div className={`text-sm font-medium flex items-center ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
            <ArrowUpRight className={`h-4 w-4 ml-0.5 ${!positive && 'rotate-180'}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
