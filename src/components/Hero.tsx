
import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
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
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
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

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Enhanced Multi-layer Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-blue-500/10 to-purple-500/20 dark:from-slate-900/50 dark:via-blue-900/30 dark:to-purple-900/20"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-60 dark:opacity-40">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse dark:bg-purple-800"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000 dark:bg-yellow-800"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000 dark:bg-pink-800"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/30 dark:bg-blue-300/30 rounded-full animate-float"
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
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 lg:w-128 lg:h-128 bg-gradient-to-r from-pink-400/15 to-yellow-400/15 dark:from-pink-500/15 dark:to-yellow-500/15 rounded-full blur-3xl animate-pulse" 
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
          {/* Enhanced Glassmorphism Container */}
          <div className="relative backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl sm:rounded-4xl p-6 sm:p-8 lg:p-12 mb-8 border border-white/20 dark:border-white/10 shadow-2xl">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg"></div>
            
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 font-poppins leading-tight">
                ALL ABOUT YOUR
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  <TypedText />
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-5xl mx-auto leading-relaxed font-inter">
                Beyond Career empowers students with career guidance, internships, and mentorship. 
                Founded by IIT Kharagpur alumni, we're here to turn your aspirations into achievements.
              </p>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10">Discover Your Path</span>
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="group border-2 border-slate-300 dark:border-slate-600 bg-white/20 dark:bg-black/20 backdrop-blur-sm text-slate-800 dark:text-white hover:bg-white/30 dark:hover:bg-black/30 font-semibold px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Join Community
            </Button>
          </div>

          {/* Social Media Buttons */}
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="group p-3 sm:p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`fixed bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
        scrollY > window.innerHeight * 0.3 ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'
      }`}>
        <button
          onClick={scrollToAbout}
          className="group relative flex flex-col items-center"
        >
          {/* Animated border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-0.5 animate-spin-slow">
            <div className="bg-white/90 dark:bg-black/90 rounded-full w-full h-full"></div>
          </div>
          
          {/* Content */}
          <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-full px-6 py-4 shadow-2xl border border-white/20 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-black transition-all duration-300">
            <span className="text-sm sm:text-base mb-2 font-medium text-slate-700 dark:text-slate-300 block">
              Scroll to explore
            </span>
            <div className="flex justify-center">
              <ChevronDown 
                size={24} 
                className="text-slate-600 dark:text-slate-400 animate-bounce group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" 
              />
            </div>
          </div>
          
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping animation-delay-1000"></div>
        </button>
      </div>

      {/* Floating Get Started Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
        <Button
          onClick={scrollToContact}
          className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 font-semibold"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
