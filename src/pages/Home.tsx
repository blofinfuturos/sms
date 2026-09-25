import { Link } from 'react-router-dom';
import {
  Shield, Zap, Globe, RefreshCw, ArrowRight, Check,
  MessageSquare, Lock, Smartphone, Eye, Sparkles,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NumberCard from '../components/NumberCard';
import { phoneNumbers } from '../data/numbers';

export default function Home() {
  const onlineCount = phoneNumbers.filter((n) => n.online).length;
  const featured = phoneNumbers.slice(0, 6);
  const totalSms = phoneNumbers.reduce((sum, n) => sum + n.messagesReceived, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-white" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-200/20 blur-3xl" />
        <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-accent-200/20 blur-3xl" />

        <div className="container-page relative py-20 text-center sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {onlineCount} números activos ahora mismo
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold text-slate-900 sm:text-6xl animate-slide-up">
            Recibe SMS online
            <span className="block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              al instante y sin registro
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 animate-slide-up">
            Números virtuales temporales de más de 20 países. Verifica tus cuentas
            en segundos sin dar tu número real.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-slide-up">
            <Link to="/numeros" className="btn-primary">
              Ver números disponibles
              <ArrowRight size={18} />
            </Link>
            <Link to="/como-funciona" className="btn-secondary">
              Cómo funciona
            </Link>
          </div>

          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-500" /> 100% gratis
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-500" /> Sin registro
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-500" /> +20 países
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-500" /> Sin tarjeta
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-slate-900 py-10">
        <div className="container-page grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-white sm:text-4xl">{phoneNumbers.length}+</p>
            <p className="mt-1 text-sm text-slate-400">Números activos</p>
          </div>
          <div className="border-x border-slate-700">
            <p className="text-3xl font-bold text-white sm:text-4xl">20+</p>
            <p className="mt-1 text-sm text-slate-400">Países</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white sm:text-4xl">{(totalSms / 1000).toFixed(0)}K+</p>
            <p className="mt-1 text-sm text-slate-400">SMS recibidos</p>
          </div>
        </div>
      </section>

      {/* Featured numbers */}
      <section className="section-padding">
        <div className="container-page">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Números destacados</h2>
              <p className="mt-2 text-slate-600">Los más populares esta semana</p>
            </div>
            <Link to="/numeros" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:flex">
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((phone) => (
              <NumberCard key={phone.id} phone={phone} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/numeros" className="btn-secondary">
              Ver todos los números <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 section-padding">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Cómo funciona</h2>
            <p className="mt-2 text-slate-600">Recibe tu código de verificación en 3 simples pasos</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <StepCard icon={<Globe size={24} />} num="1" title="Elige un número" text="Selecciona el país y el número virtual que prefieras de nuestra lista." />
            <StepCard icon={<Smartphone size={24} />} num="2" title="Usa el número" text="Introduce el número en el servicio o app que quieres verificar." />
            <StepCard icon={<RefreshCw size={24} />} num="3" title="Recibe el SMS" text="El mensaje aparece automáticamente. Copia tu código y listo." />
          </div>

          <div className="mt-10 text-center">
            <Link to="/como-funciona" className="btn-secondary">
              Ver guía completa <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">¿Por qué SMSVerify?</h2>
            <p className="mt-2 text-slate-600">La forma más rápida y segura de recibir SMS online</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<Zap size={22} />} title="Instantáneo" text="Los SMS aparecen en pantalla segundos después de enviarse, sin refrescar." />
            <FeatureCard icon={<Shield size={22} />} title="Privado" text="No das tu número real. Usa un número virtual temporal y protege tu privacidad." />
            <FeatureCard icon={<Globe size={22} />} title="Multi-país" text="Números de más de 20 países: EE.UU., España, México, Alemania, Japón y más." />
            <FeatureCard icon={<Lock size={22} />} title="Sin registro" text="No necesitas crear cuenta ni dar datos. Entras y usas, así de simple." />
            <FeatureCard icon={<RefreshCw size={22} />} title="Auto-actualizado" text="La bandeja de entrada se refresca sola para mostrar los últimos mensajes." />
            <FeatureCard icon={<Eye size={22} />} title="Transparente" text="Ves todos los mensajes en tiempo real, sin trampas ni esperas ocultas." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-16 text-center sm:px-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <Sparkles size={32} className="mx-auto text-white/80" />
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Empieza a recibir SMS ahora
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-brand-100">
                Sin registro, sin pagar, sin esperar. Elige un número y recibe tu
                código de verificación en segundos.
              </p>
              <Link
                to="/numeros"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50 active:scale-95"
              >
                Ver números disponibles
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StepCard({ icon, num, title, text }: { icon: React.ReactNode; num: string; title: string; text: string }) {
  return (
    <div className="relative rounded-2xl bg-white p-6 text-center shadow-sm transition hover:shadow-md">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-600/30">
        {icon}
      </div>
      <div className="absolute right-4 top-4 text-5xl font-bold text-slate-100">{num}</div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card p-5 transition hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        {icon}
      </div>
      <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}
