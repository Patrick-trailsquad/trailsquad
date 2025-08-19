export interface Destination {
  id: string;
  name: string;
  route: string;
  status: 'upcoming' | 'open' | 'closed' | 'completed';
  date?: string;
  published: boolean;
}

// Only include destinations that have published pages on the site
export const DESTINATIONS: Destination[] = [
  {
    id: 'gtc',
    name: 'GTC Swiss Alps',
    route: '/destinations/gtc',
    status: 'upcoming' as const,
    date: '2025-07-15',
    published: true
  },
  {
    id: 'miut',
    name: 'MIUT Madeira',
    route: '/destinations/miut',
    status: 'open' as const,
    date: '2025-04-25',
    published: true
  },
  {
    id: 'vesuvio',
    name: 'Vesuvio Trail',
    route: '/destinations/vesuvio',
    status: 'open' as const,
    date: '2025-03-20',
    published: true
  },
  {
    id: 'norwegian-fjords',
    name: 'Norwegian Fjords',
    route: '/destinations/norwegian-fjords',
    status: 'completed' as const,
    date: '2024-08-20',
    published: true
  },
  {
    id: 'transylvania',
    name: 'Transylvania 100',
    route: '/destinations/transylvania',
    status: 'open' as const,
    date: '2025-09-12',
    published: true
  },
  {
    id: 'mont-blanc',
    name: 'Mont Blanc Trail',
    route: '/destinations/mont-blanc',
    status: 'upcoming' as const,
    date: '2025-06-20',
    published: true
  },
  {
    id: 'black-forest',
    name: 'Black Forest Trail',
    route: '/destinations/black-forest',
    status: 'open' as const,
    date: '2025-05-15',
    published: true
  },
  {
    id: 'ribeira-sacra',
    name: 'Ribeira Sacra',
    route: '/destinations/ribeira-sacra',
    status: 'open' as const,
    date: '2025-10-05',
    published: true
  },
  {
    id: 'dolomites',
    name: 'Dolomites Skyrace',
    route: '/destinations/dolomites',
    status: 'upcoming' as const,
    date: '2025-07-08',
    published: true
  },
  {
    id: 'chianti',
    name: 'Chianti Ultra Trail',
    route: '/destinations/chianti',
    status: 'open' as const,
    date: '2025-05-03',
    published: true
  },
  {
    id: 'zugspitz',
    name: 'Zugspitz Ultratrail',
    route: '/destinations/zugspitz',
    status: 'open' as const,
    date: '2025-06-28',
    published: true
  }
].filter(destination => destination.published); // Only return published destinations

export const getDestinationById = (id: string) => DESTINATIONS.find(dest => dest.id === id);
export const getDestinationByName = (name: string) => DESTINATIONS.find(dest => dest.name === name);