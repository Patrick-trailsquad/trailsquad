
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useNavigateAndScroll = () => {
  const navigate = useNavigate();

  const navigateAndScroll = useCallback((path: string, elementId: string) => {
    navigate(path);
    
    // Always scroll to top first
    window.scrollTo(0, 0);
    
    // If we need to scroll to a specific element, wait for navigation and do it
    if (elementId !== 'top') {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [navigate]);

  return navigateAndScroll;
};
