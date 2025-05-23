
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'interests', label: 'Interests' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl animate-bounce">👨‍💻</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-100 text-purple-800 shadow-sm'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2 ml-4">
              <a
                href="https://drive.google.com/file/d/1InuEWb0w_xIu5qxytLqcX1ySPuoadkV2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-purple-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-purple-100 text-purple-800'
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 space-y-2">
              <a
                href="https://drive.google.com/file/d/1InuEWb0w_xIu5qxytLqcX1ySPuoadkV2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
