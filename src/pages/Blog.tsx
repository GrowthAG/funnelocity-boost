
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { blogPosts, featuredPost } from '@/data/blogData';
import { rmitalineaCase } from '@/data/rmitalineaCase';
import FeaturedPost from '@/components/FeaturedPost';
import BlogCard from '@/components/BlogCard';
import BlogSearch from '@/components/BlogSearch';
import BlogCategories from '@/components/BlogCategories';
import BlogNewsletterSignup from '@/components/BlogNewsletterSignup';
import BlogSocialFollow from '@/components/BlogSocialFollow';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Add the new RM Italínea case study to the blog posts
  const allBlogPosts = [rmitalineaCase, ...blogPosts];

  // Ensure all blog posts have the required social share properties
  const processedBlogPosts = allBlogPosts.map(post => ({
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
            
            <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <BlogCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>
          
          {/* Featured Post */}
          <FeaturedPost post={processedFeaturedPost} formatDate={formatDate} />
          
          <h3 className="text-2xl font-bold mb-8 text-white">Artigos Recentes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} formatDate={formatDate} />
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
          <BlogNewsletterSignup />
          
          {/* Social Media Follow */}
          <BlogSocialFollow />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
