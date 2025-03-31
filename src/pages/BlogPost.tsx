
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts, featuredPost } from '@/data/blogData';
import { rmitalineaCase } from '@/data/rmitalineaCase';
import { BlogPostType } from '@/types/blog';
import ShareButtons from '@/components/ShareButtons';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add the new RM Italínea case study to the blog posts
    const allBlogPosts = [rmitalineaCase, ...blogPosts];
    
    const postId = parseInt(id || '0');
    if (postId === featuredPost.id) {
      // Add missing social media links if they don't exist
      const completePost = {
        ...featuredPost,
        socialShare: {
          ...featuredPost.socialShare,
          whatsapp: featuredPost.socialShare.whatsapp || '#',
          telegram: featuredPost.socialShare.telegram || '#'
        }
      };
      setPost(completePost);
    } else {
      const foundPost = allBlogPosts.find(post => post.id === postId);
      if (foundPost) {
        // Add missing social media links if they don't exist
        const completePost = {
          ...foundPost,
          socialShare: {
            ...foundPost.socialShare,
            whatsapp: foundPost.socialShare.whatsapp || '#',
            telegram: foundPost.socialShare.telegram || '#'
          }
        };
        setPost(completePost);
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Social share buttons - Top */}
            <div className="mb-8">
              <ShareButtons 
                url={window.location.href} 
                title={post.title} 
                compact={true} 
              />
            </div>
            
            <div className="flex items-center mb-8">
              <Avatar className="h-16 w-16 mr-4 border-2 border-[#d0ff00]/30">
                {post.authorImage ? (
                  <AvatarImage src={post.authorImage} alt={post.author} />
                ) : (
                  <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                )}
              </Avatar>
              <div>
                <div className="text-white font-medium text-lg">{post.author}</div>
                {post.authorBio && (
                  <div className="text-white/70 text-sm max-w-md">{post.authorBio}</div>
                )}
                <div className="flex items-center text-white/60 text-sm mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{formatDate(post.date)}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="post-content prose prose-invert prose-lg max-w-none mb-12 leading-relaxed space-y-6"
               dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }} />
          
          {/* Social share buttons - Bottom */}
          <div className="border-t border-white/10 pt-8 mt-16">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <h3 className="text-xl font-bold text-white mb-4 sm:mb-0">Compartilhe este artigo:</h3>
              <ShareButtons url={window.location.href} title={post.title} />
            </div>
          </div>
          
          {/* Author Bio Box - Bottom */}
          <div className="mt-12 p-8 rounded-xl bg-white/5 border border-white/10">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Avatar className="h-24 w-24 border-2 border-[#d0ff00]/30">
                {post.authorImage ? (
                  <AvatarImage src={post.authorImage} alt={post.author} />
                ) : (
                  <AvatarFallback className="text-xl">{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                )}
              </Avatar>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Sobre o autor</h3>
                <h4 className="text-lg font-medium text-[#d0ff00] mb-2">{post.author}</h4>
                <div className="text-white/80">
                  {post.authorBio}
                </div>
                <div className="flex gap-3 mt-4">
                  <a href="https://linkedin.com/in/jhonnasmello" target="_blank" rel="noopener noreferrer" 
                    className="text-white/60 hover:text-[#d0ff00]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://twitter.com/jhonnasmello" target="_blank" rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#d0ff00]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
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
              {[...blogPosts, rmitalineaCase]
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <div key={relatedPost.id} className="feature-card overflow-hidden rounded-xl group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {relatedPost.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-lg font-bold mb-4 text-white line-clamp-2 hover:text-[#d0ff00] transition-colors">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center mb-5">
                        <Avatar className="h-8 w-8 mr-3 border border-[#d0ff00]/30">
                          {relatedPost.authorImage ? (
                            <AvatarImage src={relatedPost.authorImage} alt={relatedPost.author} />
                          ) : (
                            <AvatarFallback>{relatedPost.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                          )}
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-white text-sm">{relatedPost.author}</span>
                          <span className="text-white/50 text-xs">{formatDate(relatedPost.date)}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${relatedPost.id}`}>
                        <Button variant="outline" size="sm" className="w-full border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10">
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
