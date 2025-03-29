import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const competitors = [
    { name: 'GrowthFunnels', highlight: true },
    { name: 'Concorrente A' },
    { name: 'Concorrente B' },
  ];

  const features = [
    { name: 'Automação de Marketing', description: 'Automatize campanhas de marketing completas' },
    { name: 'Automação de Vendas', description: 'Gerencie todo o funil de vendas' },
    { name: 'Integrações Nativas', description: 'Conecte com outras ferramentas sem complicação' },
    { name: 'Suporte 24/7', description: 'Suporte técnico disponível a qualquer momento' },
    { name: 'Análise Avançada', description: 'Métricas detalhadas e insights acionáveis' },
  ];

  return (
    <section className="bg-black py-10 md:py-16 px-4 md:px-8 border-t border-[#d0ff00]/10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#d0ff00] text-black text-center px-4 py-6 md:py-8 rounded-t-xl">
          <h2 className="text-xl md:text-3xl font-semibold flex justify-center items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-black">GrowthFunnels</span>
            <span className="text-black">vs. Outras Soluções</span>
          </h2>
          <p className="text-sm md:text-base mt-2">
            Compare o custo e os recursos do <strong>GrowthFunnels</strong> com as alternativas do mercado
          </p>
        </div>

        <div className="bg-white/5 rounded-b-xl border border-[#d0ff00]/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="bg-white/5 border-b border-[#d0ff00]/10">
                  <th className="p-4 text-left font-medium text-white/90">Recursos</th>
                  {competitors.map((competitor, index) => (
                    <th 
                      key={index} 
                      className={`p-4 text-center font-medium ${competitor.highlight ? 'text-[#d0ff00]' : 'text-white/90'}`}
                    >
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'} border-b border-[#d0ff00]/10 hover:bg-white/[0.05] transition-colors`}
                  >
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{feature.name}</p>
                        <p className="text-sm text-white/70">{feature.description}</p>
                      </div>
                    </td>
                    {competitors.map((competitor, compIndex) => (
                      <td key={compIndex} className="p-4 text-center">
                        {competitor.highlight || compIndex === 0 ? (
                          <Check className="mx-auto h-5 w-5 text-[#d0ff00]" />
                        ) : (
                          compIndex === 1 && (index === 3 || index === 4) ? (
                            <X className="mx-auto h-5 w-5 text-red-500/70" />
                          ) : (
                            <Check className="mx-auto h-5 w-5 text-white/50" />
                          )
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-white/[0.02] border-t border-[#d0ff00]/10 text-center">
            <p className="text-sm text-white/70">
              Veja a comparação completa em nossa <a href="/pricing" className="text-[#d0ff00] hover:underline">página de preços</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
