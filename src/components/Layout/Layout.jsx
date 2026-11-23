import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WhatsAppSticky from "../WhatsAppChat/WhatsAppSticky";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarOnPages = ["/login", "/register"];
  const shouldShowNavbar = !hideNavbarOnPages.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {shouldShowNavbar && <Navbar />}
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
};

export default Layout;
