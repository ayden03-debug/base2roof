
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Project = Tables<'projects'>;

export const useProjects = (featuredOnly: boolean = false) => {
  return useQuery({
    queryKey: ['projects', featuredOnly],
    queryFn: async () => {
      let query = supabase
        .from('projects')
        .select('*')
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
