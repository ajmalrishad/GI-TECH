import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingCart,
  FaInfoCircle,
  FaCheck,
  FaTimes,
  FaFileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import invertek1 from "../../assets/Products/invertek1.png";
import aucom1 from "../../assets/Products/aucom1.png";
import keb1 from "../../assets/Products/keb1.png";
import kendrion1 from "../../assets/Products/kendrion1.png";
import vogel1 from "../../assets/Products/vogel1.png";

import invertekLogo from "../../assets/brands/invertek.svg";
import aucomLogo from "../../assets/brands/aucom.svg";
import kebLogo from "../../assets/brands/keb.svg";
import kendrionLogo from "../../assets/brands/kendrion.svg";
import vogelLogo from "../../assets/brands/vogel.svg";

const productsData = [
  {
    id: 1,
    title: "Invertek Drives",
    brand: "Invertek Drives",
    brandLogo: invertekLogo,
    category: "drives",
    image: invertek1,
    summary:
      "Variable Frequency Drives (VFDs) designed for precision motor control, energy savings, and ease of use. Ideal for HVAC, pumps, conveyors, and more.",
    featureLabel: "Features",
    items: [
      "Compact design with IP-rated enclosures",
      "Intuitive setup and diagnostics",
      "Wide voltage range and application flexibility",
    ],
  },
  {
    id: 2,
    title: "Aucom Soft Starters",
    brand: "Aucom",
    brandLogo: aucomLogo,
    category: "drives",
    image: aucom1,
    summary:
      "Smart motor control solutions that reduce mechanical stress and extend equipment life. Perfect for demanding industrial environments.",
    featureLabel: "Features",
    items: [
      "Advanced protection and monitoring",
      "Smooth acceleration and deceleration",
      "Integration with PLC and SCADA systems",
    ],
  },
  {
    id: 3,
    title: "KEB Automation",
    brand: "KEB Automation",
    brandLogo: kebLogo,
    category: "motion",
    image: keb1,
    summary:
      "German-engineered automation systems for complex motion control, robotics, and industrial communication.",
    featureLabel: "Products",
    items: [
      "Servo drives and motors",
      "PLCs and HMIs",
      "Industrial Ethernet and fieldbus modules",
    ],
  },
  {
    id: 4,
    title: "Kendrion Intorq",
    brand: "Kendrion Intorq",
    brandLogo: kendrionLogo,
    category: "motion",
    image: kendrion1,
    summary:
      "Reliable braking and clutch systems for safety-critical applications. Trusted in elevators, cranes, and renewable energy.",
    featureLabel: "Solutions",
    items: [
      "Spring-applied brakes",
      "Holding and dynamic braking systems",
      "Custom configurations for OEMs",
    ],
  },
  {
    id: 5,
    title: "Vogel Lubrication Systems",
    brand: "Vogel Lubrication",
    brandLogo: vogelLogo,
    category: "lubrication",
    image: vogel1,
    summary:
      "Automated lubrication systems that improve uptime and reduce maintenance costs.",
    featureLabel: "Applications",
    items: [
      "Automotive assembly lines",
      "Packaging machinery",
      "Heavy-duty industrial equipment",
    ],
  },
];

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const itemIndex = existingCart.findIndex((item) => item.id === product.id);

      if (itemIndex > -1) {
        existingCart[itemIndex].quantity = (existingCart[itemIndex].quantity || 1) + 1;
      } else {
        existingCart.push({
          id: product.id,
          title: product.title,
          brand: product.brand,
          image: product.image,
          description: product.summary,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      window.dispatchEvent(new Event("cartUpdated"));

      setToastMessage(`${product.title} added to inquiry cart!`);
      setTimeout(() => setToastMessage(null), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  const filteredProducts =
    selectedCategory === "all"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-slate-50 border-t border-slate-100">
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
            Engineered Automation Systems
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Products
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600">
            Precision-engineered variable frequency drives, soft starters, motion
            controllers, safety brakes, and centralized lubrication systems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Products" },
              { id: "drives", label: "Drives & Soft Starters" },
              { id: "motion", label: "Motion & Braking" },
              { id: "lubrication", label: "Centralized Lubrication" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Product Image Area */}
              <div className="relative bg-gradient-to-b from-slate-50 to-slate-100/70 p-6 h-64 flex items-center justify-center overflow-hidden border-b border-slate-100">
                {/* Brand Logo Badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-xs p-1.5 px-3 rounded-lg border border-slate-200/80 shadow-2xs max-w-[140px] h-8 flex items-center justify-center">
                  <img
                    src={product.brandLogo}
                    alt={product.brand}
                    className="max-h-6 w-auto object-contain"
                  />
                </div>

                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-600 hover:text-primary rounded-lg shadow-sm border border-slate-200 transition-colors cursor-pointer"
                  title="Quick View Specs"
                >
                  <FaInfoCircle size={15} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                    {product.brand}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {product.summary}
                  </p>
                </div>

                {/* Features / Solutions List */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {product.featureLabel}:
                  </p>
                  <ul className="space-y-1.5">
                    {product.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <FaCheck className="text-primary mt-0.5 shrink-0" size={11} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primaryHover text-white text-xs sm:text-sm font-semibold rounded-lg shadow-2xs hover:shadow transition-all cursor-pointer"
                  >
                    <FaShoppingCart size={13} />
                    <span>Inquire / Add</span>
                  </button>
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Spec Modal */}
        <AnimatePresence>
          {activeModalProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>

                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={activeModalProduct.image}
                    alt={activeModalProduct.title}
                    className="w-20 h-20 object-contain p-2 bg-slate-50 rounded-xl border border-slate-200"
                  />
                  <div>
                    <img
                      src={activeModalProduct.brandLogo}
                      alt={activeModalProduct.brand}
                      className="max-h-8 w-auto object-contain mb-1"
                    />
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {activeModalProduct.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-5">
                  {activeModalProduct.summary}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      {activeModalProduct.featureLabel}:
                    </h4>
                    <ul className="space-y-2">
                      {activeModalProduct.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <FaCheck className="text-emerald-500 mt-0.5 shrink-0" size={12} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      handleAddToCart(activeModalProduct);
                      setActiveModalProduct(null);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primaryHover text-white font-semibold text-sm rounded-lg shadow-sm cursor-pointer"
                  >
                    <FaShoppingCart size={14} />
                    <span>Add to Inquiry</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveModalProduct(null);
                      navigate("/contact");
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-lg cursor-pointer"
                  >
                    <FaFileAlt size={14} />
                    <span>Request Quote</span>
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
