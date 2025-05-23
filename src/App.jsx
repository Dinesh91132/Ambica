import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Sports from './Pages/Sports';
import Ambulanceservices from './Pages/Ambulanceservices';
import Medicalcamps from './Pages/Medicalcamps';
import Table from './Pages/Table';
import './App.css';

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/'; // Only show Hero on Home page

  return (
    <div>
      <Header />
      {isHome && <Hero />} {/* ✅ Show Hero only on Home page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/ambulanceservices" element={<Ambulanceservices />} />
        <Route path="/medicalcamps" element={<Medicalcamps />} />
        <Route path="/table" element={<Table />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
