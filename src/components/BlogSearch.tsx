
import React from 'react';
import { Search } from 'lucide-react';

interface BlogSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const BlogSearch = ({ searchTerm, setSearchTerm }: BlogSearchProps) => {
  return (
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
  );
};

export default BlogSearch;
