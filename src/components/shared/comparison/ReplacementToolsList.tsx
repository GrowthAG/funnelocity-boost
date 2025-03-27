
import React from 'react';
import { ToolInfo } from '../ComparisonTable';

interface ReplacementToolsListProps {
  replacementTools: ToolInfo[];
  totalSaving: string;
}

// Map of tool names to their logo URLs
const toolLogoMap: Record<string, string> = {
  "Pipedrive": "/lovable-uploads/8d450804-20c6-46f6-9f0c-836bc0fa3ec2.png",
  "ActiveCampaign": "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png",
  "Brevo": "/lovable-uploads/a370bacb-4932-489a-80b1-47f3030227c3.png",
  "mLabs": "/lovable-uploads/8ba59a61-7e7a-49e9-adf2-e08574abd59b.png",
  "Etus": "/lovable-uploads/2c2112ad-609f-45d0-a9c7-bf4fa9821097.png",
  "Webflow": "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png",
  "Typeform": "/lovable-uploads/60db33c2-03f0-4a6c-8895-126a032cd6f3.png",
  "Salesforce": "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
  "Hotmart": "/lovable-uploads/fafd30ca-de73-40a1-accf-bb56a14b939d.png",
  "Eduzz": "/lovable-uploads/f157b2b4-81b3-47df-9349-f2b5e65e6fac.png",
  "Kiwify": "/lovable-uploads/abaa61f2-0495-45f4-8d2f-7de74d200d17.png",
  "HeroSpark": "/lovable-uploads/f9fa06e2-b163-447f-8bdd-318737e3fb97.png",
  "GoTo": "/lovable-uploads/cb262656-76f3-4604-bea4-c8d1a91f4cd8.png",
  "Twilio": "/lovable-uploads/1d6c3d72-1270-43d4-b0bb-1300829056ef.png",
  "Google Analytics": "/lovable-uploads/7dffaafa-f42a-4ab3-8cf9-c6998479f2d5.png", 
  "Amplitude": "/lovable-uploads/4f7a5365-d10b-430c-a678-34f30b6019f3.png",
  "Vimeo": "/lovable-uploads/f92386a0-e945-4e18-aef0-2d3878722d3b.png",
  "WordPress": "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png",
  "Wix": "/lovable-uploads/8dfd3a2f-5b18-4462-b6b2-33a8acefd6f7.png",
  "Google Forms": "/lovable-uploads/7dffaafa-f42a-4ab3-8cf9-c6998479f2d5.png",
  "Calendly": "/lovable-uploads/cb262656-76f3-4604-bea4-c8d1a91f4cd8.png",
  "Google Calendar": "/lovable-uploads/7dffaafa-f42a-4ab3-8cf9-c6998479f2d5.png",
  "Trustpilot": "/lovable-uploads/2c2112ad-609f-45d0-a9c7-bf4fa9821097.png",
  "Mixpanel": "/lovable-uploads/4f7a5365-d10b-430c-a678-34f30b6019f3.png",
  "Close": "/lovable-uploads/8d450804-20c6-46f6-9f0c-836bc0fa3ec2.png",
  "Salesflare": "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
  "Pipefy": "/lovable-uploads/47794046-44aa-411e-9cb6-c1a081dfedad.png",
  "HubSpot": "/lovable-uploads/a8f3967f-41d1-4cb2-a034-907784d5d507.png",
  "Mailchimp": "/lovable-uploads/a370bacb-4932-489a-80b1-47f3030227c3.png",
  "Respond.io": "/lovable-uploads/1d6c3d72-1270-43d4-b0bb-1300829056ef.png"
};

// Helper function to get the logo URL by tool name
const getToolLogoUrl = (toolName: string): string | undefined => {
  // Extract the main tool name (ignoring anything after "&" or similar)
  const mainToolName = toolName.split(/[\s&]+/)[0];
  return toolLogoMap[mainToolName];
};

const ReplacementToolsList = ({ replacementTools, totalSaving }: ReplacementToolsListProps) => {
  return (
    <div className="bg-growth-black border-r border-growth-green/30">
      <div className="p-5 border-b border-growth-green/30">
        <h3 className="text-lg font-bold text-white">O que você substituirá:</h3>
      </div>
      <div className="px-5">
        <ul className="divide-y divide-white/10">
          {replacementTools.map((tool, index) => (
            <li key={index} className="flex justify-between py-3">
              <div className="flex items-center gap-2">
                {getToolLogoUrl(tool.name) && (
                  <img 
                    src={getToolLogoUrl(tool.name)} 
                    alt={`${tool.name} logo`}
                    className="h-5 w-auto max-w-[20px] object-contain"
                  />
                )}
                <span className="text-white/80">{tool.name}</span>
              </div>
              <span className="text-white font-medium">{tool.value}</span>
            </li>
          ))}
          
          {totalSaving && (
            <li className="flex justify-between py-3">
              <span className="text-white font-bold">Total:</span>
              <span className="text-red-500 font-bold">{totalSaving}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReplacementToolsList;
