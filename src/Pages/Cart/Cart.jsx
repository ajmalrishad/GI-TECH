import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load cart from localStorage on component mount and when storage changes
  const loadCart = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      console.log('Loaded cart:', savedCart);
      setCartItems(savedCart);
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  useEffect(() => {
    loadCart();

    // Listen for storage changes from other tabs/windows
    window.addEventListener('storage', loadCart);
    
    return () => {
      window.removeEventListener('storage', loadCart);
    };
  }, []);

  // Reload cart when component comes into focus
  useEffect(() => {
    const handleFocus = () => {
      loadCart();
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  // Increase item quantity
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Decrease item quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#f1f3f4", 
      paddingTop: "120px", 
      paddingBottom: "40px" 
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ 
            fontSize: "28px", 
            fontWeight: "bold", 
            color: "#0f1111", 
            margin: "0 0 10px 0" 
          }}>
            Shopping Cart
          </h1>
          <p style={{ 
            color: "#565959", 
            fontSize: "14px", 
            margin: 0 
          }}>
            {cartItems.length === 0 ? "Your cart is empty" : `${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart`}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div style={{ 
            backgroundColor: "white", 
            borderRadius: "8px", 
            padding: "60px 40px", 
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>🛒</div>
            <h2 style={{ 
              fontSize: "24px", 
              color: "#0f1111", 
              margin: "0 0 10px 0" 
            }}>
              Your cart is empty
            </h2>
            <p style={{ 
              color: "#565959", 
              margin: "0 0 30px 0", 
              fontSize: "16px" 
            }}>
              Add items to your cart to see them here
            </p>
            <button 
              onClick={() => navigate('/')}
              style={{ 
                background: "#ffd814", 
                color: "#0f1111", 
                padding: "12px 24px", 
                borderRadius: "8px", 
                cursor: "pointer", 
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "20px", flexDirection: window.innerWidth < 768 ? "column" : "row" }}>
            {/* Cart Items */}
            <div style={{ flex: 1 }}>
              {cartItems.map((item, index) => (
                <div key={item.id} style={{ 
                  backgroundColor: "white", 
                  borderRadius: "8px", 
                  marginBottom: "15px",
                  padding: "20px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  border: "1px solid #e7e7e7"
                }}>
                  <div style={{ display: "flex", gap: "20px" }}>
                    {/* Product Image */}
                    <div style={{ flexShrink: 0 }}>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        style={{ 
                          width: "120px", 
                          height: "120px", 
                          objectFit: "contain", 
                          background: "#fff", 
                          borderRadius: "4px",
                          border: "1px solid #e7e7e7"
                        }} 
                      />
                    </div>

                    {/* Product Details */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontSize: "18px", 
                        fontWeight: "bold", 
                        color: "#0f1111", 
                        margin: "0 0 8px 0",
                        lineHeight: "1.3"
                      }}>
                        {item.title}
                      </h3>
                      <p style={{ 
                        color: "#565959", 
                        fontSize: "14px", 
                        margin: "0 0 12px 0" 
                      }}>
                        Brand: {item.brand}
                      </p>
                      <p style={{ 
                        color: "#565959", 
                        fontSize: "14px", 
                        margin: "0 0 15px 0",
                        lineHeight: "1.4"
                      }}>
                        {item.description}
                      </p>

                      {/* Quantity and Remove */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                          {/* Quantity Controls */}
                          <div style={{ display: "flex", alignItems: "center", border: "1px solid #d5d9d9", borderRadius: "8px" }}>
                            <button 
                              onClick={() => decreaseQuantity(item.id)} 
                              style={{ 
                                padding: "8px 12px", 
                                cursor: "pointer", 
                                background: "transparent", 
                                border: "none",
                                color: "#007185",
                                fontSize: "16px",
                                fontWeight: "bold"
                              }}
                            >
                              −
                            </button>
                            <span style={{ 
                              padding: "8px 16px", 
                              fontWeight: "bold", 
                              minWidth: "40px", 
                              textAlign: "center",
                              background: "#f7f8f8"
                            }}>
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => increaseQuantity(item.id)} 
                              style={{ 
                                padding: "8px 12px", 
                                cursor: "pointer", 
                                background: "transparent", 
                                border: "none",
                                color: "#007185",
                                fontSize: "16px",
                                fontWeight: "bold"
                              }}
                            >
                              +
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button 
                            onClick={() => removeFromCart(item.id)} 
                            style={{ 
                              background: "transparent", 
                              color: "#007185", 
                              padding: "8px 0", 
                              cursor: "pointer", 
                              border: "none", 
                              fontSize: "14px",
                              textDecoration: "underline"
                            }}
                          >
                            Delete
                          </button>
                        </div>

                        {/* Price */}
                        <div style={{ textAlign: "right" }}>
                          <p style={{ 
                            fontSize: "18px", 
                            fontWeight: "bold", 
                            color: "#0f1111", 
                            margin: 0 
                          }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p style={{ 
                              fontSize: "12px", 
                              color: "#565959", 
                              margin: "2px 0 0 0" 
                            }}>
                              (${item.price.toFixed(2)} each)
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div style={{ width: window.innerWidth < 768 ? "100%" : "300px", flexShrink: 0 }}>
              <div style={{ 
                backgroundColor: "white", 
                borderRadius: "8px", 
                padding: "20px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                border: "1px solid #e7e7e7",
                position: "sticky",
                top: "140px"
              }}>
                <h3 style={{ 
                  fontSize: "18px", 
                  fontWeight: "bold", 
                  color: "#0f1111", 
                  margin: "0 0 20px 0" 
                }}>
                  Order Summary
                </h3>

                <div style={{ borderBottom: "1px solid #e7e7e7", paddingBottom: "15px", marginBottom: "15px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ color: "#565959" }}>Items ({cartItems.length}):</span>
                    <span style={{ fontWeight: "bold" }}>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ color: "#565959" }}>Shipping:</span>
                    <span style={{ color: "#007600", fontWeight: "bold" }}>FREE</span>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", color: "#0f1111" }}>Order Total:</span>
                  <span style={{ fontSize: "18px", fontWeight: "bold", color: "#0f1111" }}>${totalPrice.toFixed(2)}</span>
                </div>

                <button 
                  style={{ 
                    width: "100%",
                    background: "#ffd814", 
                    color: "#0f1111", 
                    padding: "14px", 
                    borderRadius: "8px", 
                    cursor: "pointer", 
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    marginBottom: "12px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                  }}
                >
                  Proceed to Checkout
                </button>

                <button 
                  onClick={() => navigate('/')}
                  style={{ 
                    width: "100%",
                    background: "transparent", 
                    color: "#007185", 
                    padding: "12px", 
                    borderRadius: "8px", 
                    cursor: "pointer", 
                    fontSize: "14px",
                    border: "1px solid #007185",
                    fontWeight: "bold"
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
