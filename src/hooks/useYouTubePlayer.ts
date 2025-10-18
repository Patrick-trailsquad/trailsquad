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
  onReady?: (event: any) => void
) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize callbacks array if it doesn't exist
    if (!window.YTReadyCallbacks) {
      window.YTReadyCallbacks = [];
    }

    const initPlayer = () => {
      if (playerRef.current && window.YT && window.YT.Player) {
        ytPlayerRef.current = new window.YT.Player(playerRef.current, {
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
        // API already loaded, initialize immediately
        initPlayer();
      } else if (!isAPILoading) {
        // API not loaded yet, load it
        isAPILoading = true;
        
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

        // Set up the global callback
        window.onYouTubeIframeAPIReady = () => {
          isAPILoaded = true;
          isAPILoading = false;
          
          // Initialize all waiting players
          window.YTReadyCallbacks.forEach(callback => callback());
          window.YTReadyCallbacks = [];
        };

        // Add this player to the queue
        window.YTReadyCallbacks.push(initPlayer);
      } else {
        // API is loading, add to queue
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
  }, [videoId, playerVars, onReady]);

  return { playerRef, ytPlayerRef, isReady };
};
