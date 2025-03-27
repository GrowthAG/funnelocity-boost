
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Política de Privacidade</h1>
            <p className="text-white/70">Última atualização: 01 de Setembro de 2023</p>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/80 mb-6">
              A Growth Funnels ("nós", "nossos" ou "empresa") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nosso site e serviços ("Serviços").
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Informações que Coletamos</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">1.1 Informações Fornecidas por Você</h3>
            <p className="text-white/80 mb-4">
              Podemos coletar informações que você nos fornece diretamente, incluindo:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6">
              <li>Informações de registro: nome, endereço de e-mail, telefone, cargo, empresa</li>
              <li>Informações de perfil e preferências</li>
              <li>Informações de pagamento</li>
              <li>Comunicações e feedback</li>
              <li>Dados importados de outras plataformas (com sua permissão)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">1.2 Informações Coletadas Automaticamente</h3>
            <p className="text-white/80 mb-4">
              Quando você usa nossos Serviços, podemos coletar automaticamente:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6">
              <li>Dados de uso e interação com a plataforma</li>
              <li>Informações do dispositivo e navegador</li>
              <li>Endereço IP e localização aproximada</li>
              <li>Cookies e tecnologias similares</li>
              <li>Dados de desempenho e erros</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Como Usamos Suas Informações</h2>
            <p className="text-white/80 mb-4">
              Usamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6">
              <li>Fornecer, manter e melhorar nossos Serviços</li>
              <li>Processar transações e gerenciar sua conta</li>
              <li>Enviar comunicações administrativas e de suporte</li>
              <li>Personalizar sua experiência</li>
              <li>Analisar tendências e monitorar a eficácia de nossos Serviços</li>
              <li>Detectar, prevenir e solucionar problemas técnicos e de segurança</li>
              <li>Cumprir obrigações legais</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Compartilhamento de Informações</h2>
            <p className="text-white/80 mb-4">
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6">
              <li>Prestadores de serviços que nos auxiliam na operação de nossos Serviços</li>
              <li>Parceiros de negócios, com seu consentimento</li>
              <li>Autoridades reguladoras, órgãos governamentais e outras partes quando exigido por lei</li>
              <li>Terceiros em caso de reorganização empresarial, fusão ou venda</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Suas Escolhas e Direitos</h2>
            <p className="text-white/80 mb-4">
              Você tem certos direitos relacionados às suas informações pessoais:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6">
              <li>Acesso e atualização de suas informações através da sua conta</li>
              <li>Opção de não receber comunicações de marketing</li>
              <li>Solicitar exclusão de seus dados, sujeito a certas limitações</li>
              <li>Controle sobre cookies através das configurações do seu navegador</li>
              <li>Direitos específicos dependendo da sua localização (LGPD, GDPR, CCPA)</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Segurança de Dados</h2>
            <p className="text-white/80 mb-6">
              Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda acidental ou alteração. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Retenção de Dados</h2>
            <p className="text-white/80 mb-6">
              Mantemos suas informações apenas pelo tempo necessário para fornecer os Serviços solicitados e cumprir nossas obrigações legais. Quando não precisamos mais processar suas informações, as excluímos ou anonimizamos.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">7. Transferências Internacionais</h2>
            <p className="text-white/80 mb-6">
              Suas informações podem ser transferidas e processadas em países diferentes daquele em que você reside. Esses países podem ter leis de proteção de dados diferentes das leis do seu país. Ao usar nossos Serviços, você concorda com a transferência de suas informações para esses países.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">8. Menores de Idade</h2>
            <p className="text-white/80 mb-6">
              Nossos Serviços não se destinam a menores de 18 anos e não coletamos intencionalmente informações pessoais de menores de 18 anos. Se acreditamos que coletamos informações de menores, tomaremos medidas para excluir essas informações.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">9. Alterações a esta Política</h2>
            <p className="text-white/80 mb-6">
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente será publicada em nosso site com a data de "última atualização". Seu uso contínuo dos Serviços após tais alterações constitui sua aceitação da Política revisada.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">10. Entre em Contato</h2>
            <p className="text-white/80 mb-6">
              Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas, entre em contato conosco em <a href="mailto:privacidade@growthfunnels.com.br" className="text-[#d0ff00] hover:underline">privacidade@growthfunnels.com.br</a> ou:
            </p>
            <p className="text-white/80 mb-10">
              Growth Funnels<br />
              Av. Paulista, 1374, 11º andar<br />
              São Paulo - SP, 01310-100<br />
              Brasil
            </p>
            
            <div className="border-t border-white/10 pt-8 mt-16">
              <p className="text-white/60 text-center">
                Ao usar nossos Serviços, você reconhece que leu e compreendeu esta Política de Privacidade.
              </p>
              <div className="mt-8 text-center">
                <Link to="/terms" className="text-[#d0ff00] hover:underline">
                  Veja também nossos Termos de Serviço
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
