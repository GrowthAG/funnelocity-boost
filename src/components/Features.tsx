import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutGrid, 
  Activity, 
  MessageSquare,
  Calendar, 
  FileText, 
  Link2, 
  Database, 
  MessagesSquare,
  Mail,
  BarChart3,
  MessageCircle,
  Filter,
  CheckCircle,
  XCircle,
  PieChart,
  BarChart2,
  Users,
  LineChart,
  Workflow,
  Bot,
  Instagram,
  Linkedin,
  Check,
  TrendingUp,
  Users as UsersIcon,
  RefreshCw,
  Zap,
  ArrowUpRight,
  Clock,
  Tag,
  FormInput,
  ShoppingCart,
  FileCheck,
  BadgeCheck,
  Bell,
  Settings,
  BarChart4,
  UserCheck,
  ArrowDown,
  DollarSign
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Features = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const features = [
    {
      icon: <Database className="h-6 w-6 text-[#d0ff00]" />,
      title: "CRM & Pipeline de Vendas",
      description: "Acompanhe leads, negociações e oportunidades em um único lugar.",
      category: "crm"
    },
    // ... (restante dos features permanece igual)
  ];

  const categories = [
    // ... (categorias permanecem iguais)
  ];

  const filteredFeatures = activeTab === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeTab);

  const replacementTools = [
    // ... (replacementTools permanecem iguais)
  ];

  const totalSaving = "R$ 10.122,40";

  const mockRevenueData = [
    // ... (mockRevenueData permanece igual)
  ];

  const automationExamples = [
    {
      id: 'lead-nurturing',
      title: 'Nutrição de Leads',
      description: 'Sequência automatizada para converter visitantes em clientes',
      triggers: ['Formulário Preenchido', 'E-book Baixado', 'Webinar Registrado'],
      actions: ['Enviar E-mail', 'Adicionar Tag CRM', 'Notificar Vendedor'],
      conversion: '32%',
      color: '#d0ff00'
    },
    {
      id: 'abandoned-cart',
      title: 'Carrinho Abandonado',
      description: 'Recupere vendas perdidas com lembretes automáticos',
      triggers: ['Carrinho Não Finalizado', 'Checkout Iniciado', 'Produto Adicionado'],
      actions: ['Enviar WhatsApp', 'Oferecer Desconto', 'Reengajar no Instagram'],
      conversion: '24%',
      color: '#d0ff00'
    },
    {
      id: 'client-onboarding',
      title: 'Onboarding de Clientes',
      description: 'Apresente sua empresa e produto para novos clientes',
      triggers: ['Primeira Compra', 'Assinatura Iniciada', 'Cadastro Completo'],
      actions: ['Enviar Boas-vindas', 'Agendar Reunião', 'Enviar Material de Treinamento'],
      conversion: '89%',
      color: '#d0ff00'
    }
  ];

  const handleUseTemplate = (templateId: string) => {
    navigate('/pricing', { 
      state: { 
        templateType: templateId 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Restante do código permanece igual até a seção de Templates de Automação */}
        
        <div className="mb-16 md:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
              Templates de Automação Prontos
            </h2>
            <p className="text-white/70 text-base">
              Comece em minutos com nossos modelos de automação testados e otimizados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automationExamples.map((example) => (
              <div 
                key={example.id}
                className="bg-black border border-[#d0ff00]/20 rounded-xl p-5 transition-all hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d0ff00]/5 hover:border-[#d0ff00]/40 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="h-10 w-10 rounded-lg flex items-center justify-center border bg-[#d0ff00]/10 border-[#d0ff00]/30"
                  >
                    {example.id === 'lead-nurturing' && <FormInput className="h-5 w-5 text-[#d0ff00]" />}
                    {example.id === 'abandoned-cart' && <ShoppingCart className="h-5 w-5 text-[#d0ff00]" />}
                    {example.id === 'client-onboarding' && <BadgeCheck className="h-5 w-5 text-[#d0ff00]" />}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{example.title}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-[#d0ff00] text-xs font-medium">Conversão: {example.conversion}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm mb-4">{example.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white/80 text-xs font-medium mb-2">Gatilhos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {example.triggers.map((trigger, idx) => (
                      <div key={idx} className="bg-black/70 border border-white/10 rounded-full py-1 px-2.5 text-white/70 text-xs">
                        {trigger}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white/80 text-xs font-medium mb-2">Ações:</h4>
                  <div className="flex flex-wrap gap-2">
                    {example.actions.map((action, idx) => (
                      <div 
                        key={idx} 
                        className="border rounded-full py-1 px-2.5 text-xs bg-[#d0ff00]/5 border-[#d0ff00]/30 text-[#d0ff00]"
                      >
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-6">
                  <button 
                    onClick={() => handleUseTemplate(example.id)}
                    aria-label={`Usar Template ${example.title}`}
                    className="block w-full py-3 px-6 rounded-md text-base font-semibold bg-[#d0ff00] text-black hover:bg-[#b3e600] transition-all duration-300 text-center cursor-pointer shadow-sm hover:shadow-md"
                  >
                    Usar Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restante do código permanece igual */}
        
        <div className="text-center mt-16 md:mt-24 py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-white leading-tight">
            Pronto para começar a automatizar sua operação?
          </h3>
          <p className="text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Escolha o plano que melhor se adapta às suas necessidades e comece a transformar sua estratégia de marketing e vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link to="/pricing">
              <Button className="bg-[#d0ff00] hover:bg-[#b3e600] text-black px-6 md:px-10 py-6 md:py-7 text-base md:text-lg shadow-lg shadow-[#d0ff00]/20 hover:shadow-xl hover:shadow-[#d0ff00]/30 transition-all duration-300" size="lg">
                Ver Planos e Preços
              </Button>
            </Link>
            <Link to="/demo">
              <Button className="border border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 px-6 md:px-10 py-6 md:py-7 text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300" size="lg" variant="outline">
                Agendar Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;