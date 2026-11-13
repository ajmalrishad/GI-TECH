import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import invertekLogo from "../../assets/brands/invertek.svg";
import aucomLogo from "../../assets/brands/aucom.svg";
import kebLogo from "../../assets/brands/keb.svg";
import kendrionLogo from "../../assets/brands/kendrion.svg";
import vogelLogo from "../../assets/brands/vogel.svg";
import { FaExternalLinkAlt, FaCheck } from "react-icons/fa";

const brandPartners = [
  {
    name: "Invertek Drives",
    category: "High-performance VFDs",
    src: invertekLogo,
    description:
      "World-renowned specialist in Variable Frequency Drives (VFDs) designed for precision motor control, energy savings, and ease of use. Ideal for HVAC, pumps, conveyors, and industrial process machinery.",
    features: [
      "Compact design with IP-rated enclosures",
      "Intuitive setup and diagnostics",
      "Wide voltage range and application flexibility",
    ],
  },
  {
    name: "Aucom",
    category: "Intelligent soft starters",
    src: aucomLogo,
    description:
      "Smart motor control solutions that reduce mechanical stress and extend equipment life. Perfect for demanding industrial environments including heavy pumps, crushers, and compressors.",
    features: [
      "Advanced protection and monitoring",
      "Smooth acceleration and deceleration",
      "Integration with PLC and SCADA systems",
    ],
  },
  {
    name: "KEB Automation",
    category: "Motion control and drive systems",
    src: kebLogo,
    description:
      "German-engineered automation systems for complex motion control, robotics, and industrial communication.",
    features: [
      "Servo drives and high-torque motors",
      "Modular PLCs and HMIs",
      "Industrial Ethernet and fieldbus modules",
    ],
  },
  {
    name: "Kendrion Intorq",
    category: "Electromagnetic brakes and clutches",
    src: kendrionLogo,
    description:
      "Reliable braking and clutch systems for safety-critical applications. Trusted in elevators, cranes, and renewable energy installations worldwide.",
    features: [
      "Spring-applied electromagnetic brakes",
      "Holding and dynamic braking systems",
      "Custom configurations for OEMs",
    ],
  },
  {
    name: "Vogel Lubrication",
    category: "Centralized lubrication systems",
    src: vogelLogo,
    description:
      "Automated lubrication systems that improve uptime and reduce maintenance costs across manufacturing and heavy machinery.",
    features: [
      "Automotive assembly line integration",
      "Packaging machinery centralized greasing",
      "Heavy-duty industrial equipment reliability",
    ],
  },
];

const PartnerDetails = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
            Global Distributorship
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Brand Partners
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            We proudly distribute and integrate products from world-leading
            automation and drive manufacturers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandPartners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl p-7 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-16 flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="h-12 flex items-center">
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="max-h-11 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-primary bg-blue-50 px-2.5 py-1 rounded-full">
                    Official Partner
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {partner.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {partner.category}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {partner.description}
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Features & Solutions:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {partner.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheck className="text-primary mt-0.5 shrink-0" size={11} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/#products"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-primary bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <span>Explore Products</span>
                  <FaExternalLinkAlt size={10} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
