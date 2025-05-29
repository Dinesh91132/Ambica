import AboutSection from '../Components/AboutSection';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        {/* <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our journey, mission, and the values that drive our commitment to community service.
          </p>
        </div> */}
      </div>
      <AboutSection />
    </div>
  );
};

export default AboutPage;