
import React from 'react';
import { useTestimonials } from '@/hooks/useTestimonials';
import { Skeleton } from '@/components/ui/skeleton';

const FALLBACK_TESTIMONIALS = [
  {
    id: '1',
    rating: 5,
    content: 'Base2Roof handled the complete fit-out of our Dubai office — tiling, gypsum ceilings, electrical, and plumbing. Professional team, on time, and the finish is exceptional.',
    client_name: 'Ahmed Al Mansoori',
    client_company: 'Regional Director, XYZ Multinational',
  },
  {
    id: '2',
    rating: 5,
    content: 'We engaged Base2Roof for painting sub-contracting across our residential portfolio. Highly experienced crew, zero defects on delivery, and excellent communication throughout.',
    client_name: 'Sarah Thompson',
    client_company: 'Property Manager, Prime Estates Dubai',
  },
  {
    id: '3',
    rating: 5,
    content: 'Their cleaning and maintenance team is a cut above the rest — responsive, thorough, and cost-effective. We have been using Base2Roof for over three years across multiple facilities.',
    client_name: 'Khalid Al Rashidi',
    client_company: 'Facilities Director, Government Authority UAE',
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex items-center gap-1 mb-4 sm:mb-5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#dc2626">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const AboutSection = () => {
  const { data: testimonials, isLoading } = useTestimonials(true);
  const displayTestimonials = (testimonials && testimonials.length > 0) ? testimonials : FALLBACK_TESTIMONIALS;

  return (
    <section id="about" className="bg-white">

      {/* ── About Content ── */}
      <div className="py-16 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Left */}
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="red-divider-anim" />
                <span className="label-text text-red-600">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 heading-tight mb-6 sm:mb-8">
                About Base 2 Roof
              </h2>

              <div className="space-y-4 sm:space-y-5 text-gray-500 leading-relaxed">
                <p>
                  Base2Roof is established in year 2013 as a Technical Services Company. Since then, our primary focus has been upon serving multinational companies, property management firms, and individuals with various services.
                </p>
                <p>
                  Base2Roof Technical Services LLC is actively involved in building construction projects all over the UAE. We have completed a number of contracts with various multinational and local companies and individuals.
                </p>
                <p className="font-medium text-gray-700 border-l-4 border-red-600 pl-4">
                  Our motto is: <em>"We believe in quality, not quantity."</em>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-gray-100">
                {[
                  { value: '2013', label: 'Established' },
                  { value: '150+', label: 'Projects' },
                  { value: '100%', label: 'Satisfaction' },
                ].map((s) => (
                  <div key={s.label} className="min-w-0">
                    <div className="text-2xl sm:text-3xl font-black text-gray-900 heading-tight mb-1">{s.value}</div>
                    <div className="label-text text-gray-400 text-[10px] sm:text-xs">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Company profile download */}
              <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
                <a
                  href="https://base2roof.ae/img/base2roof_profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-red-soft hover:shadow-red-glow min-h-[44px]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Company Profile
                </a>
                {['Dubai Municipality Licensed', 'UAE Nationwide'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 px-3 sm:px-4 py-3 rounded-xl text-xs font-semibold">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Image grid */}
            <div className="relative reveal-right mt-4 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop"
                  alt="Professional fit-out work by Base2Roof"
                  className="rounded-2xl shadow-lg w-full h-40 sm:h-52 md:h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop"
                  alt="Base2Roof technical services Dubai"
                  className="rounded-2xl shadow-lg mt-6 sm:mt-8 w-full h-40 sm:h-52 md:h-64 object-cover"
                />
              </div>

              {/* Floating card — contained inside the image grid on mobile */}
              <div className="mt-3 lg:mt-0 lg:absolute lg:-bottom-6 lg:-left-6 bg-white border border-gray-100 shadow-xl p-4 sm:p-5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-red-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">On Call 24/7</p>
                    <p className="text-red-600 text-xs font-semibold">Emergency: +971 556951608</p>
                    <p className="text-gray-400 text-[11px] mt-0.5">Always ready to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
              <div className="red-divider" />
              <span className="label-text text-red-600">Why Base2Roof</span>
              <div className="red-divider" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 heading-tight">
              What Sets Us Apart
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'First-Visit Resolution', desc: 'Our technicians ensure your problem is fixed from the very first visit — every time.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Multinational Experience', desc: 'Trusted by leading multinational companies and government bodies across the UAE since 2013.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064' },
              { title: '24/7 Availability', desc: "We're on call around the clock to react promptly to your service needs. Don't hesitate to call.", icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'UAE-Wide Coverage', desc: 'Actively involved in building construction and maintenance projects all across the UAE.', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
            ].map((item, i) => (
              <div key={item.title} className={`reveal stagger-${i + 1} bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 group hover:border-red-100 card-hover-red`}>
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-400">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="py-16 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
              <div className="red-divider" />
              <span className="label-text text-red-600">Client Reviews</span>
              <div className="red-divider" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 heading-tight mb-3 sm:mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              Our work speaks for itself — but our clients speak even louder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl p-6 sm:p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => <Skeleton key={j} className="w-4 h-4 rounded" />)}
                  </div>
                  <Skeleton className="h-20 w-full mb-6" />
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
                    <div><Skeleton className="h-4 w-28 mb-1" /><Skeleton className="h-3 w-36" /></div>
                  </div>
                </div>
              ))
            ) : (
              displayTestimonials.map((t, i) => (
                <div key={t.id} className={`reveal stagger-${i + 1} group border border-gray-100 rounded-2xl p-5 sm:p-8 hover:border-red-100 card-hover-red bg-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-red-50 select-none pointer-events-none">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <StarRating count={t.rating || 5} />
                  <blockquote className="text-gray-600 text-sm leading-relaxed mb-5 sm:mb-6 italic">
                    "{t.content}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{t.client_name.charAt(0)}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">{t.client_name}</p>
                      {t.client_company && <p className="text-gray-400 text-xs truncate">{t.client_company}</p>}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
