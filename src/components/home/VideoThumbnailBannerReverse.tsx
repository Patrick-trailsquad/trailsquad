import React, { useState, useEffect, useRef } from 'react';
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import VideoLightbox from '../VideoLightbox';

const videos = [
  {
    id: 1,
    title: "Trail Ribeira Sacra (2025)",
    thumbnail: "https://img.youtube.com/vi/aP96sAb9B1g/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/aP96sAb9B1g?autoplay=1"
  },
  {
    id: 2,
    title: "Transylvania100 (2026)",
    thumbnail: "https://img.youtube.com/vi/z4vPtbUnqlw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/z4vPtbUnqlw?autoplay=1"
  }
];

const VideoThumbnailBannerReverse = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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

  // Crossfade video loop effect
  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    if (!video1 || !video2) return;

    const handleVideo1End = () => {
      setActiveVideo(2);
      video2.currentTime = 0;
      video2.play();
    };

    const handleVideo2End = () => {
      setActiveVideo(1);
      video1.currentTime = 0;
      video1.play();
    };

    video1.addEventListener('ended', handleVideo1End);
    video2.addEventListener('ended', handleVideo2End);
    
    return () => {
      video1.removeEventListener('ended', handleVideo1End);
      video2.removeEventListener('ended', handleVideo2End);
    };
  }, []);

  // Auto-loop carousel between the two video slides
  useEffect(() => {
    if (isHovering || selectedVideo) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, selectedVideo]);

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section ref={sectionRef} className="w-full relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* HTML5 Video Background - Crossfade Loop with Parallax */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={video1Ref}
            autoPlay
            muted
            playsInline
            style={{
              transform: `translate(-50%, calc(-50% + ${scrollY * 0.15}px))`,
              transition: 'transform 0.1s ease-out, opacity 0.5s ease-in-out',
              opacity: activeVideo === 1 ? 1 : 0
            }}
            className="absolute top-1/2 left-1/2 w-full h-full object-cover scale-125"
          >
            <source src="/videos/background-loop.mp4" type="video/mp4" />
          </video>
          <video
            ref={video2Ref}
            muted
            playsInline
            style={{
              transform: `translate(-50%, calc(-50% + ${scrollY * 0.15}px))`,
              transition: 'transform 0.1s ease-out, opacity 0.5s ease-in-out',
              opacity: activeVideo === 2 ? 1 : 0
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
            <div className="lg:col-span-4 flex flex-col justify-center items-center">
              <h3
                key={videos[activeSlide].id}
                className="font-cabinet text-xl md:text-2xl font-bold text-white text-center mb-4 drop-shadow-md transition-opacity duration-500 animate-fade-in"
              >
                {videos[activeSlide].title}
              </h3>
              <div
                className="relative w-full max-w-[480px] aspect-[4/3]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                role="region"
                aria-roledescription="carousel"
                aria-label="Videoer fra seneste tur"
              >
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
                      index === activeSlide
                        ? "opacity-100 z-10 pointer-events-auto"
                        : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <div
                      className="relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-full h-full"
                      onClick={() => openVideo(video.videoUrl)}
                    >
                      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:shadow-terra/20">
                        <img
                          src={video.thumbnail}
                          alt="Trail Squad video thumbnail"
                          className="w-full h-full object-contain transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 items-center justify-center flex flex-row">
                          <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center group-hover:bg-white/60 transition-all duration-300 shadow-xl">
                            <Play className="w-9 h-9 text-[#FFDC00] ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Carousel dots */}
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
                  {videos.map((video, index) => (
                    <button
                      key={video.id}
                      type="button"
                      aria-label={`Gå til video ${index + 1}`}
                      aria-current={index === activeSlide ? "true" : undefined}
                      onClick={() => setActiveSlide(index)}
                      className={cn(
                        "w-2.5 h-2.5 rounded-full transition-colors duration-300",
                        index === activeSlide
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/70"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight drop-shadow-lg">
                  Se videoerne fra vores ture!
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
