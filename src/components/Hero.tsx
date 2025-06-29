
import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
            ALL ABOUT YOUR
            <span className="block text-primary animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              DREAMS
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
            Beyond Career empowers students with career guidance, internships, and mentorship. 
            Founded by IIT Kharagpur alumni, we're here to turn your aspirations into achievements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="btn-primary font-semibold px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Discover Your Path
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
    </section>
  );
};

export default Hero;
