import  { useEffect } from "react";
import { motion } from "framer-motion";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
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
      position: 'fixed',
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
      background: 'color-mix(in srgb, var(--background-color), transparent 50%)',
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
      <span id="about"></span>
      <div style={{ ...styles.bgImage, ...styles.callToAction }} className="relative">
        <img src={BgImg} alt="" style={styles.image} />
        <div style={styles.overlay}></div>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 relative z-10">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                data-aos="zoom-in"
                className="relative"
              >
                <img
                  src={Img2}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-lg transition-transform transform hover:scale-105 duration-500"
                />
              </motion.div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  data-aos="fade-up"
                  className="text-4xl sm:text-5xl font-bold font-cursive text-white drop-shadow-lg"
                >
                  Premium Features
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  data-aos="fade-up"
                  className="text-lg text-gray-700 tracking-wide leading-6"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio.
                </motion.p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      data-aos="fade-up"
                      className="flex items-center gap-3 hover:text-blue-300 transition duration-300"
                    >
                      <GrSecure className="text-3xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-200 transform hover:scale-110 transition duration-300" />
                      <span className="text-white font-medium">Premium</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3 hover:text-orange-300 transition duration-300"
                    >
                      <IoFastFood className="text-3xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 transform hover:scale-110 transition duration-300" />
                      <span className="text-white font-medium">Hot</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3 hover:text-yellow-300 transition duration-300"
                    >
                      <GiFoodTruck className="text-3xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-200 transform hover:scale-110 transition duration-300" />
                      <span className="text-white font-medium">Cold</span>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive text-white">
                      Lover
                    </h1>
                    <p className="text-sm text-gray-300">
                      Much like writing code, brewing the perfect cup of tea
                      requires patience, precision, and a dash of passion to
                      create a comforting blend of flavors.
                    </p>
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
