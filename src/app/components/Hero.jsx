"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [titleKey, setTitleKey] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const slides = [
    {
    
    image: "https://images.unsplash.com/photo-1509389928833-fe62aef36deb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112",
      text: "Solar Installation & O&M Services – Powering the Future with Megawatt-Scale Solar Excellence.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509390559807-3144e7d29097?auto=format&fit=crop&q=80&w=1171",
      text: "11KV & 33KV Transmission Line Solutions – Delivering Reliable Power, One Line at a Time.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=1170",
      text: "Civil Construction Works – Building the Foundation for a Sustainable Future.",
    },
  ];

  // Typing effect
  useEffect(() => {
    const currentText = slides[currentImageIndex].text;
    let currentIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentImageIndex]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
    setTitleKey((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentImageIndex) return;
    setIsAnimating(true);
    setCurrentImageIndex(index);
    setTitleKey((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
              index === currentImageIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.8)",
              }}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="max-w-4xl">
            {/* Animated Company Name */}
            <div className="mb-3 sm:mb-4">
              <h1
                key={titleKey}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight"
                style={{
                  textShadow: '0 0 20px rgba(56, 189, 248, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
                  animation: "slideUp 1.5s ease-out, fadeIn 1.5s ease-out",
                }}
              >
                {["B", "H", "A", "R", "A", "T", " ", "I", "N", "F", "R", "A", "S", "T", "R", "U", "C", "T", "U", "R", "E"].map(
                  (letter, index) => (
                    <span
                      key={`${titleKey}-${index}`}
                      className="inline-block"
                      style={{
                        animation: `letterPop 1.2s ease-out ${index * 0.05}s both`,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  )
                )}
              </h1>
            </div>

            {/* Animated Line */}
            <div
              key={`line-${titleKey}`}
              className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gradient-to-r from-sky-400 to-blue-700 rounded-full mb-4 sm:mb-5"
              style={{
                animation: "slideRight 4s ease-out 0.3s both",
              }}
            ></div>

            {/* Typing Text with Cursor */}
            <div className="relative min-h-[70px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[110px] ">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 font-light leading-relaxed">
                {displayedText}
                <span 
                  className={`inline-block w-0.5 h-4 sm:h-5 md:h-6 lg:h-7 bg-sky-400 ml-1 ${
                    isTyping ? 'animate-pulse' : 'opacity-0'
                  }`}
                ></span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <button className="px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                Get Started
              </button>
              <button className="px-6 sm:px-7 py-2.5 sm:py-3 bg-transparent text-white font-medium rounded-full border border-white/60 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                connect us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-5 py-2.5 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentImageIndex
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes letterPop {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.7);
          }
          60% {
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideRight {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 5rem;
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          @keyframes slideRight {
            to {
              width: 4rem;
            }
          }
        }
      `}</style>
    </section>
  );
}
