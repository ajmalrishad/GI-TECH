import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFax,
  FaMobileAlt,
} from "react-icons/fa";
import LogoWhite from "../../assets/GiTechlogo-white.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products & Drives", path: "/#products" },
  { name: "KEB & Lenze Applications", path: "/#applications" },
  { name: "Industry Solutions", path: "/#industries" },
  { name: "Engineering Services", path: "/service" },
  { name: "Project Portfolio", path: "/projects" },
  { name: "About GI. Tech", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const brandLinks = [
  { name: "Invertek Drives (VFDs)", path: "/#products" },
  { name: "KEB Automation Systems", path: "/#products" },
  { name: "Aucom Soft Starters", path: "/#products" },
  { name: "Kendrion Intorq Brakes", path: "/#products" },
  { name: "VOGEL Precision Gearboxes", path: "/#products" },
  { name: "Solartech Pumping Systems", path: "/#products" },
];

const industries = [
  { name: "FAN & Industrial Ventilation", path: "/#applications" },
  { name: "Pumps & Wastewater Treatment", path: "/#applications" },
  { name: "Conveying & Warehouse AS/RS", path: "/#applications" },
  { name: "Manufacturing & Robotics", path: "/#applications" },
  { name: "Lift & Escalator Systems", path: "/#applications" },
  { name: "Building Management (BMS)", path: "/automation" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Company Bio & Registered Office Details */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block group">
              <img src={LogoWhite} alt="GI Tech" className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>GI. Tech FZE</strong> is your authorized engineering partner for
              industrial automation, variable frequency drives, soft starters, precision
              gearboxes, and solar pumping solutions across the UAE and Middle East.
            </p>

            {/* Address & Direct Contact Box */}
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" size={15} />
                <span className="leading-snug">
                  <strong>GI. Tech FZE</strong>, Q4-158, Sharjah International Airport Freezone,
                  Sharjah, United Arab Emirates
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-primary shrink-0" size={13} />
                  <span>Tel: <a href="tel:+97165573364" className="hover:text-white transition-colors">+971 6 5573364</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFax className="text-primary shrink-0" size={13} />
                  <span>Fax: +971 6 5573365</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <FaMobileAlt className="text-emerald-400 shrink-0" size={14} />
                  <span>Mob: <a href="tel:+971559241038" className="text-emerald-400 font-semibold hover:underline">+971 55 9241038</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-primary shrink-0" size={13} />
                  <a href="mailto:projects@gitek.ae" className="hover:text-white transition-colors truncate">
                    projects@gitek.ae
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
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
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Authorized Brands
            </h4>
            <ul className="space-y-2.5 text-sm">
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

          {/* Applications */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Key Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
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

        {/* SEO Regional Highlights & Target Keyword Breadcrumbs */}
        <div className="mt-12 pt-6 border-t border-slate-900/80 text-[11px] text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-400 mb-1">
            Core UAE Automation & Drive Solutions:
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400">
            <Link to="/#products" className="hover:text-primary transition-colors">VFD UAE</Link>
            <span>•</span>
            <Link to="/#products" className="hover:text-primary transition-colors">Variable Frequency Drives Dubai</Link>
            <span>•</span>
            <Link to="/#products" className="hover:text-primary transition-colors">Frequency Inverters Dubai</Link>
            <span>•</span>
            <Link to="/automation" className="hover:text-primary transition-colors">Automation Solution Dubai</Link>
            <span>•</span>
            <Link to="/service" className="hover:text-primary transition-colors">VFD Repairs Dubai</Link>
            <span>•</span>
            <Link to="/#products" className="hover:text-primary transition-colors">Invertek Drives UAE</Link>
            <span>•</span>
            <Link to="/#products" className="hover:text-primary transition-colors">KEB Motion Controllers</Link>
            <span>•</span>
            <Link to="/service" className="hover:text-primary transition-colors">Control Panel Commissioning</Link>
            <span>•</span>
            <Link to="/#applications" className="hover:text-primary transition-colors">FAN & Ventilation Drives</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GI. Tech FZE. All Rights Reserved. Sharjah, UAE.</p>
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
              SAIF Zone License
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
