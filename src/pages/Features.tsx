import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, XCircle, FormInput, Tag, Filter, Mail, Calendar } from 'lucide-react';

// Componente otimizado para incorporar vídeos do YouTube
const YouTubeEmbed = ({ videoId, className }) => {
  if (!videoId) return null;
  
  // Parâmetros adicionais para remover marca d'água e melhorar a aparência
  const params = 'rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=1';
  
  return (
    <div className={`w-full h-full relative overflow-hidden rounded-xl ${className}`} style={{ paddingBottom: '56.25%' }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?${params}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ border: 'none' }}
      />
    </div>
  );
};

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('ad_manager');
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  // Mapeamento dos vídeos para cada recurso específico
  const videoMapping = {
    // Ad Manager & Reporting
    'Google Ads Report': 'Gl8bJpKaoK8', // Dashboard Entendendo os Indicadores
    'Meta Ads Report': '',
    
    // Marketing
    'Disparo de E-mails': 'p-5pUOmrNOk', // Introdução às Conversas
    'Disparo de SMS': '',
    
    // CRM & Outras Ferramentas
    'CRM completo': 'dGgUUjvbEGY', // Criando Oportunidades e Pipeline
    'Funnels': 'p_rqiFCySYM', // Visão Geral do Growth Funnels
    'Gerenciamento de Contatos': '5YEVNryH1gM', // Gerenciando Contatos
    'Gerenciamento de Calendários': 'kbknZyu3CGA', // Criando e Gerenciando Calendários
    'Gerenciamento de Equipe': 'Z8lNliX-MtI', // Adicionando e Gerenciando Equipe
    
    // Workflows & Automação
    'Automação de Nutrição de Leads': '5YEVNryH1gM', // Gerenciando Contatos
    'Regras Condicionais': '',
    'Workflow de Automação': 'kbknZyu3CGA' // Criando e Gerenciando Calendários
  };

  const categories = [
    {
      id: 'ad_manager',
      name: 'Ad Manager & Reporting',
      features: [
        {
          name: 'Google Ads Report',
          description: 'Gerencie suas campanhas de Google Ads e crie relatórios customizáveis.',
          icon: FormInput,
          benefits: ['Campanhas unificadas', 'Relatórios automatizados', 'Análise de performance', 'Integração direta']
        },
        {
          name: 'Meta Ads Report',
          description: 'Gerencie suas campanhas de Meta Ads e crie relatórios customizáveis.',
          icon: FormInput,
          benefits: ['Campanhas unificadas', 'Relatórios automatizados', 'Análise de performance', 'Integração direta']
        },
        {
          name: 'Dashboard Entendendo os Indicadores',
          description: 'Visualize e entenda todos os seus KPIs em um único lugar.',
          icon: Filter,
          benefits: ['Métricas unificadas', 'Painéis customizáveis', 'Alertas de performance', 'Compartilhamento fácil']
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing',
      features: [
        {
          name: 'Disparo de E-mails',
          description: 'Envie e-mails em massa para seus leads e clientes de forma automatizada.',
          icon: Mail,
          benefits: ['Templates personalizáveis', 'Segmentação avançada', 'Agendamento automático', 'Métricas de entrega']
        },
        {
          name: 'Disparo de SMS',
          description: 'Envie SMS em massa para seus leads e clientes de forma automatizada.',
          icon: Mail,
          benefits: ['Mensagens personalizáveis', 'Segmentação avançada', 'Agendamento automático', 'Métricas de entrega']
        },
        {
          name: 'Introdução às Conversas',
          description: 'Gerencie todas as conversas com seus leads e clientes em um único lugar.',
          icon: Mail,
          benefits: ['Centralização de mensagens', 'Histórico completo', 'Atribuição de responsáveis', 'Integração com CRM']
        }
      ]
    },
    {
      id: 'workflows',
      name: 'Workflows & Automação',
      features: [
        {
          name: 'Automação de Nutrição de Leads',
          description: 'Crie fluxos de automação para nutrir seus leads de forma eficiente.',
          icon: Filter,
          benefits: ['Fluxos personalizáveis', 'Gatilhos automáticos', 'Segmentação avançada', 'Métricas de conversão']
        },
        {
          name: 'Regras Condicionais',
          description: 'Crie regras condicionais para automatizar suas tarefas de marketing.',
          icon: Filter,
          benefits: ['Condições customizáveis', 'Ações automáticas', 'Integrações múltiplas', 'Lógica avançada']
        },
        {
          name: 'Gerenciamento de Contatos',
          description: 'Organize e gerencie todos os seus contatos em um único lugar.',
          icon: FormInput,
          benefits: ['Dados centralizados', 'Categorização avançada', 'Histórico completo', 'Integração com ferramentas']
        }
      ]
    },
    {
      id: 'crm',
      name: 'CRM & Outras Ferramentas',
      features: [
        {
          name: 'CRM completo',
          description: 'Gerencie todo o relacionamento com seus clientes em uma única plataforma.',
          icon: FormInput,
          benefits: ['Visão 360° do cliente', 'Pipeline de vendas', 'Automação de tarefas', 'Relatórios detalhados']
        },
        {
          name: 'Funnels',
          description: 'Crie e gerencie funis de vendas completos para seu negócio.',
          icon: Filter,
          benefits: ['Funis customizáveis', 'Métricas por etapa', 'Automação integrada', 'Otimização contínua']
        },
        {
          name: 'Gerenciamento de Calendários',
          description: 'Organize suas reuniões e compromissos de forma eficiente.',
          icon: Calendar,
          benefits: ['Agendamento automático', 'Sincronização multi-dispositivos', 'Lembretes inteligentes', 'Compartilhamento fácil']
        },
        {
          name: 'Gerenciamento de Equipe',
          description: 'Gerencie sua equipe e atribua tarefas de forma eficiente.',
          icon: FormInput,
          benefits: ['Atribuição de tarefas', 'Monitoramento de performance', 'Comunicação centralizada', 'Relatórios de atividade']
        }
      ]
    }
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedFeature(null);
    setShowVideo(false);
  };

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
    setShowVideo(false);
  };

  const selectedCategoryObj = categories.find(cat => cat.id === selectedCategory);
  const features = selectedCategoryObj ? selectedCategoryObj.features : [];
  const feature = selectedFeature || (features.length > 0 ? features[0] : null);

  // Lista de integrações disponíveis
  const availableIntegrations = [
    { name: "WhatsApp", available: true },
    { name: "E-mail", available: true },
    { name: "CRM", available: true },
    { name: "Calendário", available: true },
    { name: "Notificações", available: true },
    { name: "SMS", available: true },
    { name: "Chat ao vivo", available: false },
    { name: "Redes Sociais", available: false }
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossas Funcionalidades</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça todas as funcionalidades que a nossa plataforma oferece para ajudar você a crescer seu negócio.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Categorias</h2>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition duration-200 ${
                      selectedCategory === category.id
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Funcionalidades</h3>
                
                <div className="space-y-1.5">
                  {features.map((feat) => (
                    <button
                      key={feat.name}
                      onClick={() => handleFeatureSelect(feat)}
                      className={`w-full text-left py-2 px-3 rounded-lg transition duration-200 ${
                        feature && feature.name === feat.name
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {feat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            {feature && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video w-full relative">
                  {showVideo && videoMapping[feature.name] ? (
                    <YouTubeEmbed videoId={videoMapping[feature.name]} className="w-full h-full" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <img 
                        src={`/images/features/${selectedCategory}.png`} 
                        alt={feature.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{feature.name}</h2>
                      <p className="text-gray-600 mt-2">{feature.description}</p>
                    </div>
                    
                    <div className="flex-shrink-0 ml-4">
                      {feature.icon && <feature.icon className="h-8 w-8 text-blue-500" />}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Benefícios</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                      {feature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="ml-2 text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex">
                    {videoMapping[feature.name] ? (
                      <Button
                        onClick={() => setShowVideo(!showVideo)}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {showVideo ? "Ocultar Demo" : "Ver Demo"}
                      </Button>
                    ) : (
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        disabled
                      >
                        Ver Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {selectedCategory === 'workflows' && (
              <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Fluxo de Automação</h2>
                    <p className="text-gray-600 mt-1">
                      Crie fluxos de trabalho personalizados para automatizar suas tarefas de marketing e vendas.
                    </p>
                  </div>
                  
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white mt-4 md:mt-0"
                    onClick={() => setShowVideo(!showVideo)}
                  >
                    {showVideo ? "Ocultar Demo" : "Ver Demo"}
                  </Button>
                </div>
                
                <div className="aspect-video w-full rounded-xl overflow-hidden relative">
                  {showVideo ? (
                    <YouTubeEmbed videoId={videoMapping['Workflow de Automação']} className="w-full h-full" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <img 
                        src="/images/features/workflow.png" 
                        alt="Workflow de Automação"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Integrações Disponíveis</h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {availableIntegrations.map((integration) => (
                      <div 
                        key={integration.name}
                        className="border rounded-lg p-3 flex items-center"
                      >
                        {integration.available ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`ml-2 ${integration.available ? 'text-gray-700' : 'text-gray-400'}`}>
                          {integration.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;