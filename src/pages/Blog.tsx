
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, Tag, ArrowLeft, ThumbsUp, Share, Bookmark } from 'lucide-react';
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
    { id: 'case-study', name: 'Cases' },
    { id: 'architecture', name: 'Arquitetura' }
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
          {/* Hero Section for Blog */}
          <div className="relative rounded-xl overflow-hidden mb-16 h-[420px] md:h-[520px]">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex space-x-2 mb-4">
                <Link to="/blog" className="flex items-center text-white hover:text-[#d0ff00] transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  <span>Voltar para o Blog</span>
                </Link>
                <span className="text-white/50">|</span>
                <span className="bg-[#d0ff00] text-black text-xs font-bold px-3 py-1 rounded-full">
                  {categories.find(cat => cat.id === featuredPost.category)?.name}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                {featuredPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/70 mb-6">
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt={featuredPost.author}
                    className="h-10 w-10 rounded-full mr-3 border-2 border-[#d0ff00]"
                  />
                  <div>
                    <div className="text-white font-medium">{featuredPost.author}</div>
                    <div className="text-white/50 text-sm">Advisor</div>
                  </div>
                </div>
                
                <div className="flex items-center text-white/50">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(featuredPost.date)}</span>
                </div>
                
                <div className="flex items-center text-white/50">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <Button variant="outline" size="sm" className="bg-white/10 border-transparent text-white hover:bg-white/20 hover:text-white rounded-full">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Curtir
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 border-transparent text-white hover:bg-white/20 hover:text-white rounded-full">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Salvar
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 border-transparent text-white hover:bg-white/20 hover:text-white rounded-full">
                  <Share className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Nosso <span className="text-gradient">Blog</span>
            </h2>
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
          
          {/* Blog Posts Grid */}
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
                  
                  <div className="flex items-center mb-4 text-white/70">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt={post.author}
                      className="h-8 w-8 rounded-full mr-2 border border-[#d0ff00]"
                    />
                    <span className="text-sm">{post.author}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-white/50 text-sm mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
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
          
          {/* Article Content Preview Section */}
          <div className="mt-20 mb-10 max-w-3xl mx-auto">
            <div className="border-l-4 border-[#d0ff00] pl-6 py-2 mb-6">
              <p className="text-white/80 text-lg italic">
                Descubra as vantagens de adotar microsserviços para aumentar a
                escalabilidade e resiliência dos seus sistemas.
              </p>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Neste artigo</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-[#d0ff00] mr-2" />
                  <span>Introdução</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-[#d0ff00] mr-2" />
                  <span>Desenvolvimento</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-[#d0ff00] mr-2" />
                  <span>Conclusão</span>
                </li>
              </ul>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 mb-6">
                A arquitetura de microsserviços tem revolucionado a forma como as empresas 
                desenvolvem e implantam aplicações de software. Diferentemente da abordagem 
                monolítica tradicional, onde toda a aplicação é construída como uma única unidade, 
                a arquitetura de microsserviços divide a aplicação em componentes menores e 
                independentes que se comunicam entre si.
              </p>
              
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Entendendo os Microsserviços</h3>
              
              <Link to={`/blog/${featuredPost.id}`} className="block mt-8">
                <Button className="bg-[#d0ff00] hover:bg-[#b3e600] text-black">
                  Continuar lendo o artigo completo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Sidebar Content */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              {/* Newsletter Signup */}
              <div className="p-8 rounded-xl bg-[#d0ff00]/10 border border-[#d0ff00]/20 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Receba nossos conteúdos</h3>
                <p className="text-white/70 mb-6">
                  Assine nossa newsletter e receba os últimos artigos e novidades diretamente no seu email.
                </p>
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
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Áreas de Expertise</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-[#d0ff00] mr-2" />
                  <span>Arquitetura de Software</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-[#d0ff00] mr-2" />
                  <span>Sistemas Distribuídos</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-[#d0ff00] mr-2" />
                  <span>Cloud Computing</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-[#d0ff00] mr-2" />
                  <span>DevOps</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-[#d0ff00] mr-2" />
                  <span>Inteligência Artificial</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-[#d0ff00] mr-2" />
                  <span>Marketing Digital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
