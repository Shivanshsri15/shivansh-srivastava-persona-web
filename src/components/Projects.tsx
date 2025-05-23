
import React from 'react';
import { Github, ExternalLink, ShoppingCart, MessageCircle, Edit3, Calculator, Building2, Play, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack shopping platform featuring user authentication, PayPal payment integration, advanced cart management, product reviews, and admin dashboard. Built with MERN stack for optimal performance and scalability.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "PayPal API", "JWT"],
      github: "EcommercePlatformV1",
      videoLink: "https://www.linkedin.com/posts/shivanshsri15_a-mern-stack-ecommerce-website-project-is-activity-7196201821600706560-RvJ7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzoNpkB_XiS1cfK-0UjFKwn8-u-_MxYJW4",
      icon: ShoppingCart,
      gradient: "from-emerald-500 to-green-400",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      features: [
        "Secure User Authentication & Authorization",
        "PayPal Payment Gateway Integration", 
        "Product Reviews & Rating System",
        "Advanced Shopping Cart Management",
        "Comprehensive Admin Dashboard",
        "Real-time Order Tracking System",
        "Responsive Design for All Devices",
        "Product Search & Filtering"
      ],
      stats: {
        lines: "5000+",
        features: "15+",
        tech: "6"
      }
    },
    {
      title: "X (Twitter) Clone",
      description: "A feature-rich social media platform replicating Twitter's core functionality with modern web technologies. Includes real-time feeds, social interactions, and a responsive animated UI built with MERN stack.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT", "React-Bootstrap"],
      github: "TwitterCloneV1",
      videoLink: "https://www.linkedin.com/posts/shivanshsri15_my-mern-stack-twitter-clone-project-aims-activity-7196197864463626240-rHNv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzoNpkB_XiS1cfK-0UjFKwn8-u-_MxYJW4",
      icon: MessageCircle,
      gradient: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Real-time Tweet Feed & Updates",
        "User Follow/Unfollow System",
        "Like & Retweet Functionality",
        "Nested Comment Threads",
        "JWT-based Authentication",
        "Responsive Bootstrap Design",
        "User Profile Management",
        "Tweet Search & Hashtags"
      ],
      stats: {
        lines: "4500+",
        features: "12+",
        tech: "7"
      }
    },
    {
      title: "QuirkyPost (Blog Platform)",
      description: "An innovative AI-powered blogging platform that combines traditional blogging with artificial intelligence assistance. Features include content generation, user engagement tools, and comprehensive analytics dashboard.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Redux", "Gemini AI", "Multer"],
      github: "QuirkyPost",
      videoLink: "https://www.linkedin.com/posts/shivanshsri15_mernstack-quirkypost-bloggingplatform-activity-7283915866037968897-0VRd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzoNpkB_XiS1cfK-0UjFKwn8-u-_MxYJW4",
      icon: Edit3,
      gradient: "from-purple-500 to-violet-400",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "AI-Powered Content Generation",
        "Rich Text Editor with Formatting",
        "User Profiles & Avatar System",
        "Real-time Analytics Dashboard",
        "Image Upload & Management",
        "Social Interactions & Comments",
        "Content Categorization",
        "SEO-Optimized Blog Posts"
      ],
      stats: {
        lines: "6000+",
        features: "18+",
        tech: "8"
      }
    },
    {
      title: "Tax Calculator Platform",
      description: "A sophisticated and user-friendly tax calculation tool designed specifically for the Old Tax Regime. Helps users optimize deductions, compare tax slabs, and ensure accurate tax planning with instant calculations.",
      techStack: ["React.js", "Bootstrap", "TypeScript", "JavaScript"],
      github: "eTHXM8r6",
      videoLink: "https://www.linkedin.com/posts/shivanshsri15_i-am-pleased-to-announce-the-successful-completion-activity-7298295142313017344-RmIJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzoNpkB_XiS1cfK-0UjFKwn8-u-_MxYJW4",
      icon: Calculator,
      gradient: "from-orange-500 to-red-400",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: [
        "Accurate Income Tax Calculation",
        "HRA, LTA, Gratuity Deductions",
        "80C/80D/80G Tax Deductions",
        "Real-time Tax Slab Comparison",
        "Simple & Intuitive UI Design",
        "Instant Tax Breakdown Display",
        "Multiple Income Source Support",
        "Export Tax Summary Feature"
      ],
      stats: {
        lines: "3000+",
        features: "10+",
        tech: "4"
      }
    },
    {
      title: "Banking System (OOP)",
      description: "A comprehensive banking system implementation showcasing Object-Oriented Programming principles in TypeScript. Features multiple account types, transaction management, and automated interest calculations.",
      techStack: ["TypeScript", "Node.js", "OOP Principles", "JavaScript"],
      github: "Banking-System-Oops",
      icon: Building2,
      gradient: "from-indigo-500 to-blue-400",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      features: [
        "Multiple Account Types Support",
        "Secure Deposit & Withdrawal",
        "Comprehensive Transaction History",
        "Automated Interest Calculations",
        "Object-Oriented Design Pattern",
        "TypeScript Implementation",
        "Account Balance Management",
        "Transaction Validation System"
      ],
      stats: {
        lines: "2500+",
        features: "8+",
        tech: "4"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            A showcase of my recent work, demonstrating expertise in full-stack development, modern technologies, and innovative problem-solving approaches.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index} 
                className={`group ${project.bgColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border ${project.borderColor} hover:scale-[1.01] animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                    {/* Project Header */}
                    <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-80">
                      <div className="flex items-center mb-6">
                        <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{project.title}</h3>
                          <div className="flex space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-1`}></div>
                              {project.stats.lines} lines
                            </span>
                            <span className="flex items-center">
                              <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-1`}></div>
                              {project.stats.features} features
                            </span>
                            <span className="flex items-center">
                              <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-1`}></div>
                              {project.stats.tech} technologies
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col space-y-3">
                        <a
                          href={`https://github.com/Shivanshsri15/${project.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/btn`}
                        >
                          <Github size={20} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                          View Source Code
                        </a>
                        
                        {project.videoLink && (
                          <a
                            href={project.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                          >
                            <Play size={20} className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                            Watch Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{project.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-300 transition-colors duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start group/feature">
                              <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3 mt-2 group-hover/feature:scale-125 transition-transform duration-200`}></div>
                              <span className="text-gray-600 text-sm leading-relaxed group-hover/feature:text-gray-800 transition-colors duration-200">{feature}</span>
                            </div>
                          ))}
                        </div>
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
