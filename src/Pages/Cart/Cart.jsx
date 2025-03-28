import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Industrial Automation Panel", price: 500, quantity: 1, image: "https://via.placeholder.com/100" },
    { id: 2, name: "SCADA System", price: 750, quantity: 1, image: "https://via.placeholder.com/100" },
  ]);

  // Increase item quantity
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Decrease item quantity
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    ));
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: "800px", margin: "80px auto", padding: "20px", background: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>Your cart is empty.</p>
      ) : (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#ddd", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Product</th>
                <th style={{ padding: "10px" }}>Price</th>
                <th style={{ padding: "10px" }}>Quantity</th>
                <th style={{ padding: "10px" }}>Total</th>
                <th style={{ padding: "10px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src={item.image} alt={item.name} style={{ width: "50px", borderRadius: "5px" }} />
                    {item.name}
                  </td>
                  <td style={{ padding: "10px" }}>${item.price}</td>
                  <td style={{ padding: "10px" }}>
                    <button onClick={() => decreaseQuantity(item.id)} style={{ padding: "5px 10px", cursor: "pointer" }}>-</button>
                    <span style={{ margin: "0 10px", fontWeight: "bold" }}>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} style={{ padding: "5px 10px", cursor: "pointer" }}>+</button>
                  </td>
                  <td style={{ padding: "10px" }}>${item.price * item.quantity}</td>
                  <td style={{ padding: "10px" }}>
                    <button onClick={() => removeFromCart(item.id)} style={{ background: "red", color: "white", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <h3>Total: <span style={{ fontSize: "22px", fontWeight: "bold", color: "#007bff" }}>${totalPrice}</span></h3>
            <button style={{ background: "green", color: "white", padding: "10px 20px", borderRadius: "5px", fontSize: "16px", cursor: "pointer", marginTop: "10px" }}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
