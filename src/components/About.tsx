
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
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">
                About 
                <span className="text-gradient"> Beyond Career</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded by passionate IIT Kharagpur alumni, Beyond Career emerged from a simple yet powerful vision: 
                every student deserves access to quality career guidance and mentorship that can transform their professional journey.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand the challenges students face in today's competitive landscape. That's why we've created 
                a comprehensive platform that combines personalized career guidance, exclusive internship opportunities, 
                and a supportive community of like-minded individuals.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-start space-x-4 transition-all duration-1000 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IIT Kharagpur Campus"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">IIT Kharagpur Heritage</h3>
                  <p className="text-gray-600">
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
