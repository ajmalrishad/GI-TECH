import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaIndustry, FaBuilding, FaWater, FaFan, FaTruckLoading, FaSolarPanel, FaArrowRight } from "react-icons/fa";

import service1 from "../../assets/manufacturing.png";
import service2 from "../../assets/building.png";
import service3 from "../../assets/wastewatertreatment.png";
import service4 from "../../assets/air.png";
import service5 from "../../assets/wholesale.png";
import service6 from "../../assets/mobility.png";

// The 3 highlighted flagship Industry Solutions from user prompt
const featuredSolutions = [
  {
    title: "Industrial Automation",
    description:
      "From motor control to process optimization, GiTech delivers scalable automation systems tailored to your plant’s needs.",
    icon: FaIndustry,
    badge: "Process & Factory",
    link: "/automation",
  },
  {
    title: "Building Automation",
    description:
      "Smart solutions for HVAC, lighting, access control, and energy management—integrated for seamless building operations.",
    icon: FaBuilding,
    badge: "BMS & Smart Facilities",
    link: "/automation",
  },
  {
    title: "Water & Wastewater",
    description:
      "Robust automation for pumping stations, filtration systems, and treatment plants with real-time monitoring and control.",
    icon: FaWater,
    badge: "Pumping & Treatment",
    link: "/automation",
  },
];

// All 6 Industries We Serve from user prompt
const industriesData = [
  {
    id: 1,
    img: service1,
    icon: FaIndustry,
    name: "Manufacturing & Process Automation",
    description:
      "Design, supply, and commissioning of PLC/SCADA systems, drives, motor controls, and instrumentation for streamlined throughput and zero unplanned downtime.",
  },
  {
    id: 2,
    img: service2,
    icon: FaBuilding,
    name: "Building Management Systems (BMS)",
    description:
      "Integrated BMS for HVAC, lighting, access, and facility energy monitoring—unifying comfort, life safety, and automated power efficiency.",
  },
  {
    id: 3,
    img: service3,
    icon: FaWater,
    name: "Water & Wastewater Treatment",
    description:
      "SCADA networks, telemetry, and motor control solutions for municipal water, pumping stations, and industrial effluent plants.",
  },
  {
    id: 4,
    img: service4,
    icon: FaFan,
    name: "HVAC & Energy Optimization",
    description:
      "High-efficiency VFD drive systems and precision chillers/fan controls to reduce kWh consumption and maintain ambient building comfort.",
  },
  {
    id: 5,
    img: service5,
    icon: FaTruckLoading,
    name: "Material Handling & Logistics",
    description:
      "Intelligent control panels and drives for automated conveyors, high-speed sorting, palletizers, and automated guided vehicles (AGVs).",
  },
  {
    id: 6,
    img: service6,
    icon: FaSolarPanel,
    name: "Renewable Energy & Infrastructure",
    description:
      "Power electronics, safety braking systems, and SCADA asset monitoring for wind, solar, and hybrid utility-scale infrastructure.",
  },
];

const Services = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-primary mb-2">
            Tailored Industry Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600">
            GiTech delivers end-to-end automation and control architectures across
            demanding industrial, municipal, and commercial sectors.
          </p>
        </div>

        {/* Flagship Industry Solutions - 3 Key Highlights */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Flagship Industry Solutions
            </h3>
            <Link
              to="/automation"
              className="text-xs sm:text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
            >
              Explore all automation solutions <FaArrowRight size={11} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSolutions.map((sol, index) => {
              const IconComp = sol.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-7 rounded-2xl shadow-lg border border-slate-700/60 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-400/20">
                        <IconComp size={24} />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-400/20">
                        {sol.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {sol.title}
                    </h4>

                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {sol.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={sol.link}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                      >
                        Learn more <FaArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 6 Vertical Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-200/90 p-2 flex items-center justify-center shadow-2xs">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Tailored Integration</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
