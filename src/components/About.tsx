
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

  const achievements = [
    {
      title: "Led team of 4 at Hackoverse'24",
      result: "Top 5",
      icon: Trophy
    },
    {
      title: "Led team of 4 at Webathon'24",
      result: "Top 8",
      icon: Trophy
    },
    {
      title: "Head of Crowd Management",
      result: "ABESEC event",
      icon: Users
    }
  ];

  const certifications = [
    "AWS Academy Training (Completed)",
    "AR/VR Project and Startup Creation Workshop"
  ];

  const interests = [
    "Forex Markets",
    "Crypto Trading",
    "Commodity Markets"
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 border border-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer with a strong foundation in computer science and data science, 
            constantly learning and building innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-blue-500/10 group"
                  style={{ 
                    animationDelay: `${0.2 + index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                      <IconComponent size={24} className="text-blue-400 group-hover:text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{edu.degree}</h4>
                      <p className="text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-300">{edu.institution}</p>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{edu.location} • {edu.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Achievements & Others */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-white mb-6">Leadership & Achievements</h3>
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 hover:shadow-xl hover:shadow-purple-500/10 group"
                  style={{ 
                    animationDelay: `${0.4 + index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                      <IconComponent size={24} className="text-purple-400 group-hover:text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{achievement.title}</h4>
                      <p className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{achievement.result}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Certifications */}
            <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 group">
              <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">Certifications & Workshops</h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-gray-300 flex items-center group-hover:text-gray-200 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-green-400 transition-colors duration-300 animate-pulse"></div>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 group">
              <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">Interests</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30 hover:from-blue-600/30 hover:to-purple-600/30 hover:border-blue-600/50 hover:scale-110 transition-all duration-300 transform hover:rotate-3 cursor-default"
                  >
                    {interest}
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
