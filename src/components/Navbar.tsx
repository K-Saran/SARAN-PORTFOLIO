import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '/resume.pdf', isDownload: true },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg neon-border-cyan" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold neon-text-rainbow flicker"
          >
            PORTFOLIO
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isDownload ? (
                <motion.a
                  key={item.name}
                  href={item.href}
                  download
                  className="relative px-4 py-2 transition-all duration-300 text-sm font-medium text-foreground hover:text-neon-magenta"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ) : (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative px-4 py-2 transition-all duration-300 text-sm font-medium",
                    activeSection === item.href.substring(1)
                      ? "text-neon-cyan neon-text"
                      : "text-foreground hover:text-neon-magenta"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  
                  {/* Active indicator */}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan glow-cyan"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-neon-cyan hover:text-neon-magenta transition-colors"
            onClick={() => {
              // Simple mobile menu implementation
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              item.isDownload ? (
                <motion.a
                  key={item.name}
                  href={item.href}
                  download
                  onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
                  className="text-left px-4 py-2 transition-all duration-300 rounded text-foreground hover:text-neon-magenta hover:bg-card/50"
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ) : (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className={cn(
                    "text-left px-4 py-2 transition-all duration-300 rounded",
                    activeSection === item.href.substring(1)
                      ? "text-neon-cyan neon-text bg-card"
                      : "text-foreground hover:text-neon-magenta hover:bg-card/50"
                  )}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.button>
              )
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};