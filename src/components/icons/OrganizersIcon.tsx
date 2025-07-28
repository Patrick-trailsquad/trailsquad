import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

const OrganizersIcon = ({ className }: IconProps) => (
  <img 
    src="/lovable-uploads/9142e80e-2cbe-4cc9-936a-e4237d2c8654.png" 
    alt="Organizers Icon" 
    className={cn("w-5 h-5 md:w-6 md:h-6", className)}
  />
);

export default OrganizersIcon;