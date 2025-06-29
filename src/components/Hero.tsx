
import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypedText from '@/components/TypedText';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three-layer Parallax Background */}
      <div className="absolute inset-0">
        {/* Layer 1: Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-light-accent dark:from-dark-bg dark:via-gray-900 dark:to-dark-accent"></div>
        
        {/* Layer 2: SVG Waves */}
        <svg className="absolute bottom-0 w-full h-32 sm:h-48 lg:h-64 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 C300,100 500,0 800,50 C1000,100 1200,0 1200,50 L1200,120 L0,120 Z" fill="currentColor" className="text-white dark:text-gray-800" />
        </svg>
        
        {/* Layer 3: Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white dark:bg-gray-300 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full blur-3xl animate-pulse parallax-layer"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl animate-pulse parallax-layer" 
          style={{ 
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Glassmorphism Container */}
          <div className="glassmorphism rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8 animate-tilt">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-poppins leading-tight">
              ALL ABOUT YOUR
              <span className="block">
                <TypedText />
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-inter">
              Beyond Career empowers students with career guidance, internships, and mentorship. 
              Founded by IIT Kharagpur alumni, we're here to turn your aspirations into achievements.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="btn-primary btn-glow animate-pulse-glow font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Discover Your Path</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1 relative z-10" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Join Community
            </Button>
          </div>
        </div>

        {/* Scroll Indicator - Positioned at bottom center, sticky for first viewport */}
        <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } ${scrollY > window.innerHeight * 0.3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-xs sm:text-sm mb-2 font-medium">Scroll to explore</span>
            <ChevronDown 
              size={20} 
              className="sm:w-6 sm:h-6 animate-bounce group-hover:transform group-hover:scale-110 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>

      {/* Sticky Get Started Button - Repositioned and responsive */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
        <Button
          onClick={scrollToContact}
          className="bg-light-accent dark:bg-dark-accent text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse-glow font-semibold"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
