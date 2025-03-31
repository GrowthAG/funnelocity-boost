
import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, MessageCircle, Copy, CheckCircle2, Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ShareButtonsProps {
  url: string;
  title: string;
  compact?: boolean;
}

const ShareButtons = ({ url, title, compact = false }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const getShareUrl = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
      case 'telegram':
        return `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
      default:
        return '#';
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast({
      title: "Link copiado!",
      description: "O link do artigo foi copiado para a área de transferência",
      duration: 3000,
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const buttonSize = compact ? 'w-8 h-8' : 'w-10 h-10';
  const iconSize = compact ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div className={`flex ${compact ? 'flex-wrap' : 'flex-col sm:flex-row'} items-center gap-3 ${compact ? 'p-3 bg-white/5 rounded-lg' : ''}`}>
      {!compact && <span className="text-white/80 text-sm font-medium flex items-center whitespace-nowrap">
        <Share2 className="mr-2 h-4 w-4" /> Compartilhar:
      </span>}
      <div className="flex flex-wrap gap-2">
        <a href={getShareUrl('linkedin')} target="_blank" rel="noopener noreferrer" 
          className={`inline-flex items-center justify-center ${buttonSize} rounded-full bg-[#0A66C2] hover:bg-[#08518a] transition-colors`}
          aria-label="Compartilhar no LinkedIn">
          <Linkedin className={`${iconSize} text-white`} />
        </a>
        <a href={getShareUrl('twitter')} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center justify-center ${buttonSize} rounded-full bg-[#1DA1F2] hover:bg-[#0c85d0] transition-colors`}
          aria-label="Compartilhar no Twitter">
          <Twitter className={`${iconSize} text-white`} />
        </a>
        <a href={getShareUrl('facebook')} target="_blank" rel="noopener noreferrer" 
          className={`inline-flex items-center justify-center ${buttonSize} rounded-full bg-[#1877F2] hover:bg-[#0e5fb6] transition-colors`}
          aria-label="Compartilhar no Facebook">
          <Facebook className={`${iconSize} text-white`} />
        </a>
        <a href={getShareUrl('whatsapp')} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center justify-center ${buttonSize} rounded-full bg-[#25D366] hover:bg-[#128C7E] transition-colors`}
          aria-label="Compartilhar no WhatsApp">
          <MessageCircle className={`${iconSize} text-white`} />
        </a>
        <a href={getShareUrl('telegram')} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center justify-center ${buttonSize} rounded-full bg-[#0088cc] hover:bg-[#006699] transition-colors`}
          aria-label="Compartilhar no Telegram">
          <MessageCircle className={`${iconSize} text-white`} />
        </a>
        <button onClick={copyToClipboard}
          className={`inline-flex items-center justify-center ${buttonSize} rounded-full bg-white/20 hover:bg-white/30 transition-colors`}
          aria-label="Copiar link">
          {copied ? <CheckCircle2 className={`${iconSize} text-[#d0ff00]`} /> : <Copy className={`${iconSize} text-white`} />}
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
