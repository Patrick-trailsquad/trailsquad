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
    id: 'ribeira-sacra',
    name: 'Ribeira Sacra',
    route: '/destinations/ribeira-sacra',
    status: 'completed' as const,
    published: true
  },
  {
    id: 'transylvania',
    name: 'Transylvania 100',
    route: '/destinations/transylvania',
    status: 'completed' as const,

    published: true
  },
  {
    id: 'swiss-alps-100',
    name: 'Swiss Alps 100',
    route: '/destinations/swiss-alps-100',
    status: 'completed' as const,
    published: true
  },
  {
    id: 'kangnu26',
    name: 'KangNu Running Race',
    route: '/destinations/kangnu26',
    status: 'completed' as const,
    published: true
  },
  {
    id: 'infinite-trails',
    name: 'Infinite Trails',
    route: '/destinations/infinite-trails',
    status: 'tickets-closed' as const,
    published: true
  },
  {
    id: 'mallorca-training',
    name: 'Mallorca Træningslejr',
    route: '/destinations/mallorca-training',
    status: 'open' as const,
    published: true
  },
  {
    id: 'transylvania27',
    name: 'Transylvania 100 2027',
    route: '/destinations/transylvania27',
    status: 'open' as const,
    published: true
  },
  {
    id: 'hengill27',
    name: 'Hengill Ultra 2027',
    route: '/destinations/hengill27',
    status: 'open' as const,
    published: true
  },
  {
    id: 'fyri26',
    name: 'Fyri Trail 2027',
    route: '/destinations/fyri26',
    status: 'open' as const,
    published: true
  }
];

export const getDestinationById = (id: string) => DESTINATIONS.find(dest => dest.id === id);
export const getDestinationByName = (name: string) => DESTINATIONS.find(dest => dest.name === name);
