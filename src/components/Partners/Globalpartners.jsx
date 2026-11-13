import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import invertekLogo from "../../assets/brands/invertek.svg";
import aucomLogo from "../../assets/brands/aucom.svg";
import kebLogo from "../../assets/brands/keb.svg";
import kendrionLogo from "../../assets/brands/kendrion.svg";
import vogelLogo from "../../assets/brands/vogel.svg";
import { FaExternalLinkAlt } from "react-icons/fa";

const brandList = [
  {
    name: "Invertek Drives",
    category: "High-performance VFDs",
    description: "World-class variable frequency drives engineered for energy efficiency and precision motor speed control.",
    img: invertekLogo,
    tag: "Variable Frequency Drives",
  },
  {
    name: "Aucom",
    category: "Intelligent soft starters",
    description: "Smart motor control solutions reducing inrush current and mechanical wear on industrial motors.",
    img: aucomLogo,
    tag: "Motor Soft Starters",
  },
  {
    name: "KEB Automation",
    category: "Motion control & drive systems",
    description: "German-engineered drive automation, precision servo systems, and fieldbus communication modules.",
    img: kebLogo,
    tag: "Motion & Drives",
  },
  {
    name: "Kendrion Intorq",
    category: "Electromagnetic brakes & clutches",
    description: "Industrial safety brakes and dynamic holding systems trusted in cranes, lifts, and renewable energy.",
    img: kendrionLogo,
    tag: "Braking & Clutches",
  },
  {
    name: "Vogel Lubrication",
    category: "Centralized lubrication systems",
    description: "Automated single-line and progressive lubrication reducing downtime across manufacturing plants.",
    img: vogelLogo,
    tag: "Lubrication Systems",
  },
];

const GlobalPartners = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-primary mb-2">
            Authorized Integration Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Brands
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600">
            We proudly distribute and integrate products from globally recognized
            automation and power transmission pioneers.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {brandList.map((brand, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToProducts}
              className="group bg-slate-50/70 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-primary/40 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <span className="inline-block text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-4">
                  {brand.tag}
                </span>

                <div className="h-16 flex items-center justify-start mb-4 bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-2xs">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-2.5">
                  {brand.category}
                </p>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-primary">
                <span>View Products</span>
                <FaExternalLinkAlt size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand slider strip */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <p className="text-center text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6">
            Official Distributorship & Application Engineering
          </p>
          <Slider {...sliderSettings} className="brand-slider">
            {brandList.map((brand, idx) => (
              <div key={idx} className="px-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-center justify-center h-20 shadow-2xs">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
