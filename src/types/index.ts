export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

export type UserRole = 'user' | 'admin';

export interface Profile {
  id: string;
  email: string | null;
  username: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: 'pending' | 'completed';
  created_at: string;
  updated_at: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  shipment_type: string;
  origin: string;
  destination: string;
  weight: string | null;
  dimensions: string | null;
  pickup_date: string | null;
  additional_info: string | null;
  status: 'pending' | 'completed';
  created_at: string;
  updated_at: string;
}
