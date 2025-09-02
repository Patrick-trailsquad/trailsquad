import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  // Umag, Istria, Croatia coordinates
  const umagCoordinates: [number, number] = [13.5219, 45.4303];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: umagCoordinates,
        zoom: 12,
      });

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

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
      setIsMapInitialized(false);
    }
  };

  useEffect(() => {
    if (open && mapboxToken) {
      initializeMap(mapboxToken);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
        setIsMapInitialized(false);
      }
    };
  }, [open, mapboxToken]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Umag, Istria, Croatia
          </DialogTitle>
        </DialogHeader>
        
        {!isMapInitialized && (
          <div className="space-y-4 p-4">
            <p className="text-sm text-gray-600">
              To display the map, please enter your Mapbox public token. You can get one from{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80"
              >
                mapbox.com
              </a>
              {' '}in the Tokens section of your dashboard.
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter your Mapbox public token (pk.)"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={() => initializeMap(mapboxToken)}
                disabled={!mapboxToken.startsWith('pk.')}
              >
                Load Map
              </Button>
            </div>
          </div>
        )}
        
        <div 
          ref={mapContainer} 
          className={`w-full rounded-lg ${isMapInitialized ? 'h-96' : 'h-0'}`}
        />
        
        {!isMapInitialized && mapboxToken && (
          <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LocationMapModal;