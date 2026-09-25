import { useState } from 'react';
import { Shield, Zap, Globe, RefreshCw, ChevronDown, ArrowRight, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NumberCard from '../components/NumberCard';
import { phoneNumbers } from '../data/numbers';

const faqs = [
  {
    q: '¿Es gratis recibir SMS?',
    a: 'Sí. La mayoría de nuestros números virtuales son totalmente gratuitos. Solo necesitas elegir un número de la lista y empezar a recibir mensajes al instante, sin necesidad de registrarte.',
  },
  {
    q: '¿Puedo usar el mismo número varias veces?',
    a: 'Sí. Los números gratuitos son compartidos y públicos, por lo que varias personas pueden usarlos simultáneamente. Los números premium ofrecen mayor privacidad y menos congestión.',
  },
  {
    q: '¿Cuánto tarda en llegar el SMS?',
    a: 'Los mensajes suelen aparecer en pantalla en menos de 15 segundos después de ser enviados. La página se actualiza automáticamente.',
  },
  {
    q: '¿Puedo responder a los mensajes?',
    a: 'No. Este servicio es solo de recepción. Puedes leer los SMS entrantes pero no enviar respuestas desde estos números virtuales.',
  },
  {
    q: '¿Es seguro usar estos números?',
    a: 'Los números son públicos, por lo que no deben usarse para cuentas personales o bancarias. Son ideales para verificaciones rápidas, pruebas de aplicaciones y servicios que requieren confirmación por SMS.',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'gratis' | 'premium'>('gratis');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredNumbers = phoneNumbers.filter((n) => n.type === activeTab);
  const onlineCount = phoneNumbers.filter((n) => n.online).length;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(15,23,42,0.04),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {onlineCount} números activos ahora mismo
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl animate-slide-up">
            Recibe SMS online
            <br />
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              al instante
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 animate-slide-up">
            Números virtuales temporales de más de 10 países. Sin registro, sin
            esperas. Verifica tus cuentas en segundos.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-slide-up">
            <a
              href="#numeros"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
            >
              Ver números disponibles
              <ArrowRight size={18} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cómo funciona
            </a>
          </div>

          <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-500" /> 100% gratis
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-500" /> Sin registro
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-500" /> +10 países
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-100 bg-slate-900 py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-4 text-center">
          <div>
            <p className="text-3xl font-bold text-white sm:text-4xl">{phoneNumbers.length}+</p>
            <p className="mt-1 text-sm text-slate-400">Números activos</p>
          </div>
          <div className="border-x border-slate-700">
            <p className="text-3xl font-bold text-white sm:text-4xl">10+</p>
            <p className="mt-1 text-sm text-slate-400">Países</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white sm:text-4xl">850K+</p>
            <p className="mt-1 text-sm text-slate-400">SMS recibidos</p>
          </div>
        </div>
      </section>

      {/* Numbers section */}
      <section id="numeros" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Números disponibles
          </h2>
          <p className="mt-2 text-slate-600">
            Elige un número y empieza a recibir mensajes al instante
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <button
            onClick={() => setActiveTab('gratis')}
            className={`rounded-xl px-6 py-2.5 font-medium transition ${
              activeTab === 'gratis'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Números Gratis
          </button>
          <button
            onClick={() => setActiveTab('premium')}
            className={`rounded-xl px-6 py-2.5 font-medium transition ${
              activeTab === 'premium'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Números Premium
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNumbers.map((phone) => (
            <NumberCard key={phone.id} phone={phone} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Cómo funciona
            </h2>
            <p className="mt-2 text-slate-600">
              Recibe tu código de verificación en 3 simples pasos
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <StepCard
              icon={<Globe size={24} />}
              num="1"
              title="Elige un número"
              text="Selecciona el país y el número virtual que prefieras de nuestra lista."
            />
            <StepCard
              icon={<Zap size={24} />}
              num="2"
              title="Usa el número"
              text="Introduce el número en el servicio o aplicación que quieres verificar."
            />
            <StepCard
              icon={<RefreshCw size={24} />}
              num="3"
              title="Recibe el SMS"
              text="El mensaje aparece automáticamente en la página del número. Copia tu código."
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Zap size={22} />}
            title="Instantáneo"
            text="Los SMS aparecen en pantalla segundos después de enviarse."
          />
          <FeatureCard
            icon={<Shield size={22} />}
            title="Privado"
            text="No necesitas dar tu número real. Usa un número virtual temporal."
          />
          <FeatureCard
            icon={<Globe size={22} />}
            title="Multi-país"
            text="Números de más de 10 países: EE.UU., España, México, Alemania y más."
          />
          <FeatureCard
            icon={<RefreshCw size={22} />}
            title="Siempre actualizado"
            text="La bandeja de entrada se refresca sola para mostrar los últimos mensajes."
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-slate-900"
                >
                  {faq.q}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-400 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StepCard({
  icon,
  num,
  title,
  text,
}: {
  icon: React.ReactNode;
  num: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative rounded-2xl bg-white p-6 text-center shadow-sm transition hover:shadow-md">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
        {icon}
      </div>
      <div className="absolute right-4 top-4 text-5xl font-bold text-slate-100">
        {num}
      </div>
      <h3 className="mt-4 font-semibold text-lg text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 transition hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
        {icon}
      </div>
      <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}
