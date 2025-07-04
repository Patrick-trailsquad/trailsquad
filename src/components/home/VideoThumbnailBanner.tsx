
import React, { useState } from 'react';
import { Play } from "lucide-react";
import VideoLightbox from './VideoLightbox';

const VideoThumbnailBanner = () => {
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
      <section className="w-full bg-[#FFDC00] py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal text-center mb-8">
            Hvem er Trail Squad? 🇩🇰
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative group cursor-pointer"
                onClick={() => openVideo(video.videoUrl)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={video.thumbnail}
                    alt="Trail Squad Video"
                    className="w-64 h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
