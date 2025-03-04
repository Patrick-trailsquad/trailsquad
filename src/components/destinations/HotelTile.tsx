
interface HotelTileProps {
  name: string;
  imageUrl: string;
}

const HotelTile = ({ name, imageUrl }: HotelTileProps) => {
  return (
    <div className="relative h-64 rounded-xl overflow-hidden group">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/60">
        <h3 className="text-white font-cabinet text-2xl font-medium text-center px-4">{name}</h3>
      </div>
    </div>
  );
};

export default HotelTile;
