
import React from 'react';
import { Github, ExternalLink, ShoppingCart, MessageCircle, Edit3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack shopping platform with authentication, PayPal integration, cart & product management, reviews, carousel, pagination, and secure sessions.",
      techStack: ["MERN", "PayPal API"],
      github: "EcommercePlatformV1",
      icon: ShoppingCart,
      gradient: "from-blue-500 to-cyan-400",
      features: [
        "User Authentication & Authorization",
        "PayPal Payment Integration", 
        "Product Reviews & Ratings",
        "Shopping Cart Management",
        "Admin Dashboard",
        "Order Tracking"
      ]
    },
    {
      title: "X (Twitter) Clone",
      description: "Social media platform supporting tweets, follows, likes, retweets, comments, secure login, animated UI, and scalable backend.",
      techStack: ["MERN", "Redux Toolkit", "JWT", "React-Bootstrap"],
      github: "TwitterCloneV1",
      icon: MessageCircle,
      gradient: "from-purple-500 to-pink-400",
      features: [
        "Real-time Tweet Feed",
        "User Follow System",
        "Like & Retweet Functionality",
        "Comment Threads",
        "JWT Authentication",
        "Responsive Design"
      ]
    },
    {
      title: "QuirkyPost (Blog Platform)",
      description: "AI-assisted blogging platform with authentication, likes, comments, responsive UI, real-time tracking, and user profiles.",
      techStack: ["MERN", "JWT", "Redux", "Gemini AI", "Multer"],
      github: "QuirkyPost",
      icon: Edit3,
      gradient: "from-green-500 to-emerald-400",
      features: [
        "AI-Powered Content Assistance",
        "Rich Text Editor",
        "User Profiles & Avatars",
        "Real-time Analytics",
        "Image Upload & Management",
        "Social Interactions"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="group bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-gray-600">
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                    {/* Project Icon & Title */}
                    <div className="flex-shrink-0 mb-6 lg:mb-0">
                      <div className={`p-6 bg-gradient-to-r ${project.gradient} rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-full text-sm font-medium border border-opacity-30`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="grid md:grid-cols-2 gap-3 mb-8">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3`}></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* GitHub Link */}
                      <div className="flex space-x-4">
                        <a
                          href={`https://github.com/Shivanshsri15/${project.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                          <Github size={20} className="mr-2" />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
