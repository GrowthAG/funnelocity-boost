
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPostType } from '@/types/blog';

interface BlogCardProps {
  post: BlogPostType;
  formatDate: (dateString: string) => string;
}

const BlogCard = ({ post, formatDate }: BlogCardProps) => {
  return (
    <div className="feature-card overflow-hidden rounded-xl flex flex-col h-full group hover:shadow-lg transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-[#d0ff00] text-black text-xs font-semibold px-3 py-1 rounded-full">
          {post.category === 'crm' ? 'CRM' : 
           post.category === 'automations' ? 'Automações' :
           post.category === 'ai' ? 'IA' :
           post.category === 'funnels' ? 'Funis' :
           post.category === 'traffic' ? 'Tráfego' :
           post.category === 'case-study' ? 'Cases' : post.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white line-clamp-2 hover:text-[#d0ff00] transition-colors">
          {post.title}
        </h3>
        <p className="text-white/70 mb-5 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center mb-5">
          <Avatar className="h-10 w-10 mr-3 border border-[#d0ff00]/30">
            {post.authorImage ? (
              <AvatarImage src={post.authorImage} alt={post.author} />
            ) : (
              <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
            )}
          </Avatar>
          <div className="flex-1">
            <div className="text-white text-sm font-medium">{post.author}</div>
            <div className="flex items-center text-white/50 text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              <span className="mr-2">{formatDate(post.date)}</span>
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        <Link to={`/blog/${post.id}`} className="mt-auto">
          <Button variant="outline" className="w-full border-[#d0ff00]/30 text-[#d0ff00] hover:bg-[#d0ff00]/10 transition-colors">
            Ler mais <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
