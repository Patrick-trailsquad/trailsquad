
import React, { useState } from 'react';
import { Play } from "lucide-react";
import VideoLightbox from '../VideoLightbox';

const VideoThumbnailBanner = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/nGv8ppEnOhk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/nGv8ppEnOhk?autoplay=1"
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/aP96sAb9B1g/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/aP96sAb9B1g?autoplay=1"
    }
  ];

  const openVideo = (videoUrl: string) => setSelectedVideo(videoUrl);
  const closeVideo = () => setSelectedVideo(null);

  return (
    <>
      <section className="w-full bg-[#FFDC00] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
            {/* Text Section - 60% */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">
              <h1 className="font-cabinet text-5xl md:text-7xl xl:text-8xl font-black text-charcoal leading-none tracking-tight">
                Se videoer fra vores ture!
              </h1>
            </div>
            
            {/* Video Thumbnails - 40% */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]"
                  onClick={() => openVideo(video.videoUrl)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <img
                      src={video.thumbnail}
                      alt="Trail Squad Video"
                      className="w-full h-48 md:h-56 object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center group-hover:bg-white/60 transition-all duration-300 shadow-xl">
                        <Play className="w-7 h-7 text-[#FFDC00] ml-1" fill="currentColor" />
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
