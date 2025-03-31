
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts, featuredPost } from '@/data/blogData';
import { BlogPostType } from '@/types/blog';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const postId = parseInt(id || '0');
    if (postId === featuredPost.id) {
      setPost(featuredPost);
    } else {
      const foundPost = blogPosts.find(post => post.id === postId);
      if (foundPost) {
        setPost(foundPost);
      }
    }
  }, [id]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(date);
  };
  
  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-28 pb-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-6">Artigo não encontrado</h1>
            <Link to="/blog">
              <Button className="bg-[#d0ff00] hover:bg-[#b3e600] text-black">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-[#d0ff00] hover:text-[#b3e600] mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o blog
          </Link>
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center mb-8">
              <Avatar className="h-12 w-12 mr-4">
                {post.authorImage ? (
                  <AvatarImage src={post.authorImage} alt={post.author} />
                ) : (
                  <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
                )}
              </Avatar>
              <div>
                <div className="text-white font-medium">{post.author}</div>
                {post.authorBio && (
                  <div className="text-white/60 text-sm max-w-md">{post.authorBio}</div>
                )}
              </div>
            </div>
            
            <div className="flex items-center text-white/50 text-sm mb-8">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{formatDate(post.date)}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            
            <div className="w-full h-[400px] rounded-xl overflow-hidden mb-8">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="post-content prose prose-invert prose-lg max-w-none mb-12"
               dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }} />
          
          {post.socialShare && (
            <div className="border-t border-white/10 pt-8 mt-16">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-0">Compartilhe este artigo:</h3>
                <div className="flex gap-4">
                  {post.socialShare.facebook && (
                    <a href={post.socialShare.facebook} target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#0e5fb6] transition-colors">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {post.socialShare.twitter && (
                    <a href={post.socialShare.twitter} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] hover:bg-[#0c85d0] transition-colors">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {post.socialShare.linkedin && (
                    <a href={post.socialShare.linkedin} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] hover:bg-[#08518a] transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-16 p-10 rounded-xl bg-[#d0ff00]/10 border border-[#d0ff00]/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-white">Quer saber mais sobre como transformar seu negócio?</h3>
                <p className="text-white/70 mb-0">
                  Agende uma demonstração gratuita e descubra como a Growth Funnels pode ajudar sua empresa a atingir novos patamares de crescimento.
                </p>
              </div>
              <div className="md:w-1/3">
                <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black">
                  Agendar Demonstração
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-white">Artigos Relacionados</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <div key={relatedPost.id} className="feature-card overflow-hidden rounded-xl group">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold mb-2 text-white line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <Link to={`/blog/${relatedPost.id}`}>
                        <Button variant="outline" size="sm" className="w-full mt-2 border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10">
                          Ler artigo
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
