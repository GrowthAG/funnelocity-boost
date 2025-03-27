// Sample data for the charts
export const conversionData = [
  { name: 'Jan', conversions: 65, mrr: 12400 },
  { name: 'Fev', conversions: 78, mrr: 15200 },
  { name: 'Mar', conversions: 82, mrr: 16800 },
  { name: 'Abr', conversions: 95, mrr: 19000 },
  { name: 'Mai', conversions: 109, mrr: 21800 },
  { name: 'Jun', conversions: 127, mrr: 25400 },
  { name: 'Jul', conversions: 142, mrr: 28400 },
];

export const automationData = [
  { name: 'E-mail', value: 2450, fillColor: '#d0ff00' },
  { name: 'WhatsApp', value: 1850, fillColor: '#4FCE5D' },
  { name: 'SMS', value: 950, fillColor: '#FF6B6B' },
  { name: 'Push', value: 650, fillColor: '#5E72E4' },
];

export const channelData = [
  { name: 'Direto', value: 35 },
  { name: 'Google Ads', value: 25 },
  { name: 'Facebook', value: 20 },
  { name: 'Instagram', value: 15 },
  { name: 'Outros', value: 5 },
];

export const COLORS = ['#d0ff00', '#0088FE', '#FF6B6B', '#4FCE5D', '#FFBB28'];

export const automationMetrics = [
  {
    title: "E-mails Enviados",
    value: "6.842",
    change: "+12.5%",
    positive: true,
    icon: "Activity",
  },
  {
    title: "WhatsApp Enviados",
    value: "2.485",
    change: "+24.8%",
    positive: true,
    icon: "Activity",
  },
  {
    title: "Tarefas Automáticas",
    value: "853",
    change: "+18.2%",
    positive: true,
    icon: "Workflow",
  },
  {
    title: "Conexões Ativas",
    value: "12",
    change: "+4",
    positive: true,
    icon: "Link2",
  },
];

export const automationPerformanceData = [
  { date: '01/06', mensagens: 400, aberturas: 240, clicks: 100 },
  { date: '08/06', mensagens: 350, aberturas: 198, clicks: 87 },
  { date: '15/06', mensagens: 420, aberturas: 260, clicks: 112 },
  { date: '22/06', mensagens: 380, aberturas: 230, clicks: 89 },
  { date: '29/06', mensagens: 450, aberturas: 278, clicks: 134 },
  { date: '06/07', mensagens: 470, aberturas: 290, clicks: 145 },
];

export const funnelData = [
  { name: 'Visitantes', total: 9840 },
  { name: 'Leads', total: 3250 },
  { name: 'Oportunidades', total: 1280 },
  { name: 'Clientes', total: 520 },
];

export const connectionTrafficData = [
  { name: 'Google Ads', entrada: 450, saida: 210 },
  { name: 'Meta Ads', entrada: 320, saida: 180 },
  { name: 'Zapier', entrada: 280, saida: 290 },
  { name: 'Webhook', entrada: 190, saida: 110 },
  { name: 'API', entrada: 320, saida: 340 },
];

export const ticketData = [
  { date: '01/06', valor: 1580 },
  { date: '08/06', valor: 1650 },
  { date: '15/06', valor: 1720 },
  { date: '22/06', valor: 1790 },
  { date: '29/06', valor: 1840 },
];

export const replacementToolsData = [
  { 
    name: "CRM & Pipeline de Vendas", 
    value: "R$ 502,71", 
    tools: ["Pipedrive", "Close", "Salesflare", "ActiveCampaign"],
    logos: [
      "/lovable-uploads/ec2d3fe2-1f5f-4a70-9f28-8af8a18ffe4d.png", 
      "/lovable-uploads/23a9d576-f113-4771-b2d3-ff5962bb0ae4.png",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    name: "Funis de Vendas", 
    value: "R$ 1.507,22", 
    tools: ["Salesforce", "Pipefy", "HubSpot"],
    logos: [
      "/lovable-uploads/fa9ce812-73e9-4b7a-8a2d-8d4bec1b9366.png",
      "/lovable-uploads/af51da29-988c-4767-aa02-b724b80fd078.png",
      "/placeholder.svg"
    ]
  },
  {
    name: "Planejamento Redes Sociais", 
    value: "R$ 24,90", 
    tools: ["mLabs", "Etus"],
    logos: [
      "/lovable-uploads/873518a3-4940-430d-985b-470b533d4b7a.png",
      "/lovable-uploads/97fa57d5-6ac7-4ddf-891d-cc9c50d8249e.png"
    ]
  },
  {
    name: "Construtor de Sites", 
    value: "R$ 248,75", 
    tools: ["WordPress", "Wix", "Webflow"],
    logos: [
      "/lovable-uploads/1afce23a-a9c6-4720-a725-f3a850ce22be.png",
      "/lovable-uploads/19e748f8-e8c3-4367-a3ed-5d16da13f8c1.png",
      "/lovable-uploads/f08c6356-9c67-4e4d-8373-5cfd85f5e2f4.png"
    ]
  },
  {
    name: "Formulários e Pesquisas", 
    value: "R$ 457,03", 
    tools: ["Typeform", "Google Forms", "Respond.io"],
    logos: [
      "/lovable-uploads/b1082615-5b0d-4bd3-9b75-ee2724be2d23.png",
      "/lovable-uploads/84ede28a-0919-4309-ba2c-876a53719806.png",
      "/lovable-uploads/88654284-fd43-4ec7-b610-7c068119ff81.png"
    ]
  },
  {
    name: "E-mail Marketing", 
    value: "R$ 406,25", 
    tools: ["Brevo", "Mailchimp", "ActiveCampaign"],
    logos: [
      "/lovable-uploads/3ae50462-d15d-4181-8b6b-e438e28d2c65.png",
      "/lovable-uploads/25d0a1ba-c7ab-4632-a6d7-ba4487a0a28c.png",
      "/placeholder.svg"
    ]
  },
  {
    name: "Calendário e Agendamentos", 
    value: "R$ 111,72", 
    tools: ["Calendly", "Google Calendar"],
    logos: [
      "/lovable-uploads/1ececfa5-5b1c-40d9-97cc-7d5d576880b0.png",
      "/lovable-uploads/efea1fc0-61ab-4104-bbee-bdb236109631.png"
    ]
  },
  {
    name: "Automações de Marketing", 
    value: "R$ 858,20", 
    tools: ["ActiveCampaign", "Salesforce Marketing Cloud"],
    logos: [
      "/placeholder.svg",
      "/lovable-uploads/fa9ce812-73e9-4b7a-8a2d-8d4bec1b9366.png"
    ]
  },
  {
    name: "Cursos/Produtos", 
    value: "R$ 492,54", 
    tools: ["Hotmart", "Eduzz", "Kiwify", "HeroSpark"],
    logos: [
      "/lovable-uploads/6fddeed4-ee93-4d35-bba1-f53510ad2e87.png",
      "/lovable-uploads/12a37e20-a571-4148-9904-27a434227d8f.png",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    name: "Chamadas e Monitoramentos", 
    value: "R$ 482,47", 
    tools: ["GoTo Connect", "Twilio"],
    logos: [
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  },
  {
    name: "Gestão de Reputação", 
    value: "R$ 2.448,00", 
    tools: ["Trustpilot"],
    logos: [
      "/placeholder.svg"
    ]
  },
  {
    name: "Analytics", 
    value: "R$ 126,96", 
    tools: ["Mixpanel", "Amplitude"],
    logos: [
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  }
];

export const totalSavingData = "R$ 10.122,40";
