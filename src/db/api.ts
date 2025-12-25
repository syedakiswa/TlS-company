import { supabase } from './supabase';
import type { ContactSubmission, QuoteRequest, Profile } from '@/types';

// Contact Submissions
export async function createContactSubmission(data: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at' | 'status'>) {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
}

export async function getContactSubmissions(page = 1, limit = 10, status?: string, search?: string) {
  let query = supabase
    .from('contact_submissions')
    .select('*', { count: 'exact' });

  if (status && status !== 'all') {
    query = query.eq('status', status);
  }

  if (search) {
    query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,message.ilike.%${search}%`);
  }

  const { data, error, count } = await query
    .order('created_at', { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (error) throw error;
  return { data: Array.isArray(data) ? data : [], count: count || 0 };
}

export async function updateContactSubmissionStatus(id: string, status: 'pending' | 'completed') {
  const { data, error } = await supabase
    .from('contact_submissions')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function deleteContactSubmission(id: string) {
  const { error } = await supabase
    .from('contact_submissions')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Quote Requests
export async function createQuoteRequest(data: Omit<QuoteRequest, 'id' | 'created_at' | 'updated_at' | 'status'>) {
  const { data: result, error } = await supabase
    .from('quote_requests')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
}

export async function getQuoteRequests(page = 1, limit = 10, status?: string, search?: string) {
  let query = supabase
    .from('quote_requests')
    .select('*', { count: 'exact' });

  if (status && status !== 'all') {
    query = query.eq('status', status);
  }

  if (search) {
    query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%,origin.ilike.%${search}%,destination.ilike.%${search}%`);
  }

  const { data, error, count } = await query
    .order('created_at', { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (error) throw error;
  return { data: Array.isArray(data) ? data : [], count: count || 0 };
}

export async function updateQuoteRequestStatus(id: string, status: 'pending' | 'completed') {
  const { data, error } = await supabase
    .from('quote_requests')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function deleteQuoteRequest(id: string) {
  const { error } = await supabase
    .from('quote_requests')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Analytics
export async function getAnalytics() {
  const [contactStats, quoteStats] = await Promise.all([
    supabase.from('contact_submissions').select('status', { count: 'exact' }),
    supabase.from('quote_requests').select('status', { count: 'exact' })
  ]);

  const [contactPending, contactCompleted] = await Promise.all([
    supabase.from('contact_submissions').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
    supabase.from('contact_submissions').select('*', { count: 'exact', head: true }).eq('status', 'completed')
  ]);

  const [quotePending, quoteCompleted] = await Promise.all([
    supabase.from('quote_requests').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
    supabase.from('quote_requests').select('*', { count: 'exact', head: true }).eq('status', 'completed')
  ]);

  return {
    totalSubmissions: (contactStats.count || 0) + (quoteStats.count || 0),
    contactSubmissions: contactStats.count || 0,
    quoteRequests: quoteStats.count || 0,
    pendingCount: (contactPending.count || 0) + (quotePending.count || 0),
    completedCount: (contactCompleted.count || 0) + (quoteCompleted.count || 0),
    contactPending: contactPending.count || 0,
    contactCompleted: contactCompleted.count || 0,
    quotePending: quotePending.count || 0,
    quoteCompleted: quoteCompleted.count || 0
  };
}

// Profiles
export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function getAllProfiles() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return Array.isArray(data) ? data : [];
}

export async function updateUserRole(userId: string, role: 'user' | 'admin') {
  const { data, error } = await supabase
    .from('profiles')
    .update({ role, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .maybeSingle();

  if (error) throw error;
  return data;
}
