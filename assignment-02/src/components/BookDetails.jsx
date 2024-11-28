// Step 03: Create Functional Components

import React from "react";

const BookDetails = ({ books }) => {
  const style = {
    color: {
      color: "chocolate",
      fontWeight: "bold",
    },
  };

  return (
    <div>
      <h3 style={{ color: "yellow" }}>
        {" "}
        → Iterates over an array of books and prints their details (title,
        author, rating, genre).
      </h3>
      {books.map(({ title, author, rating, genre }, index) => (
        <p>
          {index + 1}. <strong style={style.color}>Title: </strong>
          {title}, <strong style={style.color}>Author: </strong> {author}, <strong>Rating: </strong>
          {rating}, <strong style={style.color}>Genre: </strong>
          {genre}
        </p>
      ))}
    </div>
  );
};

export default BookDetails;
