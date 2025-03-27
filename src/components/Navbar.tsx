
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-4 md:px-8",
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-growth-green/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="GrowthFunnels Home"
        >
          <div className="group relative transition-all duration-300">
            <div className={cn(
              "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg overflow-hidden transition-all duration-300",
              scrolled ? "bg-black/60 shadow-[0_0_15px_rgba(207,15,0,0.3)]" : "bg-black/30"
            )}>
              <img 
                src="/lovable-uploads/f08c6356-9c67-4e4d-8373-5cfd85f5e2f4.png" 
                alt="GrowthFunnels Logo" 
                className="h-7 md:h-8 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-growth-green/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-white/80 hover:text-growth-green transition-colors">
            Funcionalidades
          </Link>
          <Link to="/pricing" className="text-white/80 hover:text-growth-green transition-colors">
            Preços
          </Link>
          <Link to="/cases" className="text-white/80 hover:text-growth-green transition-colors">
            Cases
          </Link>
          <Link to="/blog" className="text-white/80 hover:text-growth-green transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-white/80 hover:text-growth-green transition-colors">
            Sobre
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="border border-growth-green/30 text-growth-green hover:bg-growth-green/10">
              Login
            </Button>
          </Link>
          <Link to="/demo">
            <Button className="bg-gradient-to-r from-growth-green to-growth-green-hover text-black hover:opacity-90">
              Agendar Demo
            </Button>
          </Link>
        </div>

        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-growth-green/10 py-6 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="text-white/80 hover:text-growth-green transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link 
              to="/pricing" 
              className="text-white/80 hover:text-growth-green transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Preços
            </Link>
            <Link 
              to="/cases" 
              className="text-white/80 hover:text-growth-green transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Cases
            </Link>
            <Link 
              to="/blog" 
              className="text-white/80 hover:text-growth-green transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="text-white/80 hover:text-growth-green transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link 
                to="/login" 
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="outline" className="w-full border border-growth-green/30 text-growth-green hover:bg-growth-green/10">
                  Login
                </Button>
              </Link>
              <Link 
                to="/demo" 
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-gradient-to-r from-growth-green to-growth-green-hover text-black hover:opacity-90">
                  Agendar Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
