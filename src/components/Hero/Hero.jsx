import { motion } from "framer-motion";
import circuitBg from "../../assets/office3.jpg";

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center text-white overflow-hidden bg-slate-950 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(11, 17, 32, 0.94) 0%, rgba(15, 23, 42, 0.88) 100%), url(${circuitBg})`,
      }}
    >
      {/* Subtle modern ambient background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[260px] h-[260px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm">
            <span>⚡ 15 Years of Industrial Excellence</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            “Empowering Automation <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Across Industries”
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            GiTech is your trusted partner in Industrial and Building Automation.
            We deliver precision-engineered solutions backed by global brands and
            expert support.
          </p>

          {/* CTA Buttons - Compact on mobile, comfortable on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 sm:pt-4 max-w-xs sm:max-w-none mx-auto">
            <button
              onClick={() => handleScroll("products")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-4 bg-primary hover:bg-primaryHover text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base rounded-lg border border-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 cursor-pointer text-center"
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
