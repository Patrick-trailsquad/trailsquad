
import React from 'react';
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const RibeiraDescription = () => {
  return (
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
          terraced vineyards that cling to the steep canyon walls. With a challenging elevation gain of 
          3,450 D+, this course will test your endurance while rewarding you with spectacular views. 
          Our Trail Squad running coach and physiotherapist will be there to support you throughout the journey,
          from pre-race preparation to post-race recovery. Join us for optional social activities, including 
          a light communal run the day before the race to familiarize yourself with the terrain, and celebrate 
          your achievement with a well-deserved post-race drink with your fellow runners.
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
      
      <Button 
        asChild
        variant="charcoal"
        size="md"
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
  );
};

export default RibeiraDescription;
