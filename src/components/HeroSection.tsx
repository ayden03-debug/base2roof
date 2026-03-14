
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-background overflow-hidden min-h-screen flex items-center">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(0 0% 0%) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center border border-border bg-muted text-muted-foreground px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-2 opacity-60" />
              Dubai's Premier Fit-Out Specialists
            </div>

            <h1 className="text-5xl lg:text-7xl font-light text-foreground text-architectural leading-tight mb-8">
              Transforming
              <br />
              <span className="font-normal">Commercial</span>
              <br />
              <em className="not-italic text-muted-foreground">Spaces</em>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              From concept to completion, we deliver exceptional fit-out solutions for offices, retail spaces, and hospitality venues across Dubai and the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-sm font-medium tracking-wide rounded-xl transition-all duration-500"
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-border text-foreground hover:bg-muted px-8 py-6 text-sm font-medium tracking-wide rounded-xl transition-all duration-500"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { value: '150+', label: 'Projects Delivered' },
                { value: '8+', label: 'Years Experience' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-light text-foreground text-architectural mb-1">{stat.value}</div>
                  <div className="text-minimal text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-architectural">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                  alt="Modern office interior design by Base2Roof"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Card - Bottom Left */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-5 rounded-xl shadow-elegant max-w-[200px]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Licensed Contractor</p>
                    <p className="text-sm font-semibold text-foreground">Dubai Municipality</p>
                    <p className="text-xs text-muted-foreground mt-0.5">ISO 9001:2015</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Top Right */}
              <div className="absolute -top-6 -right-6 bg-foreground text-background p-5 rounded-xl shadow-architectural">
                <div className="text-center">
                  <div className="text-2xl font-light text-architectural mb-1">24/7</div>
                  <div className="text-xs font-medium opacity-70 tracking-wide uppercase">Project Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
