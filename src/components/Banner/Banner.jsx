import  { useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeadset, FaShoppingBag, FaCogs, FaAward } from "react-icons/fa";
import BgImg from "../../assets/website/coffee-texture.jpg";
import Img2 from "../../assets/features.png";

const Banner = () => {
  useEffect(() => {
    // Additional logic if needed
  }, []);

  const styles = {
    callToAction: {
      padding: '80px 0',
      position: 'relative',
      clipPath: 'inset(0)',
      overflow: 'hidden',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1,
    },
    overlay: {
      content: '""',
      background: 'rgba(15, 23, 42, 0.85)', // Premium dark slate overlay
      position: 'absolute',
      inset: 0,
      zIndex: 2,
    },
    container: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
    },
    bgImage: {
      backgroundImage: `url(${BgImg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
    }
  };

  return (
    <>
      <span id="why-gitech"></span>
      <div style={{ ...styles.bgImage, ...styles.callToAction }} className="relative">
        <div style={styles.overlay}></div>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image section */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                data-aos="zoom-in"
                className="relative"
              >
                <img
                  src={Img2}
                  alt="Industrial Automation"
                  className="max-w-[430px] w-full mx-auto drop-shadow-2xl transition-transform transform hover:scale-105 duration-500"
                />
              </motion.div>
              {/* Text content section */}
              <div className="flex flex-col justify-center text-left gap-6 sm:pt-0">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  data-aos="fade-up"
                  className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg"
                >
                  Why GiTech?
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  data-aos="fade-up"
                  className="text-lg text-gray-300 tracking-wide leading-relaxed"
                >
                  GiTech is your trusted partner in industrial automation. We combine end-to-end support with global brand integrations to deliver systems of unparalleled reliability.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg shrink-0">
                      <FaHeadset className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1">End-to-End Support</h4>
                      <p className="text-gray-400 text-sm">Full engineering assistance from configuration to deployment.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg shrink-0">
                      <FaShoppingBag className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1">Sourcing & Procurement</h4>
                      <p className="text-gray-400 text-sm">Competitive direct sourcing of leading global automation brands.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                      <FaCogs className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1">Custom Integration</h4>
                      <p className="text-gray-400 text-sm">Tailored panels and system commissioning for your processes.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg shrink-0">
                      <FaAward className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1">Proven Reliability</h4>
                      <p className="text-gray-400 text-sm">A verified track record of high-performance deployments.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
