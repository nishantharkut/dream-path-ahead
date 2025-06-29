
import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "To bridge the gap between academic learning and industry requirements by providing personalized career guidance and practical experience opportunities."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To become the leading platform that transforms student potential into professional success through comprehensive mentorship and community support."
    },
    {
      icon: Users,
      title: "Community",
      description: "Built by IIT Kharagpur alumni, we understand the challenges students face and provide the support system needed for career excellence."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
                About 
                <span className="text-primary"> Beyond Career</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded by passionate IIT Kharagpur alumni, Beyond Career emerged from a simple yet powerful vision: 
                every student deserves access to quality career guidance and mentorship that can transform their professional journey.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand the challenges students face in today's competitive landscape. That's why we've created 
                a comprehensive platform that combines personalized career guidance, exclusive internship opportunities, 
                and a supportive community of like-minded individuals.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-start space-x-4 transition-all duration-1000 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-poppins">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-2xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-card rounded-2xl p-8 shadow-xl border border-border">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IIT Kharagpur Campus"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                  loading="lazy"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2 font-poppins">IIT Kharagpur Heritage</h3>
                  <p className="text-muted-foreground">
                    Founded by alumni who understand excellence and are committed to sharing their knowledge 
                    and experience with the next generation of leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
