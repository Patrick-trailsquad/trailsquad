
import { useNavigateAndScroll } from "../../hooks/useNavigateAndScroll";
import { Button } from "../ui/button";

const BackToDestinationsButton = () => {
  const navigateAndScroll = useNavigateAndScroll();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigateAndScroll('/', 'upcoming-trips');
  };

  return (
    <div className="flex justify-center mt-8 mb-4">
      <Button
        onClick={handleClick}
        variant="black"
        size="xl"
      >
        Tilbage til destinationer
      </Button>
    </div>
  );
};

export default BackToDestinationsButton;
