import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Globe2, Zap } from "lucide-react";
import muse from "@/assets/renaissance-muse.jpg";
import bust from "@/assets/renaissance-bust.jpg";
import painting from "@/assets/renaissance-painting.jpg";
import { ContactButton, MarketingHeader, MarketingFooter, offer } from "@/components/marketing-shell";
import { CreativeCarousel } from "@/components/creative-carousel";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "3 MARKETING | Experiência que trabalha pelas suas vendas" },
    { name: "description", content: "Agência 360 com mais de 8 anos de bagagem nas melhores agências do mercado. Projetos nacionais e internacionais, atendimento boutique e foco em vendas. Conheça as condições de Black Friday pelo WhatsApp." },
    { property: "og:title", content: "3 MARKETING | Experiência que trabalha pelas suas vendas" },
    { property: "og:description", content: "Mais de 8 anos de experiência, atendimento boutique e estratégia orientada a vendas. Conheça propostas e investimento pelo WhatsApp." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <>
    <MarketingHeader />
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={muse} alt="Escultura feminina em mármore, inspirada na arte renascentista" width={1920} height={1280} fetchPriority="high" />
        <div className="hero-inner reveal">
          <div className="eyebrow">3 MARKETING · Agência 360</div>
          <h1 id="hero-title">Sua agência olha<br />para o seu negócio<br />ou só para<br /><em>mais um número?</em></h1>
          <p className="hero-copy">Mais de 8 anos de bagagem nas melhores agências do mercado. Agora, uma agência boutique com atenção ao seu negócio e foco em vendas.</p>
          <div className="hero-cta"><ContactButton /></div>
          <p className="hero-note">Conheça nossas propostas e o investimento para o seu negócio.</p>
          <a href="#nosso-olhar" className="hero-bottom"><ArrowDown aria-hidden="true" /> CONHEÇA A 3 MARKETING</a>
        </div>
        <span className="hero-art-label">SENSIBILIDADE NA FORMA. ESTRATÉGIA NA ESSÊNCIA.</span>
      </section>
      <div className="values-strip"><span>Agência boutique · 360</span><i /><span><strong>Mais de 8 anos de experiência</strong></span><i /><span>Projetos nacionais e internacionais</span><i /><span>Foco em vendas e resultado</span></div>

      <section className="experience-section" id="nosso-olhar"><div className="section-shell experience-layout"><div className="experience-number"><strong>8<span>+</span></strong><p>ANOS DE EXPERIÊNCIA</p></div><div><div className="eyebrow">Bagagem das melhores agências do mercado</div><h2 className="section-title">Experiência de grandes agências.<br /><em>Cuidado de uma boutique.</em></h2><p className="body-copy">Somos três mulheres com mais de 8 anos de trajetória nas melhores agências do mercado. Unimos essa bagagem a um atendimento próximo e personalizado, com um objetivo claro: direcionar o seu marketing para vendas.</p><div className="international-line"><Globe2 aria-hidden="true" /><span>Projetos nacionais e internacionais.</span></div></div></div></section>

      <section className="agency-360" id="o-que-fazemos"><img src={bust} alt="Busto feminino de mármore em composição inspirada na arte renascentista" width={1536} height={1024} loading="lazy" /><div className="section-shell agency-copy"><div className="eyebrow">Digital e comercial na mesma direção</div><h2 className="section-title">Agência 360.<br /><em>Foco em vendas.</em></h2><p>Cuidamos de toda a operação digital da sua marca, da estratégia à execução. Marketing e comercial conectados para gerar oportunidades e buscar resultados de venda — não apenas curtidas.</p><ContactButton /></div></section>

      <CreativeCarousel />

      <section className="traffic-section" id="trafego"><div className="section-shell traffic-layout"><div><div className="eyebrow">Tráfego pago com inteligência</div><h2 className="section-title">Não basta ser conhecido.<br /><em>O negócio precisa vender.</em></h2><p className="body-copy">Trabalhamos com empresas grandes e pequenas, sempre com foco em crescimento saudável. Para nós, tráfego não é só alcance: é visibilidade que constrói marca, consistência que fortalece o branding e resultado que aparece nas vendas.</p><p className="body-copy">Olhamos para o longo prazo do seu negócio — e para o resultado de todos os meses.</p><div className="mt-7"><ContactButton /></div></div><div className="traffic-results"><figure className="result-print"><img src={"/media/resultado-leads-meta.jpg"} alt="Resultado de cliente: 841 cadastros de leads no Meta, crescimento de 513,87% em relação ao período anterior" width={1628} height={624} loading="lazy" /><figcaption>Resultado real de cliente · +513% em leads</figcaption></figure><figure className="result-print"><img src={"/media/resultado-conversas-meta.jpg"} alt="Resultado de cliente: 764 conversas iniciadas por mensagem, crescimento de 179,85%, e 723 pelo Instagram, crescimento de 180,23%" width={1631} height={416} loading="lazy" /><figcaption>Resultado real de cliente · +180% em conversas</figcaption></figure></div></div></section>

      <section className="manifesto"><div className="eyebrow">O seu investimento precisa de direção</div><h2>Mais que curtidas.<br /><em>O foco é vender.</em></h2><p>Tráfego sem retorno? Posts sem impacto nas vendas? Vamos conversar sobre uma estratégia que conecte o seu marketing ao seu comercial.</p><div className="mt-8"><ContactButton /></div></section>

      <figure className="renaissance-interlude"><img src={painting} alt="Pintura inspirada no Renascimento com três mulheres em um jardim" width={1536} height={1024} loading="lazy" /><figcaption>Três mulheres. Experiência, estratégia e vendas.</figcaption></figure>

      <section className="black-friday" id="black-friday"><div className="black-friday-ribbon" aria-label="Black Friday: condições especiais"><span>BLACK FRIDAY · CONDIÇÕES ESPECIAIS</span><span aria-hidden="true">BLACK FRIDAY · CONDIÇÕES ESPECIAIS</span><span aria-hidden="true">BLACK FRIDAY · CONDIÇÕES ESPECIAIS</span></div><div className="section-shell"><div><div className="eyebrow">Comece agora. Prepare suas próximas vendas.</div><h2 className="section-title">Suas vendas não<br />precisam esperar<br /><em>o próximo ano.</em></h2></div><div><p className="black-friday-lead">Condições especiais de Black Friday para colocar seu marketing em ação.</p><p className="body-copy">Dê o próximo passo com uma operação orientada a vendas. Marque uma reunião e conheça a proposta e o investimento para o seu negócio.</p><div className="operation-start"><Zap aria-hidden="true" /><strong>Início de toda a operação na primeira semana de contrato.</strong></div><div className="mt-7"><ContactButton href={offer}>Quero as condições de Black Friday</ContactButton></div><p className="offer-note">Reunião pelo WhatsApp · Condições e escopo em proposta personalizada.</p></div></div></section>
    </main>
    <MarketingFooter />
  </>;
}
