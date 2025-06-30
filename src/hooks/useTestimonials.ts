
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Testimonial = Tables<'testimonials'>;

export const useTestimonials = (featuredOnly: boolean = false) => {
  return useQuery({
    queryKey: ['testimonials', featuredOnly],
    queryFn: async () => {
      let query = supabase
        .from('testimonials')
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
