// Shared, invisible bot protection for lead forms (waitlists, call-back, newsletter).
// A blocked submission gets a fake "success" so the bot never learns it was stopped.

export const MIN_FILL_TIME_MS = 4000;

const BOT_EMAIL_DOMAIN = /@example\.(com|org|net|test)$/i;
const BOT_EMAIL_LOCAL = /^(functest|test|qa|spam|bot|noreply)/i;
const BOT_NAME = /(\btest\b|testing|please ignore|functest|asdf|qwerty|xxx+)/i;

export const looksLikeSpam = (name: string, email: string): boolean => {
  const e = email.trim().toLowerCase();
  const n = name.trim();
  if (e && BOT_EMAIL_DOMAIN.test(e)) return true;
  if (e && BOT_EMAIL_LOCAL.test(e.split("@")[0])) return true;
  if (n && BOT_NAME.test(n)) return true;
  return false;
};

/**
 * Returns true when the submission should be silently dropped:
 * - honeypot field filled (only bots see it)
 * - form submitted faster than a human can type
 * - name/email matches known bot patterns
 */
export const isBotSubmission = (
  honeypot: string,
  openedAt: number,
  name: string,
  email: string
): boolean => {
  if (honeypot.trim() !== "") return true;
  if (Date.now() - openedAt < MIN_FILL_TIME_MS) return true;
  return looksLikeSpam(name, email);
};
