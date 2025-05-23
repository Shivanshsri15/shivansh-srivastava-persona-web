
import React, { useState } from 'react';
import { Code, Server, Database, Cloud, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-400",
      skills: ["React.js", "Redux Toolkit", "React-Bootstrap", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-400",
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-400",
      skills: ["MongoDB", "Mongoose (ODM)", "NoSQL"]
    },
    {
      title: "Cloud & AI",
      icon: Cloud,
      color: "from-orange-500 to-red-400",
      skills: ["AWS", "Gemini AI", "AR/VR"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-indigo-500 to-purple-400",
      skills: ["Git", "GitHub", "Postman"]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      color: "from-teal-500 to-blue-400",
      skills: ["Excel", "PowerPoint", "Problem-Solving", "Agile & Waterfall", "Team Collaboration", "Project & Product Management", "Communication", "Strategic Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies for building scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className={`group bg-gray-900/50 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-500 border border-gray-800 hover:border-gray-700 animate-scale-in transform-gpu ${
                  hoveredCard === index 
                    ? 'scale-105 rotate-1 shadow-2xl shadow-purple-500/20' 
                    : 'hover:scale-105 hover:-rotate-1'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: hoveredCard === index 
                    ? 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)' 
                    : undefined
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center group-hover:translate-x-2 transition-all duration-300 transform hover:translate-x-4"
                      style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 opacity-70 group-hover:opacity-100 transform transition-all duration-300 group-hover:scale-125`}></div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover overlay effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
