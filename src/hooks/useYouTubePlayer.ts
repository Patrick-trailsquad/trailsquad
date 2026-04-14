import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
    YTReadyCallbacks: Array<() => void>;
  }
}

// Global state to track if API is loaded
let isAPILoaded = false;
let isAPILoading = false;

export const useYouTubePlayer = (
  videoId: string,
  playerVars?: any,
  onReady?: (event: any) => void,
  elementId?: string
) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!window.YTReadyCallbacks) {
      window.YTReadyCallbacks = [];
    }

    const initPlayer = () => {
      const target = elementId ? document.getElementById(elementId) : playerRef.current;
      if (target && window.YT && window.YT.Player) {
        ytPlayerRef.current = new window.YT.Player(target, {
          videoId: videoId,
          playerVars: playerVars || {},
          events: {
            onReady: (event: any) => {
              setIsReady(true);
              onReady?.(event);
            }
          }
        });
      }
    };

    const loadAPI = () => {
      if (isAPILoaded && window.YT && window.YT.Player) {
        initPlayer();
      } else if (!isAPILoading) {
        isAPILoading = true;
        
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
          isAPILoaded = true;
          isAPILoading = false;
          window.YTReadyCallbacks.forEach(callback => callback());
          window.YTReadyCallbacks = [];
        };

        window.YTReadyCallbacks.push(initPlayer);
      } else {
        window.YTReadyCallbacks.push(initPlayer);
      }
    };

    loadAPI();

    return () => {
      if (ytPlayerRef.current && ytPlayerRef.current.destroy) {
        try {
          ytPlayerRef.current.destroy();
        } catch (e) {
          console.error('Error destroying YouTube player:', e);
        }
      }
    };
  }, [videoId]);

  return { playerRef, ytPlayerRef, isReady };
};
