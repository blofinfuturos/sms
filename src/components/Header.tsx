import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Números', href: '/numeros' },
  { label: 'Cómo funciona', href: '/como-funciona' },
  { label: 'Precios', href: '/precios' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container-page flex items-center justify-between py-3.5">
        <Link to="/" className="flex items-center gap-2.5 text-lg font-extrabold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/30">
            <MessageSquare size={20} />
          </span>
          <span>
            SMS<span className="text-brand-600">Verify</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive(link.href)
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/numeros" className="btn-primary text-sm">
            Empezar gratis
          </Link>
        </div>

        <button
          className="text-slate-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden animate-slide-down">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  isActive(link.href)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
