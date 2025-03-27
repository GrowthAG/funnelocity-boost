
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const metrics = [
  {
    value: "127%",
    label: "Average increase in conversion rates",
    description: "Our customers experience significant improvements in their conversion rates."
  },
  {
    value: "68%",
    label: "Reduction in sales cycle length",
    description: "Reduce your sales cycle with intelligent automations and efficient tracking."
  },
  {
    value: "15h+",
    label: "Weekly time saved on manual tasks",
    description: "Recover valuable hours by automating repetitive marketing and sales tasks."
  },
  {
    value: "2.5x",
    label: "Increase in customer retention",
    description: "Improve relationships and increase customer loyalty with better engagement."
  }
];

const Metrics = () => {
  return (
    <section className="bg-revcrm-gray-light py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-revcrm-black">
            Results that <span className="text-revcrm-blue">transform businesses</span>
          </h2>
          <p className="text-lg text-revcrm-gray-dark">
            RevCRM doesn't just simplify your processes, it drives your growth with measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-revcrm-gray-medium hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-revcrm-blue">{metric.value}</span>
                <ArrowUpRight className="ml-2 h-5 w-5 text-revcrm-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-revcrm-black leading-tight">{metric.label}</h3>
              <p className="text-revcrm-gray-dark text-sm mt-auto">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
