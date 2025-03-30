import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { 
  CheckCircle, 
  XCircle, 
  FormInput, 
  Tag, 
  Filter, 
  Mail, 
  Calendar, 
  MessageCircle, 
  Database, 
  Bell, 
  Users,
  BarChart2, 
  Globe,
  Zap,
  PlayCircle,
  Settings,
  Briefcase
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';

const Templates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();

  const workflows = [
    {
      title: "Nutrição de Leads",
      conversion: "32%",
      description: "Sequência automatizada para converter visitantes em clientes",
      triggers: ["Formulário Preenchido", "E-book Baixado", "Webinar Registrado"],
      actions: ["Enviar E-mail", "Adicionar Tag CRM", "Notificar Vendedor"]
    },
    {
      title: "Carrinho Abandonado",
      conversion: "24%",
      description: "Recupere vendas perdidas com lembretes automáticos",
      triggers: ["Carrinho Não Finalizado", "Checkout Iniciado", "Produto Adicionado"],
      actions: ["Enviar WhatsApp", "Oferecer Desconto", "Reengajar no Instagram"]
    },
    {
      title: "Onboarding de Clientes",
      conversion: "89%",
      description: "Apresente sua empresa e produto para novos clientes",
      triggers: ["Primeira Compra", "Assinatura Iniciada", "Cadastro Completo"],
      actions: ["Enviar Boas-vindas", "Agendar Reunião", "Enviar Material de Treinamento"]
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main className="pt-20 md:pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Templates Prontos</h1>
            <p className="text-lg md:text-xl text-white/80">Escolha um fluxo automatizado para acelerar seus resultados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {workflows.map((flow, i) => (
              <div key={i} className="bg-black/40 rounded-xl p-6 border border-[#d0ff00]/20 hover:border-[#d0ff00]/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#d0ff00]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#d0ff00]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{flow.title}</h3>
                    <p className="text-[#d0ff00] text-sm font-medium">Conversão: {flow.conversion}</p>
                  </div>
                </div>
                <p className="text-white/80 mb-4 text-sm">{flow.description}</p>
                <div className="mb-2">
                  <p className="text-white/60 text-xs mb-1">Gatilhos:</p>
                  <div className="flex flex-wrap gap-2">
                    {flow.triggers.map((trigger, j) => (
                      <span key={j} className="bg-white/5 text-white/80 text-xs px-3 py-1 rounded-full border border-white/10">{trigger}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-white/60 text-xs mb-1">Ações:</p>
                  <div className="flex flex-wrap gap-2">
                    {flow.actions.map((action, k) => (
                      <span key={k} className="bg-[#d0ff00]/10 text-[#d0ff00] text-xs px-3 py-1 rounded-full border border-[#d0ff00]/20">{action}</span>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-[#d0ff00] text-black hover:bg-[#c6f300] text-sm font-semibold" onClick={() => router.push('/pricing')}>
                  Usar Template
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
