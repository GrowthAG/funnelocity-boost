
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-revcrm-gray-light py-16 px-4 md:px-8 border-t border-revcrm-gray-medium">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-revcrm-blue flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <span className="text-revcrm-black font-semibold ml-2 text-xl">RevCRM</span>
              </div>
            </Link>
            <p className="mt-4 text-revcrm-gray-dark max-w-md">
              Empower your sales team with our all-in-one CRM and marketing automation platform designed to streamline processes and boost revenue.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="GitHub" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-revcrm-black font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-revcrm-black font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Guides & Tutorials
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-revcrm-black font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-revcrm-gray-dark hover:text-revcrm-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-revcrm-gray-medium mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-revcrm-gray-dark text-sm">
            &copy; {new Date().getFullYear()} RevCRM. All rights reserved.
          </p>
          <p className="text-revcrm-gray-dark text-sm mt-4 md:mt-0">
            Made with ❤️ globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
