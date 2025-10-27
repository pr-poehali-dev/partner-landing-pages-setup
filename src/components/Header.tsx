import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О компании' },
    { path: '/developers-with-repair', label: 'Застройщики с ремонтом' },
    { path: '/developers-without-repair', label: 'УК и застройщики' },
    { path: '/agencies', label: 'Агентства недвижимости' },
    { path: '/suppliers', label: 'Поставщики' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="bg-white border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="Building2" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-primary">РемонтПартнер</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-all font-medium text-sm ${
                  location.pathname === link.path
                    ? 'bg-accent text-white'
                    : 'text-foreground hover:text-accent hover:bg-accent/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'bg-accent text-accent-foreground font-semibold'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;