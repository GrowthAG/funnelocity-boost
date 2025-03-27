
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, XCircle } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("adManager");

  const featureCategories = [
    { id: "adManager", label: "🔍 Ad Manager & Reporting" },
    { id: "marketing", label: "📧 Marketing" },
    { id: "workflow", label: "⚙️ Workflows & Automação" },
    { id: "crm", label: "👥 CRM & Outras Ferramentas" }
  ];

  const features = {
    adManager: [
      { name: 'Google Ads Report', extraCost: false, description: 'Painel com desempenho de campanhas Google Ads.' },
      { name: 'Meta Ads Report', extraCost: false, description: 'Painel com desempenho de campanhas Facebook/Instagram.' },
      { name: 'Attribution Report', extraCost: false, description: 'Conversões por canal de origem.' },
      { name: 'Appointment Report', extraCost: false, description: 'Conversões de agendamentos por origem.' },
      { name: 'Call Report', extraCost: false, description: 'Conversões por chamadas telefônicas.' }
    ],
    marketing: [
      { name: 'Disparo de E-mails', extraCost: true, description: 'Envio de campanhas e automações por e-mail.' },
      { name: 'Verificação de E-mails', extraCost: true, description: 'Validação de e-mails para evitar hard bounce.' },
      { name: 'Construtor de E-mails', extraCost: false, description: 'Editor intuitivo drag & drop.' }
    ],
    workflow: [
      { name: 'Workflows', extraCost: true, description: 'Criação de automações complexas e visuais.' },
      { name: 'Triggers', extraCost: true, description: 'Gatilhos automatizados para iniciar sequências.' }
    ],
    crm: [
      { name: 'CRM completo', extraCost: false, description: 'Gerenciamento de contatos, oportunidades e pipelines.' },
      { name: 'Funnels', extraCost: false, description: 'Criação de funis de vendas visuais.' },
      { name: 'Social Planner', extraCost: false, description: 'Agendamento de postagens em redes sociais.' },
      { name: 'Membership', extraCost: true, description: 'Área de membros com acesso restrito.' },
      { name: 'Communities', extraCost: false, description: 'Criação de comunidades para engajar leads.' }
    ]
  };

  const FeatureTable = ({ featureList }: { featureList: any[] }) => (
    <div className="overflow-x-auto w-full">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="text-left p-4 bg-white/5 text-white rounded-tl-lg border-b border-[#d0ff00]/10">Feature</th>
            <th className="text-center p-4 bg-white/5 text-white border-b border-[#d0ff00]/10 w-24 md:w-32">Custo Extra</th>
            <th className="text-left p-4 bg-white/5 text-white rounded-tr-lg border-b border-[#d0ff00]/10">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {featureList.map((feature, index) => (
            <tr key={index} className="hover:bg-black/60 transition-colors">
              <td className="p-4 text-white font-medium border-t border-[#d0ff00]/10">{feature.name}</td>
              <td className="p-4 text-center border-t border-[#d0ff00]/10">
                {feature.extraCost ? 
                  <XCircle className="h-5 w-5 text-destructive mx-auto" /> : 
                  <CheckCircle className="h-5 w-5 text-growth-green mx-auto" />
                }
              </td>
              <td className="p-4 text-white/80 border-t border-[#d0ff00]/10">{feature.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Explore tudo o que você pode fazer com o <span className="text-gradient">GrowthFunnels</span>
            </h1>
            <p className="text-xl text-white/80">
              Funcionalidades completas para automatizar sua operação de ponta a ponta.
            </p>
          </div>
          
          <Tabs defaultValue="adManager" value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-16">
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-[#d0ff00]/5 rounded-lg -z-10" />
              <div className="overflow-x-auto py-2 px-1">
                <TabsList className="bg-black border border-[#d0ff00]/20 p-1 rounded-lg inline-flex w-full min-w-max">
                  {featureCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className={`
                        px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-all 
                        data-[state=active]:bg-[#d0ff00] data-[state=active]:text-black data-[state=active]:shadow-md 
                        data-[state=inactive]:text-white/80 data-[state=inactive]:hover:bg-white/10 whitespace-nowrap
                        min-w-[100px] md:min-w-0 justify-center md:justify-start
                      `}
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
            
            {featureCategories.map((category) => (
              <TabsContent 
                key={category.id} 
                value={category.id}
                className="animate-fade-in"
              >
                <div className="mb-12">
                  <FeatureTable featureList={features[category.id as keyof typeof features]} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="text-center mt-16 py-10 glass-panel bg-black/40 border border-[#d0ff00]/20 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Pronto para começar a automatizar sua operação?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta às suas necessidades e comece a transformar sua estratégia de marketing e vendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#d0ff00] hover:bg-[#b3e600] text-black px-6 py-3 text-base font-semibold shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transition-all duration-300" 
                size="lg"
                asChild
              >
                <a href="/pricing">Ver Planos e Preços</a>
              </Button>
              <Button 
                className="border border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 px-6 py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300" 
                size="lg" 
                variant="outline"
                asChild
              >
                <a href="/demo">Agendar Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
