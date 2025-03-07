
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";
import { Button } from "../ui/button";

const BackToDestinationsButton = () => {
  const navigateAndScroll = useNavigateAndScroll();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigateAndScroll('/', 'upcoming-trips');
  };

  return (
    <div className="flex justify-center mt-16 mb-8">
      <Button
        onClick={handleClick}
        variant="black"
        size="xl"
      >
        Back to Destinations
      </Button>
    </div>
  );
};

export default BackToDestinationsButton;
