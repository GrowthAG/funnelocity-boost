
import React from 'react';
import { Button } from '@/components/ui/button';

interface BlogCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const BlogCategories = ({ activeCategory, setActiveCategory }: BlogCategoriesProps) => {
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'crm', name: 'CRM' },
    { id: 'automations', name: 'Automações' },
    { id: 'ai', name: 'IA' },
    { id: 'funnels', name: 'Funis' },
    { id: 'traffic', name: 'Tráfego' },
    { id: 'case-study', name: 'Cases' }
  ];

  return (
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
  );
};

export default BlogCategories;
