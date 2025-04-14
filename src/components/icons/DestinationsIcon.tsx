
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

const DestinationsIcon = ({ className }: IconProps) => (
  <img 
    src="/lovable-uploads/32d0dbba-2cca-457a-8449-02aaf78f2117.png" 
    alt="Destinations Icon" 
    className={cn("w-5 h-5 md:w-6 md:h-6", className)}
  />
);

export default DestinationsIcon;
