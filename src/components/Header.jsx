import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuIcon = () => (
  <motion.div 
    className="flex flex-col gap-1.5 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="w-6 h-px bg-white/80" />
    <div className="w-6 h-px bg-white/80" />
  </motion.div>
);

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'vision', label: 'Vision' },
    { id: 'about', label: 'About' },
    { id: 'info', label: 'Info' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'team', label: 'Team' }
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed w-full z-50 backdrop-blur-xl bg-[#020202]/80 border-b border-white/5"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl text-white font-light tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Adivirtus
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
            >
              <MenuIcon />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => scrollToSection('time')}
              className="ml-4 px-6 py-2 text-sm font-medium text-white bg-[#2C7EFF] rounded-full transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(44, 126, 255, 0.9)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {expanded && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col py-4 space-y-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.button
                  onClick={() => scrollToSection('time')}
                  className="px-6 py-2 text-sm font-medium text-white bg-[#2C7EFF] rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
