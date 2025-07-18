import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Wine } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('privada-authenticated');
    navigate('/', { replace: true });
    window.location.reload(); // Ensures state resets
  };

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/collection', label: 'PRIVADA Barrels' },
    { path: '/bottling', label: 'Bottles & Service' },
    { path: '/about', label: 'Our Story' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/home" className="flex items-center space-x-3">
            <span className="font-serif text-2xl font-bold text-gold-500 tracking-[0.12em]">
              PRIVADA
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-nav text-sm font-light tracking-[0.12em] uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-gold-500 border-b border-gold-500 pb-1'
                    : 'text-primary-100/80 hover:text-gold-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="ml-8 font-nav text-sm font-light tracking-[0.12em] uppercase transition-colors duration-300 text-gold-500 border border-gold-500 rounded px-4 py-2 hover:bg-gold-500 hover:text-black"
            >
              Log Out
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden relative flex items-center">
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="p-2 focus:outline-none"
              aria-label="Open menu"
            >
              {/* Hamburger icon */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gold-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-32 w-48 bg-black border border-zinc-800 shadow-lg z-50 flex flex-col rounded-none">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`px-6 py-3 text-sm font-nav font-light tracking-[0.12em] uppercase transition-colors duration-300 text-left border-b border-zinc-800 last:border-b-0 ${
                      location.pathname === item.path
                        ? 'text-gold-500 bg-zinc-900'
                        : 'text-primary-100/80 hover:text-gold-500 hover:bg-zinc-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => { setMenuOpen(false); handleLogout(); }}
                  className="px-6 py-3 text-sm font-nav font-light tracking-[0.12em] uppercase transition-colors duration-300 text-gold-500 border-t border-gold-500 hover:bg-gold-500 hover:text-black text-left"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;