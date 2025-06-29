
import React, { useEffect, useRef, useState } from 'react';
import { Compass, Briefcase, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
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

  const services = [
    {
      icon: Compass,
      title: "Career Guidance",
      description: "Personalized career counseling sessions with industry experts to help you discover your ideal career path and create actionable plans.",
      features: ["One-on-one counseling", "Career assessment tools", "Industry insights", "Skill gap analysis"],
      color: "bg-blue-500"
    },
    {
      icon: Briefcase,
      title: "Internships",
      description: "Exclusive internship opportunities with top companies, startups, and organizations across various industries and domains.",
      features: ["Curated opportunities", "Application assistance", "Interview preparation", "Performance tracking"],
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Mentorship & Community",
      description: "Connect with experienced professionals and like-minded peers in a supportive community environment for continuous growth.",
      features: ["Expert mentorship", "Peer networking", "Community events", "Knowledge sharing"],
      color: "bg-green-500"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to support your career journey from exploration to achievement
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group card-hover card-neumorphism border-0 shadow-lg overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-float`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2 font-poppins">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-muted-foreground"
                    >
                      <div className={`w-2 h-2 rounded-full ${service.color} mr-3 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full btn-primary btn-glow group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
