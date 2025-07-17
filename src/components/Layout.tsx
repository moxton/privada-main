import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wine } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/collection', label: 'Collection' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/home" className="flex items-center space-x-3">
            <Wine className="h-8 w-8 text-gold-500" />
            <span className="font-serif text-2xl font-bold text-primary-100 tracking-wide">
              PRIVADA
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-nav text-sm font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-gold-500 border-b border-gold-500 pb-1'
                    : 'text-primary-100/80 hover:text-gold-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-nav text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-gold-500'
                      : 'text-primary-100/80 hover:text-gold-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;