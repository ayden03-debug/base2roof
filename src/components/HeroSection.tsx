
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToQuote = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-30"></div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="mb-8">
              <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                Dubai's Premier Fit-Out Specialists
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transforming
                <span className="text-red-600 block">Commercial Spaces</span>
                Into Success Stories
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                From concept to completion, we deliver exceptional fit-out solutions for offices, retail spaces, and hospitality venues across Dubai and the UAE. Licensed, certified, and trusted by leading businesses.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToQuote}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">8+</div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                  alt="Modern office interior design by Base2Roof"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
                    <div className="w-7 h-7 bg-red-600 rounded"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Licensed Contractor</p>
                    <p className="font-bold text-gray-900">Dubai Municipality</p>
                    <p className="text-sm text-red-600 font-semibold">ISO 9001:2015 Certified</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-red-600 text-white p-6 rounded-xl shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm font-medium opacity-90">Project Support</div>
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
