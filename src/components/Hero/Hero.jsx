import { motion } from "framer-motion";
import heroBg from "../../assets/hero/hero-automation.jpg";

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full min-h-[100svh] min-h-[100dvh] sm:min-h-[90vh] flex items-center justify-center text-white overflow-hidden bg-slate-950 bg-cover bg-center bg-no-repeat isolate"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(11, 17, 32, 0.82) 0%, rgba(15, 23, 42, 0.74) 50%, rgba(11, 17, 32, 0.86) 100%), url(${heroBg})`,
      }}
    >
      {/* Subtle modern ambient background orbs - constrained within viewport to prevent mobile horizontal bleed */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[500px] h-60 sm:h-[300px] bg-blue-600/15 rounded-full blur-3xl sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-4 sm:right-10 w-52 sm:w-[260px] h-52 sm:h-[260px] bg-indigo-500/10 rounded-full blur-2xl sm:blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-16 sm:py-28 md:py-32 relative z-10 text-center flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs sm:text-base font-medium tracking-wide backdrop-blur-sm">
            <span>⚡ Invertek & KEB Authorised Official Distributor in GCC</span>
          </div>

          {/* Headline - Primary Target Keywords: VFD UAE, Variable Frequency Drives Dubai, Automation Solution Dubai */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight break-words">
            VFD & Automation Solutions <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Empowering Industries Across Gulf Region
            </span>
          </h1>

          {/* Description - Secondary Target Keywords: Frequency Inverters Dubai, VFD Repairs Dubai */}
          <p className="text-justify text-base sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed px-1 sm:px-0">
            GI Tech is a trusted engineering partner for Variable Frequency
            Drives (VFD),
            high-performance frequency inverters, turnkey automation solutions, and rapid 24/7 VFD repairs across the GCC region.
          </p>

          {/* CTA Buttons - Full width expandable on mobile, comfortable on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 sm:pt-4 w-full max-w-sm sm:max-w-none mx-auto">
            <button
              onClick={() => handleScroll("products")}
              className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center py-3.5 px-8 sm:px-9 sm:py-4 bg-primary hover:bg-primaryHover text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center py-3.5 px-8 sm:px-9 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base rounded-xl border border-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Request a Quote
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
