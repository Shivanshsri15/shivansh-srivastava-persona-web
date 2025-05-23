
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Srivastavashivansh295@gmail.com",
      href: "mailto:Srivastavashivansh295@gmail.com",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8178230966",
      href: "tel:+918178230966",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, UP, India",
      href: "#",
      color: "from-purple-500 to-pink-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Shivanshsri15",
      href: "https://github.com/Shivanshsri15",
      color: "from-gray-600 to-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/Shivanshsri15",
      href: "https://linkedin.com/in/Shivanshsri15",
      color: "from-blue-600 to-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects? Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-700"
                  >
                    <div className={`p-4 bg-gradient-to-r ${info.color} rounded-lg mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.label}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <h3 className="text-2xl font-semibold text-white mb-8 mt-12">Social Media</h3>
            <div className="space-y-6">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-gray-700"
                  >
                    <div className={`p-4 bg-gradient-to-r ${link.color} rounded-lg mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{link.label}</h4>
                      <p className="text-gray-300">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
