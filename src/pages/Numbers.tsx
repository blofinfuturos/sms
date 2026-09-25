import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NumberCard from '../components/NumberCard';
import { phoneNumbers, getUniqueCountries } from '../data/numbers';

export default function Numbers() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'gratis' | 'premium'>('all');
  const [filterCountry, setFilterCountry] = useState<string>('all');
  const [filterOnline, setFilterOnline] = useState(false);

  const countries = getUniqueCountries();

  const filtered = useMemo(() => {
    return phoneNumbers.filter((n) => {
      if (filterType !== 'all' && n.type !== filterType) return false;
      if (filterCountry !== 'all' && n.country !== filterCountry) return false;
      if (filterOnline && !n.online) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          n.country.toLowerCase().includes(q) ||
          n.number.includes(q)
        );
      }
      return true;
    });
  }, [search, filterType, filterCountry, filterOnline]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="container-page py-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Números disponibles</h1>
          <p className="mt-2 text-slate-600">
            {phoneNumbers.length} números de {countries.length} países — elige uno y empieza a recibir SMS
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por país o número..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 transition focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>

            {/* Type filter */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} className="text-slate-400" />
              <div className="flex gap-1.5">
                {(['all', 'gratis', 'premium'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilterType(t)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                      filterType === t
                        ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {t === 'all' ? 'Todos' : t === 'gratis' ? 'Gratis' : 'Premium'}
                  </button>
                ))}
              </div>
            </div>

            {/* Country filter */}
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            >
              <option value="all">Todos los países</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Online filter */}
            <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600">
              <input
                type="checkbox"
                checked={filterOnline}
                onChange={(e) => setFilterOnline(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-400"
              />
              Solo en línea
            </label>
          </div>
        </div>

        {/* Results */}
        <p className="mt-6 text-sm text-slate-500">
          {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-16 text-center">
            <p className="font-medium text-slate-700">No se encontraron números</p>
            <p className="mt-1 text-sm text-slate-500">Prueba a cambiar los filtros de búsqueda.</p>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((phone) => (
              <NumberCard key={phone.id} phone={phone} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
