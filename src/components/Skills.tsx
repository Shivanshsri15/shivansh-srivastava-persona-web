
import React from 'react';
import { Code, Server, Database, Cloud, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      borderColor: "border-purple-200 hover:border-purple-300",
      skills: ["React.js", "Redux Toolkit", "React-Bootstrap", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-pink-500 to-rose-400",
      bgColor: "bg-pink-50 hover:bg-pink-100",
      borderColor: "border-pink-200 hover:border-pink-300",
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-blue-500 to-indigo-400",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200 hover:border-blue-300",
      skills: ["MongoDB", "Mongoose (ODM)", "NoSQL"]
    },
    {
      title: "Cloud & AI",
      icon: Cloud,
      color: "from-indigo-500 to-purple-400",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      borderColor: "border-indigo-200 hover:border-indigo-300",
      skills: ["AWS", "Gemini AI", "AR/VR"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-cyan-500 to-blue-400",
      bgColor: "bg-cyan-50 hover:bg-cyan-100",
      borderColor: "border-cyan-200 hover:border-cyan-300",
      skills: ["Git", "GitHub", "Postman"]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      color: "from-teal-500 to-cyan-400",
      bgColor: "bg-teal-50 hover:bg-teal-100",
      borderColor: "border-teal-200 hover:border-teal-300",
      skills: ["Excel", "PowerPoint", "Problem-Solving", "Agile & Waterfall", "Team Collaboration", "Project & Product Management", "Communication", "Strategic Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-up">
            A comprehensive toolkit of modern technologies and methodologies for building scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className={`${category.bgColor} rounded-xl p-8 transition-all duration-300 border ${category.borderColor} hover:shadow-lg group animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center transition-all duration-300 hover:translate-x-2"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700 text-sm">
                        {skill}
                      </span>
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
