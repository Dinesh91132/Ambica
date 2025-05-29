// import { useState } from 'react'
// import './App.css'
// import AmbicaFoundation from './Components/AmbicaFoundation'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <AmbicaFoundation />
//     </>
//   )
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/Homepage.jsx';
import ServicesPage from './Pages/Servicespage.jsx';
import ActivitiesPage from './Pages/ActivitiesPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
