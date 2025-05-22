import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import './App.css'; // Import your CSS file here


const App = () => {
  return (
    <div>
      
      <Header />
      <Hero />
      {/* Add your main content here if needed */}
      <Footer />
    </div>
  );
};

export default App;
