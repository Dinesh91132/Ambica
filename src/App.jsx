
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop'; 
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/Homepage.jsx';
import ServicesPage from './Pages/Servicespage.jsx';
import ActivitiesPage from './Pages/ActivitiesPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import EmploymentPage from './Pages/EmploymentPage.jsx';
import MedicalAid from './Pages/MedicalAid.jsx';
import EducationPage from './Pages/EducationPage.jsx';
import AmbulancePage from './Pages/AmbulancePage.jsx';
import Rural from './Pages/Rural.jsx';
import Womenpage from './Pages/Womenpage.jsx';
import SportsPage from './Pages/SportsPage.jsx';
import DisasterPage from './Pages/DisasterPage.jsx';
import BloodDonation from './Pages/BloodDonation.jsx';
import CricketPage from './Pages/CricketPage.jsx';
import Medicine from './Pages/Medicine.jsx';
import Plantation from './Pages/Planation.jsx';
import WaterSupply from './Pages/WaterSupply.jsx';
import Hospital from './Pages/Hospital.jsx';
import OtherServices from './Pages/OtherServices.jsx';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Employment" element={<EmploymentPage />} />
        <Route path="/MedicalAid" element={<MedicalAid />} />
        <Route path="/Education" element={<EducationPage />} />
        <Route path="/Ambulance" element={<AmbulancePage />} />
        <Route path="/Rural" element={<Rural />} />
        <Route path="/Womenpage" element={<Womenpage />} />
        <Route path="/SportsPage" element={<SportsPage />} />
        <Route path="/DisasterPage" element={<DisasterPage />} />
        <Route path="/BloodDonation" element={<BloodDonation />} />
        <Route path="/CricketPage" element={<CricketPage />} />
        <Route path="/Medicine" element={<Medicine />} />
        <Route path="/Planation" element={<Plantation />} />
        <Route path="/WaterSupply" element={<WaterSupply />} />
        <Route path="/Hospital" element={<Hospital />} />
        <Route path="/OtherServices" element={<OtherServices />} />
  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
