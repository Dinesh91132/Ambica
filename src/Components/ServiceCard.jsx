import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, delay, link }) => (

    <div 
      className={`group bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-auto duration-500 hover:scale-105 animate-fade-in-up border border-white/20`}
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
      {link ? (
        <Link to={link}>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </Link>
      ) : (
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      )}
      
    </div>
  
);

export default ServiceCard;
