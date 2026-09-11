// Metadata used for social sharing previews (Facebook, LinkedIn, iMessage, WhatsApp).
// These are baked into static HTML files at build time so crawlers, which do not
// run JavaScript, still see the correct title, description and hero image.

export const SHARE_ORIGIN = "https://trailsquad.lovable.app";

export interface ShareMeta {
  path: string;
  title: string;
  description: string;
  image: string; // absolute or root-relative path
}

export const SHARE_META: ShareMeta[] = [
  {
    path: "/",
    title: "Trail Squad – trailløb og løbeeventyr i hele verden",
    description:
      "Rejs med Trail Squad til verdens smukkeste trailløb. Alt er planlagt: fly, hotel, startnummer og et fællesskab af løbere.",
    image: "/lovable-uploads/419d5e82-8ab8-4c5f-b1e6-4b77ae8486a8.png",
  },
  {
    path: "/about",
    title: "Om Trail Squad – menneskene bag turene",
    description:
      "Mød holdet bag Trail Squad og hør historien om, hvorfor vi rejser verden rundt for at løbe trail sammen.",
    image: "/lovable-uploads/419d5e82-8ab8-4c5f-b1e6-4b77ae8486a8.png",
  },
  {
    path: "/training",
    title: "Trail Squad Træning – løbetræning med fællesskab",
    description:
      "Træn trail med Trail Squad. Fælles løbeture, teknik og styrke – uanset om du er ny eller erfaren.",
    image: "/lovable-uploads/mallorca-training-hero.jpg",
  },
  {
    path: "/destinations/mallorca-training",
    title: "Træningslejr på Mallorca – Trail Squad",
    description:
      "4 dage med bjergløb, træning, spansk klima og godt selskab i Port de Sóller, 5.-8. februar 2027.",
    image: "/lovable-uploads/mallorca-training-hero.jpg",
  },
  {
    path: "/destinations/transylvania27",
    title: "Transylvania 100, Rumænien 2027 – Trail Squad",
    description:
      "Løb Transylvania 100 i Karpaterne med Trail Squad. Fly, hotel, startnummer og fællesskab – maj 2027.",
    image: "/lovable-uploads/transylvania27-hero.jpg",
  },
  {
    path: "/destinations/ilulissat27",
    title: "Ilulissat, Grønland 2027 – Trail Squad",
    description:
      "Løb ved Ilulissat Isfjord, fisketur og midnatskajak mellem isbjergene. 25.-28. august 2027 med Trail Squad.",
    image: "/lovable-uploads/ilulissat27-hero.jpg",
  },
  {
    path: "/destinations/hengill27",
    title: "Hengill Ultra, Island 2027 – Trail Squad",
    description:
      "Vulkansk terræn, damp og islandske vidder. Tag med Trail Squad til Hengill Ultra i juni 2027.",
    image: "/lovable-uploads/hengill27-hero.jpg",
  },
  {
    path: "/destinations/fyri26",
    title: "Fýri Trail, Norge 2027 – Trail Squad",
    description:
      "Norske fjelde, lækkert resort og trailløb i verdensklasse. Fýri Trail med Trail Squad i september 2027.",
    image: "/lovable-uploads/fyri-hero.jpg",
  },
  {
    path: "/destinations/ribeira-sacra-2026",
    title: "Trail Ribeira Sacra, Spanien 2026 – Trail Squad",
    description:
      "Vinmarker, kløfter og galicisk mad. Løb Trail Ribeira Sacra med Trail Squad i oktober 2026.",
    image: "/lovable-uploads/ribeira-sacra-2026-hero-2.jpg",
  },
  {
    path: "/destinations/ribeira-sacra",
    title: "Trail Ribeira Sacra, Spanien – Trail Squad",
    description:
      "Trail Squads tur til Trail Ribeira Sacra i Galicien, Spanien.",
    image: "/lovable-uploads/087fe87f-e6e4-4c2e-b840-bea332c370d2.png",
  },
  {
    path: "/destinations/transylvania",
    title: "Transylvania 100, Rumænien – Trail Squad",
    description:
      "Trail Squads tur til Transylvania 100 i de rumænske Karpater.",
    image: "/lovable-uploads/a7015d7e-4a4a-418f-b141-b8b7b6ba7528.png",
  },
  {
    path: "/destinations/infinite-trails",
    title: "Infinite Trails, Østrig – Trail Squad",
    description:
      "Trail Squads tur til Infinite Trails World Championships i Bad Hofgastein, Østrig.",
    image: "/lovable-uploads/infinite-trails.jpg",
  },
  {
    path: "/destinations/swiss-alps-100",
    title: "Swiss Alps 100, Schweiz – Trail Squad",
    description:
      "Trail Squads tur til Swiss Alps 100 i de schweiziske alper.",
    image: "/lovable-uploads/swiss-alps-100-hero-new.jpg",
  },
  {
    path: "/destinations/kangnu26",
    title: "KangNu Running Race, Grønland – Trail Squad",
    description:
      "Trail Squads tur til KangNu Running Race i Nuuk, Grønland.",
    image: "/lovable-uploads/kangnu26-hero.jpg",
  },
  {
    path: "/destinations/la-boucle-de-l-etoile",
    title: "La Boucle de l'Étoile, Marokko – Trail Squad",
    description:
      "Trail Squads tur til La Boucle de l'Étoile i Atlasbjergene, Marokko.",
    image: "/lovable-uploads/la-boucle-hero.jpg",
  },
];

export const getShareMeta = (path: string) =>
  SHARE_META.find((m) => m.path === path);
