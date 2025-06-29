
import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypedText from '@/components/TypedText';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
        <svg className="absolute bottom-0 w-full h-64 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 C300,100 500,0 800,50 C1000,100 1200,0 1200,50 L1200,120 L0,120 Z" fill="currentColor" className="text-white dark:text-gray-800" />
        </svg>
        
        {/* Layer 3: Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white dark:bg-gray-300 rounded-full opacity-30 animate-float"
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
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full blur-3xl animate-pulse parallax-layer"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl animate-pulse parallax-layer" 
          style={{ 
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full blur-3xl animate-pulse parallax-layer" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Glassmorphism Container */}
          <div className="glassmorphism rounded-3xl p-8 sm:p-12 mb-8 animate-tilt">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
              ALL ABOUT YOUR
              <span className="block">
                <TypedText />
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-inter">
              Beyond Career empowers students with career guidance, internships, and mentorship. 
              Founded by IIT Kharagpur alumni, we're here to turn your aspirations into achievements.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="btn-primary btn-glow animate-pulse-glow font-semibold px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10">Discover Your Path</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 rounded-full animate-ripple" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              Join Community
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <ChevronDown 
              size={24} 
              className="animate-bounce group-hover:transform group-hover:scale-110 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>

      {/* Sticky Get Started Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={scrollToContact}
          className="bg-light-accent dark:bg-dark-accent text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse-glow font-semibold"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
