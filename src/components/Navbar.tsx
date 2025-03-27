
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
          aria-label="GrowthFunnels Home"
        >
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-[#d0ff00] flex items-center justify-center text-black font-bold text-xl">
              G
            </div>
            <span className="text-white font-semibold ml-2 text-xl">Growth<span className="text-[#d0ff00]">Funnels</span></span>
          </div>
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
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-white hover:text-[#d0ff00] hover:bg-white/5">
              Login
            </Button>
          </Link>
          <Link to="/demo">
            <Button className="bg-[#d0ff00] hover:bg-[#b3e600] text-black font-medium">
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
            <div className="pt-4 flex flex-col space-y-3">
              <Link 
                to="/login" 
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="outline" className="w-full border-[#d0ff00]/30 text-white hover:bg-white/5">
                  Login
                </Button>
              </Link>
              <Link 
                to="/demo" 
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-[#d0ff00] hover:bg-[#b3e600] text-black">
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
