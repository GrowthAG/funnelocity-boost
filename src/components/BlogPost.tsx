import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Bookmark, 
  ThumbsUp, 
  MessageSquare, 
  Tag,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
  Search
} from 'lucide-react';
import { blogPosts, featuredPost } from '@/data/blogData';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Track scroll position for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Combine both sources of blog posts for lookup
  const allPosts = [...blogPosts, featuredPost];
  const post = allPosts.find(post => post.id.toString() === id);

  // If post not found, show a message
  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="pt-28 pb-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-6">Artigo não encontrado</h1>
            <p className="text-white/70 mb-8">O artigo que você está procurando não existe ou foi removido.</p>
            <Link to="/blog">
              <Button className="bg-[#d0ff00] hover:bg-[#b3e600] text-black">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(date);
  };

  // Get related posts (exclude current post and limit to 3)
  const relatedPosts = blogPosts
    .filter(relatedPost => relatedPost.id !== post.id)
    .filter(relatedPost => relatedPost.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  // Extract headings for table of contents
  const getTableOfContents = () => {
    if (post.id === 1) {
      return [
        { id: 'automacao-marketing', text: 'O Poder da Automação no Marketing Digital' },
        { id: 'jornadas-personalizadas', text: '1. Criação de Jornadas Personalizadas' },
        { id: 'nutricao-leads', text: '2. Nutrição de Leads Multi-canal' },
        { id: 'gatilhos-comportamentais', text: '3. Utilização de Gatilhos Comportamentais' },
        { id: 'implementacao-pratica', text: 'Implementação Prática com a Growth Funnels' },
        { id: 'resultados-reais', text: 'Resultados Reais' },
        { id: 'conclusao', text: 'Conclusão' }
      ];
    } else if (post.id === 2) {
      return [
        { id: 'evolucao-crm', text: 'A Evolução dos Sistemas de CRM' },
        { id: 'implementacao-estrategica', text: 'Implementação Estratégica: O Passo a Passo' },
        { id: 'objetivos-claros', text: '1. Definição de Objetivos Claros' },
        { id: 'mapeamento-funil', text: '2. Mapeamento do Funil de Vendas' },
        { id: 'configuracao-campos', text: '3. Configuração de Campos e Dados' },
        { id: 'integracao-ferramentas', text: '4. Integração com Outras Ferramentas' },
        { id: 'medindo-resultados', text: 'Medindo Resultados: KPIs Essenciais' },
        { id: 'erros-comuns', text: 'Erros Comuns a Evitar' },
        { id: 'conclusao-crm', text: 'Conclusão: O CRM como Vantagem Competitiva' }
      ];
    } else if (post.id === 3) {
      return [
        { id: 'revolucao-ia', text: 'A Revolução da IA no Marketing' },
        { id: 'personalizacao-avancada', text: '1. Personalização Avançada de Conteúdo' },
        { id: 'otimizacao-campanhas', text: '2. Otimização de Campanhas em Tempo Real' },
        { id: 'atendimento-inteligente', text: '3. Atendimento Inteligente' },
        { id: 'geracao-conteudo', text: '4. Geração de Conteúdo Assistida' },
        { id: 'implementacao-estrategica-ia', text: 'Implementação Estratégica com Growth Funnels' },
        { id: 'conclusao-ia', text: 'Conclusão: Preparando-se para o Futuro' }
      ];
    } else if (post.id === 4) {
      return [
        { id: 'funil-vendas-moderno', text: 'Definindo o Funil de Vendas Moderno' },
        { id: 'topo-funil', text: '1. Topo do Funil: Atração e Conscientização' },
        { id: 'meio-funil', text: '2. Meio do Funil: Interesse e Consideração' },
        { id: 'base-funil', text: '3. Base do Funil: Decisão e Ação' },
        { id: 'pos-funil', text: '4. Pós-Funil: Encantamento e Expansão' },
        { id: 'metricas-essenciais', text: 'Métricas Essenciais para Otimização Contínua' },
        { id: 'implementando-growth', text: 'Implementando na Growth Funnels' }
      ];
    } else if (post.id === 7) {
      return [
        { id: 'desafio-inicial', text: 'O Desafio Inicial' },
        { id: 'estrategia-implementada', text: 'Estratégia Implementada' },
        { id: 'automacao-personalizada', text: '1. Automação Personalizada' },
        { id: 'crm-integrado', text: '2. CRM Integrado' },
        { id: 'funis-segmentados', text: '3. Funis Segmentados' },
        { id: 'resultados-alcancados', text: 'Resultados Alcançados' },
        { id: 'licoes-aprendidas', text: 'Lições Aprendidas' },
        { id: 'conclusao-case', text: 'Conclusão' }
      ];
    }
    return [];
  };

  const tableOfContents = getTableOfContents();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-black pt-16 pb-32 overflow-hidden">
        {/* Background overlay with semi-transparent image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-cover opacity-30" 
          style={{ 
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-[#d0ff00] transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Voltar para o Blog</span>
            </Link>
            <span className="ml-4 py-1 px-3 bg-[#d0ff00] text-black rounded-full text-xs font-medium">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* Author and Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mt-6">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#d0ff00]/20 flex items-center justify-center overflow-hidden mr-3">
                <User className="h-5 w-5 text-[#d0ff00]" />
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-white/60 text-sm">Advisor</p>
              </div>
            </div>
            
            <div className="flex items-center text-white/60">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{formatDate(post.date)}</span>
            </div>
            
            <div className="flex items-center text-white/60">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      <main className="pb-20 relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Action Buttons */}
              <div className="flex justify-between mb-8 border-b border-white/10 pb-6">
                <div className="flex space-x-3">
                  <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
                    <ThumbsUp className="h-5 w-5" />
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex space-x-3">
                  <p className="text-white/60 hidden md:block mr-2">Compartilhar:</p>
                  <button className="bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] p-2 rounded-full transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="bg-[#E1306C]/10 hover:bg-[#E1306C]/20 text-[#E1306C] p-2 rounded-full transition-colors">
                    <Instagram className="h-5 w-5" />
                  </button>
                </div>
              </div>
                
              {/* Key Excerpt */}
              <div className="border-l-4 border-[#d0ff00] pl-6 mb-10">
                <p className="text-xl text-white/80 italic">
                  {post.excerpt}
                </p>
              </div>
                
              {/* Article Content */}
              <div className="prose prose-lg prose-invert max-w-none">
                {post.id === 1 && (
                  <>
                    <h2 id="automacao-marketing" className="text-2xl font-bold text-white mt-12 mb-6">O Poder da Automação no Marketing Digital</h2>
                    <p className="text-white/80 mb-6">
                      No cenário atual do marketing digital, a automação não é apenas uma vantagem competitiva, mas uma necessidade para empresas que buscam escalar suas operações sem perder qualidade no atendimento e na conversão de leads.
                    </p>
                    <p className="text-white/80 mb-6">
                      Nossa pesquisa com mais de 500 empresas mostrou que a implementação correta de fluxos automatizados pode aumentar as taxas de conversão em até 147%, reduzir o tempo de resposta em 83% e diminuir a carga operacional da equipe em 65%.
                    </p>
                    
                    <h3 id="jornadas-personalizadas" className="text-xl font-bold text-white mt-10 mb-4">1. Criação de Jornadas Personalizadas</h3>
                    <p className="text-white/80 mb-6">
                      O primeiro passo para aumentar suas taxas de conversão é criar jornadas personalizadas para diferentes segmentos de clientes. Isso significa mapear todos os pontos de contato e criar gatilhos inteligentes que respondam ao comportamento do usuário em tempo real.
                    </p>
                    <p className="text-white/80 mb-6">
                      Por exemplo, se um lead visita a página de preços mas não completa a compra, um fluxo automatizado pode enviar conteúdo relevante sobre os benefícios do produto, depoimentos de clientes satisfeitos e até mesmo um incentivo especial para conclusão da compra.
                    </p>
                    
                    <h3 id="nutricao-leads" className="text-xl font-bold text-white mt-10 mb-4">2. Nutrição de Leads Multi-canal</h3>
                    <p className="text-white/80 mb-6">
                      A nutrição de leads eficiente acontece em múltiplos canais, de maneira coordenada. Nossos clientes que implementaram estratégias omnichannel viram um aumento médio de 112% nas taxas de conversão.
                    </p>
                    <p className="text-white/80 mb-6">
                      Uma estratégia eficaz combina e-mail marketing, SMS, notificações push e até mesmo integração com WhatsApp para criar uma experiência coesa e progressiva, que guia o lead pelo funil de vendas de forma natural.
                    </p>
                    
                    <h3 id="gatilhos-comportamentais" className="text-xl font-bold text-white mt-10 mb-4">3. Utilização de Gatilhos Comportamentais</h3>
                    <p className="text-white/80 mb-6">
                      Os gatilhos comportamentais são ações específicas que os usuários realizam e que indicam interesse ou propensão à compra. Identificar e acionar fluxos automatizados baseados nesses gatilhos pode aumentar as taxas de conversão em até 89%.
                    </p>
                    <p className="text-white/80 mb-6">
                      Exemplos de gatilhos eficazes incluem: visualização de determinadas páginas múltiplas vezes, tempo gasto em páginas específicas, interação com determinados conteúdos e abandono de carrinho ou formulários.
                    </p>
                    
                    <h2 id="implementacao-pratica" className="text-2xl font-bold text-white mt-12 mb-6">Implementação Prática com a Growth Funnels</h2>
                    <p className="text-white/80 mb-6">
                      A plataforma Growth Funnels permite a implementação dessas estratégias de forma simples e intuitiva, mesmo para equipes sem conhecimento técnico avançado. Nosso editor visual de automações possibilita a criação de fluxos complexos com facilidade, enquanto as integrações nativas eliminam a necessidade de várias ferramentas.
                    </p>
                    <p className="text-white/80 mb-6">
                      A combinação de CRM integrado, ferramentas de automação e análise avançada permite não apenas aumentar as taxas de conversão, mas também entender melhor cada etapa do funil, identificando gargalos e oportunidades de melhoria contínua.
                    </p>
                    
                    <h3 id="resultados-reais" className="text-xl font-bold text-white mt-10 mb-4">Resultados Reais</h3>
                    <p className="text-white/80 mb-6">
                      A empresa XYZ, cliente da Growth Funnels, conseguiu aumentar suas taxas de conversão em 173% em apenas três meses após implementar uma estratégia de automação personalizada. O tempo médio de vendas reduziu de 47 para 18 dias, e o valor médio de ticket aumentou em 28%.
                    </p>
                    
                    <h2 id="conclusao" className="text-2xl font-bold text-white mt-12 mb-6">Conclusão</h2>
                    <p className="text-white/80 mb-6">
                      A automação de marketing, quando implementada estrategicamente, não se trata apenas de reduzir trabalho manual, mas de criar experiências personalizadas em escala que realmente conectam com os potenciais clientes e os guiam pelo funil de vendas de forma mais eficiente.
                    </p>
                    <p className="text-white/80 mb-6">
                      Para empresas que buscam crescimento sustentável, a combinação de estratégia bem definida e as ferramentas certas pode transformar completamente os resultados de marketing e vendas, como temos visto consistentemente entre nossos clientes.
                    </p>
                  </>
                )}

                {post.id === 2 && (
                  <>
                    <h2 id="evolucao-crm" className="text-2xl font-bold text-white mt-12 mb-6">A Evolução dos Sistemas de CRM</h2>
                    <p className="text-white/80 mb-6">
                      O Customer Relationship Management (CRM) evoluiu drasticamente nos últimos anos, passando de simples bancos de dados de contatos para ecossistemas completos de gestão de relacionamento. Entender esta evolução é essencial para implementar um sistema que realmente agregue valor ao seu negócio.
                    </p>
                    <p className="text-white/80 mb-6">
                      Os CRMs modernos não apenas armazenam informações, mas atuam como centros nervosos das operações de vendas, marketing e atendimento, fornecendo insights acionáveis e automatizando processos críticos.
                    </p>
                    
                    <h2 id="implementacao-estrategica" className="text-2xl font-bold text-white mt-12 mb-6">Implementação Estratégica: O Passo a Passo</h2>
                    
                    <h3 id="objetivos-claros" className="text-xl font-bold text-white mt-10 mb-4">1. Definição de Objetivos Claros</h3>
                    <p className="text-white/80 mb-6">
                      Antes de qualquer implementação técnica, é fundamental definir exatamente o que você espera alcançar com o CRM. Objetivos comuns incluem:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Redução do ciclo de vendas</li>
                      <li>Aumento das taxas de conversão</li>
                      <li>Melhoria na retenção de clientes</li>
                      <li>Centralização de dados de múltiplos canais</li>
                      <li>Otimização de processos internos</li>
                    </ul>
                    <p className="text-white/80 mb-6">
                      Definir métricas específicas para cada objetivo permitirá avaliar o sucesso da implementação posteriormente.
                    </p>
                    
                    <h3 id="mapeamento-funil" className="text-xl font-bold text-white mt-10 mb-4">2. Mapeamento do Funil de Vendas</h3>
                    <p className="text-white/80 mb-6">
                      O mapeamento detalhado do seu funil de vendas é crítico para a configuração eficaz do CRM. Identifique cada etapa do processo, desde o primeiro contato até o pós-venda, documentando:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Pontos de entrada de leads (formulários, landing pages, campanhas)</li>
                      <li>Etapas de qualificação e critérios de avanço</li>
                      <li>Processos de nutrição em cada fase</li>
                      <li>Gatilhos para intervenção da equipe de vendas</li>
                      <li>Fluxos de onboarding e retenção pós-venda</li>
                    </ul>
                    
                    <h3 id="configuracao-campos" className="text-xl font-bold text-white mt-10 mb-4">3. Configuração de Campos e Dados</h3>
                    <p className="text-white/80 mb-6">
                      A estrutura de dados do seu CRM deve refletir as informações realmente necessárias para sua operação. Evite a tentação de criar dezenas de campos que nunca serão utilizados.
                    </p>
                    <p className="text-white/80 mb-6">
                      Priorize dados que:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Ajudam na segmentação de leads e clientes</li>
                      <li>Fornecem contexto para interações personalizadas</li>
                      <li>Permitem previsões de vendas precisas</li>
                      <li>Facilitam a identificação de oportunidades de upsell/cross-sell</li>
                    </ul>
                    
                    <h3 id="integracao-ferramentas" className="text-xl font-bold text-white mt-10 mb-4">4. Integração com Outras Ferramentas</h3>
                    <p className="text-white/80 mb-6">
                      Um CRM isolado perde grande parte de seu potencial. A verdadeira transformação acontece quando ele se integra com outras ferramentas do seu stack tecnológico.
                    </p>
                    <p className="text-white/80 mb-6">
                      Integrações essenciais incluem:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Plataformas de email marketing</li>
                      <li>Ferramentas de automação de marketing</li>
                      <li>Sistema de help desk e atendimento</li>
                      <li>Plataformas de comunicação (WhatsApp, SMS, etc.)</li>
                      <li>Ferramentas de assinatura digital</li>
                      <li>Soluções de BI e análise de dados</li>
                    </ul>
                    
                    <h2 id="medindo-resultados" className="text-2xl font-bold text-white mt-12 mb-6">Medindo Resultados: KPIs Essenciais</h2>
                    <p className="text-white/80 mb-6">
                      A implementação de um CRM deve ser seguida por uma análise contínua de resultados. Monitore de perto:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Taxa de conversão por etapa do funil</li>
                      <li>Tempo médio do ciclo de vendas</li>
                      <li>Custo de aquisição de cliente (CAC)</li>
                      <li>Valor médio de cliente (LTV)</li>
                      <li>Taxa de abandono em cada etapa</li>
                      <li>Produtividade da equipe de vendas</li>
                    </ul>
                    
                    <h2 id="erros-comuns" className="text-2xl font-bold text-white mt-12 mb-6">Erros Comuns a Evitar</h2>
                    <p className="text-white/80 mb-6">
                      Muitas implementações de CRM falham pelos mesmos motivos. Evite:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Negligenciar o treinamento da equipe</li>
                      <li>Complexidade desnecessária nos processos</li>
                      <li>Falta de alinhamento entre departamentos</li>
                      <li>Ausência de responsáveis pela gestão do sistema</li>
                      <li>Ignorar a qualidade dos dados inseridos</li>
                    </ul>
                    
                    <h2 id="conclusao-crm" className="text-2xl font-bold text-white mt-12 mb-6">Conclusão: O CRM como Vantagem Competitiva</h2>
                    <p className="text-white/80 mb-6">
                      Um CRM bem implementado torna-se muito mais que uma ferramenta operacional — transforma-se em uma verdadeira vantagem competitiva. Ele permite que sua empresa construa relacionamentos mais profundos com clientes, tome decisões baseadas em dados concretos e escale operações sem perder a personalização.
                    </p>
                    <p className="text-white/80 mb-6">
                      Na plataforma Growth Funnels, integramos CRM, automação e análise em uma única solução, eliminando as complexidades de múltiplas ferramentas e proporcionando uma visão holística do seu funil de vendas. O resultado é uma implementação mais rápida, adoção mais simples pela equipe e, principalmente, resultados mensuráveis em tempo recorde.
                    </p>
                  </>
                )}

                {post.id === 3 && (
                  <>
                    <h2 id="revolucao-ia" className="text-2xl font-bold text-white mt-12 mb-6">A Revolução da IA no Marketing</h2>
                    <p className="text-white/80 mb-6">
                      A Inteligência Artificial (IA) está transformando radicalmente o marketing digital, permitindo níveis de personalização, automação e análise preditiva que eram inimagináveis há apenas alguns anos. Neste artigo, exploramos casos práticos e aplicações imediatas que podem dar à sua empresa uma vantagem competitiva significativa.
                    </p>
                    
                    <h3 id="personalizacao-avancada" className="text-xl font-bold text-white mt-10 mb-4">1. Personalização Avançada de Conteúdo</h3>
                    <p className="text-white/80 mb-6">
                      A personalização já não se limita a inserir o nome do cliente em emails. Com IA, empresas estão criando experiências totalmente personalizadas:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Um marketplace B2B utiliza IA para gerar descrições de produto personalizadas para mais de 50.000 itens, resultando em aumento de 27% no tráfego orgânico e melhoria significativa nas taxas de conversão.</li>
                      <li>Uma fintech brasileira utiliza IA para personalizar completamente a jornada de educação financeira baseada no comportamento individual do usuário, resultando em um aumento de 47% na ativação de produtos adicionais.</li>
                    </ul>
                    <p className="text-white/80 mb-6">
                      <strong>Aplicação prática:</strong> Comece segmentando seu público com base em comportamentos específicos e crie jornadas de conteúdo dinâmicas que se adaptam às interações do usuário. A Growth Funnels oferece modelos pré-configurados que facilitam esta implementação.
                    </p>
                    
                    <h3 id="otimizacao-campanhas" className="text-xl font-bold text-white mt-10 mb-4">2. Otimização de Campanhas em Tempo Real</h3>
                    <p className="text-white/80 mb-6">
                      Algoritmos de aprendizado de máquina estão revolucionando a forma como campanhas são otimizadas:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Uma agência de marketing conseguiu reduzir o custo por aquisição em 52% utilizando IA para otimizar lances em tempo real em campanhas de Google Ads, ajustando automaticamente segmentações, horários e criativos.</li>
                      <li>Um e-commerce de moda implementou testes A/B automatizados com IA, testando simultaneamente dezenas de variáveis em suas landing pages. O sistema identificou combinações de elementos que aumentaram a taxa de conversão em 38%.</li>
                    </ul>
                    <p className="text-white/80 mb-6">
                      <strong>Aplicação prática:</strong> Implemente sistemas de otimização automatizada em suas campanhas de maior volume. Comece com testes simples e amplie gradualmente as variáveis analisadas.
                    </p>
                    
                    <h3 id="atendimento-inteligente" className="text-xl font-bold text-white mt-10 mb-4">3. Atendimento Inteligente</h3>
                    <p className="text-white/80 mb-6">
                      Chatbots e assistentes virtuais evoluíram significativamente com a IA:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Uma empresa de SaaS implementou um assistente virtual baseado em IA que responde dúvidas técnicas, sugere funcionalidades baseadas no perfil do usuário e identifica oportunidades de upsell. O resultado foi uma redução de 42% nas solicitações ao suporte e aumento de 28% nas conversões de trial para pago.</li>
                      <li>Uma corretora de seguros utiliza um chatbot inteligente que não apenas qualifica leads, mas também conduz simulações personalizadas. A implementação resultou em 3.2x mais leads qualificados encaminhados para a equipe comercial.</li>
                    </ul>
                    <p className="text-white/80 mb-6">
                      <strong>Aplicação prática:</strong> Comece com automação das perguntas mais frequentes e amplie gradualmente. Integre o chatbot com seu CRM para manter o contexto das conversas e permitir transição suave para atendimento humano quando necessário.
                    </p>
                    
                    <h3 id="geracao-conteudo" className="text-xl font-bold text-white mt-10 mb-4">4. Geração de Conteúdo Assistida</h3>
                    <p className="text-white/80 mb-6">
                      A IA está transformando a criação de conteúdo em escala:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Um marketplace B2B utiliza IA para gerar descrições de produto personalizadas para mais de 50.000 itens, resultando em aumento de 27% no tráfego orgânico e melhoria significativa nas taxas de conversão.</li>
                      <li>Uma agência de conteúdo implementou fluxos de trabalho assistidos por IA que aumentaram a produtividade dos redatores em 3x, mantendo a qualidade e consistência dos materiais.</li>
                    </ul>
                    <p className="text-white/80 mb-6">
                      <strong>Aplicação prática:</strong> Utilize ferramentas de IA para criar primeiros rascunhos de conteúdos recorrentes como newsletters, posts em redes sociais e atualizações de produto. Reserve o tempo da equipe para refinamento estratégico e adição de insights únicos.
                    </p>
                    
                    <h2 id="implementacao-estrategica-ia" className="text-2xl font-bold text-white mt-12 mb-6">Implementação Estratégica com Growth Funnels</h2>
                    <p className="text-white/80 mb-6">
                      Na Growth Funnels, integramos capacidades de IA diretamente em nossa plataforma, permitindo:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Segmentação comportamental avançada</li>
                      <li>Automação inteligente que aprende com os resultados</li>
                      <li>Previsão de propensão à compra baseada em múltiplas variáveis</li>
                      <li>Recomendação de próximos passos na jornada do cliente</li>
                      <li>Otimização contínua de copys e assuntos de emails</li>
                    </ul>
                    <p className="text-white/80 mb-6">
                      Nossos clientes que adotaram recursos de IA viram, em média, um aumento de 43% nas taxas de conversão e redução de 37% nos custos operacionais de marketing.
                    </p>
                    
                    <h2 id="conclusao-ia" className="text-2xl font-bold text-white mt-12 mb-6">Conclusão: Preparando-se para o Futuro</h2>
                    <p className="text-white/80 mb-6">
                      A adoção de IA no marketing não é mais uma opção futurista, mas uma necessidade presente para empresas que desejam manter-se competitivas. O diferencial está não apenas em adotar a tecnologia, mas em integrá-la estrategicamente aos processos existentes, sempre com foco em melhorar a experiência do cliente e os resultados de negócio.
                    </p>
                    <p className="text-white/80 mb-6">
                      Comece com aplicações específicas, meça os resultados rigorosamente e expanda gradualmente. As empresas que adotarem esta abordagem estarão não apenas melhorando seus resultados atuais, mas construindo a infraestrutura e o conhecimento necessários para continuar inovando à medida que a tecnologia evolui.
                    </p>
                  </>
                )}

                {post.id === 4 && (
                  <>
                    <h2 id="funil-vendas-moderno" className="text-2xl font-bold text-white mt-12 mb-6">Definindo o Funil de Vendas Moderno</h2>
                    <p className="text-white/80 mb-6">
                      Antes de analisar os componentes de um funil de alta conversão, é importante entender que o funil de vendas moderno não é mais uma estrutura rígida e linear. Hoje, falamos de uma jornada de compra omnichannel, com múltiplos pontos de entrada e interações não lineares.
                    </p>
                    <p className="text-white/80 mb-6">
                      No entanto, para fins de análise e otimização, ainda é útil estruturar essa jornada em etapas claras que possam ser monitoradas e aprimoradas. Vamos explorar cada uma dessas etapas e como maximizar sua eficiência.
                    </p>
                    
                    <h3 id="topo-funil" className="text-xl font-bold text-white mt-10 mb-4">1. Topo do Funil: Atração e Conscientização</h3>
                    <p className="text-white/80 mb-6">
                      Esta é a fase em que potenciais clientes tomam conhecimento da sua marca, produtos ou serviços. Um funil de alta conversão tem um topo bem estruturado que:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li><strong>Atrai tráfego qualificado:</strong> Em vez de focar apenas em volume, priorize a qualidade do tráfego. Conteúdo altamente específico para sua persona ideal resulta em menos leads, mas com maior propensão à conversão final.</li>
                      <li><strong>Estabelece credibilidade imediata:</strong> Dados mostram que os primeiros 7 segundos são decisivos para a percepção de confiança. Elementos como depoimentos, logos de clientes conhecidos e garantias visíveis aumentam significativamente as taxas de retenção inicial.</li>
                      <li><strong>Apresenta uma proposta de valor clara:</strong> Funis de alta conversão comunicam o valor principal em menos de 5 segundos e de forma inequívoca. Nossos testes A/B mostram que reduzir o número de benefícios apresentados inicialmente de 5 para 3, destacando apenas os mais relevantes, aumentou as taxas de continuidade em 34%.</li>
                    </ul>
                    
                    <h3 id="meio-funil" className="text-xl font-bold text-white mt-10 mb-4">2. Meio do Funil: Interesse e Consideração</h3>
                    <p className="text-white/80 mb-6">
                      Nesta fase, os leads estão avaliando ativamente suas opções e comparando soluções. Os funis de alta conversão se destacam aqui por:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li><strong>Nutrição multi-formato:</strong> Dados indicam que leads expostos a pelo menos 3 formatos diferentes de conteúdo (vídeo, texto, webinar, etc.) têm 90% mais probabilidade de conversão. A variação de formatos atende diferentes preferências de consumo de informação.</li>
                      <li><strong>Remoção de atrito:</strong> Cada clique ou campo adicional reduz em aproximadamente 7% a taxa de continuidade no funil. Funis otimizados eliminam etapas desnecessárias e simplificam decisões.</li>
                      <li><strong>Personalização comportamental:</strong> Ajustar o conteúdo apresentado com base no comportamento anterior aumenta o engajamento em média 62%. Por exemplo, mostrar estudos de caso específicos do setor que o lead demonstrou interesse.</li>
                    </ul>
                    
                    <h3 id="base-funil" className="text-xl font-bold text-white mt-10 mb-4">3. Base do Funil: Decisão e Ação</h3>
                    <p className="text-white/80 mb-6">
                      É o momento da verdade, onde o lead toma a decisão final de compra. Funis de alta conversão elevam suas taxas aqui com:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li><strong>Urgência genu��na:</strong> Elementos de escassez e urgência baseados em limitações reais (não artificiais) podem aumentar conversões em até 42%. Exemplos incluem vagas limitadas para um programa ou bonificações por tempo determinado.</li>
                      <li><strong>Redução de risco percebido:</strong> Garantias claras e sem asteriscos aumentam a conversão em média 32%. Quanto mais específica a garantia, maior a confiança gerada.</li>
                      <li><strong>Simplificação da decisão:</strong> Paradoxalmente, oferecer menos opções de pacotes ou planos (idealmente não mais que 3) resulta em mais conversões. A clareza das diferenças entre opções é fundamental.</li>
                    </ul>
                    
                    <h3 id="pos-funil" className="text-xl font-bold text-white mt-10 mb-4">4. Pós-Funil: Encantamento e Expansão</h3>
                    <p className="text-white/80 mb-6">
                      Embora frequentemente negligenciada, esta etapa é crucial para maximizar o valor do cliente ao longo do tempo:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li><strong>Onboarding estruturado:</strong> Clientes que passam por um processo de onboarding bem definido têm 74% mais probabilidade de permanecer após 3 meses e gastar 21% mais em produtos adicionais.</li>
                      <li><strong>Loops de feedback:</strong> Implementar ciclos regulares de coleta e implementação de feedback não apenas melhora o produto/serviço, mas aumenta o sentimento de pertencimento e lealdade do cliente.</li>
                      <li><strong>Programas de referência:</strong> Funis de alta performance transformam clientes em promotores, gerando novos leads qualificados que entram no funil com maior propensão à conversão e menor custo de aquisição.</li>
                    </ul>
                    
                    <h2 id="metricas-essenciais" className="text-2xl font-bold text-white mt-12 mb-6">Métricas Essenciais para Otimização Contínua</h2>
                    <p className="text-white/80 mb-6">
                      Um funil verdadeiramente eficaz é constantemente otimizado com base em dados. As métricas críticas para monitoramento incluem:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li><strong>Taxa de conversão por etapa:</strong> Identificar quedas específicas permite intervenções pontuais.</li>
                      <li><strong>Tempo médio por etapa:</strong> Ciclos de decisão excessivamente longos frequentemente indicam falta de clareza ou confiança.</li>
                      <li><strong>Custo de aquisição por canal:</strong> Permite alocação inteligente de recursos nos canais mais eficientes.</li>
                      <li><strong>Valor do cliente ao longo do tempo (LTV):</strong> Essencial para equilibrar investimentos em aquisição vs. retenção.</li>
                      <li><strong>Net Promoter Score (NPS):</strong> Indicador antecipado de saúde do negócio e crescimento orgânico via referências.</li>
                    </ul>
                    
                    <h2 id="implementando-growth" className="text-2xl font-bold text-white mt-12 mb-6">Implementando na Growth Funnels</h2>
                    <p className="text-white/80 mb-6">
                      A plataforma Growth Funnels foi desenhada especificamente para facilitar a construção e otimização de funis de alta conversão. As funcionalidades integradas permitem:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Visualização completa da jornada do cliente em uma única interface</li>
                      <li>Automação inteligente baseada em comportamento</li>
                      <li>Testes A/B nativos em cada etapa do funil</li>
                      <li>Dashboards personalizáveis para monitoramento de KPIs</li>
                      <li>Integração com múltiplos canais de comunicação e aquisição</li>
                    </ul>
                  </>
                )}

                {post.id === 7 && (
                  <>
                    <h2 id="desafio-inicial" className="text-2xl font-bold text-white mt-12 mb-6">O Desafio Inicial</h2>
                    <p className="text-white/80 mb-6">
                      A R&M Italinea, uma das principais lojas de móveis planejados do Brasil, enfrentava desafios significativos em sua estratégia de aquisição e conversão de clientes. Com um mercado altamente competitivo e um ciclo de vendas complexo, a empresa precisava de uma solução que pudesse:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Aumentar o volume de leads qualificados sem ampliar significativamente o investimento em mídia</li>
                      <li>Reduzir o tempo entre o primeiro contato e o agendamento de visita ao showroom</li>
                      <li>Melhorar a eficiência da equipe de vendas, focando seu tempo em leads com maior propensão à compra</li>
                      <li>Centralizar dados e interações de múltiplos canais para uma visão 360° do cliente</li>
                    </ul>
                    <p className="text-white/80 mb-6">
                      Os sistemas anteriores não permitiam uma segmentação eficiente dos leads, resultando em um processo one-size-fits-all que não reconhecia as diferentes necessidades e momentos de cada cliente potencial.
                    </p>
                    
                    <h2 id="estrategia-implementada" className="text-2xl font-bold text-white mt-12 mb-6">Estratégia Implementada</h2>
                    <p className="text-white/80 mb-6">
                      Após uma análise detalhada do processo de vendas da R&M Italinea e do comportamento de seus clientes, desenvolvemos uma estratégia integrada utilizando a plataforma Growth Funnels. A implementação foi realizada em etapas para minimizar interrupções e permitir ajustes contínuos baseados em dados reais.
                    </p>
                    
                    <h3 id="automacao-personalizada" className="text-xl font-bold text-white mt-10 mb-4">1. Automação Personalizada</h3>
                    <p className="text-white/80 mb-6">
                      Implementamos fluxos de automação que respondiam ao comportamento específico de cada lead. Por exemplo:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Leads que demonstravam interesse em cozinhas planejadas recebiam conteúdo específico sobre esse ambiente, incluindo cases, catálogos e vídeos de projetos similares</li>
                      <li>Automações sensíveis ao tempo de interação, intensificando contatos com leads que demonstravam sinais de urgência na compra</li>
                      <li>Recuperação automática de leads inativos com ofertas personalizadas baseadas em seu histórico de interações</li>
                    </ul>
                    
                    <h3 id="crm-integrado" className="text-xl font-bold text-white mt-10 mb-4">2. CRM Integrado</h3>
                    <p className="text-white/80 mb-6">
                      Centralizamos todas as informações dos clientes em um único sistema, permitindo:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Visualização completa da jornada do cliente, desde o primeiro clique até o pós-venda</li>
                      <li>Scoring automático de leads baseado em múltiplas variáveis comportamentais</li>
                      <li>Distribuição inteligente de leads para os vendedores mais adequados ao perfil do cliente</li>
                      <li>Insights sobre o funil de vendas em tempo real, identificando gargalos e oportunidades</li>
                    </ul>
                    
                    <h3 id="funis-segmentados" className="text-xl font-bold text-white mt-10 mb-4">3. Funis Segmentados</h3>
                    <p className="text-white/80 mb-6">
                      Desenvolvemos funis específicos para diferentes segmentos de clientes e ambientes:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li>Funil para primeiro apartamento, focado em soluções práticas e otimização de espaço</li>
                      <li>Funil para reforma, com ênfase na minimização de transtornos e transformação de ambientes</li>
                      <li>Funil para casas de alto padrão, destacando materiais premium e projetos exclusivos</li>
                    </ul>
                    <p className="text-white/80 mb-6">
                      Cada funil contava com conteúdos, gatilhos e pontos de interação humana específicos, otimizados continuamente através de testes A/B.
                    </p>
                    
                    <h2 id="resultados-alcancados" className="text-2xl font-bold text-white mt-12 mb-6">Resultados Alcançados</h2>
                    <p className="text-white/80 mb-6">
                      Em apenas seis meses após a implementação completa, a R&M Italinea experimentou transformações significativas:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li><strong>Aumento de 312% no faturamento</strong> em comparação com o mesmo período do ano anterior</li>
                      <li>Redução de 68% no tempo médio entre o primeiro contato e o agendamento no showroom</li>
                      <li>Aumento de 47% na taxa de conversão de lead para cliente</li>
                      <li>Crescimento de 28% no valor médio dos projetos vendidos</li>
                      <li>Redução de 52% no custo de aquisição de cliente (CAC)</li>
                    </ul>
                    <p className="text-white/80 mb-6">
                      Além dos números, houve uma melhoria significativa na satisfação tanto dos clientes quanto da equipe de vendas. Os vendedores passaram a receber leads mais qualificados e com informações contextuais que facilitavam o processo de venda.
                    </p>
                    
                    <h2 id="licoes-aprendidas" className="text-2xl font-bold text-white mt-12 mb-6">Lições Aprendidas</h2>
                    <p className="text-white/80 mb-6">
                      Durante o projeto, identificamos insights valiosos que podem beneficiar outras empresas do segmento:
                    </p>
                    <ul className="list-disc pl-6 text-white/80 mb-6">
                      <li><strong>A nutrição de leads não deve ser linear</strong> - Leads em estágios similares podem precisar de abordagens completamente diferentes</li>
                      <li><strong>O timing é crucial</strong> - O momento certo para intervenção humana pode ser a diferença entre um cliente ganho ou perdido</li>
                      <li><strong>Dados centralizados geram eficiência operacional</strong> - Eliminar silos de informação reduz redundâncias e melhora a experiência do cliente</li>
                      <li><strong>Experimentação contínua é essencial</strong> - Os melhores resultados vieram de testes constantes e iterações baseadas em dados</li>
                    </ul>
                    
                    <h2 id="conclusao-case" className="text-2xl font-bold text-white mt-12 mb-6">Conclusão</h2>
                    <p className="text-white/80 mb-6">
                      O caso da R&M Italinea demonstra como uma abordagem integrada de marketing, vendas e atendimento, potencializada por automação inteligente e CRM, pode transformar radicalmente os resultados de uma empresa no setor de móveis planejados.
                    </p>
                    <p className="text-white/80 mb-6">
                      A plataforma Growth Funnels não apenas forneceu as ferramentas tecnológicas necessárias, mas também o framework estratégico e o suporte para implementação, permitindo que a empresa multiplicasse seu faturamento sem um aumento proporcional em seus custos operacionais.
                    </p>
                    <p className="text-white/80 mb-6">
                      Este caso ilustra perfeitamente como a transformação digital bem executada pode ser o diferencial competitivo em mercados tradicionais, superando expectativas tanto em termos de resultados financeiros quanto na experiência proporcionada aos clientes.
                    </p>
                  </>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Table of Contents */}
              <div className="bg-black border border-white/10 rounded-lg p-6 mb-8 sticky top-24">
                <h3 className="text-white font-medium mb-4">Neste artigo</h3>
                <ul className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={`#${item.id}`} 
                        className="text-white/70 hover:text-[#d0ff00] text-sm transition-colors block py-1"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-black border border-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-white font-medium mb-2">Newsletter Growth Funnels</h3>
                <p className="text-white/70 text-sm mb-4">Receba dicas e estratégias para aumentar suas conversões diretamente no seu email.</p>
                <div className="space-y-3">
                  <Input 
                    type="email" 
                    placeholder="Seu melhor email" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                  <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black">
                    Inscrever-se
                  </Button>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="bg-black border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-medium mb-4">Artigos Relacionados</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="flex items-start gap-3">
                      <div className="w-20 h-16 bg-white/5 rounded overflow-hidden shrink-0">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Link 
                          to={`/blog/${relatedPost.id}`} 
                          className="text-white hover:text-[#d0ff00] text-sm font-medium line-clamp-2 transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                        <p className="text-white/50 text-xs mt-1">
                          {formatDate(relatedPost.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#d0ff00] text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#b3e600] transition-colors"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      
      <Footer />
    </div>
  );
};

export default BlogPost;
