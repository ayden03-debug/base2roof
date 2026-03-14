
import React from 'react';
import { useTestimonials } from '@/hooks/useTestimonials';
import { Skeleton } from '@/components/ui/skeleton';

const FALLBACK_TESTIMONIALS = [
  {
    id: '1',
    rating: 5,
    content: 'Base2Roof handled the complete fit-out of our Dubai office — from tiling and gypsum ceilings to electrical and plumbing. Professional team, on time, and the finish is exceptional.',
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
  <div className="flex items-center gap-1 mb-5">
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
      <div className="py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="red-divider" />
                <span className="label-text text-red-600">About Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 heading-tight mb-8">
                Quality, Not Quantity —<br />
                <span className="text-red-600">Since 2013</span>
              </h2>

              <div className="space-y-5 text-gray-500 leading-relaxed">
                <p>
                  Base2Roof Technical Services LLC was established in 2013 with one clear purpose: to serve multinational companies, property management firms, and individuals with exceptional technical services throughout the UAE.
                </p>
                <p>
                  With over a decade of experience, our licensed team has delivered hundreds of successful projects — from ceramic tile and marble installation to gypsum false ceilings, professional painting, and full MEP services. Every project, regardless of scale, receives our complete dedication.
                </p>
                <p>
                  Our motto has always been simple: <strong className="text-gray-800 font-semibold">"We believe in quality, not quantity."</strong> This philosophy drives every decision we make and every surface we touch.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-gray-100">
                {[
                  { value: '2013', label: 'Established' },
                  { value: '150+', label: 'Projects' },
                  { value: '100%', label: 'Satisfaction' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-black text-gray-900 heading-tight mb-1">{s.value}</div>
                    <div className="label-text text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Dubai Municipality Licensed', 'ISO 9001:2015 Certified', 'UAE Nationwide'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-semibold">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Image grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop"
                  alt="Professional fit-out work"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop"
                  alt="Premium interior finish"
                  className="rounded-2xl shadow-lg mt-8 w-full h-64 object-cover"
                />
              </div>

              {/* Floating ISO card */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 shadow-xl p-5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-red-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">ISO 9001:2015</p>
                    <p className="text-red-600 text-xs font-semibold">Certified Quality</p>
                    <p className="text-gray-400 text-[11px] mt-0.5">Dubai Municipality Approved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="red-divider" />
              <span className="label-text text-red-600">Why Base2Roof</span>
              <div className="red-divider" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 heading-tight">
              What Sets Us Apart
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'First-Visit Resolution', desc: 'Our technicians are equipped to resolve issues on the first visit — every time.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Multinational Experience', desc: 'Trusted by leading multinationals and government bodies across the UAE since 2013.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064' },
              { title: 'Cost-Effective Quality', desc: 'Premium results delivered efficiently — value for money is built into every project.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'UAE-Wide Coverage', desc: 'Active in building construction and maintenance projects all across the UAE.', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-7 group hover:border-red-100 card-hover-red">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-400">
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
      <div className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="red-divider" />
              <span className="label-text text-red-600">Client Reviews</span>
              <div className="red-divider" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 heading-tight mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Our work speaks for itself — but our clients speak even louder.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl p-8">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => <Skeleton key={j} className="w-4 h-4 rounded" />)}
                  </div>
                  <Skeleton className="h-20 w-full mb-6" />
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div><Skeleton className="h-4 w-28 mb-1" /><Skeleton className="h-3 w-36" /></div>
                  </div>
                </div>
              ))
            ) : (
              displayTestimonials.map((t) => (
                <div key={t.id} className="group border border-gray-100 rounded-2xl p-8 hover:border-red-100 card-hover-red bg-white relative overflow-hidden">
                  {/* Quote mark */}
                  <div className="absolute top-6 right-6 text-red-50 select-none pointer-events-none">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <StarRating count={t.rating || 5} />
                  <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    "{t.content}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{t.client_name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.client_name}</p>
                      {t.client_company && <p className="text-gray-400 text-xs">{t.client_company}</p>}
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
