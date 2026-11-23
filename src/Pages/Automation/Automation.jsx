import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaIndustry,
  FaBuilding,
  FaWater,
  FaMicrochip,
  FaNetworkWired,
  FaBroadcastTower,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

// The 3 primary Industry Solutions from user prompt
const coreIndustrySolutions = [
  {
    title: "Industrial Automation",
    description:
      "From motor control to process optimization, GI Tech delivers scalable automation systems tailored to your plant’s needs.",
    icon: FaIndustry,
    badge: "Plant & Process",
    highlights: [
      "Custom PLC logic & HMI interfaces",
      "VFD speed & torque optimization",
      "Assembly line synchronized control",
      "Predictive telemetry & sensor feedback",
    ],
  },
  {
    title: "Building Automation",
    description:
      "Smart solutions for HVAC, lighting, access control, and energy management—integrated for seamless building operations.",
    icon: FaBuilding,
    badge: "Smart Facilities",
    highlights: [
      "Centralized BMS building supervisory",
      "Chiller plant & VAV airflow control",
      "Smart lighting schedule & daylight harvesting",
      "Access control & security integration",
    ],
  },
  {
    title: "Water & Wastewater",
    description:
      "Robust automation for pumping stations, filtration systems, and treatment plants with real-time monitoring and control.",
    icon: FaWater,
    badge: "Municipal & Utility",
    highlights: [
      "Multipump cascade sequencing",
      "Effluent treatment aeration loops",
      "Remote GSM/Cellular telemetry",
      "Automated chemical dosing & flow metering",
    ],
  },
];

const specializedSolutions = [
  {
    title: "Industrial Automation Panels",
    icon: FaMicrochip,
    description:
      "Custom-engineered control panels, Motor Control Centers (MCC), and VFD enclosures built to international safety standards.",
  },
  {
    title: "SCADA Architecture",
    icon: FaNetworkWired,
    description:
      "Real-time graphical supervision, data logging, alarm routing, and trend analytics across plant-wide industrial networks.",
  },
  {
    title: "PLC Programming & Commissioning",
    icon: FaMicrochip,
    description:
      "Turnkey ladder and structured text programming for major industrial PLC & PAC architectures, ensuring seamless VFD & drive integration.",
  },
  {
    title: "Telemetry & Remote Monitoring",
    icon: FaBroadcastTower,
    description:
      "Secure cellular and satellite telemetry ensuring real-time diagnostics and alarm alerts for unmanned remote pumping stations.",
  },
];

const AutomationServices = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
            Turnkey Systems Architecture • UAE & Dubai
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Automation Solutions in Dubai & UAE
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
          <p className="text-center text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            GI Tech provides premier industrial and building automation solutions in Dubai,
            integrating VFDs, frequency inverters, PLC systems, SCADA, and smart BMS architectures across the UAE.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* The 3 Core Industry Solutions */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Engineered Industry Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreIndustrySolutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl p-8 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-blue-50 text-primary rounded-xl">
                        <Icon size={24} />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                        {sol.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {sol.title}
                    </h3>

                    <p className="text-justify text-sm text-slate-600 leading-relaxed font-normal">
                      {sol.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-justify text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        System Highlights:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {sol.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheck className="text-primary mt-0.5 shrink-0" size={11} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-primary bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <span>Inquire About This Solution</span>
                      <FaArrowRight size={11} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Specialized Technologies Grid */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Specialized Automation Modules
            </h3>
            <p className="text-justify text-xs sm:text-sm text-slate-600 mt-2">
              Modular hardware and software building blocks integrated into your
              facility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3"
                >
                  <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl w-fit">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-justify text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationServices;
