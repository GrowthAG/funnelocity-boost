
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'crm', name: 'CRM' },
    { id: 'automations', name: 'Automações' },
    { id: 'ai', name: 'IA' },
    { id: 'funnels', name: 'Funis' },
    { id: 'traffic', name: 'Tráfego' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Como aumentar suas taxas de conversão em 147% com automação',
      excerpt: 'Descubra as estratégias que utilizamos para aumentar drasticamente as taxas de conversão dos nossos clientes através de fluxos de automação inteligentes.',
      category: 'automations',
      image: '/lovable-uploads/efea1fc0-61ab-4104-bbee-bdb236109631.png',
      author: 'Carlos Mendes',
      date: '2023-06-15',
      readTime: '8 min'
    },
    {
      id: 2,
      title: 'Guia completo de CRM: da implementação aos resultados',
      excerpt: 'Um CRM bem implementado pode transformar completamente sua operação de vendas. Neste guia, mostramos o passo a passo para maximizar resultados.',
      category: 'crm',
      image: '/lovable-uploads/b1082615-5b0d-4bd3-9b75-ee2724be2d23.png',
      author: 'Ana Silva',
      date: '2023-05-28',
      readTime: '12 min'
    },
    {
      id: 3,
      title: 'Inteligência Artificial no marketing: casos práticos',
      excerpt: 'A IA está revolucionando o marketing digital. Conheça aplicações práticas que você pode implementar hoje mesmo na sua estratégia.',
      category: 'ai',
      image: '/lovable-uploads/efea1fc0-61ab-4104-bbee-bdb236109631.png',
      author: 'Mariana Costa',
      date: '2023-07-03',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Funis de vendas: a anatomia de um funil de alta conversão',
      excerpt: 'Entenda os elementos essenciais que compõem um funil de vendas eficiente e como estruturar cada etapa para maximizar resultados.',
      category: 'funnels',
      image: '/lovable-uploads/b1082615-5b0d-4bd3-9b75-ee2724be2d23.png',
      author: 'Paulo Andrade',
      date: '2023-06-22',
      readTime: '10 min'
    },
    {
      id: 5,
      title: '5 estratégias de tráfego pago que realmente funcionam em 2023',
      excerpt: 'Com as constantes mudanças nos algoritmos das plataformas de mídia paga, descubra quais estratégias ainda geram ROI positivo.',
      category: 'traffic',
      image: '/lovable-uploads/efea1fc0-61ab-4104-bbee-bdb236109631.png',
      author: 'Rafael Mendonça',
      date: '2023-07-10',
      readTime: '9 min'
    },
    {
      id: 6,
      title: 'Automação de marketing: por onde começar',
      excerpt: 'Automatizar processos de marketing pode parecer complexo, mas você pode começar com passos simples e obter resultados impressionantes.',
      category: 'automations',
      image: '/lovable-uploads/b1082615-5b0d-4bd3-9b75-ee2724be2d23.png',
      author: 'Luciana Ferreira',
      date: '2023-05-15',
      readTime: '7 min'
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Conteúdo para acelerar seu <span className="text-gradient">crescimento</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Estratégias, estudos de caso e insights sobre marketing e vendas
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    activeCategory === category.id 
                      ? "bg-growth-green text-black hover:bg-growth-green/90" 
                      : "border-growth-green/30 text-white/70 hover:bg-growth-green/10 hover:text-white"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="feature-card overflow-hidden rounded-xl flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-growth-green text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-white/50 text-sm mb-5">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{formatDate(post.date)}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button className="w-full btn-outline">
                      Ler mais
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl text-white mb-4">Nenhum artigo encontrado nesta categoria</h3>
              <Button 
                onClick={() => setActiveCategory('all')}
                className="btn-outline"
              >
                Ver todos os artigos
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
