import React from 'react'

const ServiceCard = ({ icon, title, description, delay }) => (
  <div 
    className={`group bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up border border-white/20`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export default ServiceCard