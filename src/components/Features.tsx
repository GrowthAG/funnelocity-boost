
import React from 'react';
import { 
  Users, 
  BarChart, 
  MessageSquare,
  Calendar, 
  Database, 
  Globe, 
  LineChart, 
  Zap, 
  Shield
} from 'lucide-react';

const features = [
  {
    icon: <Database className="h-6 w-6 text-revcrm-blue" />,
    title: "Unified CRM",
    description: "Centralize all your customer data in one place for better relationship management and insight-driven decisions."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-revcrm-blue" />,
    title: "Multichannel Communication",
    description: "Engage with your customers through email, SMS, and social media, all from a single platform."
  },
  {
    icon: <Calendar className="h-6 w-6 text-revcrm-blue" />,
    title: "Smart Scheduling",
    description: "Simplify appointment setting with an intelligent calendar that integrates with your existing tools."
  },
  {
    icon: <Globe className="h-6 w-6 text-revcrm-blue" />,
    title: "Landing Pages",
    description: "Create high-converting landing pages with our intuitive drag-and-drop builder, no coding required."
  },
  {
    icon: <Zap className="h-6 w-6 text-revcrm-blue" />,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and create sophisticated workflows to nurture leads and close deals faster."
  },
  {
    icon: <LineChart className="h-6 w-6 text-revcrm-blue" />,
    title: "Real-time Analytics",
    description: "Make data-driven decisions with comprehensive dashboards and reports that update in real-time."
  },
  {
    icon: <Shield className="h-6 w-6 text-revcrm-blue" />,
    title: "Advanced Security",
    description: "Protect your data with enterprise-grade security features including role-based access control and encryption."
  },
  {
    icon: <Users className="h-6 w-6 text-revcrm-blue" />,
    title: "Team Collaboration",
    description: "Enhance team productivity with shared pipelines, tasks, and communication tools designed for collaboration."
  },
  {
    icon: <BarChart className="h-6 w-6 text-revcrm-blue" />,
    title: "Revenue Analytics",
    description: "Track sales performance, conversion rates, and revenue metrics to optimize your sales pipeline."
  }
];

const Features = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-revcrm-black">
            All the tools you need to <span className="text-revcrm-blue">grow</span> your business
          </h2>
          <p className="text-lg text-revcrm-gray-dark">
            RevCRM brings together all the essential tools for customer management, marketing automation, and sales in one intuitive platform, allowing you to manage your entire revenue cycle efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-revcrm-gray-medium hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 p-2 rounded-lg bg-revcrm-blue/10 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-revcrm-black">{feature.title}</h3>
              <p className="text-revcrm-gray-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
