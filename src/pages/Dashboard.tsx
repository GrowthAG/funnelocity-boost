
import React, { useState, useEffect } from 'react';
import { TabsContent } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetricCard from '@/components/dashboard/MetricCard';
import ConversionChart from '@/components/dashboard/ConversionChart';
import ChannelDistribution from '@/components/dashboard/ChannelDistribution';
import AutomationPerformance from '@/components/dashboard/AutomationPerformance';
import ActiveAutomations from '@/components/dashboard/ActiveAutomations';
import UpcomingExecutions from '@/components/dashboard/UpcomingExecutions';
import AutomationAreaChart from '@/components/dashboard/AutomationAreaChart';
import ActiveIntegrations from '@/components/dashboard/ActiveIntegrations';
import ConnectionTraffic from '@/components/dashboard/ConnectionTraffic';
import ContactMetric from '@/components/dashboard/ContactMetric';
import ConversionRate from '@/components/dashboard/ConversionRate';
import AverageTicket from '@/components/dashboard/AverageTicket';
import FunnelAnalysis from '@/components/dashboard/FunnelAnalysis';
import PromoBanner from '@/components/dashboard/PromoBanner';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import { automationMetrics } from '@/utils/dashboardData';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading progress
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20 md:pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-white">
              Dashboard <span className="text-[#d0ff00]">Analytics</span>
            </h1>
            <p className="text-base md:text-lg text-white/70">
              Monitore o desempenho de suas automações, conexões e conversões em tempo real.
            </p>
          </div>
          
          <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="animate-fade-in">
            {/* Top Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {automationMetrics.map((metric, index) => (
                <MetricCard 
                  key={index}
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  positive={metric.positive}
                  icon={metric.icon}
                />
              ))}
            </div>
            
            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-6">
              <ConversionChart />
              <ChannelDistribution />
            </div>
            
            {/* Automation Performance */}
            <AutomationPerformance />
          </TabsContent>
          
          {/* Automations Tab */}
          <TabsContent value="automations" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ActiveAutomations />
              <UpcomingExecutions />
            </div>
            
            <AutomationAreaChart />
          </TabsContent>
          
          {/* Connections Tab */}
          <TabsContent value="connections" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <ActiveIntegrations />
            </div>
            
            <ConnectionTraffic />
          </TabsContent>
          
          {/* Data Tab */}
          <TabsContent value="data" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <ContactMetric />
              <ConversionRate />
              <AverageTicket />
            </div>
            
            <FunnelAnalysis />
          </TabsContent>
          
          <PromoBanner />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
