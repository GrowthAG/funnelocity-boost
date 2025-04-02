
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Affiliates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load the form script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Programa de Afiliados | Growth Funnels</title>
        <meta name="description" content="Ganhe até 30% de comissão recorrente indicando o Growth Funnels! Junte-se ao nosso programa de afiliados." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Headline Section */}
          <div className="text-center mb-12 max-w-5xl mx-auto">
            <div className="border-2 border-[#d0ff00] rounded-lg p-6 md:p-10 mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                Ganhe <span className="text-[#d0ff00]">até 30%</span> de comissão recorrente <br />
                indicando o Growth Funnels!
              </h1>
              <p className="text-lg md:text-xl text-white/80 mt-6">
                Junte-se ao nosso programa de afiliados e transforme suas indicações em uma renda recorrente! 
                A cada novo cliente que assinar o Growth Funnels através do seu link, você recebe até 30% de 
                comissão mensal – sem limite de ganhos. Aproveite essa oportunidade e comece a faturar agora!
              </p>
            </div>

            {/* Form Section */}
            <div className="bg-[#111111] rounded-2xl p-4 md:p-6 shadow-lg shadow-[#d0ff00]/5 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Cadastre-se como Afiliado</h2>
              
              <div className="h-[776px] max-w-3xl mx-auto">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/q7mjfjIATLeK055US6Rh"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '20px' }}
                  id="inline-q7mjfjIATLeK055US6Rh" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Cadastro de Afiliados"
                  data-height="776"
                  data-layout-iframe-id="inline-q7mjfjIATLeK055US6Rh"
                  data-form-id="q7mjfjIATLeK055US6Rh"
                  title="Cadastro de Afiliados"
                />
              </div>
            </div>
            
            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="bg-black/50 border border-[#d0ff00]/20 rounded-xl p-6 backdrop-blur-sm text-left">
                <div className="w-12 h-12 bg-[#d0ff00]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#d0ff00] text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Comissões Recorrentes</h3>
                <p className="text-white/70">Receba até 30% de comissão mensalmente por todo o tempo que seu indicado permanecer ativo.</p>
              </div>
              
              <div className="bg-black/50 border border-[#d0ff00]/20 rounded-xl p-6 backdrop-blur-sm text-left">
                <div className="w-12 h-12 bg-[#d0ff00]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#d0ff00] text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Materiais Prontos</h3>
                <p className="text-white/70">Acesso a banners, emails, textos e vídeos para promover o Growth Funnels de forma eficiente.</p>
              </div>
              
              <div className="bg-black/50 border border-[#d0ff00]/20 rounded-xl p-6 backdrop-blur-sm text-left">
                <div className="w-12 h-12 bg-[#d0ff00]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#d0ff00] text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Pagamentos Pontuais</h3>
                <p className="text-white/70">Receba seus pagamentos todo dia 15, sem atrasos e com relatórios detalhados de suas conversões.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Affiliates;
