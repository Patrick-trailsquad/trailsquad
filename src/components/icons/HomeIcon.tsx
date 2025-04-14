
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

const HomeIcon = ({ className }: IconProps) => (
  <img 
    src="/lovable-uploads/d8d01ab2-763d-47d1-a958-3c98c6f08808.png" 
    alt="Home Icon" 
    className={cn("w-5 h-5 md:w-6 md:h-6", className)}
  />
);

export default HomeIcon;
