
import { useEffect } from 'react';

export const usePageTitle = (pageTitle: string) => {
  useEffect(() => {
    document.title = `Trail Squad - ${pageTitle}`;
    return () => {
      document.title = 'Trail Squad';
    };
  }, [pageTitle]);
};
