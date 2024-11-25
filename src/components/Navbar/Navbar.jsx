import { useState, useEffect } from "react";
import Logo from "../../assets/gitechlogo1.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  {
    id: 2, name: "Automation", link: "/automation", subItems: [
      "Industrial automation Panels",
      "SCADA",
      "PLC programming",
      "Telemetry and Remote Monitoring",
      "IoT",
      "Home Automation"
    ]
  },
  {
    id: 3, name: "Service", link: "/service", subItems: [
      "Commissioning of Control panels",
      "VFD and servo drives repairing",
      "PLC and Control Panel troubleshooting",
      "Earth Leakage Test/Meggering of motor",
      "Harmonic Study and Analysis"
    ]
  },
  {
    id: 4, name: "Projects", link: "/projects", subItems: [
      "Motor control centers",
      "HVAC Panels",
      "Sewage treatment Plants"
    ]
  },
  { id: 5, name: "Contact", link: "/contact" },
  { id: 6, name: "About", link: "/about" }
];

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("rgba(255, 255, 255, 0.2)");
  const [navTextColor, setNavTextColor] = useState("white");
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.9) {
      setNavBackground("rgba(253, 253, 255, 0.95)");
      setNavTextColor("black");
    } else {
      setNavBackground("transparent");
      setNavTextColor("white");
    }
  };

  const handleMouseEnter = (id) => {
    setSelectedMenu(id);
  };

  const handleMouseLeave = () => {
    setSelectedMenu(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: "100px",
        backgroundColor: navBackground,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1366px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {/* Logo section */}
        <div data-aos="fade-down" data-aos-once="true">
          <a
            href="/"
            style={{
              fontWeight: "bold",
              fontSize: "2xl",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: navTextColor,
            }}
          >
            <img src={Logo} alt="Logo" style={{ width: "180px", height: "auto" }} />
          </a>
        </div>

        {/* Link section */}
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          style={{
            display: "flex",
            gap: "20px",
            position: "relative"
          }}
        >
          {Menu.map((menu) => (
            <div
              key={menu.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={() => handleMouseEnter(menu.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={menu.link}
                style={{
                  textDecoration: "none",
                  color: navTextColor,  // This will dynamically change based on scroll
                  fontWeight: "bold",
                  fontSize: "20px",  // Increased font size
                  padding: "10px 20px",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "color 0.3s ease",
                  position: "relative",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "blue";  // Set to blue on hover
                  e.currentTarget.querySelector(".loader").style.width = "100%";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = navTextColor;  // Revert to the dynamic color (black or white)
                  e.currentTarget.querySelector(".loader").style.width = "0";
                }}
              >
                {menu.name}
                <div
                  className="loader"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    width: "0",
                    backgroundColor: "blue",
                    transition: "width 0.3s ease",
                  }}
                ></div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
              {Menu.filter(menu => menu.id === selectedMenu && menu.subItems).map(menu => (
                <div key={menu.id} style={{ padding: "10px 20px" }}>
                  <h5 style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>{menu.name}</h5>
                  {menu.subItems.map((subItem, index) => (
                    <a
                      key={index}
                      href="#"
                      style={{
                        display: "block",
                        padding: "5px 0",
                        color: "black",
                        textDecoration: "none",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)")}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
