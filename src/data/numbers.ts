import type { PhoneNumber, SmsMessage } from '../types';

export const phoneNumbers: PhoneNumber[] = [
  // Gratis
  { id: 'us-1', country: 'Estados Unidos', countryCode: 'US', flag: '🇺🇸', number: '+1 385 123 4567', type: 'gratis', online: true, messagesReceived: 1284 },
  { id: 'uk-1', country: 'Reino Unido', countryCode: 'GB', flag: '🇬🇧', number: '+44 7700 900123', type: 'gratis', online: true, messagesReceived: 892 },
  { id: 'se-1', country: 'Suecia', countryCode: 'SE', flag: '🇸🇪', number: '+46 70 123 4567', type: 'gratis', online: false, messagesReceived: 445 },
  { id: 'nl-1', country: 'Países Bajos', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 1234 5678', type: 'gratis', online: true, messagesReceived: 678 },
  { id: 'fi-1', country: 'Finlandia', countryCode: 'FI', flag: '🇫🇮', number: '+358 40 123 4567', type: 'gratis', online: true, messagesReceived: 312 },
  { id: 'pl-1', country: 'Polonia', countryCode: 'PL', flag: '🇵🇱', number: '+48 512 345 678', type: 'gratis', online: true, messagesReceived: 521 },
  { id: 'no-1', country: 'Noruega', countryCode: 'NO', flag: '🇳🇴', number: '+47 412 34 567', type: 'gratis', online: false, messagesReceived: 198 },
  { id: 'ro-1', country: 'Rumanía', countryCode: 'RO', flag: '🇷🇴', number: '+40 712 345 678', type: 'gratis', online: true, messagesReceived: 387 },

  // Premium
  { id: 'es-1', country: 'España', countryCode: 'ES', flag: '🇪🇸', number: '+34 612 345 678', type: 'premium', online: true, messagesReceived: 1567 },
  { id: 'mx-1', country: 'México', countryCode: 'MX', flag: '🇲🇽', number: '+52 55 1234 5678', type: 'premium', online: true, messagesReceived: 2103 },
  { id: 'de-1', country: 'Alemania', countryCode: 'DE', flag: '🇩🇪', number: '+49 151 2345 6789', type: 'premium', online: true, messagesReceived: 1890 },
  { id: 'fr-1', country: 'Francia', countryCode: 'FR', flag: '🇫🇷', number: '+33 6 12 34 56 78', type: 'premium', online: false, messagesReceived: 534 },
  { id: 'it-1', country: 'Italia', countryCode: 'IT', flag: '🇮🇹', number: '+39 320 123 4567', type: 'premium', online: true, messagesReceived: 721 },
  { id: 'br-1', country: 'Brasil', countryCode: 'BR', flag: '🇧🇷', number: '+55 11 91234 5678', type: 'premium', online: true, messagesReceived: 1342 },
  { id: 'ar-1', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 9 11 1234 5678', type: 'premium', online: true, messagesReceived: 876 },
  { id: 'co-1', country: 'Colombia', countryCode: 'CO', flag: '🇨🇴', number: '+57 312 345 6789', type: 'premium', online: true, messagesReceived: 645 },
  { id: 'cl-1', country: 'Chile', countryCode: 'CL', flag: '🇨🇱', number: '+56 9 1234 5678', type: 'premium', online: false, messagesReceived: 412 },
  { id: 'pe-1', country: 'Perú', countryCode: 'PE', flag: '🇵🇪', number: '+51 912 345 678', type: 'premium', online: true, messagesReceived: 389 },
  { id: 'ca-1', country: 'Canadá', countryCode: 'CA', flag: '🇨🇦', number: '+1 416 234 5678', type: 'premium', online: true, messagesReceived: 1023 },
  { id: 'au-1', country: 'Australia', countryCode: 'AU', flag: '🇦🇺', number: '+61 412 345 678', type: 'premium', online: true, messagesReceived: 687 },
  { id: 'jp-1', country: 'Japón', countryCode: 'JP', flag: '🇯🇵', number: '+81 90 1234 5678', type: 'premium', online: true, messagesReceived: 456 },
  { id: 'in-1', country: 'India', countryCode: 'IN', flag: '🇮🇳', number: '+91 98765 43210', type: 'premium', online: true, messagesReceived: 2341 },
];

export const sampleMessages: Record<string, SmsMessage[]> = {
  'us-1': [
    { id: 'm1', phoneNumberId: 'us-1', sender: 'WhatsApp', body: 'Tu código de verificación de WhatsApp es: 482913. No lo compartas con nadie.', receivedAt: '2026-09-25T10:32:00Z' },
    { id: 'm2', phoneNumberId: 'us-1', sender: 'Telegram', body: 'Telegram code: 27184. Do not give this code to anyone, even if they say they are from Telegram!', receivedAt: '2026-09-25T10:18:00Z' },
    { id: 'm3', phoneNumberId: 'us-1', sender: 'Google', body: 'G-123456 es tu código de verificación de Google.', receivedAt: '2026-09-25T09:45:00Z' },
    { id: 'm4', phoneNumberId: 'us-1', sender: 'Instagram', body: 'Usa 385102 para iniciar sesión en Instagram.', receivedAt: '2026-09-25T09:20:00Z' },
    { id: 'm5', phoneNumberId: 'us-1', sender: 'Discord', body: 'Your Discord verification code is: 726318', receivedAt: '2026-09-25T08:55:00Z' },
  ],
  'uk-1': [
    { id: 'm6', phoneNumberId: 'uk-1', sender: 'Tinder', body: 'Your Tinder code is 392104. Do not share it.', receivedAt: '2026-09-25T10:40:00Z' },
    { id: 'm7', phoneNumberId: 'uk-1', sender: 'Microsoft', body: 'Microsoft account security code: 829104', receivedAt: '2026-09-25T10:05:00Z' },
  ],
  'nl-1': [
    { id: 'm8', phoneNumberId: 'nl-1', sender: 'WhatsApp', body: 'Tu código de verificación de WhatsApp es: 920384.', receivedAt: '2026-09-25T10:50:00Z' },
  ],
  'se-1': [
    { id: 'm9', phoneNumberId: 'se-1', sender: 'Signal', body: 'Signal verification code: 102938', receivedAt: '2026-09-25T08:30:00Z' },
  ],
  'fi-1': [
    { id: 'm10', phoneNumberId: 'fi-1', sender: 'OpenAI', body: 'Your ChatGPT verification code is: 582019', receivedAt: '2026-09-25T10:15:00Z' },
  ],
  'pl-1': [
    { id: 'm11b', phoneNumberId: 'pl-1', sender: 'Netflix', body: 'Netflix: 482910 is your verification code.', receivedAt: '2026-09-25T10:22:00Z' },
  ],
  'ro-1': [
    { id: 'm12b', phoneNumberId: 'ro-1', sender: 'WhatsApp', body: 'Your WhatsApp code: 729103', receivedAt: '2026-09-25T10:10:00Z' },
  ],
  'es-1': [
    { id: 'm11', phoneNumberId: 'es-1', sender: 'WhatsApp', body: 'Tu código de WhatsApp es: 472910. No lo compartas.', receivedAt: '2026-09-25T10:48:00Z' },
    { id: 'm12', phoneNumberId: 'es-1', sender: 'Binance', body: 'Binance verification code: 820193. Valid for 10 minutes.', receivedAt: '2026-09-25T10:25:00Z' },
  ],
  'mx-1': [
    { id: 'm13', phoneNumberId: 'mx-1', sender: 'MercadoLibre', body: 'Tu código de MercadoLibre es 293847', receivedAt: '2026-09-25T10:52:00Z' },
    { id: 'm14', phoneNumberId: 'mx-1', sender: 'Telegram', body: 'Telegram code: 472019. No lo compartas con nadie.', receivedAt: '2026-09-25T10:30:00Z' },
    { id: 'm15', phoneNumberId: 'mx-1', sender: 'Uber', body: 'Your Uber code is 3847. Never share this code.', receivedAt: '2026-09-25T09:50:00Z' },
  ],
  'de-1': [
    { id: 'm16', phoneNumberId: 'de-1', sender: 'WhatsApp', body: 'Dein WhatsApp-Code: 729103', receivedAt: '2026-09-25T10:35:00Z' },
    { id: 'm17', phoneNumberId: 'de-1', sender: 'Amazon', body: 'Amazon: 482910 is your one-time password.', receivedAt: '2026-09-25T10:10:00Z' },
  ],
  'fr-1': [
    { id: 'm18', phoneNumberId: 'fr-1', sender: 'Snapchat', body: 'Your Snapchat code is 384729', receivedAt: '2026-09-25T09:40:00Z' },
  ],
  'it-1': [
    { id: 'm19', phoneNumberId: 'it-1', sender: 'Spotify', body: 'Spotify code: 729103', receivedAt: '2026-09-25T10:20:00Z' },
  ],
  'br-1': [
    { id: 'm20', phoneNumberId: 'br-1', sender: 'WhatsApp', body: 'Seu código do WhatsApp é: 382910. Não compartilhe.', receivedAt: '2026-09-25T10:45:00Z' },
    { id: 'm21', phoneNumberId: 'br-1', sender: 'Nubank', body: 'Código Nubank: 928374', receivedAt: '2026-09-25T10:12:00Z' },
  ],
  'ar-1': [
    { id: 'm22', phoneNumberId: 'ar-1', sender: 'MercadoPago', body: 'Tu código de MercadoPago es 472819', receivedAt: '2026-09-25T10:38:00Z' },
  ],
  'co-1': [
    { id: 'm23', phoneNumberId: 'co-1', sender: 'WhatsApp', body: 'Tu código de WhatsApp es: 829301', receivedAt: '2026-09-25T10:42:00Z' },
  ],
  'ca-1': [
    { id: 'm24', phoneNumberId: 'ca-1', sender: 'Steam', body: 'Steam Guard code: WB3R9', receivedAt: '2026-09-25T10:28:00Z' },
  ],
  'au-1': [
    { id: 'm25', phoneNumberId: 'au-1', sender: 'WhatsApp', body: 'Your WhatsApp code: 472910', receivedAt: '2026-09-25T10:18:00Z' },
  ],
  'jp-1': [
    { id: 'm26', phoneNumberId: 'jp-1', sender: 'LINE', body: 'LINE verification code: 729103', receivedAt: '2026-09-25T10:33:00Z' },
  ],
  'in-1': [
    { id: 'm27', phoneNumberId: 'in-1', sender: 'WhatsApp', body: 'Your WhatsApp code: 382910', receivedAt: '2026-09-25T10:48:00Z' },
    { id: 'm28', phoneNumberId: 'in-1', sender: 'Paytm', body: 'Paytm OTP: 482910. Do not share.', receivedAt: '2026-09-25T10:20:00Z' },
  ],
};

export function getNumberById(id: string): PhoneNumber | undefined {
  return phoneNumbers.find((n) => n.id === id);
}

export function getMessagesForNumber(id: string): SmsMessage[] {
  return sampleMessages[id] ?? [];
}

export function getUniqueCountries(): string[] {
  return [...new Set(phoneNumbers.map((n) => n.country))].sort();
}
