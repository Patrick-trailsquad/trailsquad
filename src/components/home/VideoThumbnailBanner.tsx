
import React, { useState } from 'react';
import { Play } from "lucide-react";
import VideoLightbox from '../VideoLightbox';

const VideoThumbnailBanner = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      thumbnail: "/lovable-uploads/emil-thumbnail.png",
      videoUrl: "https://www.youtube.com/embed/nGv8ppEnOhk?autoplay=1"
    },
    {
      id: 2,
      thumbnail: "/lovable-uploads/patrick-thumbnail.png",
      videoUrl: "https://www.youtube.com/embed/_zQUIzIeF7s?autoplay=1"
    }
  ];

  const openVideo = (videoUrl: string) => setSelectedVideo(videoUrl);
  const closeVideo = () => setSelectedVideo(null);

  return (
    <>
      <section className="w-full bg-[#FFDC00] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right">
              <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-charcoal leading-[0.95] tracking-tight">
                Mød Trail Squad teamet
              </h1>
            </div>
            
            {/* Video Thumbnails - 2 side by side */}
            <div className="flex gap-6 justify-center lg:justify-end">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 rotate-2 even:-rotate-2"
                  onClick={() => openVideo(video.videoUrl)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 bg-white p-2">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={video.thumbnail}
                        alt="Trail Squad Video"
                        className="w-44 md:w-52 h-64 md:h-80 object-cover transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center group-hover:bg-white/60 transition-all duration-300 shadow-xl">
                          <Play className="w-7 h-7 text-[#FFDC00] ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default VideoThumbnailBanner;
