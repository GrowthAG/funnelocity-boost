
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
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="RevCRM Home"
        >
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-revcrm-blue flex items-center justify-center text-white font-bold text-xl">
              R
            </div>
            <span className="text-revcrm-black font-semibold ml-2 text-xl">RevCRM</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-revcrm-black hover:text-revcrm-blue transition-colors font-medium">
            Home
          </Link>
          <Link to="/features" className="text-revcrm-black hover:text-revcrm-blue transition-colors font-medium">
            Features
          </Link>
          <Link to="/pricing" className="text-revcrm-black hover:text-revcrm-blue transition-colors font-medium">
            Pricing
          </Link>
          <Link to="/about" className="text-revcrm-black hover:text-revcrm-blue transition-colors font-medium">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-revcrm-black hover:text-revcrm-blue hover:bg-revcrm-gray-light">
              Log in
            </Button>
          </Link>
          <Link to="/demo">
            <Button className="bg-revcrm-blue hover:bg-revcrm-blue-dark text-white font-medium">
              Try Demo
            </Button>
          </Link>
        </div>

        <button 
          className="md:hidden text-revcrm-black" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-6 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-revcrm-black hover:text-revcrm-blue transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-revcrm-black hover:text-revcrm-blue transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-revcrm-black hover:text-revcrm-blue transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-revcrm-black hover:text-revcrm-blue transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link 
                to="/login" 
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link 
                to="/demo" 
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-revcrm-blue hover:bg-revcrm-blue-dark text-white">
                  Try Demo
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
