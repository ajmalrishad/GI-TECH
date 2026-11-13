import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const Moto = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
            Strategic Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Mission & Vision
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-3 rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-300">
            Driving technological transformation, energy sustainability, and
            engineering excellence across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-8 bg-slate-800/80 rounded-2xl border border-slate-700/80 shadow-lg relative overflow-hidden group"
          >
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl w-fit border border-blue-500/20 mb-6">
              <FaBullseye size={26} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              To empower industries through cutting-edge solutions in Power
              Transmission, Automation, and Robotics, driving efficiency,
              sustainability, and innovation. We are committed to delivering
              reliable, intelligent, and sustainable technologies that enhance
              productivity, reduce environmental impact, and create lasting value
              for our stakeholders.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-8 bg-slate-800/80 rounded-2xl border border-slate-700/80 shadow-lg relative overflow-hidden group"
          >
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl w-fit border border-indigo-500/20 mb-6">
              <FaEye size={26} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              To be the leading provider of innovative automation and robotics
              solutions that drive industry transformation, sustainability, and
              excellence. We envision a future where intelligent technologies
              seamlessly integrate with human ingenuity to create a more efficient
              and sustainable world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Moto;
