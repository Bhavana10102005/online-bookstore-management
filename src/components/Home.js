import React from "react";

export default function Home() {
  return (
    <div className="container">
      <h2 style={{ color: '#ff69b4', textAlign: "center", marginBottom: "20px" }}>Welcome to Book Nest!</h2>
      
      <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
        <strong>Book Nest</strong> is your friendly online bookstore, dedicated to connecting readers with the stories and knowledge they love. 
        Whether you're looking for thrilling fiction, inspiring motivational books, classic fairy tales, or practical study guides, 
        we have carefully curated selections for every kind of reader.
      </p>

      <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
        Our mission is simple: <strong>make reading accessible, enjoyable, and exciting</strong> for everyone. We believe that books have the power 
        to spark imagination, nurture creativity, and inspire personal growth.
      </p>

      <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
        At Book Nest, you can easily browse through categories, discover new favorites, and create your own collection by adding books to your cart. 
        We aim to provide a seamless and visually appealing experience, so your focus can stay on exploring and enjoying great books.
      </p>

      <p style={{ lineHeight: "1.6" }}>
        Join our community of book lovers and let <strong>Book Nest</strong> be your cozy corner of the literary world—where every page opens a new adventure.
      </p>
    </div>
  );
}
