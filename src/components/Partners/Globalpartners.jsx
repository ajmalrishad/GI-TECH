import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaExternalLinkAlt,
  FaTimes,
  FaCheckCircle,
  FaCogs,
  FaIndustry,
  FaArrowRight,
  FaGlobe,
} from "react-icons/fa";
import { brandDetailsData } from "../../data/brandDetails";

const GlobalPartners = () => {
  const [activeBrandModal, setActiveBrandModal] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveBrandModal(null);
      }
    };
    if (activeBrandModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeBrandModal]);

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

  const handleInquire = () => {
    setActiveBrandModal(null);
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <section id="brands" className="py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-widest font-bold text-primary mb-2">
            Authorized Integration Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Brands
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600">
            We proudly distribute and integrate products from globally recognized
            automation and power transmission pioneers. Click any brand to explore
            detailed product lines and application solutions.
          </p>
        </div>

        {/* Brand Cards Grid - Exact Order: Invertek, KEB, Aucom, Kendrion, Vogel, Solartech */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {brandDetailsData.map((brand) => (
            <motion.div
              key={brand.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveBrandModal(brand)}
              className="group bg-slate-50/70 hover:bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:border-primary/50 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {brand.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-primary transition-colors flex items-center gap-1">
                    Details <FaArrowRight size={10} />
                  </span>
                </div>

                <div className="h-20 flex items-center justify-center mb-4 bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs group-hover:border-primary/30 transition-colors">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-12 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mt-1 mb-2.5">
                  {brand.category}
                </p>
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/60 flex items-center justify-between text-sm font-bold text-primary">
                <span>View Products & Specs</span>
                <FaExternalLinkAlt size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Official Distributorship & Application Engineering Slider strip (Commented Out)
        <div className="mt-16 pt-10 border-t border-slate-100">
          <p className="text-center text-xs sm:text-sm uppercase tracking-wider text-slate-500 font-semibold mb-6">
            Official Distributorship & Application Engineering
          </p>
          <Slider {...sliderSettings} className="brand-slider">
            {brandDetailsData.map((brand) => (
              <div key={brand.id} className="px-3">
                <div
                  onClick={() => setActiveBrandModal(brand)}
                  className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-center justify-center h-20 shadow-2xs hover:border-primary/40 cursor-pointer transition-all"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        */}
      </div>

      {/* Brand Detailed Modal */}
      <AnimatePresence>
        {activeBrandModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 my-auto flex flex-col"
            >
              {/* Modal Top Header */}
              <div className="p-5 sm:p-7 border-b border-slate-100 flex items-start justify-between bg-slate-50/80 rounded-t-3xl sticky top-0 z-20 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-28 sm:w-36 bg-white p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-center shadow-2xs shrink-0">
                    <img
                      src={activeBrandModal.logo}
                      alt={activeBrandModal.name}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        {activeBrandModal.tag}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                      {activeBrandModal.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      {activeBrandModal.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveBrandModal(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Content Body */}
              <div className="p-5 sm:p-8 space-y-7">
                {/* Brand Tagline & Overview */}
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 italic">
                    "{activeBrandModal.tagline}"
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {activeBrandModal.description}
                  </p>
                </div>

                {/* Key Engineering Highlights */}
                {activeBrandModal.highlights && (
                  <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 sm:p-5">
                    <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                      <FaCheckCircle className="text-primary" /> Key Engineering Advantages
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeBrandModal.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="text-primary font-bold">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Products From Website */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h5 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <FaCogs className="text-primary" /> Featured Products From {activeBrandModal.name}
                    </h5>
                    <a
                      href={activeBrandModal.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5"
                    >
                      <FaGlobe size={13} /> Official Website <FaExternalLinkAlt size={10} />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeBrandModal.products.map((prod, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-2.5"
                      >
                        <div>
                          <span className="text-xs font-bold text-primary uppercase tracking-wide">
                            {prod.series}
                          </span>
                          <h6 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                            {prod.headline}
                          </h6>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                            {prod.details}
                          </p>
                        </div>
                        {prod.specs && (
                          <div className="pt-2 border-t border-slate-200/60 space-y-1">
                            {prod.specs.map((sp, sIdx) => (
                              <div key={sIdx} className="text-xs text-slate-500 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                <span>{sp}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications Section */}
                <div className="space-y-3">
                  <div className="border-b border-slate-100 pb-2">
                    <h5 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <FaIndustry className="text-primary" /> Key Industrial Applications & Solutions
                    </h5>
                    {activeBrandModal.id === "keb" && (
                      <p className="text-xs text-slate-500 mt-0.5">
                        Comprehensive application systems from KEB Automation & Lenze Solutions
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeBrandModal.applications.map((app, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/80 text-slate-700 font-medium flex items-start gap-2.5 text-xs sm:text-sm"
                      >
                        <span className="mt-0.5 shrink-0 text-primary font-bold">✓</span>
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Bottom Actions */}
              <div className="p-5 sm:p-7 border-t border-slate-100 bg-slate-50/90 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
                <a
                  href={activeBrandModal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 shadow-2xs transition-colors"
                >
                  <FaGlobe size={15} className="text-primary" />
                  <span>Visit {activeBrandModal.name} Official Website</span>
                  <FaExternalLinkAlt size={11} className="text-slate-400" />
                </a>

                <div className="w-full sm:w-auto flex items-center gap-3">
                  <button
                    onClick={() => setActiveBrandModal(null)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-200/70 hover:bg-slate-300/70 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleInquire}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primaryHover text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Request a Quote</span>
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GlobalPartners;
