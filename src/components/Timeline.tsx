
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Explore career paths with personalized assessments and expert guidance'
    },
    {
      number: '02',
      title: 'Development',
      description: 'Build skills through curated courses and hands-on projects'
    },
    {
      number: '03',
      title: 'Opportunities',
      description: 'Access exclusive internships and job placements'
    },
    {
      number: '04',
      title: 'Success',
      description: 'Achieve your career goals with ongoing mentorship support'
    }
  ];

  return (
    <section id="timeline" ref={sectionRef} className="section-padding bg-light-bg dark:bg-dark-bg">
      <div className="container-custom">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text mb-4 sm:mb-6 font-poppins">
            How It <span className="text-light-accent dark:text-dark-accent">Works</span>
          </h2>
          <p className="text-lg sm:text-xl text-light-subtext dark:text-dark-subtext max-w-3xl mx-auto leading-relaxed">
            Your journey to career success in four strategic steps
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* SVG Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0">
            <div 
              className="h-full bg-light-accent dark:bg-dark-accent transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="relative z-10 grid grid-cols-4 gap-4 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center cursor-pointer transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${index === activeStep ? 'scale-110' : 'hover:scale-105'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setActiveStep(index)}
              >
                <div className={`relative mx-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 lg:mb-4 transition-all duration-300 ${
                  index <= activeStep 
                    ? 'bg-light-accent dark:bg-dark-accent text-white shadow-lg' 
                    : 'bg-white dark:bg-gray-800 text-light-subtext dark:text-dark-subtext border-2 border-gray-200 dark:border-gray-700'
                }`}>
                  {index <= activeStep ? (
                    <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8" />
                  ) : (
                    <span className="text-sm lg:text-xl font-bold">{step.number}</span>
                  )}
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-3 lg:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-base lg:text-xl font-semibold text-light-text dark:text-dark-text mb-2 lg:mb-3 font-poppins">{step.title}</h3>
                  <p className="text-xs lg:text-sm text-light-subtext dark:text-dark-subtext leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 transition-all duration-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                index <= activeStep 
                  ? 'bg-light-accent dark:bg-dark-accent text-white shadow-lg' 
                  : 'bg-white dark:bg-gray-800 text-light-subtext dark:text-dark-subtext border-2 border-gray-200 dark:border-gray-700'
              }`}>
                {index <= activeStep ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span className="text-sm font-bold">{step.number}</span>
                )}
              </div>
              
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2 font-poppins">{step.title}</h3>
                <p className="text-sm text-light-subtext dark:text-dark-subtext leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
