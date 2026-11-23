import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingCart,
  FaInfoCircle,
  FaCheck,
  FaTimes,
  FaFileAlt,
  FaExternalLinkAlt,
  FaCogs,
  FaIndustry,
  FaCheckCircle,
  FaSolarPanel,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { brandDetailsData } from "../../data/brandDetails";

// Map filter category to each brand
const brandFilterMap = {
  invertek: "drives",
  keb: "motion",
  aucom: "drives",
  kendrion: "motion",
  vogel: "gearboxes",
  solartech: "solar",
};

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalBrand, setActiveModalBrand] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const navigate = useNavigate();

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalBrand(null);
      }
    };
    if (activeModalBrand) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeModalBrand]);

  const handleAddToCart = (brand) => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const itemIndex = existingCart.findIndex((item) => item.id === brand.id);

      if (itemIndex > -1) {
        existingCart[itemIndex].quantity = (existingCart[itemIndex].quantity || 1) + 1;
      } else {
        existingCart.push({
          id: brand.id,
          title: brand.name,
          brand: brand.name,
          image: brand.image,
          description: brand.description,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      window.dispatchEvent(new Event("cartUpdated"));

      setToastMessage(`${brand.name} added to inquiry cart!`);
      setTimeout(() => setToastMessage(null), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  const filteredBrands =
    selectedCategory === "all"
      ? brandDetailsData
      : brandDetailsData.filter(
          (brand) => brandFilterMap[brand.id] === selectedCategory
        );

  return (
    <section id="products" className="py-20 bg-slate-50 border-t border-slate-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toast alert */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-800"
            >
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                <FaShoppingCart size={16} />
              </div>
              <div className="text-sm">
                <p className="font-semibold">{toastMessage}</p>
                <button
                  onClick={() => navigate("/cart")}
                  className="text-xs text-blue-400 hover:underline font-medium"
                >
                  View Inquiry List →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-primary mb-2">
            Engineered Automation Systems • UAE & Dubai
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Products
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-center text-base sm:text-lg text-slate-600 font-normal">
            Official UAE distributor of Invertek Optidrive, KEB COMBIVERT & Aucom —
            premium Variable Frequency Drives (VFD) in Dubai & UAE (0.37kW–355kW), high-efficiency
            frequency inverters & frequency converters, servo systems, intelligent soft starters,
            and precision gearboxes. UAE stock available — fast dispatch across GCC. Click any brand for full product lines & specs.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2.5 mt-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar">
            {[
              { id: "all", label: "All Products" },
              { id: "drives", label: "Drives & Soft Starters" },
              { id: "motion", label: "Motion & Braking" },
              { id: "gearboxes", label: "Precision Gearboxes" },
              { id: "solar", label: "Solar Pumping" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid: 1. Invertek, 2. KEB, 3. Aucom, 4. Kendrion, 5. Vogel, 6. Solar Pumping Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrands.map((brand) => (
            <motion.div
              key={brand.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Product Image Area */}
              <div className="relative bg-gradient-to-b from-slate-50 to-slate-100/70 p-6 h-64 flex items-center justify-center overflow-hidden border-b border-slate-100">
                {/* Brand Logo Badge */}
                {brand.logo ? (
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-xs p-1.5 px-3 rounded-lg border border-slate-200/80 shadow-2xs max-w-[140px] h-8 flex items-center justify-center">
                    <img loading="lazy" decoding="async"
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-6 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-xs p-1 px-3 rounded-lg border border-blue-200/80 shadow-2xs h-8 flex items-center gap-1.5 text-xs font-bold text-primary">
                    <FaSolarPanel size={13} className="text-amber-500" />
                    <span>Solar Pumping</span>
                  </div>
                )}

                <img loading="lazy" decoding="async"
                  src={brand.image}
                  alt={brand.name}
                  className="max-h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <button
                  onClick={() => setActiveModalBrand(brand)}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-600 hover:text-primary rounded-lg shadow-sm border border-slate-200 transition-colors cursor-pointer"
                  title="View Complete Specifications & Applications"
                >
                  <FaInfoCircle size={17} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider mb-1">
                    {brand.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-justify text-sm sm:text-base text-slate-600 mt-2 leading-relaxed font-normal line-clamp-3">
                    {brand.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-justify text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Features & Solutions:
                  </p>
                  <ul className="space-y-1.5">
                    {brand.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                        <FaCheck className="text-primary mt-1 shrink-0" size={12} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => handleAddToCart(brand)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primaryHover text-white text-sm font-bold rounded-lg shadow-2xs hover:shadow transition-all cursor-pointer"
                  >
                    <FaShoppingCart size={14} />
                    <span>Inquire / Add</span>
                  </button>
                  <button
                    onClick={() => setActiveModalBrand(brand)}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Product & Brand Modal */}
        <AnimatePresence>
          {activeModalBrand && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[92vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalBrand(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <FaTimes size={20} />
                </button>

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    {activeModalBrand.logo ? (
                      <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 p-2.5 flex items-center justify-center shrink-0">
                        <img loading="lazy" decoding="async"
                          src={activeModalBrand.logo}
                          alt={activeModalBrand.name}
                          className="max-h-12 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-50 to-blue-50 border border-blue-200 p-2.5 flex items-center justify-center shrink-0">
                        <FaSolarPanel size={32} className="text-amber-500" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          {activeModalBrand.name}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Official Partner
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-primary mt-0.5">
                        {activeModalBrand.tagline}
                      </p>
                    </div>
                  </div>

                  {activeModalBrand.website && (
                    <a
                      href={activeModalBrand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-slate-700 text-xs sm:text-sm font-bold transition-all shrink-0"
                    >
                      <span>Visit Official Website</span>
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <div className="py-5">
                  <p className="text-justify text-base text-slate-700 leading-relaxed font-normal">
                    {activeModalBrand.description}
                  </p>
                </div>

                {/* Key Engineering Highlights */}
                <div className="mb-6 p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                    <FaCheckCircle className="text-primary" size={15} />
                    <span>Key Engineering Highlights</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalBrand.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                        <FaCheck className="text-emerald-500 mt-1 shrink-0" size={12} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Products from Brand Website */}
                <div className="mb-6">
                  <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2 mb-4">
                    <FaCogs className="text-primary" size={18} />
                    <span>Product Series from Official Brand Portfolio</span>
                  </h4>
                  <div className="space-y-4">
                    {activeModalBrand.products.map((prod, i) => (
                      <div
                        key={i}
                        className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-primary/50 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                          <h5 className="text-base font-bold text-slate-900">
                            {prod.series}
                          </h5>
                          <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-0.5 rounded-md inline-block w-fit">
                            {prod.headline}
                          </span>
                        </div>
                        <p className="text-justify text-sm text-slate-600 font-normal leading-relaxed mb-3">
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

                {/* Target Applications & Industrial Sectors */}
                <div className="mb-8">
                  <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2 mb-3">
                    <FaIndustry className="text-primary" size={18} />
                    <span>Target Applications & Industrial Sectors</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalBrand.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border bg-slate-50 text-slate-800 border-slate-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-slate-100">
                  <button
                    onClick={() => {
                      handleAddToCart(activeModalBrand);
                      setActiveModalBrand(null);
                    }}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-primaryHover text-white font-bold text-sm sm:text-base rounded-xl shadow-md cursor-pointer transition-all"
                  >
                    <FaShoppingCart size={15} />
                    <span>Add {activeModalBrand.name} to Inquiry</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveModalBrand(null);
                      navigate("/contact");
                    }}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base rounded-xl cursor-pointer transition-all"
                  >
                    <FaFileAlt size={15} />
                    <span>Request Custom Solution Quote</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductSection;
