import React, { useState } from 'react';
import { Play } from "lucide-react";
import VideoLightbox from '../VideoLightbox';

const VideoContentSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = () => {
    setSelectedVideo("https://www.youtube.com/embed/wgKpri-37EU?autoplay=1");
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Video thumbnail on the left */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div
                className="relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                onClick={openVideo}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:shadow-terra/20">
                  <img
                    src="/lovable-uploads/ae218c4a-347e-4cba-988d-a5f0d447fa57.png"
                    alt="Trail Squad Experience"
                    className="w-52 h-80 md:w-60 md:h-96 object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center group-hover:bg-white/60 transition-all duration-300 shadow-xl">
                      <Play className="w-9 h-9 text-[#FFDC00] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
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

      {selectedVideo && (
        <VideoLightbox
          videoUrl={selectedVideo}
          onClose={closeVideo}
        />
      )}
    </>
  );
};

export default VideoContentSection;