import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Logo from "../../assets/gitechlogo1.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products & Drives", path: "/#products" },
  { name: "Industry Solutions", path: "/#industries" },
  { name: "Engineering Services", path: "/service" },
  { name: "Project Portfolio", path: "/projects" },
  { name: "About GiTech", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const brandLinks = [
  { name: "Invertek Drives (VFDs)", path: "/#products" },
  { name: "Aucom Soft Starters", path: "/#products" },
  { name: "KEB Motion Control", path: "/#products" },
  { name: "Kendrion Intorq Brakes", path: "/#products" },
  { name: "Vogel Lubrication Systems", path: "/#products" },
];

const industries = [
  { name: "Manufacturing & Process", path: "/automation" },
  { name: "Building Management (BMS)", path: "/automation" },
  { name: "Water & Wastewater Plants", path: "/automation" },
  { name: "HVAC Energy Optimization", path: "/automation" },
  { name: "Material Handling & Logistics", path: "/automation" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white/95 p-2 rounded-lg">
              <img src={Logo} alt="GiTech" className="h-9 w-auto" />
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              GiTech is your trusted partner in Industrial and Building
              Automation. We deliver precision-engineered solutions backed by
              global brands and expert support.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <FaMapMarkerAlt className="text-primary shrink-0" />
                <span>Industrial Area 1, Tech Park Avenue</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-primary shrink-0" />
                <span>+91 98765 43210 / +1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-primary shrink-0" />
                <span>sales@gitechautomation.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Our Brands
            </h4>
            <ul className="space-y-2 text-xs">
              {brandLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              {industries.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GiTech Automation. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              ISO 9001 Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
