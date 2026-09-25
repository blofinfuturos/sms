import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState<'gratis' | 'premium'>('gratis');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold">SMSVerify</h1>
          <nav className="flex gap-4 text-sm text-slate-600">
            <a href="#numeros" className="hover:text-slate-900">Números</a>
            <a href="#como-funciona" className="hover:text-slate-900">Cómo funciona</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Recibe SMS online al instante
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Números virtuales temporales de varios países. Sin registro, sin esperar.
          Verifica tus cuentas en segundos.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href="#numeros"
            className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Ver números disponibles
          </a>
        </div>
      </section>

      <section id="numeros" className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setActiveTab('gratis')}
            className={`rounded-lg px-5 py-2 font-medium transition ${
              activeTab === 'gratis'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Números Gratis
          </button>
          <button
            onClick={() => setActiveTab('premium')}
            className={`rounded-lg px-5 py-2 font-medium transition ${
              activeTab === 'premium'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Números Premium
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeTab === 'gratis' ? (
            <>
              <PhoneCard country="Estados Unidos" flag="🇺🇸" number="+1 385 123 4567" />
              <PhoneCard country="Reino Unido" flag="🇬🇧" number="+44 7700 900123" />
              <PhoneCard country="Suecia" flag="🇸🇪" number="+46 70 123 4567" />
            </>
          ) : (
            <>
              <PhoneCard country="España" flag="🇪🇸" number="+34 612 345 678" premium />
              <PhoneCard country="México" flag="🇲🇽" number="+52 55 1234 5678" premium />
              <PhoneCard country="Alemania" flag="🇩🇪" number="+49 151 23456789" premium />
            </>
          )}
        </div>
      </section>

      <section id="como-funciona" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h3 className="text-2xl font-bold text-center">Cómo funciona</h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <Step num="1" title="Elige un número" text="Selecciona un país y un número de la lista." />
            <Step num="2" title="Usa el número" text="Introdúcelo en el servicio que quieras verificar." />
            <Step num="3" title="Recibe el SMS" text="El código llega automáticamente en pantalla." />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © 2026 SMSVerify · Servicio para verificaciones legítimas
      </footer>
    </div>
  );
}

function PhoneCard({
  country,
  flag,
  number,
  premium,
}: {
  country: string;
  flag: string;
  number: string;
  premium?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{flag}</span>
        {premium && (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
            Premium
          </span>
        )}
      </div>
      <h4 className="mt-3 font-semibold">{country}</h4>
      <p className="mt-1 font-mono text-sm text-slate-600">{number}</p>
      <button className="mt-4 w-full rounded-lg bg-slate-900 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
        Ver mensajes
      </button>
    </div>
  );
}

function Step({ num, title, text }: { num: string; title: string; text: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
        {num}
      </div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}

export default App;
