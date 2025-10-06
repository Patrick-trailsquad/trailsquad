const InfiniteTrailsMediaSection = () => {
  return (
    <div className="rounded-xl overflow-hidden aspect-video">
      <iframe
        src="https://www.youtube.com/embed/Cu6Tg-eQ-cQ"
        title="Infinite Trails Bad Gastein"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default InfiniteTrailsMediaSection;
