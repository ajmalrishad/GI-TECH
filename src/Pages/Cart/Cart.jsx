import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaTrash, FaShoppingCart, FaArrowLeft, FaFileInvoice, FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
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
            onClick={() => navigate("/#products")}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
          >
            <FaArrowLeft size={10} /> Back to Products
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-2xs space-y-4">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <FaShoppingCart size={28} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">
              Your inquiry list is empty
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Explore our range of Invertek VFDs, Aucom soft starters, KEB motion
              controllers, Kendrion brakes, and Vogel lubrication systems.
            </p>
            <div className="pt-2">
              <Link
                to="/#products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primaryHover text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm"
              >
                Browse Products
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
                <div className="p-4 sm:p-5 bg-slate-100/60 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-wider">
                  <span>Selected Products ({cartItems.length})</span>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 font-medium lowercase"
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
                        className="w-20 h-20 object-contain p-2 bg-slate-50 rounded-xl border border-slate-200/80 shrink-0"
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
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="p-2 text-slate-500 hover:bg-slate-100"
                            title="Decrease Quantity"
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="px-3 text-xs font-bold text-slate-800">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="p-2 text-slate-500 hover:bg-slate-100"
                            title="Increase Quantity"
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-slate-400 hover:text-red-500 transition-colors"
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

            {/* Inquiry Summary Side Panel */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Inquiry Summary
                </h3>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Total Items:</span>
                    <span className="font-bold text-slate-800">
                      {cartItems.reduce((acc, curr) => acc + (curr.quantity || 1), 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engineering Review:</span>
                    <span className="text-emerald-600 font-medium">Included (Complimentary)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Datasheet Package:</span>
                    <span className="text-emerald-600 font-medium">PDF Generated</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primaryHover text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm"
                  >
                    <FaFileInvoice size={14} />
                    <span>Submit for Official Quote</span>
                  </button>

                  <button
                    onClick={() => navigate("/#products")}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition-colors"
                  >
                    <span>Continue Browsing</span>
                  </button>
                </div>
              </div>

              <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-blue-900 leading-relaxed">
                <strong>Need custom sizing or power ratings?</strong> Include your
                motor horsepower/kW and ambient voltage in the quote request.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
