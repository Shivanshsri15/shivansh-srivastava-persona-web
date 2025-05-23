
import React from 'react';
import { Github, ExternalLink, ShoppingCart, MessageCircle, Edit3, Calculator, Building2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack shopping platform with authentication, PayPal integration, cart & product management, reviews, carousel, pagination, and secure sessions.",
      techStack: ["MERN", "PayPal API"],
      github: "EcommercePlatformV1",
      icon: ShoppingCart,
      gradient: "from-emerald-500 to-green-400",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
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
      gradient: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
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
      gradient: "from-purple-500 to-violet-400",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "AI-Powered Content Assistance",
        "Rich Text Editor",
        "User Profiles & Avatars",
        "Real-time Analytics",
        "Image Upload & Management",
        "Social Interactions"
      ]
    },
    {
      title: "Tax Calculator Platform",
      description: "A robust and user-friendly tool designed for the Old Tax Regime that simplifies tax calculations, helps optimize deductions, and ensures accurate tax planning with ease.",
      techStack: ["React", "Bootstrap", "TypeScript"],
      github: "eTHXM8r6",
      icon: Calculator,
      gradient: "from-orange-500 to-red-400",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: [
        "Accurate Income Tax Calculation",
        "HRA, LTA, Gratuity Deductions",
        "80C/80D/80G Deductions Applied",
        "Real-time Tax Slab Comparison",
        "Simple & Intuitive UI",
        "Instant Tax Breakdown"
      ]
    },
    {
      title: "Banking System (OOP)",
      description: "A simple banking system implemented in TypeScript that supports multiple account types, transactions, and interest calculations using Object-Oriented Programming principles.",
      techStack: ["TypeScript", "Node.js", "OOP"],
      github: "Banking-System-Oops",
      icon: Building2,
      gradient: "from-indigo-500 to-blue-400",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      features: [
        "Multiple Account Types",
        "Deposit & Withdraw Funds",
        "Transaction History",
        "Interest Calculations",
        "Object-Oriented Design",
        "TypeScript Implementation"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className={`group ${project.bgColor} rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border ${project.borderColor}`}>
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{project.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className={`px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="grid md:grid-cols-2 gap-3 mb-8">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3`}></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
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
