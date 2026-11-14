import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaCheck,
  FaTimes,
  FaCogs,
  FaIndustry,
  FaCheckCircle,
  FaShoppingCart,
  FaFileAlt,
} from "react-icons/fa";
import { brandDetailsData } from "../../data/brandDetails";

const PartnerDetails = () => {
  const [activePartnerModal, setActivePartnerModal] = useState(null);
  const navigate = useNavigate();

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActivePartnerModal(null);
      }
    };
    if (activePartnerModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activePartnerModal]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
            Global Distributorship & System Integration
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Brand Partners
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            We proudly distribute, engineer, and integrate products from world-leading
            automation, motion control, precision gearbox, and solar pumping manufacturers.
          </p>
        </div>
      </div>

      {/* Brand Partners Grid: 1. Invertek, 2. KEB, 3. Aucom, 4. Kendrion, 5. Vogel, 6. Solartech */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandDetailsData.map((brand) => (
            <motion.div
              key={brand.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl p-7 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-16 flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="h-12 flex items-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-11 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-primary bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    Official Partner
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {brand.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                    {brand.category}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {brand.description}
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Key Features & Solutions:
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {brand.highlights.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheck className="text-primary mt-1 shrink-0" size={11} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2.5">
                <button
                  onClick={() => setActivePartnerModal(brand)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-bold text-primary bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Product Lines & Specs</span>
                  <FaExternalLinkAlt size={10} />
                </button>
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors"
                  title="Visit Official Website"
                >
                  <FaExternalLinkAlt size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partner Details Modal */}
      <AnimatePresence>
        {activePartnerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setActivePartnerModal(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <FaTimes size={20} />
              </button>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 p-2.5 flex items-center justify-center shrink-0">
                    <img
                      src={activePartnerModal.logo}
                      alt={activePartnerModal.name}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {activePartnerModal.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {activePartnerModal.tagline}
                    </p>
                  </div>
                </div>

                <a
                  href={activePartnerModal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-slate-700 text-xs sm:text-sm font-bold transition-all shrink-0"
                >
                  <span>Visit Brand Website</span>
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>

              {/* Description */}
              <div className="py-5">
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {activePartnerModal.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-6 p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                  <FaCheckCircle className="text-primary" size={15} />
                  <span>Key Engineering Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePartnerModal.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <FaCheck className="text-emerald-500 mt-1 shrink-0" size={12} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Series */}
              <div className="mb-6">
                <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2 mb-4">
                  <FaCogs className="text-primary" size={18} />
                  <span>Official Product Lines</span>
                </h4>
                <div className="space-y-4">
                  {activePartnerModal.products.map((prod, i) => (
                    <div
                      key={i}
                      className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <h5 className="text-base font-bold text-slate-900">
                          {prod.series}
                        </h5>
                        <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-0.5 rounded-md inline-block w-fit">
                          {prod.headline}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 font-normal leading-relaxed mb-3">
                        {prod.details}
                      </p>
                      {prod.specs && (
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                          {prod.specs.map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2 mb-3">
                  <FaIndustry className="text-primary" size={18} />
                  <span>Applications & Industrial Solutions</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activePartnerModal.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border bg-slate-50 text-slate-800 border-slate-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <button
                  onClick={() => {
                    setActivePartnerModal(null);
                    navigate("/#products");
                  }}
                  className="flex-1 py-3.5 bg-primary hover:bg-primaryHover text-white font-bold text-sm sm:text-base rounded-xl shadow-md cursor-pointer text-center"
                >
                  View in Products Catalogue
                </button>
                <button
                  onClick={() => {
                    setActivePartnerModal(null);
                    navigate("/contact");
                  }}
                  className="flex-1 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base rounded-xl cursor-pointer text-center"
                >
                  Request Quotation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PartnerDetails;
