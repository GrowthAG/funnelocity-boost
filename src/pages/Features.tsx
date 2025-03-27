
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, XCircle } from 'lucide-react';

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adManagerFeatures = [
    { name: 'Google Ads Report', extraCost: false, description: 'Painel com desempenho de campanhas Google Ads.' },
    { name: 'Meta Ads Report', extraCost: false, description: 'Painel com desempenho de campanhas Facebook/Instagram.' },
    { name: 'Attribution Report', extraCost: false, description: 'Conversões por canal de origem.' },
    { name: 'Appointment Report', extraCost: false, description: 'Conversões de agendamentos por origem.' },
    { name: 'Call Report', extraCost: false, description: 'Conversões por chamadas telefônicas.' },
  ];

  const marketingFeatures = [
    { name: 'Disparo de E-mails', extraCost: true, description: 'Envio de campanhas e automações por e-mail.' },
    { name: 'Verificação de E-mails', extraCost: true, description: 'Validação de e-mails para evitar hard bounce.' },
    { name: 'Construtor de E-mails', extraCost: false, description: 'Editor intuitivo drag & drop.' },
  ];

  const workflowFeatures = [
    { name: 'Workflows', extraCost: true, description: 'Criação de automações complexas e visuais.' },
    { name: 'Triggers', extraCost: true, description: 'Gatilhos automatizados para iniciar sequências.' },
  ];

  const crmFeatures = [
    { name: 'CRM completo', extraCost: false, description: 'Gerenciamento de contatos, oportunidades e pipelines.' },
    { name: 'Funnels', extraCost: false, description: 'Criação de funis de vendas visuais.' },
    { name: 'Social Planner', extraCost: false, description: 'Agendamento de postagens em redes sociais.' },
    { name: 'Membership', extraCost: true, description: 'Área de membros com acesso restrito.' },
    { name: 'Communities', extraCost: false, description: 'Criação de comunidades para engajar leads.' },
  ];

  const FeatureTable = ({ features, title }: { features: any[], title: string }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="text-left p-4 bg-white/5 text-white rounded-tl-lg">Feature</th>
              <th className="text-center p-4 bg-white/5 text-white">Custo Extra</th>
              <th className="text-left p-4 bg-white/5 text-white rounded-tr-lg">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="feature-card hover:bg-black/60">
                <td className="p-4 text-white font-medium border-t border-growth-green/10">{feature.name}</td>
                <td className="p-4 text-center border-t border-growth-green/10">
                  {feature.extraCost ? 
                    <XCircle className="h-5 w-5 text-destructive mx-auto" /> : 
                    <CheckCircle className="h-5 w-5 text-growth-green mx-auto" />
                  }
                </td>
                <td className="p-4 text-white/80 border-t border-growth-green/10">{feature.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
          
          <FeatureTable features={adManagerFeatures} title="🔍 Ad Manager & Reporting" />
          <FeatureTable features={marketingFeatures} title="📧 Marketing" />
          <FeatureTable features={workflowFeatures} title="⚙️ Workflows & Automação" />
          <FeatureTable features={crmFeatures} title="👥 CRM & Outras Ferramentas" />
          
          <div className="text-center mt-16 py-10 glass-panel">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Pronto para começar a automatizar sua operação?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta às suas necessidades e comece a transformar sua estratégia de marketing e vendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary" size="lg">
                Ver Planos e Preços
              </Button>
              <Button className="btn-outline" size="lg">
                Agendar Demo
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
