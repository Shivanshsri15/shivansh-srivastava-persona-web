
import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, Trophy, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering (Data Science)",
      institution: "Dr. APJ Abdul Kalam Technical University, ABES Engineering College",
      location: "Ghaziabad, India",
      year: "Expected 2027",
      icon: GraduationCap
    },
    {
      degree: "Senior Secondary (PCM): 92%",
      institution: "Sarla Chopra DAV Public School",
      location: "Noida",
      year: "2022–2023",
      icon: Award
    },
    {
      degree: "High School: 89%",
      institution: "Sarla Chopra DAV Public School",
      location: "Noida",
      year: "2020–2021",
      icon: Award
    }
  ];

  const certifications = [
    "AWS Academy Training (Completed)",
    "AR/VR Project and Startup Creation Workshop"
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer with a strong foundation in computer science and data science, 
            constantly learning and building innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div 
                  key={index} 
                  className="bg-emerald-50 rounded-xl p-6 hover:bg-emerald-100 transition-all duration-300 border border-emerald-100 hover:border-emerald-200 hover:shadow-md group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-all duration-300">
                      <IconComponent size={24} className="text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                      <p className="text-emerald-600 mb-1">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.location} • {edu.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications & Workshops</h3>
            
            <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Professional Development</h4>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-all duration-300 border border-purple-100 hover:border-purple-200 hover:shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Focus Areas</h4>
              <div className="grid grid-cols-2 gap-3">
                {["Full-Stack Development", "Data Science", "AI Integration", "Cloud Computing"].map((area, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-2 bg-white/70 text-purple-700 rounded-lg text-sm font-medium border border-purple-200 text-center"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
