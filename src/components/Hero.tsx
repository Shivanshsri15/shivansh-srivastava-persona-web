
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Code, ArrowRight } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shivanshsri15', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Shivanshsri15', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/Shivanshsri157/', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:Srivastavashivansh295@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Professional Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 mb-6 animate-slide-down">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-in-left">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Shivansh Srivastava
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6 animate-slide-in-right">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
              Data Science Student
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full text-sm font-medium border border-pink-200">
              MERN Stack Expert
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto animate-scale-in">
            <div className="flex items-center justify-center md:justify-end text-gray-600 space-x-2 hover:text-purple-600 transition-colors duration-300">
              <MapPin size={18} />
              <span className="font-medium">Noida, UP, India</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-600 space-x-2 hover:text-purple-600 transition-colors duration-300">
              <Phone size={18} />
              <span className="font-medium">+91 8178230966</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in">
            Passionate about creating innovative solutions with modern web technologies. 
            Specializing in <span className="font-semibold text-purple-600">MERN stack development</span> and 
            exploring <span className="font-semibold text-pink-600">AI integration</span> to build scalable, 
            user-centric applications.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200 hover:bg-white hover:border-purple-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  aria-label={link.label}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent size={24} className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-rotate-in">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span className="mr-2">View My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-purple-600 font-semibold rounded-2xl border border-purple-200 hover:bg-purple-50 hover:border-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span className="mr-2">Let's Connect</span>
              <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
