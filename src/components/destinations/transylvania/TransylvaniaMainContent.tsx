
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransylvaniaMainContent = () => {
  return (
    <div className="container mx-auto px-2 md:px-6 py-4 md:py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6 mb-8">
            <div>
              <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
              <p className="text-lg">
                Set in the mystical heart of Romania's Carpathian Mountains, the Transylvania 100 
                offers runners an extraordinary journey through one of Europe's most legendary 
                landscapes. This challenging ultra trail winds through dense forests, past medieval 
                castles, and along dramatic mountain ridges, all within sight of the iconic Bran 
                Castle, known worldwide as "Dracula's Castle."
              </p>
            </div>

            <div>
              <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
              <p className="text-lg">
                As you traverse this historic route, you'll experience the raw beauty of the 
                Carpathians while running through pristine wilderness and traditional Romanian 
                villages. The trail combines technical mountain sections with scenic forest paths, 
                offering a perfect blend of challenge and natural beauty. Each kilometer brings new 
                views of the surrounding peaks and valleys, creating an unforgettable mountain 
                running experience.
              </p>
            </div>

            <div>
              <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
              <p className="text-lg">
                This legendary race tests both physical endurance and mental resilience as you 
                navigate varying terrains and weather conditions. Whether you choose the 20km, 
                30km, 50km, 80km, or the ultimate 100km challenge, each route has been carefully 
                designed to showcase the most spectacular sections of the Carpathian Mountains 
                while pushing your limits as a trail runner.
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
              href="https://www.transylvania100k.com/"
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
              src="https://www.youtube.com/embed/KYjEArAHdiY?si=VyqXLw-q6sxCgPIJ"
              title="Transylvania 100 Trail Running"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransylvaniaMainContent;
