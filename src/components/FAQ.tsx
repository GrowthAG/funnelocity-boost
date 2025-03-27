
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o Growth Funnels?",
    answer: "Growth Funnels é uma plataforma completa de automação de marketing e CRM que unifica todas as ferramentas necessárias para capturar leads, nutrir relacionamentos, fechar vendas e fidelizar clientes. Tudo em um único lugar com uma interface intuitiva."
  },
  {
    question: "Como o Growth Funnels se compara ao GoHighLevel?",
    answer: "O Growth Funnels oferece todas as funcionalidades do GoHighLevel, mas com uma interface mais intuitiva, suporte nativo em português, preços em reais sem variação cambial, e funcionalidades específicas para o mercado brasileiro, como integração com WhatsApp e PIX."
  },
  {
    question: "Preciso ter conhecimentos técnicos para usar a plataforma?",
    answer: "Não! O Growth Funnels foi desenvolvido para ser extremamente amigável. Mesmo sem conhecimentos técnicos, você conseguirá criar automações, landing pages, formulários e gerenciar seu CRM com facilidade graças à nossa interface drag-and-drop e templates pré-construídos."
  },
  {
    question: "Posso migrar meus dados de outras plataformas?",
    answer: "Sim, oferecemos migração gratuita para todos os planos. Nossa equipe de suporte ajudará você a transferir seus contatos, automações, páginas e outras configurações das plataformas mais populares, como GoHighLevel, ActiveCampaign, ClickFunnels, entre outras."
  },
  {
    question: "Existe um período de teste gratuito?",
    answer: "Sim, oferecemos um trial gratuito de 14 dias com acesso a todas as funcionalidades. Você não precisa fornecer cartão de crédito para começar o período de testes."
  },
  {
    question: "Quais são as limitações dos diferentes planos?",
    answer: "Todos os planos incluem acesso à maioria das funcionalidades, diferenciando-se principalmente no número de contatos, usuários, subcontas (para agências) e limites de envio de e-mails e mensagens de WhatsApp. Consulte nossa página de preços para detalhes específicos de cada plano."
  }
];

const FAQ = () => {
  return (
    <section className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-white/80">
            Tire suas dúvidas sobre o Growth Funnels
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-white text-left font-medium py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
