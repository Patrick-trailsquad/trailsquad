import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { usePageTitle } from "../../hooks/usePageTitle";
import PriceQuoteForm from "../../components/PriceQuoteForm";
import BackToDestinationsButton from "../../components/destinations/BackToDestinationsButton";
import { Button } from "@/components/ui/button";
import Footer from "../../components/Footer";
import IconList from "../../components/destinations/IconList";
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
      <div className="relative h-[60vh]">
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
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="font-cabinet text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Trail Ribeira Sacra, Spain
        </h1>
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

            <div className="bg-white p-6 rounded-xl">
              <h2 className="font-cabinet text-2xl font-bold mb-4">Trip Details</h2>
              <ul className="space-y-2">
                <li><strong>Location:</strong> Luintra, Province of Ourense, Spain</li>
                <li><strong>Date of race:</strong> October 12, 2025</li>
                <li><strong>Trip duration:</strong> October 10-13, 2025 (4 days)</li>
                <li><strong>Available distances:</strong> 48km</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/AEhnSUNgI-c?si=fP9AVjhxn45lm7gE"
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

            <IconList 
              title="What's included in the standard package"
              items={[
                { type: "entry", text: "Entry ticket to the trail run" },
                { type: "travel", text: "Assistance with plane tickets from Copenhagen and back (if other departure airport, let's discuss)" },
                { type: "transport", text: "Transportation from airport to destination hotel (if tickets are organised by Trail Squad)" },
                { type: "hotel", text: "4 star hotel for the duration of the trip (see below)" },
                { type: "coaching", text: "Pre-race briefing with running coach with running and nutrition strategies" }
              ]}
            />
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl overflow-hidden">
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
