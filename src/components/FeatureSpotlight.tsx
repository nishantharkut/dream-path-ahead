
import React, { useEffect, useRef, useState } from 'react';
import { Search, Smartphone, BarChart3 } from 'lucide-react';

const FeatureSpotlight = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Advanced search engine optimization to ensure maximum visibility and reach for your career profile.',
      details: 'Comprehensive keyword research, meta optimization, and structured data implementation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reverse: false
    },
    {
      icon: Smartphone,
      title: 'PWA Support',
      description: 'Progressive Web App capabilities for seamless mobile experience and offline functionality.',
      details: 'Service worker implementation, caching strategies, and native app-like performance.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reverse: true
    },
    {
      icon: BarChart3,
      title: 'Analytics Integration',
      description: 'Comprehensive analytics to track your career progress and optimize your professional journey.',
      details: 'Real-time insights, performance metrics, and actionable recommendations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reverse: false
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-light-text dark:text-dark-text mb-6 font-poppins">
            Feature <span className="text-light-accent dark:text-dark-accent">Spotlight</span>
          </h2>
          <p className="text-xl text-light-subtext dark:text-dark-subtext max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology powering your career transformation
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                feature.reverse ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${feature.reverse ? 'lg:col-start-2' : ''} transition-all duration-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : `${feature.reverse ? 'translate-x-10' : '-translate-x-10'} opacity-0`
              }`} style={{ transitionDelay: `${index * 300}ms` }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-light-accent dark:bg-dark-accent rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-light-text dark:text-dark-text font-poppins">{feature.title}</h3>
                </div>
                <p className="text-lg text-light-subtext dark:text-dark-subtext mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <p className="text-light-text dark:text-dark-text font-medium">{feature.details}</p>
                </div>
              </div>
              
              <div className={`${feature.reverse ? 'lg:col-start-1' : ''} transition-all duration-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : `${feature.reverse ? '-translate-x-10' : 'translate-x-10'} opacity-0`
              }`} style={{ transitionDelay: `${index * 300 + 150}ms` }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-light-accent dark:bg-dark-accent rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;
