const LaBoucleDeLEtoileMediaSection = () => {
  return (
    <div className="rounded-xl overflow-hidden aspect-video">
      <iframe
        src="https://www.youtube.com/embed/YQhY1hbkPoY"
        title="La Boucle de l'Étoile"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LaBoucleDeLEtoileMediaSection;
