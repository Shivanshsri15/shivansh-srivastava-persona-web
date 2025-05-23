
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shivanshsri15', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Shivanshsri15', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Srivastavashivansh295@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shivansh Srivastava
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Full-Stack Developer & Data Science Student
          </p>
          
          <div className="flex items-center justify-center text-gray-400 mb-8 space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Noida, UP, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+91 8178230966</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
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
                  className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
                  aria-label={link.label}
                >
                  <IconComponent size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </div>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
