
import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { Skeleton } from '@/components/ui/skeleton';

// Real project names from base2roof.ae
const FALLBACK_PROJECTS = [
  {
    id: '1',
    title: 'Gypsum Ceiling',
    project_type: 'Gypsum Work',
    description: 'Superior quality gypsum false ceiling installation — specially designed and delivered with industry-recognised craftsmanship.',
    image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    location: 'Dubai, UAE',
    completion_date: '2024-01-01',
  },
  {
    id: '2',
    title: 'Roofing Works',
    project_type: 'Waterproofing',
    description: 'Comprehensive concrete roof waterproofing and membrane services protecting the structure from moisture damage.',
    image_url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    location: 'Dubai, UAE',
    completion_date: '2023-09-01',
  },
  {
    id: '3',
    title: 'Tile Fixing Works',
    project_type: 'Tile Installation',
    description: 'Wall and floor ceramic tile and marble installation completed to the highest standard — one of hundreds of tile projects delivered across Dubai and the UAE.',
    image_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    location: 'Dubai, UAE',
    completion_date: '2023-11-01',
  },
  {
    id: '4',
    title: 'Painting Works',
    project_type: 'Painting',
    description: 'Professional commercial painting sub-contracting project carried out by our highly experienced and dedicated painting team.',
    image_url: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop',
    location: 'Dubai, UAE',
    completion_date: '2024-02-01',
  },
  {
    id: '5',
    title: 'Painting Work',
    project_type: 'Painting',
    description: 'Large-scale residential and commercial painting project, delivering flawless finishes across all interior and exterior surfaces.',
    image_url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    location: 'Abu Hail, Dubai',
    completion_date: '2023-06-01',
  },
  {
    id: '6',
    title: 'Wooden Maintenance',
    project_type: 'Carpentry',
    description: 'Carpentry and wooden maintenance works including door polishing, cabinet installation, and pergola construction.',
    image_url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop',
    location: 'Dubai, UAE',
    completion_date: '2023-12-01',
  },
];

const typeBadgeColors: Record<string, string> = {
  'Gypsum Work': 'bg-purple-600/90',
  'Waterproofing': 'bg-blue-600/90',
  'Tile Installation': 'bg-emerald-600/90',
  'Painting': 'bg-orange-600/90',
  'Carpentry': 'bg-amber-600/90',
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
              Our Projects
            </h2>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed text-sm md:text-right">
            A selection of our completed work across the UAE — from gypsum and tiling to painting and waterproofing.
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
            displayProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image_url || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
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
