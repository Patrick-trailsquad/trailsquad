export interface Destination {
  id: string;
  name: string;
  route: string;
  status: 'upcoming' | 'open' | 'closed' | 'completed' | 'tickets-closed';
  published: boolean;
}

// Only include destinations that have published pages on the site
export const DESTINATIONS: Destination[] = [
  {
    id: 'miut',
    name: 'MIUT Madeira',
    route: '/destinations/miut',
    status: 'completed' as const,
    published: true
  },
  {
    id: 'ribeira-sacra',
    name: 'Ribeira Sacra',
    route: '/destinations/ribeira-sacra',
    status: 'open' as const,
    published: true
  },
  {
    id: 'transylvania',
    name: 'Transylvania 100',
    route: '/destinations/transylvania',
    status: 'open' as const,
    published: true
  },
  {
    id: 'zugspitz',
    name: 'Zugspitz Ultratrail',
    route: '/destinations/zugspitz',
    status: 'open' as const,
    published: true
  },
  {
    id: 'gtc',
    name: 'Gran Trail Courmayeur',
    route: '/destinations/gtc',
    status: 'upcoming' as const,
    published: true
  },
  {
    id: 'istria',
    name: 'Istria 100 by UTMB',
    route: '/destinations/istria',
    status: 'open' as const,
    published: true
  }
].filter(destination => destination.published); // Only return published destinations

export const getDestinationById = (id: string) => DESTINATIONS.find(dest => dest.id === id);
export const getDestinationByName = (name: string) => DESTINATIONS.find(dest => dest.name === name);