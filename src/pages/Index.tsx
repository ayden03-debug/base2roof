
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectGallery from '../components/ProjectGallery';
import AboutSection from '../components/AboutSection';
import QuoteForm from '../components/QuoteForm';
import { useServices } from '@/hooks/useServices';
import { Skeleton } from '@/components/ui/skeleton';

// Real services from base2roof.ae
const FALLBACK_SERVICES = [
  {
    id: 'painting',
    title: 'Painting & Sub-Contracting',
    description: 'Professional painting services for commercial and residential properties. Our highly experienced team delivers flawless finishes across all surfaces, on time and to specification.',
    icon: (
      <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
    ),
    iconType: 'fill',
  },
  {
    id: 'tiles',
    title: 'Ceramic Tiles, Marble & Interlock',
    description: 'Expert installation of ceramic tiles, marble, and interlock across all project scales. With hundreds of completed installations in Dubai, we bring precision and artistry to every surface.',
    icon: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </>
    ),
    iconType: 'stroke',
  },
  {
    id: 'gypsum',
    title: 'Gypsum False Ceiling',
    description: 'Bespoke gypsum false ceiling solutions designed to elevate interiors with elegance and functionality. Recognised industry-wide for superior quality and innovative design.',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
    iconType: 'stroke',
  },
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    description: 'Cost-effective, responsive, and high-quality cleaning services for commercial, retail, industrial, government, office, and medical environments. Committed to hygiene and excellence.',
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </>
    ),
    iconType: 'stroke',
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Full-scope plumbing installation, commissioning, and maintenance. Our certified technicians resolve issues on the first visit, covering both new installations and repairs.',
    icon: (
      <>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </>
    ),
    iconType: 'stroke',
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Comprehensive electrical installation, commissioning, and maintenance across commercial and residential projects. Safe, compliant, and delivered by qualified electricians.',
    icon: (
      <>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </>
    ),
    iconType: 'stroke',
  },
];

const ServiceIcon = ({ service }: { service: typeof FALLBACK_SERVICES[0] }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill={service.iconType === 'fill' ? 'currentColor' : 'none'}
    stroke={service.iconType === 'stroke' ? 'currentColor' : 'none'}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {service.icon}
  </svg>
);

const Index = () => {
  const { data: services, isLoading: servicesLoading } = useServices(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'Projects', 'About', 'Contact'];

  return (
    <div className="min-h-screen bg-white">

      {/* ── Navigation ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-dark/95 backdrop-blur-xl shadow-dark-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 bg-red-gradient rounded-xl flex items-center justify-center shadow-red-soft group-hover:shadow-red-glow transition-all duration-300">
                <span className="text-white font-black text-base tracking-tight">B2R</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none tracking-tight">Base2Roof</span>
                <p className="text-white/45 text-[10px] font-medium tracking-[0.15em] uppercase mt-0.5">Technical Services LLC</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-sm font-medium text-white/65 hover:text-white transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute inset-x-4 bottom-1 h-px bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <QuoteForm />
              {/* Mobile hamburger */}
              <button
                className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-white/10 py-4 space-y-1">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── Main ── */}
      <main>
        <HeroSection />

        {/* ── Services ── */}
        <section id="services" className="py-28 bg-white">
          <div className="container mx-auto px-6">

            {/* Header */}
            <div className="max-w-2xl mb-20">
              <div className="flex items-center gap-3 mb-5">
                <div className="red-divider" />
                <span className="label-text text-red-600">What We Do</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 heading-tight mb-5">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Comprehensive technical and fit-out solutions for commercial, industrial, and residential clients across the UAE — delivered with precision since 2013.
              </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="p-8 border border-gray-100 rounded-2xl">
                    <Skeleton className="w-14 h-14 rounded-xl mb-6" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ))
              ) : services && services.length > 0 ? (
                services.map((service) => (
                  <div key={service.id} className="group p-8 border border-gray-100 rounded-2xl hover:border-red-100 card-hover-red bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-400">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{service.name}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                      {service.price_range && <div className="text-sm font-semibold text-red-600">{service.price_range}</div>}
                    </div>
                  </div>
                ))
              ) : (
                FALLBACK_SERVICES.map((service) => (
                  <div key={service.id} className="group p-8 border border-gray-100 rounded-2xl hover:border-red-100 card-hover-red bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-400">
                        <ServiceIcon service={service} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <ProjectGallery />
        <AboutSection />

        {/* ── Contact CTA ── */}
        <section id="contact" className="relative py-28 bg-brand-dark overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.12),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/10 rounded-full -translate-x-48 translate-y-48 blur-3xl" />

          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="red-divider" />
                <span className="label-text text-red-400">Get In Touch</span>
                <div className="red-divider" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white heading-tight mb-6">
                Ready to Transform <br />
                <span className="text-gradient-red">Your Space?</span>
              </h2>
              <p className="text-lg text-white/55 mb-12 max-w-xl mx-auto leading-relaxed">
                From a single room to an entire building — our team is ready to bring your vision to life. Request a free consultation today.
              </p>

              {/* Contact info row */}
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                {[
                  { label: 'Email', value: 'info@base2roof.ae', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                  { label: 'Phone', value: '+971 4 XXX XXXX', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                  { label: 'Location', value: 'Business Bay, Dubai, UAE', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
                ].map((item) => (
                  <div key={item.label} className="glass-dark rounded-2xl p-6 text-left">
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <p className="label-text text-white/35 mb-1">{item.label}</p>
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <QuoteForm variant="light" />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-14">

            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 bg-red-gradient rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-sm">B2R</span>
                </div>
                <div>
                  <span className="text-white font-bold">Base2Roof</span>
                  <p className="text-white/35 text-[10px] font-medium tracking-widest uppercase">Technical Services LLC</p>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                Established in 2013. Serving multinational companies, property management firms, and individuals across the UAE with quality, not quantity.
              </p>
              <div className="flex gap-3">
                {/* Social placeholders */}
                {['linkedin', 'instagram', 'facebook'].map((s) => (
                  <div key={s} className="w-9 h-9 bg-white/5 hover:bg-red-600/80 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-300">
                    <div className="w-4 h-4 bg-white/40 rounded-sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-5 tracking-wide">Services</h3>
              <ul className="space-y-3 text-sm text-white/40">
                {['Painting & Sub-Contracting', 'Ceramic Tiles & Marble', 'Gypsum False Ceiling', 'Cleaning Services', 'Plumbing Services', 'Electrical Services'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-5 tracking-wide">Company</h3>
              <ul className="space-y-3 text-sm text-white/40">
                {['About Us', 'Our Projects', 'Careers', 'News & Updates', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#about" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-5 tracking-wide">Get In Touch</h3>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-red-600/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-red-500 rounded-sm" />
                  </div>
                  <div>
                    <p className="text-white/70 font-medium mb-0.5">Dubai Office</p>
                    <p>Business Bay, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-red-600/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-red-500 rounded-sm" />
                  </div>
                  <p>info@base2roof.ae</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-red-600/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-red-500 rounded-sm" />
                  </div>
                  <p>+971 4 XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
            <p>&copy; {new Date().getFullYear()} Base2Roof Technical Services LLC. All rights reserved.</p>
            <p>Licensed Contractor · Dubai Municipality Approved · ISO 9001:2015 Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
