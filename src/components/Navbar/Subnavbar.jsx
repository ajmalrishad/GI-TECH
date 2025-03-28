import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../../assets/gitechlogo1.jpg";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  {
    id: 2,
    name: "Automation",
    link: "/automation",
    subItems: [
      "Industrial Automation Panels",
      "SCADA",
      "PLC Programming",
      "Telemetry and Remote Monitoring",
      "IoT",
      "Home Automation",
    ],
  },
  {
    id: 3,
    name: "Service",
    link: "/service",
    subItems: [
      "Commissioning of Control Panels",
      "VFD and Servo Drives Repairing",
      "PLC and Control Panel Troubleshooting",
      "Earth Leakage Test/Meggering of Motor",
      "Harmonic Study and Analysis",
    ],
  },
  {
    id: 4,
    name: "Projects",
    link: "/projects",
    subItems: ["Motor Control Centers", "HVAC Panels", "Sewage Treatment Plants"],
  },
  { id: 5, name: "Contact", link: "/contact" },
  { id: 6, name: "About", link: "/about" },
];

const Subnavbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [cartItems, setCartItems] = useState(); // Example: 3 items in cart
  const navigate = useNavigate(); // Navigation function

  const handleMouseEnter = (id) => {
    setSelectedMenu(id);
  };

  const handleMouseLeave = () => {
    setSelectedMenu(null);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1366px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          height: "80px",
        }}
      >
        {/* Logo Section */}
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Logo" style={{ width: "150px" }} />
        </a>

        {/* Menu Section */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {Menu.map((menu) => (
            <div
              key={menu.id}
              onMouseEnter={() => handleMouseEnter(menu.id)}
              onMouseLeave={handleMouseLeave}
              style={{ position: "relative" }}
            >
              <a
                href={menu.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "10px 15px",
                  display: "block",
                }}
              >
                {menu.name}
              </a>
              {menu.subItems && selectedMenu === menu.id && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      padding: "15px 20px",
                      zIndex: 1000,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "15px",
                      justifyContent: "center",
                      width: "80vw",
                      maxWidth: "600px",
                      textAlign: "center",
                    }}
                  >
                    {menu.subItems.map((subItem, index) => (
                      <a
                        key={index}
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "#333",
                          fontSize: "14px",
                          fontWeight: "500",
                          padding: "5px 10px",
                          transition: "color 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#007bff")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}

          {/* Cart Icon */}
          <div className="cart-icon" style={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/cart")}>
            <FaShoppingCart size={24} color="black" />
            {cartItems > 0 && (
              <span
                style={{
                  background: "red",
                  color: "white",
                  fontSize: "12px",
                  padding: "2px 6px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                }}
              >
                {cartItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
