
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Leadership from '../components/Leadership';
import Interests from '../components/Interests';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-gray-800">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Leadership />
      <Interests />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-emerald-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-100">
            © 2024 Shivansh Srivastava. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
