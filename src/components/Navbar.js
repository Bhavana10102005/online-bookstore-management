import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Book Nest</h2>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}
