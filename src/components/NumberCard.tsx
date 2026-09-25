import { Link } from 'react-router-dom';
import { Copy, Check, MessageSquare, Dot } from 'lucide-react';
import { useState } from 'react';
import type { PhoneNumber } from '../types';

export default function NumberCard({ phone }: { phone: PhoneNumber }) {
  const [copied, setCopied] = useState(false);

  const copyNumber = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(phone.number.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Link
      to={`/numero/${phone.id}`}
      className="card group block p-5 transition-all hover:border-brand-300 hover:shadow-lg animate-slide-up"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{phone.flag}</span>
          <div>
            <h3 className="font-semibold text-slate-900">{phone.country}</h3>
            <p className="font-mono text-sm text-slate-500">{phone.number}</p>
          </div>
        </div>
        {phone.type === 'premium' ? (
          <span className="badge bg-amber-100 text-amber-700">Premium</span>
        ) : (
          <span className="badge bg-emerald-100 text-emerald-700">Gratis</span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-slate-500">
          <span className={`flex items-center gap-0.5 font-medium ${phone.online ? 'text-emerald-600' : 'text-slate-400'}`}>
            <Dot size={16} className={phone.online ? 'text-emerald-500' : 'text-slate-400'} />
            {phone.online ? 'En línea' : 'Ocupado'}
          </span>
          <span className="mx-1.5 text-slate-300">|</span>
          <span className="flex items-center gap-1">
            <MessageSquare size={13} />
            {phone.messagesReceived} SMS
          </span>
        </div>
        <button
          onClick={copyNumber}
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
        >
          {copied ? (
            <>
              <Check size={14} className="text-emerald-500" /> Copiado
            </>
          ) : (
            <>
              <Copy size={14} /> Copiar
            </>
          )}
        </button>
      </div>
    </Link>
  );
}
