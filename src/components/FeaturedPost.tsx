
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPostType } from '@/types/blog';

interface FeaturedPostProps {
  post: BlogPostType;
  formatDate: (dateString: string) => string;
}

const FeaturedPost = ({ post, formatDate }: FeaturedPostProps) => {
  return (
    <div className="mb-16 feature-card overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative h-72 lg:h-full overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-[#d0ff00] text-black text-xs font-semibold px-3 py-1 rounded-full">
            Destaque
          </div>
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white hover:text-[#d0ff00] transition-colors">
              {post.title}
            </h2>
            <p className="text-white/70 text-lg mb-6">
              {post.excerpt}
            </p>
          </div>
          <div>
            <div className="flex items-center mb-6">
              <Avatar className="h-12 w-12 mr-4 border-2 border-[#d0ff00]/30">
                {post.authorImage ? (
                  <AvatarImage src={post.authorImage} alt={post.author} />
                ) : (
                  <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                )}
              </Avatar>
              <div>
                <div className="text-white text-sm font-medium">{post.author}</div>
                <div className="text-white/50 text-xs mt-1 max-w-[250px] truncate">{post.authorBio}</div>
                <div className="flex items-center text-white/50 text-xs mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-2">{formatDate(post.date)}</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            <Link to={`/blog/${post.id}`}>
              <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black shadow-md hover:shadow-lg transition-all">
                Ler artigo completo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
