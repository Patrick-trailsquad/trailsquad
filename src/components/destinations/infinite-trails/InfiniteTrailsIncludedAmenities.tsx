import IncludedAmenities from "../IncludedAmenities";

interface InfiniteTrailsIncludedAmenitiesProps {
  className?: string;
}

const InfiniteTrailsIncludedAmenities = ({ className }: InfiniteTrailsIncludedAmenitiesProps) => {
  return (
    <IncludedAmenities 
      className={className}
    />
  );
};

export default InfiniteTrailsIncludedAmenities;
