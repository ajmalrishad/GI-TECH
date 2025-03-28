import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/gitechlogo1.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [navBackground, setNavBackground] = useState("white"); // ✅ Default to white
  const [navTextColor, setNavTextColor] = useState("#333"); // ✅ Default text color

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // ✅ Change color as soon as user scrolls
        setNavBackground("#ffffff");
        setNavTextColor("#333");
      } else {
        setNavBackground("white"); // ✅ Keeps navbar white at top
        setNavTextColor("#333");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: navBackground,
        transition: "background-color 0.3s ease",
        boxShadow: window.scrollY > 0 ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          height: "80px",
        }}
      >

        {/* Cart Icon */}
        <div className="cart-icon" style={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/cart")}>
          <FaShoppingCart size={22} color={navTextColor} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
