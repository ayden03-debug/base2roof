
import React from 'react';
import { useTestimonials } from '@/hooks/useTestimonials';
import { Skeleton } from '@/components/ui/skeleton';

const AboutSection = () => {
  const { data: testimonials, isLoading } = useTestimonials(true);

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-minimal text-muted-foreground mb-6">Our Story</p>
            <h2 className="text-4xl lg:text-5xl font-light text-foreground text-architectural mb-8">
              Transforming Spaces,
              <br />
              <span className="text-muted-foreground">Building Legacy</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                With over 8 years of experience in Dubai's dynamic commercial landscape, Base2Roof has established itself as the premier interior fit-out specialist, delivering exceptional spaces that drive business success.
              </p>
              <p>
                Our team of certified designers and licensed contractors combines international expertise with local market knowledge, ensuring every project meets Dubai Municipality standards while exceeding client expectations.
              </p>
              <p>
                From concept to completion, we handle every aspect of your interior transformation with precision, creativity, and unwavering commitment to quality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-4xl font-light text-foreground text-architectural mb-1">150+</div>
                <div className="text-minimal text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-light text-foreground text-architectural mb-1">100%</div>
                <div className="text-minimal text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop"
                alt="Modern office design"
                className="rounded-2xl shadow-elegant w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop"
                alt="Retail interior"
                className="rounded-2xl shadow-elegant mt-8 w-full h-64 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-5 rounded-xl shadow-elegant">
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground mb-1">ISO 9001:2015</div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Certified Quality</div>
                <div className="text-xs text-muted-foreground mt-1">Dubai Municipality Licensed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-16">
            <p className="text-minimal text-muted-foreground mb-4">Testimonials</p>
            <h3 className="text-3xl lg:text-4xl font-light text-foreground text-architectural mb-4">
              What Our Clients Say
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Base2Roof.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-card border border-border p-8 rounded-2xl">
                  <div className="flex items-center mb-4 gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton key={i} className="w-4 h-4 rounded" />
                    ))}
                  </div>
                  <Skeleton className="h-20 w-full mb-6" />
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                </div>
              ))
            ) : testimonials && testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-card border border-border p-8 rounded-2xl hover:shadow-elegant transition-all duration-500 hover:border-foreground/20">
                  <div className="flex items-center mb-5">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-foreground mr-0.5">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-6 leading-relaxed text-sm">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-background font-semibold text-sm">
                        {testimonial.client_name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{testimonial.client_name}</div>
                      {testimonial.client_company && (
                        <div className="text-xs text-muted-foreground">{testimonial.client_company}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No testimonials available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
