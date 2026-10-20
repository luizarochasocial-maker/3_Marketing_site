import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/galeria")({
  head: () => ({ meta: [
    { title: "Galeria de criativos | 3 MARKETING" },
    { name: "description", content: "Conheça os criativos produzidos pela 3 MARKETING. Agência 360 com mais de 8 anos de mercado e projetos nacionais e internacionais." },
    { property: "og:title", content: "Galeria de criativos | 3 MARKETING" },
    { property: "og:description", content: "Criatividade com intenção. Uma seleção de trabalhos produzidos pela 3 MARKETING." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "criativos", replace: true }); },
});
