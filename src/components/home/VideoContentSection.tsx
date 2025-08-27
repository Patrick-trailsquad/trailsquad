import React from 'react';

const VideoContentSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video on the left */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[9/16] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-elegant bg-black">
                <iframe
                  src="https://www.youtube.com/embed/wgKpri-37EU"
                  title="Trail Squad Experience"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Text content on the right */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              Oplev magien ved
              <span className="block text-primary mt-2">Trail Squad</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Følg med bag kulisserne og se, hvordan vi skaber uforglemmelige 
              oplevelser i verdens mest spektakulære natur
            </h2>
            
            {/* Optional CTA button */}
            <div className="mt-8">
              <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Se mere content
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoContentSection;