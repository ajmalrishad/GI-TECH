import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // If navigating to a route without an anchor hash, scroll to top
    if (!window.location.hash.includes("#products") && 
        !window.location.hash.includes("#industries") && 
        !window.location.hash.includes("#contact") && 
        !window.location.hash.includes("#who-we-are") &&
        !window.location.hash.includes("#brands")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

