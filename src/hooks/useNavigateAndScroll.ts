
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useNavigateAndScroll = () => {
  const navigate = useNavigate();

  const navigateAndScroll = useCallback((path: string, elementId: string) => {
    navigate(path, { replace: true });
    
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);

  return navigateAndScroll;
};
