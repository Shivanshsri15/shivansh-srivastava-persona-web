
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shivanshsri15', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Shivanshsri15', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Srivastavashivansh295@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-blue-100"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-emerald-200 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shivansh Srivastava
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Full-Stack Developer & Data Science Student
          </p>
          
          <div className="flex items-center justify-center text-gray-500 mb-8 space-x-6">
            <div className="flex items-center space-x-2 hover:text-emerald-600 transition-colors duration-300">
              <MapPin size={16} />
              <span>Noida, UP, India</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-emerald-600 transition-colors duration-300">
              <Phone size={16} />
              <span>+91 8178230966</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions with modern web technologies, 
            specializing in MERN stack development and exploring AI integration.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/70 backdrop-blur-sm rounded-full border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:scale-110 group shadow-lg"
                  aria-label={link.label}
                >
                  <IconComponent size={24} className="text-gray-600 group-hover:text-emerald-600 transition-colors duration-300" />
                </a>
              );
            })}
          </div>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span className="mr-2">Explore My Work</span>
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
