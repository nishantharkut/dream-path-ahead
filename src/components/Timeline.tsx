
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Circle, ArrowRight, Lightbulb, Rocket, Target, Trophy } from 'lucide-react';

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start the animation sequence
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    let step = 0;
    const interval = setInterval(() => {
      if (step < steps.length) {
        setActiveStep(step);
        setAnimationProgress(((step + 1) / steps.length) * 100);
        step++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Explore career paths with personalized assessments and expert guidance',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      details: 'Comprehensive career assessment, skill analysis, and personalized roadmap creation'
    },
    {
      number: '02',
      title: 'Development',
      description: 'Build skills through curated courses and hands-on projects',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500',
      details: 'Industry-relevant courses, practical workshops, and mentorship programs'
    },
    {
      number: '03',
      title: 'Opportunities',
      description: 'Access exclusive internships and job placements',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500',
      details: 'Premium internships, job opportunities, and direct company connections'
    },
    {
      number: '04',
      title: 'Success',
      description: 'Achieve your career goals with ongoing mentorship support',
      icon: Trophy,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500',
      details: 'Continuous support, career advancement, and professional growth'
    }
  ];

  return (
    <section id="timeline" ref={sectionRef} className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6 font-poppins">
            How It <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Your journey to career success in four strategic steps
          </p>
        </div>

        {/* Desktop: Enhanced Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* Animated Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0 rounded-full">
            <div 
              ref={progressRef}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out rounded-full relative"
              style={{ width: `${animationProgress}%` }}
            >
              {/* Glowing dot at the end */}
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-purple-500 animate-pulse" />
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="relative z-10 grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center cursor-pointer transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${index <= activeStep ? 'scale-110' : 'hover:scale-105'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setActiveStep(index)}
              >
                {/* Icon Container */}
                <div className="relative mx-auto mb-6">
                  <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index <= activeStep 
                      ? `${step.bgColor} text-white shadow-2xl transform rotate-12` 
                      : 'bg-white dark:bg-gray-800 text-slate-400 dark:text-slate-500 border-2 border-gray-200 dark:border-gray-700'
                  }`}>
                    {index <= activeStep ? (
                      <step.icon className="w-10 h-10 animate-bounce" />
                    ) : (
                      <span className="text-2xl font-bold">{step.number}</span>
                    )}
                    
                    {/* Glow effect for active step */}
                    {index <= activeStep && (
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30 blur-xl animate-pulse`} />
                    )}
                  </div>
                  
                  {/* Progress indicator */}
                  {index <= activeStep && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                
                {/* Content Card */}
                <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform ${
                  index <= activeStep ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
                }`}>
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-3 font-poppins">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{step.description}</p>
                  
                  {/* Expanded details for active step */}
                  {index <= activeStep && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl animate-fade-in">
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{step.details}</p>
                    </div>
                  )}
                  
                  {/* Action arrow for completed steps */}
                  {index < activeStep && (
                    <div className="flex justify-center mt-4">
                      <ArrowRight className={`w-6 h-6 text-green-500 animate-bounce`} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Enhanced Vertical Timeline */}
        <div className="md:hidden space-y-8">
          {/* Progress Bar */}
          <div className="flex justify-center mb-8">
            <div className="w-2 h-64 bg-gray-200 dark:bg-gray-700 rounded-full relative">
              <div 
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                style={{ height: `${animationProgress}%` }}
              />
            </div>
          </div>
          
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start space-x-6 transition-all duration-700 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                index <= activeStep 
                  ? `${step.bgColor} text-white shadow-xl` 
                  : 'bg-white dark:bg-gray-800 text-slate-400 border-2 border-gray-200 dark:border-gray-700'
              }`}>
                {index <= activeStep ? (
                  <step.icon className="w-8 h-8 animate-pulse" />
                ) : (
                  <span className="text-lg font-bold">{step.number}</span>
                )}
              </div>
              
              {/* Content */}
              <div className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 ${
                index <= activeStep ? 'ring-2 ring-purple-500 ring-opacity-30' : ''
              }`}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 font-poppins">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{step.description}</p>
                
                {index <= activeStep && (
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl animate-fade-in">
                    <p className="text-sm text-slate-700 dark:text-slate-300">{step.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
