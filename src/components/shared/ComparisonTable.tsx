
import React from 'react';
import NewComparisonTable from './comparison/NewComparisonTable';

export interface ToolInfo {
  name: string;
  value: string;
  tools?: string[];
}

interface ComparisonTableProps {
  replacementTools: any[];
  totalSaving?: string;
  className?: string;
  billingAnnual?: boolean;
  getCheckoutLink?: (plan: string) => string;
}

const ComparisonTable = ({
  replacementTools,
  totalSaving = "R$ 10.122,40",
  className = '',
  billingAnnual = false,
  getCheckoutLink = (plan: string) => {
    const planLinks = {
      'PRO': billingAnnual ? 'https://checkout.growthfunnels.com.br/pro-anual' : 'https://checkout.growthfunnels.com.br/pro-mensal',
      'PLUS': billingAnnual ? 'https://checkout.growthfunnels.com.br/plus-anual' : 'https://checkout.growthfunnels.com.br/plus-mensal',
      'ENTERPRISE': 'https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd'
    };
    return planLinks[plan] || 'https://checkout.growthfunnels.com.br/pro-mensal';
  }
}: ComparisonTableProps) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <NewComparisonTable 
        logoUrl="/lovable-uploads/e972de3f-e663-467b-a000-a691202e4b0e.png"
        replacementTools={replacementTools}
        totalSaving={totalSaving}
        billingAnnual={billingAnnual}
        getCheckoutLink={getCheckoutLink}
      />
    </div>
  );
};

export default ComparisonTable;
