
import React from 'react';
import { Code, Server, Database, Cloud, Brain, Wrench } from 'lucide-react';

const Skills = () => {
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
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              <div key={index} className="group bg-gray-900/50 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 opacity-70`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
