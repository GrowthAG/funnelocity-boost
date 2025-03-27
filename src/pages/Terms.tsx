
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Termos de Serviço</h1>
            <p className="text-white/70">Última atualização: 01 de Setembro de 2023</p>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/80 mb-6">
              Bem-vindo à Growth Funnels. Estes Termos de Serviço ("Termos") regem seu acesso e uso do site, aplicativos e serviços da Growth Funnels ("Serviços"). Ao acessar ou usar nossos Serviços, você concorda com estes Termos. Se você não concordar, não acesse ou utilize nossos Serviços.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Definições</h2>
            <ul className="list-disc pl-6 text-white/80 mb-6">
              <li><strong>"Conta"</strong> refere-se à sua conta registrada para uso dos Serviços.</li>
              <li><strong>"Conteúdo"</strong> refere-se a qualquer texto, imagens, vídeos, áudio, ou outros materiais que aparecem nos Serviços.</li>
              <li><strong>"Usuário"</strong> refere-se a qualquer indivíduo que acesse ou utilize os Serviços.</li>
              <li><strong>"Assinatura"</strong> refere-se ao plano pago que permite acesso a recursos específicos dos Serviços.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Criação de Conta e Responsabilidades</h2>
            <p className="text-white/80 mb-4">
              2.1 <strong>Elegibilidade.</strong> Você deve ter pelo menos 18 anos e capacidade legal para concordar com estes Termos.
            </p>
            <p className="text-white/80 mb-4">
              2.2 <strong>Informações da Conta.</strong> Você deve fornecer informações precisas e completas ao criar sua Conta e mantê-las atualizadas.
            </p>
            <p className="text-white/80 mb-4">
              2.3 <strong>Segurança da Conta.</strong> Você é responsável por manter a confidencialidade de suas credenciais e por todas as atividades que ocorrem em sua Conta.
            </p>
            <p className="text-white/80 mb-4">
              2.4 <strong>Uso por Múltiplos Usuários.</strong> Se você está registrando uma Conta em nome de uma entidade jurídica, você garante que tem autoridade para vincular essa entidade a estes Termos.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Assinaturas e Pagamentos</h2>
            <p className="text-white/80 mb-4">
              3.1 <strong>Planos de Assinatura.</strong> A Growth Funnels oferece vários planos de assinatura com diferentes funcionalidades e limitações.
            </p>
            <p className="text-white/80 mb-4">
              3.2 <strong>Renovação Automática.</strong> As Assinaturas são renovadas automaticamente no final de cada período, a menos que canceladas conforme descrito nestes Termos.
            </p>
            <p className="text-white/80 mb-4">
              3.3 <strong>Alterações nos Preços.</strong> Podemos modificar os preços dos planos a qualquer momento, mas forneceremos aviso prévio de pelo menos 30 dias antes que tais alterações entrem em vigor.
            </p>
            <p className="text-white/80 mb-4">
              3.4 <strong>Reembolsos.</strong> Oferecemos uma garantia de reembolso de 14 dias a partir da data da sua primeira assinatura. Após este período, pagamentos são não reembolsáveis, exceto quando exigido por lei.
            </p>
            <p className="text-white/80 mb-4">
              3.5 <strong>Impostos.</strong> Os valores apresentados não incluem impostos, a menos que expressamente indicado. Você é responsável por pagar todos os impostos aplicáveis.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Uso dos Serviços</h2>
            <p className="text-white/80 mb-4">
              4.1 <strong>Licença Limitada.</strong> A Growth Funnels concede a você uma licença limitada, não exclusiva, não transferível para acessar e usar os Serviços de acordo com estes Termos.
            </p>
            <p className="text-white/80 mb-4">
              4.2 <strong>Limitações de Uso.</strong> Você concorda em não:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6">
              <li>Usar os Serviços para atividades ilegais ou violar direitos de terceiros</li>
              <li>Tentar acessar, manipular ou usar áreas não públicas dos Serviços</li>
              <li>Contornar medidas utilizadas para prevenir ou restringir acesso aos Serviços</li>
              <li>Enviar malware ou código malicioso</li>
              <li>Tentar testar a vulnerabilidade dos nossos sistemas</li>
              <li>Interferir ou interromper a integridade ou desempenho dos Serviços</li>
              <li>Revender, sublicenciar ou distribuir os Serviços</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Conteúdo</h2>
            <p className="text-white/80 mb-4">
              5.1 <strong>Seu Conteúdo.</strong> Você mantém todos os direitos sobre qualquer Conteúdo que você enviar, publicar ou exibir nos Serviços.
            </p>
            <p className="text-white/80 mb-4">
              5.2 <strong>Licença para a Growth Funnels.</strong> Você concede à Growth Funnels uma licença mundial, não exclusiva, sublicenciável para usar, reproduzir, modificar, distribuir e exibir seu Conteúdo unicamente para fornecer, promover e melhorar os Serviços.
            </p>
            <p className="text-white/80 mb-4">
              5.3 <strong>Conteúdo Proibido.</strong> Você não deve criar, carregar ou compartilhar qualquer Conteúdo que:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6">
              <li>Viole direitos de propriedade intelectual</li>
              <li>Seja ilegal, difamatório, obsceno ou ofensivo</li>
              <li>Contenha malware ou código malicioso</li>
              <li>Viole privacidade ou direitos de terceiros</li>
              <li>Seja spam ou conteúdo comercial não solicitado</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Propriedade Intelectual</h2>
            <p className="text-white/80 mb-4">
              6.1 <strong>Propriedade da Growth Funnels.</strong> A Growth Funnels e seus licenciadores possuem todos os direitos, título e interesse nos Serviços, incluindo todos os direitos de propriedade intelectual relacionados.
            </p>
            <p className="text-white/80 mb-4">
              6.2 <strong>Sugestões e Feedback.</strong> Se você fornecer sugestões ou feedback sobre os Serviços, podemos usar essas informações sem obrigação para você.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">7. Confidencialidade e Dados do Cliente</h2>
            <p className="text-white/80 mb-4">
              7.1 <strong>Dados do Cliente.</strong> A Growth Funnels trata todos os dados dos clientes como confidenciais e não os utilizará para fins além dos descritos em nossa Política de Privacidade.
            </p>
            <p className="text-white/80 mb-4">
              7.2 <strong>Segurança.</strong> Implementamos medidas de segurança para proteger seus dados, porém nenhum sistema é completamente seguro. Você é responsável por manter a segurança de sua Conta.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">8. Termos de Integração e APIs</h2>
            <p className="text-white/80 mb-4">
              8.1 <strong>APIs e Integrações.</strong> Ao utilizar nossas APIs ou integrações com serviços de terceiros, você concorda com quaisquer termos adicionais específicos para essas funcionalidades.
            </p>
            <p className="text-white/80 mb-4">
              8.2 <strong>Serviços de Terceiros.</strong> Nossos Serviços podem conter links ou integrações com serviços de terceiros. Não somos responsáveis pelo conteúdo ou práticas desses serviços.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">9. Término</h2>
            <p className="text-white/80 mb-4">
              9.1 <strong>Seu Direito de Cancelar.</strong> Você pode cancelar sua Conta a qualquer momento através das configurações da conta ou entrando em contato com o suporte.
            </p>
            <p className="text-white/80 mb-4">
              9.2 <strong>Nosso Direito de Suspender ou Encerrar.</strong> Podemos suspender ou encerrar seu acesso aos Serviços se você violar estes Termos ou se não pagarmos taxas devidas.
            </p>
            <p className="text-white/80 mb-4">
              9.3 <strong>Efeitos do Término.</strong> Após o término, seu direito de acessar os Serviços cessará imediatamente. Podemos excluir seus dados após um período razoável, exceto quando proibido por lei.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">10. Garantias e Limitações de Responsabilidade</h2>
            <p className="text-white/80 mb-4">
              10.1 <strong>Serviços "Como Estão".</strong> Os Serviços são fornecidos "como estão" e "conforme disponíveis" sem garantias de qualquer tipo, expressas ou implícitas.
            </p>
            <p className="text-white/80 mb-4">
              10.2 <strong>Limitação de Responsabilidade.</strong> Em nenhuma circunstância a Growth Funnels será responsável por danos indiretos, incidentais, especiais, consequenciais ou punitivos.
            </p>
            <p className="text-white/80 mb-4">
              10.3 <strong>Limite de Valor.</strong> Nossa responsabilidade total perante você não excederá o maior valor entre: (a) o valor pago por você pelos Serviços nos 12 meses anteriores ao evento que deu origem à responsabilidade, ou (b) R$ 1.000,00.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">11. Indenização</h2>
            <p className="text-white/80 mb-6">
              Você concorda em indenizar e manter a Growth Funnels e seus diretores, funcionários e agentes isentos de qualquer reivindicação, responsabilidade, dano, perda e despesa relacionados à sua violação destes Termos ou uso indevido dos Serviços.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">12. Alterações aos Termos</h2>
            <p className="text-white/80 mb-6">
              Podemos modificar estes Termos a qualquer momento. As alterações entrarão em vigor após publicação nos Serviços, exceto para alterações materiais, que entrarão em vigor 30 dias após a publicação. Seu uso continuado dos Serviços após as alterações constituirá sua aceitação dos Termos revisados.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">13. Disposições Gerais</h2>
            <p className="text-white/80 mb-4">
              13.1 <strong>Lei Aplicável.</strong> Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições sobre conflitos de leis.
            </p>
            <p className="text-white/80 mb-4">
              13.2 <strong>Resolução de Disputas.</strong> Qualquer disputa decorrente ou relacionada a estes Termos será resolvida exclusivamente nos tribunais da comarca de São Paulo, SP.
            </p>
            <p className="text-white/80 mb-4">
              13.3 <strong>Acordo Integral.</strong> Estes Termos constituem o acordo integral entre você e a Growth Funnels relacionado ao uso dos Serviços.
            </p>
            <p className="text-white/80 mb-4">
              13.4 <strong>Renúncia e Independência das Cláusulas.</strong> A falha da Growth Funnels em exercer qualquer direito não constituirá renúncia. Se qualquer disposição destes Termos for considerada inválida, as demais disposições permanecerão em pleno vigor e efeito.
            </p>
            <p className="text-white/80 mb-4">
              13.5 <strong>Cessão.</strong> Você não pode ceder estes Termos sem o consentimento prévio por escrito da Growth Funnels. A Growth Funnels pode ceder estes Termos sem restrições.
            </p>
            <p className="text-white/80 mb-4">
              13.6 <strong>Força Maior.</strong> A Growth Funnels não será responsável por falhas ou atrasos devido a circunstâncias além de seu controle razoável.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">14. Contato</h2>
            <p className="text-white/80 mb-6">
              Se você tiver dúvidas sobre estes Termos, entre em contato conosco em <a href="mailto:juridico@growthfunnels.com.br" className="text-[#d0ff00] hover:underline">juridico@growthfunnels.com.br</a> ou:
            </p>
            <p className="text-white/80 mb-10">
              Growth Funnels<br />
              Av. Paulista, 1374, 11º andar<br />
              São Paulo - SP, 01310-100<br />
              Brasil
            </p>
            
            <div className="border-t border-white/10 pt-8 mt-16">
              <p className="text-white/60 text-center">
                Ao usar nossos Serviços, você reconhece que leu e compreendeu estes Termos.
              </p>
              <div className="mt-8 text-center">
                <Link to="/privacy" className="text-[#d0ff00] hover:underline">
                  Veja também nossa Política de Privacidade
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

export default Terms;
