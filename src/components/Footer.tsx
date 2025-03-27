
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 px-4 md:px-8 border-t border-[#d0ff00]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/3a771a88-69f5-4e59-a54e-cc23daedc64e.png" 
                alt="Growth Funnels Logo" 
                className="h-10"
              />
            </Link>
            <p className="mt-4 text-white/70 max-w-md">
              Plataforma completa de CRM, automação de marketing e geração de demanda criada para centralizar sua operação, automatizar processos e impulsionar seu crescimento.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/growthfunnels.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/105143227" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <a href="https://checkout.growthfunnels.com.br/pro" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Contratar PRO <span className="text-[#d0ff00] text-xs">(garantia de 14 dias)</span>
                </a>
              </li>
              <li>
                <a href="https://growthfunnels.com.br/afiliados" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Programa de Afiliados
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <a href="https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Agendar Demonstração
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:suporte@growthfunnels.com.br" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="https://app.growthfunnels.com.br/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Login
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-[#d0ff00] transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#d0ff00]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Growth Funnels. Todos os direitos reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <a href="https://www.instagram.com/growthfunnels.com.br/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#d0ff00] transition-colors flex items-center gap-2">
              <Instagram size={16} /> Instagram
            </a>
            <a href="https://www.linkedin.com/company/105143227" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#d0ff00] transition-colors flex items-center gap-2">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
