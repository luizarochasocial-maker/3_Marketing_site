import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Plus, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { creatives } from "@/lib/creatives";
import reel1 from "@/assets/reel-1.mp4.asset.json";
import reel2 from "@/assets/reel-2.mp4.asset.json";
import reel3 from "@/assets/reel-3.mp4.asset.json";
import reel1Poster from "@/assets/reel-1-poster.jpg.asset.json";
import reel2Poster from "@/assets/reel-2-poster.jpg.asset.json";
import reel3Poster from "@/assets/reel-3-poster.jpg.asset.json";

const reels = [
  { src: reel1.url, poster: reel1Poster.url, label: "Reel 01" },
  { src: reel2.url, poster: reel2Poster.url, label: "Reel 02" },
  { src: reel3.url, poster: reel3Poster.url, label: "Reel 03" },
];

function Reel({ src, poster, label }: { src: string; poster: string; label: string }) {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    video.play().catch(() => {});
  }, [muted]);
  return <div className="reel-item">
    <video ref={videoRef} src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-label={label} onClick={() => setMuted(current => !current)} />
    <span className="reel-number">{label}</span>
    <button type="button" className="reel-sound" onClick={() => setMuted(current => !current)} aria-label={muted ? `Ativar som do ${label}` : `Silenciar ${label}`}>{muted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}</button>
  </div>;
}

export function CreativeCarousel() {
  const [selected, setSelected] = useState<number | null>(null);
  const item = selected === null ? undefined : creatives[selected];
  return <section className="section-shell gallery-preview" id="criativos">
    <div className="eyebrow">Criativos produzidos · 3 MARKETING</div>
    <h2 className="section-title">Estratégia que ganha forma.<br /><em>Marcas que ganham presença.</em></h2>
    <Carousel opts={{ align: "start", loop: true }} aria-label="Criativos produzidos" className="lp-carousel">
      <CarouselContent>{creatives.map((creative, index) => <CarouselItem key={creative.src} className="creative-slide">
        <Button variant="ghost" className="creative-image-button" onClick={() => setSelected(index)} aria-label={`Ampliar criativo: ${creative.title}`}>
          <img src={creative.src} alt={creative.alt} width={1080} height={1350} loading="lazy" /><span className="creative-enlarge"><Plus aria-hidden="true" /></span>
        </Button>
        <div className="creative-caption" aria-hidden="true" />
      </CarouselItem>)}</CarouselContent>
      <div className="carousel-controls"><CarouselPrevious aria-label="Criativos anteriores" className="carousel-arrow" /><span>3 MARKETING · Portfólio</span><CarouselNext aria-label="Próximos criativos" className="carousel-arrow" /></div>
    </Carousel>
    <div className="lp-reels" aria-label="Reels"><div className="eyebrow">Em movimento</div><div className="reels-grid">{reels.map(reel => <Reel key={reel.src} {...reel} />)}</div></div>
    <Dialog open={item !== undefined} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="creative-dialog"><DialogTitle>{item?.title}</DialogTitle><DialogDescription className="sr-only">{item?.alt}</DialogDescription>{item && <img src={item.src} alt={item.alt} className="creative-full" />}<div className="lightbox-controls"><Button variant="outline" size="icon" aria-label="Criativo anterior" onClick={() => setSelected(current => current === null ? 0 : (current - 1 + creatives.length) % creatives.length)}><ArrowLeft /></Button><span>{selected === null ? "" : `${selected + 1} / ${creatives.length}`}</span><Button variant="outline" size="icon" aria-label="Próximo criativo" onClick={() => setSelected(current => current === null ? 0 : (current + 1) % creatives.length)}><ArrowRight /></Button></div></DialogContent></Dialog>
  </section>;
}
