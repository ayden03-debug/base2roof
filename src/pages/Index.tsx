
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectGallery from '../components/ProjectGallery';
import AboutSection from '../components/AboutSection';
import QuoteForm from '../components/QuoteForm';
import { useServices } from '@/hooks/useServices';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const { data: services, isLoading: servicesLoading } = useServices(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">B2R</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Base2Roof</span>
                <p className="text-sm text-gray-500">Interior Fit-Out Specialists</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Projects</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
            </nav>
            
            <QuoteForm />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        
        {/* Services Overview */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive fit-out solutions tailored for Dubai's dynamic commercial landscape
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesLoading ? (
                // Loading skeletons
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-600">
                    <Skeleton className="w-16 h-16 rounded-lg mb-6" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ))
              ) : services && services.length > 0 ? (
                services.map((service) => (
                  <div key={service.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-red-600">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                      <div className="w-8 h-8 bg-red-600 rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    {service.price_range && (
                      <div className="text-sm text-red-600 font-semibold">{service.price_range}</div>
                    )}
                    {service.duration_estimate && (
                      <div className="text-sm text-gray-500 mt-1">{service.duration_estimate}</div>
                    )}
                  </div>
                ))
              ) : (
                // Fallback static content
                <>
                  <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-red-600">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                      <div className="w-8 h-8 bg-red-600 rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Office Fit-Out</h3>
                    <p className="text-gray-600 leading-relaxed">Modern office spaces designed for productivity, collaboration, and employee wellbeing.</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-red-600">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                      <div className="w-8 h-8 bg-red-600 rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Retail Interior</h3>
                    <p className="text-gray-600 leading-relaxed">Engaging retail environments that enhance customer experience and drive sales.</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-red-600">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                      <div className="w-8 h-8 bg-red-600 rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hospitality Design</h3>
                    <p className="text-gray-600 leading-relaxed">Luxurious spaces for hotels, restaurants, and entertainment venues.</p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-red-600">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                      <div className="w-8 h-8 bg-red-600 rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Renovation</h3>
                    <p className="text-gray-600 leading-relaxed">Complete refurbishment of existing commercial properties to meet modern standards.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
        
        <ProjectGallery />
        <AboutSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B2R</span>
                </div>
                <div>
                  <span className="text-xl font-bold">Base2Roof</span>
                  <p className="text-sm text-gray-400">Interior Fit-Out Specialists</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">Transforming Dubai's commercial spaces with precision, creativity, and unmatched expertise. Your vision, our execution.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Office Fit-outs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retail Interiors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hospitality Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Renovations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News & Updates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Get In Touch</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded mt-1"></div>
                  <div>
                    <p className="font-medium text-white">Dubai Office</p>
                    <p>Business Bay, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded"></div>
                  <p>info@base2roof.ae</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded"></div>
                  <p>+971 4 XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Base2Roof Interior Fit-Out Specialists. All rights reserved.</p>
            <p className="mt-2 text-sm">Licensed Interior Fit-Out Contractor | Dubai Municipality Approved | ISO 9001:2015 Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
