
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Service = Tables<'services'>;

export const useServices = (featuredOnly: boolean = false) => {
  return useQuery({
    queryKey: ['services', featuredOnly],
    queryFn: async () => {
      let query = supabase
        .from('services')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });
      
      if (featuredOnly) {
        query = query.eq('featured', true);
      }
      
      const { data, error } = await query;
      
      if (error) {
        throw error;
      }
      
      return data || [];
    },
  });
};
