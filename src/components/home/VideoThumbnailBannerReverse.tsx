
import React, { useState, useEffect, useRef } from 'react';
import { Play } from "lucide-react";
import VideoLightbox from '../VideoLightbox';

const VideoThumbnailBannerReverse = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate parallax offset based on section position
        if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
          const scrollProgress = (window.innerHeight - sectionTop) / (window.innerHeight + sectionHeight);
          setScrollY(scrollProgress * 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videos = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/aP96sAb9B1g/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/aP96sAb9B1g?autoplay=1"
    }
  ];

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section ref={sectionRef} className="w-full relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* HTML5 Video Background - Seamless Loop with Parallax */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              transform: `translate(-50%, calc(-50% + ${scrollY * 0.15}px))`,
              transition: 'transform 0.1s ease-out'
            }}
            className="absolute top-1/2 left-1/2 w-full h-full object-cover scale-125"
          >
            <source src="/videos/background-loop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
            {/* Videos Section - 40% */}
            <div className="lg:col-span-4 flex justify-center items-center">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                  onClick={() => openVideo(video.videoUrl)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:shadow-terra/20">
                    <img
                      src={video.thumbnail}
                      alt="Trail Squad Video"
                      className="w-[26rem] md:w-[32rem] h-80 md:h-96 object-cover transition-transform duration-700"
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
              ))}
            </div>
            
            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight drop-shadow-lg">
                  Se video fra seneste tur!
                </h1>
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

export default VideoThumbnailBannerReverse;
