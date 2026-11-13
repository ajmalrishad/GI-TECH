import { motion } from "framer-motion";
import { FaHeadset, FaShoppingBag, FaCogs, FaAward, FaCheck } from "react-icons/fa";
import Img2 from "../../assets/features.png";

const reasons = [
  {
    icon: FaHeadset,
    title: "End-to-End Technical Support",
    description:
      "Comprehensive engineering assistance from system design and drive sizing through commissioning and 24/7 lifecycle maintenance.",
  },
  {
    icon: FaShoppingBag,
    title: "Competitive Sourcing & Procurement",
    description:
      "Direct partnerships with world-leading brands ensure authentic components, OEM warranty protection, and cost-effective procurement.",
  },
  {
    icon: FaCogs,
    title: "Custom Integration & Commissioning",
    description:
      "Tailor-made control panels, PLC programming, SCADA development, and turnkey on-site startup for seamless operations.",
  },
  {
    icon: FaAward,
    title: "Proven Reliability Across Projects",
    description:
      "A decade-plus track record delivering mission-critical automation systems that improve uptime, energy efficiency, and worker safety.",
  },
];

const Banner = () => {
  return (
    <section id="why-gitech" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>
              <img
                src={Img2}
                alt="Why Choose GiTech Automation"
                className="relative max-w-sm sm:max-w-md w-full h-auto drop-shadow-2xl mx-auto"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
                Our Competitive Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Why GiTech?
              </h2>
              <div className="w-16 h-1 bg-blue-500 my-3 rounded-full"></div>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mt-3">
                GiTech is your trusted partner in industrial and commercial
                automation. We combine engineering excellence with global brand
                sourcing to deliver reliable, energy-saving, and future-proof systems.
              </p>
            </div>

            {/* 4 Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {reasons.map((r, idx) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700/60 hover:border-blue-500/40 transition-all duration-300 space-y-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 shrink-0">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {r.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {r.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick summary checkmarks */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-emerald-400" /> End-to-end technical support
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-emerald-400" /> Competitive sourcing and procurement
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-emerald-400" /> Custom integration and commissioning
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-emerald-400" /> Proven reliability across projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
