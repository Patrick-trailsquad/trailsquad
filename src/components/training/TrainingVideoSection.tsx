import React, { useState, useEffect, useRef } from 'react';
import { Play } from "lucide-react";
import VideoLightbox from '../VideoLightbox';
import trainingBg from "@/assets/training-tour-de-furesoen-bg.png";

const TrainingVideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
          const scrollProgress = (window.innerHeight - sectionTop) / (window.innerHeight + sectionHeight);
          setScrollY(scrollProgress * 100);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const video = {
    thumbnail: "https://img.youtube.com/vi/LqqUaM1CtwQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/LqqUaM1CtwQ?autoplay=1"
  };

  return (
    <>
      <section ref={sectionRef} className="w-full relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={trainingBg}
            alt="Tour de Furesøen"
            style={{
              transform: `translate(-50%, calc(-50% + ${scrollY * 0.4}px))`,
              transition: 'transform 0.05s linear',
            }}
            className="absolute top-1/2 left-1/2 w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
            {/* Video Thumbnail - 40% */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div
                className="relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:shadow-terra/20">
                  <img
                    src={video.thumbnail}
                    alt="Tour de Furesøen Video"
                    className="w-[26rem] md:w-[32rem] aspect-video object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 items-center justify-center flex flex-row">
                    <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center group-hover:bg-white/60 transition-all duration-300 shadow-xl">
                      <Play className="w-9 h-9 text-[#FFDC00] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight drop-shadow-lg">
                  Træningssession 'Tour de Furesøen'
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedVideo && (
        <VideoLightbox
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
};

export default TrainingVideoSection;
