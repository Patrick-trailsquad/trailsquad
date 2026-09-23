import React, { useState } from 'react';
import { Play } from 'lucide-react';

const InfiniteTrailsTripVideoCTA = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/2bsJkYm7OOU?autoplay=1";
  const thumbnailUrl = "https://img.youtube.com/vi/2bsJkYm7OOU/maxresdefault.jpg";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-cabinet text-3xl md:text-4xl font-bold text-charcoal mb-2">
            Se video fra vores tur til Infinite Trails
          </h2>
          <p className="text-lg text-gray-600">
            Oplev stemningen og naturen fra løbet i Østrig
          </p>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="relative w-full group cursor-pointer"
            >
              <img
                src={thumbnailUrl}
                alt="Infinite Trails video thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-10 h-10 text-charcoal ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          ) : (
            <div className="aspect-video">
              <iframe
                src={videoUrl}
                title="Infinite Trails video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfiniteTrailsTripVideoCTA;
