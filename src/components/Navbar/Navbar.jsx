import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaCogs,
  FaIndustry,
  FaWrench,
  FaProjectDiagram,
  FaInfoCircle,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../../assets/GiTechlogo1.png";

const menuItems = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Products", path: "section:products", icon: FaCogs },
  { name: "Applications", path: "section:applications", icon: FaIndustry },
  {
    name: "Solutions",
    path: "/automation",
    icon: FaIndustry,
    subItems: [
      { name: "KEB & Lenze Applications", path: "section:applications" },
      { name: "All Industry Solutions", path: "/automation" },
      { name: "Industrial Automation", path: "/automation" },
      { name: "Building Automation (BMS)", path: "/automation" },
      { name: "Water & Wastewater Treatment", path: "/automation" },
      { name: "HVAC & Energy Optimization", path: "/automation" },
    ],
  },
  {
    name: "Services",
    path: "/service",
    icon: FaWrench,
    subItems: [
      { name: "All Technical Services", path: "/service" },
      { name: "Harmonic Study & Analysis", path: "/service" },
      { name: "VFD & Servo Repairing", path: "/service" },
      { name: "Commissioning of Control Panels", path: "/service" },
      { name: "PLC & Control Panel Troubleshooting", path: "/service" },
    ],
  },
  { name: "Projects", path: "/projects", icon: FaProjectDiagram },
  { name: "About Us", path: "/about", icon: FaInfoCircle },
  { name: "Contact", path: "/contact", icon: FaPaperPlane },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (targetId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 250);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (item, e) => {
    e?.preventDefault();

    if (item.path === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      setMobileMenuOpen(false);
      return;
    }

    if (item.path.startsWith("section:")) {
      const targetId = item.path.replace("section:", "");
      scrollToSection(targetId);
      return;
    }

    navigate(item.path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5 sm:py-3"
          : "bg-white/95 backdrop-blur-sm border-b border-slate-100/70 py-3 sm:py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => handleNavClick({ path: "/" }, e)}
              className="flex items-center gap-3 group"
            >
              <img
                src={Logo}
                alt="GI Tech Logo"
                className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform group-hover:scale-105"
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
                    className={`flex items-center gap-1.5 px-3 py-2 text-[15px] font-semibold rounded-md transition-colors cursor-pointer ${location.pathname === item.path
                      ? "text-primary font-bold bg-blue-50/60"
                      : "text-slate-700 hover:text-primary hover:bg-slate-50"
                      }`}
                  >
                    <span>{item.name}</span>
                    {item.subItems && (
                      <FaChevronDown
                        size={11}
                        className={`transition-transform duration-200 ${activeDropdown === idx ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.subItems && activeDropdown === idx && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 z-50">
                      {item.subItems.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          onClick={() => {
                            setActiveDropdown(null);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:text-primary hover:bg-blue-50/60 transition-colors font-medium"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Action Area */}
            <div className="flex items-center gap-2 sm:gap-3.5">
              {/* Cart Icon */}
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="relative p-2.5 text-slate-700 hover:text-primary hover:bg-slate-100 rounded-full transition-colors"
                title="View Inquiry Cart"
              >
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Desktop Request Quote Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center px-8 py-2.5 min-w-[175px] text-sm font-bold text-white bg-primary hover:bg-primaryHover rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-center tracking-wide"
              >
                Request a Quote
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 text-slate-700 hover:text-primary rounded-lg focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div>
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <Link
                  to="/"
                  onClick={(e) => handleNavClick({ path: "/" }, e)}
                  className="flex items-center gap-2"
                >
                  <img src={Logo} alt="GI Tech" className="h-9 sm:h-10 w-auto object-contain" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800 rounded-lg"
                  aria-label="Close menu"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Quick Contact Bar for Mobile Clients */}
              <div className="p-4 bg-blue-50/70 border-b border-blue-100/60 grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href="https://wa.me/971559241038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-emerald-600 text-white font-bold rounded-lg shadow-2xs"
                >
                  <FaWhatsapp size={14} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+97165573364"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-white text-slate-800 font-bold rounded-lg border border-slate-200 shadow-2xs"
                >
                  <FaPhoneAlt size={12} className="text-primary" />
                  <span>+971 6 5573364</span>
                </a>
              </div>

              {/* Nav Links List */}
              <div className="p-3 space-y-1">
                {menuItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isExpanded = mobileExpanded[item.name];
                  const hasSub = !!item.subItems;

                  return (
                    <div key={idx} className="rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors">
                        <button
                          onClick={(e) => {
                            if (hasSub) {
                              toggleMobileSubmenu(item.name);
                            } else {
                              handleNavClick(item, e);
                            }
                          }}
                          className={`flex-1 flex items-center gap-3 py-3 px-3.5 text-sm font-semibold text-left transition-colors cursor-pointer ${location.pathname === item.path
                            ? "text-primary font-bold bg-blue-50/50"
                            : "text-slate-700"
                            }`}
                        >
                          <Icon size={16} className="text-slate-400 shrink-0" />
                          <span>{item.name}</span>
                        </button>

                        {hasSub && (
                          <button
                            onClick={() => toggleMobileSubmenu(item.name)}
                            className="p-3 text-slate-400 hover:text-slate-700"
                            aria-label={`Toggle ${item.name} submenu`}
                          >
                            <FaChevronDown
                              size={12}
                              className={`transition-transform duration-200 ${isExpanded ? "rotate-180 text-primary" : ""
                                }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Sub-items list */}
                      {hasSub && isExpanded && (
                        <div className="pl-10 pr-3 py-2 space-y-1 bg-slate-50/80 rounded-xl my-1 border-l-2 border-primary/40">
                          {item.subItems.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              to={sub.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="block py-2 text-xs font-semibold text-slate-600 hover:text-primary active:text-primary"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/60 space-y-3">
              <Link
                to="/contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primaryHover text-white font-bold text-sm rounded-xl shadow-md text-center"
              >
                <FaPaperPlane size={13} />
                <span>Request a Free Quote</span>
              </Link>
              <div className="text-center text-[11px] text-slate-400">
                24/7 Breakdown & Field Engineering Support
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
