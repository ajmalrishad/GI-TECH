import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // ✅ Change to HashRouter
import PropTypes from "prop-types";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Service from "./Pages/Service/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import GlobalPartners from "./components/Partners/Globalpartners.jsx";
import ContactUs from "./components/contact/ContactUs.jsx";
import AboutUs from "./Pages/About/AboutUs.jsx";
import PartnerDetails from "./Pages/partners/PartnerDetails.jsx";
import ProjectSection from "./Pages/Project/ProjectSection.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import StatsSection from "./components/stats/StatsSection.jsx";
import Moto from "./components/Moto/Moto.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Contact from "./Pages/Contact/ContactUs.jsx";
import AutomationServices from "./Pages/Automation/Automation.jsx";

const Layout = ({ children }) => {
  const location = useLocation();
  const routesWithoutNavbar = ["/about", "/projects", "/partner","/service","/contact","/automation"];
  const routesWithoutFooter = ["/contact","/about"];
  const shouldShowNavbar = !routesWithoutNavbar.some(route => location.pathname.startsWith(route));
  const shouldShowFooter = !routesWithoutFooter.some(route => location.pathname.startsWith(route));

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
      {shouldShowFooter && <Footer />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 500, easing: "ease-in", delay: 100 });
    AOS.refresh();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router> {/* ✅ Changed to HashRouter */}
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
                <Services />
                <GlobalPartners />
                <Banner />
                <StatsSection />
                <Moto />
                <Testimonials />
                <Portfolio />
                <ContactUs />
              </Layout>
            }
          />
          <Route path="/about" element={<Layout><AboutUs /></Layout>} />
          <Route path="/contact" element={<Layout><Contact/></Layout>} />
          <Route path="/service" element={<Layout><Service/></Layout>} />
          <Route path="/projects" element={<Layout><ProjectSection /></Layout>} />
          <Route path="/automation" element={<Layout><AutomationServices/></Layout>} />
          <Route path="/partner" element={<Layout><PartnerDetails /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
