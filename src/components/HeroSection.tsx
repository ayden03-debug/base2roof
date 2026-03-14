
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const STATS = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Years of Excellence' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <>{count}{suffix}</>;
};

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop"
          alt="Premium construction and fit-out work in Dubai"
          className="w-full h-full object-cover opacity-25"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/50" />
        {/* Red accent glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/15 rounded-full blur-[120px]" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative w-full container mx-auto px-6 py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-red-600/15 border border-red-600/25 text-red-400 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Dubai's Trusted Technical Services
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-black text-white heading-tight mb-6 leading-none">
              Building <br />
              <span className="text-gradient-red">Excellence</span>
              <br />
              From the Ground Up
            </h1>

            <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-lg">
              Since 2013, Base2Roof Technical Services LLC has delivered precision fit-out, painting, tiling, gypsum, and MEP solutions for multinationals, property managers, and individuals across the UAE.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Button
                onClick={() => scrollTo('contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-sm font-semibold rounded-xl shadow-red-soft hover:shadow-red-glow transition-all duration-400 group"
              >
                Get a Free Quote
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo('projects')}
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-sm font-semibold rounded-xl transition-all duration-400"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-8 border-t border-white/8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-white heading-tight mb-1">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] font-semibold text-white/40 tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature cards */}
          <div className="relative hidden lg:block">
            <div className="relative space-y-4 pl-8">

              {/* Main image card */}
              <div className="relative overflow-hidden rounded-2xl shadow-dark-xl border border-white/8">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop"
                  alt="Professional fit-out work by Base2Roof"
                  className="w-full h-72 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">Premium Fit-Out Solutions</p>
                  <p className="text-white/50 text-xs mt-0.5">Ceramic · Gypsum · Paint · MEP</p>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-dark rounded-2xl p-5 border border-white/8">
                  <div className="w-9 h-9 bg-red-600/20 rounded-lg flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <p className="text-white text-xs font-semibold mb-0.5">Dubai Municipality</p>
                  <p className="text-white/40 text-[11px]">Licensed Contractor</p>
                </div>
                <div className="glass-dark rounded-2xl p-5 border border-white/8">
                  <div className="w-9 h-9 bg-red-600/20 rounded-lg flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <p className="text-white text-xs font-semibold mb-0.5">24 / 7 Support</p>
                  <p className="text-white/40 text-[11px]">Always available</p>
                </div>
              </div>

              {/* ISO badge */}
              <div className="glass-dark rounded-2xl px-5 py-4 border border-red-600/20 flex items-center gap-4">
                <div className="w-10 h-10 bg-red-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">ISO 9001:2015 Certified</p>
                  <p className="text-white/40 text-xs">Quality Management System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <p className="text-white text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
