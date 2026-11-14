import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChargingStation,
  FaAngleDoubleUp,
  FaTruckLoading,
  FaHeartbeat,
  FaBoxOpen,
  FaCubes,
  FaRecycle,
  FaRobot,
  FaWind,
  FaCogs,
  FaFan,
  FaWater,
  FaBoxes,
  FaSnowflake,
  FaWarehouse,
  FaWhatsapp,
  FaCheck,
  FaTimes,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa";

const WHATSAPP_PHONE = "971559241038";

export const applicationsData = [
  // --- KEB Automation Applications (Displayed First) ---
  {
    id: "e-mobility",
    name: "E-Mobility Commercial Drives",
    category: "energy",
    icon: FaChargingStation,
    tagline: "Electric Commercial Vehicles, Utility Trucks & Auxiliary Drives",
    summary:
      "Automotive-grade mobile drive inverters (T6 APM) engineered for battery electric and hybrid commercial vehicles, utility municipal trucks, and marine vessels.",
    driveFeatures: [
      "IP6K9K waterproof liquid-cooled mobile inverter architecture",
      "Multi-inverter core: up to 6 motor drives in a single enclosure",
      "High DC link voltage range (200V - 850V DC)",
      "J1939 CAN communication with vehicle control units (VCU)",
    ],
    recommendedHardware: "KEB T6 APM Mobile Inverter System",
    typicalSectors: "Electric municipal sweepers, e-buses, construction machinery, hybrid port tugs",
  },
  {
    id: "lift",
    name: "Lift & Elevator Systems",
    category: "machinery",
    icon: FaAngleDoubleUp,
    tagline: "High-Rise Passenger Lifts, Freight Elevators & Escalators",
    summary:
      "Dedicated elevator drive inverters delivering supreme ride quality, direct-to-floor leveling without creep speed, and whisper-quiet brake control.",
    driveFeatures: [
      "Direct-to-floor landing algorithm minimizing travel cycle times",
      "Compatible with synchronous gearless PM & asynchronous geared motors",
      "Emergency rescue operation with UPS single-phase battery power",
      "Certified SIL3 / PLe Safe Torque Off (STO) and brake monitoring",
    ],
    recommendedHardware: "KEB COMBIVERT F6 Lift / Kendrion Dual-Circuit Elevator Brakes",
    typicalSectors: "Commercial skyscrapers, residential towers, hospital stretchers, heavy cargo hoists",
  },
  {
    id: "material-handling",
    name: "Material Handling & Heavy Cranes",
    category: "logistics",
    icon: FaTruckLoading,
    tagline: "Gantry Cranes, Container Winches & Overhead Factory Hoists",
    summary:
      "Heavy-duty hoisting controllers with closed-loop torque proving, mechanical brake coordination, and load-dependent field weakening for high hook speeds.",
    driveFeatures: [
      "Torque proving before mechanical brake release (zero slip)",
      "Regenerative feed unit returning hoist potential energy to line",
      "Anti-sway crane gantry travel control algorithms",
      "Wide ambient temperature tolerance (-20°C to +55°C)",
    ],
    recommendedHardware: "KEB COMBIVERT F6 / Kendrion Spring-Applied Brakes",
    typicalSectors: "Sea container ports, steel fabrication yards, shipyard dry docks, power plant turbine halls",
  },
  {
    id: "medical",
    name: "Medical Technology",
    category: "energy",
    icon: FaHeartbeat,
    tagline: "Diagnostic Imaging (CT / MRI), Surgical Tables & Centrifuges",
    summary:
      "Precision motion control systems providing near-zero acoustic vibration, micro-radian positioning, and compliance with stringent medical electrical standards.",
    driveFeatures: [
      "Ultra-smooth rotational velocity for artifact-free CT scanning",
      "Low EMI emissions complying with clinical healthcare standards",
      "Emergency safety manual override and redundant locking brakes",
      "Decentralized low-voltage servo drives for patient tables",
    ],
    recommendedHardware: "KEB Dynamic Synchronous Servo Motors / VOGEL Servo Gearboxes",
    typicalSectors: "Hospital imaging suites, laboratory automation, radiotherapy gantries, dialysis skids",
  },
  {
    id: "pack-food",
    name: "Pack & Food Machinery",
    category: "machinery",
    icon: FaBoxOpen,
    tagline: "High-Speed Form-Fill-Seal, Rotary Bottling & Flow Wrappers",
    summary:
      "High-dynamic motion control with electronic cams, flying shears, and synchronized multi-axis servo coordination for food and beverage packaging.",
    driveFeatures: [
      "Microsecond EtherCAT fieldbus synchronization",
      "Hygienic washdown motors with food-grade lubricants",
      "Dynamic print-mark registration correction on continuous web",
      "Integrated packaging software templates for blister packs and cartoners",
    ],
    recommendedHardware: "KEB COMBIVERT S6 / VOGEL Spiral Bevel Gearboxes",
    typicalSectors: "Dairy processing, snack food wrapping, pharmaceutical cartoners, beverage bottling lines",
  },
  {
    id: "plastics",
    name: "Plastics Machinery",
    category: "machinery",
    icon: FaCubes,
    tagline: "Servo-Hydraulic Injection Moulding & Precision Extruders",
    summary:
      "High-overload drive packages for servo-pump hydraulic injection moulding machines, blow-moulding units, and continuous twin-screw plastic extruders.",
    driveFeatures: [
      "Ultra-fast P/Q pressure-to-volume control transition (< 10 ms)",
      "High torque overload capacity (200% for heavy screw starts)",
      "Liquid-cooled drive controllers saving cabinet air conditioning",
      "Direct integration with temperature controllers and extruder PLCs",
    ],
    recommendedHardware: "KEB COMBIVERT F6 / VOGEL Precision Reducers",
    typicalSectors: "Automotive plastic molding, PVC pipe extrusion, PET preform production, medical tubing",
  },
  {
    id: "recycling",
    name: "Industrial Recycling",
    category: "machinery",
    icon: FaRecycle,
    tagline: "Heavy Industrial Shredders, Scrap Crushers & Granulators",
    summary:
      "Rugged drive systems designed to withstand extreme torque shocks, automatic unjamming reverse sequences, and continuous heavy metal scrap processing.",
    driveFeatures: [
      "Instantaneous reverse cycle upon rotor jam detection",
      "Heavy-duty cast gearboxes handling shock loads up to 4x rated torque",
      "Vibration-isolated control panel packaging",
      "Power monitoring logging feed rate and blade wear",
    ],
    recommendedHardware: "Aucom EMX4 Soft Starters / KEB High-Torque Geared Motors",
    typicalSectors: "Automotive scrap shredding, municipal waste sorting, tyre granulators, e-waste recycling",
  },
  {
    id: "robotics",
    name: "Robotics & Dynamic Automation",
    category: "machinery",
    icon: FaRobot,
    tagline: "Multi-Axis Articulated Robots, Delta Pickers & Gantry Cranes",
    summary:
      "Multi-axis drive controllers, low-backlash planetary gearboxes, and safety fieldbus for robotic welding, high-speed sorting, and palletizing cells.",
    driveFeatures: [
      "Dual-channel Functional Safety over EtherCAT (FSoE)",
      "Zero-backlash planetary servo gearboxes (< 1 arcmin)",
      "Real-time trajectory interpolation with C6 Industrial PCs",
      "Compact book-format drive footprint saving floor space",
    ],
    recommendedHardware: "KEB C6 Automation / VOGEL MPR Low-Backlash Gearboxes",
    typicalSectors: "Automotive welding lines, electronics pick-and-place, CNC machine loading, carton palletizing",
  },
  {
    id: "turbo-compressors",
    name: "Turbo Compressors & High-Speed Blowers",
    category: "flow",
    icon: FaWind,
    tagline: "High-Frequency Aeration Compressors & Vacuum Exhausters",
    summary:
      "High-frequency variable speed inverters operating high-speed permanent magnet motors up to 100,000+ RPM without step-up gearboxes.",
    driveFeatures: [
      "Output frequency up to 1,200 Hz with low motor harmonic losses",
      "Active magnetic bearing control module integration",
      "Low THDi active front end (AFE) compliant with clean grid mandates",
      "Surge prevention control protecting compressor impellers",
    ],
    recommendedHardware: "KEB COMBIVERT F6 High-Speed Variant",
    typicalSectors: "Biological sewage aeration basins, chemical gas compressors, glass manufacturing vacuum",
  },
  {
    id: "wind-energy",
    name: "Wind Energy Drive Systems",
    category: "energy",
    icon: FaWind,
    tagline: "Turbine Pitch Control, Dynamic Yaw & Rotor Brake Systems",
    summary:
      "Critical safety pitch drive systems ensuring dependable blade feathering during storm events, plus heavy yaw drives keeping the nacelle aligned.",
    driveFeatures: [
      "Emergency feathering safety run on supercapacitor / battery banks",
      "Offshore corrosion-resistant surface coatings (ISO 12944 C5-M)",
      "Cold-climate package certified down to -40°C",
      "Fail-safe electromagnetic pitch and yaw brakes",
    ],
    recommendedHardware: "KEB Pitch Drives / Kendrion Pitch Safety Brakes",
    typicalSectors: "Onshore wind parks, deep-sea offshore wind turbines, mountain ridge wind farms",
  },
  {
    id: "woodworking",
    name: "Woodworking Machinery",
    category: "machinery",
    icon: FaCogs,
    tagline: "Multi-Axis CNC Routers, Panel Saws & Edge Banders",
    summary:
      "High-speed synchronous spindle drives and synchronized multi-axis feeds providing mirror-finish timber milling and rapid tool changeovers.",
    driveFeatures: [
      "High-speed milling spindles operating up to 36,000 RPM",
      "Fast deceleration with dynamic braking resistor management",
      "Synchronized multi-axis interpolation for 3D wood relief carving",
      "Rugged dust-proof drive enclosures with heat-sink channel separation",
    ],
    recommendedHardware: "KEB COMBIVERT S6 / VOGEL SKPR Servo Bevel Gearboxes",
    typicalSectors: "Furniture manufacturing, architectural millwork, timber processing, wooden door production",
  },

  // --- Lenze Applications (Displayed After KEB) ---
  {
    id: "fan",
    name: "FAN (Ventilation Equipment)",
    category: "flow",
    icon: FaFan,
    tagline: "Industrial Ventilation, Heavy HVAC Blowers & Tunnel Exhaust",
    summary:
      "Optimized variable frequency drive solutions for continuous and fire-emergency ventilation systems, cooling towers, and industrial extract fans.",
    driveFeatures: [
      "Energy-saving resonance avoidance & automatic pipe fill",
      "Integrated fire-override emergency run mode",
      "Native BACnet MS/TP and Modbus RTU communications",
      "Sensorless vector control with up to 45% motor energy savings",
    ],
    recommendedHardware: "Invertek Optidrive Eco / KEB COMBIVERT F6",
    typicalSectors: "Commercial towers, metro tunnels, industrial processing plants, cleanrooms",
  },
  {
    id: "pumps",
    name: "Industrial Pumps & Water Flow",
    category: "flow",
    icon: FaWater,
    tagline: "Clean Water Utilities, Booster Stations & Wastewater Drainage",
    summary:
      "Intelligent pump control delivering dynamic head-loss compensation, dry-run protection, multi-pump cascade staging, and water hammer mitigation.",
    driveFeatures: [
      "Multi-pump cascade control without external PLC",
      "Cavitation detection & pipe cleaning routine",
      "Sleep and wake-up mode based on transducer pressure",
      "Seamless integration with solar pumping hybrid controllers",
    ],
    recommendedHardware: "Invertek Optidrive Eco / Solartech PB-G4 / Aucom EMX4",
    typicalSectors: "Municipal water authorities, wastewater plants, chemical processing, district cooling",
  },
  {
    id: "horizontal-conveying",
    name: "Horizontal Conveying",
    category: "logistics",
    icon: FaBoxes,
    tagline: "Roller Tracks, Belt Conveyors & Automated Parcel Sorting",
    summary:
      "Decentralized and cabinet-mounted drive technologies for high-throughput parcel logistics, food packaging lines, and baggage transport.",
    driveFeatures: [
      "High starting torque with soft ramp-up to protect belts",
      "Decentralized IP65 drive controllers for distributed lines",
      "Fast fieldbus response for high-speed dynamic tracking",
      "Regenerative braking integration on inclined and downward runs",
    ],
    recommendedHardware: "KEB COMBIVERT S6 / VOGEL Planetary Gearboxes",
    typicalSectors: "E-commerce distribution centers, airport baggage terminals, beverage bottling",
  },
  {
    id: "refrigeration",
    name: "Refrigeration & Heat Pumps",
    category: "flow",
    icon: FaSnowflake,
    tagline: "Screw & Scroll Compressors, Industrial Chillers & Cold Storage",
    summary:
      "High-efficiency speed modulation for commercial chillers, supermarket cooling packs, and industrial heat pumps running under varying thermal loads.",
    driveFeatures: [
      "Continuous capacity modulation replacing inefficient on/off cycling",
      "Crankcase heater control and oil return cycle algorithms",
      "Ultra-low harmonic distortion compliant with IEEE 519",
      "Rapid transient torque response during high ambient peak demand",
    ],
    recommendedHardware: "Invertek Optidrive P2 / KEB COMBIVERT F6",
    typicalSectors: "Cold chain logistics, food preservation, chemical batch reactors, hypermarket HVAC",
  },
  {
    id: "storage-retrieval",
    name: "Storage & Retrieval Machines (AS/RS)",
    category: "logistics",
    icon: FaWarehouse,
    tagline: "Automated High-Bay Warehousing, Pallet Cranes & Shuttles",
    summary:
      "High-dynamic multi-axis servo controllers providing microsecond synchronization, anti-sway positioning, and regenerative energy recovery.",
    driveFeatures: [
      "Synchronized dual-axis drive coordination for mast and carriage",
      "Regenerative DC bus sharing to recover braking energy",
      "Integrated Safe Limited Speed (SLS) and Safe Torque Off (STO)",
      "High-resolution optical laser feedback positioning",
    ],
    recommendedHardware: "KEB COMBIVERT F6 / Kendrion Intorq BFK458",
    typicalSectors: "Pharmaceutical warehouses, automotive parts distribution, automated cold storage",
  },
];

const categoryTabs = [
  { id: "all", label: "All Applications (16)" },
  { id: "machinery", label: "Machine Construction & Robotics" },
  { id: "energy", label: "E-Mobility & Energy" },
  { id: "logistics", label: "Conveying & Logistics (AS/RS, Cranes)" },
  { id: "flow", label: "Flow & Air (FAN, Pumps, Compressors)" },
];

const categoryNameMap = {
  machinery: "Machine Construction",
  energy: "Energy & Mobility",
  logistics: "Intralogistics",
  flow: "Flow & Air Systems",
};

const ApplicationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalApp, setActiveModalApp] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalApp(null);
      }
    };
    if (activeModalApp) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeModalApp]);

  const filteredApps =
    selectedCategory === "all"
      ? applicationsData
      : applicationsData.filter((app) => app.category === selectedCategory);

  const handleWhatsAppInquiry = (app) => {
    const text = encodeURIComponent(
      `*GI. Tech Automation - Application Inquiry*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎯 *Application:* ${app.name}\n⚙️ *Recommended Hardware:* ${app.recommendedHardware}\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Inquiry:* Hello GI. Tech team, I would like to inquire about drive and automation solutions for ${app.name}. Please share technical specifications, availability, and pricing.`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, "_blank");
  };

  return (
    <section id="applications" className="py-20 bg-white w-full overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <span>KEB & LENZE AUTOMATION SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Applications & Engineered Solutions
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From heavy material handling, robotics, and commercial e-mobility to industrial
            ventilation fans and high-speed turbomachinery. Explore our engineered drive and motion
            solutions across key industrial application domains.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2.5 mt-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Applications Grid: Uniform Professional Design Without Key Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredApps.map((app) => {
            const IconComponent = app.icon;

            return (
              <motion.div
                key={app.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 relative"
              >
                <div>
                  {/* Top Bar: Icon & Category Tag ONLY */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-primary border border-blue-100">
                      <IconComponent size={22} />
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200 capitalize">
                      {categoryNameMap[app.category] || "Engineered Solution"}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5">
                    {app.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-primary mb-3">
                    {app.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-3">
                    {app.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Core Drive Engineering:
                    </p>
                    <ul className="space-y-1.5">
                      {app.driveFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <FaCheck className="text-emerald-500 mt-0.5 shrink-0" size={11} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
                  <button
                    onClick={() => handleWhatsAppInquiry(app)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                    title="Inquire directly on WhatsApp"
                  >
                    <FaWhatsapp size={16} />
                    <span>Inquire WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setActiveModalApp(app)}
                    className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Specs
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Application Modal */}
        <AnimatePresence>
          {activeModalApp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[92vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveModalApp(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <FaTimes size={20} />
                </button>

                <div className="flex items-start gap-4 pb-5 border-b border-slate-100">
                  <div className="p-3.5 rounded-2xl bg-blue-50 text-primary border border-blue-100 shrink-0">
                    <activeModalApp.icon size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {categoryNameMap[activeModalApp.category] || "Engineered Solution"}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {activeModalApp.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                      {activeModalApp.tagline}
                    </p>
                  </div>
                </div>

                <div className="py-5 space-y-4">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {activeModalApp.summary}
                  </p>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                      Key Drive Technology & Control Features:
                    </h4>
                    <ul className="space-y-2">
                      {activeModalApp.driveFeatures.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <FaCheck className="text-emerald-500 mt-1 shrink-0" size={12} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                        Recommended Hardware
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-800">
                        {activeModalApp.recommendedHardware}
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                        Typical Sectors & Deployments
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        {activeModalApp.typicalSectors}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-slate-100">
                  <button
                    onClick={() => {
                      handleWhatsAppInquiry(activeModalApp);
                      setActiveModalApp(null);
                    }}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md cursor-pointer transition-all"
                  >
                    <FaWhatsapp size={18} />
                    <span>Inquire on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setActiveModalApp(null)}
                    className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ApplicationsSection;
