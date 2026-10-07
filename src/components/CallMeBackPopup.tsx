import { useEffect, useState } from 'react';
import CallMeBackModal from './CallMeBackModal';

const DELAY_MS = 20_000;

interface CallMeBackPopupProps {
  destinationName: string;
  storageKey?: string;
}

const CallMeBackPopup = ({ destinationName, storageKey }: CallMeBackPopupProps) => {
  const key = storageKey ?? `cmb_popup_dismissed_${destinationName}`;
  const [open, setOpen] = useState(false);

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

  return (
    <CallMeBackModal
      open={open}
      onDismiss={dismiss}
      destinationName={destinationName}
    />
  );
};

export default CallMeBackPopup;
