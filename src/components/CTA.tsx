
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-revcrm-blue">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to transform your business?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
          Join thousands of companies using RevCRM to streamline their sales process, automate marketing, and increase revenue.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/trial">
            <Button size="lg" className="bg-white text-revcrm-blue hover:bg-revcrm-gray-light w-full sm:w-auto">
              Try RevCRM Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/demo">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-revcrm-blue-dark w-full sm:w-auto">
              Request Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
