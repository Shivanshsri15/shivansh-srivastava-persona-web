
import React from 'react';
import { TrendingUp, DollarSign, BarChart3, Coins, PieChart, Activity } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      title: "Forex Markets",
      description: "Foreign exchange trading and currency market analysis",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-400",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      details: [
        "Currency Pair Analysis",
        "Market Trend Prediction",
        "Risk Management",
        "Technical Analysis"
      ]
    },
    {
      title: "Crypto Trading",
      description: "Cryptocurrency investment strategies and blockchain technology",
      icon: Coins,
      gradient: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Blockchain Technology",
        "DeFi Protocols",
        "Market Analysis",
        "Portfolio Management"
      ]
    },
    {
      title: "Commodity Markets",
      description: "Trading in physical goods and commodity futures",
      icon: BarChart3,
      gradient: "from-orange-500 to-amber-400",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      details: [
        "Futures Trading",
        "Supply Chain Analysis",
        "Price Forecasting",
        "Market Research"
      ]
    }
  ];

  const additional_interests = [
    "Financial Technology",
    "Algorithmic Trading",
    "Investment Strategies",
    "Market Psychology",
    "Economic Analysis",
    "Portfolio Optimization"
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Interests & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond technology, I'm passionate about financial markets and trading strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div 
                key={index} 
                className={`${interest.bgColor} rounded-xl p-8 hover:shadow-lg transition-all duration-300 border ${interest.borderColor} group`}
              >
                <div className="text-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${interest.gradient} rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{interest.title}</h3>
                  <p className="text-gray-600 text-sm">{interest.description}</p>
                </div>
                
                <div className="space-y-3">
                  {interest.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${interest.gradient} rounded-full mr-3`}></div>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Interests */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-8 border border-emerald-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Additional Areas of Interest</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {additional_interests.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-white/70 rounded-lg border border-emerald-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
              >
                <Activity size={16} className="text-emerald-600 mr-2" />
                <span className="text-gray-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200 max-w-4xl mx-auto">
            <PieChart className="text-green-600 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Financial Market Philosophy</h4>
            <p className="text-gray-600 leading-relaxed">
              I believe in combining technical analysis with fundamental research to make informed trading decisions. 
              My approach emphasizes risk management, continuous learning, and adapting to market dynamics while 
              maintaining a long-term perspective on wealth creation and financial growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
