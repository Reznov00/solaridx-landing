export type AccountProviders = 'email' | 'google';

export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  authCode?: string;
  specsId: string | null;
  specsUsername: string | null;
  isEmailVerified: boolean;
  provider?: AccountProviders;
}
export interface AppleServerData {
  name: string;
  email: string;
}


