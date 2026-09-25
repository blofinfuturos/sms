import { Link } from 'react-router-dom';
import { Check, Zap, Crown, Building2, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const plans = [
  {
    name: 'Gratis',
    icon: <Zap size={24} />,
    price: '0€',
    period: 'para siempre',
    description: 'Perfecto para verificaciones puntuales',
    features: [
      'Acceso a 8+ números públicos',
      'Sin registro necesario',
      'SMS en tiempo real',
      'Sin límite de mensajes',
      '8 países disponibles',
    ],
    cta: 'Empezar gratis',
    highlighted: false,
  },
  {
    name: 'Premium',
    icon: <Crown size={24} />,
    price: '4,99€',
    period: '/ mes',
    description: 'Para usuarios que necesitan más privacidad',
    features: [
      'Todo lo del plan Gratis',
      'Números exclusivos premium',
      'Menos congestión, más rápido',
      '14 países adicionales',
      'Soporte prioritario',
      'Sin anuncios',
    ],
    cta: 'Suscribirse',
    highlighted: true,
  },
  {
    name: 'Empresa',
    icon: <Building2 size={24} />,
    price: 'Personalizado',
    period: '',
    description: 'Soluciones a medida para negocios',
    features: [
      'Todo lo del plan Premium',
      'Números dedicados exclusivos',
      'API de acceso a SMS',
      'Múltiples usuarios',
      'SLA garantizado',
      'Gestor de cuenta dedicado',
    ],
    cta: 'Contactar ventas',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="container-page py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Planes y precios</h1>
          <p className="mt-2 text-slate-600">Elige el plan que mejor se adapte a tus necesidades</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 bg-white p-6 shadow-sm transition hover:shadow-lg ${
                plan.highlighted ? 'border-brand-500 ring-2 ring-brand-200' : 'border-slate-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                  Más popular
                </div>
              )}

              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                plan.highlighted ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {plan.icon}
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{plan.description}</p>

              <div className="mt-4">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="ml-1 text-sm text-slate-500">{plan.period}</span>
              </div>

              <Link
                to={plan.name === 'Empresa' ? '/contacto' : '/numeros'}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition ${
                  plan.highlighted
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700'
                    : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </Link>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <h3 className="font-semibold text-slate-900">¿No estás seguro?</h3>
          <p className="mt-2 text-sm text-slate-600">
            Empieza con el plan gratis y cambia cuando quieras. Sin permanencia,
            sin compromiso, cancela cuando quieras.
          </p>
          <Link to="/numeros" className="btn-secondary mt-4">
            Probar gratis <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
