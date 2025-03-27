
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
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <div className="font-display font-bold text-white flex items-center">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-growth-green rounded-md -rotate-45 transform translate-x-[2px] translate-y-[2px]"></div>
              <div className="absolute inset-0 bg-black rounded-md -rotate-45 flex items-center justify-center">
                <span className="text-growth-green font-bold text-lg">F</span>
              </div>
            </div>
            <span className="ml-2 text-xl tracking-tight">Growth Funnels</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-white/80 hover:text-white transition-colors">
            Funcionalidades
          </Link>
          <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">
            Preços
          </Link>
          <Link to="/cases" className="text-white/80 hover:text-white transition-colors">
            Cases
          </Link>
          <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">
            Sobre
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="border border-white/20 text-white hover:bg-white/10">
              Login
            </Button>
          </Link>
          <Link to="/demo">
            <Button className="bg-growth-blue-electric text-white hover:bg-growth-blue-electric/90">
              Agendar Demo
            </Button>
          </Link>
        </div>

        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 py-6 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link 
              to="/pricing" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Preços
            </Link>
            <Link 
              to="/cases" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Cases
            </Link>
            <Link 
              to="/blog" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white transition-colors py-2"
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
                <Button variant="outline" className="w-full border border-white/20 text-white hover:bg-white/10">
                  Login
                </Button>
              </Link>
              <Link 
                to="/demo" 
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-growth-blue-electric text-white hover:bg-growth-blue-electric/90">
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
