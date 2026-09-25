import { Link } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
            <MessageSquare size={20} />
          </span>
          SMS<span className="text-slate-500">Verify</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link to="/#numeros" className="hover:text-slate-900 transition">Números</Link>
          <a href="#como-funciona" className="hover:text-slate-900 transition">Cómo funciona</a>
          <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
        </nav>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            <Link to="/#numeros" onClick={() => setMobileOpen(false)}>Números</Link>
            <a href="#como-funciona" onClick={() => setMobileOpen(false)}>Cómo funciona</a>
            <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
          </div>
        </nav>
      )}
    </header>
  );
}
