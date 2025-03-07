
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Calendar, Info, Menu as MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
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

  const MobileMenu = () => (
    <SheetContent side="top" className="w-full h-[100dvh] bg-black/95 flex items-center justify-center border-none relative overflow-hidden">
      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
      <SheetDescription className="sr-only">Main navigation links</SheetDescription>
      
      {/* Mountain Range Sketch - Yellow Version */}
      <svg 
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 200" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'brightness(1.2)', opacity: 0.3 }}
      >
        <path
          d="M0 200 C50 180 150 100 300 80 C350 70 380 120 400 140 C450 100 480 70 500 60 C550 90 580 140 600 160 C650 120 750 60 800 40 C900 70 950 100 1000 120 C1100 90 1150 85 1200 80 L1200 200 L0 200 Z"
          fill="none"
          stroke="#FFDC00"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ 
            strokeDasharray: '8,8',
            opacity: 0.8 
          }}
        />
        <path
          d="M100 200 C200 150 300 120 400 100 C500 140 550 160 600 180 C700 120 800 80 900 60 C1000 100 1050 120 1100 140 C1150 120 1180 110 1200 100 L1200 200 L100 200 Z"
          fill="none"
          stroke="#FFDC00"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.6 }}
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
    </SheetContent>
  );

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
              
              {/* Desktop Menu */}
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

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="md:hidden">
                    <MenuIcon className="w-6 h-6 text-charcoal" />
                  </button>
                </SheetTrigger>
                <MobileMenu />
              </Sheet>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
