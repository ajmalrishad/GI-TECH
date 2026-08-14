import { motion } from "framer-motion";
import circuitBg from "../../assets/office3.jpg";

const Hero = () => {
  const handleScrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.75)), url(${circuitBg})` 
      }}
    >
      {/* Decorative Blur Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20"></div>

      <div className="container mx-auto px-4 z-10 text-center max-w-4xl py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm"
          >
            ⚡ 15 Years of Industrial Excellence
          </motion.span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            Empowering Automation <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            GiTech is your trusted partner in Industrial and Building Automation. We deliver precision-engineered solutions backed by global brands and expert support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={handleScrollToProducts}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20 text-center"
            >
              Explore Solutions
            </button>
            <a
              href="#/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 font-bold rounded-lg transition duration-300 transform hover:-translate-y-1 backdrop-blur-sm text-center"
            >
              Request a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
