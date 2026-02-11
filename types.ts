export interface UserProfile {
  name: string;
  totoId: string;
  birthday: string;
  email: string;
  indianPhone: string;
  nationality: string;
  avatarUrl?: string;
}

export type View = 'home' | 'profile' | 'thanksgiving';

export interface CurrencyRate {
  currency: string;
  rate: number;
  change: number; // Percentage change
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  reward: string;
  completed: boolean;
  icon: 'transaction' | 'transfer' | 'time';
}
