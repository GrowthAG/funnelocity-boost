
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, HelpCircle, Plus, Check, ArrowDown, Shield, CreditCard } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComparisonTable from '@/components/shared/ComparisonTable';
import { replacementToolsData, totalSavingData } from '@/utils/dashboardData';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [billingAnnual, setBillingAnnual] = useState(true);

  const plans = [
    {
      name: 'PRO',
      price: billingAnnual ? 497 * 10 : 497,
      period: billingAnnual ? '/ano' : '/mês',
      description: 'Para pequenas empresas e empreendedores',
      features: [
        'Até 3 usuários (+ R$69 por usuário adicional)',
        'Até 20.000 contatos',
        'Agendamentos e Calendários',
        'Inbox unificado com WhatsApp, Instagram e e-mail',
        'Construção de Funis/Landing Pages ilimitadas',
        'Automações de e-mail',
        'CRM de vendas',
        'Reputação',
        'Acesso à RevHackers Academy'
      ],
      additionalCosts: [
        '$0.0105 Fluxos de trabalho Premium',
        '$0.002625 Verificação de e-mail',
        '$0.0945 Conteúdo de IA',
        '$0.0315 Fluxos de trabalho com IA',
        '$0.021 Por mensagem para IA',
        '$0.0777 Conversa no WhatsApp',
        '$0.0004254 Por e-mail disparado'
      ],
      cta: 'CONTRATAR PLANO',
      checkoutLink: billingAnnual 
        ? 'https://checkout.growthfunnels.com.br/pro-anual' 
        : 'https://checkout.growthfunnels.com.br/pro-mensal',
      popular: false
    },
    {
      name: 'PLUS',
      price: billingAnnual ? 697 * 10 : 697,
      period: billingAnnual ? '/ano' : '/mês',
      description: 'Para empresas em crescimento',
      features: [
        'Todos os Recursos Pro +',
        'Até 50.000 contatos',
        'Workflows e Automações',
        'Webhooks e APIs',
        'Gestor de Social Media Completo',
        'Chat Widgets e Bots de IA',
        'Ferramenta de Cursos com Certificados (adeus, Hotmart!)',
        'Pagamentos: crie produtos, faturas, assinaturas, conecte com Stripe e +',
        'Gestão de afiliados e campanhas',
        'Ferramenta de Criação de Comunidades'
      ],
      additionalCosts: [
        '$0.0105 Fluxos de trabalho Premium',
        '$0.002625 Verificação de e-mail',
        '$0.0945 Conteúdo de IA',
        '$0.0315 Fluxos de trabalho com IA',
        '$0.021 Por mensagem para IA',
        '$0.0777 Conversa no WhatsApp',
        '$0.0004254 Por e-mail disparado'
      ],
      cta: 'CONTRATAR PLANO',
      checkoutLink: billingAnnual 
        ? 'https://checkout.growthfunnels.com.br/plus-anual' 
        : 'https://checkout.growthfunnels.com.br/plus-mensal',
      popular: true
    },
    {
      name: 'ENTERPRISE',
      price: null,
      period: '',
      description: 'Para equipes e empresas escaláveis',
      features: [
        'Todos os recursos Plus +',
        'Usuários ilimitados',
        'Contatos ilimitados',
        'Whitelabel',
        'Realizamos todo o seu setup',
        'Implementação por especialistas',
        'Total controle e flexibilidade',
        'Suporte dedicado'
      ],
      additionalCosts: [],
      cta: 'FALE CONOSCO',
      checkoutLink: 'https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd',
      popular: false
    }
  ];

  return <></>; // O restante do código segue o mesmo
};

export default Pricing;
