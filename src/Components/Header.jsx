// import React from 'react';
// // import logo from './public/Images/logo.png'; // Make sure this path is correct

// const Header = ({ isScrolled, activeSection, isMobileMenuOpen, scrollToSection, toggleMobileMenu }) => {
//   const navItems = [
//     { id: 'home', label: 'Home', icon: '🏠' },
//     { id: 'services', label: 'Services', icon: '🔧' },
//     { id: 'activities', label: 'Activities', icon: '🎯' },
//     { id: 'about', label: 'About', icon: 'ℹ' },
//     { id: 'contact', label: 'Contact', icon: '📞' }
//   ];

//   return (
//     <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'glass-morphism shadow-lg' : 'bg-white/70 backdrop-blur-md'
//     }`}>
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div
//             className="flex items-center space-x-3 animate-fade-in-up cursor-pointer"
//             onClick={() => scrollToSection('home')}
//           >
//             <img src="/Images/logo.png" alt="Logo" 

//               className="w-12 h-12 rounded shadow-lg transform hover:scale-110 transition-transform duration-300"
//             />
//             <div>
//               <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
//                 AMBICA FOUNDATION
//               </h1>
//               <p className="text-xs text-gray-500">Serving Since 2009</p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex space-x-2">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${
//                   activeSection === item.id
//                     ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
//                     : 'text-gray-700 hover:text-blue-600 hover:bg-white/50 hover:scale-105'
//                 }`}
//               >
//                 <span className="text-sm">{item.icon}</span>
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMobileMenu}
//             className={`lg:hidden flex flex-col justify-center items-center w-8 h-8 ${
//               isMobileMenuOpen ? 'hamburger-active' : ''
//             }`}
//           >
//             <span className="hamburger-line hamburger-line-1 block w-6 h-0.5 bg-gray-700 mb-1"></span>
//             <span className="hamburger-line hamburger-line-2 block w-6 h-0.5 bg-gray-700 mb-1"></span>
//             <span className="hamburger-line hamburger-line-3 block w-6 h-0.5 bg-gray-700"></span>
//           </button>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-2xl mx-4 mb-4 shadow-xl animate-slide-down">
//             <nav className="py-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-all duration-300 ${
//                     activeSection === item.id
//                       ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white mx-4 rounded-xl'
//                       : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 mx-4 rounded-xl'
//                   }`}
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span className="font-medium">{item.label}</span>
//                 </button>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/activities', label: 'Activities' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div >
              <span className="text-white font-bold text-xl">
                <img src="/Images/logo.png" alt="Logo" 

            className="w-12 h-12 rounded shadow-lg transform hover:scale-110 transition-transform duration-300"
           />
              </span>
            </div>
            <div>
              <h1 className="text-2xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-0 animate-fade-in-up py-1">AMBICA FOUNDATION</h1>
              <p className="text-sm text-gray-600">Serving Since 2009</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive(path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6">
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'mb-1'}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;