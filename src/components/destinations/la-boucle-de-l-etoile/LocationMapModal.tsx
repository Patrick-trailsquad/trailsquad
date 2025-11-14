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

  // Oujda, Morocco coordinates
  const oujdaCoordinates: [number, number] = [-1.9086, 34.6814];

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
        center: oujdaCoordinates,
        zoom: 11,
      });

      console.log('Map object created, waiting for load event...');

      // Wait for the map to load before adding markers and controls
      map.current.on('load', () => {
        console.log('Map load event triggered');
        
        if (!map.current) return;

        // Add marker for Oujda
        new mapboxgl.Marker({
          color: '#FFDC00',
          scale: 1.2
        })
          .setLngLat(oujdaCoordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML('<h3 style="margin: 0; font-weight: bold;">Oujda</h3><p style="margin: 4px 0 0 0;">Marokko</p>')
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
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#FFDC00]" />
            <span className="font-cabinet">Oujda, Marokko</span>
          </DialogTitle>
        </DialogHeader>
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFDC00] mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading map...</p>
              </div>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted p-6">
              <div className="text-center max-w-md">
                <MapPin className="w-12 h-12 text-destructive mx-auto mb-4" />
                <p className="text-destructive font-semibold mb-2">Unable to load map</p>
                <p className="text-sm text-muted-foreground mb-4">{error}</p>
                <Button 
                  onClick={() => initializeMap()}
                  variant="outline"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}
          <div 
            ref={mapContainer} 
            className="w-full h-full"
            style={{ 
              visibility: isMapInitialized ? 'visible' : 'hidden',
              minHeight: '500px' 
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationMapModal;
