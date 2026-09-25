import { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Clock, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="container-page py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contacto</h1>
          <p className="mt-2 text-slate-600">¿Tienes dudas o sugerencias? Escríbenos.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-8 lg:grid-cols-3">
          {/* Contact info */}
          <div className="space-y-4">
            <InfoCard
              icon={<Mail size={20} />}
              title="Email"
              text="soporte@smsverify.com"
            />
            <InfoCard
              icon={<Clock size={20} />}
              title="Tiempo de respuesta"
              text="Normalmente en menos de 24 horas"
            />
            <InfoCard
              icon={<Globe size={20} />}
              title="Idiomas"
              text="Español e inglés"
            />
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="card flex flex-col items-center p-10 text-center animate-fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={32} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">¡Mensaje enviado!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Gracias por contactarnos. Te responderemos lo antes posible.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary mt-6"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Nombre</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700">Asunto</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="">Selecciona un asunto...</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="empresa">Consulta empresarial</option>
                    <option value="sugerencia">Sugerencia</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
                <button type="submit" className="btn-primary mt-6 w-full">
                  <Send size={18} /> Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        {icon}
      </div>
      <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}
