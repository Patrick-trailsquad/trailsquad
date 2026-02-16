import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface LocationMapModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LocationMapModal = ({ open, onOpenChange }: LocationMapModalProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  // Nuuk, Greenland coordinates
  const nuukCoordinates: [number, number] = [-51.7216, 64.1836];

  const initializeMap = async () => {
    if (!mapContainer.current) return;

    try {
      setIsLoading(true);
      setError(null);

      const mapboxToken = 'pk.eyJ1IjoidHJhaWxzcXVhZCIsImEiOiJjbWYyOHcyOTcxcDR4MnJzNzYxMjJ1Mmk0In0.ChC7OJ4KStECKkTJ0wwCUA';
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: nuukCoordinates,
        zoom: 11,
      });

      map.current.on('load', () => {
        if (!map.current) return;

        new mapboxgl.Marker({
          color: '#FFDC00',
          scale: 1.2
        })
          .setLngLat(nuukCoordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML('<h3 style="margin: 0; font-weight: bold;">Nuuk</h3><p style="margin: 4px 0 0 0;">Grønland</p>')
          )
          .addTo(map.current);

        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        setIsMapInitialized(true);
        setIsLoading(false);
      });

      map.current.on('error', (e) => {
        setError(`Map loading failed: ${e.error?.message || 'Unknown error'}`);
        setIsLoading(false);
      });
    } catch (error) {
      setError(`Unable to load map: ${error.message}`);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      const timeoutId = setTimeout(() => {
        initializeMap();
      }, 100);
      return () => clearTimeout(timeoutId);
    }
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
        setIsMapInitialized(false);
      }
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Nuuk, Grønland
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-muted-foreground">Loading map...</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 rounded-lg">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-destructive mb-2">{error}</p>
                <Button onClick={initializeMap} variant="outline" size="sm">
                  Try Again
                </Button>
              </div>
            </div>
          )}
          
          <div 
            ref={mapContainer} 
            className="w-full h-[400px] rounded-lg bg-muted/30"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationMapModal;
