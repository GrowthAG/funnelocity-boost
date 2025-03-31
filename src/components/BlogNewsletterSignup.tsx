
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BlogNewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido para se inscrever.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating subscription API call
    setTimeout(() => {
      toast({
        title: "Inscrição realizada!",
        description: "Você está inscrito para receber nossos artigos e novidades.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="mt-24 p-10 rounded-xl bg-[#d0ff00]/10 border border-[#d0ff00]/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Receba nossos artigos</h3>
          <p className="text-white/70 mb-0">
            Inscreva-se para receber as últimas novidades, dicas e estratégias para impulsionar seu crescimento.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-[#d0ff00]/20 text-white focus:outline-none focus:border-[#d0ff00]"
            required
          />
          <Button 
            type="submit" 
            className="bg-[#d0ff00] hover:bg-[#b3e600] text-black whitespace-nowrap"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processando...' : 'Inscrever-se'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BlogNewsletterSignup;
