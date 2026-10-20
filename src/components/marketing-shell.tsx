import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsapp = (message: string) => `https://wa.me/5531998076628?text=${encodeURIComponent(message)}`;
export const contact = whatsapp("Olá, 3 MARKETING! Quero marcar uma reunião para conhecer as propostas e o investimento para o meu negócio.");
export const offer = whatsapp("Olá, 3 MARKETING! Quero conhecer as condições especiais de Black Friday e iniciar a operação na primeira semana de contrato. Vamos marcar uma reunião sobre propostas e investimento?");

export function Brand() {
  return <Link className="brand" to="/" aria-label="3 MARKETING — início"><span className="brand-number">3</span><span className="brand-name">MARKETING<span className="brand-caption">ESTRATÉGIA COM SENSIBILIDADE</span></span></Link>;
}

export function ContactButton({ children = "Marcar reunião pelo WhatsApp", href = contact }: { children?: React.ReactNode; href?: string }) {
  return <Button asChild variant="whatsapp" className="whatsapp-cta"><a href={href} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />{children}<ArrowUpRight aria-hidden="true" /></a></Button>;
}

export function MarketingHeader() {
  return <header className="site-header" id="inicio"><Brand /><nav className="nav-links" aria-label="Navegação principal"><a href="/#nosso-olhar">A agência</a><a href="/#criativos">Criativos</a><ContactButton>Reunião via WhatsApp</ContactButton></nav></header>;
}

export function MarketingFooter() {
  return <footer className="site-footer"><Brand /><p>© {new Date().getFullYear()} 3 MARKETING. Estratégia orientada a vendas.</p><a href={contact} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" />Marque uma reunião pelo WhatsApp<ArrowUpRight size={16} aria-hidden="true" /></a></footer>;
}