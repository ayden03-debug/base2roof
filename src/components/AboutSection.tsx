
import React from 'react';
import { useTestimonials } from '@/hooks/useTestimonials';
import { Skeleton } from '@/components/ui/skeleton';

const AboutSection = () => {
  const { data: testimonials, isLoading } = useTestimonials(true); // Only featured testimonials

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Transforming Spaces,
              <span className="text-red-600 block">Building Success</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop"
                alt="Modern office design"
                className="rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop"
                alt="Retail interior"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border max-w-xs">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">ISO 9001:2015</div>
                <div className="text-sm text-red-600 font-semibold">Certified Quality</div>
                <div className="text-xs text-gray-500 mt-1">Dubai Municipality Licensed</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h3>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Base2Roof.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeletons
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton key={i} className="w-5 h-5 mr-1" />
                    ))}
                  </div>
                  <Skeleton className="h-20 w-full mb-6" />
                  <div className="flex items-center">
                    <Skeleton className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                </div>
              ))
            ) : testimonials && testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full mr-1"></div>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.client_name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.client_name}</div>
                      {testimonial.client_company && (
                        <div className="text-sm text-gray-500">{testimonial.client_company}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No testimonials available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
