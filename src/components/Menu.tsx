import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Calendar, Info, Menu as MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from 'react-router-dom';
import { useNavigateAndScroll } from '../hooks/useNavigateAndScroll';

const Menu = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigateAndScroll = useNavigateAndScroll();

  const handleDestinationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0); // Reset scroll position first
    navigateAndScroll('/', 'upcoming-trips');
  };

  const menuItems = [
    { href: '/', label: 'Home', icon: Home, onClick: () => window.scrollTo(0, 0) },
    { 
      href: '#upcoming-trips', 
      label: 'Upcoming destinations', 
      icon: Calendar,
      onClick: handleDestinationsClick 
    },
    { href: '/about', label: 'About', icon: Info, onClick: () => window.scrollTo(0, 0) }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <img 
                src="/lovable-uploads/6470b7fc-98aa-4a8c-bcf6-79708bbcb60c.png" 
                alt="Trail Squad Logo" 
                className="h-10"
              />
              
              <div className="hidden md:flex items-center space-x-12">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={item.onClick}
                    className="flex items-center gap-2 text-charcoal hover:text-terra hover:font-bold transition-all duration-300"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-cabinet font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-gray-100 rounded-md md:hidden">
                    <MenuIcon className="w-6 h-6 text-charcoal" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-black/95 p-0 border-none">
                  <div className="flex flex-col items-center justify-center min-h-screen relative">
                    <svg 
                      className="absolute w-full transform translate-y-[30px]"
                      viewBox="0 0 1200 200" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ filter: 'brightness(1.5)' }}
                    >
                      <path
                        d="M0 200 C50 180 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80 L1200 200 L0 200 Z"
                        fill="none"
                        stroke="#FEF7CD"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ 
                          strokeDasharray: '12,8',
                          opacity: 0.9 
                        }}
                      />
                    </svg>

                    <div className="flex flex-col items-center space-y-8 relative z-10">
                      {menuItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={item.onClick}
                          className="flex items-center gap-2 text-white hover:text-terra hover:font-bold transition-all duration-300"
                        >
                          <item.icon className="w-6 h-6" />
                          <span className="font-cabinet text-xl">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Menu;
