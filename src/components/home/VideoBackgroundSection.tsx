import React from 'react';

const VideoBackgroundSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube video background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/wgKpri-37EU?autoplay=1&mute=1&loop=1&playlist=wgKpri-37EU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
          title="Background Video"
          className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      {/* Dark overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content overlay - you can add content here if needed */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Add any overlay content here */}
      </div>
    </section>
  );
};

export default VideoBackgroundSection;