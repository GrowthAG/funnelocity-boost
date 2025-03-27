
import React from 'react';
import { Check } from 'lucide-react';
import { 
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table";
import { replacementToolsData, totalSavingData } from '@/utils/dashboardData';

const NewComparisonTable = () => {
  return (
    <div className="bg-black border-t border-[#d0ff00]/30 pt-6">
      <div className="px-4 md:px-6">
        <div className="overflow-hidden rounded-lg border border-[#d0ff00]/30">
          {/* Header */}
          <div className="w-full bg-[#d0ff00] py-4 px-6">
            <div className="grid grid-cols-3 items-center">
              <div className="text-black font-bold text-lg">Ferramentas</div>
              <div className="text-black font-bold text-lg">Substitui</div>
              <div className="flex justify-between items-center">
                <div className="text-black font-bold text-lg">Valor</div>
                <img 
                  src="/lovable-uploads/af038fe0-e06c-4817-8aa0-3052e485ac5b.png" 
                  alt="GrowthFunnels Logo" 
                  className="h-10 w-auto" 
                />
              </div>
            </div>
          </div>
          
          {/* Table body */}
          <Table>
            <TableBody>
              {replacementToolsData.map((row, index) => (
                <TableRow key={index} className="border-b border-[#d0ff00]/10">
                  <TableCell className="py-4 font-medium text-white">
                    {row.name}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex flex-wrap gap-2 items-center">
                      {row.tools.map((tool, i) => {
                        const logoPath = getLogoPathForTool(tool);
                        return (
                          <div key={i} className="flex items-center justify-center bg-white/10 rounded-md p-1 h-8 w-auto">
                            <img 
                              src={logoPath} 
                              alt={`${tool} logo`}
                              className="h-6 w-auto max-w-[40px] object-contain"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="py-4 flex justify-between items-center">
                    <span className="font-medium text-white">{row.value}</span>
                    <Check className="text-green-500 h-5 w-5" />
                  </TableCell>
                </TableRow>
              ))}
              
              {/* Total row */}
              <TableRow className="border-t-2 border-[#d0ff00]/30 bg-black/40">
                <TableCell className="py-6 font-bold text-white text-lg">
                  Total
                </TableCell>
                <TableCell></TableCell>
                <TableCell className="py-6 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-bold text-red-500 text-lg line-through">R$ 10.122,40/mês</span>
                    <span className="font-bold text-[#d0ff00] text-lg">R$ 497/mês</span>
                  </div>
                  <Check className="text-green-500 h-6 w-6" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

// Helper function to get the logo path based on tool name
const getLogoPathForTool = (toolName: string): string => {
  const logoMap: Record<string, string> = {
    "Pipedrive": "/lovable-uploads/8d450804-20c6-46f6-9f0c-836bc0fa3ec2.png",
    "Close": "/lovable-uploads/8d450804-20c6-46f6-9f0c-836bc0fa3ec2.png",
    "Salesflare": "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
    "ActiveCampaign": "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png",
    "Salesforce": "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
    "Pipefy": "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
    "HubSpot": "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png",
    "mLabs": "/lovable-uploads/8ba59a61-7e7a-49e9-adf2-e08574abd59b.png",
    "Etus": "/lovable-uploads/2c2112ad-609f-45d0-a9c7-bf4fa9821097.png",
    "WordPress": "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png",
    "Wix": "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png",
    "Webflow": "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png",
    "Typeform": "/lovable-uploads/60db33c2-03f0-4a6c-8895-126a032cd6f3.png",
    "Google Forms": "/lovable-uploads/7dffaafa-f42a-4ab3-8cf9-c6998479f2d5.png",
    "Respond.io": "/lovable-uploads/1d6c3d72-1270-43d4-b0bb-1300829056ef.png",
    "Brevo": "/lovable-uploads/a370bacb-4932-489a-80b1-47f3030227c3.png",
    "Mailchimp": "/lovable-uploads/a370bacb-4932-489a-80b1-47f3030227c3.png",
    "Calendly": "/lovable-uploads/cb262656-76f3-4604-bea4-c8d1a91f4cd8.png",
    "Google Calendar": "/lovable-uploads/7dffaafa-f42a-4ab3-8cf9-c6998479f2d5.png",
    "Hotmart": "/lovable-uploads/fafd30ca-de73-40a1-accf-bb56a14b939d.png",
    "Eduzz": "/lovable-uploads/f157b2b4-81b3-47df-9349-f2b5e65e6fac.png",
    "Kiwify": "/lovable-uploads/abaa61f2-0495-45f4-8d2f-7de74d200d17.png",
    "HeroSpark": "/lovable-uploads/f9fa06e2-b163-447f-8bdd-318737e3fb97.png",
    "GoTo": "/lovable-uploads/cb262656-76f3-4604-bea4-c8d1a91f4cd8.png",
    "Twilio": "/lovable-uploads/1d6c3d72-1270-43d4-b0bb-1300829056ef.png",
    "Trustpilot": "/lovable-uploads/2c2112ad-609f-45d0-a9c7-bf4fa9821097.png",
    "Mixpanel": "/lovable-uploads/4f7a5365-d10b-430c-a678-34f30b6019f3.png",
    "Amplitude": "/lovable-uploads/4f7a5365-d10b-430c-a678-34f30b6019f3.png",
  };

  return logoMap[toolName] || "/placeholder.svg";
};

export default NewComparisonTable;
