import { Link } from 'react-router-dom';
import { MessageSquare, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 font-bold text-slate-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <MessageSquare size={18} />
              </span>
              SMS<span className="text-brand-600">Verify</span>
            </div>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Recibe SMS online con números virtuales temporales. Rápido, gratis y
              sin registro.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-slate-400 transition hover:text-brand-600"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 transition hover:text-brand-600"><Github size={20} /></a>
              <a href="#" className="text-slate-400 transition hover:text-brand-600"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 text-sm">Servicio</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li><Link to="/numeros" className="hover:text-brand-600 transition">Números disponibles</Link></li>
              <li><Link to="/precios" className="hover:text-brand-600 transition">Precios</Link></li>
              <li><Link to="/como-funciona" className="hover:text-brand-600 transition">Cómo funciona</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 text-sm">Soporte</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li><Link to="/faq" className="hover:text-brand-600 transition">Preguntas frecuentes</Link></li>
              <li><Link to="/contacto" className="hover:text-brand-600 transition">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 text-sm">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition">Términos de uso</a></li>
              <li><a href="#" className="hover:text-brand-600 transition">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          © 2026 SMSVerify · Servicio para verificaciones legítimas. No nos
          responsabilizamos del uso indebido.
        </div>
      </div>
    </footer>
  );
}
