
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { blogPosts, featuredPost } from '@/data/blogData';

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
    { id: 'traffic', name: 'Tráfego' },
    { id: 'case-study', name: 'Cases' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

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
      
      <main className="pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Conteúdo para acelerar seu <span className="text-gradient">crescimento</span>
            </h1>
            <p className="text-xl text-white/80 mb-10">
              Estratégias, estudos de caso e insights sobre marketing e vendas para impulsionar seu negócio
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    activeCategory === category.id 
                      ? "bg-[#d0ff00] text-black hover:bg-[#b3e600] shadow-md" 
                      : "border-[#d0ff00]/30 text-white/70 hover:bg-[#d0ff00]/10 hover:text-white"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16 feature-card overflow-hidden rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative h-72 lg:h-full overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#d0ff00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Destaque
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/70 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex items-center text-white/50 text-sm mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{formatDate(featuredPost.date)}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black shadow-md hover:shadow-lg">
                      Ler artigo completo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-8 text-white">Artigos Recentes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="feature-card overflow-hidden rounded-xl flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#d0ff00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
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
                    <Button variant="outline" className="w-full border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10">
                      Ler mais <ArrowRight className="ml-2 h-4 w-4" />
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
                className="bg-[#d0ff00] hover:bg-[#b3e600] text-black"
              >
                Ver todos os artigos
              </Button>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="mt-24 p-10 rounded-xl bg-[#d0ff00]/10 border border-[#d0ff00]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Receba nossos artigos</h3>
                <p className="text-white/70 mb-0">
                  Inscreva-se para receber as últimas novidades, dicas e estratégias para impulsionar seu crescimento.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-[#d0ff00]/20 text-white focus:outline-none focus:border-[#d0ff00]"
                />
                <Button className="bg-[#d0ff00] hover:bg-[#b3e600] text-black whitespace-nowrap">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
