
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold mb-6 text-growth-blue-electric">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Página não encontrada</h2>
        <p className="text-lg text-white/70 mb-8">
          Parece que você se perdeu no caminho. A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button size="lg" className="btn-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
