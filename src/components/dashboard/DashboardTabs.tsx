
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, LineChart, PieChart, Activity, Database, Link2, Workflow } from 'lucide-react';

interface DashboardTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const DashboardTabs = ({ activeTab, setActiveTab }: DashboardTabsProps) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-[#d0ff00]/5 rounded-lg -z-10" />
      <div className="overflow-x-auto py-2 px-1 no-scrollbar">
        <TabsList className="bg-black/80 border border-[#d0ff00]/20 p-1 rounded-lg inline-flex w-full min-w-max">
          <TabsTrigger 
            value="overview"
            className="px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300
              data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
              data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
              flex items-center gap-2"
            onClick={() => setActiveTab('overview')}
          >
            <BarChart3 className="h-4 w-4" />
            Visão Geral
          </TabsTrigger>
          <TabsTrigger 
            value="automations"
            className="px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300
              data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
              data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
              flex items-center gap-2"
            onClick={() => setActiveTab('automations')}
          >
            <Workflow className="h-4 w-4" />
            Automações
          </TabsTrigger>
          <TabsTrigger 
            value="connections"
            className="px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300
              data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
              data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
              flex items-center gap-2"
            onClick={() => setActiveTab('connections')}
          >
            <Link2 className="h-4 w-4" />
            Conexões
          </TabsTrigger>
          <TabsTrigger 
            value="data"
            className="px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all duration-300
              data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
              data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
              flex items-center gap-2"
            onClick={() => setActiveTab('data')}
          >
            <Database className="h-4 w-4" />
            Dados
          </TabsTrigger>
        </TabsList>
      </div>
    </div>
  );
};

export default DashboardTabs;
