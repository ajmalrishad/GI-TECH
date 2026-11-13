import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Service from "./Pages/Service/Services";
import Banner from "./components/Banner/Banner";
import Testimonials from "./components/Testimonials/Testimonials";
import GlobalPartners from "./components/Partners/Globalpartners";
import ContactUs from "./components/contact/ContactUs";
import AboutUs from "./Pages/About/AboutUs";
import PartnerDetails from "./Pages/partners/PartnerDetails";
import ProjectSection from "./Pages/Project/ProjectSection";
import Portfolio from "./components/portfolio/Portfolio";
import StatsSection from "./components/stats/StatsSection";
import Moto from "./components/Moto/Moto";
import Loader from "./components/Loader/Loader";
import Contact from "./Pages/Contact/ContactUs";
import AutomationServices from "./Pages/Automation/Automation";
import Cart from "./Pages/Cart/Cart";
import ProductSection from "./Pages/Products/Products";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="bg-white text-slate-800 min-h-screen antialiased selection:bg-blue-600 selection:text-white">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
                <StatsSection />
                <GlobalPartners />
                <ProductSection />
                <Services />
                <Banner />
                <Moto />
                <Testimonials />
                <Portfolio />
                <ContactUs />
              </Layout>
            }
          />
          <Route path="/about" element={<Layout><AboutUs /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/service" element={<Layout><Service /></Layout>} />
          <Route path="/projects" element={<Layout><ProjectSection /></Layout>} />
          <Route path="/automation" element={<Layout><AutomationServices /></Layout>} />
          <Route path="/products" element={<Layout><ProductSection /></Layout>} />
          <Route path="/partner" element={<Layout><PartnerDetails /></Layout>} />
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
