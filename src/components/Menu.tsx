
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Calendar, Info } from 'lucide-react';

const Menu = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
            <div className="flex items-center justify-center py-4 space-x-12">
              {[
                { href: '#', label: 'Home', icon: Home },
                { href: '#upcoming-trips', label: 'Upcoming destinations', icon: Calendar },
                { href: '#about', label: 'About', icon: Info }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-charcoal hover:text-terra transition-colors duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-cabinet font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Menu;
