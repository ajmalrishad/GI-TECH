import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/gitechlogo1.png";
import "./subnavbar.css";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  {
    id: 2,
    name: "Products",
    link: "/products",
    subItems: [
      "products",
    ],
  },
  {
    id: 3,
    name: "Automation",
    link: "/automation",
    subItems: [
      "IoT",
      "SCADA",
      "Home Automation",
      "PLC Programming",
      "Industrial Automation Panels",
      "Telemetry and Remote Monitoring",
    ],
  },
  {
    id: 4,
    name: "Service",
    link: "/service",
    subItems: [
      "Harmonic Study and Analysis",
      "VFD and Servo Drives Repairing",
      "Commissioning of Control Panels",
      "PLC and Control Panel Troubleshooting",
      "Earth Leakage Test/Meggering of Motor",
    ],
  },
  {
    id: 5,
    name: "Projects",
    link: "/projects",
    subItems: [ "HVAC Panels", "Motor Control Centers", "Sewage Treatment Plants" ],
  },
  { id: 6, name: "Contact", link: "/contact" },
  { id: 7, name: "About", link: "/about" },
];

const Subnavbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems] = useState(0);
  const navigate = useNavigate();

  const handleMenuClick = (id) => {
    if (selectedMenu === id) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(id);
    }
  };

  return (
    <div className="subnavbar">
      <div className="subnavbar-container">
        {/* Logo */}
        <a href="/" className="subnavbar-logo">
          <img src={Logo} alt="Logo" />
        </a>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </div>

        {/* Menu */}
        <div className={`subnavbar-menu ${menuOpen ? "active" : ""}`}>
          {Menu.map((menu) => (
            <div
              key={menu.id}
              className="menu-item"
              onMouseEnter={() => !menuOpen && setSelectedMenu(menu.id)}
              onMouseLeave={() => !menuOpen && setSelectedMenu(null)}
            >
              <div
                className="menu-link"
                onClick={() => menu.subItems && menuOpen && handleMenuClick(menu.id)}
              >
                <a href={menu.link}>{menu.name}</a>
                {menu.subItems && <IoIosArrowDown className={`arrow ${selectedMenu === menu.id ? "open" : ""}`} />}
              </div>

              {menu.subItems && selectedMenu === menu.id && (
                <AnimatePresence>
                  <motion.div
                    className="subnavbar-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {menu.subItems.map((subItem, index) => (
                      <a key={index} href="#">
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}

          {/* Cart Icon */}
          <div className="cart-icon" onClick={() => navigate("/cart")}>
            <FaShoppingCart size={24} />
            {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
