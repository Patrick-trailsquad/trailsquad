import React from 'react';
import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { usePageTitle } from "../../hooks/usePageTitle";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import IncludedAmenities from "../../components/destinations/IncludedAmenities";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RibeiraSacra = () => {
  useScrollToTop();
  usePageTitle('Trail Ribeira Sacra');
  
  return (
    <div className="min-h-screen bg-stone">
      <div className="relative h-[70vh]">
        <img
          src="/lovable-uploads/087fe87f-e6e4-4c2e-b840-bea332c370d2.png"
          alt="Trail Ribeira Sacra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-stone transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <h1 className="font-cabinet text-3xl md:text-4xl font-bold text-white px-4 drop-shadow-md mb-8">
            Trail Ribeira Sacra, Spain
          </h1>
        </div>
      </div>
      
      {/* Yellow banner underneath hero */}
      <div className="w-full bg-[#FFDC00] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Location</h1>
              <h2 className="font-cabinet text-lg text-charcoal">Luintra, Province of Ourense, Spain</h2>
            </div>
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Race Day</h1>
              <h2 className="font-cabinet text-lg text-charcoal">October 12, 2025</h2>
            </div>
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Trip Duration</h1>
              <h2 className="font-cabinet text-lg text-charcoal">October 10-13, 2025 (4 days)</h2>
            </div>
            <div>
              <h1 className="font-cabinet text-2xl font-bold text-charcoal">Distances</h1>
              <h2 className="font-cabinet text-lg text-charcoal">48km</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
                <p className="text-lg">
                  Experience the breathtaking beauty of the Ribeira Sacra region, known for its steep 
                  vineyard terraces that have been cultivated since Roman times. This spectacular trail 
                  runs along the dramatic canyons of the Sil and Miño rivers, through ancient monasteries 
                  and historic wine regions in the heart of Galicia.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
                <p className="text-lg">
                  The trail winds through lush forests, traditional stone villages, and alongside the iconic 
                  terraced vineyards that cling to the steep canyon walls. The combination of natural beauty, 
                  cultural heritage, and world-class wines makes this a truly unforgettable running adventure.
                </p>
              </div>

              <div>
                <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
                <p className="text-lg">
                  With challenging elevation changes as you descend into and climb out of the river canyons, 
                  this trail offers a perfect mix of technical sections and runnable paths. The route provides 
                  breathtaking views at every turn while testing your endurance on the steep vineyard slopes.
                </p>
              </div>
            </div>

            <Button 
              asChild
              variant="charcoal"
              size="md"
              className="mb-8"
            >
              <a 
                href="https://www.trailribeirasacra.es/index-en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit Official Race Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/AEhnSUNgI-c?si=z53vIFltEnBiUBrn"
                title="Trail Ribeira Sacra"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="font-cabinet text-4xl font-bold text-charcoal">10.000 DKK</p>
                  <p className="text-sm text-gray-500">incl. VAT</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trip status</p>
                  <p className="font-cabinet text-xl font-bold text-charcoal">10 spots</p>
                </div>
              </div>
              <PriceQuoteForm 
                destinationName="Trail Ribeira Sacra"
                availableDistances={["48km"]}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <IncludedAmenities className="bg-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="h-[400px]">
                      <img 
                        src="/lovable-uploads/c410cbf0-1be2-4f66-9ae9-cbd7356a5dcf.png" 
                        alt="Parador de Santo Estevo courtyard" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px]">
                      <img 
                        src="/lovable-uploads/f28071a7-dd02-4fb2-96e4-f46fe1e26c54.png" 
                        alt="Parador de Santo Estevo room" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px]">
                      <img 
                        src="/lovable-uploads/817df969-5c3c-456f-ac27-c783a07686ca.png" 
                        alt="Parador de Santo Estevo spa" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px]">
                      <img 
                        src="/lovable-uploads/d82fbf4a-a04e-41cb-8857-059331238963.png" 
                        alt="Parador de Santo Estevo room interior" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px]">
                      <img 
                        src="/lovable-uploads/969011ad-2594-4761-bf33-8468779ced1b.png" 
                        alt="Parador de Santo Estevo monastery view" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h1 className="font-cabinet text-3xl font-bold text-charcoal mb-2">Parador de Santo Estevo</h1>
              <h2 className="font-cabinet text-xl text-terra mb-4">Nogueira de Ramuín, Ourense</h2>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-md text-gray-600">4-Star Hotel</span>
              </div>
              <p className="text-lg">
                Set in a stunning 12th-century monastery, this luxury hotel offers an unforgettable stay in the heart of the Ribeira Sacra. 
                The beautifully restored building features original stone architecture, elegant cloisters, and magnificent views of the 
                surrounding valleys. You'll enjoy spacious rooms, gourmet Galician cuisine, and a peaceful spa - perfect for recovery 
                after your trail adventure.
              </p>
            </div>
          </div>
        </div>
        
        <BackToDestinationsButton />
      </div>
      <Footer />
    </div>
  );
};

export default RibeiraSacra;
