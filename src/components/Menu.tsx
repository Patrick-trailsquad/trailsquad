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
                <SheetTrigger asChild className="md:hidden">
                  <button className="p-2 hover:bg-gray-100 rounded-md">
                    <MenuIcon className="w-6 h-6 text-charcoal" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-black/95 p-0 !border-0">
                  <div className="flex flex-col items-center justify-center min-h-screen relative -translate-y-5">
                    <svg 
                      className="absolute bottom-20 left-0 w-full h-48"
                      viewBox="0 0 1200 200" 
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 200 C50 180 150 100 300 80 C350 70 380 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140 C1150 120 1180 110 1200 100"
                        fill="none"
                        stroke="#FFDC00"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-pulse"
                      />
                      <path
                        d="M100 200 C200 150 300 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140"
                        fill="none"
                        stroke="#FFDC00"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="10,10"
                        className="opacity-70"
                      />
                      <path
                        d="M50 200 C150 170 250 140 350 120 C450 160 550 180 650 190 C750 140 850 100 950 80"
                        fill="none"
                        stroke="#FFDC00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="5,15"
                        className="opacity-40"
                      />
                      <path
                        d="M0 200 C100 160 200 130 300 110 C400 150 500 170 600 185 C700 130 800 90 900 70"
                        fill="none"
                        stroke="#FFDC00"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-30"
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
