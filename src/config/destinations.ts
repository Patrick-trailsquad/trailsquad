export interface Destination {
  id: string;
  name: string;
  route: string;
  status: 'upcoming' | 'open' | 'closed' | 'completed';
  date?: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'gtc',
    name: 'GTC Swiss Alps',
    route: '/destinations/gtc',
    status: 'upcoming',
    date: '2025-07-15'
  },
  {
    id: 'miut',
    name: 'MIUT Madeira',
    route: '/destinations/miut',
    status: 'open',
    date: '2025-04-25'
  },
  {
    id: 'vesuvio',
    name: 'Vesuvio Trail',
    route: '/destinations/vesuvio',
    status: 'open',
    date: '2025-03-20'
  },
  {
    id: 'norwegian-fjords',
    name: 'Norwegian Fjords',
    route: '/destinations/norwegian-fjords',
    status: 'completed',
    date: '2024-08-20'
  },
  {
    id: 'transylvania',
    name: 'Transylvania 100',
    route: '/destinations/transylvania',
    status: 'open',
    date: '2025-09-12'
  },
  {
    id: 'mont-blanc',
    name: 'Mont Blanc Trail',
    route: '/destinations/mont-blanc',
    status: 'upcoming',
    date: '2025-06-20'
  },
  {
    id: 'black-forest',
    name: 'Black Forest Trail',
    route: '/destinations/black-forest',
    status: 'open',
    date: '2025-05-15'
  },
  {
    id: 'ribeira-sacra',
    name: 'Ribeira Sacra',
    route: '/destinations/ribeira-sacra',
    status: 'open',
    date: '2025-10-05'
  },
  {
    id: 'dolomites',
    name: 'Dolomites Skyrace',
    route: '/destinations/dolomites',
    status: 'upcoming',
    date: '2025-07-08'
  },
  {
    id: 'chianti',
    name: 'Chianti Ultra Trail',
    route: '/destinations/chianti',
    status: 'open',
    date: '2025-05-03'
  },
  {
    id: 'zugspitz',
    name: 'Zugspitz Ultratrail',
    route: '/destinations/zugspitz',
    status: 'open',
    date: '2025-06-28'
  }
];

export const getDestinationById = (id: string) => DESTINATIONS.find(dest => dest.id === id);
export const getDestinationByName = (name: string) => DESTINATIONS.find(dest => dest.name === name);