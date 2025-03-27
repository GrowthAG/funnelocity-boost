
import React from 'react';
import { Shield } from 'lucide-react';

const ComparisonTableHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Shield className="h-5 w-5 text-[#d0ff00]" />
        <h3 className="text-xl font-bold text-white">Quanto você economiza com GrowthFunnels?</h3>
      </div>
      <p className="text-white/70 mb-6">A plataforma substitui mais de 12 ferramentas diferentes</p>
    </div>
  );
};

export default ComparisonTableHeader;
