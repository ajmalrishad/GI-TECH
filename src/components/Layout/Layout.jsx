import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Subnavbar from "../Navbar/Subnavbar";  // Adjusted for correct import
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarOnPages = ["/login", "/register"];
  const shouldShowNavbar = !hideNavbarOnPages.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {shouldShowNavbar && <Subnavbar />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
