import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Copy,
  Check,
  RefreshCw,
  Inbox,
  Clock,
  Dot,
  MessageSquare,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getNumberById, getMessagesForNumber } from '../data/numbers';
import type { SmsMessage } from '../types';

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Hace un momento';
  if (mins < 60) return `Hace ${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Hace ${hours}h`;
  return `Hace ${Math.floor(hours / 24)}d`;
}

export default function NumberDetail() {
  const { id } = useParams<{ id: string }>();
  const phone = id ? getNumberById(id) : undefined;
  const [copied, setCopied] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState<SmsMessage[]>([]);
  const [selectedMsg, setSelectedMsg] = useState<SmsMessage | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (id) {
      setMessages(getMessagesForNumber(id));
      // Auto-refresh simulation
      timerRef.current = setInterval(() => {
        setRefreshing(true);
        setTimeout(() => {
          setMessages(getMessagesForNumber(id));
          setRefreshing(false);
        }, 600);
      }, 15000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [id]);

  if (!phone) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Número no encontrado</h1>
          <p className="mt-2 text-slate-600">El número que buscas no existe o ya no está disponible.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            <ArrowLeft size={18} /> Volver al inicio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const copyNumber = () => {
    navigator.clipboard.writeText(phone.number.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const manualRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setMessages(getMessagesForNumber(phone.id));
      setRefreshing(false);
    }, 600);
  };

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const extractCode = (body: string): string | null => {
    const match = body.match(/\b\d{4,8}\b/);
    return match ? match[0] : null;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Breadcrumb */}
        <Link
          to="/#numeros"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft size={16} /> Volver a números
        </Link>

        {/* Number info card */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-in">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-5xl">{phone.flag}</span>
              <div>
                <h1 className="text-xl font-bold text-slate-900">{phone.country}</h1>
                <p className="font-mono text-2xl font-semibold text-slate-700">{phone.number}</p>
                <div className="mt-1.5 flex items-center gap-3 text-sm">
                  <span className={`flex items-center gap-0.5 font-medium ${phone.online ? 'text-emerald-600' : 'text-slate-400'}`}>
                    <Dot size={16} className={phone.online ? 'text-emerald-500' : 'text-slate-400'} />
                    {phone.online ? 'En línea' : 'Ocupado'}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MessageSquare size={14} /> {phone.messagesReceived} SMS recibidos
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    phone.type === 'premium' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {phone.type === 'premium' ? 'Premium' : 'Gratis'}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={copyNumber}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              {copied ? (
                <>
                  <Check size={18} /> Copiado
                </>
              ) : (
                <>
                  <Copy size={18} /> Copiar número
                </>
              )}
            </button>
          </div>
        </div>

        {/* Inbox */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div className="flex items-center gap-2">
              <Inbox size={20} className="text-slate-700" />
              <h2 className="font-semibold text-slate-900">Bandeja de entrada</h2>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                {messages.length}
              </span>
            </div>
            <button
              onClick={manualRefresh}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              <RefreshCw size={15} className={refreshing ? 'animate-spin' : ''} />
              Actualizar
            </button>
          </div>

          {messages.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Inbox size={28} />
              </div>
              <p className="mt-4 font-medium text-slate-700">Sin mensajes todavía</p>
              <p className="mt-1 text-sm text-slate-500">
                Los SMS aparecerán aquí automáticamente cuando se reciban.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {messages.map((msg) => {
                const code = extractCode(msg.body);
                return (
                  <div
                    key={msg.id}
                    className={`px-6 py-4 transition hover:bg-slate-50 cursor-pointer ${
                      selectedMsg?.id === msg.id ? 'bg-slate-50' : ''
                    }`}
                    onClick={() => setSelectedMsg(msg)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">{msg.sender}</span>
                          <span className="flex items-center gap-0.5 text-xs text-slate-400">
                            <Clock size={12} /> {timeAgo(msg.receivedAt)}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{msg.body}</p>
                        {code && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyCode(code);
                            }}
                            className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-sm font-bold text-slate-800 transition hover:border-slate-300 hover:bg-white"
                          >
                            {copiedCode ? (
                              <>
                                <Check size={14} className="text-emerald-500" /> Código copiado
                              </>
                            ) : (
                              <>
                                <Copy size={14} /> {code}
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Info notice */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
          <div className="mt-0.5 shrink-0">
            <Dot size={20} className="text-amber-500" />
          </div>
          <p>
            La bandeja de entrada se actualiza automáticamente cada 15 segundos.
            Este es un número {phone.type === 'premium' ? 'premium' : 'gratuito y público'},
            por lo que otros usuarios pueden ver los mensajes recibidos. No lo uses
            para cuentas personales o bancarias.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
