
import React, { useState } from 'react';
import { Play } from "lucide-react";
import VideoLightbox from '../VideoLightbox';

const VideoThumbnailBannerReverse = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      thumbnail: "/lovable-uploads/8e46cfd5-2e7d-48e9-900f-ec22af9a9884.png",
      videoUrl: "https://www.youtube.com/embed/nGv8ppEnOhk?autoplay=1"
    },
    {
      id: 2,
      thumbnail: "/lovable-uploads/2ecef890-c534-4140-8b55-73551ef9f522.png",
      videoUrl: "https://www.youtube.com/embed/_zQUIzIeF7s?autoplay=1"
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
      <section className="w-full relative py-16 md:py-20 overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/OzeN9YFuPYA?autoplay=1&mute=1&loop=1&playlist=OzeN9YFuPYA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Background video"
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
            {/* Videos Section - 40% */}
            <div className="lg:col-span-4 flex gap-8 justify-center items-end">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    index === 0 ? 'mt-8' : 'mb-8'
                  }`}
                  onClick={() => openVideo(video.videoUrl)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:shadow-terra/20">
                    <img
                      src={video.thumbnail}
                      alt="Trail Squad Video"
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
              ))}
            </div>
            
            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
              <div className="space-y-2">
                <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight drop-shadow-lg">
                  Mød Trail Squad teamet
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
