import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Logo from "../../assets/gitechlogo1.png";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/#products" },
  {
    name: "Solutions",
    path: "/#industries",
    subItems: [
      { name: "Industrial Automation", path: "/automation" },
      { name: "Building Automation (BMS)", path: "/automation" },
      { name: "Water & Wastewater Treatment", path: "/automation" },
      { name: "HVAC & Energy Optimization", path: "/automation" },
    ],
  },
  {
    name: "Services",
    path: "/service",
    subItems: [
      { name: "Harmonic Study & Analysis", path: "/service" },
      { name: "VFD & Servo Repairing", path: "/service" },
      { name: "Commissioning of Control Panels", path: "/service" },
      { name: "PLC & Control Panel Troubleshooting", path: "/service" },
    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Update cart count
  const updateCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(total);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (item, e) => {
    if (item.path.startsWith("/#")) {
      e.preventDefault();
      const targetId = item.path.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    } else {
      navigate(item.path);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={Logo}
              alt="GiTech Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => handleNavClick(item, e)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "text-primary font-semibold"
                      : "text-slate-700 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                  {item.subItems && (
                    <FaChevronDown
                      size={10}
                      className={`transition-transform duration-200 ${
                        activeDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === idx && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 transition-all duration-200 z-50">
                    {item.subItems.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        to={sub.path}
                        className="block px-4 py-2 text-xs sm:text-sm text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Area: Cart & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/cart"
              className="relative p-2.5 text-slate-700 hover:text-primary hover:bg-slate-100 rounded-full transition-colors"
              title="View Cart"
            >
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primaryHover rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              Request a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-primary rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item, idx) => (
                <div key={idx} className="border-b border-slate-50 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      className="w-full text-left py-2.5 px-3 text-sm font-medium text-slate-700 hover:text-primary"
                    >
                      {item.name}
                    </button>
                    {item.subItems && (
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === idx ? null : idx)
                        }
                        className="px-3 py-2 text-slate-400 hover:text-slate-600"
                      >
                        <FaChevronDown
                          size={12}
                          className={`transition-transform ${
                            activeDropdown === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.subItems && activeDropdown === idx && (
                    <div className="pl-5 pb-2 space-y-1 bg-slate-50/70 rounded-lg my-1">
                      {item.subItems.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-xs font-medium text-slate-600 hover:text-primary"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primaryHover rounded-lg text-center shadow-sm"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
