const SwissAlps100MediaSection = () => {
  return (
    <div className="rounded-xl overflow-hidden aspect-video">
      <iframe
        src="https://www.youtube.com/embed/Dz0JYj3lA7A"
        title="Swiss Alps 100"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SwissAlps100MediaSection;
