
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Metrics from '../components/Metrics';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { replacementToolsData, totalSavingData } from '@/utils/dashboardData';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Define a function for checkout links
  const getCheckoutLink = (plan) => {
    const planLinks = {
      'PRO': 'https://checkout.growthfunnels.com.br/pro-mensal',
      'PLUS': 'https://checkout.growthfunnels.com.br/plus-mensal',
      'ENTERPRISE': 'https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd'
    };
    return planLinks[plan] || 'https://checkout.growthfunnels.com.br/pro-mensal';
  };
  
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main className="space-y-4 md:space-y-6 lg:space-y-8"> {/* Espaçamento reduzido entre seções */}
        <Hero />
        <Features />
        <Metrics />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#d0ff00]/30 my-16 md:my-24">
            <div className="bg-black text-white">
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src="https://growthfunnels.com.br/wp-content/uploads/2024/05/logo-growth-funnels.svg" 
                    alt="GrowthFunnels Logo" 
                    className="h-8 mr-2" 
                  />
                  <span className="text-xl font-bold">vs. Outras Soluções</span>
                </div>
                <p className="text-center text-white/70 mb-8">
                  Compare o custo e os recursos do GrowthFunnels com as alternativas do mercado
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#d0ff00] text-black">
                      <th className="py-4 px-6 text-left font-bold">Ferramentas</th>
                      <th className="py-4 px-6 text-center font-bold">Substitui</th>
                      <th className="py-4 px-6 text-right font-bold">Valor</th>
                      <th className="py-4 px-2 text-center w-12 font-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {replacementToolsData.map((tool, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-white/10 hover:bg-white/5 transition-colors ${index % 2 === 0 ? 'bg-black/60' : 'bg-black/30'}`}
                      >
                        <td className="py-4 px-6 text-left">{tool.name}</td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-2 justify-center">
                            {tool.tools && tool.tools.map((toolName, i) => (
                              <div 
                                key={i} 
                                className="bg-white/10 rounded-md px-2 py-1 text-xs"
                              >
                                {toolName}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right font-medium">{tool.value}</td>
                        <td className="py-4 px-2 text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#d0ff00] inline-block"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-[#d0ff00] bg-black/80">
                      <td className="py-5 px-6 text-left font-bold text-xl">Total</td>
                      <td className="py-5 px-6"></td>
                      <td className="py-5 px-6 text-right font-bold text-xl text-[#d0ff00]">{totalSavingData}</td>
                      <td className="py-5 px-2 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#d0ff00] inline-block"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 mb-12 grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-black/30 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-white">O que você substituirá:</h3>
                  <p className="text-white/70">
                    Lista de ferramentas que serão substituídas pelo GrowthFunnels, ajudando a otimizar seu orçamento e simplificar sua stack de marketing e vendas.
                  </p>
                </div>

                <div className="p-6 bg-black/30 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-white">Com GrowthFunnels você paga:</h3>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-white/70 mb-2">A partir de:</p>
                    <div className="flex items-center justify-center">
                      <img 
                        src="https://growthfunnels.com.br/wp-content/uploads/2024/05/logo-growth-funnels.svg" 
                        alt="GrowthFunnels Logo" 
                        className="h-8 mr-2" 
                      />
                     <span className="text-3xl font-bold text-[#d0ff00]">R$ 497</span>
                     <span className="text-white/70">/mês</span>
                    </div>
                    <p className="text-sm text-white/70 mt-1"></p>
                    
                    <div className="flex items-center justify-center mt-4 mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#d0ff00] mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      <span className="text-white">Todos os recursos em uma única plataforma</span>
                    </div>
                    
                    <div className="mt-4">
                      <a 
                        href={getCheckoutLink('PRO')} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full"
                      >
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 text-base w-full py-3 bg-[#d0ff00] text-black hover:bg-[#c5f000] shadow-md shadow-[#d0ff00]/20 hover:shadow-lg hover:shadow-[#d0ff00]/30">
                          Contratar Plano PRO
                        </button>
                      </a>
                    </div>
                    
                    <div className="mt-4 bg-[#d0ff00]/10 rounded-full py-1 px-4 inline-block">
                      <span className="text-[#d0ff00] font-medium text-sm">Economize 90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
