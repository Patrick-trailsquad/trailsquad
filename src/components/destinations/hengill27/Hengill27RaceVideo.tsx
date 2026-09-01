const Hengill27RaceVideo = () => {
  return (
    <section className="py-16 md:py-24 bg-stone">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-cabinet text-3xl md:text-5xl font-bold text-charcoal mb-4">
            Se løbsorganisatorens officielle video
          </h2>
          <p className="text-charcoal/60 text-lg">
            Få et indtryk af Hengill Ultra direkte fra arrangøren
          </p>
        </div>
        <div className="rounded-xl overflow-hidden aspect-video shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/6xEhDovaY6Y"
            title="Hengill Ultra - officiel video fra løbsorganisatoren"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hengill27RaceVideo;
