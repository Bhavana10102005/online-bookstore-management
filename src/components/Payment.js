import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [coupon, setCoupon] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    const sum = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  }, []);

  const applyCoupon = () => {
    // Simple demo: flat 10% off if coupon is "BOOK10"
    if (coupon === "BOOK10") {
      setTotal(prev => Math.round(prev * 0.9));
      alert("Coupon applied! 10% discount added.");
    } else {
      alert("Invalid coupon code.");
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!cardNumber || !name || !expiry || !cvv) {
      alert("Please fill in all payment details!");
      return;
    }
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`Payment Successful!\nTotal Paid: ₹${total}\nThank you for your purchase.`);
    localStorage.removeItem("cart");
    navigate("/home");
  };

  return (
    <div className="container">
      <h2 style={{ color: "#ff69b4", textAlign: "center", marginBottom: "20px" }}>Payment</h2>
      
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#ff69b4" }}>Your cart is empty!</p>
      ) : (
        <>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>Total Amount: ₹{total}</p>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginRight: "10px" }}
            />
            <button type="button" className="button" onClick={applyCoupon}>Apply</button>
          </div>

          <form
            onSubmit={handlePayment}
            style={{ maxWidth: "400px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            <input
              type="text"
              placeholder="Name on Card"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", flex: 1 }}
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", flex: 1 }}
              />
            </div>
            <button type="submit" className="button">Pay Now</button>
          </form>
        </>
      )}
    </div>
  );
}
