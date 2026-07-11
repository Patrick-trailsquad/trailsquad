import { useEffect, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/21931910/u13r20b/';
const DELAY_MS = 20_000;

interface CallMeBackPopupProps {
  destinationName: string;
  storageKey?: string;
}

const CallMeBackPopup = ({ destinationName, storageKey }: CallMeBackPopupProps) => {
  const key = storageKey ?? `cmb_popup_dismissed_${destinationName}`;
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+45 ');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(key)) return;
    const t = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(t);
  }, [key]);

  const dismiss = () => {
    sessionStorage.setItem(key, '1');
    setOpen(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value;
    if (!v.startsWith('+45')) v = '+45 ' + v.replace(/^\+?45?\s*/, '');
    setPhone(v);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
          full_name: fullName,
          phone_number: phone,
          request_type: 'call_back_request',
          source: 'timed_popup',
          submitted_at: new Date().toISOString(),
          triggered_from: window.location.origin,
          destination_page: window.location.pathname,
          destination_name: destinationName,
        }),
      });
      sessionStorage.setItem(key, '1');
      setIsSubmitted(true);
      toast({ title: 'Anmodning sendt', description: 'Vi kontakter dig snarest muligt!' });
    } catch (err) {
      console.error('Popup call-back error', err);
      toast({
        title: 'Fejl',
        description: 'Kunne ikke sende anmodningen. Prøv venligst igen.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-stone-50 rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-2 w-full bg-gradient-to-r from-orange via-yellow-400 to-orange" />

        <button
          type="button"
          onClick={dismiss}
          aria-label="Luk"
          className="absolute top-3 right-3 p-2 text-stone-400 hover:text-stone-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <CheckCircle2 className="h-12 w-12 text-green-600 mb-3" />
              <h2 className="font-cabinet text-2xl font-bold text-charcoal mb-2">
                Tak – vi ringer dig op!
              </h2>
              <p className="text-stone-600 text-sm mb-6">
                Vi kontakter dig snarest muligt på det oplyste nummer.
              </p>
              <Button onClick={dismiss} className="w-full">Luk</Button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="font-cabinet text-2xl font-black text-charcoal uppercase tracking-tight mb-2">
                  Skal vi ringe dig op?
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Har du spørgsmål til turen? Indtast dit nummer, så ringer vi til en uforpligtende snak.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1.5 ml-1">
                    Fulde navn
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="F.eks. Anders Jensen"
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1.5 ml-1">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+45 12345678"
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all text-stone-900"
                  />
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <Button
                    type="submit"
                    disabled={isLoading || !fullName || !phone || phone.trim() === '+45'}
                    className="w-full py-4 h-auto bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg border-0"
                  >
                    {isLoading ? 'Sender...' : 'Send anmodning'}
                  </Button>
                  <button
                    type="button"
                    onClick={dismiss}
                    disabled={isLoading}
                    className="w-full py-2 text-stone-400 hover:text-red-500 font-bold text-xs uppercase tracking-widest transition-colors"
                  >
                    Nej tak
                  </button>
                </div>
              </form>

              <p className="mt-5 text-[10px] text-center text-stone-400 leading-tight">
                Ved at indsende accepterer du at blive kontaktet af Trail Squad.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallMeBackPopup;
