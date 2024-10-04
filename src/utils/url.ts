export const createGoogleMapUrl = ({ lat, lang }: { lat: number; lang: number }) =>
  `https://maps.google.com/?q=${lat},${lang}`;

export const creatWebsiteUrl = (website: string) => new URL(`https://www.${website}`);

export const createMailtoUrl = (email: string) => `mailto:${email}`;

export const createPhoneUrl = (phone: string) => `tell+:${phone}`;
