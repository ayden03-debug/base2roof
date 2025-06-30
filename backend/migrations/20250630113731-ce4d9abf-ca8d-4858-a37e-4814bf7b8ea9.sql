
-- Create quotes table to store quote requests from the contact form
CREATE TABLE public.quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT NOT NULL,
  budget TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'quoted', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create projects table for portfolio/gallery
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  project_type TEXT NOT NULL,
  location TEXT,
  completion_date DATE,
  budget_range TEXT,
  client_name TEXT,
  image_url TEXT,
  gallery_images TEXT[], -- Array of image URLs
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'completed' CHECK (status IN ('planning', 'in_progress', 'completed', 'on_hold')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_company TEXT,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  project_id UUID REFERENCES public.projects(id),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create services table
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price_range TEXT,
  duration_estimate TEXT,
  featured BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table for content marketing
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert sample data for projects
INSERT INTO public.projects (title, description, project_type, location, completion_date, budget_range, client_name, image_url, featured) VALUES
('Modern Office Transformation', 'Complete office renovation with modern design elements and smart technology integration.', 'office', 'Dubai Marina', '2024-01-15', 'AED 250K - 500K', 'TechCorp Solutions', 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop', true),
('Luxury Retail Space', 'High-end retail interior design with premium finishes and customer experience focus.', 'retail', 'Mall of the Emirates', '2023-12-20', 'AED 500K+', 'Fashion Forward LLC', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop', true),
('Boutique Hotel Lobby', 'Elegant hotel lobby design combining traditional and contemporary elements.', 'hospitality', 'Jumeirah Beach', '2023-11-10', 'AED 100K - 250K', 'Seaside Hospitality', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop', true),
('Medical Center Fitout', 'Professional healthcare facility design prioritizing patient comfort and functionality.', 'healthcare', 'Dubai Healthcare City', '2023-10-05', 'AED 250K - 500K', 'Premier Medical Group', 'https://images.unsplash.com/photo-1586773860418-d37222d8ebc8?q=80&w=2000&auto=format&fit=crop', false);

-- Insert sample data for testimonials
INSERT INTO public.testimonials (client_name, client_company, content, rating, featured) VALUES
('Sarah Johnson', 'TechCorp Solutions', 'Base2Roof transformed our office space beyond our expectations. The attention to detail and professional approach made the entire process seamless.', 5, true),
('Ahmed Al-Rashid', 'Fashion Forward LLC', 'Outstanding work on our retail space. The design perfectly captures our brand identity while creating an inviting shopping environment.', 5, true),
('Maria Garcia', 'Seaside Hospitality', 'Professional team with excellent project management. They delivered on time and within budget while maintaining the highest quality standards.', 5, true);

-- Insert sample data for services
INSERT INTO public.services (name, description, price_range, duration_estimate, featured) VALUES
('Office Fit-out', 'Complete office interior design and fit-out services including space planning, furniture, and technology integration.', 'AED 150-800 per sqft', '4-12 weeks', true),
('Retail Interior Design', 'Specialized retail space design focusing on customer experience and brand representation.', 'AED 200-1000 per sqft', '6-16 weeks', true),
('Hospitality Design', 'Hotel, restaurant, and hospitality venue interior design with focus on guest experience.', 'AED 300-1200 per sqft', '8-20 weeks', true),
('Healthcare Facilities', 'Medical center and healthcare facility design prioritizing functionality and patient comfort.', 'AED 250-900 per sqft', '6-14 weeks', false),
('Residential Renovation', 'High-end residential interior design and renovation services.', 'AED 200-600 per sqft', '4-10 weeks', false);

-- Enable Row Level Security (but make tables publicly readable for now since this is a business website)
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (business website should show portfolio publicly)
CREATE POLICY "Public can view projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public can view testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Public can view services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public can view published blog posts" ON public.blog_posts FOR SELECT USING (published = true);

-- Allow anyone to insert quotes (contact form submissions)
CREATE POLICY "Anyone can submit quotes" ON public.quotes FOR INSERT WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_quotes_updated_at BEFORE UPDATE ON public.quotes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
