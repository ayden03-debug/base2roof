
import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { Skeleton } from '@/components/ui/skeleton';

const FALLBACK_PROJECTS = [
  {
    id: '1',
    title: 'Corporate Office Fit-Out',
    project_type: 'Commercial',
    description: 'Complete office transformation including gypsum ceilings, premium flooring, and full electrical installation for a multinational firm.',
    image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    location: 'Business Bay, Dubai',
    completion_date: '2024-01-01',
  },
  {
    id: '2',
    title: 'Luxury Villa Renovation',
    project_type: 'Residential',
    description: 'Full-scope renovation featuring marble flooring, custom gypsum ceilings, bespoke paintwork, and complete plumbing upgrade.',
    image_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    location: 'Palm Jumeirah, Dubai',
    completion_date: '2023-08-01',
  },
  {
    id: '3',
    title: 'Retail Store Interior',
    project_type: 'Retail',
    description: 'High-end retail environment with premium ceramic tile installation, feature gypsum ceiling design, and full electrical fit-out.',
    image_url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    location: 'Dubai Mall, Dubai',
    completion_date: '2023-11-01',
  },
  {
    id: '4',
    title: 'Hotel Lobby Restoration',
    project_type: 'Hospitality',
    description: 'Prestigious hospitality project encompassing interlock flooring, decorative gypsum work, and professional deep-clean services.',
    image_url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    location: 'DIFC, Dubai',
    completion_date: '2023-06-01',
  },
  {
    id: '5',
    title: 'Industrial Facility Painting',
    project_type: 'Industrial',
    description: 'Large-scale painting sub-contract for a warehouse complex, covering 12,000 sqm of internal and external surfaces.',
    image_url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    location: 'Jebel Ali, Dubai',
    completion_date: '2024-02-01',
  },
  {
    id: '6',
    title: 'Government Building Maintenance',
    project_type: 'Government',
    description: 'Comprehensive maintenance contract including cleaning, tiling repairs, painting, and MEP servicing for a public-sector facility.',
    image_url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop',
    location: 'Deira, Dubai',
    completion_date: '2023-12-01',
  },
];

const typeBadgeColors: Record<string, string> = {
  Commercial: 'bg-blue-600/90',
  Residential: 'bg-emerald-600/90',
  Retail: 'bg-purple-600/90',
  Hospitality: 'bg-amber-600/90',
  Industrial: 'bg-orange-600/90',
  Government: 'bg-red-600/90',
};

const ProjectGallery = () => {
  const { data: projects, isLoading, error } = useProjects(true);
  if (error) console.error('Error loading projects:', error);

  const displayProjects = (projects && projects.length > 0) ? projects : FALLBACK_PROJECTS;

  return (
    <section id="projects" className="py-28 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="red-divider" />
              <span className="label-text text-red-400">Portfolio</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white heading-tight">
              Our Latest Projects
            </h2>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed text-sm md:text-right">
            A selection of our work across the UAE — from multinational offices to luxury residences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-[#1a1a1a]">
                <Skeleton className="w-full h-64 rounded-none" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))
          ) : (
            displayProjects.map((project, i) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-1 ${
                  i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image_url || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  {/* Type badge */}
                  <span className={`absolute top-4 left-4 ${typeBadgeColors[project.project_type] || 'bg-red-600/90'} text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full`}>
                    {project.project_type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/30">
                    {project.location && (
                      <span className="flex items-center gap-1.5">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {project.location}
                      </span>
                    )}
                    {project.completion_date && (
                      <span>{new Date(project.completion_date).getFullYear()}</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl shadow-red-soft hover:shadow-red-glow transition-all duration-400 group"
          >
            Discuss Your Project
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
