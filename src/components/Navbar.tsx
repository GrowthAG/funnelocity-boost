
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
        scrolled ? "bg-black/95 backdrop-blur-sm border-b border-[#d0ff00]/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Funnels Home"
        >
          {/* Updated logo with better visibility on dark backgrounds */}
          <img 
            src="/lovable-uploads/3a771a88-69f5-4e59-a54e-cc23daedc64e.png" 
            alt="Funnels Logo" 
            className="h-8 md:h-10 filter brightness-150 contrast-125"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-[#d0ff00] transition-colors font-medium">
            Home
          </Link>
          <Link to="/features" className="text-white hover:text-[#d0ff00] transition-colors font-medium">
            Funcionalidades
          </Link>
          <Link to="/pricing" className="text-white hover:text-[#d0ff00] transition-colors font-medium">
            Preços
          </Link>
          <Link to="/about" className="text-white hover:text-[#d0ff00] transition-colors font-medium">
            Sobre Nós
          </Link>
          <Link to="/blog" className="text-white hover:text-[#d0ff00] transition-colors font-medium">
            Blog
          </Link>
          <a href="https://www.afiliados.growthfunnels.com.br" className="text-white hover:text-[#d0ff00] transition-colors font-medium">
            Afiliados
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://app.growthfunnels.com.br/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-white hover:text-[#d0ff00] hover:bg-white/5">
              Login
            </Button>
          </a>
          <a href="https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#d0ff00] hover:bg-[#b3e600] text-black font-medium">
              Agendar Demo
            </Button>
          </a>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-t border-[#d0ff00]/10 py-6 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-[#d0ff00] transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-white hover:text-[#d0ff00] transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link 
              to="/pricing" 
              className="text-white hover:text-[#d0ff00] transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Preços
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-[#d0ff00] transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/blog" 
              className="text-white hover:text-[#d0ff00] transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <a 
              href="https://growthfunnels.com.br/afiliados" 
              className="text-white hover:text-[#d0ff00] transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Afiliados
            </a>
            <Link 
              to="/privacy" 
              className="text-white hover:text-[#d0ff00] transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Privacidade
            </Link>
            <Link 
              to="/terms" 
              className="text-white hover:text-[#d0ff00] transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Termos
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <a 
                href="https://app.growthfunnels.com.br/" 
                className="w-full"
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full border-[#d0ff00]/30 text-white hover:bg-white/5">
                  Login
                </Button>
              </a>
              <a 
                href="https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd" 
                className="w-full"
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black">
                  Agendar Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
