import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import GlobalPartners from "./components/Partners/Globalpartners";
import StatsSection from "./components/stats/StatsSection";
import ProductSection from "./Pages/Products/Products";
import ApplicationsSection from "./components/Applications/ApplicationsSection";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Moto from "./components/Moto/Moto";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import SEOFAQSection from "./components/FAQ/SEOFAQSection";
import ContactUs from "./components/contact/ContactUs";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Loader from "./components/Loader/Loader";

// Code-split secondary routes for rapid initial page load
const AboutUs = lazy(() => import("./Pages/About/AboutUs"));
const Contact = lazy(() => import("./Pages/Contact/ContactUs"));
const Service = lazy(() => import("./Pages/Service/Services"));
const ProjectSection = lazy(() => import("./Pages/Project/ProjectSection"));
const AutomationServices = lazy(() => import("./Pages/Automation/Automation"));
const PartnerDetails = lazy(() => import("./Pages/partners/PartnerDetails"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white text-slate-800 min-h-screen antialiased selection:bg-blue-600 selection:text-white">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Hero />
                  <GlobalPartners />
                  <StatsSection />
                  <ProductSection />
                  <ApplicationsSection />
                  <Services />
                  <Banner />
                  <Moto />
                  <Portfolio />
                  <Testimonials />
                  <SEOFAQSection />
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
            <Route path="/applications" element={<Layout><ApplicationsSection /></Layout>} />
            <Route path="/partner" element={<Layout><PartnerDetails /></Layout>} />
            <Route path="/cart" element={<Layout><Cart /></Layout>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
