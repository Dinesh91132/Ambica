// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import HeroSection from './HeroSection';
// import StatsSection from './StatsSection';
// import ServicesSection from './ServicesSection';
// import ActivitiesSection from './ActivitiesSection';
// import AboutSection from './AboutSection';
// import Footer from './Footer';

// const AmbicaFoundation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       const sections = ['home', 'services', 'activities', 'about', 'contact'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });

//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }

//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-slide-down {
//           animation: slideDown 0.3s ease-out forwards;
//         }

//         .glass-morphism {
//           background: rgba(255, 255, 255, 0.8);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .hamburger-line {
//           transition: all 0.3s ease;
//         }

//         .hamburger-active .hamburger-line-1 {
//           transform: rotate(45deg) translate(6px, 6px);
//         }

//         .hamburger-active .hamburger-line-2 {
//           opacity: 0;
//         }

//         .hamburger-active .hamburger-line-3 {
//           transform: rotate(-45deg) translate(6px, -6px);
//         }
//       `}</style>

//       <Navbar 
//         isScrolled={isScrolled}
//         activeSection={activeSection}
//         isMobileMenuOpen={isMobileMenuOpen}
//         scrollToSection={scrollToSection}
//         toggleMobileMenu={toggleMobileMenu}
//       />

//       <HeroSection scrollToSection={scrollToSection} />
//       <StatsSection />
//       <ServicesSection />
//       <ActivitiesSection />
//       <AboutSection />
//       <Footer />
//     </div>
//   );
// };

// export default AmbicaFoundation;
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import StatsSection from './StatsSection';
import ServicesSection from './ServicesSection';
import ActivitiesSection from './ActivitiesSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

const AmbicaFoundation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'activities', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
      <style jsx>{true}{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hamburger-line {
          transition: all 0.3s ease;
        }

        .hamburger-active .hamburger-line-1 {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger-active .hamburger-line-2 {
          opacity: 0;
        }

        .hamburger-active .hamburger-line-3 {
          transform: rotate(-45deg) translate(6px, -6px);
        }
      `}</style>

      <Header
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        scrollToSection={scrollToSection}
        toggleMobileMenu={toggleMobileMenu}
      />

      <Hero scrollToSection={scrollToSection} />
      <StatsSection />
      <ServicesSection />
      <ActivitiesSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AmbicaFoundation;