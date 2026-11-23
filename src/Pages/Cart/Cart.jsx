import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTrash,
  FaShoppingCart,
  FaArrowLeft,
  FaFileInvoice,
  FaPlus,
  FaMinus,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "971559241038";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const loadCart = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(savedCart);
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  };

  useEffect(() => {
    loadCart();
    window.addEventListener("storage", loadCart);
    return () => window.removeEventListener("storage", loadCart);
  }, []);

  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    saveCart(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
        : item
    );
    saveCart(updated);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const handleBackToProducts = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("products");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 150);
  };

  // Generate WhatsApp inquiry URL directly from cart items
  const whatsappUrl = useMemo(() => {
    if (cartItems.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`;

    const itemsList = cartItems
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.title || item.name}* (${item.brand}) — Qty: ${
            item.quantity || 1
          }`
      )
      .join("\n");

    const header = `*GI Tech Automation - Equipment Inquiry List*\n━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    const body = `\n📦 *Requested Automation Items (${cartItems.length}):*\n${itemsList}\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n_Hello GI Tech, please share official quotation, technical datasheets, and delivery timeline for these items._`;

    const fullMessage = `${header}${body}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      fullMessage
    )}`;
  }, [cartItems]);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              <FaShoppingCart className="text-primary" />
              <span>Project Inquiry List</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Review selected automation products and request an official technical quote.
            </p>
          </div>

          <button
            onClick={handleBackToProducts}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline cursor-pointer"
          >
            <FaArrowLeft size={10} /> Back to Products
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center shadow-2xs space-y-4">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <FaShoppingCart size={28} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">
              Your inquiry list is empty
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Explore our range of Invertek VFDs, KEB motion controllers, Aucom soft starters,
              Kendrion brakes, VOGEL precision gearboxes, and solar pumping systems.
            </p>
            <div className="pt-2">
              <button
                onClick={handleBackToProducts}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primaryHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm cursor-pointer transition-all"
              >
                Browse Products
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
                <div className="p-4 sm:p-5 bg-slate-100/60 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-wider">
                  <span>Selected Products ({cartItems.length})</span>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 font-medium lowercase cursor-pointer"
                  >
                    clear all
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 flex flex-col sm:flex-row items-center gap-4 hover:bg-slate-50/50 transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-contain p-2 bg-slate-50 rounded-2xl border border-slate-200/80 shrink-0"
                      />

                      <div className="flex-1 text-center sm:text-left space-y-1">
                        <span className="text-[10px] font-bold text-primary uppercase">
                          {item.brand}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="p-2 text-slate-500 hover:bg-slate-100 cursor-pointer"
                            title="Decrease Quantity"
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="px-3 text-xs font-bold text-slate-800">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="p-2 text-slate-500 hover:bg-slate-100 cursor-pointer"
                            title="Increase Quantity"
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Summary & Direct WhatsApp Submission */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs space-y-5">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Inquiry Summary
                  </h3>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Live Dispatch
                  </span>
                </div>

                {/* Items calculation */}
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Total Products:</span>
                    <span className="font-bold text-slate-800">
                      {cartItems.reduce(
                        (acc, curr) => acc + (curr.quantity || 1),
                        0
                      )}{" "}
                      Units
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engineering Sizing:</span>
                    <span className="text-emerald-600 font-semibold">
                      Complimentary
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Direct Desk:</span>
                    <span className="text-slate-800 font-semibold">
                      Senior UAE Engineers
                    </span>
                  </div>
                </div>

                {/* Primary Action Button: Submit Inquiry on WhatsApp */}
                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSubmitted(true)}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                  >
                    <FaWhatsapp size={19} />
                    <span>Submit Inquiry on WhatsApp</span>
                  </a>

                  {submitted && (
                    <div className="flex items-center gap-2 p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs">
                      <FaCheckCircle className="text-emerald-600 shrink-0" />
                      <span>WhatsApp chat opened with your selected items!</span>
                    </div>
                  )}

                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    <FaFileInvoice size={13} />
                    <span>Or Request Official RFQ Document</span>
                  </button>

                  <button
                    onClick={handleBackToProducts}
                    className="w-full text-center text-xs text-slate-500 hover:text-primary transition-colors cursor-pointer pt-1"
                  >
                    + Add More Products to List
                  </button>
                </div>
              </div>

              <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-100 text-xs text-blue-900 leading-relaxed font-normal">
                Need custom motor ratings? Click Submit Inquiry on WhatsApp and specify motor
                power (kW/HP) or ambient voltage in your chat.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
