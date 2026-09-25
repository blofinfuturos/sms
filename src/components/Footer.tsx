import { MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
              <MessageSquare size={18} />
            </span>
            SMSVerify
          </div>
          <p className="text-sm text-slate-500 text-center sm:text-right">
            © 2026 SMSVerify · Servicio para verificaciones legítimas.
            <br className="hidden sm:block" /> No nos responsabilizamos del uso indebido.
          </p>
        </div>
      </div>
    </footer>
  );
}
