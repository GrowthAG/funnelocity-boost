
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-light min-h-screen pt-24 pb-16 px-4 md:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8 animate-slide-up">
            <div>
              <span className="px-3 py-1 bg-revcrm-blue/10 border border-revcrm-blue/30 rounded-full text-revcrm-blue text-sm font-medium">
                🚀 Redesigning the CRM experience
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-revcrm-black">
              Transform Your Revenue <span className="text-revcrm-blue">Cycle</span> with <span className="text-revcrm-blue">RevCRM</span>
            </h1>
            <p className="text-xl text-revcrm-gray-dark">
              All-in-one customer relationship management and marketing automation platform designed to streamline your sales process and boost revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/trial">
                <Button size="lg" className="bg-revcrm-blue hover:bg-revcrm-blue-dark text-white w-full sm:w-auto">
                  Try RevCRM Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="border border-revcrm-gray-medium text-revcrm-black hover:bg-revcrm-gray-light w-full sm:w-auto">
                  Request Demo
                </Button>
              </Link>
            </div>
            <div className="pt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-revcrm-gray-light flex items-center justify-center text-revcrm-black text-sm">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-revcrm-gray-dark text-sm">
                Trusted by <span className="font-bold text-revcrm-blue">2,500+</span> businesses worldwide
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative animate-fade-in">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/84ede28a-0919-4309-ba2c-876a53719806.png" 
                  alt="RevCRM Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-48">
                <div className="text-center">
                  <p className="text-xs text-revcrm-gray-dark">Sales Conversion</p>
                  <p className="text-2xl font-bold text-revcrm-blue">+127%</p>
                  <div className="h-1 w-full bg-revcrm-gray-light rounded-full mt-2">
                    <div className="h-full w-3/4 bg-revcrm-blue rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
