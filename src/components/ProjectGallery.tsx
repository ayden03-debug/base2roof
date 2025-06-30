
import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectGallery = () => {
  const { data: projects, isLoading, error } = useProjects(true); // Only featured projects

  if (error) {
    console.error('Error loading projects:', error);
  }

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Latest Projects
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional interior fit-out projects across Dubai and the UAE. 
            Each space tells a unique story of transformation and excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                  <Skeleton className="w-full h-80" />
                </div>
                <div className="mt-6 space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))
          ) : projects && projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={project.image_url || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="inline-block px-3 py-1 bg-red-600 text-xs font-semibold uppercase tracking-wide rounded-full mb-3">
                      {project.project_type}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{project.description}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wide rounded-full">
                      {project.project_type}
                    </span>
                    {project.budget_range && (
                      <span className="text-sm text-gray-500 font-medium">{project.budget_range}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {project.location && (
                      <span className="flex items-center">
                        <div className="w-4 h-4 bg-red-100 rounded-full mr-2"></div>
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
              <p className="text-gray-500">No projects found.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Projects
            <div className="ml-2 w-5 h-5 bg-white/20 rounded-full"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
