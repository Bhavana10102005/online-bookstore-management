import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    const sum = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  }, []);

  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    setTotal(updated.reduce((acc, item) => acc + item.price, 0));
  };

  return (
    <div className="container">
      <h2 style={{ color: "#ff69b4", textAlign: "center", marginBottom: "20px" }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#ff69b4" }}>Cart is empty!</p>
      ) : (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px" }}>Book</th>
                <th style={{ textAlign: "center", padding: "10px" }}>Price</th>
                <th style={{ textAlign: "center", padding: "10px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((book, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
                  <td style={{ padding: "10px" }}>{book.title}</td>
                  <td style={{ textAlign: "center" }}>₹{book.price}</td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      className="button"
                      onClick={() => removeItem(index)}
                      style={{ backgroundColor: "#ff4757" }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ textAlign: "right", marginBottom: "20px" }}>Total: ₹{total}</h3>
          <div style={{ textAlign: "center" }}>
            <button
              className="button"
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}
