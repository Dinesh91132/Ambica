import React from 'react'
import ServiceCard from './ServiceCard'; // ✅ Fixes the ReferenceError

const ServicesSection = () => {
  const services = [
    {
      icon: "🏥",
      title: "Medical Camp",
      description: "Free ambulance service from Hindapur to Bangalore, Anantapur and Puttaparthi. Blood donation camps and health check-ups for students.",
      link: "/MedicalAid",
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Scholarships for meritorious students pursuing Engineering and M.B.A. Donations of books, stationery and uniforms to support education."
      , link: "/Education",
    },
    {
      icon: "💼",
      title: "Employment",
      description: "Conducting job fairs (Job Mela) for unemployed individuals to connect them with potential employers and create opportunities.",
      link: "/Employment",
    },
    {
      icon: "🌾",
      title: "Rural Development",
      description: "Donated street lights to villages for better safety and connectivity. Supporting rural infrastructure development initiatives."
      , link: "/Rural"
    },
    {
      icon: "🧵",
      title: "Women Empowerment",
      description: "Donated sewing machines to poor women to help them establish their own livelihood and achieve financial independence."
      , link: "/Womenpage"
    },
    {
      icon: "⛑️",
      title: "Disaster Relief",
      description: "Rapid response to local disasters with food, clothing, and temporary shelter support for affected families."
      , link: "/DisasterPage"
    },
    {
      icon: "🚑",
      title: "Ambulance Services",
      description: "24/7 free ambulance service available from Hindapur to Bangalore, Anantapur, and Puttaparthi for emergency medical assistance."
      , link: "/Ambulance"
    },
    {
      icon: "🏆",
      title: "Sports",
      description: "Organized district-wide volleyball tournaments and mandal-wide cricket tournaments in rural areas to promote sports."
      , link: "/SportsPage"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-0 text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text animate-fade-in-up py-1">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto py-2 mb-10 text-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
          Comprehensive support services designed to uplift communities and create lasting positive impact.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 200}
              link={service.link} // Pass link if needed in ServiceCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
