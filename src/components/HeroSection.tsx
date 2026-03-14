
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

const STATS = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Years of Excellence' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const AnimatedNumber = ({ value, suffix, start }: { value: number; suffix: string; start: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = Math.ceil(value / (2000 / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(current);
    }, 16);
    return () => clearInterval(timer);
  }, [value, start]);

  return <>{count}{suffix}</>;
};

const HeroSection = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  // Only run parallax on non-mobile screens (avoids jank on low-end devices)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => setParallaxY(window.scrollY * 0.3);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center bg-brand-dark overflow-hidden">

      {/* Parallax background */}
      <div
        className="absolute inset-0"
        style={{ transform: isMobile ? 'none' : `translateY(${parallaxY}px)`, willChange: 'transform' }}
      >
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop"
          alt="Base2Roof Technical Services Dubai"
          className="w-full h-full object-cover opacity-25 scale-110"
          loading="eager"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/40" />
      {/* Clamped glow orbs — won't overflow on any screen */}
      <div className="absolute top-1/3 right-0 w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] bg-red-900/15 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[30vw] max-w-[300px] h-[30vw] max-h-[300px] bg-red-800/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative w-full container mx-auto px-4 sm:px-6 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div className="w-full min-w-0">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-red-600/15 border border-red-600/25 text-red-400 px-3 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-6 sm:mb-8 max-w-full"
              style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}
            >
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 pulse-red" />
              <span className="truncate">Dubai's Trusted Technical Services Since 2013</span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white heading-tight mb-3 sm:mb-4 leading-none"
              style={{ animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.35s both' }}
            >
              Base 2 Roof
            </h1>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/80 heading-tight mb-5 sm:mb-6 leading-snug"
              style={{ animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s both' }}
            >
              A Perfect Way to <br className="hidden sm:block" />
              <span className="text-gradient-red font-bold">Build Your Dreams</span>
            </h2>

            <p
              className="text-base sm:text-lg text-white/55 leading-relaxed mb-4 max-w-lg"
              style={{ animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.65s both' }}
            >
              We're on call 24/7 to react promptly to your service needs. Don't hesitate to call.
            </p>

            <a
              href="tel:+971556951608"
              className="inline-flex items-center gap-2 text-red-400 font-semibold text-sm mb-8 sm:mb-10 hover:text-red-300 transition-colors group min-h-[44px]"
              style={{ animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.75s both' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 group-hover:rotate-12 transition-transform">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call for Emergency: +971 556951608
            </a>

            {/* CTAs */}
            <div
              className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14"
              style={{ animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.85s both' }}
            >
              <Button
                onClick={() => scrollTo('contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-6 text-sm font-semibold rounded-xl shadow-red-soft hover:shadow-red-glow transition-all duration-400 group w-full xs:w-auto min-h-[52px]"
              >
                Get a Free Quote
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo('services')}
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 px-6 sm:px-8 py-6 text-sm font-semibold rounded-xl transition-all duration-400 w-full xs:w-auto min-h-[52px]"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex gap-6 sm:gap-10 pt-6 sm:pt-8 border-t border-white/8"
              style={{ animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 1s both' }}
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <div className="text-2xl sm:text-3xl font-black text-white heading-tight mb-1">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} start={statsVisible} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-white/40 tracking-widest uppercase leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature cards, desktop only */}
          <div
            className="relative hidden lg:block"
            style={{ animation: 'fadeRight 1s cubic-bezier(0.22,1,0.36,1) 0.6s both' }}
          >
            <div className="relative space-y-4 pl-8">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-dark-xl border border-white/8">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop"
                  alt="Professional fit-out work by Base2Roof"
                  className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">Premium Technical Services</p>
                  <p className="text-white/50 text-xs mt-0.5">Painting · Tiling · Gypsum · MEP · Carpentry</p>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-dark rounded-2xl p-5 border border-white/8 float-animation">
                  <div className="w-9 h-9 bg-red-600/20 rounded-lg flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <p className="text-white text-xs font-semibold mb-0.5">Dubai Municipality</p>
                  <p className="text-white/40 text-[11px]">Licensed Contractor</p>
                </div>
                <div className="glass-dark rounded-2xl p-5 border border-white/8 float-animation-slow">
                  <div className="w-9 h-9 bg-red-600/20 rounded-lg flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <p className="text-white text-xs font-semibold mb-0.5">24/7 Support</p>
                  <p className="text-white/40 text-[11px]">Always available</p>
                </div>
              </div>

              {/* Address card */}
              <div className="glass-dark rounded-2xl px-5 py-4 border border-red-600/20 flex items-center gap-4">
                <div className="w-10 h-10 bg-red-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">308, Al Shali Building</p>
                  <p className="text-white/40 text-xs">Abu Hail, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hidden sm:flex"
        style={{ animation: 'fadeIn 1s ease 1.5s both' }}
      >
        <p className="text-white text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" style={{ animation: 'float 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
};

export default HeroSection;
