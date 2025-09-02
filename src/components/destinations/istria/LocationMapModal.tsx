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

  // Umag, Istria, Croatia coordinates
  const umagCoordinates: [number, number] = [13.5219, 45.4303];

  const initializeMap = async () => {
    if (!mapContainer.current) {
      console.log('Map container ref is null, cannot initialize');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      console.log('Starting map initialization...');
      console.log('Map container dimensions:', {
        width: mapContainer.current.offsetWidth,
        height: mapContainer.current.offsetHeight,
        visible: mapContainer.current.offsetParent !== null
      });

      // Use the Mapbox token directly
      const mapboxToken = 'pk.eyJ1IjoidHJhaWxzcXVhZCIsImEiOiJjbWYyOHcyOTcxcDR4MnJzNzYxMjJ1Mmk0In0.ChC7OJ4KStECKkTJ0wwCUA';
      
      console.log('Setting Mapbox token:', mapboxToken.substring(0, 20) + '...');
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: umagCoordinates,
        zoom: 12,
      });

      console.log('Map object created, waiting for load event...');

      // Wait for the map to load before adding markers and controls
      map.current.on('load', () => {
        console.log('Map load event triggered');
        
        if (!map.current) return;

        // Add marker for Umag
        new mapboxgl.Marker({
          color: '#FFDC00',
          scale: 1.2
        })
          .setLngLat(umagCoordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML('<h3 style="margin: 0; font-weight: bold;">Umag</h3><p style="margin: 4px 0 0 0;">Istria, Croatia</p>')
          )
          .addTo(map.current);

        // Add navigation controls
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        console.log('Map initialized successfully');
        setIsMapInitialized(true);
        setIsLoading(false);
      });

      // Handle map errors
      map.current.on('error', (e) => {
        console.error('Mapbox error event:', e);
        setError(`Map loading failed: ${e.error?.message || 'Unknown error'}`);
        setIsLoading(false);
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setError(`Unable to load map: ${error.message}`);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      // Add a small delay to ensure the modal DOM is fully rendered
      const timeoutId = setTimeout(() => {
        initializeMap();
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }

    return () => {
      if (map.current) {
        console.log('Cleaning up map');
        map.current.remove();
        map.current = null;
        setIsMapInitialized(false);
      }
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Umag, Istria, Croatia
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
            className="w-full h-[600px] rounded-lg bg-muted/30"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationMapModal;