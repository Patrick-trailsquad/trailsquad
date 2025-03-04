
interface HotelTileProps {
  name: string;
  imageUrl: string;
}

const HotelTile = ({ name, imageUrl }: HotelTileProps) => {
  return (
    <div className="relative h-80 rounded-xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.02]">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-8 transition-all duration-300">
        <h3 className="text-white font-cabinet text-2xl font-medium text-center mb-2">{name}</h3>
        <p className="text-stone/90 text-sm tracking-wider uppercase">5 Star Luxury Hotel</p>
      </div>
    </div>
  );
};

export default HotelTile;
