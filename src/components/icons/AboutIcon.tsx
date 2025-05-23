
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

const AboutIcon = ({ className }: IconProps) => (
  <img 
    src="/lovable-uploads/7ed01825-7e71-4bb6-a449-e87f5156a524.png" 
    alt="About Icon" 
    className={cn("w-5 h-5 md:w-6 md:h-6", className)}
  />
);

export default AboutIcon;
