
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import './App.css'; // Import your CSS file here



import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import './App.css'
import Ambulanceservices from './Pages/Ambulanceservices'
import Medicalcamps from './Pages/Medicalcamps'
const App = () => {
  return (
    <div>
      
      <Header />
      <Hero />
     <Contact/>
     <Medicalcamps/>
     <Ambulanceservices/>
      <Footer />
    </div>
  );
};


export default App
