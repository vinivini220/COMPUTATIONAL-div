import { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/image.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // fixed navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // 👉 Mobile menu auto close
      setIsOpen(false);
    }
  };

  const navigationItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Background', id: 'background' },
    // { label: 'Trial Summary', id: 'trial-summary' },
    // { label: 'Objectives', id: 'objectives' },
    // { label: 'Resources', id: 'resources' },
    // { label: 'Map', id: 'map' },
    // { label: 'Partners', id: 'collaborators' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[10000] bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="navbar pre-navbar flex justify-end items-end p-1 bg-red-400 ">
        <div className="container flex gap-4 justify-end items-end">
          <a href="#" className="font-medium hover:underline">
            Randomisation System
          </a>
          <a href="#" className="font-medium hover:underline">
            IMP Management System
          </a>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img src={logoImage} alt="Logo" className="h-8 w-auto" />
            <Activity className="w-6 h-6 text-accent pulse-medical" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
