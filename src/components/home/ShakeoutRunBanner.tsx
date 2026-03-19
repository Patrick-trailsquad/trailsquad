
import React, { useState } from 'react';
import { Play } from "lucide-react";
import VideoLightbox from '../VideoLightbox';

const ShakeoutRunBanner = ({ showLocalClub = false }: { showLocalClub?: boolean }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoUrl = "https://www.youtube.com/embed/KyPCMpL_5d0?autoplay=1";

  const openVideo = () => setSelectedVideo(videoUrl);
  const closeVideo = () => setSelectedVideo(null);

  return (
    <>
      <section id="shakeout-run-section" className="w-full bg-gradient-to-br from-[#FFF3B0] to-[#FFE97F] py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">
              <div className="space-y-3">
                <p className="font-inter text-xs md:text-sm tracking-[0.3em] uppercase text-charcoal/50 font-medium">substantiv · løb</p>
                <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-charcoal leading-none tracking-tight">Shakeout Run</h1>
                <p className="text-lg md:text-xl text-charcoal/55 tracking-wide italic" style={{ fontFamily: 'Georgia, serif' }}>
                  /ˈʃeɪk.aʊt rʌn/
                </p>
                <div className="w-12 h-[2px] bg-charcoal/20" />
                <p className="text-charcoal/75 text-base md:text-lg max-w-lg leading-relaxed">En let joggetur på 20–30 minutter, som man løber dagen før race day for at øge blodgennemstrømningen, mindske muskelstivhed og dulme nerverne.<br />
Vi løber sammen med den lokale løbeklub, som viser os de fede spots 🎯
                </p>
              </div>
            </div>
            
            {/* Single Video - 40% */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-105" onClick={openVideo}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:shadow-terra/20">
                    <img src="/lovable-uploads/shakeout-run-thumbnail.png"
                  alt="Trail Squad Shakeout Run"
                  className="w-[26rem] h-80 md:h-96 object-cover transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center group-hover:bg-white/60 transition-all duration-300 shadow-xl">
                      <Play className="w-9 h-9 text-[#FFDC00] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedVideo &&
      <VideoLightbox
        videoUrl={selectedVideo}
        onClose={closeVideo} />
      }
    </>);
};

export default ShakeoutRunBanner;