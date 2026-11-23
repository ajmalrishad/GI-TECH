import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaWrench, FaBolt, FaArrowRight, FaShieldAlt } from "react-icons/fa";

import serviceImg1 from "../../assets/services/air.png";
import serviceImg2 from "../../assets/services/mobility.png";
import serviceImg3 from "../../assets/services/manufacturing.png";
import serviceImg4 from "../../assets/services/building.png";
import serviceImg5 from "../../assets/services/wastewatertreatment.png";

const services = [
  {
    title: "Harmonic Study and Analysis",
    description:
      "Comprehensive evaluation of electrical power quality, identifying harmonic distortions, and implementing custom passive/active filters to protect sensitive equipment and reduce energy costs.",
    image: serviceImg1,
    tag: "Power Quality",
  },
  {
    title: "VFD Repairs Dubai & Drive Servicing",
    description:
      "Certified 24/7 VFD repairs in Dubai, Sharjah, and UAE. Component-level diagnostics, IGBT module replacement, gate driver testing, capacitor refurbishment, and dynamic full-load testing of Variable Frequency Drives (VFDs) and AC frequency inverters.",
    image: serviceImg2,
    tag: "VFD Repairs Dubai",
  },
  {
    title: "Commissioning of Control Panels",
    description:
      "On-site installation, field cabling, loop verification, parameter tuning, and startup support for industrial automation control panels, ensuring safe and optimal performance.",
    image: serviceImg3,
    tag: "On-Site Startup",
  },
  {
    title: "PLC and Control Panel Troubleshooting",
    description:
      "Swift diagnostic services, network trace, and ladder code troubleshooting for PLC systems, field sensors, and panels to minimize equipment downtime and restore production.",
    image: serviceImg4,
    tag: "Emergency Support",
  },
  {
    title: "Earth Leakage Test / Meggering of Motor",
    description:
      "Complete insulation resistance diagnostics and earth leakage testing to identify motor winding degradation, moisture ingress, and prevent catastrophic electrical failures.",
    image: serviceImg5,
    tag: "Preventive Testing",
  },
];

const TechnicalServices = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
            Engineering Lifecycle & VFD Repairs Dubai • UAE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Technical Services & VFD Repairs in Dubai
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
          <p className="text-center text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            GI Tech provides certified engineering support, harmonic power analysis, control panel
            commissioning, and fast-response VFD repairs across Dubai, Sharjah, and all UAE emirates.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-slate-100 flex items-center justify-center p-6 border-b border-slate-100">
                  <span className="absolute top-3 left-3 text-[11px] font-bold text-primary bg-white/95 px-2.5 py-1 rounded-md border border-slate-200">
                    {service.tag}
                  </span>
                  <img loading="lazy" decoding="async"
                    src={service.image}
                    alt={service.title}
                    className="max-h-36 w-auto object-contain"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-justify text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-primary bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <span>Book Service / Consultation</span>
                  <FaArrowRight size={11} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SLA Guarantee Box */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Guaranteed Response Times
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Emergency Breakdown Support Available
            </h3>
            <p className="text-justify text-xs sm:text-sm text-slate-400 max-w-xl">
              Our service engineers are equipped with calibrated test equipment
              and loaner drives to minimize unplanned production interruptions.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-primary hover:bg-primaryHover text-white text-xs sm:text-sm font-semibold rounded-lg shrink-0 shadow-sm"
          >
            Contact Engineering Desk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechnicalServices;
