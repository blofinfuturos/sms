export interface PhoneNumber {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  number: string;
  type: 'gratis' | 'premium';
  online: boolean;
  lastReceived?: string;
  messagesReceived: number;
}

export interface SmsMessage {
  id: string;
  phoneNumberId: string;
  sender: string;
  body: string;
  receivedAt: string;
}
