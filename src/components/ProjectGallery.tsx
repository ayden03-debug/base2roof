
import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { Skeleton } from '@/components/ui/skeleton';

// Real highlighted projects from base2roof.ae/projects.html — exact titles, locations & images
const HIGHLIGHTED_PROJECTS = [
  {
    id: '1',
    title: 'Internal & External Painting',
    location: 'Autism Centre at Garhoud, Dubai',
    project_type: 'Painting',
    image_url: 'https://base2roof.ae/img/project-v3/1.jpg',
  },
  {
    id: '2',
    title: 'Internal & External Painting',
    location: 'Premier Inn Hotel near Dragon Mart, Dubai',
    project_type: 'Painting',
    image_url: 'https://base2roof.ae/img/project-v3/2.jpg',
  },
  {
    id: '3',
    title: 'Internal & External Painting',
    location: "15 & 17 Villas — Al Barsha Villa Project, Dubai",
    project_type: 'Painting',
    image_url: 'https://base2roof.ae/img/project-v3/3.jpg',
  },
  {
    id: '4',
    title: 'Internal & External Painting',
    location: 'G+4+R Residential Buildings, DWC, Dubai',
    project_type: 'Painting',
    image_url: 'https://base2roof.ae/img/project-v3/4.jpg',
  },
  {
    id: '5',
    title: 'Internal & External Painting',
    location: 'Belgravia-1 at JVC, Dubai',
    project_type: 'Painting',
    image_url: 'https://base2roof.ae/img/project-v3/5.jpg',
  },
  {
    id: '6',
    title: 'Internal & External Painting',
    location: 'Meera Villa, Jumeirah, Dubai',
    project_type: 'Painting',
    image_url: 'https://base2roof.ae/img/project-v3/6.jpg',
  },
  {
    id: '7',
    title: 'Internal & External Painting',
    location: 'Masjid Jama for Mr. Majid Al Futtaim, Hor Al Anz, Dubai',
    project_type: 'Painting',
    image_url: 'https://base2roof.ae/img/project-v3/7.jpg',
  },
  {
    id: '8',
    title: 'Internal & External Painting',
    location: 'G+4 Labour Accommodations, DIP, Dubai',
    project_type: 'Painting',
    image_url: 'https://base2roof.ae/img/project-v3/8.jpg',
  },
];

const ProjectGallery = () => {
  const { data: dbProjects, isLoading, error } = useProjects(true);
  if (error) console.error('Error loading projects:', error);

  // Use DB projects if available, otherwise fall back to real highlighted projects
  const displayProjects = (dbProjects && dbProjects.length > 0) ? dbProjects : HIGHLIGHTED_PROJECTS;

  return (
    <section id="projects" className="py-16 md:py-28 bg-[#0d0d0d]">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="red-divider-anim" />
              <span className="label-text text-red-400">Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white heading-tight">
              Highlighted Projects
            </h2>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed text-sm md:text-right reveal-right">
            A showcase of real completed projects delivered by our team across Dubai and the UAE.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-[#1a1a1a]">
                <Skeleton className="w-full h-72 rounded-none" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))
          ) : (
            displayProjects.map((project, i) => (
              <div
                key={project.id}
                className={`reveal stagger-${(i % 8) + 1} group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-red-600/30 transition-all duration-500`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52 sm:h-64 md:h-72">
                  <img
                    src={project.image_url}
                    alt={`${project.title} — ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Type badge */}
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-red-600/90 text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                    {project.project_type}
                  </span>

                  {/* Title & location overlaid on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-white font-bold text-base sm:text-lg leading-snug mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm flex items-center gap-1.5 min-w-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="truncate">{project.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl shadow-red-soft hover:shadow-red-glow transition-all duration-400 group min-h-[52px]"
          >
            Start Your Project
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
