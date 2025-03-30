
import React from 'react';
import { Check, Plus, Trophy, Plane, MapPin, Hotel, Calendar, Video, LineChart } from 'lucide-react';

type IconType = 'entry' | 'travel' | 'transport' | 'hotel' | 'coaching' | 'schedule' | 'marketing' | 'video';

interface IconListItemProps {
  type: IconType;
  children: React.ReactNode;
}

export const IconListItem = ({ type, children }: IconListItemProps) => {
  const getIcon = () => {
    switch (type) {
      case 'entry':
        return <Trophy className="w-5 h-5 text-terra" />;
      case 'travel':
        return <Plane className="w-5 h-5 text-terra" />;
      case 'transport':
        return <MapPin className="w-5 h-5 text-terra" />;
      case 'hotel':
        return <Hotel className="w-5 h-5 text-terra" />;
      case 'coaching':
        return <Check className="w-5 h-5 text-terra" />;
      case 'schedule':
        return <Calendar className="w-5 h-5 text-terra" />;
      case 'marketing':
        return <Plus className="w-5 h-5 text-terra" />;
      case 'video':
        return <Video className="w-5 h-5 text-terra" />;
      default:
        return <Check className="w-5 h-5 text-terra" />;
    }
  };

  return (
    <li className="flex items-start gap-3 py-1.5">
      <div className="mt-0.5 flex-shrink-0 bg-stone-dark rounded-full p-1">
        {getIcon()}
      </div>
      <span>{children}</span>
    </li>
  );
};

interface IconListProps {
  title: string;
  items: {
    type: IconType;
    text: string;
  }[];
  className?: string;
}

const IconList = ({ title, items, className = "" }: IconListProps) => {
  return (
    <div className={`bg-stone p-6 rounded-xl ${className}`}>
      <h2 className="font-cabinet text-2xl font-bold mb-4">{title}</h2>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <IconListItem key={index} type={item.type}>
            {item.text}
          </IconListItem>
        ))}
      </ul>
    </div>
  );
};

export default IconList;
