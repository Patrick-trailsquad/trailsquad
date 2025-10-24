import React, { useState } from 'react';
import { Play } from 'lucide-react';
import VideoLightbox from '../../VideoLightbox';

const RibeiraTripVideoCTA = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/aP96sAb9B1g";
  const thumbnailUrl = "https://img.youtube.com/vi/aP96sAb9B1g/maxresdefault.jpg";

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-2">
              Se video fra turen
            </h2>
            <p className="text-lg text-gray-600">
              Oplev highlights fra Trail Ribeira Sacra
            </p>
          </div>
          
          <button
            onClick={() => setIsVideoOpen(true)}
            className="relative w-full rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img 
              src={thumbnailUrl}
              alt="Trail Ribeira Sacra video thumbnail"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <Play className="w-10 h-10 text-charcoal ml-1" fill="currentColor" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {isVideoOpen && (
        <VideoLightbox
          videoUrl={videoUrl}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </>
  );
};

export default RibeiraTripVideoCTA;
