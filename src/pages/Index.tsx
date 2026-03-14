
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectGallery from '../components/ProjectGallery';
import AboutSection from '../components/AboutSection';
import QuoteForm from '../components/QuoteForm';
import { useServices } from '@/hooks/useServices';
import { Skeleton } from '@/components/ui/skeleton';

// Services sourced directly from base2roof.ae
const FALLBACK_SERVICES = [
  {
    id: 'painting',
    title: 'Painting Works',
    description: 'We are mainly focused on painting sub-contracting. We are equipped with a highly experienced and professional team to carry out all painting works.',
    bullets: ['Residential Painting', 'Commercial Painting', 'Industrial Painting', 'Re-Painting Works', 'Renovation Work', 'Epoxy Flooring'],
    iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  },
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    description: 'We offer our clients a cost-effective, responsive, and high-quality cleaning service across a diverse range of commercial, retail, industrial, government, office, and medical environments.',
    bullets: ['Window Glass Cleaning', 'High-Rise Building Pressure Washing', 'Advertising Signboard Cleaning', 'Exterior & Interior Wall Cleaning', 'Floor Tile/Marble Deep Cleaning'],
    iconPath: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  },
  {
    id: 'tiles',
    title: 'Tile Fixing Works',
    description: 'Base2Roof Technical is one of the best ceramic tile, marble, and interlock installation companies in Dubai, UAE. We have completed hundreds of tile and interlock installations across the UAE.',
    bullets: ['Wall & Floor Marble/Ceramic Tile Installation', 'Designed Marble/Tile Installation', 'Interlock Installation', 'Roof Tile Installation', 'Kitchen/Toilet Countertop Installation'],
    iconPath: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z',
  },
  {
    id: 'waterproofing',
    title: 'Water Proofing',
    description: 'Base2Roof personnel are experienced in all kinds of waterproofing solutions, protecting your property from moisture damage with industry-leading materials and techniques.',
    bullets: ['Concrete Roof Waterproofing', 'Self-Adhesive Waterproofing', 'Toilet/Balcony Floor Waterproofing', 'Warehouse & Metal Roof Waterproofing', 'Membrane Services'],
    iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  },
  {
    id: 'plumbing',
    title: 'Plumbing & Electrical',
    description: 'A good plumber or electrician can be hard to find. There is no shortage of available plumbing and electrical technicians at B2R. Our technicians will always ensure your problem is fixed from the first visit.',
    bullets: ['All Types of Electrical/Plumbing Installation & Commissioning', 'Maintenance of All Electrical/Plumbing Installations', 'Upgrading of Any Electrical/Plumbing Set-Up', 'DM Maintenance'],
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    id: 'carpentry',
    title: 'Carpentry Works',
    description: 'We are highly experienced in carpentry works, delivering quality craftsmanship for both residential and commercial clients across Dubai and the UAE.',
    bullets: ['Kitchen Cabinet Installation', 'Cupboard Installation', 'Pergola Installation', 'Wooden Door Installation & Polishing'],
    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    id: 'gypsum',
    title: 'Gypsum & Ceiling Work',
    description: 'We have earned recognition in the industry by delivering a superior quality variety of gypsum false ceilings. Our false ceiling solutions are specially designed to meet each client\'s needs.',
    bullets: ['Gypsum False Ceiling', 'POP False Ceiling', 'Grid False Ceiling', 'Glass Wall Partition', 'Plaster Slab Wall Partition'],
    iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
];

const Index = () => {
  const { data: services, isLoading: servicesLoading } = useServices(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 40);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'Projects', 'About', 'Contact'];

  return (
    <div className="min-h-screen bg-white">

      {/* ── Scroll Progress Bar ── */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ── Navigation ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-dark/95 backdrop-blur-xl shadow-dark-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2.5 group min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-red-gradient rounded-xl flex items-center justify-center shadow-red-soft group-hover:shadow-red-glow transition-all duration-300 flex-shrink-0">
                <span className="text-white font-black text-sm sm:text-base tracking-tight">B2R</span>
              </div>
              <div className="min-w-0">
                <span className="text-white font-bold text-base sm:text-lg leading-none tracking-tight">Base2Roof</span>
                <p className="text-white/45 text-[9px] sm:text-[10px] font-medium tracking-[0.15em] uppercase mt-0.5 truncate">Technical Services LLC</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2.5 text-sm font-medium text-white/65 hover:text-white transition-colors duration-300 group min-h-[44px] flex items-center"
                >
                  {item}
                  <span className="absolute inset-x-4 bottom-1 h-px bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <QuoteForm />
              {/* 44×44 touch target */}
              <button
                className="lg:hidden w-11 h-11 flex flex-col justify-center items-center gap-[5px]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-white/10 py-3 space-y-0.5 bg-brand-dark/98">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 min-h-[48px] text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
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
        <section id="services" className="py-16 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6">

            <div className="max-w-2xl mb-12 md:mb-20 reveal-left">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="red-divider-anim" />
                <span className="label-text text-red-600">What We Do</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 heading-tight mb-4 sm:mb-5">
                Services That We Offer
              </h2>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                Comprehensive technical and fit-out solutions delivered with precision across the UAE — by a team you can trust since 2013.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {servicesLoading ? (
                Array.from({ length: 7 }).map((_, i) => (
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
                FALLBACK_SERVICES.map((service, i) => (
                  <div key={service.id} className={`reveal stagger-${(i % 8) + 1} group p-7 border border-gray-100 rounded-2xl hover:border-red-100 card-hover-red bg-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="w-13 h-13 w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-400">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={service.iconPath} />
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                      <ul className="space-y-1.5">
                        {service.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-gray-400">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" className="mt-0.5 flex-shrink-0">
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                            {b}
                          </li>
                        ))}
                      </ul>
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
        <section id="contact" className="relative py-16 md:py-28 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.12),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-900/10 rounded-full -translate-x-32 sm:-translate-x-48 translate-y-32 sm:translate-y-48 blur-3xl pointer-events-none" />

          <div className="relative container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6 reveal">
                <div className="red-divider-anim" />
                <span className="label-text text-red-400">Get In Touch</span>
                <div className="red-divider-anim" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white heading-tight mb-5 sm:mb-6 reveal stagger-2">
                Ready to Transform <br className="hidden sm:block" />
                <span className="text-gradient-red">Your Space?</span>
              </h2>
              <p className="text-base sm:text-lg text-white/55 mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
                We're on call 24/7 to react promptly to your service needs. Don't hesitate to contact us.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
                {[
                  { label: 'Email', value: 'info@base2roof.ae', href: 'mailto:info@base2roof.ae', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                  { label: 'Phone', value: '+971 556951608', href: 'tel:+971556951608', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                  { label: 'Address', value: '308, Al Shali Building, Abu Hail, Dubai', href: '#', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="glass-dark rounded-2xl p-5 sm:p-6 text-left hover:border-red-600/30 border border-transparent transition-colors duration-300 flex sm:block items-center gap-4 sm:gap-0 min-h-[64px] sm:min-h-0">
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 sm:mb-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="label-text text-white/35 mb-0.5 sm:mb-1">{item.label}</p>
                      <p className="text-white font-medium text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <QuoteForm variant="light" />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#080808] border-t border-white/5 pt-12 sm:pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">

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
                Established in 2013. Serving multinational companies, property management firms, and individuals across the UAE. Our motto: "We believe in quality, not quantity."
              </p>
              {/* Social links — from base2roof.ae */}
              <div className="flex gap-3">
                {[
                  { href: 'https://www.facebook.com/Base2Roof-Technical-Services-LLC-548237979018900', label: 'Facebook' },
                  { href: 'https://www.instagram.com/base2roof2/', label: 'Instagram' },
                  { href: 'https://twitter.com/Base2roofL', label: 'Twitter' },
                  { href: 'https://www.linkedin.com/in/base2roof-technical-services-llc', label: 'LinkedIn' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/5 hover:bg-red-600/80 rounded-lg flex items-center justify-center transition-colors duration-300 text-white/50 hover:text-white text-xs font-bold"
                    title={s.label}
                  >
                    {s.label.charAt(0)}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-5 tracking-wide">Our Services</h3>
              <ul className="space-y-3 text-sm text-white/40">
                {['Painting Works', 'Cleaning Services', 'Tile Fixing Works', 'Water Proofing Services', 'Plumbing & Electrical Work', 'Carpentry Works', 'Gypsum & Ceiling Work'].map((item) => (
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
                {['About Us', 'Our Projects', 'Our Clients', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s/g, '')}`} className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — real details from base2roof.ae */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-5 tracking-wide">Get In Touch</h3>
              <div className="space-y-4 text-sm text-white/40">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-red-600/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-white/70 font-medium mb-0.5">Dubai Office</p>
                    <p>308, Al Shali Building,<br />Abu Hail, Dubai, UAE</p>
                  </div>
                </div>
                <a href="tel:+97143463931" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-7 h-7 bg-red-600/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <p>+971 43463931</p>
                </a>
                <a href="tel:+971556951608" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-7 h-7 bg-red-600/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <p>+971 556951608</p>
                </a>
                <a href="mailto:info@base2roof.ae" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-7 h-7 bg-red-600/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <p>info@base2roof.ae</p>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
            <p>Copyright &copy; Base 2 Roof {new Date().getFullYear()}. All rights reserved.</p>
            <p>Licensed Contractor · Dubai Municipality Approved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
