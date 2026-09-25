import { Link } from 'react-router-dom';
import {
  Globe, Smartphone, RefreshCw, Copy, Shield, Check,
  ArrowRight, Zap, Clock, Lock,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-page py-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Cómo funciona SMSVerify</h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Recibir SMS online nunca fue tan fácil. Sigue estos pasos y obtén tu
            código de verificación en menos de un minuto.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-page">
          <div className="space-y-8">
            <StepRow
              num="1"
              icon={<Globe size={28} />}
              title="Elige un número de nuestra lista"
              text="Ve a la página de números disponibles y explora nuestra selección de números virtuales de más de 20 países. Filtra por país, tipo (gratis o premium) y disponibilidad para encontrar el que más te convenga."
              detail="Cada número muestra su estado (en línea u ocupado), la cantidad de SMS recibidos y si es gratuito o premium."
            />
            <StepRow
              num="2"
              icon={<Copy size={28} />}
              title="Copia el número"
              text="Una vez que hayas elegido un número, pulsa el botón 'Copiar' en la tarjeta o entra a la página del número y usa el botón 'Copiar número'. El número se copiará a tu portapapeles listo para usar."
              detail="El número se copia sin espacios, en formato internacional, listo para pegar en cualquier app o web."
            />
            <StepRow
              num="3"
              icon={<Smartphone size={28} />}
              title="Úsalo en el servicio que quieres verificar"
              text="Ve a la aplicación o sitio web donde necesitas verificar tu cuenta (WhatsApp, Telegram, Google, Instagram, etc.) y pega el número cuando te lo pida para enviar un código SMS."
              detail="Asegúrate de seleccionar el país correcto si la app te lo pide. El número ya incluye el código de país."
            />
            <StepRow
              num="4"
              icon={<RefreshCw size={28} />}
              title="Recibe el SMS y copia tu código"
              text="Vuelve a la página del número en SMSVerify. La bandeja de entrada se actualiza automáticamente cada 15 segundos. Verás el mensaje con tu código de verificación. Pulsa sobre el código para copiarlo al instante."
              detail="El sistema detecta automáticamente el código de verificación dentro del mensaje y lo resalta con un botón para copiarlo con un solo clic."
            />
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white section-padding">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-slate-900">Consejos útiles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <TipCard
              icon={<Clock size={22} />}
              title="Sé rápido"
              text="Los números gratuitos son compartidos. Si esperas demasiado, otros mensajes pueden mezclarse con el tuyo. Intenta enviar el SMS justo antes de abrir la bandeja."
            />
            <TipCard
              icon={<Lock size={22} />}
              title="No uses cuentas personales"
              text="Estos números son públicos y cualquier persona puede ver los mensajes. No los uses para registrar cuentas bancarias, correo personal o servicios sensibles."
            />
            <TipCard
              icon={<Shield size={22} />}
              title="Prueba con otro país"
              text="Si un número no recibe el SMS, prueba con uno de otro país. Algunos servicios solo aceptan números de ciertos países."
            />
            <TipCard
              icon={<Zap size={22} />}
              title="Premium = menos esperas"
              text="Los números premium tienen menos usuarios concurrentes, por lo que los mensajes llegan más rápido y hay menos riesgo de mezcla."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold text-slate-900">¿Listo para empezar?</h2>
          <p className="mt-2 text-slate-600">Elige un número y recibe tu primer SMS en segundos.</p>
          <Link to="/numeros" className="btn-primary mt-6">
            Ver números disponibles <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StepRow({ num, icon, title, text, detail }: { num: string; icon: React.ReactNode; title: string; text: string; detail: string }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/20">
          {icon}
        </div>
        <span className="mt-2 text-2xl font-bold text-brand-200">{num}</span>
      </div>
      <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
        <p className="mt-3 flex items-start gap-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
          <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
          {detail}
        </p>
      </div>
    </div>
  );
}

function TipCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
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
