import React from "react";

export default function BookCard({ book, addToCart }) {
  return (
    <div className="book-card">
      <img 
        src={book.image} 
        alt={book.title} 
        onError={(e)=>{e.target.onerror=null; e.target.src="https://via.placeholder.com/200x250?text=No+Image"}} 
      />
      <h3 style={{color:'#ff69b4'}}>{book.title}</h3>
      <p>₹ {book.price}</p>
      <p className="rating">⭐ {book.rating}</p>
      <button className="button" onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
}
