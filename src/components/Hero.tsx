
import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Instagram, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypedText from '@/components/TypedText';
import ParallaxBackground from '@/components/ParallaxBackground';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const tiltX = (e.clientY - centerY) / centerY * 3;
      const tiltY = (e.clientX - centerX) / centerX * 3;
      setTilt({ x: tiltX, y: tiltY });
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
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950"
      role="banner"
    >
      <ParallaxBackground />

      {/* Enhanced Glassmorphism Content Panel */}
      <div 
        className="relative z-10 text-center px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 rounded-3xl sm:rounded-4xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl max-w-7xl mx-4 sm:mx-6"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl sm:rounded-4xl blur-lg animate-pulse" />
        
        <div className="relative">
          {/* Main Heading */}
          <div className={`transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-bold mb-6 sm:mb-8 leading-tight text-white">
              <span className="block mb-2 sm:mb-4">ALL ABOUT</span>
              <span className="block">
                <span className="text-blue-400 mr-2 sm:mr-4">YOUR</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <TypedText />
                </span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 text-gray-200 max-w-5xl mx-auto leading-relaxed">
              From <strong className="text-blue-400 font-semibold">IIT Kharagpur</strong> to your career excellence. 
              We provide world-class career guidance, premium internships, and expert mentorship 
              to transform your aspirations into achievements.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-600 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
              <Button
                size="lg"
                className="group relative px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                onClick={scrollToAbout}
              >
                <span className="relative z-10 mr-2">Begin Your Journey</span>
                <ArrowRight className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={scrollToContact}
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className={`transition-all duration-1000 delay-900 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl ${social.color}`}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-200 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className={`transition-all duration-1000 delay-1200 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
              {[
                { number: '2,500+', label: 'Students Guided', color: 'from-blue-500 to-cyan-500' },
                { number: '1,200+', label: 'Premium Placements', color: 'from-purple-500 to-pink-500' },
                { number: '150+', label: 'Partner Companies', color: 'from-emerald-500 to-teal-500' },
                { number: '98%', label: 'Success Rate', color: 'from-orange-500 to-red-500' },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:animate-pulse`}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
        scrollY > window.innerHeight * 0.3 ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'
      }`}>
        <button
          onClick={scrollToAbout}
          className="group relative flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-full p-4"
        >
          {/* Animated Rings */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping animation-delay-1000" />
          <div className="absolute inset-0 rounded-full bg-pink-500/20 animate-ping animation-delay-2000" />
          
          {/* Content */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-full px-6 py-4 shadow-2xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <span className="text-sm sm:text-base mb-2 font-medium text-white block">
              Scroll to explore
            </span>
            <div className="flex justify-center">
              <ChevronDown 
                size={24} 
                className="text-white animate-bounce group-hover:text-blue-400 transition-colors duration-300" 
              />
            </div>
          </div>
        </button>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
        <Button
          onClick={scrollToContact}
          className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 font-semibold"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
