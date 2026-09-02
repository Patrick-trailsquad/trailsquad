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

    let cancelled = false;

    const initPlayer = () => {
      if (cancelled) return;
      const target = elementId ? document.getElementById(elementId) : playerRef.current;
      // Skip if the target was already detached from the document (route change)
      if (target && target.isConnected && window.YT && window.YT.Player) {
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
      cancelled = true;
      if (window.YTReadyCallbacks) {
        window.YTReadyCallbacks = window.YTReadyCallbacks.filter(cb => cb !== initPlayer);
      }
      const player = ytPlayerRef.current;
      ytPlayerRef.current = null;
      // Defer destroy so React finishes its own DOM removal first
      setTimeout(() => {
        try {
          player?.destroy?.();
        } catch (e) {
          // Node already removed by React – safe to ignore
        }
      }, 0);
    };
  }, [videoId]);

  return { playerRef, ytPlayerRef, isReady };
};
