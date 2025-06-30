
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ZugspitzAccommodationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/30268898-0fdd-471e-a3a9-0ca6878dc32b.png",
      alt: "Werdenfelserei pool area with stunning Alpine mountain views and traditional Bavarian church"
    },
    {
      src: "/lovable-uploads/1c46acfc-b2ec-40ff-9e27-72808cf9bbb8.png",
      alt: "Werdenfelserei hotel room with traditional wooden decor and modern amenities"
    },
    {
      src: "/lovable-uploads/715b7660-d507-4c4b-a163-b7a7acd5ad33.png",
      alt: "Werdenfelserei hotel exterior surrounded by lush Alpine forest"
    },
    {
      src: "/lovable-uploads/5deacf03-9191-423e-afb9-f74baa238157.png",
      alt: "Werdenfelserei stylish lounge area with fireplace and comfortable seating"
    },
    {
      src: "/lovable-uploads/407a5853-5f96-4506-a6a5-4b0b2d42903f.png",
      alt: "Werdenfelserei restaurant dining area with traditional Bavarian wood design"
    },
    {
      src: "/lovable-uploads/c9ffc027-8e19-41b2-b0ff-c028546bf12b.png",
      alt: "Werdenfelserei breakfast spread with fresh local ingredients"
    },
    {
      src: "/lovable-uploads/d757c59c-7f4e-451d-8c4c-413dbed9c0b2.png",
      alt: "Werdenfelserei traditional Alpine sauna with mountain views"
    },
    {
      src: "/lovable-uploads/17b26aa9-6d02-43d3-ac64-3f1d51bb6e93.png",
      alt: "Werdenfelserei relaxation lounge with fireplace and comfortable seating areas"
    },
    {
      src: "/lovable-uploads/6048864c-8779-4367-b810-28acbdf0456b.png",
      alt: "Werdenfelserei luxury bathroom with modern amenities and Alpine design"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="h-[450px] rounded-xl overflow-hidden relative">
        <img 
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-300" 
        />
        
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-charcoal' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ZugspitzAccommodationCarousel;
