
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shivanshsri15', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Shivanshsri15', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Srivastavashivansh295@gmail.com', label: 'Email' },
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className={`transition-all duration-1000 ${isLoaded ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Shivansh Srivastava
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer & Data Science Student
          </p>
          
          <div className="flex items-center justify-center text-gray-400 mb-8 space-x-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <MapPin size={16} />
              <span>Noida, UP, India</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Phone size={16} />
              <span>+91 8178230966</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Passionate about creating innovative solutions with modern web technologies, 
            specializing in MERN stack development and exploring AI integration.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 group transform hover:rotate-12 hover:shadow-2xl hover:shadow-blue-500/25"
                  aria-label={link.label}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <IconComponent size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </div>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up hover:shadow-blue-500/25 group"
            style={{ animationDelay: '1s' }}
          >
            <span className="mr-2">Explore My Work</span>
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
