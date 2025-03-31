
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogSocialFollow = () => {
  return (
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
  );
};

export default BlogSocialFollow;
