import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Logo from "../../assets/gitechlogo1.jpg";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "Projects",
    link: "/projects",
    subItems: ["Motor Control Centers", "HVAC Panels", "Sewage Treatment Plants"],
  },
  { id: 6, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");
  const [navTextColor, setNavTextColor] = useState("white");
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavBackground("#ffffff");
      setNavTextColor("#333");
    } else {
      setNavBackground("transparent");
      setNavTextColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        boxShadow: window.scrollY > 100 ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          height: "80px",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src={Logo} alt="Logo" style={{ width: "150px" }} />
        </a>

        {/* Desktop Menu */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {Menu.map((menu) => (
            <div
              key={menu.id}
              style={{ position: "relative" }}
              onMouseEnter={() => setSelectedMenu(menu.id)}
              onMouseLeave={() => setSelectedMenu(null)}
            >
              <a
                href={menu.link}
                style={{
                  textDecoration: "none",
                  color: navTextColor,
                  fontWeight: "500",
                  fontSize: "16px",
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                {menu.name}
                {menu.subItems && <FaChevronDown style={{ fontSize: "12px" }} />}
              </a>

              {/* Centered Dropdown Menu */}
              {menu.subItems && selectedMenu === menu.id && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      right:"10%",
                      minWidth: "500px",
                      maxWidth: "90vw", // Prevent overflow
                      backgroundColor: "white",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      padding: "20px 30px", // Padding around the content
                      borderRadius: "10px",
                      zIndex: 1000,
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                      gap: "25px", // Space between items
                      textAlign: "left",
                    }}
                  >
                    {menu.subItems.map((subItem, index) => (
                      <a
                        key={index}
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "#555",
                          fontSize: "14px",
                          fontWeight: "500",
                          transition: "color 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#007bff")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "#555")}
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
