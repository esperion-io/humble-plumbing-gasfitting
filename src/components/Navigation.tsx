import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImage from '/assets/logo.png';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Humble Plumbing and Gasfitting" 
              className="h-16 w-auto lg:h-20"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-primary-800">
                Humble Plumbing
              </h1>
              <p className="text-lg lg:text-xl font-bold text-primary-800">
                & Gasfitting
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Phone Number & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+64210420062" 
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <Phone className="h-4 w-4" />
              <span>021 042 0062</span>
            </a>
            <button 
              onClick={() => scrollToSection('#quote-form')}
              className="btn-primary"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a 
              href="tel:+64210420062" 
              className="flex items-center space-x-1 text-primary-600 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">021 042 0062</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium rounded-md"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <button 
                  onClick={() => scrollToSection('#quote-form')}
                  className="w-full btn-primary"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;