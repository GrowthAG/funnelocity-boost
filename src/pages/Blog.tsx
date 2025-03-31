import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, Tag, Facebook, Twitter, Linkedin, Search } from 'lucide-react';
import { blogPosts, featuredPost } from '@/data/blogData';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'crm', name: 'CRM' },
    { id: 'automations', name: 'Automações' },
    { id: 'ai', name: 'IA' },
    { id: 'funnels', name: 'Funis' },
    { id: 'traffic', name: 'Tráfego' },
    { id: 'case-study', name: 'Cases' }
  ];

  // Ensure all blog posts have the required social share properties
  const processedBlogPosts = blogPosts.map(post => ({
    ...post,
    socialShare: {
      ...post.socialShare,
      whatsapp: post.socialShare.whatsapp || '#',
      telegram: post.socialShare.telegram || '#'
    }
  }));

  const processedFeaturedPost = {
    ...featuredPost,
    socialShare: {
      ...featuredPost.socialShare,
      whatsapp: featuredPost.socialShare.whatsapp || '#',
      telegram: featuredPost.socialShare.telegram || '#'
    }
  };

  const filteredPosts = processedBlogPosts
    .filter(post => 
      (activeCategory === 'all' || post.category === activeCategory) &&
      (searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );

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
            
            <div className="relative mb-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/40" />
              </div>
              <input
                type="text"
                placeholder="Buscar artigos, tópicos ou tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#d0ff00] transition-colors"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
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
                  src={processedFeaturedPost.image} 
                  alt={processedFeaturedPost.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#d0ff00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Destaque
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {processedFeaturedPost.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {processedFeaturedPost.title}
                  </h2>
                  <p className="text-white/70 text-lg mb-6">
                    {processedFeaturedPost.excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <Avatar className="h-10 w-10 mr-3">
                      {processedFeaturedPost.authorImage ? (
                        <AvatarImage src={processedFeaturedPost.authorImage} alt={processedFeaturedPost.author} />
                      ) : (
                        <AvatarFallback>{processedFeaturedPost.author.substring(0, 2)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <div className="text-white text-sm">{processedFeaturedPost.author}</div>
                      <div className="flex items-center text-white/50 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-2">{formatDate(processedFeaturedPost.date)}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{processedFeaturedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/blog/${processedFeaturedPost.id}`}>
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
                  <div className="flex items-center mb-5">
                    <Avatar className="h-8 w-8 mr-2">
                      {post.authorImage ? (
                        <AvatarImage src={post.authorImage} alt={post.author} />
                      ) : (
                        <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-white text-sm">{post.author}</div>
                      <div className="flex items-center text-white/50 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-2">{formatDate(post.date)}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
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
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
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
          
          {/* Social Media Follow */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Siga-nos nas redes sociais</h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Acompanhe a Growth Funnels para dicas diárias, novidades e conteúdos exclusivos sobre marketing, vendas e crescimento de negócios.
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#0e5fb6] transition-colors">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1DA1F2] hover:bg-[#0c85d0] transition-colors">
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0A66C2] hover:bg-[#08518a] transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
