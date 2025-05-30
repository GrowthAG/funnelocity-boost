
// Replacement tools data with consistent format
export const replacementToolsData = [
  { 
    name: "CRM & Pipeline de Vendas", 
    value: "R$ 502,71", 
    tools: ["Pipedrive", "Close", "Salesflare", "ActiveCampaign"]
  },
  {
    name: "Funis de vendas", 
    value: "R$ 1.507,22", 
    tools: ["Salesforce", "Pipefy", "HubSpot"]
  },
  {
    name: "Planejamento de redes sociais", 
    value: "R$ 24,90", 
    tools: ["mLabs", "Etus"]
  },
  {
    name: "Construtor de sites", 
    value: "R$ 248,75", 
    tools: ["WordPress", "Wix", "Webflow"]
  },
  {
    name: "Formulários e Pesquisas", 
    value: "R$ 457,03", 
    tools: ["Typeform", "Google Forms", "Respond.io"]
  },
  {
    name: "E-mail marketing", 
    value: "R$ 406,25", 
    tools: ["Brevo", "Mailchimp", "ActiveCampaign"]
  },
  {
    name: "Calendário e Agendamentos", 
    value: "R$ 111,72", 
    tools: ["Calendly", "Google Calendar"]
  },
  {
    name: "Automações de marketing", 
    value: "R$ 858,20", 
    tools: ["ActiveCampaign", "Salesforce Marketing Cloud"]
  },
  {
    name: "Cursos/Produtos", 
    value: "R$ 492,54", 
    tools: ["Hotmart", "Eduzz", "Kiwify", "HeroSpark"]
  },
  {
    name: "Chamadas e monitoramentos", 
    value: "R$ 482,47", 
    tools: ["GoTo Connect", "Twilio"]
  },
  {
    name: "Gestão de reputação", 
    value: "R$ 2.448,00", 
    tools: ["Trustpilot"]
  },
  {
    name: "Analytics", 
    value: "R$ 126,96", 
    tools: ["Mixpanel", "Amplitude"]
  }
];

export const totalSavingData = "R$ 10.122,40";

// Adding the missing exports to fix build errors
export const automationPerformanceData = [
  { month: 'Jan', actual: 200, target: 185 },
  { month: 'Fev', actual: 250, target: 255 },
  { month: 'Mar', actual: 330, target: 325 },
  { month: 'Abr', actual: 350, target: 390 },
  { month: 'Mai', actual: 400, target: 380 },
  { month: 'Jun', actual: 450, target: 410 },
];

export const automationData = [
  { name: 'Automação 1', rate: 85, status: 'active', fillColor: '#10b981' },
  { name: 'Automação 2', rate: 72, status: 'active', fillColor: '#10b981' },
  { name: 'Automação 3', rate: 55, status: 'inactive', fillColor: '#6b7280' },
  { name: 'Automação 4', rate: 92, status: 'active', fillColor: '#10b981' },
];

export const ticketData = [
  { date: '2023-01-01', value: 320 },
  { date: '2023-02-01', value: 350 },
  { date: '2023-03-01', value: 450 },
  { date: '2023-04-01', value: 420 },
  { date: '2023-05-01', value: 480 },
  { date: '2023-06-01', value: 520 },
];

export const channelData = [
  { name: 'Organic', value: 35 },
  { name: 'Paid', value: 25 },
  { name: 'Social', value: 20 },
  { name: 'Email', value: 10 },
  { name: 'Referral', value: 10 },
];

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export const connectionTrafficData = [
  { name: 'Google Ads', visits: 4000, conversions: 2400 },
  { name: 'Facebook', visits: 3000, conversions: 1398 },
  { name: 'Instagram', visits: 2000, conversions: 980 },
  { name: 'Organic', visits: 2780, conversions: 1908 },
];

export const conversionData = [
  { day: 'Mon', rate: 75 },
  { day: 'Tue', rate: 80 },
  { day: 'Wed', rate: 92 },
  { day: 'Thu', rate: 88 },
  { day: 'Fri', rate: 94 },
  { day: 'Sat', rate: 75 },
  { day: 'Sun', rate: 65 },
];

export const funnelData = [
  { name: 'Visitantes', value: 1200 },
  { name: 'Leads', value: 800 },
  { name: 'Oportunidades', value: 400 },
  { name: 'Clientes', value: 200 },
];

export const automationMetrics = [
  { name: 'Automações Ativas', title: 'Automações Ativas', value: '12', change: '+20%', positive: true, icon: 'activity' },
  { name: 'Taxa de Conversão', title: 'Taxa de Conversão', value: '8.5%', change: '+2.1%', positive: true, icon: 'percent' },
  { name: 'Contatos Ativos', title: 'Contatos Ativos', value: '2,450', change: '+15%', positive: true, icon: 'users' },
  { name: 'Ticket Médio', title: 'Ticket Médio', value: 'R$ 450', change: '+5%', positive: true, icon: 'dollar-sign' },
];
