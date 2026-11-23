import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const Moto = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100 w-full overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-widest font-bold text-primary mb-2">
            Strategic Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Mission & Vision
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-center text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Driving technological transformation, energy sustainability, and
            engineering excellence across the UAE and global industrial sectors.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="p-8 sm:p-10 bg-slate-50/70 hover:bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-primary"></div>

            <div className="p-3.5 bg-blue-50 text-primary rounded-2xl w-fit border border-blue-200/80 mb-6 group-hover:scale-110 transition-transform">
              <FaBullseye size={28} />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                Core Directive
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Our Mission
              </h3>
              <p className="text-justify text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
                To empower industries through cutting-edge solutions in Power
                Transmission, Automation, and Robotics, driving efficiency,
                sustainability, and innovation. We are committed to delivering
                reliable, intelligent, and sustainable technologies that enhance
                productivity, reduce environmental impact, and create lasting value
                for our stakeholders.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="p-8 sm:p-10 bg-slate-50/70 hover:bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-indigo-600"></div>

            <div className="p-3.5 bg-indigo-50 text-indigo-600 rounded-2xl w-fit border border-indigo-200/80 mb-6 group-hover:scale-110 transition-transform">
              <FaEye size={28} />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                Forward Horizon
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Our Vision
              </h3>
              <p className="text-justify text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
                To be the leading provider of innovative automation and robotics
                solutions that drive industry transformation, sustainability, and
                excellence. We envision a future where intelligent technologies
                seamlessly integrate with human ingenuity to create a more efficient
                and sustainable world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Moto;
