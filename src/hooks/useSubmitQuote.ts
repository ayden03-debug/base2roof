
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import type { TablesInsert } from '@/integrations/supabase/types';

type QuoteSubmission = Omit<TablesInsert<'quotes'>, 'id' | 'created_at' | 'updated_at' | 'status'>;

export const useSubmitQuote = () => {
  return useMutation({
    mutationFn: async (quoteData: QuoteSubmission) => {
      const { data, error } = await supabase
        .from('quotes')
        .insert([quoteData])
        .select()
        .single();
      
      if (error) {
        throw error;
      }
      
      return data;
    },
    onSuccess: () => {
      toast.success('Quote request submitted successfully! We\'ll get back to you within 24 hours.');
    },
    onError: (error) => {
      console.error('Error submitting quote:', error);
      toast.error('Failed to submit quote request. Please try again.');
    },
  });
};
