export interface MallorcaRoomType {
  key: string;
  name: string;
  priceLabel: string;
  size: string;
  beds: string;
  description: string;
  highlight: boolean;
  available: number;
}

export const roomTypes: MallorcaRoomType[] = [
  {
    key: "deluxe",
    name: "Deluxe Dobbeltværelse",
    priceLabel: "Inkluderet i prisen",
    size: "Ca. 22 m²",
    beds: "2 enkeltsenge eller dobbeltseng",
    description:
      "Vores standardværelse — lyst og komfortabelt med alt hvad du skal bruge efter en dag i bjergene.",
    highlight: true,
    available: 2,
  },
  {
    key: "superior",
    name: "Superior Dobbeltværelse",
    priceLabel: "+350 DKK pr. person",
    size: "Ca. 26 m²",
    beds: "2 enkeltsenge eller dobbeltseng",
    description:
      "Mere plads, bedre udsigt og ekstra komfort — godt hvis I er to der deler værelse.",
    highlight: false,
    available: 3,
  },
  {
    key: "junior-suite",
    name: "Juniorsuite",
    priceLabel: "+650 DKK pr. person",
    size: "Ca. 33 m² med separat siddeområde",
    beds: "Kun dobbeltseng",
    description:
      "Hotellets største værelser med siddeområde og ekstra luft omkring dig. Bemærk: kun dobbeltseng.",
    highlight: false,
    available: 3,
  },
];

export const ROOM_AVAILABILITY: Record<string, number> = roomTypes.reduce(
  (acc, room) => ({ ...acc, [room.key]: room.available }),
  {}
);
