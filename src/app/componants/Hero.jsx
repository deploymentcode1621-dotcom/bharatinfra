"use client";
import { useEffect, useState } from "react";
import { Sun, Zap, Leaf, ArrowRight, Shield, Award, Users } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of solar-related images
  const solarImages = [
    {
      url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      alt: "Solar Panel Installation"
    },
    {
      url: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2072",
      alt: "Rooftop Solar Panels"
    },
    {
      url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072",
      alt: "Solar Farm Energy"
    },
    {
      url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2072",
      alt: "Solar Panel Technology"
    },
    {
      url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2072",
      alt: "Solar Energy Solutions"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === solarImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [solarImages.length]);

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 pt-32 pb-16 min-h-[90vh]"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT SECTION - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-yellow-300 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">India's #1 Solar Provider</span>
            </div>

            {/* Main Heading */}
            <div className={`space-y-3 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none">
                <span className="block text-gray-900">BHARAT</span>
                <span className="block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                  INFRA
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
                <p className="text-lg md:text-xl text-gray-600 font-semibold">Solar Solutions</p>
              </div>
            </div>

            {/* Description */}
            <p 
              className={`text-base md:text-lg text-gray-600 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Transform your home or business with premium solar energy solutions. 
              Save money, reduce carbon footprint, and power your future sustainably.
            </p>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-4 py-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                { icon: Users, number: "1000+", label: "Customers" },
                { icon: Award, number: "50MW+", label: "Installed" },
                { icon: Shield, number: "7Yrs", label: "Warranty" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl mb-2">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div 
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                { icon: Sun, text: "High Efficiency Panels" },
                { icon: Zap, text: "Save Up to 90%" },
                { icon: Leaf, text: "100% Clean Energy" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 pt-2 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#contact"
                className="group px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-yellow-500/40 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#services"
                className="px-6 py-3 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-900 hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                View Services
              </a>
            </div>
          </div>

          {/* RIGHT SECTION - Image Carousel */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
              
              {/* Image Carousel */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px]">
                {solarImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentImageIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {solarImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex
                        ? 'w-8 h-2 bg-yellow-500'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Floating card - Energy Savings */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 max-w-[200px] animate-float">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 font-medium">Monthly Savings</div>
                    <div className="text-2xl font-bold text-gray-900">₹15,000</div>
                    <div className="text-xs text-green-600 font-semibold mt-1">↑ 90% Reduction</div>
                  </div>
                </div>
              </div>

              {/* Floating card - Carbon Offset */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 font-medium">CO₂ Saved</div>
                    <div className="text-2xl font-bold text-gray-900">5.2T</div>
                    <div className="text-xs text-blue-600 font-semibold mt-1">Per Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}