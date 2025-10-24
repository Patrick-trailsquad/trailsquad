
import React, { useEffect } from 'react';
import { X } from "lucide-react";

interface VideoLightboxProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoLightbox = ({ videoUrl, onClose }: VideoLightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Video container */}
      <div className="relative z-10 w-full max-w-5xl mx-4">
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Video iframe with 16:9 aspect ratio */}
          <div className="aspect-video">
            <iframe
              src={videoUrl}
              title="Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;
