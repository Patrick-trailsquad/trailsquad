import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const KangNu26InlineMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const nuukCoordinates: [number, number] = [-51.7216, 64.1836];

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoidHJhaWxzcXVhZCIsImEiOiJjbWYyOHcyOTcxcDR4MnJzNzYxMjJ1Mmk0In0.ChC7OJ4KStECKkTJ0wwCUA';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: nuukCoordinates,
      zoom: 10,
      scrollZoom: false,
    });

    map.current.on('load', () => {
      if (!map.current) return;

      new mapboxgl.Marker({ color: '#FFDC00', scale: 1.2 })
        .setLngLat(nuukCoordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            '<h3 style="margin:0;font-weight:bold;">Nuuk</h3><p style="margin:4px 0 0 0;">KangNu Running Race</p>'
          )
        )
        .addTo(map.current);

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      setIsLoading(false);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      )}
      <div ref={mapContainer} className="w-full h-[350px] md:h-[450px]" />
    </div>
  );
};

export default KangNu26InlineMap;
