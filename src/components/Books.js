
import React, { useState } from "react";
import booksData from "../data/books.json";
import BookCard from "./BookCard";

export default function Books() {
  const [category, setCategory] = useState("Fiction");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (book) => {
    const updated = [...cart, book];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    alert("Book added to cart!");
  };

  const categories = Object.keys(booksData);

  // Filter books based on selected category and search text
  const filteredBooks = booksData[category].filter((book) => {
    const searchText = search.toLowerCase();

    return (
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="container">
      <h2 style={{ color: "#ff69b4" }}>Explore Books</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search books by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "90%",
          padding: "12px",
          marginBottom: "20px",
          border: "2px solid #ff69b4",
          borderRadius: "8px",
          fontSize: "16px"
        }}
      />

      {/* Category buttons */}
      <div style={{ marginBottom: "15px" }}>
        {categories.map((c) => (
          <button
            key={c}
            className="category-btn"
            style={{
              background: category === c ? "#ff69b4" : "#fff",
              color: category === c ? "#fff" : "#000"
            }}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p>
        Showing <strong>{filteredBooks.length}</strong> books in {category}
      </p>

      {/* Book display */}
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, i) => (
            <BookCard key={i} book={book} addToCart={addToCart} />
          ))
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>
            No books found. Try another search or category.
          </p>
        )}
      </div>
    </div>
  );
}