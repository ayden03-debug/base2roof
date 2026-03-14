
import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectGallery = () => {
  const { data: projects, isLoading, error } = useProjects(true);

  if (error) {
    console.error('Error loading projects:', error);
  }

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-minimal text-muted-foreground mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground text-architectural">
              Our Latest Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
            Exceptional interior fit-out projects across Dubai and the UAE — each space a unique story of transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-muted">
                  <Skeleton className="w-full h-80" />
                </div>
                <div className="mt-5 space-y-2">
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))
          ) : projects && projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-architectural transition-all duration-500">
                  <img
                    src={project.image_url || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-medium uppercase tracking-wider rounded-full mb-3">
                      {project.project_type}
                    </span>
                    <h3 className="text-lg font-medium">{project.title}</h3>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-minimal text-muted-foreground">
                      {project.project_type}
                    </span>
                    {project.budget_range && (
                      <span className="text-xs text-muted-foreground">{project.budget_range}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-muted-foreground transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    {project.location && (
                      <span className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No projects found.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium rounded-xl hover:bg-foreground/90 transition-all duration-500"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
