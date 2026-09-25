import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    category: 'General',
    items: [
      {
        q: '¿Es gratis recibir SMS?',
        a: 'Sí. La mayoría de nuestros números virtuales son totalmente gratuitos. Solo necesitas elegir un número de la lista y empezar a recibir mensajes al instante, sin necesidad de registrarte ni pagar.',
      },
      {
        q: '¿Qué países tienen números disponibles?',
        a: 'Actualmente ofrecemos números de más de 20 países, incluyendo Estados Unidos, Reino Unido, España, México, Alemania, Francia, Italia, Brasil, Argentina, Japón, India y muchos más.',
      },
      {
        q: '¿Necesito registrarme para usar el servicio?',
        a: 'No. Puedes usar los números gratuitos sin crear cuenta ni dar ningún dato personal. Solo entra, elige un número y empieza a recibir SMS.',
      },
    ],
  },
  {
    category: 'Uso del servicio',
    items: [
      {
        q: '¿Puedo usar el mismo número varias veces?',
        a: 'Sí. Los números gratuitos son compartidos y públicos, por lo que varias personas pueden usarlos simultáneamente. Los números premium ofrecen mayor privacidad y menos congestión.',
      },
      {
        q: '¿Cuánto tarda en llegar el SMS?',
        a: 'Los mensajes suelen aparecer en pantalla en menos de 15 segundos después de ser enviados. La página se actualiza automáticamente cada 15 segundos.',
      },
      {
        q: '¿Puedo responder a los mensajes?',
        a: 'No. Este servicio es solo de recepción. Puedes leer los SMS entrantes pero no enviar respuestas desde estos números virtuales.',
      },
      {
        q: '¿Puedo enviar SMS desde estos números?',
        a: 'No, el servicio es exclusivamente de recepción. Solo puedes ver los mensajes que llegan al número, no enviar mensajes desde él.',
      },
    ],
  },
  {
    category: 'Privacidad y seguridad',
    items: [
      {
        q: '¿Es seguro usar estos números?',
        a: 'Los números son públicos, por lo que no deben usarse para cuentas personales, bancarias o cualquier servicio que requiera privacidad real. Son ideales para verificaciones rápidas, pruebas de aplicaciones y servicios que solo requieren confirmación por SMS.',
      },
      {
        q: '¿Quién puede ver los mensajes?',
        a: 'En los números gratuitos, cualquier persona que visite la página del número puede ver los mensajes recibidos. En los números premium, hay menos usuarios concurrentes, por lo que hay menos exposición.',
      },
      {
        q: '¿Guardáis los mensajes?',
        a: 'Los mensajes se muestran temporalmente y se eliminan automáticamente después de un tiempo. No almacenamos mensajes de forma permanente.',
      },
    ],
  },
  {
    category: 'Planes premium',
    items: [
      {
        q: '¿Qué ventajas tiene el plan Premium?',
        a: 'El plan Premium ofrece números exclusivos con menos congestión, 14 países adicionales, soporte prioritario, sin anuncios y mensajes que llegan más rápido.',
      },
      {
        q: '¿Puedo cancelar mi suscripción cuando quiera?',
        a: 'Sí. No hay permanencia ni compromiso. Puedes cancelar tu suscripción en cualquier momento desde tu cuenta.',
      },
      {
        q: '¿Ofrecéis descuentos para empresas?',
        a: 'Sí, contamos con un plan Empresa con números dedicados, API de acceso, múltiples usuarios y precios personalizados. Contáctanos para más información.',
      },
    ],
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>('0-0');

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="container-page py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Preguntas frecuentes</h1>
          <p className="mt-2 text-slate-600">Todo lo que necesitas saber sobre SMSVerify</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-8">
          {faqs.map((group, gi) => (
            <div key={group.category}>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                <MessageCircle size={20} className="text-brand-600" />
                {group.category}
              </h2>
              <div className="space-y-3">
                {group.items.map((faq, fi) => {
                  const key = `${gi}-${fi}`;
                  const isOpen = openFaq === key;
                  return (
                    <div key={key} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : key)}
                        className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-slate-900"
                      >
                        {faq.q}
                        <ChevronDown
                          size={20}
                          className={`shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600 animate-slide-down">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <h3 className="font-semibold text-slate-900">¿Tienes más preguntas?</h3>
          <p className="mt-2 text-sm text-slate-600">
            Si no encuentras la respuesta que buscas, escríbenos y te ayudaremos.
          </p>
          <Link to="/contacto" className="btn-secondary mt-4">
            Contactar con soporte <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
