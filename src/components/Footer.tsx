
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-growth-blue-deep py-16 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
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
            <p className="mt-4 text-white/70 max-w-md">
              Potencialize cada etapa da sua jornada de vendas com a plataforma completa de CRM e automação de marketing.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-white/70 hover:text-white transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/70 hover:text-white transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-white/70 hover:text-white transition-colors">
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-white/70 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-white/70 hover:text-white transition-colors">
                  Integrações
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-white/70 hover:text-white transition-colors">
                  Documentação
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-white/70 hover:text-white transition-colors">
                  Guias e Tutoriais
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-white/70 hover:text-white transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-white/70 hover:text-white transition-colors">
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/70 hover:text-white transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Growth Funnels. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Feito com ❤️ no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
