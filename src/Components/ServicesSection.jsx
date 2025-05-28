import React from 'react'
import ServiceCard from './ServiceCard'; // ✅ Fixes the ReferenceError

const ServicesSection = () => {
  const services = [
    {
      icon: "🚑",
      title: "Medical Aid",
      description: "Free ambulance service from Hindapur to Bangalore, Anantapur and Puttaparthi. Blood donation camps and health check-ups for students."
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Scholarships for meritorious students pursuing Engineering and M.B.A. Donations of books, stationery and uniforms to support education."
    },
    {
      icon: "💼",
      title: "Employment",
      description: "Conducting job fairs (Job Mela) for unemployed individuals to connect them with potential employers and create opportunities."
    },
    {
      icon: "🌾",
      title: "Rural Development",
      description: "Donated street lights to villages for better safety and connectivity. Supporting rural infrastructure development initiatives."
    },
    {
      icon: "🧵",
      title: "Women Empowerment",
      description: "Donated sewing machines to poor women to help them establish their own livelihood and achieve financial independence."
    },
    {
      icon: "🏆",
      title: "Sports & Recreation",
      description: "Organized district-wide volleyball tournaments and mandal-wide cricket tournaments in rural areas to promote sports."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text animate-fade-in-up">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection