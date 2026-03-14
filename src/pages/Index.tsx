
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectGallery from '../components/ProjectGallery';
import AboutSection from '../components/AboutSection';
import QuoteForm from '../components/QuoteForm';
import { useServices } from '@/hooks/useServices';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const { data: services, isLoading: servicesLoading } = useServices(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-elegant'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-foreground rounded flex items-center justify-center">
                <span className="text-background font-bold text-sm tracking-wide">B2R</span>
              </div>
              <div>
                <span className="text-lg font-semibold text-foreground tracking-tight">Base2Roof</span>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Interior Fit-Out</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 tracking-wide"
                >
                  {item}
                </a>
              ))}
            </nav>

            <QuoteForm />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />

        {/* Services Overview */}
        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-minimal text-muted-foreground mb-4">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground text-architectural mb-6">Our Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive fit-out solutions tailored for Dubai's dynamic commercial landscape
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesLoading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-8">
                    <Skeleton className="w-14 h-14 rounded-xl mb-6" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ))
              ) : services && services.length > 0 ? (
                services.map((service) => (
                  <div key={service.id} className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-foreground/20 transition-all duration-500">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-3">{service.name}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">{service.description}</p>
                    {service.price_range && (
                      <div className="text-sm text-foreground font-medium">{service.price_range}</div>
                    )}
                    {service.duration_estimate && (
                      <div className="text-xs text-muted-foreground mt-1">{service.duration_estimate}</div>
                    )}
                  </div>
                ))
              ) : (
                <>
                  {[
                    { title: 'Office Fit-Out', desc: 'Modern office spaces designed for productivity, collaboration, and employee wellbeing.', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
                    { title: 'Retail Interior', desc: 'Engaging retail environments that enhance customer experience and drive sales.', icon: <><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></> },
                    { title: 'Hospitality Design', desc: 'Luxurious spaces for hotels, restaurants, and entertainment venues.', icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></> },
                    { title: 'Commercial Renovation', desc: 'Complete refurbishment of existing commercial properties to meet modern standards.', icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></> },
                  ].map((service) => (
                    <div key={service.title} className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-foreground/20 transition-all duration-500">
                      <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          {service.icon}
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>

        <ProjectGallery />
        <AboutSection />

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <p className="text-minimal opacity-60 mb-6">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-light text-architectural mb-8">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-lg opacity-70 mb-12 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your commercial space? Our team of experts is here to bring your vision to life with precision and creativity.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 mb-12">
              {[
                { label: 'Email Us', value: 'info@base2roof.ae' },
                { label: 'Call Us', value: '+971 4 XXX XXXX' },
                { label: 'Visit Us', value: 'Business Bay, Dubai, UAE' },
              ].map((item) => (
                <div key={item.label} className="bg-primary-foreground/10 rounded-xl p-6 text-left">
                  <p className="text-minimal opacity-60 mb-2">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <QuoteForm variant="light" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-9 h-9 bg-foreground rounded flex items-center justify-center">
                  <span className="text-background font-bold text-xs tracking-wide">B2R</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Base2Roof</span>
                  <p className="text-xs text-muted-foreground">Interior Fit-Out Specialists</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transforming Dubai's commercial spaces with precision, creativity, and unmatched expertise.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-5 tracking-wide">Services</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {['Office Fit-outs', 'Retail Interiors', 'Hospitality Design', 'Commercial Renovations', 'Project Management'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="hover:text-foreground transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-5 tracking-wide">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {['About Us', 'Our Projects', 'Careers', 'News & Updates', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#about" className="hover:text-foreground transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-5 tracking-wide">Get In Touch</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground mb-1">Dubai Office</p>
                  <p>Business Bay, Dubai, UAE</p>
                </div>
                <div>
                  <p>info@base2roof.ae</p>
                </div>
                <div>
                  <p>+971 4 XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Base2Roof Interior Fit-Out Specialists. All rights reserved.</p>
            <p className="text-xs">Licensed Contractor · Dubai Municipality Approved · ISO 9001:2015</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
