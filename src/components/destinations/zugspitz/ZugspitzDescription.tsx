import React from 'react';
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZugspitzDescription = () => {
  return (
    <div className="space-y-6 mb-8">
      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Setting</h2>
        <p className="text-lg">
          Experience Germany's most spectacular Alpine trail running event in the stunning Bavarian Alps. 
          The Zugspitz Ultratrail takes you through pristine Alpine meadows, ancient forests, and dramatic 
          mountain ridges, offering breathtaking views of Germany's highest peak, the Zugspitze (2,962m).
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Experience</h2>
        <p className="text-lg">
          Starting and finishing in the charming Olympic resort town of Garmisch-Partenkirchen, 
          the course winds through the Wetterstein and Ammergau Alps, passing crystal-clear mountain 
          lakes and traditional Alpine huts. Choose from seven challenging distances: 16km, 29km, 44km, 
          68km, 86km, 106km, or the ultimate 164km Ultra Trail that circles the entire Zugspitz massif. 
          Each route promises unique challenges and unforgettable Alpine scenery.
        </p>
      </div>

      <div>
        <h2 className="font-cabinet text-2xl font-bold mb-3 text-charcoal">The Challenge</h2>
        <p className="text-lg">
          From shorter trails perfect for newcomers to the demanding ultra-distance for seasoned athletes, 
          each route offers panoramic views and authentic Bavarian culture. Experience traditional mountain 
          huts serving hearty Alpine cuisine and immerse yourself in the rich history of this Olympic host 
          city - the perfect blend of athletic challenge and cultural discovery in the heart of the German Alps.
        </p>
      </div>
      
      <Button 
        asChild
        variant="charcoal"
        size="md"
      >
        <a 
          href="https://www.zugspitz-ultratrail.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          Visit Official Race Website
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
};

export default ZugspitzDescription;
