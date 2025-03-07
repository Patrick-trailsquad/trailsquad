
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";

const BackToDestinationsButton = () => {
  const navigateAndScroll = useNavigateAndScroll();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigateAndScroll('/', 'upcoming-trips');
  };

  return (
    <div className="flex justify-center mt-16 mb-8">
      <button
        onClick={handleClick}
        className="bg-charcoal text-white px-8 py-4 rounded-lg hover:bg-charcoal/90 transition-colors duration-300"
      >
        Back to Destinations
      </button>
    </div>
  );
};

export default BackToDestinationsButton;
